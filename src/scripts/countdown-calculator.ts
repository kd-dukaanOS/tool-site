import {
  calculateCountdown,
  validateCountdownInput,
  copyCountdownSummary,
  type CountdownInput,
} from "../utils/countdown";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const targetDateInput = document.getElementById("targetDate") as HTMLInputElement;
const targetTimeInput = document.getElementById("targetTime") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: CountdownInput | null = null;
let liveTimer: ReturnType<typeof setInterval> | null = null;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function render() {
  if (!lastInput) return;
  const result = calculateCountdown(lastInput);

  setValue("daysResult", result.days);
  setValue("hoursResult", result.hours);
  setValue("minutesResult", result.minutes);
  setValue("secondsResult", result.seconds);
  setSubtitle("daysResult", result.hasPassed ? "since target" : "until target");
}

function calculate() {
  clearError();

  if (!targetDateInput.value) {
    showError("Please select a target date.");
    return;
  }

  const input: CountdownInput = {
    targetDate: new Date(targetDateInput.value),
    targetTime: targetTimeInput.value || undefined,
  };

  const err = validateCountdownInput(input);
  if (err) {
    showError(err);
    return;
  }

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;

  render();

  if (liveTimer) clearInterval(liveTimer);
  liveTimer = setInterval(render, 1000);
}

function resetCalculator() {
  targetDateInput.value = "";
  targetTimeInput.value = "";
  clearError();

  if (liveTimer) clearInterval(liveTimer);
  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateCountdown(lastInput);
  copyToClipboard(copyCountdownSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);