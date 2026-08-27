import { calculateSocialSecurity, validateSSInputs } from "../utils/social-security";
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

const fieldIds = ["birthYear", "monthlyAIME", "plannedClaimingAge"];

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

  const [birthYear, monthlyAIME, plannedClaimingAge] = fieldIds.map(val);

  const validationError = validateSSInputs(birthYear, monthlyAIME, plannedClaimingAge);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSocialSecurity(birthYear, monthlyAIME, plannedClaimingAge);

  setValue("piaResult", fmtCurrency(result.pia));
  setValue("plannedBenefitResult", fmtCurrency(result.benefitAtPlanned));
  setValue("breakEvenResult", result.breakEvenAge === null ? "N/A" : `Age ${result.breakEvenAge}`);
  setValue("age62Result", fmtCurrency(result.benefitAt62));
  setValue("age70Result", fmtCurrency(result.benefitAt70));
  setSubtitle("piaResult", `FRA: ${result.fraYears}y ${result.fraMonths}mo`);
  setSubtitle("plannedBenefitResult", `Claiming at ${plannedClaimingAge}`);

  lastSummary = `
Social Security Benefits Summary

Full Retirement Age: ${result.fraYears}y ${result.fraMonths}mo
Primary Insurance Amount (PIA): ${fmtCurrency(result.pia)}
Benefit at Age 62: ${fmtCurrency(result.benefitAt62)}
Benefit at FRA: ${fmtCurrency(result.benefitAtFRA)}
Benefit at Age 70: ${fmtCurrency(result.benefitAt70)}
Benefit at Planned Claiming Age (${plannedClaimingAge}): ${fmtCurrency(result.benefitAtPlanned)}
Break-Even Age vs Claiming at 62: ${result.breakEvenAge === null ? "N/A" : `Age ${result.breakEvenAge}`}
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