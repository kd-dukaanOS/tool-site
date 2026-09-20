import { calculateSavingsGoal, validateSavingsGoalInputs } from "../utils/savings-goal";
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

const fieldIds = ["targetAmount", "currentSavings", "timeframeYears", "timeframeMonths", "annualInterestRate"];

const lang = (window as any).calcLang === "es" ? "es" : "en";

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

  const [targetAmount, currentSavings, timeframeYears, timeframeMonthsInput, annualInterestRate] = fieldIds.map(val);
  const totalMonths = timeframeYears * 12 + timeframeMonthsInput;

  const validationError = validateSavingsGoalInputs(targetAmount, totalMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSavingsGoal(targetAmount, currentSavings, totalMonths, annualInterestRate);

  if (result.alreadyOnTrack) {
    setValue("monthlySavingsResult", fmtCurrency(0));
    setValue("totalContributionsResult", fmtCurrency(0));
    setValue("interestEarnedResult", fmtCurrency(result.interestEarned));
    setValue("targetAmountResult", fmtCurrency(targetAmount));
    setSubtitle("monthlySavingsResult", lang === "es" ? "¡Ya vas por buen camino!" : "Already on track!");
  } else {
    setValue("monthlySavingsResult", fmtCurrency(result.requiredMonthlySavings));
    setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
    setValue("interestEarnedResult", fmtCurrency(result.interestEarned));
    setValue("targetAmountResult", fmtCurrency(targetAmount));
    setSubtitle("monthlySavingsResult", lang === "es" ? `En ${totalMonths} meses` : `Over ${totalMonths} months`);
  }

  lastSummary = lang === "es" ? `
Resumen de Meta de Ahorro

Monto Objetivo: ${fmtCurrency(targetAmount)}
Ahorro Mensual Necesario: ${fmtCurrency(result.requiredMonthlySavings)}
Aportes Totales: ${fmtCurrency(result.totalContributions)}
Interés Ganado: ${fmtCurrency(result.interestEarned)}
`.trim() : `
Savings Goal Summary

Target Amount: ${fmtCurrency(targetAmount)}
Required Monthly Savings: ${fmtCurrency(result.requiredMonthlySavings)}
Total Contributions: ${fmtCurrency(result.totalContributions)}
Interest Earned: ${fmtCurrency(result.interestEarned)}
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