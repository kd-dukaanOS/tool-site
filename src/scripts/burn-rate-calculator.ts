import { calculateBurnRate, validateBurnRateInputs } from "../utils/burn-rate";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: {
    cashFlowPositive: "Cash flow positive", burningCash: "Burning cash", mo: "mo",
    title: "Burn Rate Summary", gross: "Gross Burn Rate", net: "Net Burn Rate", runway: "Runway", cash: "Current Cash Balance", months: "months",
  },
  es: {
    cashFlowPositive: "Flujo de caja positivo", burningCash: "Consumiendo caja", mo: "mes",
    title: "Resumen de Tasa de Consumo", gross: "Tasa de Consumo Bruta", net: "Tasa de Consumo Neta", runway: "Reserva de Caja", cash: "Saldo de Caja Actual", months: "meses",
  },
}[lang];

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const fieldIds = ["currentCashBalance", "monthlyRevenue", "monthlyOperatingExpenses"];
let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString(lang === "es" ? "es-ES" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [currentCashBalance, monthlyRevenue, monthlyOperatingExpenses] = fieldIds.map(val);

  const err = validateBurnRateInputs(currentCashBalance, monthlyOperatingExpenses, lang);
  if (err) { showError(err); return; }

  const result = calculateBurnRate(currentCashBalance, monthlyRevenue, monthlyOperatingExpenses);

  setValue("grossBurnResult", fmtCurrency(result.grossBurnRate));
  setValue("netBurnResult", fmtCurrency(result.netBurnRate));
  setValue("runwayResult", result.runwayMonths === null ? t.cashFlowPositive : `${result.runwayMonths} ${t.mo}`);
  setValue("cashBalanceResult", fmtCurrency(currentCashBalance));
  setSubtitle("netBurnResult", result.netBurnRate > 0 ? t.burningCash : t.cashFlowPositive);

  lastSummary = `
${t.title}

${t.gross}: ${fmtCurrency(result.grossBurnRate)}/${t.mo}
${t.net}: ${fmtCurrency(result.netBurnRate)}/${t.mo}
${t.runway}: ${result.runwayMonths === null ? t.cashFlowPositive : result.runwayMonths + " " + t.months}
${t.cash}: ${fmtCurrency(currentCashBalance)}
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

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);