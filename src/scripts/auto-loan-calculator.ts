import { calculateAutoLoan, validateAutoLoanInputs } from "../utils/auto-loan";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { title: "Auto Loan Summary", loanAmount: "Loan Amount", monthlyPayment: "Monthly Payment", totalInterest: "Total Interest", totalCost: "Total Cost", months: "months" },
  es: { title: "Resumen de Préstamo de Auto", loanAmount: "Monto del Préstamo", monthlyPayment: "Pago Mensual", totalInterest: "Interés Total", totalCost: "Costo Total", months: "meses" },
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

const fieldIds = ["vehiclePrice", "downPayment", "tradeInValue", "salesTaxRate", "apr", "termMonths"];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString(lang === "es" ? "es-ES" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
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

  const [vehiclePrice, downPayment, tradeInValue, salesTaxRate, apr, termMonths] = fieldIds.map(val);

  const validationError = validateAutoLoanInputs(vehiclePrice, termMonths, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateAutoLoan(vehiclePrice, downPayment, tradeInValue, salesTaxRate, apr, termMonths);

  setValue("monthlyPaymentResult", fmtCurrency(result.monthlyPayment));
  setValue("loanAmountResult", fmtCurrency(result.loanAmount));
  setValue("totalInterestResult", fmtCurrency(result.totalInterest));
  setValue("totalCostResult", fmtCurrency(result.totalCost));
  setSubtitle("monthlyPaymentResult", `${termMonths} ${t.months}`);

  lastSummary = `
${t.title}

${t.loanAmount}: ${fmtCurrency(result.loanAmount)}
${t.monthlyPayment}: ${fmtCurrency(result.monthlyPayment)}
${t.totalInterest}: ${fmtCurrency(result.totalInterest)}
${t.totalCost}: ${fmtCurrency(result.totalCost)}
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