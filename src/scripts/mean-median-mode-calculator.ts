import {
  calculateMeanMedianMode,
  validateMMMInput,
  parseNumberList,
  copyMMMSummary,
  type MMMInput,
} from "../utils/mean-median-mode";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const numbersInput = document.getElementById("numbers") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: MMMInput | null = null;

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

  const input: MMMInput = {
    numbers: parseNumberList(numbersInput.value),
  };

  const err = validateMMMInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateMeanMedianMode(input);

  setValue("meanResult", result.mean);
  setValue("medianResult", result.median);
  setValue("modeResult", result.mode.length ? result.mode.join(", ") : "No mode");
  setValue("rangeResult", result.range);
  setSubtitle("modeResult", result.mode.length > 1 ? "multimodal" : "");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numbersInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateMeanMedianMode(lastInput);
  copyToClipboard(copyMMMSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);