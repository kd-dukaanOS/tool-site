import { calculateUkStampDuty, validateUkStampDutyInputs } from "../utils/uk-stamp-duty";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

function sel(id: string): string {
  return (document.getElementById(id) as HTMLSelectElement)?.value || "standard";
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

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

  const purchasePrice = val("purchasePrice");
  const buyerType = sel("buyerType") as "standard" | "first-time" | "additional";

  const validationError = validateUkStampDutyInputs(purchasePrice);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateUkStampDuty(purchasePrice, buyerType);
  const netAfterTax = purchasePrice + result.stampDutyOwed;

  setValue("stampDutyOwedResult", fmtCurrency(result.stampDutyOwed));
  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(2)}%`);
  setValue("totalCostResult", fmtCurrency(netAfterTax));
  setValue("purchasePriceResult", fmtCurrency(purchasePrice));
  setSubtitle("stampDutyOwedResult", buyerType === "additional" ? "Includes 5% surcharge" : " ");

  const breakdownText = result.breakdown.map((b) => `${b.band}: ${b.rate}% = ${fmtCurrency(b.taxForBand)}`).join("\n");

  lastSummary = `
UK Stamp Duty Land Tax Summary

Purchase Price: ${fmtCurrency(purchasePrice)}
Buyer Type: ${buyerType}
Stamp Duty Owed: ${fmtCurrency(result.stampDutyOwed)}
Effective Rate: ${result.effectiveRate.toFixed(2)}%
Total Cost: ${fmtCurrency(netAfterTax)}

Breakdown:
${breakdownText}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  const priceEl = document.getElementById("purchasePrice") as HTMLInputElement;
  if (priceEl) priceEl.value = "";
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