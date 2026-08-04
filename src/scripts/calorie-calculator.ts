import {
  calculateCalories,
  validateCalorieInput,
  copyCalorieSummary,
  type CalorieInput,
} from "../utils/calorie";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

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

let lastInput: CalorieInput | null = null;

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

  const input: CalorieInput = {
    gender: genderInput.value as CalorieInput["gender"],
    age: Number(ageInput.value),
    heightCm: Number(heightInput.value),
    weightKg: Number(weightInput.value),
    activityLevel: activityInput.value as CalorieInput["activityLevel"],
    goal: goalInput.value as CalorieInput["goal"],
  };

  if (!input.age || !input.heightCm || !input.weightKg) {
    showError("Please fill all required fields.");
    return;
  }

  const err = validateCalorieInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateCalories(input);

  setValue("bmrResult", `${result.bmr} cal`);
  setValue("maintenanceResult", `${result.maintenanceCalories} cal`);
  setValue("targetResult", `${result.targetCalories} cal`);
  setSubtitle("bmrResult", "at complete rest");
  setSubtitle("maintenanceResult", "per day");
  setSubtitle("targetResult", `to ${input.goal} weight`);

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
  const result = calculateCalories(lastInput);
  copyToClipboard(copyCalorieSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);