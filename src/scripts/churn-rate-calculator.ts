import { calculateChurnRate, validateChurnRateInputs } from "../utils/churn-rate";
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

const fieldIds = [
  "customersStartOfPeriod", "customersLost", "mrrStartOfPeriod", "mrrChurned", "mrrExpansion", "projectionMonths",
];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function fmtPercent(n: number): string {
  return `${n.toFixed(2)}%`;
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

  const [customersStartOfPeriod, customersLost, mrrStartOfPeriod, mrrChurned, mrrExpansion, projectionMonths] = fieldIds.map(val);

  const validationError = validateChurnRateInputs(customersStartOfPeriod, mrrStartOfPeriod);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateChurnRate(customersStartOfPeriod, customersLost, mrrStartOfPeriod, mrrChurned, mrrExpansion, projectionMonths || 12);

  setValue("customerChurnResult", fmtPercent(result.customerChurnRate));
  setValue("revenueChurnResult", fmtPercent(result.revenueChurnRate));
  setValue("netRevenueChurnResult", fmtPercent(result.netRevenueChurnRate));
  setValue("projectedCustomersResult", Math.round(result.projectedCustomersRemaining).toLocaleString());
  setSubtitle("projectedCustomersResult", `After ${projectionMonths || 12} months`);
  setSubtitle("netRevenueChurnResult", result.netRevenueChurned <= 0 ? "Negative churn (net expansion)" : " ");

  lastSummary = `
Churn Rate Summary

Customer Churn Rate: ${fmtPercent(result.customerChurnRate)}
Revenue Churn Rate: ${fmtPercent(result.revenueChurnRate)}
Net Revenue Churn Rate: ${fmtPercent(result.netRevenueChurnRate)}
Customers Lost: ${result.customersLost}
Revenue Churned: ${fmtCurrency(result.revenueChurned)}
Projected Customers Remaining (${projectionMonths || 12} months): ${Math.round(result.projectedCustomersRemaining).toLocaleString()}
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