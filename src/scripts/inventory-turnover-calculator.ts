import {
  calculateInventoryTurnover,
  validateInventoryTurnoverInput,
  copyInventoryTurnoverSummary,
  type InventoryTurnoverInput,
} from "../utils/inventory-turnover";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();
let lastResult: ReturnType<typeof calculateInventoryTurnover> | null = null;

const cogsInput = document.getElementById("cogs") as HTMLInputElement;
const beginningInput = document.getElementById("beginningInventory") as HTMLInputElement;
const endingInput = document.getElementById("endingInventory") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: InventoryTurnoverInput | null = null;

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

  const input: InventoryTurnoverInput = {
    cogs: Number(cogsInput.value),
    beginningInventory: Number(beginningInput.value),
    endingInventory: Number(endingInput.value),
  };

  if (!input.cogs || (!input.beginningInventory && !input.endingInventory)) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateInventoryTurnoverInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateInventoryTurnover(input);

  renderResults(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateInventoryTurnover>) {
  setValue("avgInventoryResult", formatCurrency(result.averageInventory, currentCurrency));
  setValue("turnoverRatioResult", `${result.turnoverRatio}x`);
  setValue("daysToSellResult", `${result.daysToSellInventory} days`);
  setSubtitle("turnoverRatioResult", "times per year");
  setSubtitle("daysToSellResult", "to clear stock");
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult) renderResults(lastResult);
});

function resetCalculator() {
  cogsInput.value = "";
  beginningInput.value = "";
  endingInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateInventoryTurnover(lastInput);
  copyToClipboard(copyInventoryTurnoverSummary(lastInput, result, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);