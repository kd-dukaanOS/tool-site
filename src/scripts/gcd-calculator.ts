import {
  calculateGCD,
  validateGCDInput,
  parseNumberList,
  copyGCDSummary,
  type GCDInput,
} from "../utils/gcd";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const numbersInput = document.getElementById("numbers") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: GCDInput | null = null;

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

  const input: GCDInput = {
    numbers: parseNumberList(numbersInput.value),
  };

  const err = validateGCDInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateGCD(input);

  setValue("gcdResult", result.gcd);
  setSubtitle("gcdResult", `of ${input.numbers.join(", ")}`);

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
  const result = calculateGCD(lastInput);
  copyToClipboard(copyGCDSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);