import {
  calculateMortgage,
  validateMortgageInput,
  formatCurrency,
  copyMortgageSummary,
  type MortgageInput,
  type MortgageResult,
} from "../utils/mortgage";

import { setValue, copyToClipboard } from "../utils/calculator";

const homePriceInput = document.getElementById("homePrice") as HTMLInputElement;
const downPaymentInput = document.getElementById("downPayment") as HTMLInputElement;
const loanYearsInput = document.getElementById("loanYears") as HTMLInputElement;
const annualRateInput = document.getElementById("annualRate") as HTMLInputElement;
const propertyTaxInput = document.getElementById("propertyTaxAnnual") as HTMLInputElement;
const homeInsuranceInput = document.getElementById("homeInsuranceAnnual") as HTMLInputElement;
const pmiInput = document.getElementById("pmiAnnual") as HTMLInputElement;
const hoaInput = document.getElementById("hoaMonthly") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: MortgageInput | null = null;
let lastResult: MortgageResult | null = null;

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

  const input: MortgageInput = {
    homePrice: parseFloat(homePriceInput.value),
    downPayment: parseFloat(downPaymentInput.value) || 0,
    loanYears: parseFloat(loanYearsInput.value),
    annualRate: parseFloat(annualRateInput.value),
    propertyTaxAnnual: parseFloat(propertyTaxInput.value) || 0,
    homeInsuranceAnnual: parseFloat(homeInsuranceInput.value) || 0,
    pmiAnnual: parseFloat(pmiInput.value) || 0,
    hoaMonthly: parseFloat(hoaInput.value) || 0,
  };

  const validationError = validateMortgageInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateMortgage(input);

  setValue("totalMonthlyResult", formatCurrency(result.totalMonthlyPayment));
  setValue("principalInterestResult", formatCurrency(result.monthlyPrincipalInterest));
  setValue("loanAmountResult", formatCurrency(result.loanAmount));
  setValue("propertyTaxResult", formatCurrency(result.monthlyPropertyTax));
  setValue("insuranceResult", formatCurrency(result.monthlyHomeInsurance));
  setValue("pmiResult", formatCurrency(result.monthlyPMI));
  setValue("hoaResult", formatCurrency(result.monthlyHOA));
  setValue("totalInterestResult", formatCurrency(result.totalInterestPaid));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  homePriceInput.value = "";
  downPaymentInput.value = "";
  loanYearsInput.value = "";
  annualRateInput.value = "";
  propertyTaxInput.value = "";
  homeInsuranceInput.value = "";
  pmiInput.value = "";
  hoaInput.value = "";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyMortgageSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
