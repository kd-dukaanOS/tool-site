// src/scripts/self-employment-tax-calculator.ts
import {
  validateSelfEmploymentTaxInput,
  calculateSelfEmploymentTax,
  formatCurrency,
  copySelfEmploymentTaxSummary,
  type FilingStatus,
  type TaxYear,
} from "../utils/self-employment-tax";
import { setValue, copyToClipboard } from "../utils/calculator";

const netEarningsInput = document.getElementById("netEarnings") as HTMLInputElement;
const filingStatusSelect = document.getElementById("filingStatus") as HTMLSelectElement;
const taxYearSelect = document.getElementById("taxYear") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: Parameters<typeof calculateSelfEmploymentTax>[0] | null = null;
let lastResult: ReturnType<typeof calculateSelfEmploymentTax> | null = null;

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
    netEarnings: parseFloat(netEarningsInput.value),
    filingStatus: filingStatusSelect.value as FilingStatus,
    taxYear: taxYearSelect.value as TaxYear,
  };

  const error = validateSelfEmploymentTaxInput(input);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateSelfEmploymentTax(input);

  setValue("totalSETaxResult", formatCurrency(result.totalSETax));
  setValue("socialSecurityResult", formatCurrency(result.socialSecurityTax));
  setValue("medicareResult", formatCurrency(result.medicareTax + result.additionalMedicareTax));
  setValue("deductibleHalfResult", formatCurrency(result.deductibleHalf));
  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(1)}%`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  netEarningsInput.value = "";
  filingStatusSelect.value = "single";
  taxYearSelect.value = "2026";
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copySelfEmploymentTaxSummary(lastInput, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);