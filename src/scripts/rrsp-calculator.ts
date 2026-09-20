import { calculateRRSP, validateRRSPInputs } from "../utils/rrsp";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}
function strVal(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "2025";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const numericFieldIds = ["previousYearEarnedIncome", "unusedContributionRoom", "plannedContribution", "marginalTaxRate"];

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
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

  const [previousYearEarnedIncome, unusedContributionRoom, plannedContribution, marginalTaxRate] = numericFieldIds.map(val);
  const taxYear = parseInt(strVal("taxYear"), 10) || 2025;

  const validationError = validateRRSPInputs(previousYearEarnedIncome, plannedContribution, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRRSP(previousYearEarnedIncome, unusedContributionRoom, plannedContribution, marginalTaxRate, taxYear);

  setValue("contributionRoomResult", fmtCurrency(result.contributionRoom));
  setValue("taxSavingsResult", fmtCurrency(result.taxSavings));
  setValue("maxContributionResult", fmtCurrency(result.maxAllowedContribution));
  const noPenaltyText = lang === "es" ? copy_none_es() : "None";
  setValue("penaltyTaxResult", result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) + "/mo" : noPenaltyText);
  setSubtitle("penaltyTaxResult", result.excessContribution > 0 ? (lang === "es" ? "Sobre-aporte detectado" : "Over-contribution detected") : (lang === "es" ? "Dentro del límite" : "Within limit"));

  function copy_none_es() { return "Ninguno"; }

  lastSummary = lang === "es" ? `
Resumen de Aporte RRSP — Año Fiscal ${taxYear}

Espacio de Aporte Disponible: ${fmtCurrency(result.contributionRoom)}
Aporte Aplicado: ${fmtCurrency(result.maxAllowedContribution)}
Ahorro Fiscal Estimado: ${fmtCurrency(result.taxSavings)}
Impuesto de Penalidad Mensual (si sobre-aportó): ${result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) : "Ninguno"}
`.trim() : `
RRSP Contribution Summary — Tax Year ${taxYear}

Available Contribution Room: ${fmtCurrency(result.contributionRoom)}
Contribution Applied: ${fmtCurrency(result.maxAllowedContribution)}
Estimated Tax Savings: ${fmtCurrency(result.taxSavings)}
Monthly Penalty Tax (if over-contributed): ${result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) : "None"}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numericFieldIds.forEach((id) => {
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