import {
  calculateBase64,
  validateBase64Input,
  type Base64Input,
} from "../utils/base64";
import { setValue, copyToClipboard } from "../utils/calculator";

const textInput = document.getElementById("text") as HTMLTextAreaElement;
const modeInput = document.getElementById("mode") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: Base64Input | null = null;

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

  const input: Base64Input = {
    text: textInput.value,
    mode: modeInput.value as "encode" | "decode",
  };

  const err = validateBase64Input(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBase64(input);

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
  const result = calculateBase64(lastInput);
  copyToClipboard(result.output);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);