import { calculateCanadaCapitalGains, validateCanadaCapitalGainsInputs } from "../utils/canada-capital-gains";
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

const fieldIds = ["proceedsOfDisposition", "adjustedCostBase", "outlaysAndExpenses", "marginalTaxRate"];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
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

  const [proceedsOfDisposition, adjustedCostBase, outlaysAndExpenses, marginalTaxRate] = fieldIds.map(val);

  const validationError = validateCanadaCapitalGainsInputs(proceedsOfDisposition, adjustedCostBase, marginalTaxRate);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateCanadaCapitalGains(proceedsOfDisposition, adjustedCostBase, outlaysAndExpenses, marginalTaxRate);

  setValue("capitalGainResult", fmtCurrency(result.capitalGain));
  setValue("taxableCapitalGainResult", fmtCurrency(result.taxableCapitalGain));
  setValue("estimatedTaxResult", fmtCurrency(result.estimatedTax));
  setValue("inclusionRateResult", `${result.inclusionRate}%`);
  setSubtitle("taxableCapitalGainResult", "Amount added to taxable income");

  lastSummary = `
Canada Capital Gains Tax Summary

Capital Gain: ${fmtCurrency(result.capitalGain)}
Inclusion Rate: ${result.inclusionRate}%
Taxable Capital Gain: ${fmtCurrency(result.taxableCapitalGain)}
Estimated Tax Owed: ${fmtCurrency(result.estimatedTax)}
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