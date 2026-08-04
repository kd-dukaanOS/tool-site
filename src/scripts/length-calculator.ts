import {
  calculateLength,
  validateLengthInput,
  copyLengthSummary,
  LENGTH_LABELS,
  type LengthInput,
} from "../utils/length";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const valueInput = document.getElementById("value") as HTMLInputElement;
const fromUnitInput = document.getElementById("fromUnit") as HTMLSelectElement;
const toUnitInput = document.getElementById("toUnit") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: LengthInput | null = null;

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

  const input: LengthInput = {
    value: Number(valueInput.value),
    fromUnit: fromUnitInput.value,
    toUnit: toUnitInput.value,
  };

  const err = validateLengthInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateLength(input);

  setValue("convertedResult", result.convertedValue);
  setSubtitle("convertedResult", LENGTH_LABELS[input.toUnit]);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  valueInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateLength(lastInput);
  copyToClipboard(copyLengthSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);