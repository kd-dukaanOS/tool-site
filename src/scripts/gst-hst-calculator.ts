import { calculateGstHst, validateGstHstInputs } from "../utils/gst-hst";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

function sel(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 2 });
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

  const amount = val("amount");
  const province = sel("province");
  const mode = sel("mode") as "add" | "remove";

  const validationError = validateGstHstInputs(amount, province);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateGstHst(amount, province, mode);

  setValue("preTaxAmountResult", fmtCurrency(result.preTaxAmount));
  setValue("taxAmountResult", fmtCurrency(result.taxAmount));
  setValue("totalAmountResult", fmtCurrency(result.totalAmount));
  setValue("taxRateResult", `${result.taxRate}%`);
  setSubtitle("taxRateResult", province);

  lastSummary = `
GST/HST Calculation Summary

Province: ${province}
Tax Rate: ${result.taxRate}%
Pre-Tax Amount: ${fmtCurrency(result.preTaxAmount)}
Tax Amount: ${fmtCurrency(result.taxAmount)}
Total Amount: ${fmtCurrency(result.totalAmount)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  const amountEl = document.getElementById("amount") as HTMLInputElement;
  if (amountEl) amountEl.value = "";
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