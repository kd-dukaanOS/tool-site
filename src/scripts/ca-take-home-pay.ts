import { calculateCATakeHome, validateIncome, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;
const provinceSelect = document.getElementById("province") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const grossIncome = parseFloat(incomeInput.value);
  const province = provinceSelect?.value || "ON";

  const err = validateIncome(grossIncome);
  if (err) return showError(err);

  const r = calculateCATakeHome(grossIncome, province);

  setValue("netAnnualResult", formatCurrency(r.netAnnual, "CAD"));
  setValue("netMonthlyResult", formatCurrency(r.netMonthly, "CAD"));
  setValue("netBiweeklyResult", formatCurrency(r.netBiweekly, "CAD"));
  setValue("totalDeductionsResult", formatCurrency(r.totalDeductions, "CAD"));
  setSubtitle("netAnnualResult", `${r.effectiveRate.toFixed(1)}% effective rate`);

  lastSummary = `Canada Take-Home Pay (${province})\n\nGross: ${formatCurrency(r.grossAnnual, "CAD")}\n` +
    r.breakdown.map(b => `${b.label}: ${formatCurrency(b.amount, "CAD")}`).join("\n") +
    `\nNet Annual: ${formatCurrency(r.netAnnual, "CAD")}\nNet Monthly: ${formatCurrency(r.netMonthly, "CAD")}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  incomeInput.value = "";
  if (provinceSelect) provinceSelect.value = "ON";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);