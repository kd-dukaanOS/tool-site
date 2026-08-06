import {
  calculateMacro,
  validateMacroInput,
  copyMacroSummary,
  type MacroInput,
} from "../utils/macro";
import { toNumber, setValue, copyToClipboard } from "../utils/calculator";

const genderInput = document.getElementById("gender") as HTMLSelectElement;
const ageInput = document.getElementById("age") as HTMLInputElement;
const heightInput = document.getElementById("heightCm") as HTMLInputElement;
const weightInput = document.getElementById("weightKg") as HTMLInputElement;
const activityInput = document.getElementById("activityLevel") as HTMLSelectElement;
const goalInput = document.getElementById("goal") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: MacroInput | null = null;

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

  const input: MacroInput = {
    gender: genderInput.value,
    age: toNumber(ageInput.value),
    heightCm: toNumber(heightInput.value),
    weightKg: toNumber(weightInput.value),
    activityLevel: activityInput.value,
    goal: goalInput.value,
  };

  const err = validateMacroInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateMacro(input);

  setValue("caloriesResult", result.calories);
  setValue("proteinResult", `${result.proteinG} g`);
  setValue("carbsResult", `${result.carbsG} g`);
  setValue("fatResult", `${result.fatG} g`);

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
  const result = calculateMacro(lastInput);
  copyToClipboard(copyMacroSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
