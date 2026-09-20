// src/scripts/loan-amortization-calculator.ts
import {
  validateLoanAmortizationInput,
  calculateLoanAmortization,
  formatCurrency,
  copyLoanAmortizationSummary,
} from "../utils/loan-amortization";
import { setValue, copyToClipboard } from "../utils/calculator";

const loanAmountInput = document.getElementById("loanAmount") as HTMLInputElement;
const interestRateInput = document.getElementById("interestRate") as HTMLInputElement;
const termYearsInput = document.getElementById("termYears") as HTMLInputElement;
const extraPaymentInput = document.getElementById("extraMonthlyPayment") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const scheduleTableBody = document.getElementById("scheduleTableBody") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastInput: Parameters<typeof calculateLoanAmortization>[0] | null = null;
let lastResult: ReturnType<typeof calculateLoanAmortization> | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}
function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function renderScheduleTable(schedule: ReturnType<typeof calculateLoanAmortization>["yearlySchedule"]) {
  if (!scheduleTableBody) return;
  scheduleTableBody.innerHTML = schedule
    .map(
      (row) => `<tr>
        <td>${row.year}</td>
        <td>${formatCurrency(row.principalPaid)}</td>
        <td>${formatCurrency(row.interestPaid)}</td>
        <td>${formatCurrency(row.endingBalance)}</td>
      </tr>`
    )
    .join("");
}

function calculate() {
  clearError();

  const input = {
    loanAmount: parseFloat(loanAmountInput.value),
    interestRate: parseFloat(interestRateInput.value),
    termYears: parseFloat(termYearsInput.value),
    extraMonthlyPayment: parseFloat(extraPaymentInput.value) || 0,
  };

  const error = validateLoanAmortizationInput(input, lang);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateLoanAmortization(input);

  setValue("monthlyPaymentResult", formatCurrency(result.monthlyPayment));
  setValue("totalInterestResult", formatCurrency(result.totalInterest));
  setValue("totalPaymentResult", formatCurrency(result.totalPayment));

  const years = Math.floor(result.payoffMonths / 12);
  const months = result.payoffMonths % 12;
  setValue("payoffTimeResult", lang === "es" ? `${years}a ${months}m` : `${years}y ${months}m`);

  renderScheduleTable(result.yearlySchedule);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  loanAmountInput.value = "";
  interestRateInput.value = "";
  termYearsInput.value = "";
  extraPaymentInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyLoanAmortizationSummary(lastInput, lastResult, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);