import {
calculateCAC,
  validatePositiveNumber,
} from "../utils/business-batch-c";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange } from "../utils/currency";

const marketingInput = document.getElementById("marketingCost") as HTMLInputElement;
const salesInput = document.getElementById("salesCost") as HTMLInputElement;
const customersInput = document.getElementById("newCustomers") as HTMLInputElement;
const leadsInput = document.getElementById("totalLeads") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: {
    marketingCostLabel: "marketing cost", salesCostLabel: "sales cost",
    newCustomersError: "Please enter the number of new customers (must be greater than 0).",
    perNewCustomer: "per new customer",
    summary: (marketingCost: number, salesCost: number, newCustomers: number, result: any, currency: string) =>
      `Customer Acquisition Cost Summary\n\n` +
      `Marketing Cost: ${formatCurrency(marketingCost, currency)}\n` +
      `Sales Cost: ${formatCurrency(salesCost, currency)}\n` +
      `Total Spend: ${formatCurrency(result.totalSpend, currency)}\n` +
      `New Customers: ${newCustomers}\n` +
      `CAC: ${formatCurrency(result.cac, currency)}\n` +
      (result.costPerLead !== null ? `Cost per Lead: ${formatCurrency(result.costPerLead, currency)}\n` : ""),
  },
  es: {
    marketingCostLabel: "costo de marketing", salesCostLabel: "costo de ventas",
    newCustomersError: "Por favor ingresa el número de clientes nuevos (debe ser mayor que 0).",
    perNewCustomer: "por cliente nuevo",
    summary: (marketingCost: number, salesCost: number, newCustomers: number, result: any, currency: string) =>
      `Resumen de Costo de Adquisición de Clientes\n\n` +
      `Costo de Marketing: ${formatCurrency(marketingCost, currency)}\n` +
      `Costo de Ventas: ${formatCurrency(salesCost, currency)}\n` +
      `Gasto Total: ${formatCurrency(result.totalSpend, currency)}\n` +
      `Clientes Nuevos: ${newCustomers}\n` +
      `CAC: ${formatCurrency(result.cac, currency)}\n` +
      (result.costPerLead !== null ? `Costo por Lead: ${formatCurrency(result.costPerLead, currency)}\n` : ""),
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

  const marketingCost = parseFloat(marketingInput.value);
  const salesCost = parseFloat(salesInput.value) || 0;
  const newCustomers = parseFloat(customersInput.value);
  const totalLeads = leadsInput.value ? parseFloat(leadsInput.value) : undefined;

  const marketingError = validatePositiveNumber(marketingCost, t.marketingCostLabel, lang);
  if (marketingError) return showError(marketingError);

  const salesError = validatePositiveNumber(salesCost, t.salesCostLabel, lang);
  if (salesError) return showError(salesError);

  if (!newCustomers || newCustomers <= 0) {
    return showError(t.newCustomersError);
  }

 const result = calculateCAC(marketingCost, salesCost, newCustomers, totalLeads);
  const currency = getSavedCurrency();

  setValue("cacResult", formatCurrency(result.cac, currency));
  setValue("totalSpendResult", formatCurrency(result.totalSpend, currency));
  setValue(
    "costPerLeadResult",
    result.costPerLead !== null ? formatCurrency(result.costPerLead, currency) : "—"
  );
  setSubtitle("cacResult", t.perNewCustomer);

  lastSummary = t.summary(marketingCost, salesCost, newCustomers, result, currency);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

onCurrencyChange(() => {
  if (marketingInput.value && customersInput.value) calculate();
});

function resetCalculator() {
  marketingInput.value = "";
  salesInput.value = "";
  customersInput.value = "";
  leadsInput.value = "";
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
