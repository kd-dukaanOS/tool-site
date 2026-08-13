// src/scripts/overtime-calculator.ts
import { validateOvertimeInput, calculateOvertime, formatCurrency, copyOvertimeSummary } from "../utils/overtime";
import { setValue, copyToClipboard } from "../utils/calculator";

const hourlyRateInput = document.getElementById("hourlyRate") as HTMLInputElement;
const regularHoursInput = document.getElementById("regularHours") as HTMLInputElement;
const overtimeHoursInput = document.getElementById("overtimeHours") as HTMLInputElement;
const overtimeMultiplierInput = document.getElementById("overtimeMultiplier") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { hourlyRate: number; regularHours: number; overtimeHours: number; overtimeMultiplier: number } | null = null;
let lastResult: ReturnType<typeof calculateOvertime> | null = null;

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
    hourlyRate: parseFloat(hourlyRateInput.value),
    regularHours: parseFloat(regularHoursInput.value) || 0,
    overtimeHours: parseFloat(overtimeHoursInput.value) || 0,
    overtimeMultiplier: parseFloat(overtimeMultiplierInput.value) || 1.5,
  };

  const error = validateOvertimeInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateOvertime(input);

  setValue("totalPayResult", formatCurrency(result.totalPay));
  setValue("regularPayResult", formatCurrency(result.regularPay));
  setValue("overtimePayResult", formatCurrency(result.overtimePay));
  setValue("effectiveRateResult", `${formatCurrency(result.effectiveOvertimeRate)}/hr`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  hourlyRateInput.value = "";
  regularHoursInput.value = "";
  overtimeHoursInput.value = "";
  overtimeMultiplierInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyOvertimeSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);