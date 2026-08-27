import { calculateSocialSecurityTax, validateSSTaxInputs } from "../utils/social-security-tax";
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

  const annualWages = val("annualWages");
  const isSelfEmployed = (document.getElementById("employmentType") as HTMLSelectElement)?.value === "self";

  const validationError = validateSSTaxInputs(annualWages);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSocialSecurityTax(annualWages, isSelfEmployed);

  if (isSelfEmployed) {
    setValue("primaryTaxResult", fmtCurrency(result.selfEmploymentSSTax));
    setSubtitle("primaryTaxResult", "Self-Employment SS Tax (12.4%)");
  } else {
    setValue("primaryTaxResult", fmtCurrency(result.employeeSSTax));
    setSubtitle("primaryTaxResult", "Your Withheld SS Tax (6.2%)");
  }
  setValue("taxableWagesResult", fmtCurrency(result.taxableWages));
  setValue("wagesOverCapResult", fmtCurrency(result.wagesOverCap));
  setValue("capStatusResult", result.isAtCap ? "At Wage Base Cap" : "Below Cap");
  setSubtitle("capStatusResult", `2026 Cap: ${fmtCurrency(184500)}`);

  lastSummary = `
Social Security Tax Summary (2026)

${isSelfEmployed ? "Self-Employment SS Tax (12.4%)" : "Employee SS Tax Withheld (6.2%)"}: ${fmtCurrency(isSelfEmployed ? result.selfEmploymentSSTax : result.employeeSSTax)}
Taxable Wages: ${fmtCurrency(result.taxableWages)}
Wages Over 2026 Cap ($184,500): ${fmtCurrency(result.wagesOverCap)}
Cap Status: ${result.isAtCap ? "At wage base cap" : "Below wage base cap"}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  const el = document.getElementById("annualWages") as HTMLInputElement;
  if (el) el.value = "";
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