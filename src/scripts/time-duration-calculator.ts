import {
  calculateTimeDuration,
  validateTimeDurationInput,
  copyTimeDurationSummary,
  type TimeDurationInput,
} from "../utils/time-duration";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const startTimeInput = document.getElementById("startTime") as HTMLInputElement;
const endTimeInput = document.getElementById("endTime") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: TimeDurationInput | null = null;

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

  if (!startTimeInput.value || !endTimeInput.value) {
    showError("Please enter both times.");
    return;
  }

  const input: TimeDurationInput = {
    startTime: startTimeInput.value,
    endTime: endTimeInput.value,
  };

  const err = validateTimeDurationInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateTimeDuration(input);

  setValue("durationResult", `${result.hours}h ${result.minutes}m`);
  setValue("totalMinutesResult", result.totalMinutes);
  setSubtitle("durationResult", result.crossesMidnight ? "crosses midnight" : "");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  startTimeInput.value = "";
  endTimeInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateTimeDuration(lastInput);
  copyToClipboard(copyTimeDurationSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);