import { calculateBMR, validateBMRInput, copyBMRSummary, type BMRInput } from "../utils/bmr";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = { en: { fillAll: "Please fill all fields.", atRest: "at complete rest", perDay: "cal/day" }, es: { fillAll: "Por favor completa todos los campos.", atRest: "en reposo total", perDay: "cal/día" } }[lang];


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
    showError(t.fillAll);
    return;
  }

  const err = validateBMRInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBMR(input);

  setValue("bmrResult", `${result.bmr} ${t.perDay}`);
  setSubtitle("bmrResult", t.atRest);

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
  copyToClipboard(copyBMRSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);