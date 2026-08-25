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

let lastResult: PayoffComparison | null = null;

function fmtCurrency(n: number): string {
  if (!isFinite(n)) return "50+ yrs";
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

  const validationError = validateCreditCardInputs(balance, apr, monthlyPayment);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = comparePayoffScenarios(balance, apr, monthlyPayment);

  if (!isFinite(result.fixed.totalInterest)) {
    showError("This payment doesn't cover the monthly interest — increase your payment amount.");
    return;
  }

  setValue("payoffTimeResult", formatMonthsAsYearsMonths(result.fixed.months));
  setValue("totalInterestResult", fmtCurrency(result.fixed.totalInterest));
  setValue("totalPaidResult", fmtCurrency(result.fixed.totalPaid));
  setValue("interestSavedResult", fmtCurrency(result.interestSaved));
  setSubtitle("interestSavedResult", `vs. minimum payments (${formatMonthsAsYearsMonths(result.minimumOnly.months)})`);

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
Credit Card Payoff Summary

Payoff Time: ${formatMonthsAsYearsMonths(lastResult.fixed.months)}
Total Interest: ${fmtCurrency(lastResult.fixed.totalInterest)}
Total Paid: ${fmtCurrency(lastResult.fixed.totalPaid)}
Interest Saved vs Minimum: ${fmtCurrency(lastResult.interestSaved)}
`.trim();

  copyToClipboard(summary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);