import { calculatePresentValue, validatePresentValueInputs } from "../utils/present-value";
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

const fieldIds = ["futureValue", "discountRate", "years", "compoundingFrequency"];

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

  const [futureValue, discountRate, years, compoundingFrequency] = fieldIds.map(val);

  const validationError = validatePresentValueInputs(futureValue, years, discountRate);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculatePresentValue(futureValue, discountRate, years, compoundingFrequency || 12);

  setValue("presentValueResult", fmtCurrency(result.presentValue));
  setValue("futureValueOutResult", fmtCurrency(result.totalFutureValue));
  setValue("discountAmountResult", fmtCurrency(result.discountAmount));
  setSubtitle("presentValueResult", `Discounted over ${years} years`);

  lastSummary = `
Present Value Summary

Present Value: ${fmtCurrency(result.presentValue)}
Future Value: ${fmtCurrency(result.totalFutureValue)}
Discount Amount: ${fmtCurrency(result.discountAmount)}
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