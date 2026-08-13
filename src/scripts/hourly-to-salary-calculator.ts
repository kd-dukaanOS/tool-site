// src/scripts/hourly-to-salary-calculator.ts
import { validateHourlyToSalaryInput, calculateHourlyToSalary, formatCurrency, copyHourlyToSalarySummary } from "../utils/hourly-to-salary";
import { setValue, copyToClipboard } from "../utils/calculator";

const hourlyRateInput = document.getElementById("hourlyRate") as HTMLInputElement;
const hoursPerWeekInput = document.getElementById("hoursPerWeek") as HTMLInputElement;
const weeksPerYearInput = document.getElementById("weeksPerYear") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { hourlyRate: number; hoursPerWeek: number; weeksPerYear: number } | null = null;
let lastResult: ReturnType<typeof calculateHourlyToSalary> | null = null;

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
    hoursPerWeek: parseFloat(hoursPerWeekInput.value) || 40,
    weeksPerYear: parseFloat(weeksPerYearInput.value) || 52,
  };

  const error = validateHourlyToSalaryInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateHourlyToSalary(input);

  setValue("annualSalaryResult", formatCurrency(result.annualSalary));
  setValue("monthlySalaryResult", formatCurrency(result.monthlySalary));
  setValue("weeklySalaryResult", formatCurrency(result.weeklySalary));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  hourlyRateInput.value = "";
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
  copyToClipboard(copyHourlyToSalarySummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);