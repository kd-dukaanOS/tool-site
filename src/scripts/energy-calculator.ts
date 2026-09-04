import {
  calculateEnergy,
  validateEnergyInput,
  copyEnergySummary,
  ENERGY_LABELS,
  ENERGY_LABELS_ES,
  type EnergyInput,
} from "../utils/energy";
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
let lastInput: EnergyInput | null = null;

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

  const input: EnergyInput = {
    value: Number(valueInput.value),
    fromUnit: fromUnitInput.value,
    toUnit: toUnitInput.value,
  };

  const err = validateEnergyInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateEnergy(input);

  setValue("convertedResult", result.convertedValue);
  setSubtitle("convertedResult", (lang === "es" ? ENERGY_LABELS_ES : ENERGY_LABELS)[input.toUnit]);

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
  const result = calculateEnergy(lastInput);
  copyToClipboard(copyEnergySummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);