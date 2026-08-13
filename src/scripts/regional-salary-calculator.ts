import { convertSalary, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const amountInput = document.getElementById("amount") as HTMLInputElement;
const periodSelect = document.getElementById("period") as HTMLSelectElement;
const hoursInput = document.getElementById("hoursPerWeek") as HTMLInputElement;
const weeksInput = document.getElementById("weeksPerYear") as HTMLInputElement;

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
  const amount = parseFloat(amountInput.value);
  const period = (periodSelect?.value || "annual") as "hourly" | "annual";
  const hoursPerWeek = parseFloat(hoursInput.value) || 40;
  const weeksPerYear = parseFloat(weeksInput.value) || 52;

  if (!amount || amount <= 0) {
    return showError("Please enter a valid amount greater than 0.");
  }
  if (hoursPerWeek <= 0 || hoursPerWeek > 168) {
    return showError("Hours per week must be between 1 and 168.");
  }
  if (weeksPerYear <= 0 || weeksPerYear > 52) {
    return showError("Weeks per year must be between 1 and 52.");
  }

  const r = convertSalary(amount, period, hoursPerWeek, weeksPerYear);

  setValue("hourlyResult", formatCurrency(r.hourly, "USD"));
  setValue("dailyResult", formatCurrency(r.daily, "USD"));
  setValue("weeklyResult", formatCurrency(r.weekly, "USD"));
  setValue("biweeklyResult", formatCurrency(r.biweekly, "USD"));
  setValue("monthlyResult", formatCurrency(r.monthly, "USD"));
  setValue("annualResult", formatCurrency(r.annual, "USD"));
  setSubtitle("annualResult", "gross, before tax");

  lastSummary = `Salary Conversion Summary\n\n` +
    `Hourly: ${formatCurrency(r.hourly, "USD")}\n` +
    `Daily: ${formatCurrency(r.daily, "USD")}\n` +
    `Weekly: ${formatCurrency(r.weekly, "USD")}\n` +
    `Biweekly: ${formatCurrency(r.biweekly, "USD")}\n` +
    `Monthly: ${formatCurrency(r.monthly, "USD")}\n` +
    `Annual: ${formatCurrency(r.annual, "USD")}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  amountInput.value = "";
  hoursInput.value = "";
  weeksInput.value = "";
  if (periodSelect) periodSelect.value = "annual";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);