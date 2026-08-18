import {
  calculateDiscount,
  discountComparison,
  discountInsight,
  validateDiscountInputs,
  copyDiscountSummary,
  type DiscountMode,
} from "../utils/discount";

import { setValue, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();

const priceInput = document.getElementById("originalPrice") as HTMLInputElement;
const discountInput = document.getElementById("discountValue") as HTMLInputElement;
const extraInput = document.getElementById("extraPercent") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const insightBox = document.getElementById("insightBox") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement;

const modeButtons = document.querySelectorAll<HTMLButtonElement>("[data-discount-mode]");
const rateButtons = document.querySelectorAll<HTMLButtonElement>("[data-discount-rate]");

let currentMode: DiscountMode = "percentage";

let lastPrice: number | null = null;
let lastDiscount: number | null = null;
let lastExtra: number = 0;
let lastResult: ReturnType<typeof calculateDiscount> | null = null;

function inr(value: number): string {
  return formatCurrency(value, currentCurrency);
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function renderComparison(originalPrice: number) {

  const rows = discountComparison(originalPrice);

  scheduleBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.percent}%</td>
        <td>${inr(row.finalPrice)}</td>
        <td>${inr(row.youSave)}</td>
      </tr>`
    )
    .join("");
}

function calculate() {

  clearError();

  const price = parseFloat(priceInput.value);
  const discount = parseFloat(discountInput.value);
  const extra = extraInput.value ? parseFloat(extraInput.value) : 0;

  const validationError = validateDiscountInputs(price, discount, currentMode);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDiscount(price, discount, currentMode, extra);

  renderResults(result, price);

  lastPrice = price;
  lastDiscount = discount;
  lastExtra = extra;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateDiscount>, price: number) {
  setValue("finalPriceResult", inr(result.finalPrice));
  setValue("saveResult", inr(result.youSave));
  setValue("percentResult", `${result.effectivePercent}%`);

  insightBox.textContent = discountInsight(result, price, currentCurrency);
  insightBox.hidden = false;

  renderComparison(price);
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult && lastPrice !== null) renderResults(lastResult, lastPrice);
});

function resetCalculator() {

  priceInput.value = "";
  discountInput.value = "";
  extraInput.value = "";
  clearError();

  lastPrice = null;
  lastDiscount = null;
  lastExtra = 0;
  lastResult = null;

  insightBox.hidden = true;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (lastPrice === null || lastDiscount === null || !lastResult) return;
  copyToClipboard(copyDiscountSummary(lastPrice, lastDiscount, currentMode, lastExtra, lastResult, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMode = (btn.dataset.discountMode as DiscountMode) ?? "percentage";

    modeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (priceInput.value && discountInput.value) calculate();
  });
});

rateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    discountInput.value = btn.dataset.discountRate ?? "";
    if (priceInput.value) calculate();
  });
});
