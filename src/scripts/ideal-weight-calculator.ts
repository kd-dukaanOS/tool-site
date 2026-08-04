import {
  calculateIdealWeight,
  validateIdealWeightInput,
  copyIdealWeightSummary,
  type IdealWeightInput,
} from "../utils/ideal-weight";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const genderInput = document.getElementById("gender") as HTMLSelectElement;
const heightInput = document.getElementById("heightCm") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: IdealWeightInput | null = null;

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

  const input: IdealWeightInput = {
    gender: genderInput.value as IdealWeightInput["gender"],
    heightCm: Number(heightInput.value),
  };

  if (!input.heightCm) {
    showError("Please enter your height.");
    return;
  }

  const err = validateIdealWeightInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateIdealWeight(input);

  setValue("idealWeightResult", `${result.idealWeightKg} kg`);
  setValue("healthyRangeResult", `${result.healthyRangeMinKg} - ${result.healthyRangeMaxKg} kg`);
  setSubtitle("idealWeightResult", "Devine formula estimate");
  setSubtitle("healthyRangeResult", "based on BMI 18.5-24.9");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  heightInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateIdealWeight(lastInput);
  copyToClipboard(copyIdealWeightSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);