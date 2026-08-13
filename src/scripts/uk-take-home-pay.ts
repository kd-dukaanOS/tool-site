import { calculateUKTakeHome, validateIncome, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;

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

  const err = validateIncome(grossIncome);
  if (err) return showError(err);

  const r = calculateUKTakeHome(grossIncome);

  setValue("netAnnualResult", formatCurrency(r.netAnnual, "GBP"));
  setValue("netMonthlyResult", formatCurrency(r.netMonthly, "GBP"));
  setValue("netWeeklyResult", formatCurrency(r.netWeekly, "GBP"));
  setValue("totalDeductionsResult", formatCurrency(r.totalDeductions, "GBP"));
  setSubtitle("netAnnualResult", `${r.effectiveRate.toFixed(1)}% effective rate`);

  lastSummary = `UK Take-Home Pay\n\nGross: ${formatCurrency(r.grossAnnual, "GBP")}\n` +
    r.breakdown.map(b => `${b.label}: ${formatCurrency(b.amount, "GBP")}`).join("\n") +
    `\nNet Annual: ${formatCurrency(r.netAnnual, "GBP")}\nNet Monthly: ${formatCurrency(r.netMonthly, "GBP")}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  incomeInput.value = "";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);