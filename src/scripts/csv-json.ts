import {
  calculateCsvJson,
  validateCsvJsonInput,
  copyCsvJsonSummary,
  type CsvJsonInput,
} from "../utils/csv-json";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("text") as HTMLTextAreaElement;
const modeInput = document.getElementById("mode") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: CsvJsonInput | null = null;

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

  const input: CsvJsonInput = {
    text: textInput.value,
    mode: modeInput.value as "csvToJson" | "jsonToCsv",
  };

  const err = validateCsvJsonInput(input);
  if (err) {
    showError(err);
    return;
  }

  try {
    const result = calculateCsvJson(input);
    setValue("outputResult", result.output);
    lastInput = input;
    emptyState.hidden = true;
    resultsContainer.hidden = false;
  } catch {
    showError("Could not convert — check your input format.");
  }
}

function resetCalculator() {
  textInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateCsvJson(lastInput);
  copyToClipboard(copyCsvJsonSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);