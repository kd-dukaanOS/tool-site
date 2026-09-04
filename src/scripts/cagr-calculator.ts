import { calculateCAGR, validateCAGRInput, copyCAGRSummary, type CAGRInput } from "../utils/cagr";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();
let lastResult: ReturnType<typeof calculateCAGR> | null = null;

const initialInput = document.getElementById("initialValue") as HTMLInputElement;
const finalInput = document.getElementById("finalValue") as HTMLInputElement;
const yearsInput = document.getElementById("years") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { fillAll: "Please fill all fields.", multiplied: "your money multiplied" },
  es: { fillAll: "Por favor completa todos los campos.", multiplied: "tu dinero se multiplicó" },
}[lang];

let lastInput: CAGRInput | null = null;

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

  const input: CAGRInput = {
    initialValue: Number(initialInput.value),
    finalValue: Number(finalInput.value),
    years: Number(yearsInput.value),
  };

  if (!input.initialValue || !input.finalValue || !input.years) {
    showError(t.fillAll);
    return;
  }

  const err = validateCAGRInput(input, lang);
  if (err) {
    showError(err);
    return;
  }

  const result = calculateCAGR(input);

  renderResults(result);

  lastInput = input;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateCAGR>) {
  setValue("cagrResult", `${result.cagr}%`);
  setValue("absoluteReturnResult", `${result.absoluteReturn}%`);
  setValue("totalGrowthResult", formatCurrency(result.totalGrowth, currentCurrency));
  setValue("wealthMultipleResult", `${result.wealthMultiple}x`);
  setSubtitle("wealthMultipleResult", t.multiplied);
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult) renderResults(lastResult);
});

function resetCalculator() {
  initialInput.value = "";
  finalInput.value = "";
  yearsInput.value = "";
  clearError();

  lastInput = null;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastInput) return;
  const result = calculateCAGR(lastInput);
  copyToClipboard(copyCAGRSummary(lastInput, result, currentCurrency, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);