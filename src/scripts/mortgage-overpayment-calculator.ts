import { calculateMortgageOverpayment, validateMortgageOverpaymentInputs } from "../utils/mortgage-overpayment";
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

const fieldIds = ["currentBalance", "interestRate", "remainingTermMonths", "extraMonthlyPayment"];

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

  const [currentBalance, interestRate, remainingTermMonths, extraMonthlyPayment] = fieldIds.map(val);

  const validationError = validateMortgageOverpaymentInputs(currentBalance, remainingTermMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateMortgageOverpayment(currentBalance, interestRate, remainingTermMonths, extraMonthlyPayment);

  const years = Math.floor(result.newPayoffMonths / 12);
  const months = result.newPayoffMonths % 12;
  const payoffLabel = lang === "es"
    ? (years > 0 ? `${years}a ${months}m` : `${months} meses`)
    : (years > 0 ? `${years}y ${months}mo` : `${months} months`);

  const savedYears = Math.floor(result.monthsSaved / 12);
  const savedMonths = result.monthsSaved % 12;
  const savedLabel = result.monthsSaved > 0
    ? (lang === "es"
        ? (savedYears > 0 ? `${savedYears}a ${savedMonths}m` : `${savedMonths} meses`)
        : (savedYears > 0 ? `${savedYears}y ${savedMonths}mo` : `${savedMonths} months`))
    : (lang === "es" ? "0 meses" : "0 months");

  setValue("payoffTimeResult", payoffLabel);
  setValue("timeSavedResult", savedLabel);
  setValue("interestSavedResult", fmtCurrency(result.interestSaved));
  setValue("newPaymentResult", fmtCurrency(result.standardPayment + extraMonthlyPayment));
  setSubtitle("payoffTimeResult", lang === "es" ? `vs ${remainingTermMonths} meses originalmente` : `vs ${remainingTermMonths} months originally`);

  lastSummary = lang === "es" ? `
Resumen de Pago Anticipado de Hipoteca

Nuevo Pago Mensual: ${fmtCurrency(result.standardPayment + extraMonthlyPayment)}
Nuevo Tiempo de Pago: ${payoffLabel}
Tiempo Ahorrado: ${savedLabel}
Interés Ahorrado: ${fmtCurrency(result.interestSaved)}
`.trim() : `
Mortgage Overpayment Summary

New Monthly Payment: ${fmtCurrency(result.standardPayment + extraMonthlyPayment)}
New Payoff Time: ${payoffLabel}
Time Saved: ${savedLabel}
Interest Saved: ${fmtCurrency(result.interestSaved)}
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