import { calculateTraditionalIRA, validateIRAInputs } from "../utils/traditional-ira";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}
function strVal(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "single";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const numericFieldIds = ["magi", "age", "contribution", "marginalTaxRate"];
const selectFieldIds = ["taxYear", "filingStatus", "coverage"];

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
  const [magi, age, contribution, marginalTaxRate] = numericFieldIds.map(val);
  const taxYear = parseInt(strVal("taxYear"), 10) || 2025;
  const filingStatus = strVal("filingStatus") as any;
  const coverage = strVal("coverage") as any;

  const validationError = validateIRAInputs(magi, contribution, age);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateTraditionalIRA(magi, filingStatus, coverage, age, contribution, marginalTaxRate, taxYear);

  setValue("deductibleResult", fmtCurrency(result.deductibleAmount));
  setValue("nondeductibleResult", fmtCurrency(result.nondeductibleAmount));
  setValue("taxSavedResult", fmtCurrency(result.taxSaved));
  setValue("limitResult", fmtCurrency(result.contributionLimit));
  setSubtitle("deductibleResult", result.deductionStatus === "full-no-coverage" ? "Fully deductible (no coverage)" : result.deductionStatus === "full" ? "Fully deductible" : result.deductionStatus === "none" ? "Not deductible" : "Partially deductible");

  lastSummary = `
Traditional IRA Deduction Summary — Tax Year ${taxYear}

Contribution: ${fmtCurrency(result.maxAllowedContribution)}
Deductible Amount: ${fmtCurrency(result.deductibleAmount)}
Nondeductible Amount (Form 8606): ${fmtCurrency(result.nondeductibleAmount)}
Estimated Tax Saved: ${fmtCurrency(result.taxSaved)}
Annual Contribution Limit: ${fmtCurrency(result.contributionLimit)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numericFieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
  selectFieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLSelectElement;
    if (el) el.selectedIndex = 0;
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