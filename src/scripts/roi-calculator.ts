import { calculateROI, validateROIInput, copyROISummary, type ROIInput } from "../utils/roi";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();
let lastResult: ReturnType<typeof calculateROI> | null = null;

const investedInput = document.getElementById("investedAmount") as HTMLInputElement;
const currentValueInput = document.getElementById("currentValue") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: ROIInput | null = null;

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

  const input: ROIInput = {
    investedAmount: Number(investedInput.value),
    currentValue: Number(currentValueInput.value),
    years: yearsInput.value ? Number(yearsInput.value) : undefined,
  };

  if (!input.investedAmount || !input.currentValue) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateROIInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateROI(input);

  renderResults(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateROI>) {
  setValue("netProfitResult", formatCurrency(result.netProfit, currentCurrency));
  setValue("roiPercentResult", `${result.roiPercent}%`);

  if (result.annualizedROI !== null) {
    setValue("annualizedResult", `${result.annualizedROI}%`);
    setSubtitle("annualizedResult", "per year");
  } else {
    setValue("annualizedResult", "—");
    setSubtitle("annualizedResult", "add time period");
  }
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult) renderResults(lastResult);
});

function resetCalculator() {
  investedInput.value = "";
  currentValueInput.value = "";
  yearsInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateROI(lastInput);
  copyToClipboard(copyROISummary(lastInput, result, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);