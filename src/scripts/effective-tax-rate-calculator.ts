import { calculateEffectiveTaxRate, validateEffectiveTaxRateInputs } from "../utils/effective-tax-rate";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

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

  const grossIncome = val("grossIncome");
  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as "single" | "mfj" | "hoh";
  const useStandardDeduction = (document.getElementById("deductionType") as HTMLSelectElement)?.value === "standard";
  const itemizedDeductions = val("itemizedDeductions");

  const validationError = validateEffectiveTaxRateInputs(grossIncome);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEffectiveTaxRate(grossIncome, filingStatus, useStandardDeduction, itemizedDeductions);

  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(2)}%`);
  setValue("marginalRateResult", `${result.marginalRate.toFixed(0)}%`);
  setValue("totalTaxResult", fmtCurrency(result.totalTax));
  setValue("afterTaxResult", fmtCurrency(result.afterTaxIncome));
  setSubtitle("totalTaxResult", `On ${fmtCurrency(result.taxableIncome)} taxable income`);

  lastSummary = `
Effective Tax Rate Summary

Effective Tax Rate: ${result.effectiveRate.toFixed(2)}%
Marginal Tax Bracket: ${result.marginalRate.toFixed(0)}%
Taxable Income: ${fmtCurrency(result.taxableIncome)}
Total Federal Tax: ${fmtCurrency(result.totalTax)}
After-Tax Income: ${fmtCurrency(result.afterTaxIncome)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ["grossIncome", "itemizedDeductions"].forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);