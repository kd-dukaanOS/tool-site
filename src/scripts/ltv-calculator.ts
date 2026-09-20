import { calculateLTV, validateLTVInputs } from "../utils/ltv";
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

const fieldIds = ["homeValue", "loanBalance", "secondLienBalance"];

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

  const [homeValue, loanBalance, secondLienBalance] = fieldIds.map(val);

  const validationError = validateLTVInputs(homeValue, loanBalance, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateLTV(homeValue, loanBalance, secondLienBalance);

  setValue("ltvResult", `${result.ltvRatio.toFixed(1)}%`);
  setValue("cltvResult", result.cltvRatio === null ? "N/A" : `${result.cltvRatio.toFixed(1)}%`);
  setValue("equityResult", fmtCurrency(result.equityAmount));
  setValue("pmiStatusResult", result.pmiLikely ? (lang === "es" ? "PMI Probable" : "PMI Likely") : (lang === "es" ? "Sin PMI" : "No PMI Needed"));
  setSubtitle("equityResult", lang === "es" ? `${result.equityPercent.toFixed(1)}% de capital` : `${result.equityPercent.toFixed(1)}% equity`);
  setSubtitle("pmiStatusResult", result.pmiLikely ? (lang === "es" ? `Abona ${fmtCurrency(result.amountToReach80)} para llegar a 80% LTV` : `Pay down ${fmtCurrency(result.amountToReach80)} to reach 80% LTV`) : (lang === "es" ? "Por debajo del umbral de 80% LTV" : "Below 80% LTV threshold"));

  lastSummary = lang === "es" ? `
Resumen LTV

Ratio Préstamo-Valor: ${result.ltvRatio.toFixed(1)}%
LTV Combinado: ${result.cltvRatio === null ? "N/D" : `${result.cltvRatio.toFixed(1)}%`}
Capital de Vivienda: ${fmtCurrency(result.equityAmount)} (${result.equityPercent.toFixed(1)}%)
Estado del PMI: ${result.pmiLikely ? "Probablemente requerido" : "No requerido"}
`.trim() : `
LTV Summary

Loan-to-Value Ratio: ${result.ltvRatio.toFixed(1)}%
Combined LTV: ${result.cltvRatio === null ? "N/A" : `${result.cltvRatio.toFixed(1)}%`}
Home Equity: ${fmtCurrency(result.equityAmount)} (${result.equityPercent.toFixed(1)}%)
PMI Status: ${result.pmiLikely ? "Likely required" : "Not required"}
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