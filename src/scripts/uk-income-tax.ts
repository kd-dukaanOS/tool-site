import { calculateUKIncomeTax, validateIncome, formatCurrency } from "../utils/regional-salary";
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

  const r = calculateUKIncomeTax(grossIncome);

  setValue("incomeTaxResult", formatCurrency(r.incomeTax, "GBP"));
  setSubtitle("incomeTaxResult", `${r.effectiveRate.toFixed(1)}% effective rate`);
  setValue("marginalRateResult", `${(r.marginalRate * 100).toFixed(0)}%`);
  setValue("taxableIncomeResult", formatCurrency(r.taxableIncome, "GBP"));
  setValue("afterTaxResult", formatCurrency(r.afterTaxIncome, "GBP"));

  lastSummary = `UK Income Tax (England/Wales/NI)\n\n` +
    `Gross Income: ${formatCurrency(r.grossAnnual, "GBP")}\n` +
    `Personal Allowance: ${formatCurrency(r.personalAllowance, "GBP")}\n` +
    `Taxable Income: ${formatCurrency(r.taxableIncome, "GBP")}\n` +
    `Income Tax Owed: ${formatCurrency(r.incomeTax, "GBP")}\n` +
    `Effective Rate: ${r.effectiveRate.toFixed(1)}%\n` +
    `Marginal Rate: ${(r.marginalRate * 100).toFixed(0)}%\n` +
    `After-Tax Income: ${formatCurrency(r.afterTaxIncome, "GBP")}\n`;

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