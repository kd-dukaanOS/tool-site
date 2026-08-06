import {
  calculateHeartRate,
  validateHeartRateInput,
  copyHeartRateSummary,
  type HeartRateInput,
} from "../utils/heartrate";
import { toNumber, setValue, copyToClipboard } from "../utils/calculator";

const ageInput = document.getElementById("age") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: HeartRateInput | null = null;

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

  const input: HeartRateInput = { age: toNumber(ageInput.value) };

  const err = validateHeartRateInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateHeartRate(input);

  setValue("maxHrResult", `${result.maxHr} bpm`);
  setValue("warmUpResult", `${result.zones[0].low}-${result.zones[0].high} bpm`);
  setValue("fatBurnResult", `${result.zones[1].low}-${result.zones[1].high} bpm`);
  setValue("cardioResult", `${result.zones[2].low}-${result.zones[2].high} bpm`);
  setValue("hardcoreResult", `${result.zones[3].low}-${result.zones[3].high} bpm`);
  setValue("peakResult", `${result.zones[4].low}-${result.zones[4].high} bpm`);

  lastInput = input;
  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ageInput.value = "";
  clearError();
  lastInput = null;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateHeartRate(lastInput);
  copyToClipboard(copyHeartRateSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
