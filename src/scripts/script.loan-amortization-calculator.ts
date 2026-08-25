import {
  generateAmortizationSchedule,
  validateLoanInputs,
  payoffDate,
  formatPayoffDate,
  type LoanResult,
} from "../utils/loan-amortization";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const loanAmountInput = document.getElementById("loanAmount") as HTMLInputElement;
const annualRateInput = document.getElementById("annualRate") as HTMLInputElement;
const loanYearsInput = document.getElementById("loanYears") as HTMLInputElement;
const extraPaymentInput = document.getElementById("extraPayment") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement;

let lastResult: LoanResult | null = null;

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

  const principal = parseFloat(loanAmountInput.value);
  const rate = parseFloat(annualRateInput.value);
  const years = parseFloat(loanYearsInput.value);
  const extra = parseFloat(extraPaymentInput?.value || "0") || 0;

  const validationError = validateLoanInputs(principal, rate, years);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = generateAmortizationSchedule(principal, rate, years, extra);

  setValue("monthlyPaymentResult", fmtCurrency(result.monthlyPayment));
  setValue("totalInterestResult", fmtCurrency(result.totalInterest));
  setValue("totalPaymentResult", fmtCurrency(result.totalPayment));

  const payoff = payoffDate(result.payoffMonths);
  setValue("payoffDateResult", formatPayoffDate(payoff));
  setSubtitle("payoffDateResult", `${result.payoffMonths} payments`);

  if (scheduleBody) {
    scheduleBody.innerHTML = result.yearly
      .map(
        (y) => `
        <tr>
          <td>${y.year}</td>
          <td>${fmtCurrency(y.principalPaid)}</td>
          <td>${fmtCurrency(y.interestPaid)}</td>
          <td>${fmtCurrency(y.endingBalance)}</td>
        </tr>`
      )
      .join("");
  }

  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  loanAmountInput.value = "";
  annualRateInput.value = "";
  loanYearsInput.value = "";
  if (extraPaymentInput) extraPaymentInput.value = "";
  clearError();

  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;

  const summary = `
Loan Amortization Summary

Monthly Payment: ${fmtCurrency(lastResult.monthlyPayment)}
Total Interest: ${fmtCurrency(lastResult.totalInterest)}
Total Payment: ${fmtCurrency(lastResult.totalPayment)}
Payoff: ${lastResult.payoffMonths} payments
`.trim();

  copyToClipboard(summary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
