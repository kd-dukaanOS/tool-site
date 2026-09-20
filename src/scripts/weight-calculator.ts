import {
  calculateWeight,
  validateWeightInput,
  copyWeightSummary,
  WEIGHT_LABELS,
  type WeightInput,
} from "../utils/weight";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const valueInput = document.getElementById("value") as HTMLInputElement;
const fromUnitInput = document.getElementById("fromUnit") as HTMLSelectElement;
const toUnitInput = document.getElementById("toUnit") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const WEIGHT_LABELS_ES: Record<string, string> = { mg:"Miligramo", g:"Gramo", kg:"Kilogramo", tonne:"Tonelada", oz:"Onza", lb:"Libra" };

let lastInput: WeightInput | null = null;

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

  const input: WeightInput = {
    value: Number(valueInput.value),
    fromUnit: fromUnitInput.value,
    toUnit: toUnitInput.value,
  };

  const err = validateWeightInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateWeight(input);

  setValue("convertedResult", result.convertedValue);
  setSubtitle("convertedResult", lang === "es" ? WEIGHT_LABELS_ES[input.toUnit] : WEIGHT_LABELS[input.toUnit]);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  valueInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateWeight(lastInput);
  copyToClipboard(copyWeightSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);