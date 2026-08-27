import { calculateCoastFire, validateCoastFireInputs } from "../utils/coast-fire";
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
  "currentAge", "currentSavings", "targetRetirementAge", "annualExpenses",
  "annualContribution", "expectedReturnRate", "inflationRate", "withdrawalRate",
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
  const [
    currentAge, currentSavings, targetRetirementAge, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate,
  ] = fieldIds.map(val);

  const validationError = validateCoastFireInputs(currentAge, targetRetirementAge, annualExpenses, withdrawalRate);
  if (validationError) { showError(validationError); return; }

  const result = calculateCoastFire(
    currentAge, currentSavings, targetRetirementAge, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate
  );

  setValue("coastFireNumberResult", fmtCurrency(result.coastFireNumber));
  setValue("statusResult", result.isCoastFireReached ? "Reached" : "Not Yet");
  setValue("coastFireAgeResult", result.coastFireAge === null ? "Beyond timeline" : `${result.coastFireAge}`);
  setValue("projectedBalanceResult", fmtCurrency(result.projectedBalanceAtRetirement));
  setSubtitle("statusResult", result.isCoastFireReached ? "You can stop contributing" : "Keep contributing");

  lastSummary = `
Coast FIRE Summary

Coast FIRE Number: ${fmtCurrency(result.coastFireNumber)}
Status: ${result.isCoastFireReached ? "Reached" : "Not Yet Reached"}
Coast FIRE Age: ${result.coastFireAge ?? "Beyond timeline"}
Projected Balance at Retirement (no more contributions): ${fmtCurrency(result.projectedBalanceAtRetirement)}
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