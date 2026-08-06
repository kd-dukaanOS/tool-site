import {
  calculateCaseConverter,
  validateCaseConverterInput,
  type CaseConverterInput,
  type CaseType,
} from "../utils/case-converter";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("text") as HTMLTextAreaElement;
const caseTypeInput = document.getElementById("caseType") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: CaseConverterInput | null = null;

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

  const input: CaseConverterInput = {
    text: textInput.value,
    caseType: caseTypeInput.value as CaseType,
  };

  const err = validateCaseConverterInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateCaseConverter(input);

  setValue("outputResult", result.output);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
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
  const result = calculateCaseConverter(lastInput);
  copyToClipboard(result.output);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);