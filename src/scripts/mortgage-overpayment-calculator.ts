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

  const validationError = validateMortgageOverpaymentInputs(currentBalance, remainingTermMonths);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateMortgageOverpayment(currentBalance, interestRate, remainingTermMonths, extraMonthlyPayment);

  const years = Math.floor(result.newPayoffMonths / 12);
  const months = result.newPayoffMonths % 12;
  const payoffLabel = years > 0 ? `${years}y ${months}mo` : `${months} months`;

  const savedYears = Math.floor(result.monthsSaved / 12);
  const savedMonths = result.monthsSaved % 12;
  const savedLabel = result.monthsSaved > 0 ? (savedYears > 0 ? `${savedYears}y ${savedMonths}mo` : `${savedMonths} months`) : "0 months";

  setValue("payoffTimeResult", payoffLabel);
  setValue("timeSavedResult", savedLabel);
  setValue("interestSavedResult", fmtCurrency(result.interestSaved));
  setValue("newPaymentResult", fmtCurrency(result.standardPayment + extraMonthlyPayment));
  setSubtitle("payoffTimeResult", `vs ${remainingTermMonths} months originally`);

  lastSummary = `
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