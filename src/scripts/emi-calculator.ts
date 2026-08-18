import Chart from "chart.js/auto";

import {
  calculateEMI,
  amortizationByYear,
  emiInsight,
  validateEMIInputs,
  copyEMISummary,
} from "../utils/emi";

import { setValue, copyToClipboard } from "../utils/calculator";
import { formatCurrency, getSavedCurrency, onCurrencyChange, type CurrencyCode } from "../utils/currencyselector";

let currentCurrency: CurrencyCode = getSavedCurrency();

const principalInput = document.getElementById("principal") as HTMLInputElement;
const rateInput = document.getElementById("rate") as HTMLInputElement;
const tenureInput = document.getElementById("tenure") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const insightBox = document.getElementById("insightBox") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement;

const scenarioButtons =
  document.querySelectorAll<HTMLButtonElement>("[data-tenure]");

let pieChart: Chart | null = null;

let lastPrincipal: number | null = null;
let lastRate: number | null = null;
let lastYears: number | null = null;
let lastResult: ReturnType<typeof calculateEMI> | null = null;

function inr(value: number): string {
  return formatCurrency(value, currentCurrency);
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function renderChart(principal: number, totalInterest: number) {

  const canvas = document.getElementById("emiPieChart") as HTMLCanvasElement;
  if (!canvas) return;

  if (pieChart) pieChart.destroy();

  pieChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [principal, totalInterest],
          backgroundColor: ["#4F46E5", "#F59E0B"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });
}

function renderSchedule(principal: number, rate: number, years: number) {

  const schedule = amortizationByYear(principal, rate, years);

  scheduleBody.innerHTML = schedule
    .map(
      (row) => `
      <tr>
        <td>${row.year}</td>
        <td>${inr(row.principalPaid)}</td>
        <td>${inr(row.interestPaid)}</td>
        <td>${inr(row.balance)}</td>
      </tr>`
    )
    .join("");
}

function calculate() {

  clearError();

  const principal = parseFloat(principalInput.value);
  const rate = parseFloat(rateInput.value);
  const years = parseFloat(tenureInput.value);

  const validationError = validateEMIInputs(principal, rate, years);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateEMI(principal, rate, years);

  renderResults(result, principal, rate, years);

  lastPrincipal = principal;
  lastRate = rate;
  lastYears = years;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function renderResults(result: ReturnType<typeof calculateEMI>, principal: number, rate: number, years: number) {
  setValue("emiResult", inr(result.emi));
  setValue("interestResult", inr(result.totalInterest));
  setValue("totalResult", inr(result.totalPayment));
  setValue("percentResult", `${result.interestPercent}%`);

  insightBox.textContent = emiInsight(principal, rate, years, result, currentCurrency);
  insightBox.hidden = false;

  renderChart(principal, result.totalInterest);
  renderSchedule(principal, rate, years);
}

onCurrencyChange((code) => {
  currentCurrency = code;
  if (lastResult && lastPrincipal !== null && lastRate !== null && lastYears !== null) {
    renderResults(lastResult, lastPrincipal, lastRate, lastYears);
  }
});

function resetCalculator() {

  principalInput.value = "";
  rateInput.value = "";
  tenureInput.value = "";
  clearError();

  lastPrincipal = null;
  lastRate = null;
  lastYears = null;
  lastResult = null;

  if (pieChart) {
    pieChart.destroy();
    pieChart = null;
  }

  insightBox.hidden = true;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (lastPrincipal === null || lastRate === null || lastYears === null || !lastResult) return;
  copyToClipboard(copyEMISummary(lastPrincipal, lastRate, lastYears, lastResult, currentCurrency));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

scenarioButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tenureInput.value = btn.dataset.tenure ?? "";
    if (principalInput.value && rateInput.value) calculate();
  });
});
