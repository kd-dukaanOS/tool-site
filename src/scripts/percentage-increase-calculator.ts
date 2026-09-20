import {
  calculatePercentageIncrease,
  validatePercentageIncreaseInput,
  copyPercentageIncreaseSummary,
  type PercentageIncreaseInput,
} from "../utils/percentage-increase";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const originalInput = document.getElementById("originalValue") as HTMLInputElement;
const newInput = document.getElementById("newValue") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastInput: PercentageIncreaseInput | null = null;

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

  const input: PercentageIncreaseInput = {
    originalValue: Number(originalInput.value),
    newValue: Number(newInput.value),
  };

  if (!input.originalValue || input.newValue === undefined || newInput.value === "") {
    showError(lang === "es" ? "Por favor completa todos los campos." : "Please fill all fields.");
    return;
  }

  const err = validatePercentageIncreaseInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculatePercentageIncrease(input);

  setValue("changeResult", result.increaseAmount);
  setValue(
    "percentResult",
    `${result.percentageIncrease >= 0 ? "+" : ""}${result.percentageIncrease}%`
  );
  setSubtitle("percentResult", result.percentageIncrease >= 0 ? (lang === "es" ? "aumento" : "increase") : (lang === "es" ? "disminución" : "decrease"));

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  originalInput.value = "";
  newInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculatePercentageIncrease(lastInput);
  copyToClipboard(copyPercentageIncreaseSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);