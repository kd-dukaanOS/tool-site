// src/scripts/freelancer-rate-calculator.ts
import { validateFreelancerRateInput, calculateFreelancerRate, formatCurrency, copyFreelancerRateSummary } from "../utils/freelancer-rate";
import { setValue, copyToClipboard } from "../utils/calculator";

const desiredAnnualIncomeInput = document.getElementById("desiredAnnualIncome") as HTMLInputElement;
const annualExpensesInput = document.getElementById("annualExpenses") as HTMLInputElement;
const billableHoursPerWeekInput = document.getElementById("billableHoursPerWeek") as HTMLInputElement;
const weeksPerYearInput = document.getElementById("weeksPerYear") as HTMLInputElement;
const taxRateInput = document.getElementById("taxRate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: {
  desiredAnnualIncome: number;
  annualExpenses: number;
  billableHoursPerWeek: number;
  weeksPerYear: number;
  taxRate: number;
} | null = null;
let lastResult: ReturnType<typeof calculateFreelancerRate> | null = null;

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
    desiredAnnualIncome: parseFloat(desiredAnnualIncomeInput.value),
    annualExpenses: parseFloat(annualExpensesInput.value) || 0,
    billableHoursPerWeek: parseFloat(billableHoursPerWeekInput.value) || 30,
    weeksPerYear: parseFloat(weeksPerYearInput.value) || 48,
    taxRate: parseFloat(taxRateInput.value) || 0,
  };

  const error = validateFreelancerRateInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateFreelancerRate(input);

  setValue("hourlyRateResult", formatCurrency(result.hourlyRate));
  setValue("dailyRateResult", formatCurrency(result.dailyRate));
  setValue("billableHoursResult", `${result.annualBillableHours} hrs/yr`);
  setValue("grossRevenueResult", formatCurrency(result.grossRevenueNeeded));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  desiredAnnualIncomeInput.value = "";
  annualExpensesInput.value = "";
  billableHoursPerWeekInput.value = "";
  weeksPerYearInput.value = "";
  taxRateInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyFreelancerRateSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);