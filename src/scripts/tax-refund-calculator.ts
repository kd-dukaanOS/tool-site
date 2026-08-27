import { calculateTaxRefund, validateTaxRefundInputs } from "../utils/tax-refund";
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

const numericFieldIds = [
  "annualGrossIncome", "otherIncome", "adjustments",
  "itemizedDeductions", "taxCreditsAnnual",
  "federalTaxWithheldAnnual", "estimatedPaymentsAnnual",
];

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

  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as
    "single" | "married" | "headOfHousehold";

  const [
    annualGrossIncome, otherIncome, adjustments,
    itemizedDeductions, taxCreditsAnnual,
    federalTaxWithheldAnnual, estimatedPaymentsAnnual,
  ] = numericFieldIds.map(val);

  const validationError = validateTaxRefundInputs(annualGrossIncome);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateTaxRefund(
    filingStatus, annualGrossIncome, otherIncome, adjustments,
    itemizedDeductions, taxCreditsAnnual, federalTaxWithheldAnnual, estimatedPaymentsAnnual
  );

  setValue("refundOrOwedResult", fmtCurrency(result.refundOrOwed));
  setValue("taxLiabilityResult", fmtCurrency(result.taxLiability));
  setValue("taxableIncomeResult", fmtCurrency(result.taxableIncome));
  setValue("effectiveRateResult", `${result.effectiveTaxRate.toFixed(1)}%`);
  setSubtitle("refundOrOwedResult", result.isRefund ? "Estimated Refund" : "Estimated Amount Owed");

  lastSummary = `
Tax Refund Summary

${result.isRefund ? "Estimated Refund" : "Estimated Amount Owed"}: ${fmtCurrency(result.refundOrOwed)}
Tax Liability: ${fmtCurrency(result.taxLiability)}
Taxable Income: ${fmtCurrency(result.taxableIncome)}
Effective Tax Rate: ${result.effectiveTaxRate.toFixed(1)}%
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numericFieldIds.forEach((id) => {
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