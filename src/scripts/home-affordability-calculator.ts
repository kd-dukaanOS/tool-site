// src/scripts/home-affordability-calculator.ts
import {
  validateHomeAffordabilityInput,
  calculateHomeAffordability,
  formatCurrency,
  copyHomeAffordabilitySummary,
} from "../utils/home-affordability";
import { setValue, copyToClipboard } from "../utils/calculator";

const annualIncomeInput = document.getElementById("annualIncome") as HTMLInputElement;
const monthlyDebtsInput = document.getElementById("monthlyDebts") as HTMLInputElement;
const downPaymentInput = document.getElementById("downPayment") as HTMLInputElement;
const interestRateInput = document.getElementById("interestRate") as HTMLInputElement;
const loanTermInput = document.getElementById("loanTermYears") as HTMLInputElement;
const propertyTaxInput = document.getElementById("propertyTaxRate") as HTMLInputElement;
const insuranceInput = document.getElementById("annualInsurance") as HTMLInputElement;
const maxDTIInput = document.getElementById("maxDTI") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: Parameters<typeof calculateHomeAffordability>[0] | null = null;
let lastResult: ReturnType<typeof calculateHomeAffordability> | null = null;

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

  const input = {
    annualIncome: parseFloat(annualIncomeInput.value),
    monthlyDebts: parseFloat(monthlyDebtsInput.value) || 0,
    downPayment: parseFloat(downPaymentInput.value) || 0,
    interestRate: parseFloat(interestRateInput.value),
    loanTermYears: parseFloat(loanTermInput.value),
    propertyTaxRate: parseFloat(propertyTaxInput.value) || 0,
    annualInsurance: parseFloat(insuranceInput.value) || 0,
    maxDTI: parseFloat(maxDTIInput.value),
  };

  const error = validateHomeAffordabilityInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateHomeAffordability(input);

  setValue("maxHomePriceResult", formatCurrency(result.maxHomePrice));
  setValue("maxLoanAmountResult", formatCurrency(result.maxLoanAmount));
  setValue("monthlyPaymentResult", formatCurrency(result.totalMonthlyPayment));
  setValue("monthlyPIResult", formatCurrency(result.monthlyPI));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  annualIncomeInput.value = "";
  monthlyDebtsInput.value = "";
  downPaymentInput.value = "";
  interestRateInput.value = "";
  loanTermInput.value = "30";
  propertyTaxInput.value = "1.1";
  insuranceInput.value = "1500";
  maxDTIInput.value = "36";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyHomeAffordabilitySummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);