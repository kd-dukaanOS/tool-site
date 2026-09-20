import { calculateStudentLoan, validateStudentLoanInputs } from "../utils/student-loan";
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

const fieldIds = ["loanAmount", "interestRate", "loanTermYears", "extraMonthlyPayment"];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const withExtraLabel = (window as any).stlWithExtraLabel || "With extra payments";
const standardTermLabel = (window as any).stlStandardTermLabel || "Standard term";
const yLabel = (window as any).stlYLabel || "y";
const mLabel = (window as any).stlMLabel || "m";

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

  const [loanAmount, interestRate, loanTermYears, extraMonthlyPayment] = fieldIds.map(val);

  const validationError = validateStudentLoanInputs(loanAmount, loanTermYears, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateStudentLoan(loanAmount, interestRate, loanTermYears, extraMonthlyPayment);

  setValue("monthlyPaymentResult", fmtCurrency(result.monthlyPayment));
  setValue("totalInterestResult", fmtCurrency(result.totalInterest));
  setValue("totalPaidResult", fmtCurrency(result.totalPaid));
  setValue("payoffTimeResult", `${Math.floor(result.payoffMonths / 12)}${yLabel} ${result.payoffMonths % 12}${mLabel}`);
  setSubtitle("payoffTimeResult", extraMonthlyPayment > 0 ? withExtraLabel : standardTermLabel);

  lastSummary = lang === "es" ? `
Resumen de Préstamo Estudiantil

Pago Mensual: ${fmtCurrency(result.monthlyPayment)}
Interés Total Pagado: ${fmtCurrency(result.totalInterest)}
Total Pagado: ${fmtCurrency(result.totalPaid)}
Tiempo de Pago: ${Math.floor(result.payoffMonths / 12)}${yLabel} ${result.payoffMonths % 12}${mLabel}
`.trim() : `
Student Loan Summary

Monthly Payment: ${fmtCurrency(result.monthlyPayment)}
Total Interest Paid: ${fmtCurrency(result.totalInterest)}
Total Paid: ${fmtCurrency(result.totalPaid)}
Payoff Time: ${Math.floor(result.payoffMonths / 12)}y ${result.payoffMonths % 12}m
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