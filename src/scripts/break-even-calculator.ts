import {
  calculateBreakEven,
  validateBreakEvenInput,
  copyBreakEvenSummary,
  type BreakEvenInput,
} from "../utils/break-even";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();




const fixedCostsInput = document.getElementById("fixedCosts") as HTMLInputElement;
const variableCostInput = document.getElementById("variableCostPerUnit") as HTMLInputElement;
const priceInput = document.getElementById("sellingPricePerUnit") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BreakEvenInput | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function renderResults(result: ReturnType<typeof calculateBreakEven>) {
  setValue("breakEvenUnitsResult", result.breakEvenUnits.toLocaleString());
  setValue("breakEvenRevenueResult", formatCurrency(result.breakEvenRevenue, currentCurrency));
  setValue("contributionMarginResult", formatCurrency(result.contributionMargin, currentCurrency));
  setValue("contributionRatioResult", `${result.contributionMarginRatio}%`);
  setSubtitle("breakEvenUnitsResult", "units to sell");
}

function calculate() {
  clearError();

  const input: BreakEvenInput = {
    fixedCosts: Number(fixedCostsInput.value),
    variableCostPerUnit: Number(variableCostInput.value),
    sellingPricePerUnit: Number(priceInput.value),
  };

  if (!input.fixedCosts || !input.sellingPricePerUnit) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateBreakEvenInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBreakEven(input);

  renderResults(result);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

let lastResult: ReturnType<typeof calculateBreakEven> | null = null;

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastInput) {
    lastResult = calculateBreakEven(lastInput);
    renderResults(lastResult);
  }
});

function resetCalculator() {
  fixedCostsInput.value = "";
  variableCostInput.value = "";
  priceInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBreakEven(lastInput);
  copyToClipboard(copyBreakEvenSummary(lastInput, result, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
