import {
  calculateDateDifference,
  validateDateDifferenceInput,
  copyDateDifferenceSummary,
  type DateDifferenceInput,
} from "../utils/date-difference";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const startDateInput = document.getElementById("startDate") as HTMLInputElement;
const endDateInput = document.getElementById("endDate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { bothDates:"Please select both dates.", negativeNote:"end date is before start date" },
  es: { bothDates:"Por favor selecciona ambas fechas.", negativeNote:"la fecha de fin es anterior a la fecha de inicio" },
}[lang];

let lastInput: DateDifferenceInput | null = null;

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

  if (!startDateInput.value || !endDateInput.value) {
    showError(t.bothDates);
    return;
  }

  const input: DateDifferenceInput = {
    startDate: new Date(startDateInput.value),
    endDate: new Date(endDateInput.value),
  };

  const err = validateDateDifferenceInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateDateDifference(input);

  setValue("yearsResult", result.diff.years);
  setValue("monthsResult", result.diff.months);
  setValue("daysResult", result.diff.days);
  setValue("totalDaysResult", result.diff.totalDays);
  setValue("totalWeeksResult", result.diff.totalWeeks);
  setSubtitle("totalDaysResult", result.isNegative ? t.negativeNote : "");

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  startDateInput.value = "";
  endDateInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateDateDifference(lastInput);
  copyToClipboard(copyDateDifferenceSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);