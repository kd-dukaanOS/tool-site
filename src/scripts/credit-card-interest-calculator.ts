import { calculateCreditCardInterest, validateCreditCardInterestInputs } from "../utils/credit-card-interest";
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

const fieldIds = ["balance", "apr", "monthlyPayment"];

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

  const [balance, apr, monthlyPayment] = fieldIds.map(val);

  const validationError = validateCreditCardInterestInputs(balance, monthlyPayment);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateCreditCardInterest(balance, apr, monthlyPayment);

  if (!result.payoffPossible) {
    showError("This monthly payment is too low to ever pay off the balance — increase it above the monthly interest charge.");
    emptyState.hidden = false;
    resultsContainer.hidden = true;
    return;
  }

  const years = Math.floor(result.monthsToPayoff / 12);
  const months = result.monthsToPayoff % 12;
  const timeLabel = years > 0 ? `${years}y ${months}mo` : `${months} months`;

  setValue("timeToPayoffResult", timeLabel);
  setValue("totalInterestResult", fmtCurrency(result.totalInterest));
  setValue("totalRepaymentResult", fmtCurrency(result.totalRepayment));
  setValue("monthlyPaymentResult", fmtCurrency(monthlyPayment));
  setSubtitle("timeToPayoffResult", `${result.monthsToPayoff} months total`);

  lastSummary = `
Credit Card Interest Summary

Starting Balance: ${fmtCurrency(balance)}
Monthly Payment: ${fmtCurrency(monthlyPayment)}
Time to Payoff: ${timeLabel}
Total Interest: ${fmtCurrency(result.totalInterest)}
Total Repayment: ${fmtCurrency(result.totalRepayment)}
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