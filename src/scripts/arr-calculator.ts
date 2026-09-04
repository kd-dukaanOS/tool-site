import { calculateARR, validateARRInputs } from "../utils/arr";
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

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { inMonths: "In", months: "months", monthlyGrowth: "monthly growth", title: "ARR Summary", current: "Current ARR", netNew: "Net New ARR (annualized)", projected: "Projected ARR", growth: "ARR Growth Rate" },
  es: { inMonths: "En", months: "meses", monthlyGrowth: "crecimiento mensual", title: "Resumen de ARR", current: "ARR Actual", netNew: "ARR Neto Nuevo (anualizado)", projected: "ARR Proyectado", growth: "Tasa de Crecimiento de ARR" },
}[lang];

const fieldIds = [
  "currentMRR", "newBusinessMRR", "expansionMRR", "contractionMRR", "churnedMRR", "projectionMonths",
];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString(lang === "es" ? "es-ES" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function fmtPercent(n: number): string {
  return `${n.toFixed(2)}%`;
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

  const [currentMRR, newBusinessMRR, expansionMRR, contractionMRR, churnedMRR, projectionMonths] = fieldIds.map(val);

  const validationError = validateARRInputs(currentMRR, projectionMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateARR(currentMRR, newBusinessMRR, expansionMRR, contractionMRR, churnedMRR, projectionMonths || 12);

  setValue("currentARRResult", fmtCurrency(result.currentARR));
  setValue("netNewARRResult", fmtCurrency(result.netNewARR));
  setValue("projectedARRResult", fmtCurrency(result.projectedARR));
  setValue("arrGrowthRateResult", fmtPercent(result.arrGrowthRate));
  setSubtitle("projectedARRResult", `${t.inMonths} ${projectionMonths || 12} ${t.months}`);
  setSubtitle("netNewARRResult", `${fmtPercent(result.monthlyGrowthRate * 100)} ${t.monthlyGrowth}`);

  lastSummary = `
${t.title}

${t.current}: ${fmtCurrency(result.currentARR)}
${t.netNew}: ${fmtCurrency(result.netNewARR)}
${t.projected} (${projectionMonths || 12} ${t.months}): ${fmtCurrency(result.projectedARR)}
${t.growth}: ${fmtPercent(result.arrGrowthRate)}
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