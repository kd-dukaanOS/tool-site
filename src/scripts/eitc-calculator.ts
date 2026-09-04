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

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { eligible:"Eligible", notEligible:"Not Eligible", header:(y:number)=>`Earned Income Tax Credit (EITC) Summary — Tax Year ${y}`, estCredit:"Estimated EITC", status:"Status", maxCreditLine:"Maximum Credit for Family Size", note:"Note" },
  es: { eligible:"Elegible", notEligible:"No Elegible", header:(y:number)=>`Resumen de Crédito Tributario por Ingreso del Trabajo (EITC) — Año Fiscal ${y}`, estCredit:"EITC Estimado", status:"Estado", maxCreditLine:"Crédito Máximo por Tamaño Familiar", note:"Nota" },
}[lang];

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

  const validationError = validateEITCInputs(earnedIncome, agi || earnedIncome, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEITC(earnedIncome, agi || earnedIncome, filingStatus, qualifyingChildren, investmentIncome, taxYear, lang);

  setValue("eitcResult", fmtCurrency(result.credit));
  setValue("eligibleResult", result.eligible ? t.eligible : t.notEligible);
  setValue("maxCreditResult", fmtCurrency(result.maxCredit));
  setValue("phaseoutRateResult", `${(result.phaseoutRate * 100).toFixed(2)}%`);
  setSubtitle("eitcResult", `${lang === "es" ? "Año Fiscal" : "Tax Year"} ${taxYear}`);
  if (result.reason) setSubtitle("eligibleResult", result.reason);

  lastSummary = `
${t.header(taxYear)}

${t.estCredit}: ${fmtCurrency(result.credit)}
${t.status}: ${result.eligible ? t.eligible : t.notEligible}
${t.maxCreditLine}: ${fmtCurrency(result.maxCredit)}
${result.reason ? `${t.note}: ${result.reason}` : ""}
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
