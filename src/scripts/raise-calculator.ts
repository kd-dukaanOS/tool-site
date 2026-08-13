// src/scripts/raise-calculator.ts
import { validateRaiseInput, calculateRaise, formatCurrency, copyRaiseSummary } from "../utils/raise";
import { setValue, copyToClipboard } from "../utils/calculator";

const currentSalaryInput = document.getElementById("currentSalary") as HTMLInputElement;
const raisePercentInput = document.getElementById("raisePercent") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { currentSalary: number; raisePercent: number } | null = null;
let lastResult: ReturnType<typeof calculateRaise> | null = null;

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
    currentSalary: parseFloat(currentSalaryInput.value),
    raisePercent: parseFloat(raisePercentInput.value),
  };

  const error = validateRaiseInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateRaise(input);

  setValue("newSalaryResult", formatCurrency(result.newSalary));
  setValue("raiseAmountResult", formatCurrency(result.raiseAmount));
  setValue("monthlyIncreaseResult", formatCurrency(result.monthlyIncrease));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  currentSalaryInput.value = "";
  raisePercentInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyRaiseSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);