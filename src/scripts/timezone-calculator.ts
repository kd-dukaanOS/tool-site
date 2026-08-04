import {
  calculateTimezoneConversion,
  validateTimezoneInput,
  copyTimezoneSummary,
  type TimezoneInput,
} from "../utils/timezone";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const dateTimeInput = document.getElementById("dateTime") as HTMLInputElement;
const fromTimezoneInput = document.getElementById("fromTimezone") as HTMLSelectElement;
const toTimezoneInput = document.getElementById("toTimezone") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: TimezoneInput | null = null;

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

  const input: TimezoneInput = {
    dateTime: dateTimeInput.value,
    fromTimezone: fromTimezoneInput.value,
    toTimezone: toTimezoneInput.value,
  };

  const err = validateTimezoneInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateTimezoneConversion(input);

  setValue("convertedResult", result.convertedFormatted);
  setValue(
    "differenceResult",
    `${result.hourDifference >= 0 ? "+" : ""}${result.hourDifference}h`
  );
  setSubtitle("convertedResult", input.toTimezone);
  setSubtitle("differenceResult", "vs source timezone");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  dateTimeInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateTimezoneConversion(lastInput);
  copyToClipboard(copyTimezoneSummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);