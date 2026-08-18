import { validateMarkupInput, calculateMarkup, copyMarkupSummary } from "../utils/markup";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";

const costInput = document.getElementById("cost") as HTMLInputElement;
const markupPercentInput = document.getElementById("markupPercent") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { cost: number; markupPercent: number } | null = null;
let lastResult: ReturnType<typeof calculateMarkup> | null = null;

function setText(id: string, value: string) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

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
    cost: parseFloat(costInput.value),
    markupPercent: parseFloat(markupPercentInput.value),
  };

  const error = validateMarkupInput(input);
  if (error) {
    showError(error);
    return;
  }

   const result = calculateMarkup(input);
  const currency = getSavedCurrency();

  setText("salePriceResult", formatCurrency(result.salePrice, currency));
  setText("profitResult", formatCurrency(result.profit, currency));
  setText("marginResult", `${result.marginPercent.toFixed(1)}%`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  navigator.clipboard.writeText(copyMarkupSummary(lastInput, lastResult));
}

function reset() {
  costInput.value = "";
  markupPercentInput.value = "";
  clearError();
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);

onCurrencyChange(() => {
  if (lastInput && lastResult) calculate();
});