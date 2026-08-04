import {
  calculateFD,
  validateFDInput,
  formatCurrency,
  formatPercent,
  copyFDSummary,
  type FDInput,
  type FDResult,
} from "../utils/fd";

import { setValue, copyToClipboard } from "../utils/calculator";

const principalInput = document.getElementById("principal") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const tenureInput = document.getElementById("tenureYears") as HTMLInputElement;
const frequencyInput = document.getElementById("compoundingFrequency") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: FDInput | null = null;
let lastResult: FDResult | null = null;

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

  const input: FDInput = {
    principal: parseFloat(principalInput.value),
    annualRate: parseFloat(rateInput.value),
    tenureYears: parseFloat(tenureInput.value),
    compoundingFrequency: parseFloat(frequencyInput.value) || 4,
  };

  const validationError = validateFDInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateFD(input);

  setValue("maturityResult", formatCurrency(result.maturityValue));
  setValue("interestResult", formatCurrency(result.totalInterest));
  setValue("principalResult", formatCurrency(result.principalInvested));
  setValue("yieldResult", formatPercent(result.effectiveAnnualYield));
  setValue("tdsResult", formatCurrency(result.estimatedTDS));
  setValue("netInterestResult", formatCurrency(result.netInterestAfterTDS));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  principalInput.value = "";
  rateInput.value = "";
  tenureInput.value = "";
  frequencyInput.value = "4";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyFDSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
