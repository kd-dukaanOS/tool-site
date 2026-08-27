import { calculateEmergencyFund, validateEmergencyFundInputs } from "../utils/emergency-fund";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const fieldIds = ["monthlyExpenses", "currentSavings", "targetMonths", "monthlySavingsCapacity"];

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

  const [monthlyExpenses, currentSavings, targetMonths, monthlySavingsCapacity] = fieldIds.map(val);

  const validationError = validateEmergencyFundInputs(monthlyExpenses, targetMonths);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEmergencyFund(monthlyExpenses, currentSavings, targetMonths, monthlySavingsCapacity);

  setValue("targetAmountResult", fmtCurrency(result.targetAmount));
  setValue("progressResult", `${result.progressPercent.toFixed(0)}%`);
  setValue("remainingResult", fmtCurrency(result.remainingAmount));
  setValue(
    "monthsToGoalResult",
    result.monthsToGoal === null ? "—" : result.monthsToGoal === 0 ? "Goal reached" : `${result.monthsToGoal} months`
  );
  setSubtitle("targetAmountResult", `${targetMonths} months of expenses`);

  lastSummary = `
Emergency Fund Summary

Target Amount (${targetMonths} months): ${fmtCurrency(result.targetAmount)}
Current Progress: ${result.progressPercent.toFixed(0)}%
Remaining to Save: ${fmtCurrency(result.remainingAmount)}
Time to Reach Goal: ${result.monthsToGoal === null ? "N/A" : result.monthsToGoal === 0 ? "Goal reached" : `${result.monthsToGoal} months`}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  fieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
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