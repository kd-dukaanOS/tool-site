import { calculateDebtSnowball, validateDebtSnowballInputs, type DebtInput } from "../utils/debt-snowball";
import { setValue, setSubtitle, copyToClipboard } from "../utils/calculator";

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const addDebtBtn = document.getElementById("addDebtBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const debtListEl = document.getElementById("debtList") as HTMLElement;
const orderBody = document.getElementById("orderBody") as HTMLElement;

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { namePlaceholder:"Debt name (e.g. Credit Card)", debtWord:"Debt", balancePlaceholder:"Balance", minPaymentPlaceholder:"Min payment", ratePlaceholder:"Rate %", debtFreeTimeline:"Debt-free timeline", summaryTitle:"Debt Snowball Summary", debtFreeIn:"Debt-Free In", totalInterest:"Total Interest Paid", totalPaid:"Total Paid", payoffOrder:"Payoff Order" },
  es: { namePlaceholder:"Nombre de la deuda (ej. Tarjeta de Crédito)", debtWord:"Deuda", balancePlaceholder:"Saldo", minPaymentPlaceholder:"Pago mínimo", ratePlaceholder:"Tasa %", debtFreeTimeline:"Cronograma sin deudas", summaryTitle:"Resumen de Bola de Nieve", debtFreeIn:"Libre de Deudas En", totalInterest:"Interés Total Pagado", totalPaid:"Total Pagado", payoffOrder:"Orden de Pago" },
}[lang];

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
    <input type="text" class="debt-name" placeholder="${t.namePlaceholder}" value="${t.debtWord} ${debtCount}" />
    <input type="number" class="debt-balance" placeholder="${t.balancePlaceholder}" min="0" step="1" />
    <input type="number" class="debt-min-payment" placeholder="${t.minPaymentPlaceholder}" min="0" step="1" />
    <input type="number" class="debt-rate" placeholder="${t.ratePlaceholder}" min="0" step="0.01" />
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
  const extraMonthlyPayment = parseFloat((document.getElementById("extraMonthlyPayment") as HTMLInputElement)?.value) || 0;

  const validationError = validateDebtSnowballInputs(debts, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDebtSnowball(debts, extraMonthlyPayment);

  setValue("totalMonthsResult", `${Math.floor(result.totalMonths / 12)}y ${result.totalMonths % 12}m`);
  setValue("totalInterestResult", fmtCurrency(result.totalInterestPaid));
  setValue("totalPaidResult", fmtCurrency(result.totalPaid));
  setValue("debtCountResult", String(debts.length));
  setSubtitle("totalMonthsResult", t.debtFreeTimeline);

  if (orderBody) {
    orderBody.innerHTML = result.payoffOrder
      .map(
        (d, i) =>
          `<tr><td>${i + 1}. ${d.name}</td><td>${Math.floor(d.monthsToPayoff / 12)}y ${d.monthsToPayoff % 12}m</td><td>${fmtCurrency(d.totalInterestPaid)}</td></tr>`
      )
      .join("");
  }

  lastSummary = `
${t.summaryTitle}

${t.debtFreeIn}: ${Math.floor(result.totalMonths / 12)}y ${result.totalMonths % 12}m
${t.totalInterest}: ${fmtCurrency(result.totalInterestPaid)}
${t.totalPaid}: ${fmtCurrency(result.totalPaid)}

${t.payoffOrder}:
${result.payoffOrder.map((d, i) => `${i + 1}. ${d.name} — ${Math.floor(d.monthsToPayoff / 12)}y ${d.monthsToPayoff % 12}m`).join("\n")}
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  debtListEl.innerHTML = "";
  debtCount = 0;
  addDebtRow();
  addDebtRow();
  const extraEl = document.getElementById("extraMonthlyPayment") as HTMLInputElement;
  if (extraEl) extraEl.value = "";
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