import { calculateRetirementIncome, validateRetirementIncomeInputs } from "../utils/retirement-income";
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

const fieldIds = [
  "currentSavings", "withdrawalRate", "annualSocialSecurity", "annualPension",
  "otherAnnualIncome", "expectedAnnualReturn", "inflationRate", "retirementYears", "birthYear",
];

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

  const [
    currentSavings, withdrawalRate, annualSocialSecurity, annualPension,
    otherAnnualIncome, expectedAnnualReturn, inflationRate, retirementYears, birthYear,
  ] = fieldIds.map(val);

  const validationError = validateRetirementIncomeInputs(currentSavings, withdrawalRate, retirementYears);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRetirementIncome(
    currentSavings, withdrawalRate, annualSocialSecurity, annualPension,
    otherAnnualIncome, expectedAnnualReturn, inflationRate, retirementYears, birthYear || 1960
  );

  setValue("monthlyIncomeResult", fmtCurrency(result.monthlyIncome));
  setValue("totalAnnualIncomeResult", fmtCurrency(result.totalAnnualIncome));
  setValue("rmdAgeResult", `Age ${result.rmdAge}`);
  setValue("depletionResult", result.depletionYear === null ? `Lasts ${retirementYears}+ years` : `Depletes in Year ${result.depletionYear}`);
  setSubtitle("depletionResult", result.depletionYear === null ? `Ending balance: ${fmtCurrency(result.endingBalance)}` : "Consider a lower withdrawal rate");

  lastSummary = `
Retirement Income Summary

Estimated Monthly Retirement Income: ${fmtCurrency(result.monthlyIncome)}
Estimated Annual Retirement Income: ${fmtCurrency(result.totalAnnualIncome)}
RMD Starts At: Age ${result.rmdAge}
Portfolio Outlook: ${result.depletionYear === null ? `Lasts through ${retirementYears}-year horizon` : `Depletes in Year ${result.depletionYear}`}
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