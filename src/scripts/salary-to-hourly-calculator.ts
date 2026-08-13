// src/scripts/salary-to-hourly-calculator.ts
import { validateSalaryToHourlyInput, calculateSalaryToHourly, formatCurrency, copySalaryToHourlySummary } from "../utils/salary-to-hourly";
import { setValue, copyToClipboard } from "../utils/calculator";

const annualSalaryInput = document.getElementById("annualSalary") as HTMLInputElement;
const hoursPerWeekInput = document.getElementById("hoursPerWeek") as HTMLInputElement;
const weeksPerYearInput = document.getElementById("weeksPerYear") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { annualSalary: number; hoursPerWeek: number; weeksPerYear: number } | null = null;
let lastResult: ReturnType<typeof calculateSalaryToHourly> | null = null;

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
    annualSalary: parseFloat(annualSalaryInput.value),
    hoursPerWeek: parseFloat(hoursPerWeekInput.value) || 40,
    weeksPerYear: parseFloat(weeksPerYearInput.value) || 52,
  };

  const error = validateSalaryToHourlyInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateSalaryToHourly(input);

  setValue("hourlyRateResult", formatCurrency(result.hourlyRate));
  setValue("dailyRateResult", formatCurrency(result.dailyRate));
  setValue("weeklyRateResult", formatCurrency(result.weeklyRate));
  setValue("monthlyRateResult", formatCurrency(result.monthlyRate));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  annualSalaryInput.value = "";
  hoursPerWeekInput.value = "";
  weeksPerYearInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copySalaryToHourlySummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);