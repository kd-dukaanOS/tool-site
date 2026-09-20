import { calculateMortgageRefinance, validateMortgageRefinanceInputs } from "../utils/mortgage-refinance";
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

const fieldIds = ["currentBalance", "currentRate", "currentTermRemainingMonths", "newRate", "newTermMonths", "closingCosts"];

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function copy_noSavings(lang: string): string {
  return lang === "es" ? "Sin ahorros" : "No savings";
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

  const [currentBalance, currentRate, currentTermRemainingMonths, newRate, newTermMonths, closingCosts] = fieldIds.map(val);

  const validationError = validateMortgageRefinanceInputs(currentBalance, currentTermRemainingMonths, newTermMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateMortgageRefinance(currentBalance, currentRate, currentTermRemainingMonths, newRate, newTermMonths, closingCosts);

  setValue("monthlySavingsResult", fmtCurrency(result.monthlySavings));
  setValue("newPaymentResult", fmtCurrency(result.newPayment));
  setValue("breakEvenResult", result.breakEvenMonths === null ? copy_noSavings(lang) : (lang === "es" ? `${result.breakEvenMonths} meses` : `${result.breakEvenMonths} months`));
  setValue("lifetimeSavingsResult", fmtCurrency(result.lifetimeInterestSavings));
  setSubtitle("monthlySavingsResult", result.monthlySavings >= 0 ? (lang === "es" ? "Pago menor" : "Lower payment") : (lang === "es" ? "Pago mayor" : "Higher payment"));

  lastSummary = lang === "es" ? `
Resumen de Refinanciamiento Hipotecario

Pago Anterior: ${fmtCurrency(result.oldPayment)}
Nuevo Pago: ${fmtCurrency(result.newPayment)}
Ahorro Mensual: ${fmtCurrency(result.monthlySavings)}
Punto de Equilibrio: ${result.breakEvenMonths === null ? "Sin ahorros" : `${result.breakEvenMonths} meses`}
Ahorro Total de Interés: ${fmtCurrency(result.lifetimeInterestSavings)}
`.trim() : `
Mortgage Refinance Summary

Old Payment: ${fmtCurrency(result.oldPayment)}
New Payment: ${fmtCurrency(result.newPayment)}
Monthly Savings: ${fmtCurrency(result.monthlySavings)}
Break-Even Point: ${result.breakEvenMonths === null ? "No savings" : `${result.breakEvenMonths} months`}
Lifetime Interest Savings: ${fmtCurrency(result.lifetimeInterestSavings)}
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