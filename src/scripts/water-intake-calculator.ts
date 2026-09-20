import {
  calculateWaterIntake,
  validateWaterIntakeInput,
  copyWaterIntakeSummary,
  type WaterIntakeInput,
} from "../utils/water-intake";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const weightInput = document.getElementById("weightKg") as HTMLInputElement;
const activityInput = document.getElementById("activityLevel") as HTMLSelectElement;
const climateInput = document.getElementById("climateHot") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { enterWeight:"Please enter your weight.", perDay:"per day", eachGlass:"250ml each" },
  es: { enterWeight:"Por favor ingresa tu peso.", perDay:"por día", eachGlass:"250ml cada uno" },
}[lang];

let lastInput: WaterIntakeInput | null = null;

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

  const input: WaterIntakeInput = {
    weightKg: Number(weightInput.value),
    activityLevel: activityInput.value as WaterIntakeInput["activityLevel"],
    climateHot: climateInput.checked,
  };

  if (!input.weightKg) {
    showError(t.enterWeight);
    return;
  }

  const err = validateWaterIntakeInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateWaterIntake(input);

  setValue("litersResult", `${result.litersPerDay} L`);
  setValue("glassesResult", `${result.glassesPerDay} glasses`);
  setSubtitle("litersResult", t.perDay);
  setSubtitle("glassesResult", t.eachGlass);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  weightInput.value = "";
  climateInput.checked = false;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateWaterIntake(lastInput);
  copyToClipboard(copyWaterIntakeSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);