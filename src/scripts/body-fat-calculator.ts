import {
  calculateBodyFat,
  validateBodyFatInput,
  copyBodyFatSummary,
  type BodyFatInput,
} from "../utils/body-fat";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const genderInput = document.getElementById("gender") as HTMLSelectElement;
const heightInput = document.getElementById("heightCm") as HTMLInputElement;
const neckInput = document.getElementById("neckCm") as HTMLInputElement;
const waistInput = document.getElementById("waistCm") as HTMLInputElement;
const hipInput = document.getElementById("hipCm") as HTMLInputElement;
const hipFieldGroup = document.getElementById("hipFieldGroup") as HTMLElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BodyFatInput | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function toggleHipField() {
  hipFieldGroup.hidden = genderInput.value !== "female";
}

function calculate() {
  clearError();

  const input: BodyFatInput = {
    gender: genderInput.value as BodyFatInput["gender"],
    heightCm: Number(heightInput.value),
    neckCm: Number(neckInput.value),
    waistCm: Number(waistInput.value),
    hipCm: hipInput.value ? Number(hipInput.value) : undefined,
  };

  if (!input.heightCm || !input.neckCm || !input.waistCm) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateBodyFatInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBodyFat(input);

  setValue("bodyFatResult", `${result.bodyFatPercent}%`);
  setValue("categoryResult", result.category);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  heightInput.value = "";
  neckInput.value = "";
  waistInput.value = "";
  hipInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBodyFat(lastInput);
  copyToClipboard(copyBodyFatSummary(lastInput, result));
}

genderInput?.addEventListener("change", toggleHipField);
calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

toggleHipField();