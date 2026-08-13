import { calculateUSTakeHome, validateIncome, formatCurrency } from "../utils/regional-salary";
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

  const r = calculateUSTakeHome(grossIncome);

  setValue("netAnnualResult", formatCurrency(r.netAnnual, "USD"));
  setValue("netMonthlyResult", formatCurrency(r.netMonthly, "USD"));
  setValue("netBiweeklyResult", formatCurrency(r.netBiweekly, "USD"));
  setValue("totalDeductionsResult", formatCurrency(r.totalDeductions, "USD"));
  setSubtitle("netAnnualResult", `${r.effectiveRate.toFixed(1)}% effective rate (federal only)`);

  lastSummary = `US Take-Home Pay (Federal Only)\n\nGross: ${formatCurrency(r.grossAnnual, "USD")}\n` +
    r.breakdown.map(b => `${b.label}: ${formatCurrency(b.amount, "USD")}`).join("\n") +
    `\nNet Annual: ${formatCurrency(r.netAnnual, "USD")}\nNet Monthly: ${formatCurrency(r.netMonthly, "USD")}\n`;

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