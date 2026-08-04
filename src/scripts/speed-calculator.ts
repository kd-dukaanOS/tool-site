import {
  calculateSpeed,
  validateSpeedInput,
  copySpeedSummary,
  SPEED_LABELS,
  type SpeedInput,
} from "../utils/speed";
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

let lastInput: SpeedInput | null = null;

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

  const input: SpeedInput = {
    value: Number(valueInput.value),
    fromUnit: fromUnitInput.value,
    toUnit: toUnitInput.value,
  };

  const err = validateSpeedInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateSpeed(input);

  setValue("convertedResult", result.convertedValue);
  setSubtitle("convertedResult", SPEED_LABELS[input.toUnit]);

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
  const result = calculateSpeed(lastInput);
  copyToClipboard(copySpeedSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);