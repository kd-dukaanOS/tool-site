import {
  calculateRD,
  validateRDInput,
  formatCurrency,
  formatPercent,
  copyRDSummary,
  type RDInput,
  type RDResult,
} from "../utils/rd";

import { setValue, copyToClipboard } from "../utils/calculator";

const depositInput = document.getElementById("monthlyDeposit") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const tenureInput = document.getElementById("tenureMonths") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: RDInput | null = null;
let lastResult: RDResult | null = null;

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

  const input: RDInput = {
    monthlyDeposit: parseFloat(depositInput.value),
    annualRate: parseFloat(rateInput.value),
    tenureMonths: parseFloat(tenureInput.value),
  };

  const validationError = validateRDInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRD(input);

  setValue("maturityResult", formatCurrency(result.maturityValue));
  setValue("depositedResult", formatCurrency(result.totalDeposited));
  setValue("interestResult", formatCurrency(result.totalInterest));
  setValue("yieldResult", formatPercent(result.effectiveYield));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  depositInput.value = "";
  rateInput.value = "";
  tenureInput.value = "";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyRDSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
