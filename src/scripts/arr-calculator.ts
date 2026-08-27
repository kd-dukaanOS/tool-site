import { calculateARR, validateARRInputs } from "../utils/arr";
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
  "currentMRR", "newBusinessMRR", "expansionMRR", "contractionMRR", "churnedMRR", "projectionMonths",
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

  const [currentMRR, newBusinessMRR, expansionMRR, contractionMRR, churnedMRR, projectionMonths] = fieldIds.map(val);

  const validationError = validateARRInputs(currentMRR, projectionMonths);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateARR(currentMRR, newBusinessMRR, expansionMRR, contractionMRR, churnedMRR, projectionMonths || 12);

  setValue("currentARRResult", fmtCurrency(result.currentARR));
  setValue("netNewARRResult", fmtCurrency(result.netNewARR));
  setValue("projectedARRResult", fmtCurrency(result.projectedARR));
  setValue("arrGrowthRateResult", fmtPercent(result.arrGrowthRate));
  setSubtitle("projectedARRResult", `In ${projectionMonths || 12} months`);
  setSubtitle("netNewARRResult", `${fmtPercent(result.monthlyGrowthRate * 100)} monthly growth`);

  lastSummary = `
ARR Summary

Current ARR: ${fmtCurrency(result.currentARR)}
Net New ARR (annualized): ${fmtCurrency(result.netNewARR)}
Projected ARR (${projectionMonths || 12} months): ${fmtCurrency(result.projectedARR)}
ARR Growth Rate: ${fmtPercent(result.arrGrowthRate)}
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