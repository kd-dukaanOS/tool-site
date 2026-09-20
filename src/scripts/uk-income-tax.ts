import { calculateUKIncomeTax, validateIncome, formatCurrency } from "../utils/regional-salary";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { effectiveRate:"effective rate", header:"UK Income Tax (England/Wales/NI)", grossIncome:"Gross Income", personalAllowance:"Personal Allowance", taxableIncome:"Taxable Income", incomeTaxOwed:"Income Tax Owed", effectiveRateLabel:"Effective Rate", marginalRate:"Marginal Rate", afterTax:"After-Tax Income" },
  es: { effectiveRate:"tasa efectiva", header:"Impuesto sobre la Renta del Reino Unido (Inglaterra/Gales/NI)", grossIncome:"Ingreso Bruto", personalAllowance:"Asignación Personal", taxableIncome:"Ingreso Imponible", incomeTaxOwed:"Impuesto Adeudado", effectiveRateLabel:"Tasa Efectiva", marginalRate:"Tasa Marginal", afterTax:"Ingreso Después de Impuestos" },
}[lang];

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const grossIncome = parseFloat(incomeInput.value);

  const err = validateIncome(grossIncome, lang);
  if (err) return showError(err);

  const r = calculateUKIncomeTax(grossIncome);

  setValue("incomeTaxResult", formatCurrency(r.incomeTax, "GBP"));
  setSubtitle("incomeTaxResult", `${r.effectiveRate.toFixed(1)}% ${t.effectiveRate}`);
  setValue("marginalRateResult", `${(r.marginalRate * 100).toFixed(0)}%`);
  setValue("taxableIncomeResult", formatCurrency(r.taxableIncome, "GBP"));
  setValue("afterTaxResult", formatCurrency(r.afterTaxIncome, "GBP"));

  lastSummary = `${t.header}\n\n` +
    `${t.grossIncome}: ${formatCurrency(r.grossAnnual, "GBP")}\n` +
    `${t.personalAllowance}: ${formatCurrency(r.personalAllowance, "GBP")}\n` +
    `${t.taxableIncome}: ${formatCurrency(r.taxableIncome, "GBP")}\n` +
    `${t.incomeTaxOwed}: ${formatCurrency(r.incomeTax, "GBP")}\n` +
    `${t.effectiveRateLabel}: ${r.effectiveRate.toFixed(1)}%\n` +
    `${t.marginalRate}: ${(r.marginalRate * 100).toFixed(0)}%\n` +
    `${t.afterTax}: ${formatCurrency(r.afterTaxIncome, "GBP")}\n`;

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