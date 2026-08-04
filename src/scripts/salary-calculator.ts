import {
  calculateSalary,
  validateSalaryInput,
  formatCurrency,
  copySalarySummary,
  type SalaryInput,
  type SalaryResult,
} from "../utils/salary";

import { setValue, copyToClipboard } from "../utils/calculator";

const ctcInput = document.getElementById("annualCTC") as HTMLInputElement;
const basicInput = document.getElementById("basicPercent") as HTMLInputElement;
const hraInput = document.getElementById("hraPercent") as HTMLInputElement;
const employeePFInput = document.getElementById("employeePFPercent") as HTMLInputElement;
const employerPFInput = document.getElementById("employerPFPercent") as HTMLInputElement;
const ptInput = document.getElementById("professionalTaxMonthly") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: SalaryInput | null = null;
let lastResult: SalaryResult | null = null;

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

  const input: SalaryInput = {
    annualCTC: parseFloat(ctcInput.value),
    basicPercent: parseFloat(basicInput.value) || 40,
    hraPercent: parseFloat(hraInput.value) || 50,
    employeePFPercent: parseFloat(employeePFInput.value) || 12,
    employerPFPercent: parseFloat(employerPFInput.value) || 12,
    professionalTaxMonthly: parseFloat(ptInput.value) || 200,
  };

  const validationError = validateSalaryInput(input);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSalary(input);

  setValue("monthlyTakeHomeResult", formatCurrency(result.monthlyNetTakeHome));
  setValue("annualTakeHomeResult", formatCurrency(result.annualNetTakeHome));
  setValue("monthlyGrossResult", formatCurrency(result.monthlyGross));
  setValue("basicResult", formatCurrency(result.monthlyBasic));
  setValue("hraResult", formatCurrency(result.monthlyHRA));
  setValue("specialAllowanceResult", formatCurrency(result.annualSpecialAllowance / 12));
  setValue("employeePFResult", formatCurrency(result.annualEmployeePF / 12));
  setValue("employerPFResult", formatCurrency(result.annualEmployerPF / 12));
  setValue("professionalTaxResult", formatCurrency(result.annualProfessionalTax));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ctcInput.value = "";
  basicInput.value = "40";
  hraInput.value = "50";
  employeePFInput.value = "12";
  employerPFInput.value = "12";
  ptInput.value = "200";
  clearError();

  lastInput = null;
  lastResult = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copySalarySummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
