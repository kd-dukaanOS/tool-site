import { calculateEIDetailed, validateIncome, formatCurrency } from "../utils/regional-salary";
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

  const r = calculateEIDetailed(grossIncome);

  setValue("insurableResult", formatCurrency(r.insurableEarnings, "CAD"));
  setValue("employeeResult", formatCurrency(r.employeeContribution, "CAD"));
  setValue("employerResult", formatCurrency(r.employerContribution, "CAD"));
  setValue("totalResult", formatCurrency(r.totalContribution, "CAD"));
  setSubtitle("employeeResult", "deducted from your pay");

  lastSummary = `EI Premium Summary\n\nGross Income: ${formatCurrency(grossIncome, "CAD")}\n` +
    `Insurable Earnings: ${formatCurrency(r.insurableEarnings, "CAD")}\n` +
    `Employee Premium: ${formatCurrency(r.employeeContribution, "CAD")}\n` +
    `Employer Premium: ${formatCurrency(r.employerContribution, "CAD")}\n` +
    `Total Premium: ${formatCurrency(r.totalContribution, "CAD")}\n`;

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