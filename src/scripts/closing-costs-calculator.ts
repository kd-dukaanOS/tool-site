import { calculateClosingCosts, validateClosingCostsInputs } from "../utils/closing-costs";
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
  "homePrice", "loanAmount", "originationRate", "discountPointsCount",
  "titleInsuranceRate", "recordingFees", "transferTaxRate",
  "monthsPrepaidInsurance", "annualInsurance", "monthsPrepaidTax",
  "annualPropertyTax", "downPayment",
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
    homePrice, loanAmount, originationRate, discountPointsCount,
    titleInsuranceRate, recordingFees, transferTaxRate,
    monthsPrepaidInsurance, annualInsurance, monthsPrepaidTax,
    annualPropertyTax, downPayment,
  ] = fieldIds.map(val);

  const validationError = validateClosingCostsInputs(homePrice, loanAmount);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateClosingCosts(
    homePrice, loanAmount, originationRate, discountPointsCount,
    titleInsuranceRate, recordingFees, transferTaxRate,
    monthsPrepaidInsurance, annualInsurance, monthsPrepaidTax,
    annualPropertyTax, downPayment
  );

  setValue("totalClosingCostsResult", fmtCurrency(result.totalClosingCosts));
  setValue("cashNeededResult", fmtCurrency(result.totalCashNeeded));
  setValue("lenderFeesResult", fmtCurrency(result.lenderFees + result.discountPoints));
  setValue("prepaidsResult", fmtCurrency(result.prepaidsAndEscrow));
  setSubtitle("totalClosingCostsResult", `${result.closingCostPercentOfPrice.toFixed(1)}% of home price`);
  setSubtitle("cashNeededResult", "Closing Costs + Down Payment");

  lastSummary = `
Closing Costs Summary

Total Closing Costs: ${fmtCurrency(result.totalClosingCosts)} (${result.closingCostPercentOfPrice.toFixed(1)}% of price)
Lender Fees + Points: ${fmtCurrency(result.lenderFees + result.discountPoints)}
Title & Transfer/Recording: ${fmtCurrency(result.titleFees + result.taxesAndRecording)}
Prepaids & Escrow: ${fmtCurrency(result.prepaidsAndEscrow)}
Total Cash Needed (incl. Down Payment): ${fmtCurrency(result.totalCashNeeded)}
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