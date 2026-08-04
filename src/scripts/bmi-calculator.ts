import {
  calculateBMI,
  healthyWeightRange,
  bmiInsight,
  validateBMIInputs,
  copyBMISummary,
} from "../utils/bmi";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const weightInput = document.getElementById("weight") as HTMLInputElement;
const heightInput = document.getElementById("height") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const insightBox = document.getElementById("insightBox") as HTMLElement;

let lastWeight: number | null = null;
let lastHeight: number | null = null;
let lastBMI: ReturnType<typeof calculateBMI> | null = null;

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

  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);

  const validationError = validateBMIInputs(weight, height);

  if (validationError) {
    showError(validationError);
    return;
  }

  const bmi = calculateBMI(weight, height);
  const range = healthyWeightRange(height);

  setValue("bmiResult", bmi.value);
  setSubtitle("bmiResult", bmi.category);

  setValue("categoryResult", bmi.category);
  setValue("rangeResult", `${range.min} - ${range.max} kg`);

  insightBox.textContent = bmiInsight(weight, height, bmi);
  insightBox.hidden = false;

  lastWeight = weight;
  lastHeight = height;
  lastBMI = bmi;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  weightInput.value = "";
  heightInput.value = "";
  clearError();

  lastWeight = null;
  lastHeight = null;
  lastBMI = null;

  insightBox.hidden = true;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (lastWeight === null || lastHeight === null || !lastBMI) return;
  copyToClipboard(copyBMISummary(lastWeight, lastHeight, lastBMI));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
