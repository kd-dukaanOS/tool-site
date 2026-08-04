import {
  calculateSimpleInterest,
  validateSimpleInterestInput,
  formatCurrency,
  copySimpleInterestSummary,
  type SimpleInterestInput,
  type SimpleInterestResult,
} from "../utils/simple-interest";

import { setValue, copyToClipboard } from "../utils/calculator";

const principalInput = document.getElementById("principal") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: SimpleInterestInput | null = null;
let lastResult: SimpleInterestResult | null = null;

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

  const input: SimpleInterestInput = {
    principal: parseFloat(principalInput.value),
    annualRate: parseFloat(rateInput.value),
    years: parseFloat(yearsInput.value),
  };

  const validationError = validateSimpleInterestInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSimpleInterest(input);

  setValue("interestResult", formatCurrency(result.totalInterest));
  setValue("amountResult", formatCurrency(result.totalAmount));
  setValue("principalResult", formatCurrency(result.principalInvested));
  setValue("monthlyResult", formatCurrency(result.monthlyInterest));
  setValue("dailyResult", formatCurrency(result.dailyInterest));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  principalInput.value = "";
  rateInput.value = "";
  yearsInput.value = "";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copySimpleInterestSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
