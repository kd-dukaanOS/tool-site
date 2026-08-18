// src/scripts/business-valuation-estimator.ts
import {
  validateBusinessValuationInput,
  calculateBusinessValuation,
  formatCurrency,
  copyBusinessValuationSummary,
  type BusinessValuationInput,
} from "../utils/business-valuation";
import { setValue, copyToClipboard } from "../utils/calculator";

const annualRevenueInput = document.getElementById("annualRevenue") as HTMLInputElement;
const annualProfitInput = document.getElementById("annualProfit") as HTMLInputElement;
const revenueMultipleInput = document.getElementById("revenueMultiple") as HTMLInputElement;
const earningsMultipleInput = document.getElementById("earningsMultiple") as HTMLInputElement;
const valuationMethodSelect = document.getElementById("valuationMethod") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BusinessValuationInput | null = null;
let lastResult: ReturnType<typeof calculateBusinessValuation> | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}
function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function calculate() {
  clearError();

  const input: BusinessValuationInput = {
    annualRevenue: parseFloat(annualRevenueInput.value),
    annualProfit: parseFloat(annualProfitInput.value),
    revenueMultiple: parseFloat(revenueMultipleInput.value),
    earningsMultiple: parseFloat(earningsMultipleInput.value),
    valuationMethod: (valuationMethodSelect.value as BusinessValuationInput["valuationMethod"]) || "average",
  };

  const error = validateBusinessValuationInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateBusinessValuation(input);

  setValue("finalValuationResult", formatCurrency(result.finalValuation));
  setValue("revenueValuationResult", formatCurrency(result.revenueValuation));
  setValue("earningsValuationResult", formatCurrency(result.earningsValuation));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  annualRevenueInput.value = "";
  annualProfitInput.value = "";
  revenueMultipleInput.value = "";
  earningsMultipleInput.value = "";
  valuationMethodSelect.value = "average";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyBusinessValuationSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);