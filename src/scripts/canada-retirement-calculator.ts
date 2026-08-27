import { calculateCanadaRetirement, validateCanadaRetirementInputs } from "../utils/canada-retirement";
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
  "currentAge",
  "retirementAge",
  "currentRrspBalance",
  "currentTfsaBalance",
  "annualRrspContribution",
  "annualTfsaContribution",
  "expectedReturn",
];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
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
    currentAge,
    retirementAge,
    currentRrspBalance,
    currentTfsaBalance,
    annualRrspContribution,
    annualTfsaContribution,
    expectedReturn,
  ] = fieldIds.map(val);

  const validationError = validateCanadaRetirementInputs(
    currentAge,
    retirementAge,
    annualRrspContribution,
    annualTfsaContribution
  );
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateCanadaRetirement(
    currentAge,
    retirementAge,
    currentRrspBalance,
    currentTfsaBalance,
    annualRrspContribution,
    annualTfsaContribution,
    expectedReturn
  );

  setValue("totalBalanceResult", fmtCurrency(result.totalBalance));
  setValue("rrspBalanceResult", fmtCurrency(result.rrspBalance));
  setValue("tfsaBalanceResult", fmtCurrency(result.tfsaBalance));
  setValue("totalGrowthResult", fmtCurrency(result.totalGrowth));
  setSubtitle("totalBalanceResult", `${result.yearsToRetirement} years to retirement`);

  lastSummary = `
Canada Retirement Projection Summary

Total Projected Balance: ${fmtCurrency(result.totalBalance)}
RRSP Balance: ${fmtCurrency(result.rrspBalance)}
TFSA Balance: ${fmtCurrency(result.tfsaBalance)}
Total Contributions: ${fmtCurrency(result.totalContributions)}
Investment Growth: ${fmtCurrency(result.totalGrowth)}
Years to Retirement: ${result.yearsToRetirement}
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