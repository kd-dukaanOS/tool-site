import {
  calculateCommission,
  validateCommissionInput,
  copyCommissionSummary,
  type CommissionInput,
} from "../utils/commission";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();
let lastResult: ReturnType<typeof calculateCommission> | null = null;

const salesInput = document.getElementById("salesAmount") as HTMLInputElement;
const rateInput = document.getElementById("commissionRate") as HTMLInputElement;
const baseSalaryInput = document.getElementById("baseSalary") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: CommissionInput | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const input: CommissionInput = {
    salesAmount: Number(salesInput.value),
    commissionRate: Number(rateInput.value),
    baseSalary: baseSalaryInput.value ? Number(baseSalaryInput.value) : undefined,
  };

  if (!input.salesAmount || !input.commissionRate) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateCommissionInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateCommission(input);

  renderResults(result, input);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateCommission>, input: CommissionInput) {
  setValue("commissionEarnedResult", formatCurrency(result.commissionEarned, currentCurrency));
  setValue("totalEarningsResult", formatCurrency(result.totalEarnings, currentCurrency));
  setValue("effectiveRateResult", `${result.effectiveRate}%`);
  setSubtitle("totalEarningsResult", input.baseSalary ? "commission + base salary" : "commission only");
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult && lastInput) renderResults(lastResult, lastInput);
});

function resetCalculator() {
  salesInput.value = "";
  rateInput.value = "";
  baseSalaryInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateCommission(lastInput);
  copyToClipboard(copyCommissionSummary(lastInput, result, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);