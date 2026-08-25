import {
  calculateDTI,
  validateDTIInputs,
  type DTIResult,
} from "../utils/debt-to-income";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const monthlyIncomeInput = document.getElementById("monthlyIncome") as HTMLInputElement;
const housingPaymentInput = document.getElementById("housingPayment") as HTMLInputElement;
const otherDebtsInput = document.getElementById("otherDebts") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastResult: DTIResult | null = null;

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

  const income = parseFloat(monthlyIncomeInput.value);
  const housing = parseFloat(housingPaymentInput.value) || 0;
  const otherDebts = parseFloat(otherDebtsInput.value) || 0;

  const validationError = validateDTIInputs(income, housing, otherDebts);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDTI(income, housing, otherDebts);

  setValue("frontEndResult", `${result.frontEndRatio.toFixed(1)}%`);
  setValue("backEndResult", `${result.backEndRatio.toFixed(1)}%`);
  setValue("totalDebtResult", result.totalMonthlyDebt.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }));
  setValue("ratingResult", result.rating);
  setSubtitle("ratingResult", "vs. common lender guidelines");

  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  monthlyIncomeInput.value = "";
  housingPaymentInput.value = "";
  otherDebtsInput.value = "";
  clearError();

  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;

  const summary = `
Debt-to-Income Summary

Front-End DTI: ${lastResult.frontEndRatio.toFixed(1)}%
Back-End DTI: ${lastResult.backEndRatio.toFixed(1)}%
Total Monthly Debt: $${lastResult.totalMonthlyDebt.toFixed(0)}
Rating: ${lastResult.rating}
`.trim();

  copyToClipboard(summary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);