import { calculateDividendYield, validateDividendYieldInputs } from "../utils/dividend-yield";
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

const fieldIds = ["sharePrice", "annualDividendPerShare", "numberOfShares", "purchasePrice"];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { enterPurchasePrice:"Enter purchase price", basedOnCost:"Based on your cost basis", summaryTitle:"Dividend Yield Summary", dividendYield:"Dividend Yield", annualIncome:"Annual Dividend Income", monthlyIncome:"Monthly Dividend Income", yieldOnCost:"Yield on Cost", na:"N/A" },
  es: { enterPurchasePrice:"Ingresa el precio de compra", basedOnCost:"Basado en tu costo base", summaryTitle:"Resumen de Rendimiento de Dividendos", dividendYield:"Rendimiento de Dividendos", annualIncome:"Ingreso Anual por Dividendos", monthlyIncome:"Ingreso Mensual por Dividendos", yieldOnCost:"Rendimiento sobre Costo", na:"N/D" },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
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

  const [sharePrice, annualDividendPerShare, numberOfShares, purchasePrice] = fieldIds.map(val);

  const validationError = validateDividendYieldInputs(sharePrice, annualDividendPerShare, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDividendYield(sharePrice, annualDividendPerShare, numberOfShares, purchasePrice);

  setValue("dividendYieldResult", fmtPercent(result.dividendYield));
  setValue("annualIncomeResult", fmtCurrency(result.annualDividendIncome));
  setValue("monthlyIncomeResult", fmtCurrency(result.monthlyDividendIncome));
  setValue("yieldOnCostResult", result.yieldOnCost === null ? t.na : fmtPercent(result.yieldOnCost));
  setSubtitle("yieldOnCostResult", result.yieldOnCost === null ? t.enterPurchasePrice : t.basedOnCost);

  lastSummary = `
${t.summaryTitle}

${t.dividendYield}: ${fmtPercent(result.dividendYield)}
${t.annualIncome}: ${fmtCurrency(result.annualDividendIncome)}
${t.monthlyIncome}: ${fmtCurrency(result.monthlyDividendIncome)}
${t.yieldOnCost}: ${result.yieldOnCost === null ? t.na : fmtPercent(result.yieldOnCost)}
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