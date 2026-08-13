import {
  calculateValuation,
  validatePositiveNumber,
  formatCurrency,
  type ValuationMethod,
} from "../utils/business-batch-c";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const revenueInput = document.getElementById("annualRevenue") as HTMLInputElement;
const profitInput = document.getElementById("annualProfit") as HTMLInputElement;
const revenueMultipleInput = document.getElementById("revenueMultiple") as HTMLInputElement;
const earningsMultipleInput = document.getElementById("earningsMultiple") as HTMLInputElement;
const methodSelect = document.getElementById("valuationMethod") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastSummary = "";

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

  const annualRevenue = parseFloat(revenueInput.value);
  const annualProfit = parseFloat(profitInput.value);
  const revenueMultiple = parseFloat(revenueMultipleInput.value);
  const earningsMultiple = parseFloat(earningsMultipleInput.value);
  const method = (methodSelect?.value || "average") as ValuationMethod;

  const revenueError = validatePositiveNumber(annualRevenue, "annual revenue");
  if (revenueError) return showError(revenueError);

  if (Number.isNaN(annualProfit)) {
    return showError("Please enter a valid annual net profit.");
  }

  if (!revenueMultiple || revenueMultiple <= 0) {
    return showError("Please enter a revenue multiple greater than 0.");
  }

  if (!earningsMultiple || earningsMultiple <= 0) {
    return showError("Please enter an earnings multiple greater than 0.");
  }

  const result = calculateValuation(
    annualRevenue,
    annualProfit,
    revenueMultiple,
    earningsMultiple,
    method
  );

  setValue("finalValuationResult", formatCurrency(result.finalValuation));
  setValue("revenueValuationResult", formatCurrency(result.revenueValuation));
  setValue("earningsValuationResult", formatCurrency(result.earningsValuation));
  setSubtitle("finalValuationResult", `estimated using ${method} method`);

  lastSummary =
    `Business Valuation Estimate\n\n` +
    `Annual Revenue: ${formatCurrency(annualRevenue)}\n` +
    `Annual Net Profit: ${formatCurrency(annualProfit)}\n` +
    `Revenue Multiple: ${revenueMultiple}x\n` +
    `Earnings Multiple: ${earningsMultiple}x\n` +
    `Revenue Method Valuation: ${formatCurrency(result.revenueValuation)}\n` +
    `Earnings Method Valuation: ${formatCurrency(result.earningsValuation)}\n` +
    `Estimated Valuation (${method}): ${formatCurrency(result.finalValuation)}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  revenueInput.value = "";
  profitInput.value = "";
  revenueMultipleInput.value = "";
  earningsMultipleInput.value = "";
  if (methodSelect) methodSelect.value = "average";
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
