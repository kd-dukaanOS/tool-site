import {
  calculateColorConverter,
  validateColorConverterInput,
  copyColorConverterSummary,
  type ColorConverterInput,
} from "../utils/color-converter";
import { setValue, copyToClipboard } from "../utils/calculator";

const colorInput = document.getElementById("color") as HTMLInputElement;
const formatInput = document.getElementById("inputFormat") as HTMLSelectElement;
const swatch = document.getElementById("colorSwatch") as HTMLElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: ColorConverterInput | null = null;

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

  const input: ColorConverterInput = {
    color: colorInput.value.trim(),
    inputFormat: formatInput.value as "hex" | "rgb",
  };

  const err = validateColorConverterInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateColorConverter(input);

  setValue("hexResult", result.hex);
  setValue("rgbResult", result.rgb);
  setValue("hslResult", result.hsl);
  if (swatch) swatch.style.backgroundColor = result.hex;

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  colorInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateColorConverter(lastInput);
  copyToClipboard(copyColorConverterSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);