import {
  comparePayoffScenarios,
  formatMonthsAsYearsMonths,
  validateCreditCardInputs,
  type PayoffComparison,
} from "../utils/credit-card-payoff";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const balanceInput = document.getElementById("balance") as HTMLInputElement;
const aprInput = document.getElementById("apr") as HTMLInputElement;
const monthlyPaymentInput = document.getElementById("monthlyPayment") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { fiftyPlus:"50+ yrs", noCover:"This payment doesn't cover the monthly interest — increase your payment amount.", vsMinimum:(m:string)=>`vs. minimum payments (${m})`, summaryHeader:"Credit Card Payoff Summary", payoffTime:"Payoff Time", totalInterest:"Total Interest", totalPaid:"Total Paid", interestSaved:"Interest Saved vs Minimum" },
  es: { fiftyPlus:"50+ años", noCover:"Este pago no cubre el interés mensual — aumenta el monto de tu pago.", vsMinimum:(m:string)=>`vs. pagos mínimos (${m})`, summaryHeader:"Resumen de Pago de Tarjeta de Crédito", payoffTime:"Tiempo de Pago", totalInterest:"Interés Total", totalPaid:"Total Pagado", interestSaved:"Interés Ahorrado vs Mínimo" },
}[lang];

let lastResult: PayoffComparison | null = null;

function fmtCurrency(n: number): string {
  if (!isFinite(n)) return t.fiftyPlus;
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

  const balance = parseFloat(balanceInput.value);
  const apr = parseFloat(aprInput.value);
  const monthlyPayment = parseFloat(monthlyPaymentInput.value);

  const validationError = validateCreditCardInputs(balance, apr, monthlyPayment, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = comparePayoffScenarios(balance, apr, monthlyPayment);

  if (!isFinite(result.fixed.totalInterest)) {
    showError(t.noCover);
    return;
  }

  setValue("payoffTimeResult", formatMonthsAsYearsMonths(result.fixed.months, lang));
  setValue("totalInterestResult", fmtCurrency(result.fixed.totalInterest));
  setValue("totalPaidResult", fmtCurrency(result.fixed.totalPaid));
  setValue("interestSavedResult", fmtCurrency(result.interestSaved));
  setSubtitle("interestSavedResult", t.vsMinimum(formatMonthsAsYearsMonths(result.minimumOnly.months, lang)));

  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  balanceInput.value = "";
  aprInput.value = "";
  monthlyPaymentInput.value = "";
  clearError();

  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;

  const summary = `
${t.summaryHeader}

${t.payoffTime}: ${formatMonthsAsYearsMonths(lastResult.fixed.months, lang)}
${t.totalInterest}: ${fmtCurrency(lastResult.fixed.totalInterest)}
${t.totalPaid}: ${fmtCurrency(lastResult.fixed.totalPaid)}
${t.interestSaved}: ${fmtCurrency(lastResult.interestSaved)}
`.trim();

  copyToClipboard(summary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);