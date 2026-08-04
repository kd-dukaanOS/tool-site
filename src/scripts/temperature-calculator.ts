import {
  calculateTemperature,
  validateTemperatureInput,
  copyTemperatureSummary,
  TEMPERATURE_LABELS,
  type TemperatureInput,
} from "../utils/temperature";
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

let lastInput: TemperatureInput | null = null;

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

  const input: TemperatureInput = {
    value: Number(valueInput.value),
    fromUnit: fromUnitInput.value as TemperatureInput["fromUnit"],
    toUnit: toUnitInput.value as TemperatureInput["toUnit"],
  };

  const err = validateTemperatureInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateTemperature(input);

  setValue("convertedResult", result.convertedValue);
  setSubtitle("convertedResult", TEMPERATURE_LABELS[input.toUnit]);

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
  const result = calculateTemperature(lastInput);
  copyToClipboard(copyTemperatureSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);