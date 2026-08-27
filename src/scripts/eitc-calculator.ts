import { calculateEITC, validateEITCInputs } from "../utils/eitc";
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

const numericFieldIds = ["earnedIncome", "agi", "qualifyingChildren", "investmentIncome"];
const selectFieldIds = ["filingStatus", "taxYear"];

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

  const [earnedIncome, agi, qualifyingChildren, investmentIncome] = numericFieldIds.map(val);
  const filingStatus = strVal("filingStatus") as any;
  const taxYear = parseInt(strVal("taxYear"), 10) || 2025;

  const validationError = validateEITCInputs(earnedIncome, agi || earnedIncome);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEITC(earnedIncome, agi || earnedIncome, filingStatus, qualifyingChildren, investmentIncome, taxYear);

  setValue("eitcResult", fmtCurrency(result.credit));
  setValue("eligibleResult", result.eligible ? "Eligible" : "Not Eligible");
  setValue("maxCreditResult", fmtCurrency(result.maxCredit));
  setValue("phaseoutRateResult", `${(result.phaseoutRate * 100).toFixed(2)}%`);
  setSubtitle("eitcResult", `Tax Year ${taxYear}`);
  if (result.reason) setSubtitle("eligibleResult", result.reason);

  lastSummary = `
Earned Income Tax Credit (EITC) Summary — Tax Year ${taxYear}

Estimated EITC: ${fmtCurrency(result.credit)}
Status: ${result.eligible ? "Eligible" : "Not Eligible"}
Maximum Credit for Family Size: ${fmtCurrency(result.maxCredit)}
${result.reason ? `Note: ${result.reason}` : ""}
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
