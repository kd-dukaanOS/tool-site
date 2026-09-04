import { calculateFutureValue, validateFutureValueInputs } from "../utils/future-value";
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

const fieldIds = ["presentValue", "monthlyContribution", "annualReturn", "years", "compoundingFrequency"];

const lang = (window as any).calcLang === "es" ? "es" : "en";

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

  const [presentValue, monthlyContribution, annualReturn, years, compoundingFrequency] = fieldIds.map(val);

  const validationError = validateFutureValueInputs(presentValue, years, annualReturn, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateFutureValue(presentValue, monthlyContribution, annualReturn, years, compoundingFrequency || 12);

  const t = {
    en: { yearsSuffix: `${result.yearsInvested} years`, over: `Over ${result.yearsInvested} years`, summary: `
Future Value Projection Summary

Future Value: ${fmtCurrency(result.futureValue)}
Total Contributions: ${fmtCurrency(result.totalContributions)}
Investment Growth: ${fmtCurrency(result.investmentGrowth)}
Years Invested: ${result.yearsInvested}
`.trim() },
    es: { yearsSuffix: `${result.yearsInvested} años`, over: `En ${result.yearsInvested} años`, summary: `
Resumen de Proyección de Valor Futuro

Valor Futuro: ${fmtCurrency(result.futureValue)}
Aportes Totales: ${fmtCurrency(result.totalContributions)}
Crecimiento de Inversión: ${fmtCurrency(result.investmentGrowth)}
Años Invertidos: ${result.yearsInvested}
`.trim() },
  }[lang];

  setValue("futureValueResult", fmtCurrency(result.futureValue));
  setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
  setValue("investmentGrowthResult", fmtCurrency(result.investmentGrowth));
  setValue("yearsInvestedResult", t.yearsSuffix);
  setSubtitle("futureValueResult", t.over);

  lastSummary = t.summary;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  fieldIds.forEach((id) => {
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