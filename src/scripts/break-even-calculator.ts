import {
  calculateBreakEven,
  validateBreakEvenInput,
  copyBreakEvenSummary,
  type BreakEvenInput,
} from "../utils/break-even";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const fixedCostsInput = document.getElementById("fixedCosts") as HTMLInputElement;
const variableCostInput = document.getElementById("variableCostPerUnit") as HTMLInputElement;
const priceInput = document.getElementById("sellingPricePerUnit") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BreakEvenInput | null = null;

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

  const input: BreakEvenInput = {
    fixedCosts: Number(fixedCostsInput.value),
    variableCostPerUnit: Number(variableCostInput.value),
    sellingPricePerUnit: Number(priceInput.value),
  };

  if (!input.fixedCosts || !input.sellingPricePerUnit) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateBreakEvenInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBreakEven(input);

  setValue("breakEvenUnitsResult", result.breakEvenUnits.toLocaleString("en-IN"));
  setValue("breakEvenRevenueResult", `₹${result.breakEvenRevenue.toLocaleString("en-IN")}`);
  setValue("contributionMarginResult", `₹${result.contributionMargin}`);
  setValue("contributionRatioResult", `${result.contributionMarginRatio}%`);
  setSubtitle("breakEvenUnitsResult", "units to sell");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  fixedCostsInput.value = "";
  variableCostInput.value = "";
  priceInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBreakEven(lastInput);
  copyToClipboard(copyBreakEvenSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
