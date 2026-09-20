// src/scripts/tax-withholding-calculator.ts
import { calculateTaxWithholding, validateWithholdingInputs } from "../utils/tax-withholding";
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

const numericFieldIds = [
  "grossPayPerPeriod", "dependentsAmountAnnual", "otherIncomeAnnual",
  "deductionsAnnual", "extraWithholdingPerPeriod",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const basedOnLabel = (window as any).twhBasedOnLabel || "Based on";
const payLabel = (window as any).twhPayLabel || "pay";

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

  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as
    "single" | "married" | "headOfHousehold";
  const payFrequency = (document.getElementById("payFrequency") as HTMLSelectElement)?.value as
    "weekly" | "biweekly" | "semimonthly" | "monthly" | "annual";
  const multipleJobsOrSpouseWorks = (document.getElementById("multipleJobs") as HTMLInputElement)?.checked ?? false;

  const [
    grossPayPerPeriod, dependentsAmountAnnual, otherIncomeAnnual,
    deductionsAnnual, extraWithholdingPerPeriod,
  ] = numericFieldIds.map(val);

  const validationError = validateWithholdingInputs(grossPayPerPeriod, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateTaxWithholding(
    filingStatus, payFrequency, grossPayPerPeriod, multipleJobsOrSpouseWorks,
    dependentsAmountAnnual, otherIncomeAnnual, deductionsAnnual, extraWithholdingPerPeriod
  );

  setValue("perPeriodResult", fmtCurrency(result.perPeriodWithholding));
  setValue("annualTaxResult", fmtCurrency(result.annualTaxWithheld));
  setValue("effectiveRateResult", `${result.effectiveWithholdingRate.toFixed(1)}%`);
  setValue("annualGrossResult", fmtCurrency(result.annualGrossIncome));
  setSubtitle("perPeriodResult", lang === "es" ? `${basedOnLabel} ${payFrequency}` : `${basedOnLabel} ${payFrequency} ${payLabel}`);

  lastSummary = lang === "es" ? `
Resumen de Retención de Impuestos

Retención Estimada por Cheque: ${fmtCurrency(result.perPeriodWithholding)}
Retención Anual Estimada: ${fmtCurrency(result.annualTaxWithheld)}
Tasa de Retención Efectiva: ${result.effectiveWithholdingRate.toFixed(1)}%
Ingreso Bruto Anual: ${fmtCurrency(result.annualGrossIncome)}
`.trim() : `
Tax Withholding Summary

Estimated Withholding per Paycheck: ${fmtCurrency(result.perPeriodWithholding)}
Estimated Annual Withholding: ${fmtCurrency(result.annualTaxWithheld)}
Effective Withholding Rate: ${result.effectiveWithholdingRate.toFixed(1)}%
Annual Gross Income: ${fmtCurrency(result.annualGrossIncome)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  numericFieldIds.forEach((id) => {
    const el = document.getElementById(id) as HTMLInputElement;
    if (el) el.value = "";
  });
  const multipleJobsEl = document.getElementById("multipleJobs") as HTMLInputElement;
  if (multipleJobsEl) multipleJobsEl.checked = false;
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