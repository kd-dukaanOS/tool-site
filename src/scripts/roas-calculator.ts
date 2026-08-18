// src/scripts/roas-calculator.ts
import { validateRoasInput, calculateRoas, copyRoasSummary } from "../utils/roas";
import { setValue, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";

const revenueInput = document.getElementById("revenue") as HTMLInputElement;
const adSpendInput = document.getElementById("adSpend") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { revenue: number; adSpend: number } | null = null;
let lastResult: ReturnType<typeof calculateRoas> | null = null;

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
    adSpend: parseFloat(adSpendInput.value),
  };

  const error = validateRoasInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateRoas(input);
  const currency = getSavedCurrency();

  setValue("roasResult", `${result.roas.toFixed(2)}x`);
  setValue("roasPercentResult", `${result.roasPercent.toFixed(1)}%`);
  setValue("profitResult", formatCurrency(result.profit, currency));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

onCurrencyChange(() => {
  if (lastInput && lastResult) calculate();
});

function reset() {
  revenueInput.value = "";
  adSpendInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyRoasSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);