import { calculateRothIRA, validateRothIRAInputs } from "../utils/roth-ira";
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

const fieldIds = ["currentAge", "retirementAge", "currentBalance", "annualContribution", "expectedReturn"];

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

  const [currentAge, retirementAge, currentBalance, annualContribution, expectedReturn] = fieldIds.map(val);

  const validationError = validateRothIRAInputs(currentAge, retirementAge, annualContribution);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRothIRA(currentAge, retirementAge, currentBalance, annualContribution, expectedReturn);

  setValue("projectedBalanceResult", fmtCurrency(result.projectedBalance));
  setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
  setValue("investmentGrowthResult", fmtCurrency(result.investmentGrowth));
  setValue("yearsInvestedResult", `${result.yearsInvested} years`);
  setSubtitle("projectedBalanceResult", "Tax-free at withdrawal");

  lastSummary = `
Roth IRA Projection Summary

Projected Balance: ${fmtCurrency(result.projectedBalance)}
Total Contributions: ${fmtCurrency(result.totalContributions)}
Investment Growth: ${fmtCurrency(result.investmentGrowth)}
Years Invested: ${result.yearsInvested}
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