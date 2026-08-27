import { calculateFutureValue, validateFutureValueInputs } from "../utils/future-value";
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

const fieldIds = ["presentValue", "monthlyContribution", "annualReturn", "years", "compoundingFrequency"];

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

  const [presentValue, monthlyContribution, annualReturn, years, compoundingFrequency] = fieldIds.map(val);

  const validationError = validateFutureValueInputs(presentValue, years, annualReturn);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateFutureValue(presentValue, monthlyContribution, annualReturn, years, compoundingFrequency || 12);

  setValue("futureValueResult", fmtCurrency(result.futureValue));
  setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
  setValue("investmentGrowthResult", fmtCurrency(result.investmentGrowth));
  setValue("yearsInvestedResult", `${result.yearsInvested} years`);
  setSubtitle("futureValueResult", `Over ${result.yearsInvested} years`);

  lastSummary = `
Future Value Projection Summary

Future Value: ${fmtCurrency(result.futureValue)}
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