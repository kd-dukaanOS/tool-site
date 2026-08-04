import {
  calculatePercent,
  percentExpression,
  percentInsight,
  validatePercentInputs,
  copyPercentSummary,
  MODE_INFO,
  type PercentMode,
} from "../utils/percentage";

import { setValue, copyToClipboard } from "../utils/calculator";

const value1Input = document.getElementById("value1") as HTMLInputElement;
const value2Input = document.getElementById("value2") as HTMLInputElement;

const value1Label = document.querySelector('label[for="value1"]') as HTMLLabelElement;
const value2Label = document.querySelector('label[for="value2"]') as HTMLLabelElement;

const modeHint = document.getElementById("modeHint") as HTMLElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const insightBox = document.getElementById("insightBox") as HTMLElement;

const modeButtons = document.querySelectorAll<HTMLButtonElement>("[data-percent-mode]");

let currentMode: PercentMode = "percentOf";

let lastValue1: number | null = null;
let lastValue2: number | null = null;
let lastResult: ReturnType<typeof calculatePercent> | null = null;

function applyModeLabels() {
  const info = MODE_INFO[currentMode];
  value1Label.textContent = info.value1Label;
  value2Label.textContent = info.value2Label;
  modeHint.textContent = info.hint;
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {

  clearError();

  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);

  const validationError = validatePercentInputs(currentMode, value1, value2);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculatePercent(currentMode, value1, value2);

  setValue("percentResult", currentMode === "percentChange"
    ? `${result.positive ? "+" : ""}${result.result}%`
    : result.result);

  setValue("expressionResult", percentExpression(currentMode, value1, value2, result));

  insightBox.textContent = percentInsight(currentMode, result);
  insightBox.hidden = false;

  lastValue1 = value1;
  lastValue2 = value2;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {

  value1Input.value = "";
  value2Input.value = "";
  clearError();

  lastValue1 = null;
  lastValue2 = null;
  lastResult = null;

  insightBox.hidden = true;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (lastValue1 === null || lastValue2 === null || !lastResult) return;
  copyToClipboard(copyPercentSummary(currentMode, lastValue1, lastValue2, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMode = (btn.dataset.percentMode as PercentMode) ?? "percentOf";

    modeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    applyModeLabels();
    resetCalculator();
  });
});

applyModeLabels();
