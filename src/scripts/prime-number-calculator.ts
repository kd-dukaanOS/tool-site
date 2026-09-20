import {
  calculatePrime,
  validatePrimeInput,
  copyPrimeSummary,
  type PrimeInput,
} from "../utils/prime-number";
import { setValue, copyToClipboard } from "../utils/calculator";

const numberInput = document.getElementById("number") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const primeLabel = (window as any).pnPrimeLabel || "Prime";
const notPrimeLabel = (window as any).pnNotPrimeLabel || "Not Prime";
const noneLabel = (window as any).pnNoneLabel || "None";
const fillNumberMsg = (window as any).pnFillNumberMsg || "Please enter a number.";

let lastInput: PrimeInput | null = null;

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

  const input: PrimeInput = { number: Number(numberInput.value) };

  if (numberInput.value === "") {
    showError(fillNumberMsg);
    return;
  }

  const err = validatePrimeInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculatePrime(input);

  setValue("isPrimeResult", result.isPrime ? primeLabel : notPrimeLabel);
  setValue("factorsResult", result.factors.join(", "));
  setValue("nearestBelowResult", result.nearestPrimeBelow ?? noneLabel);
  setValue("nearestAboveResult", result.nearestPrimeAbove);

  lastInput = input;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numberInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculatePrime(lastInput);
  copyToClipboard(copyPrimeSummary(lastInput, result, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
