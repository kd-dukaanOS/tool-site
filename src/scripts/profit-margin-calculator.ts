// src/scripts/profit-margin-calculator.ts
import { validateProfitMarginInput, calculateProfitMargin, copyProfitMarginSummary } from "../utils/profit-margin";
import { setValue, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();

const revenueInput = document.getElementById("revenue") as HTMLInputElement;
const costInput = document.getElementById("cost") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { revenue: number; cost: number } | null = null;
let lastResult: ReturnType<typeof calculateProfitMargin> | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}
function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function calculate() {
  clearError();

  const input = {
    revenue: parseFloat(revenueInput.value),
    cost: parseFloat(costInput.value),
  };

  const error = validateProfitMarginInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateProfitMargin(input);

  renderResults(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateProfitMargin>) {
  setValue("profitResult", formatCurrency(result.profit, currentCurrency));
  setValue("marginResult", `${result.marginPercent.toFixed(1)}%`);
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult) renderResults(lastResult);
});

function reset() {
  revenueInput.value = "";
  costInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyProfitMarginSummary(lastInput, lastResult, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);