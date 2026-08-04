import {
  calculatePPF,
  validatePPFInput,
  formatCurrency,
  copyPPFSummary,
  type PPFInput,
  type PPFResult,
} from "../utils/ppf";

import { setValue, copyToClipboard } from "../utils/calculator";

const investmentInput = document.getElementById("annualInvestment") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const tenureInput = document.getElementById("tenureYears") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement | null;

let lastInput: PPFInput | null = null;
let lastResult: PPFResult | null = null;

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

  const input: PPFInput = {
    annualInvestment: parseFloat(investmentInput.value),
    annualRate: parseFloat(rateInput.value),
    tenureYears: parseFloat(tenureInput.value),
  };

  const validationError = validatePPFInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculatePPF(input);

  setValue("maturityResult", formatCurrency(result.maturityValue));
  setValue("investedResult", formatCurrency(result.totalInvested));
  setValue("interestResult", formatCurrency(result.totalInterest));

  renderSchedule(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderSchedule(result: PPFResult) {

  if (!scheduleBody) return;

  scheduleBody.innerHTML = "";

  result.yearlySchedule.forEach((row) => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>Year ${row.year}</td>
      <td>${formatCurrency(row.openingBalance)}</td>
      <td>${formatCurrency(row.investment)}</td>
      <td>${formatCurrency(row.interestEarned)}</td>
      <td>${formatCurrency(row.closingBalance)}</td>
    `;

    scheduleBody.appendChild(tr);
  });
}

function resetCalculator() {
  investmentInput.value = "";
  rateInput.value = "";
  tenureInput.value = "15";
  clearError();

  lastInput = null;
  lastResult = null;

  if (scheduleBody) scheduleBody.innerHTML = "";

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyPPFSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
