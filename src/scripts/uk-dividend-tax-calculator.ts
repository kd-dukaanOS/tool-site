import { calculateUkDividendTax, validateUkDividendTaxInputs } from "../utils/uk-dividend-tax";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}
function strVal(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "2026-27";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const numericFieldIds = ["otherIncome", "dividendIncome"];
const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { taxYear:"Tax year", header:"UK Dividend Tax Summary", totalTax:"Total Dividend Tax", netDividend:"Net Dividend Income", effectiveRate:"Effective Rate", allowanceUsed:"Tax-Free Allowance Used", errNegative:"Other income cannot be negative.", errDividend:"Enter a dividend income greater than zero." },
  es: { taxYear:"Año fiscal", header:"Resumen del Impuesto sobre Dividendos del Reino Unido", totalTax:"Impuesto Total sobre Dividendos", netDividend:"Ingreso Neto por Dividendos", effectiveRate:"Tasa Efectiva", allowanceUsed:"Asignación Libre de Impuestos Utilizada", errNegative:"Otros ingresos no pueden ser negativos.", errDividend:"Ingresa un ingreso por dividendos mayor que cero." },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [otherIncome, dividendIncome] = numericFieldIds.map(val);
  const taxYear = strVal("taxYear");

  const err = validateUkDividendTaxInputs(otherIncome, dividendIncome);
  if (err) {
    showError(otherIncome < 0 ? t.errNegative : t.errDividend);
    return;
  }

  const result = calculateUkDividendTax(otherIncome, dividendIncome, taxYear);

  setValue("totalTaxResult", fmtCurrency(result.totalDividendTax));
  setValue("netDividendResult", fmtCurrency(result.netDividendIncome));
  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(1)}%`);
  setValue("allowanceUsedResult", fmtCurrency(result.taxFreeAmount));
  setSubtitle("totalTaxResult", `${t.taxYear} ${taxYear}`);

  lastSummary = `
${t.header} (${taxYear})

${t.totalTax}: ${fmtCurrency(result.totalDividendTax)}
${t.netDividend}: ${fmtCurrency(result.netDividendIncome)}
${t.effectiveRate}: ${result.effectiveRate.toFixed(1)}%
${t.allowanceUsed}: ${fmtCurrency(result.taxFreeAmount)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numericFieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
  const yearEl = document.getElementById("taxYear") as HTMLSelectElement;
  if (yearEl) yearEl.value = "2026-27";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);