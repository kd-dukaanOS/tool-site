import { calculateCAIncomeTax, validateIncome, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;
const provinceSelect = document.getElementById("province") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: {
    effectiveRateSuffix: (v: string) => `${v}% effective rate`,
    summary: (province: string, r: any) => `Canada Income Tax (${province})\n\n` +
      `Gross Income: ${formatCurrency(r.grossAnnual, "CAD")}\n` +
      `Federal Tax: ${formatCurrency(r.federalTax, "CAD")}\n` +
      `Provincial Tax: ${formatCurrency(r.provincialTax, "CAD")}\n` +
      `Total Tax: ${formatCurrency(r.totalTax, "CAD")}\n` +
      `Effective Rate: ${r.effectiveRate.toFixed(1)}%\n` +
      `Marginal Rate: ${(r.marginalRate * 100).toFixed(1)}%\n` +
      `After-Tax Income: ${formatCurrency(r.afterTaxIncome, "CAD")}\n`,
  },
  es: {
    effectiveRateSuffix: (v: string) => `${v}% tasa efectiva`,
    summary: (province: string, r: any) => `Impuesto sobre la Renta de Canadá (${province})\n\n` +
      `Ingreso Bruto: ${formatCurrency(r.grossAnnual, "CAD")}\n` +
      `Impuesto Federal: ${formatCurrency(r.federalTax, "CAD")}\n` +
      `Impuesto Provincial: ${formatCurrency(r.provincialTax, "CAD")}\n` +
      `Impuesto Total: ${formatCurrency(r.totalTax, "CAD")}\n` +
      `Tasa Efectiva: ${r.effectiveRate.toFixed(1)}%\n` +
      `Tasa Marginal: ${(r.marginalRate * 100).toFixed(1)}%\n` +
      `Ingreso Después de Impuestos: ${formatCurrency(r.afterTaxIncome, "CAD")}\n`,
  },
}[lang];

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const grossIncome = parseFloat(incomeInput.value);
  const province = provinceSelect.value;

  const err = validateIncome(grossIncome, lang);
  if (err) return showError(err);

  const r = calculateCAIncomeTax(grossIncome, province);

  setValue("federalTaxResult", formatCurrency(r.federalTax, "CAD"));
  setSubtitle("federalTaxResult", t.effectiveRateSuffix(r.effectiveRate.toFixed(1)));
  setValue("provincialTaxResult", formatCurrency(r.provincialTax, "CAD"));
  setValue("marginalRateResult", `${(r.marginalRate * 100).toFixed(1)}%`);
  setValue("afterTaxResult", formatCurrency(r.afterTaxIncome, "CAD"));

  lastSummary = t.summary(province, r);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  incomeInput.value = "";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);