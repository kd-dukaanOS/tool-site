import {
  calculateAverage,
  validateAverageInput,
  parseNumberList,
  copyAverageSummary,
  type AverageInput,
} from "../utils/average";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const numbersInput = document.getElementById("numbers") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: AverageInput | null = null;

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

  const input: AverageInput = {
    numbers: parseNumberList(numbersInput.value),
  };

  const err = validateAverageInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateAverage(input);

  setValue("averageResult", result.average);
  setValue("sumResult", result.sum);
  setValue("countResult", result.count);
  setValue("minResult", result.min);
  setValue("maxResult", result.max);
  setSubtitle("averageResult", `across ${result.count} numbers`);

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
  const result = calculateAverage(lastInput);
  copyToClipboard(copyAverageSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);