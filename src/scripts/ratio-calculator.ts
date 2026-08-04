import {
  calculateRatio,
  validateRatioInput,
  copyRatioSummary,
  type RatioInput,
} from "../utils/ratio";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const valueAInput = document.getElementById("valueA") as HTMLInputElement;
const valueBInput = document.getElementById("valueB") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: RatioInput | null = null;

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

  const input: RatioInput = {
    valueA: Number(valueAInput.value),
    valueB: Number(valueBInput.value),
  };

  if (!input.valueA || !input.valueB) {
    showError("Please fill both fields.");
    return;
  }

  const err = validateRatioInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateRatio(input);

  setValue("simplifiedResult", `${result.simplifiedA} : ${result.simplifiedB}`);
  setValue("decimalResult", result.decimalRatio);
  setValue("percentageResult", `${result.percentageA}% : ${result.percentageB}%`);
  setSubtitle("percentageResult", "share of total");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  valueAInput.value = "";
  valueBInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateRatio(lastInput);
  copyToClipboard(copyRatioSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);