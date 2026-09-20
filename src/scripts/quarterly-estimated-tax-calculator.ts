// src/scripts/quarterly-estimated-tax-calculator.ts
import {
  validateQuarterlyTaxInput,
  calculateQuarterlyTax,
  formatCurrency,
  copyQuarterlyTaxSummary,
} from "../utils/quarterly-estimated-tax";
import type { FilingStatus, TaxYear } from "../utils/us-federal-tax";
import { setValue, copyToClipboard } from "../utils/calculator";

const seIncomeInput = document.getElementById("selfEmploymentIncome") as HTMLInputElement;
const otherIncomeInput = document.getElementById("otherIncome") as HTMLInputElement;
const filingStatusSelect = document.getElementById("filingStatus") as HTMLSelectElement;
const taxYearSelect = document.getElementById("taxYear") as HTMLSelectElement;
const deductionModeSelect = document.getElementById("deductionMode") as HTMLSelectElement;
const itemizedRow = document.getElementById("itemizedRow") as HTMLElement;
const itemizedInput = document.getElementById("itemizedDeduction") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastInput: Parameters<typeof calculateQuarterlyTax>[0] | null = null;
let lastResult: ReturnType<typeof calculateQuarterlyTax> | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}
function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function toggleItemizedRow() {
  itemizedRow.hidden = deductionModeSelect.value === "standard";
}

function calculate() {
  clearError();

  const input = {
    selfEmploymentIncome: parseFloat(seIncomeInput.value) || 0,
    otherIncome: parseFloat(otherIncomeInput.value) || 0,
    filingStatus: filingStatusSelect.value as FilingStatus,
    taxYear: taxYearSelect.value as TaxYear,
    useStandardDeduction: deductionModeSelect.value === "standard",
    itemizedDeduction: parseFloat(itemizedInput.value) || 0,
  };

  const error = validateQuarterlyTaxInput(input, lang);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateQuarterlyTax(input);

  setValue("quarterlyPaymentResult", formatCurrency(result.quarterlyPayment));
  setValue("totalAnnualTaxResult", formatCurrency(result.totalAnnualTax));
  setValue("seTaxResult", formatCurrency(result.seTax));
  setValue("federalIncomeTaxResult", formatCurrency(result.federalIncomeTax));
  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(1)}%`);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  seIncomeInput.value = "";
  otherIncomeInput.value = "";
  filingStatusSelect.value = "single";
  taxYearSelect.value = "2026";
  deductionModeSelect.value = "standard";
  itemizedInput.value = "";
  toggleItemizedRow();
  clearError();
  lastInput = null;
  lastResult = null;
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

function handleCopy() {
  if (!lastInput || !lastResult) return;
  copyToClipboard(copyQuarterlyTaxSummary(lastInput, lastResult, lang));
}

deductionModeSelect?.addEventListener("change", toggleItemizedRow);
calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);

toggleItemizedRow();