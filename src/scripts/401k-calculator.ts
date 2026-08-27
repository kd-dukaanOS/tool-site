import { calculate401k, validate401kInputs } from "../utils/401k";
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
  "currentAge", "retirementAge", "currentBalance", "annualSalary",
  "contributionPercent", "employerMatchPercent", "employerMatchLimit",
  "salaryGrowthRate", "expectedReturn",
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
    currentAge, retirementAge, currentBalance, annualSalary,
    contributionPercent, employerMatchPercent, employerMatchLimit,
    salaryGrowthRate, expectedReturn,
  ] = fieldIds.map(val);

  const validationError = validate401kInputs(currentAge, retirementAge);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculate401k(
    currentAge, retirementAge, currentBalance, annualSalary,
    contributionPercent, employerMatchPercent, employerMatchLimit,
    salaryGrowthRate, expectedReturn
  );

  setValue("projectedBalanceResult", fmtCurrency(result.projectedBalance));
  setValue("employeeContributionsResult", fmtCurrency(result.totalEmployeeContributions));
  setValue("employerMatchResult", fmtCurrency(result.totalEmployerMatch));
  setValue("totalGrowthResult", fmtCurrency(result.totalGrowth));
  setSubtitle("projectedBalanceResult", `At age ${retirementAge}`);

  lastSummary = `
401(k) Projection Summary

Projected Balance: ${fmtCurrency(result.projectedBalance)}
Your Contributions: ${fmtCurrency(result.totalEmployeeContributions)}
Employer Match: ${fmtCurrency(result.totalEmployerMatch)}
Investment Growth: ${fmtCurrency(result.totalGrowth)}
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