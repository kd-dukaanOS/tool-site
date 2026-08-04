import {
  calculateInflation,
  validateInflationInput,
  formatCurrency,
  formatPercent,
  copyInflationSummary,
  type InflationInput,
  type InflationResult,
} from "../utils/inflation";

import { setValue, copyToClipboard } from "../utils/calculator";

const amountInput = document.getElementById("amount") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: InflationInput | null = null;
let lastResult: InflationResult | null = null;

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

  const input: InflationInput = {
    amount: parseFloat(amountInput.value),
    years: parseFloat(yearsInput.value),
    annualRate: parseFloat(rateInput.value),
  };

  const validationError = validateInflationInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateInflation(input);

  setValue("futureValueResult", formatCurrency(result.futureValueNeeded));
  setValue("purchasingPowerResult", formatCurrency(result.purchasingPowerFuture));
  setValue("totalInflationResult", formatPercent(result.totalInflationPercent));
  setValue("powerLostResult", formatPercent(result.purchasingPowerLostPercent));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  amountInput.value = "";
  yearsInput.value = "";
  rateInput.value = "";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyInflationSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
