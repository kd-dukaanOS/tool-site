// src/scripts/bonus-calculator.ts
import { validateBonusInput, calculateBonus, formatCurrency, copyBonusSummary } from "../utils/bonus";
import { setValue, copyToClipboard } from "../utils/calculator";

const annualSalaryInput = document.getElementById("annualSalary") as HTMLInputElement;
const bonusPercentInput = document.getElementById("bonusPercent") as HTMLInputElement;
const taxRateInput = document.getElementById("taxRate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: { annualSalary: number; bonusPercent: number; taxRate: number } | null = null;
let lastResult: ReturnType<typeof calculateBonus> | null = null;

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
    annualSalary: parseFloat(annualSalaryInput.value),
    bonusPercent: parseFloat(bonusPercentInput.value),
    taxRate: parseFloat(taxRateInput.value) || 0,
  };

  const error = validateBonusInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateBonus(input);

  setValue("netBonusResult", formatCurrency(result.netBonus));
  setValue("bonusAmountResult", formatCurrency(result.bonusAmount));
  setValue("taxOnBonusResult", formatCurrency(result.taxOnBonus));
  setValue("totalCompResult", formatCurrency(result.newTotalCompensation));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  annualSalaryInput.value = "";
  bonusPercentInput.value = "";
  taxRateInput.value = "";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyBonusSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);