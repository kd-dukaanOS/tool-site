import { calculateRothVsTraditional, validateRothVsTraditionalInputs } from "../utils/roth-vs-traditional-ira";
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

const numericFieldIds = ["magi", "age", "annualContribution", "currentTaxRate", "retirementTaxRate", "annualReturnRate", "yearsToGrow"];
const selectFieldIds = ["taxYear", "filingStatus"];

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
  const [magi, age, annualContribution, currentTaxRate, retirementTaxRate, annualReturnRate, yearsToGrow] = numericFieldIds.map(val);
  const taxYear = parseInt(strVal("taxYear"), 10) || 2025;
  const filingStatus = strVal("filingStatus") as any;

  const validationError = validateRothVsTraditionalInputs(magi, annualContribution, yearsToGrow);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRothVsTraditional(magi, filingStatus, age, annualContribution, currentTaxRate, retirementTaxRate, annualReturnRate, yearsToGrow, taxYear);

  setValue("betterOptionResult", result.betterOption === "roth" ? "Roth IRA" : "Traditional IRA");
  setValue("rothFVResult", fmtCurrency(result.rothFV));
  setValue("traditionalFVResult", fmtCurrency(result.traditionalFV));
  setValue("rothEligibilityResult", result.rothEligibility === "full" ? "Fully Eligible" : result.rothEligibility === "partial" ? "Partially Eligible" : "Not Eligible");
  setSubtitle("betterOptionResult", `By ${fmtCurrency(result.difference)}`);

  lastSummary = `
Roth vs Traditional IRA Summary — Tax Year ${taxYear}

Better Option: ${result.betterOption === "roth" ? "Roth IRA" : "Traditional IRA"}
After-Tax Value if Roth: ${fmtCurrency(result.rothFV)}
After-Tax Value if Traditional: ${fmtCurrency(result.traditionalFV)}
Roth Eligibility: ${result.rothEligibility === "full" ? "Fully Eligible" : result.rothEligibility === "partial" ? "Partially Eligible" : "Not Eligible"}
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