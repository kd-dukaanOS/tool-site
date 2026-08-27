import { calculateDebtConsolidation, validateDebtConsolidationInputs, type DebtInput } from "../utils/debt-consolidation";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const addDebtBtn = document.getElementById("addDebtBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const debtListEl = document.getElementById("debtList") as HTMLElement;

let debtCount = 0;
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

function addDebtRow() {
  debtCount++;
  const row = document.createElement("div");
  row.className = "debt-row";
  row.dataset.debtId = String(debtCount);
  row.innerHTML = `
    <input type="text" class="debt-name" placeholder="Debt name (e.g. Credit Card)" value="Debt ${debtCount}" />
    <input type="number" class="debt-balance" placeholder="Balance" min="0" step="1" />
    <input type="number" class="debt-min-payment" placeholder="Min payment" min="0" step="1" />
    <input type="number" class="debt-rate" placeholder="Rate %" min="0" step="0.01" />
    <button type="button" class="debt-remove" aria-label="Remove debt">&times;</button>
  `;
  row.querySelector(".debt-remove")?.addEventListener("click", () => row.remove());
  debtListEl.appendChild(row);
}

function readDebts(): DebtInput[] {
  return Array.from(debtListEl.querySelectorAll(".debt-row")).map((row) => ({
    name: (row.querySelector(".debt-name") as HTMLInputElement)?.value || "Debt",
    balance: parseFloat((row.querySelector(".debt-balance") as HTMLInputElement)?.value) || 0,
    minPayment: parseFloat((row.querySelector(".debt-min-payment") as HTMLInputElement)?.value) || 0,
    interestRate: parseFloat((row.querySelector(".debt-rate") as HTMLInputElement)?.value) || 0,
  }));
}

function calculate() {
  clearError();

  const debts = readDebts();
  const consolidationRate = parseFloat((document.getElementById("consolidationRate") as HTMLInputElement)?.value) || 0;
  const consolidationTermYears = parseFloat((document.getElementById("consolidationTermYears") as HTMLInputElement)?.value) || 0;
  const consolidationTermMonths = consolidationTermYears * 12;

  const validationError = validateDebtConsolidationInputs(debts, consolidationTermMonths);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDebtConsolidation(debts, consolidationRate, consolidationTermMonths);

  setValue("interestSavedResult", fmtCurrency(Math.abs(result.interestSaved)));
  setValue("consolidatedPaymentResult", fmtCurrency(result.consolidatedMonthlyPayment));
  setValue("currentInterestResult", fmtCurrency(result.currentTotalInterest));
  setValue("consolidatedInterestResult", fmtCurrency(result.consolidatedTotalInterest));
  setSubtitle("interestSavedResult", result.isConsolidationBetter ? "Consolidation saves you money" : "Consolidation costs more");

  lastSummary = `
Debt Consolidation Summary

Current Total Interest (if unchanged): ${fmtCurrency(result.currentTotalInterest)}
Consolidated Loan Total Interest: ${fmtCurrency(result.consolidatedTotalInterest)}
${result.isConsolidationBetter ? "Interest Saved" : "Extra Interest Cost"}: ${fmtCurrency(Math.abs(result.interestSaved))}
New Monthly Payment: ${fmtCurrency(result.consolidatedMonthlyPayment)}
Current Combined Monthly Payment: ${fmtCurrency(result.currentMonthlyPayment)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  debtListEl.innerHTML = "";
  debtCount = 0;
  addDebtRow();
  addDebtRow();
  const rateEl = document.getElementById("consolidationRate") as HTMLInputElement;
  const termEl = document.getElementById("consolidationTermYears") as HTMLInputElement;
  if (rateEl) rateEl.value = "";
  if (termEl) termEl.value = "";
  clearError();
  lastSummary = "";
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

addDebtBtn?.addEventListener("click", addDebtRow);
calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

addDebtRow();
addDebtRow();