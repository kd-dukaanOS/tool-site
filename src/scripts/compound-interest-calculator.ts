import {
  calculateCompoundInterest,
  validateCompoundInterestInput,
  frequencyLabel,
  formatPercent,
  copyCompoundInterestSummary,
  type CompoundInterestInput,
  type CompoundInterestResult,
} from "../utils/compound-interest";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";

const principalInput = document.getElementById("principal") as HTMLInputElement;
const rateInput = document.getElementById("annualRate") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;
const frequencyInput = document.getElementById("frequency") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement | null;

let lastInput: CompoundInterestInput | null = null;
let lastResult: CompoundInterestResult | null = null;

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

  const input: CompoundInterestInput = {
    principal: parseFloat(principalInput.value),
    annualRate: parseFloat(rateInput.value),
    years: parseFloat(yearsInput.value),
    frequency: parseFloat(frequencyInput.value) || 1,
  };

  const validationError = validateCompoundInterestInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

 const result = calculateCompoundInterest(input);
  const currency = getSavedCurrency();

  setValue("maturityResult", formatCurrency(result.maturityValue, currency));
  setValue("interestResult", formatCurrency(result.totalInterest, currency));
  setValue("principalResult", formatCurrency(result.principalInvested, currency));
  setValue("earResult", formatPercent(result.effectiveAnnualRate));  setValue("multiplierResult", `${result.growthMultiplier.toFixed(2)}x`);
  setValue("frequencyResult", frequencyLabel(input.frequency));

  setSubtitle(
    "earResult",
    "True yearly return once compounding is applied"
  );

  renderSchedule(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderSchedule(result: CompoundInterestResult) {

  if (!scheduleBody) return;

  scheduleBody.innerHTML = "";

  result.yearlySchedule.forEach((row) => {

    const tr = document.createElement("tr");

    const currency = getSavedCurrency();
    tr.innerHTML = `
      <td>Year ${row.year}</td>
      <td>${formatCurrency(row.openingBalance, currency)}</td>
      <td>${formatCurrency(row.interestEarned, currency)}</td>
      <td>${formatCurrency(row.closingBalance, currency)}</td>
    `;

    scheduleBody.appendChild(tr);
  });
}

function resetCalculator() {
  principalInput.value = "";
  rateInput.value = "";
  yearsInput.value = "";
  frequencyInput.value = "1";
  clearError();

  lastInput = null;
  lastResult = null;

  if (scheduleBody) scheduleBody.innerHTML = "";

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyCompoundInterestSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

onCurrencyChange(() => {
  if (lastInput && lastResult) calculate();
});
onCurrencyChange(() => {
  if (lastInput && lastResult) calculate();
});