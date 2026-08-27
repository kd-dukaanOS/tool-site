import { calculateTaxBracket, validateTaxBracketInputs } from "../utils/tax-bracket";
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
const breakdownBody = document.getElementById("breakdownBody") as HTMLElement;

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
  const taxableIncome = val("taxableIncome");

  const validationError = validateTaxBracketInputs(taxableIncome);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateTaxBracket(filingStatus, taxableIncome);

  setValue("totalTaxResult", fmtCurrency(result.totalTax));
  setValue("marginalRateResult", `${result.marginalRate.toFixed(0)}%`);
  setValue("effectiveRateResult", `${result.effectiveRate.toFixed(1)}%`);
  setValue("taxableIncomeResult", fmtCurrency(result.taxableIncome));
  setSubtitle("marginalRateResult", "Top bracket rate");

  if (breakdownBody) {
    breakdownBody.innerHTML = result.bracketBreakdown
      .map(
        (b) =>
          `<tr><td>${(b.rate * 100).toFixed(0)}%</td><td>${fmtCurrency(b.from)} - ${fmtCurrency(b.to)}</td><td>${fmtCurrency(b.taxInBracket)}</td></tr>`
      )
      .join("");
  }

  lastSummary = `
Tax Bracket Summary

Total Tax: ${fmtCurrency(result.totalTax)}
Marginal Rate: ${result.marginalRate.toFixed(0)}%
Effective Rate: ${result.effectiveRate.toFixed(1)}%
Taxable Income: ${fmtCurrency(result.taxableIncome)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  const taxableIncomeEl = document.getElementById("taxableIncome") as HTMLInputElement;
  if (taxableIncomeEl) taxableIncomeEl.value = "";
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