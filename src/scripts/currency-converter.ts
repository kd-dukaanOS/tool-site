import {
  convertCurrency,
  validateCurrencyInput,
  formatAmount,
  copyCurrencySummary,
  type CurrencyInput,
  type CurrencyResult,
} from "../utils/currency";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const amountInput = document.getElementById("amount") as HTMLInputElement;
const fromInput = document.getElementById("fromCurrency") as HTMLInputElement;
const toInput = document.getElementById("toCurrency") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { fetchErr:"Could not fetch exchange rate. Check the currency codes.", netErr:"Network error while fetching exchange rate.", convertedSuffix:" converted" },
  es: { fetchErr:"No se pudo obtener el tipo de cambio. Verifica los códigos de moneda.", netErr:"Error de red al obtener el tipo de cambio.", convertedSuffix:" convertido" },
}[lang];
let lastResult: CurrencyResult | null = null;
let lastAmount = 0;

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

async function calculate() {
  clearError();

  const input: CurrencyInput = {
    amount: parseFloat(amountInput.value),
    fromCurrency: fromInput.value.trim(),
    toCurrency: toInput.value.trim(),
  };

  const validationError = validateCurrencyInput(input, lang);

  if (validationError) {
    showError(validationError);
    return;
  }

  const from = input.fromCurrency.toUpperCase();
  const to = input.toCurrency.toUpperCase();

  let rate: number;

  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
    const data = await res.json();

    if (data.result !== "success" || !data.rates?.[to]) {
      showError(t.fetchErr);
      return;
    }

    rate = data.rates[to];
  } catch {
    showError(t.netErr);
    return;
  }

  const result = convertCurrency(input.amount, rate, from, to);

  setValue("convertedResult", formatAmount(result.convertedAmount, result.toCurrency));
  setValue("rateResult", `1 ${result.fromCurrency} = ${result.rate.toFixed(4)} ${result.toCurrency}`);
  setValue("inverseRateResult", `1 ${result.toCurrency} = ${result.inverseRate.toFixed(4)} ${result.fromCurrency}`);
  setSubtitle("convertedResult", `${formatAmount(input.amount, result.fromCurrency)}${t.convertedSuffix}`);

  lastResult = result;
  lastAmount = input.amount;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  amountInput.value = "";
  fromInput.value = "USD";
  toInput.value = "INR";
  clearError();

  lastResult = null;
  lastAmount = 0;

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastResult) return;
  copyToClipboard(copyCurrencySummary(lastResult, lastAmount, lang));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
