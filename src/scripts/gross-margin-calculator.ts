// src/scripts/gross-margin-calculator.ts
import { validateGrossMarginInput, calculateGrossMargin, formatCurrency, copyGrossMarginSummary } from "../utils/gross-margin";
import { setValue, copyToClipboard } from "../utils/calculator";

const revenueInput = document.getElementById("revenue") as HTMLInputElement;
const cogsInput = document.getElementById("cogs") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { revenue: number; cogs: number } | null = null;
let lastResult: ReturnType<typeof calculateGrossMargin> | null = null;

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
    cogs: parseFloat(cogsInput.value),
  };

  const error = validateGrossMarginInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateGrossMargin(input);

  setValue("grossProfitResult", formatCurrency(result.grossProfit));
  setValue("grossMarginResult", `${result.grossMarginPercent.toFixed(1)}%`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  revenueInput.value = "";
  cogsInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyGrossMarginSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);