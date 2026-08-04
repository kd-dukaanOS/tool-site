import {
  calculateProfitMargin,
  validateProfitMarginInput,
  copyProfitMarginSummary,
  type ProfitMarginInput,
} from "../utils/profit-margin";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const costInput = document.getElementById("costPrice") as HTMLInputElement;
const sellingInput = document.getElementById("sellingPrice") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: ProfitMarginInput | null = null;

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

  const input: ProfitMarginInput = {
    costPrice: Number(costInput.value),
    sellingPrice: Number(sellingInput.value),
  };

  if (!input.costPrice || !input.sellingPrice) {
    showError("Please fill all fields.");
    return;
  }

  const err = validateProfitMarginInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateProfitMargin(input);

  setValue("profitResult", `₹${result.profit.toLocaleString("en-IN")}`);
  setValue("marginResult", `${result.profitMarginPercent}%`);
  setValue("markupResult", `${result.markupPercent}%`);
  setSubtitle("marginResult", "of selling price");
  setSubtitle("markupResult", "over cost price");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  costInput.value = "";
  sellingInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateProfitMargin(lastInput);
  copyToClipboard(copyProfitMarginSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);