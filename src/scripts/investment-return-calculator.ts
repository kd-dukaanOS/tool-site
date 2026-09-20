import { calculateInvestmentReturn, validateInvestmentReturnInputs } from "../utils/investment-return";
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

const fieldIds = ["initialInvestment", "monthlyContribution", "years", "endingValue"];

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function fmtPercent(n: number): string {
  return `${n.toFixed(2)}%`;
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

  const [initialInvestment, monthlyContribution, years, endingValue] = fieldIds.map(val);

  const validationError = validateInvestmentReturnInputs(initialInvestment, years, endingValue, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateInvestmentReturn(initialInvestment, monthlyContribution, years, endingValue);

  setValue("annualizedReturnResult", fmtPercent(result.annualizedReturnPercent));
  setValue("totalGainResult", fmtCurrency(result.totalGain));
  setValue("totalReturnPercentResult", fmtPercent(result.totalReturnPercent));
  setValue("totalContributedResult", fmtCurrency(result.totalContributed));
  setSubtitle("annualizedReturnResult", lang === "es" ? `En ${years} años` : `Over ${years} years`);

  lastSummary = lang === "es" ? `
Resumen de Retorno de Inversión

Total Aportado: ${fmtCurrency(result.totalContributed)}
Ganancia Total: ${fmtCurrency(result.totalGain)}
Retorno Total: ${fmtPercent(result.totalReturnPercent)}
Retorno Anualizado (CAGR): ${fmtPercent(result.annualizedReturnPercent)}
`.trim() : `
Investment Return Summary

Total Contributed: ${fmtCurrency(result.totalContributed)}
Total Gain: ${fmtCurrency(result.totalGain)}
Total Return: ${fmtPercent(result.totalReturnPercent)}
Annualized Return (CAGR): ${fmtPercent(result.annualizedReturnPercent)}
`.trim();

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