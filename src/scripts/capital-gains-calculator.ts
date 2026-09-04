// src/scripts/capital-gains-calculator.ts
import {
  validateCapitalGainsInput,
  calculateCapitalGains,
  formatCurrency,
  copyCapitalGainsSummary,
  type HoldingPeriod,
} from "../utils/capital-gains-tax";
import type { FilingStatus, TaxYear } from "../utils/us-federal-tax";
import { setValue, copyToClipboard } from "../utils/calculator";

const purchasePriceInput = document.getElementById("purchasePrice") as HTMLInputElement;
const salePriceInput = document.getElementById("salePrice") as HTMLInputElement;
const otherIncomeInput = document.getElementById("otherIncome") as HTMLInputElement;
const filingStatusSelect = document.getElementById("filingStatus") as HTMLSelectElement;
const taxYearSelect = document.getElementById("taxYear") as HTMLSelectElement;
const holdingPeriodSelect = document.getElementById("holdingPeriod") as HTMLSelectElement;
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
let lastInput: Parameters<typeof calculateCapitalGains>[0] | null = null;
let lastResult: ReturnType<typeof calculateCapitalGains> | null = null;

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
    purchasePrice: parseFloat(purchasePriceInput.value),
    salePrice: parseFloat(salePriceInput.value),
    otherIncome: parseFloat(otherIncomeInput.value) || 0,
    filingStatus: filingStatusSelect.value as FilingStatus,
    taxYear: taxYearSelect.value as TaxYear,
    holdingPeriod: holdingPeriodSelect.value as HoldingPeriod,
    useStandardDeduction: deductionModeSelect.value === "standard",
    itemizedDeduction: parseFloat(itemizedInput.value) || 0,
  };

  const error = validateCapitalGainsInput(input, lang);
  if (error) {
    showError(error);
    return;
  }

  const result = calculateCapitalGains(input);

  setValue("gainResult", formatCurrency(result.gain));
  setValue("taxResult", formatCurrency(result.capitalGainsTax));
  setValue("rateResult", `${result.effectiveRateOnGain.toFixed(1)}%`);
  setValue("afterTaxResult", formatCurrency(result.afterTaxGain));

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  purchasePriceInput.value = "";
  salePriceInput.value = "";
  otherIncomeInput.value = "";
  filingStatusSelect.value = "single";
  taxYearSelect.value = "2026";
  holdingPeriodSelect.value = "long";
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
  copyToClipboard(copyCapitalGainsSummary(lastInput, lastResult, lang));
}

deductionModeSelect?.addEventListener("change", toggleItemizedRow);
calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", handleCopy);

toggleItemizedRow();