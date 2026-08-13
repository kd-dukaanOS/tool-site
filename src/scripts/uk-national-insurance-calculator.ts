import { calculateNIDetailed, validateIncome, formatCurrency } from "../utils/regional-salary";
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

  const r = calculateNIDetailed(grossIncome);

  setValue("earningsAboveResult", formatCurrency(r.earningsAboveThreshold, "GBP"));
  setValue("employeeResult", formatCurrency(r.employeeContribution, "GBP"));
  setValue("employerResult", formatCurrency(r.employerContribution, "GBP"));
  setValue("totalResult", formatCurrency(r.totalContribution, "GBP"));
  setSubtitle("employeeResult", "deducted from your pay");

  lastSummary = `National Insurance Summary\n\nGross Salary: ${formatCurrency(grossIncome, "GBP")}\n` +
    `Earnings Above Threshold: ${formatCurrency(r.earningsAboveThreshold, "GBP")}\n` +
    `Employee Contribution: ${formatCurrency(r.employeeContribution, "GBP")}\n` +
    `Employer Contribution: ${formatCurrency(r.employerContribution, "GBP")}\n` +
    `Total Contribution: ${formatCurrency(r.totalContribution, "GBP")}\n`;

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