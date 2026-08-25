import {
  compareStrategies,
  formatMonthsAsYearsMonths,
  validateDebts,
  type Debt,
} from "../utils/debt-payoff";

import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

function getDebtInputs(n: number): Debt {
  const balance = parseFloat((document.getElementById(`debt${n}Balance`) as HTMLInputElement)?.value) || 0;
  const apr = parseFloat((document.getElementById(`debt${n}Apr`) as HTMLInputElement)?.value) || 0;
  const minPayment = parseFloat((document.getElementById(`debt${n}Min`) as HTMLInputElement)?.value) || 0;
  return { name: `Debt ${n}`, balance, apr, minPayment };
}

const extraPaymentInput = document.getElementById("extraPayment") as HTMLInputElement;
const strategySelect = document.getElementById("strategy") as HTMLSelectElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const orderList = document.getElementById("payoffOrderList") as HTMLElement;

let lastSummary = "";

function fmtCurrency(n: number): string {
  if (!isFinite(n)) return "50+ yrs";
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

  const debts = [getDebtInputs(1), getDebtInputs(2), getDebtInputs(3)];
  const extra = parseFloat(extraPaymentInput?.value || "0") || 0;

  const validationError = validateDebts(debts);
  if (validationError) {
    showError(validationError);
    return;
  }

  const { avalanche, snowball } = compareStrategies(debts, extra);
  const chosen = strategySelect?.value === "snowball" ? snowball : avalanche;

  setValue("payoffTimeResult", formatMonthsAsYearsMonths(chosen.months));
  setValue("totalInterestResult", fmtCurrency(chosen.totalInterest));
  setValue("totalPaidResult", fmtCurrency(chosen.totalPaid));

  const interestDiff = snowball.totalInterest - avalanche.totalInterest;
  setValue("avalancheSavingsResult", fmtCurrency(Math.abs(interestDiff)));
  setSubtitle("avalancheSavingsResult", interestDiff >= 0 ? "avalanche saves more" : "snowball saves more");

  if (orderList) {
    orderList.innerHTML = chosen.payoffOrder
      .map((d) => `<li>${d.name} — paid off in month ${d.monthPaidOff}</li>`)
      .join("");
  }

  lastSummary = `
Debt Payoff Summary (${strategySelect?.value || "avalanche"})

Payoff Time: ${formatMonthsAsYearsMonths(chosen.months)}
Total Interest: ${fmtCurrency(chosen.totalInterest)}
Total Paid: ${fmtCurrency(chosen.totalPaid)}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  [1, 2, 3].forEach((n) => {
    (document.getElementById(`debt${n}Balance`) as HTMLInputElement).value = "";
    (document.getElementById(`debt${n}Apr`) as HTMLInputElement).value = "";
    (document.getElementById(`debt${n}Min`) as HTMLInputElement).value = "";
  });
  if (extraPaymentInput) extraPaymentInput.value = "";
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
strategySelect?.addEventListener("change", () => {
  if (!resultsContainer.hidden) calculate();
});