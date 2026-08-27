import { calculateFire, validateFireInputs } from "../utils/fire";
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
  "currentAge", "currentSavings", "annualIncome", "annualExpenses",
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
    currentAge, currentSavings, annualIncome, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate,
  ] = fieldIds.map(val);

  const validationError = validateFireInputs(currentAge, annualExpenses, withdrawalRate);
  if (validationError) { showError(validationError); return; }

  const result = calculateFire(
    currentAge, currentSavings, annualIncome, annualExpenses,
    annualContribution, expectedReturnRate, inflationRate, withdrawalRate
  );

  setValue("fiNumberResult", fmtCurrency(result.fiNumber));
  setValue("yearsToFiResult", result.yearsToFi === null ? "Beyond 75 yrs" : `${result.yearsToFi} yrs`);
  setValue("fiAgeResult", result.fiAge === null ? "N/A" : `${result.fiAge}`);
  setValue("savingsRateResult", `${result.savingsRatePercent.toFixed(1)}%`);
  setSubtitle("fiNumberResult", `At ${val("withdrawalRate")}% withdrawal rate`);

  lastSummary = `
FIRE Summary

FI Number: ${fmtCurrency(result.fiNumber)}
Years to FI: ${result.yearsToFi === null ? "Beyond 75 yrs" : result.yearsToFi}
FI Age: ${result.fiAge ?? "N/A"}
Savings Rate: ${result.savingsRatePercent.toFixed(1)}%
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