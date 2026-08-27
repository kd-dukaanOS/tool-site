import { calculateMrr, validateMrrInputs } from "../utils/mrr";
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

const fieldIds = ["existingMrr", "newCustomerMrr", "expansionMrr", "churnedMrr", "contractionMrr"];
let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [existingMrr, newCustomerMrr, expansionMrr, churnedMrr, contractionMrr] = fieldIds.map(val);

  const err = validateMrrInputs(existingMrr);
  if (err) { showError(err); return; }

  const result = calculateMrr(existingMrr, newCustomerMrr, expansionMrr, churnedMrr, contractionMrr);

  setValue("totalMrrResult", fmtCurrency(result.totalMrr));
  setValue("netNewMrrResult", fmtCurrency(result.netNewMrr));
  setValue("arrResult", fmtCurrency(result.arr));
  setValue("churnedMrrResult", fmtCurrency(result.churnedMrr + result.contractionMrr));
  setSubtitle("totalMrrResult", result.netNewMrr >= 0 ? "Growing" : "Shrinking");

  lastSummary = `
MRR Summary

Total MRR: ${fmtCurrency(result.totalMrr)}
Net New MRR: ${fmtCurrency(result.netNewMrr)}
Projected ARR: ${fmtCurrency(result.arr)}
Churned + Contraction MRR: ${fmtCurrency(result.churnedMrr + result.contractionMrr)}
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

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);