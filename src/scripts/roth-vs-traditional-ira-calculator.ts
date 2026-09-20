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
  const [magi, age, annualContribution, currentTaxRate, retirementTaxRate, annualReturnRate, yearsToGrow] = numericFieldIds.map(val);
  const taxYear = parseInt(strVal("taxYear"), 10) || 2025;
  const filingStatus = strVal("filingStatus") as any;

  const validationError = validateRothVsTraditionalInputs(magi, annualContribution, yearsToGrow, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRothVsTraditional(magi, filingStatus, age, annualContribution, currentTaxRate, retirementTaxRate, annualReturnRate, yearsToGrow, taxYear);

  const betterOptionText = result.betterOption === "roth" ? (lang === "es" ? "Roth IRA" : "Roth IRA") : (lang === "es" ? "Traditional IRA" : "Traditional IRA");
  const eligibilityText = result.rothEligibility === "full" ? (lang === "es" ? "Totalmente Elegible" : "Fully Eligible") : result.rothEligibility === "partial" ? (lang === "es" ? "Parcialmente Elegible" : "Partially Eligible") : (lang === "es" ? "No Elegible" : "Not Eligible");

  setValue("betterOptionResult", betterOptionText);
  setValue("rothFVResult", fmtCurrency(result.rothFV));
  setValue("traditionalFVResult", fmtCurrency(result.traditionalFV));
  setValue("rothEligibilityResult", eligibilityText);
  setSubtitle("betterOptionResult", lang === "es" ? `Por ${fmtCurrency(result.difference)}` : `By ${fmtCurrency(result.difference)}`);

  lastSummary = lang === "es" ? `
Resumen Roth vs Traditional IRA — Año Fiscal ${taxYear}

Mejor Opción: ${betterOptionText}
Valor Después de Impuestos (Roth): ${fmtCurrency(result.rothFV)}
Valor Después de Impuestos (Traditional): ${fmtCurrency(result.traditionalFV)}
Elegibilidad Roth: ${eligibilityText}
`.trim() : `
Roth vs Traditional IRA Summary — Tax Year ${taxYear}

Better Option: ${betterOptionText}
After-Tax Value if Roth: ${fmtCurrency(result.rothFV)}
After-Tax Value if Traditional: ${fmtCurrency(result.traditionalFV)}
Roth Eligibility: ${eligibilityText}
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