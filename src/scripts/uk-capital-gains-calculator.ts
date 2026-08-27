import { calculateUkCapitalGains, validateUkCapitalGainsInputs } from "../utils/uk-capital-gains";
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

const fieldIds = ["totalGain", "otherTaxableIncome", "personalAllowance"];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
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

  const [totalGain, otherTaxableIncome, personalAllowance] = fieldIds.map(val);

  const validationError = validateUkCapitalGainsInputs(totalGain);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateUkCapitalGains(totalGain, otherTaxableIncome, personalAllowance || 12570);

  setValue("totalTaxOwedResult", fmtCurrency(result.totalTaxOwed));
  setValue("taxableGainResult", fmtCurrency(result.taxableGain));
  setValue("taxAtBasicRateResult", fmtCurrency(result.taxAtBasicRate));
  setValue("taxAtHigherRateResult", fmtCurrency(result.taxAtHigherRate));
  setSubtitle("totalTaxOwedResult", "After £3,000 annual exemption");

  lastSummary = `
UK Capital Gains Tax Summary

Total Gain: ${fmtCurrency(result.totalGain)}
Taxable Gain (after £3,000 exemption): ${fmtCurrency(result.taxableGain)}
Tax at 18% (basic rate band): ${fmtCurrency(result.taxAtBasicRate)}
Tax at 24% (higher rate): ${fmtCurrency(result.taxAtHigherRate)}
Total Tax Owed: ${fmtCurrency(result.totalTaxOwed)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  fieldIds.forEach((id) => {
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