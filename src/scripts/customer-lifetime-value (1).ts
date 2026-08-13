import {
  calculateCLV,
  validatePositiveNumber,
  formatCurrency,
} from "../utils/business-batch-c";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const orderValueInput = document.getElementById("avgOrderValue") as HTMLInputElement;
const frequencyInput = document.getElementById("purchaseFrequency") as HTMLInputElement;
const lifespanInput = document.getElementById("lifespanYears") as HTMLInputElement;
const marginInput = document.getElementById("grossMargin") as HTMLInputElement;

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

  const avgOrderValue = parseFloat(orderValueInput.value);
  const purchaseFrequency = parseFloat(frequencyInput.value);
  const lifespanYears = parseFloat(lifespanInput.value);
  const grossMargin = marginInput.value ? parseFloat(marginInput.value) : 100;

  const orderError = validatePositiveNumber(avgOrderValue, "average order value");
  if (orderError) return showError(orderError);

  if (!purchaseFrequency || purchaseFrequency <= 0) {
    return showError("Please enter a purchase frequency greater than 0.");
  }

  if (!lifespanYears || lifespanYears <= 0) {
    return showError("Please enter a customer lifespan greater than 0.");
  }

  if (grossMargin < 0 || grossMargin > 100) {
    return showError("Gross margin must be between 0 and 100.");
  }

  const result = calculateCLV(avgOrderValue, purchaseFrequency, lifespanYears, grossMargin);

  setValue("clvGrossResult", formatCurrency(result.clvGross));
  setValue("clvNetResult", formatCurrency(result.clvNet));
  setValue("annualValueResult", formatCurrency(avgOrderValue * purchaseFrequency));
  setSubtitle("clvNetResult", `at ${grossMargin}% gross margin`);

  lastSummary =
    `Customer Lifetime Value Summary\n\n` +
    `Average Order Value: ${formatCurrency(avgOrderValue)}\n` +
    `Purchase Frequency: ${purchaseFrequency}/year\n` +
    `Customer Lifespan: ${lifespanYears} years\n` +
    `Gross Margin: ${grossMargin}%\n` +
    `Gross CLV: ${formatCurrency(result.clvGross)}\n` +
    `Net CLV: ${formatCurrency(result.clvNet)}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  orderValueInput.value = "";
  frequencyInput.value = "";
  lifespanInput.value = "";
  marginInput.value = "";
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
