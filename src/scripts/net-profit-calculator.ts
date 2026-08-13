// src/scripts/net-profit-calculator.ts
import { validateNetProfitInput, calculateNetProfit, formatCurrency, copyNetProfitSummary } from "../utils/net-profit";
import { setValue, copyToClipboard } from "../utils/calculator";

const revenueInput = document.getElementById("revenue") as HTMLInputElement;
const totalExpensesInput = document.getElementById("totalExpenses") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { revenue: number; totalExpenses: number } | null = null;
let lastResult: ReturnType<typeof calculateNetProfit> | null = null;

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
    totalExpenses: parseFloat(totalExpensesInput.value),
  };

  const error = validateNetProfitInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateNetProfit(input);

  setValue("netProfitResult", formatCurrency(result.netProfit));
  setValue("netMarginResult", `${result.netMarginPercent.toFixed(1)}%`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  revenueInput.value = "";
  totalExpensesInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyNetProfitSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);