import { calculateTFSA, validateTFSAInputs } from "../utils/tfsa";
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
  "eligibleYear", "currentYear", "totalContributedToDate", "withdrawalsThisYear",
  "plannedContribution", "expectedReturn", "yearsToGrow",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const overContributionLabel = (window as any).tfsaOverContributionLabel || "Over-contribution detected";
const withinLimitLabel = (window as any).tfsaWithinLimitLabel || "Within limit";
const noneLabel = (window as any).tfsaNoneLabel || "None";
const totalRoomSinceLabel = (window as any).tfsaTotalRoomSinceLabel || "Total Room Since";
const availableRoomThisYearLabel = (window as any).tfsaAvailableRoomThisYearLabel || "Available Room This Year";
const monthlyPenaltyLabel = (window as any).tfsaMonthlyPenaltyLabel || "Monthly Penalty Tax (if over-contributed)";
const projectedBalanceLabel = (window as any).tfsaProjectedBalanceLabel || "Projected Balance";

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
    eligibleYear, currentYear, totalContributedToDate, withdrawalsThisYear,
    plannedContribution, expectedReturn, yearsToGrow,
  ] = fieldIds.map(val);

  const validationError = validateTFSAInputs(eligibleYear || 2009, currentYear || 2026, plannedContribution, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateTFSA(
    eligibleYear || 2009, currentYear || 2026, totalContributedToDate, withdrawalsThisYear,
    plannedContribution, expectedReturn, yearsToGrow || 1
  );

  setValue("availableRoomResult", fmtCurrency(result.availableRoom));
  setValue("totalRoomResult", fmtCurrency(result.totalRoomSinceEligible));
  setValue("projectedBalanceResult", fmtCurrency(result.projectedBalance));
  setValue("penaltyTaxResult", result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) + "/mo" : noneLabel);
  setSubtitle("penaltyTaxResult", result.excessContribution > 0 ? overContributionLabel : withinLimitLabel);

  lastSummary = lang === "es" ? `
Resumen de TFSA

${totalRoomSinceLabel} ${eligibleYear || 2009}: ${fmtCurrency(result.totalRoomSinceEligible)}
${availableRoomThisYearLabel}: ${fmtCurrency(result.availableRoom)}
${projectedBalanceLabel}: ${fmtCurrency(result.projectedBalance)}
${monthlyPenaltyLabel}: ${result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) : noneLabel}
`.trim() : `
TFSA Summary

Total Room Since ${eligibleYear || 2009}: ${fmtCurrency(result.totalRoomSinceEligible)}
Available Room This Year: ${fmtCurrency(result.availableRoom)}
Projected Balance: ${fmtCurrency(result.projectedBalance)}
Monthly Penalty Tax (if over-contributed): ${result.penaltyTax > 0 ? fmtCurrency(result.penaltyTax) : "None"}
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