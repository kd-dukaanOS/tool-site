import { validateMarkupInput, calculateMarkup, formatCurrency, copyMarkupSummary } from "../utils/markup";

const costInput = document.getElementById("cost") as HTMLInputElement;
const markupPercentInput = document.getElementById("markupPercent") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

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

  setText("salePriceResult", formatCurrency(result.salePrice));
  setText("profitResult", formatCurrency(result.profit));
  setText("marginResult", `${result.marginPercent.toFixed(1)}%`);

  emptyState.hidden = true;
  resultsContainer.hidden = false;

  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(copyMarkupSummary(input, result));
  }, { once: true });
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