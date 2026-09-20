import {
  calculatePregnancyWeightGain,
  validatePregnancyWeightGainInput,
  copyPregnancyWeightGainSummary,
  type PregnancyWeightGainInput,
} from "../utils/pregnancy-weight-gain";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const weightInput = document.getElementById("prePregnancyWeightKg") as HTMLInputElement;
const heightInput = document.getElementById("heightCm") as HTMLInputElement;
const weekInput = document.getElementById("currentWeekOfPregnancy") as HTMLInputElement;
const twinsInput = document.getElementById("isTwins") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const byWeekLabel = (window as any).pwgByWeekLabel || "by week";
const fillAllMsg = (window as any).pwgFillAllMsg || "Please fill all required fields.";

let lastInput: PregnancyWeightGainInput | null = null;

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

  const input: PregnancyWeightGainInput = {
    prePregnancyWeightKg: Number(weightInput.value),
    heightCm: Number(heightInput.value),
    currentWeekOfPregnancy: Number(weekInput.value),
    isTwins: twinsInput.checked,
  };

  if (!input.prePregnancyWeightKg || !input.heightCm || !input.currentWeekOfPregnancy) {
    showError(fillAllMsg);
    return;
  }

  const err = validatePregnancyWeightGainInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculatePregnancyWeightGain(input, lang);

  setValue("bmiResult", result.prePregnancyBMI);
  setValue("totalGainResult", `${result.recommendedTotalGainMinKg} - ${result.recommendedTotalGainMaxKg} kg`);
  setValue("gainToDateResult", `${result.recommendedGainToDateMinKg} - ${result.recommendedGainToDateMaxKg} kg`);
  setSubtitle("bmiResult", result.bmiCategory);
  setSubtitle("gainToDateResult", `${byWeekLabel} ${input.currentWeekOfPregnancy}`);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  weightInput.value = "";
  heightInput.value = "";
  weekInput.value = "";
  twinsInput.checked = false;
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculatePregnancyWeightGain(lastInput, lang);
  copyToClipboard(copyPregnancyWeightGainSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);