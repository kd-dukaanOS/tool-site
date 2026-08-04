import { calculateBMR, validateBMRInput, copyBMRSummary, type BMRInput } from "../utils/bmr";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const genderInput = document.getElementById("gender") as HTMLSelectElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const heightInput = document.getElementById("heightCm") as HTMLInputElement;
const weightInput = document.getElementById("weightKg") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BMRInput | null = null;

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

  const input: BMRInput = {
    gender: genderInput.value as BMRInput["gender"],
    age: Number(ageInput.value),
    heightCm: Number(heightInput.value),
    weightKg: Number(weightInput.value),
  };

  if (!input.age || !input.heightCm || !input.weightKg) {
    showError("Please fill all fields.");
    return;
  }

  const err = validateBMRInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBMR(input);

  setValue("bmrResult", `${result.bmr} cal/day`);
  setSubtitle("bmrResult", "at complete rest");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ageInput.value = "";
  heightInput.value = "";
  weightInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBMR(lastInput);
  copyToClipboard(copyBMRSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);