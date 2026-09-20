import {
  calculatePregnancyDueDate,
  validatePregnancyDueDateInput,
  copyPregnancyDueDateSummary,
  type PregnancyDueDateInput,
} from "../utils/pregnancy-due-date";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const lastPeriodInput = document.getElementById("lastPeriodDate") as HTMLInputElement;
const cycleLengthInput = document.getElementById("cycleLength") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const weekLabel = (window as any).pddWeekLabel || "Week";
const dayLabel = (window as any).pddDayLabel || "day";
const estimatedLabel = (window as any).pddEstimatedLabel || "estimated";
const fillDateMsg = (window as any).pddFillDateMsg || "Please select your last period date.";

let lastInput: PregnancyDueDateInput | null = null;

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

  if (!lastPeriodInput.value) {
    showError(fillDateMsg);
    return;
  }

  const input: PregnancyDueDateInput = {
    lastPeriodDate: new Date(lastPeriodInput.value),
    cycleLength: Number(cycleLengthInput.value) || 28,
  };

  const err = validatePregnancyDueDateInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculatePregnancyDueDate(input);

  setValue("dueDateResult", result.dueDate.toLocaleDateString(lang === "es" ? "es-ES" : "en-US"));
  setValue("currentWeekResult", `${weekLabel} ${result.currentWeek}`);
  setValue("trimesterResult", result.trimester);
  setValue("daysRemainingResult", result.daysRemaining);
  setSubtitle("currentWeekResult", `${dayLabel} ${result.currentDay}`);
  setSubtitle("dueDateResult", estimatedLabel);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  lastPeriodInput.value = "";
  cycleLengthInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculatePregnancyDueDate(lastInput);
  copyToClipboard(copyPregnancyDueDateSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);