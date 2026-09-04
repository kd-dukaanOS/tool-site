import { calculateEffectiveTaxRate, validateEffectiveTaxRateInputs } from "../utils/effective-tax-rate";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function val(id: string): number {
  return parseFloat((document.getElementById(id) as HTMLInputElement)?.value) || 0;
}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { onTaxable:(x:string)=>`On ${x} taxable income`, summary:(r:any,fmt:(n:number)=>string)=>`
Effective Tax Rate Summary

Effective Tax Rate: ${r.effectiveRate.toFixed(2)}%
Marginal Tax Bracket: ${r.marginalRate.toFixed(0)}%
Taxable Income: ${fmt(r.taxableIncome)}
Total Federal Tax: ${fmt(r.totalTax)}
After-Tax Income: ${fmt(r.afterTaxIncome)}
`.trim() },
  es: { onTaxable:(x:string)=>`Sobre ${x} de ingreso gravable`, summary:(r:any,fmt:(n:number)=>string)=>`
Resumen de Tasa Efectiva de Impuestos

Tasa Efectiva de Impuesto: ${r.effectiveRate.toFixed(2)}%
Tramo Marginal: ${r.marginalRate.toFixed(0)}%
Ingreso Gravable: ${fmt(r.taxableIncome)}
Impuesto Federal Total: ${fmt(r.totalTax)}
Ingreso Después de Impuestos: ${fmt(r.afterTaxIncome)}
`.trim() },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

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

  const grossIncome = val("grossIncome");
  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as "single" | "mfj" | "hoh";
  const useStandardDeduction = (document.getElementById("deductionType") as HTMLSelectElement)?.value === "standard";
  const itemizedDeductions = val("itemizedDeductions");

  const validationError = validateEffectiveTaxRateInputs(grossIncome, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEffectiveTaxRate(grossIncome, filingStatus, useStandardDeduction, itemizedDeductions);

  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(2)}%`);
  setValue("marginalRateResult", `${result.marginalRate.toFixed(0)}%`);
  setValue("totalTaxResult", fmtCurrency(result.totalTax));
  setValue("afterTaxResult", fmtCurrency(result.afterTaxIncome));
  setSubtitle("totalTaxResult", t.onTaxable(fmtCurrency(result.taxableIncome)));

  lastSummary = t.summary(result, fmtCurrency);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ["grossIncome", "itemizedDeductions"].forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
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