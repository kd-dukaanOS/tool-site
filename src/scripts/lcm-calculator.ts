import {
  calculateLCM,
  validateLCMInput,
  parseNumberList,
  copyLCMSummary,
  type LCMInput,
} from "../utils/lcm";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const numbersInput = document.getElementById("numbers") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: LCMInput | null = null;

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

  const input: LCMInput = {
    numbers: parseNumberList(numbersInput.value),
  };

  const err = validateLCMInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateLCM(input);

  setValue("lcmResult", result.lcm);
  setSubtitle("lcmResult", `of ${input.numbers.join(", ")}`);

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
  const result = calculateLCM(lastInput);
  copyToClipboard(copyLCMSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);