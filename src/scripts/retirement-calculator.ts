import { calculateRetirementProjection, validateRetirementInputs } from "../utils/retirement";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const currentAgeInput = document.getElementById("currentAge") as HTMLInputElement;
const retirementAgeInput = document.getElementById("retirementAge") as HTMLInputElement;
const currentSavingsInput = document.getElementById("currentSavings") as HTMLInputElement;
const monthlyContributionInput = document.getElementById("monthlyContribution") as HTMLInputElement;
const annualReturnInput = document.getElementById("annualReturn") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const currentAge = parseFloat(currentAgeInput.value);
  const retirementAge = parseFloat(retirementAgeInput.value);
  const currentSavings = parseFloat(currentSavingsInput.value) || 0;
  const monthlyContribution = parseFloat(monthlyContributionInput.value) || 0;
  const annualReturn = parseFloat(annualReturnInput.value) || 0;

  const validationError = validateRetirementInputs(currentAge, retirementAge, monthlyContribution);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRetirementProjection(currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn);

  setValue("projectedSavingsResult", fmtCurrency(result.projectedSavings));
  setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
  setValue("totalGrowthResult", fmtCurrency(result.totalGrowth));
  setValue("monthlyIncomeResult", fmtCurrency(result.monthlyRetirementIncome));
  setSubtitle("monthlyIncomeResult", "at 4% withdrawal rate");

  lastSummary = `
Retirement Projection Summary

Projected Savings: ${fmtCurrency(result.projectedSavings)}
Total Contributions: ${fmtCurrency(result.totalContributions)}
Total Growth: ${fmtCurrency(result.totalGrowth)}
Est. Monthly Income: ${fmtCurrency(result.monthlyRetirementIncome)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  currentAgeInput.value = "";
  retirementAgeInput.value = "";
  currentSavingsInput.value = "";
  monthlyContributionInput.value = "";
  annualReturnInput.value = "";
  clearError();

  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);