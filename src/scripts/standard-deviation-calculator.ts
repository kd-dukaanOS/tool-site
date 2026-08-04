import {
  calculateStandardDeviation,
  validateStdDevInput,
  parseNumberList,
  copyStdDevSummary,
  type StdDevInput,
} from "../utils/standard-deviation";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const numbersInput = document.getElementById("numbers") as HTMLInputElement;
const isSampleInput = document.getElementById("isSample") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: StdDevInput | null = null;

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

  const input: StdDevInput = {
    numbers: parseNumberList(numbersInput.value),
    isSample: isSampleInput.checked,
  };

  const err = validateStdDevInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateStandardDeviation(input);

  setValue("stdDevResult", result.standardDeviation);
  setValue("varianceResult", result.variance);
  setValue("meanResult", result.mean);
  setSubtitle("stdDevResult", input.isSample ? "sample" : "population");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numbersInput.value = "";
  isSampleInput.checked = false;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateStandardDeviation(lastInput);
  copyToClipboard(copyStdDevSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);