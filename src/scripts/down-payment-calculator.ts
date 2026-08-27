import { calculateDownPayment, validateDownPaymentInputs } from "../utils/down-payment";
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
  "homePrice", "downPaymentPercent", "mortgageRate", "loanTermYears",
  "propertyTaxRate", "annualInsurance", "closingCostPercent", "pmiRate",
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
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, closingCostPercent, pmiRate,
  ] = fieldIds.map(val);

  const validationError = validateDownPaymentInputs(homePrice, downPaymentPercent);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDownPayment(
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, closingCostPercent, pmiRate
  );

  setValue("downPaymentResult", fmtCurrency(result.downPayment));
  setValue("loanAmountResult", fmtCurrency(result.loanAmount));
  setValue("cashNeededResult", fmtCurrency(result.cashNeeded));
  setValue("monthlyPaymentResult", fmtCurrency(result.totalMonthlyPayment));
  setSubtitle("cashNeededResult", `Incl. ${fmtCurrency(result.closingCosts)} closing costs`);
  setSubtitle("monthlyPaymentResult", result.pmiRequired ? `Incl. ${fmtCurrency(result.monthlyPMI)} PMI/mo` : "No PMI required");

  lastSummary = `
Down Payment Summary

Down Payment: ${fmtCurrency(result.downPayment)}
Loan Amount: ${fmtCurrency(result.loanAmount)}
Closing Costs: ${fmtCurrency(result.closingCosts)}
Cash Needed at Closing: ${fmtCurrency(result.cashNeeded)}
Total Monthly Payment: ${fmtCurrency(result.totalMonthlyPayment)}
PMI Required: ${result.pmiRequired ? "Yes" : "No"}
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