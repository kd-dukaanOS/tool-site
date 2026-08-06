import {
  calculateProtein,
  validateProteinInput,
  copyProteinSummary,
  type ProteinInput,
} from "../utils/protein";
import { toNumber, setValue, copyToClipboard } from "../utils/calculator";

const weightInput = document.getElementById("weightKg") as HTMLInputElement;
const goalInput = document.getElementById("goal") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: ProteinInput | null = null;

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

  const input: ProteinInput = {
    weightKg: toNumber(weightInput.value),
    goal: goalInput.value,
  };

  const err = validateProteinInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateProtein(input);

  setValue("proteinResult", `${result.gramsPerDay} g`);
  setValue("rangeResult", `${result.minGrams} - ${result.maxGrams} g`);
  setValue("caloriesResult", `${result.calories} kcal`);

  lastInput = input;
  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  weightInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateProtein(lastInput);
  copyToClipboard(copyProteinSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
