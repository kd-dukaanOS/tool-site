import { calculateMedicareTax, validateMedicareTaxInputs } from "../utils/medicare-tax";
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
  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as "single" | "mfj" | "mfs" | "hoh";
  const isSelfEmployed = (document.getElementById("employmentType") as HTMLSelectElement)?.value === "self";

  const validationError = validateMedicareTaxInputs(annualWages);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateMedicareTax(annualWages, filingStatus, isSelfEmployed);

  setValue("totalMedicareResult", fmtCurrency(result.totalMedicareTax));
  setValue("regularMedicareResult", fmtCurrency(result.regularMedicareTax));
  setValue("additionalMedicareResult", fmtCurrency(result.additionalMedicareTax));
  setValue("thresholdResult", fmtCurrency(result.additionalMedicareThreshold));
  setSubtitle("totalMedicareResult", isSelfEmployed ? "2.9% + 0.9% additional" : "1.45% + 0.9% additional");
  setSubtitle("additionalMedicareResult", result.wagesOverThreshold > 0 ? `On ${fmtCurrency(result.wagesOverThreshold)} over threshold` : "Not applicable");

  lastSummary = `
Medicare Tax Summary (2026)

Total Medicare Tax: ${fmtCurrency(result.totalMedicareTax)}
Regular Medicare Tax (${isSelfEmployed ? "2.9%" : "1.45%"}): ${fmtCurrency(result.regularMedicareTax)}
Additional Medicare Tax (0.9%): ${fmtCurrency(result.additionalMedicareTax)}
Additional Medicare Threshold: ${fmtCurrency(result.additionalMedicareThreshold)}
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