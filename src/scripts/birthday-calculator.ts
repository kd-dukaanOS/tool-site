import {
  calculateBirthday,
  validateBirthdayInput,
  copyBirthdaySummary,
  type BirthdayInput,
} from "../utils/birthday";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const birthDateInput = document.getElementById("birthDate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

let lastInput: BirthdayInput | null = null;

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

  if (!birthDateInput.value) {
    showError("Please select a date of birth.");
    return;
  }

  const input: BirthdayInput = { birthDate: new Date(birthDateInput.value) };

  const err = validateBirthdayInput(input);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateBirthday(input);

  setValue("nextBirthdayResult", result.info.nextBirthday.toLocaleDateString("en-US"));
  setValue("daysRemainingResult", result.info.daysRemaining);
  setValue("turningAgeResult", result.info.ageOnBirthday);
  setSubtitle("nextBirthdayResult", `falls on ${result.birthdayWeekday}`);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  birthDateInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateBirthday(lastInput);
  copyToClipboard(copyBirthdaySummary(lastInput, result));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);