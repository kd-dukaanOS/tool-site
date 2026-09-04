import {
  calculateCLV,
  validatePositiveNumber,
} from "../utils/business-batch-c";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";
const orderValueInput = document.getElementById("avgOrderValue") as HTMLInputElement;
const frequencyInput = document.getElementById("purchaseFrequency") as HTMLInputElement;
const lifespanInput = document.getElementById("lifespanYears") as HTMLInputElement;
const marginInput = document.getElementById("grossMargin") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: {
    orderValueLabel: "average order value",
    freqError: "Please enter a purchase frequency greater than 0.",
    lifespanError: "Please enter a customer lifespan greater than 0.",
    marginError: "Gross margin must be between 0 and 100.",
    atMargin: (m: number) => `at ${m}% gross margin`,
    summary: (avgOrderValue: number, purchaseFrequency: number, lifespanYears: number, grossMargin: number, result: any, currency: string) =>
      `Customer Lifetime Value Summary\n\n` +
      `Average Order Value: ${formatCurrency(avgOrderValue, currency)}\n` +
      `Purchase Frequency: ${purchaseFrequency}/year\n` +
      `Customer Lifespan: ${lifespanYears} years\n` +
      `Gross Margin: ${grossMargin}%\n` +
      `Gross CLV: ${formatCurrency(result.clvGross, currency)}\n` +
      `Net CLV: ${formatCurrency(result.clvNet, currency)}\n`,
  },
  es: {
    orderValueLabel: "valor promedio del pedido",
    freqError: "Por favor ingresa una frecuencia de compra mayor que 0.",
    lifespanError: "Por favor ingresa una vida del cliente mayor que 0.",
    marginError: "El margen bruto debe estar entre 0 y 100.",
    atMargin: (m: number) => `con ${m}% de margen bruto`,
    summary: (avgOrderValue: number, purchaseFrequency: number, lifespanYears: number, grossMargin: number, result: any, currency: string) =>
      `Resumen de Valor de Vida del Cliente\n\n` +
      `Valor Promedio del Pedido: ${formatCurrency(avgOrderValue, currency)}\n` +
      `Frecuencia de Compra: ${purchaseFrequency}/año\n` +
      `Vida del Cliente: ${lifespanYears} años\n` +
      `Margen Bruto: ${grossMargin}%\n` +
      `CLV Bruto: ${formatCurrency(result.clvGross, currency)}\n` +
      `CLV Neto: ${formatCurrency(result.clvNet, currency)}\n`,
  },
}[lang];

let lastSummary = "";

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function calculate() {
  clearError();

  const avgOrderValue = parseFloat(orderValueInput.value);
  const purchaseFrequency = parseFloat(frequencyInput.value);
  const lifespanYears = parseFloat(lifespanInput.value);
  const grossMargin = marginInput.value ? parseFloat(marginInput.value) : 100;

  const orderError = validatePositiveNumber(avgOrderValue, t.orderValueLabel, lang);
  if (orderError) return showError(orderError);

  if (!purchaseFrequency || purchaseFrequency <= 0) {
    return showError(t.freqError);
  }

  if (!lifespanYears || lifespanYears <= 0) {
    return showError(t.lifespanError);
  }

  if (grossMargin < 0 || grossMargin > 100) {
    return showError(t.marginError);
  }

 const result = calculateCLV(avgOrderValue, purchaseFrequency, lifespanYears, grossMargin);
  const currency = getSavedCurrency();

  setValue("clvGrossResult", formatCurrency(result.clvGross, currency));
  setValue("clvNetResult", formatCurrency(result.clvNet, currency));
  setValue("annualValueResult", formatCurrency(avgOrderValue * purchaseFrequency, currency));
  setSubtitle("clvNetResult", t.atMargin(grossMargin));

  lastSummary = t.summary(avgOrderValue, purchaseFrequency, lifespanYears, grossMargin, result, currency);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

onCurrencyChange(() => {
  if (orderValueInput.value && frequencyInput.value && lifespanInput.value) calculate();
});

function resetCalculator() {
  orderValueInput.value = "";
  frequencyInput.value = "";
  lifespanInput.value = "";
  marginInput.value = "";
  clearError();

  lastSummary = "";

  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);
