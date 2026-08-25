import { calculateUSFederalTax, validateIncome, formatCurrency } from "../utils/regional-salary";
import type { USFilingStatus } from "../data/regions/us";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const incomeInput = document.getElementById("grossIncome") as HTMLInputElement;
const filingStatusSelect = document.getElementById("filingStatus") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const bracketTableBody = document.getElementById("bracketTableBody") as HTMLElement;

const statusLabels: Record<USFilingStatus, string> = {
  single: "Single",
  mfj: "Married Filing Jointly",
  hoh: "Head of Household",
};

let lastSummary = "";

function showError(msg: string) { errorBox.textContent = msg; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function renderBracketTable(breakdown: ReturnType<typeof calculateUSFederalTax>["bracketBreakdown"]) {
  if (!bracketTableBody) return;
  bracketTableBody.innerHTML = breakdown
    .map((b) => {
      const rangeLabel = b.max === null
        ? `${formatCurrency(b.min, "USD")}+`
        : `${formatCurrency(b.min, "USD")} – ${formatCurrency(b.max, "USD")}`;
      return `<tr>
        <td>${rangeLabel}</td>
        <td>${(b.rate * 100).toFixed(0)}%</td>
        <td>${formatCurrency(b.taxInBracket, "USD")}</td>
      </tr>`;
    })
    .join("");
}

function calculate() {
  clearError();
  const grossIncome = parseFloat(incomeInput.value);
  const filingStatus = filingStatusSelect.value as USFilingStatus;

  const err = validateIncome(grossIncome);
  if (err) return showError(err);

  const r = calculateUSFederalTax(grossIncome, filingStatus);

  setValue("federalTaxResult", formatCurrency(r.federalTax, "USD"));
  setSubtitle("federalTaxResult", `${r.effectiveRate.toFixed(1)}% effective rate`);
  setValue("marginalRateResult", `${(r.marginalRate * 100).toFixed(0)}%`);
  setValue("taxableIncomeResult", formatCurrency(r.taxableIncome, "USD"));
  setValue("afterTaxResult", formatCurrency(r.afterTaxIncome, "USD"));

  renderBracketTable(r.bracketBreakdown);

  lastSummary = `US Federal Income Tax (${statusLabels[filingStatus]})\n\n` +
    `Gross Income: ${formatCurrency(r.grossAnnual, "USD")}\n` +
    `Standard Deduction: ${formatCurrency(r.standardDeduction, "USD")}\n` +
    `Taxable Income: ${formatCurrency(r.taxableIncome, "USD")}\n` +
    `Federal Tax Owed: ${formatCurrency(r.federalTax, "USD")}\n` +
    `Effective Rate: ${r.effectiveRate.toFixed(1)}%\n` +
    `Marginal Rate: ${(r.marginalRate * 100).toFixed(0)}%\n` +
    `After-Tax Income: ${formatCurrency(r.afterTaxIncome, "USD")}\n`;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  incomeInput.value = "";
  filingStatusSelect.value = "single";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);