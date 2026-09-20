import { calculateUkCapitalGains, validateUkCapitalGainsInputs } from "../utils/uk-capital-gains";
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

const fieldIds = ["totalGain", "otherTaxableIncome", "personalAllowance"];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { afterExemption:"After £3,000 annual exemption", header:"UK Capital Gains Tax Summary", totalGain:"Total Gain", taxableGain:"Taxable Gain (after £3,000 exemption)", taxAtBasicRate:"Tax at 18% (basic rate band)", taxAtHigherRate:"Tax at 24% (higher rate)", totalTaxOwed:"Total Tax Owed", invalidGain:"Enter a total gain greater than zero." },
  es: { afterExemption:"Después de la exención anual de £3,000", header:"Resumen del Impuesto sobre Ganancias de Capital del Reino Unido", totalGain:"Ganancia Total", taxableGain:"Ganancia Imponible (después de la exención de £3,000)", taxAtBasicRate:"Impuesto al 18% (tramo de tasa básica)", taxAtHigherRate:"Impuesto al 24% (tasa alta)", totalTaxOwed:"Impuesto Total Adeudado", invalidGain:"Ingresa una ganancia total mayor que cero." },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
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

  const [totalGain, otherTaxableIncome, personalAllowance] = fieldIds.map(val);

  const validationError = validateUkCapitalGainsInputs(totalGain);
  if (validationError) {
    showError(t.invalidGain);
    return;
  }

  const result = calculateUkCapitalGains(totalGain, otherTaxableIncome, personalAllowance || 12570);

  setValue("totalTaxOwedResult", fmtCurrency(result.totalTaxOwed));
  setValue("taxableGainResult", fmtCurrency(result.taxableGain));
  setValue("taxAtBasicRateResult", fmtCurrency(result.taxAtBasicRate));
  setValue("taxAtHigherRateResult", fmtCurrency(result.taxAtHigherRate));
  setSubtitle("totalTaxOwedResult", t.afterExemption);

  lastSummary = `
${t.header}

${t.totalGain}: ${fmtCurrency(result.totalGain)}
${t.taxableGain}: ${fmtCurrency(result.taxableGain)}
${t.taxAtBasicRate}: ${fmtCurrency(result.taxAtBasicRate)}
${t.taxAtHigherRate}: ${fmtCurrency(result.taxAtHigherRate)}
${t.totalTaxOwed}: ${fmtCurrency(result.totalTaxOwed)}
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