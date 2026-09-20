import { calculateRunway, validateRunwayInputs } from "../utils/runway";
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

const fieldIds = [
  "currentCashBalance", "monthlyRevenue", "monthlyExpenses",
  "monthlyRevenueGrowthRate", "monthlyExpenseGrowthRate",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [currentCashBalance, monthlyRevenue, monthlyExpenses, monthlyRevenueGrowthRate, monthlyExpenseGrowthRate] = fieldIds.map(val);

  const err = validateRunwayInputs(currentCashBalance, monthlyExpenses, lang);
  if (err) { showError(err); return; }

  const result = calculateRunway(currentCashBalance, monthlyRevenue, monthlyExpenses, monthlyRevenueGrowthRate, monthlyExpenseGrowthRate);

  const dynamicText = result.dynamicRunwayMonths === null ? (lang === "es" ? "120+ mes" : "120+ mo") : `${result.dynamicRunwayMonths} ${lang === "es" ? "mes" : "mo"}`;
  const staticText = result.staticRunwayMonths === null ? (lang === "es" ? "Flujo de caja positivo" : "Cash flow positive") : `${result.staticRunwayMonths} ${lang === "es" ? "mes" : "mo"}`;

  setValue("dynamicRunwayResult", dynamicText);
  setValue("staticRunwayResult", staticText);
  setValue("netBurnResult", fmtCurrency(result.currentNetBurn));
  setValue("balanceIn6MoResult", fmtCurrency(result.projectedBalanceIn6Months));
  setSubtitle("dynamicRunwayResult", lang === "es" ? "Con crecimiento de ingresos/gastos aplicado" : "With revenue/expense growth applied");

  lastSummary = lang === "es" ? `
Resumen de Runway

Runway Dinámico (con crecimiento): ${result.dynamicRunwayMonths === null ? "120+ meses" : result.dynamicRunwayMonths + " meses"}
Runway Estático (tasa actual): ${result.staticRunwayMonths === null ? "Flujo de caja positivo" : result.staticRunwayMonths + " meses"}
Quema Neta Actual: ${fmtCurrency(result.currentNetBurn)}/mes
Saldo Proyectado en 6 Meses: ${fmtCurrency(result.projectedBalanceIn6Months)}
`.trim() : `
Runway Summary

Dynamic Runway (with growth): ${result.dynamicRunwayMonths === null ? "120+ months" : result.dynamicRunwayMonths + " months"}
Static Runway (current rate): ${result.staticRunwayMonths === null ? "Cash flow positive" : result.staticRunwayMonths + " months"}
Current Net Burn: ${fmtCurrency(result.currentNetBurn)}/mo
Projected Balance in 6 Months: ${fmtCurrency(result.projectedBalanceIn6Months)}
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