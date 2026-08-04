import Chart from "chart.js/auto";

import {
  calculateSIP,
  sipYearlyGrowth,
  sipInsight,
  validateSIPInputs,
  copySIPSummary,
} from "../utils/sip";

import { setValue, copyToClipboard } from "../utils/calculator";

const monthlyInput = document.getElementById("monthlyInvestment") as HTMLInputElement;
const returnInput = document.getElementById("annualReturn") as HTMLInputElement;
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

let lineChart: Chart | null = null;

let lastMonthly: number | null = null;
let lastReturn: number | null = null;
let lastYears: number | null = null;
let lastResult: ReturnType<typeof calculateSIP> | null = null;

function inr(value: number): string {
  return `₹${value.toLocaleString("en-IN")}`;
}

function showError(message: string) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function clearError() {
  errorBox.textContent = "";
  errorBox.hidden = true;
}

function renderChart(monthly: number, annualReturn: number, years: number) {

  const canvas = document.getElementById("sipLineChart") as HTMLCanvasElement;
  if (!canvas) return;

  const growth = sipYearlyGrowth(monthly, annualReturn, years);

  if (lineChart) lineChart.destroy();

  lineChart = new Chart(canvas, {
    type: "line",
    data: {
      labels: growth.map((g) => `Yr ${g.year}`),
      datasets: [
        {
          label: "Invested",
          data: growth.map((g) => g.invested),
          borderColor: "#94A3B8",
          backgroundColor: "transparent",
          tension: 0.3,
        },
        {
          label: "Value",
          data: growth.map((g) => g.value),
          borderColor: "#4F46E5",
          backgroundColor: "rgba(79,70,229,0.12)",
          fill: true,
          tension: 0.3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "bottom" } },
    },
  });
}

function renderSchedule(monthly: number, annualReturn: number, years: number) {

  const growth = sipYearlyGrowth(monthly, annualReturn, years);

  scheduleBody.innerHTML = growth
    .map(
      (row) => `
      <tr>
        <td>${row.year}</td>
        <td>${inr(row.invested)}</td>
        <td>${inr(row.value)}</td>
      </tr>`
    )
    .join("");
}

function calculate() {

  clearError();

  const monthly = parseFloat(monthlyInput.value);
  const annualReturn = parseFloat(returnInput.value);
  const years = parseFloat(tenureInput.value);

  const validationError = validateSIPInputs(monthly, annualReturn, years);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateSIP(monthly, annualReturn, years);

  setValue("maturityResult", inr(result.maturityValue));
  setValue("investedResult", inr(result.investedAmount));
  setValue("returnsResult", inr(result.estimatedReturns));
  setValue("percentResult", `${result.returnPercent}%`);

  insightBox.textContent = sipInsight(monthly, annualReturn, years, result);
  insightBox.hidden = false;

  renderChart(monthly, annualReturn, years);
  renderSchedule(monthly, annualReturn, years);

  lastMonthly = monthly;
  lastReturn = annualReturn;
  lastYears = years;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {

  monthlyInput.value = "";
  returnInput.value = "";
  tenureInput.value = "";
  clearError();

  lastMonthly = null;
  lastReturn = null;
  lastYears = null;
  lastResult = null;

  if (lineChart) {
    lineChart.destroy();
    lineChart = null;
  }

  insightBox.hidden = true;
  resultsContainer.hidden = true;
  emptyState.hidden = false;
}

function handleCopy() {
  if (lastMonthly === null || lastReturn === null || lastYears === null || !lastResult) return;
  copyToClipboard(copySIPSummary(lastMonthly, lastReturn, lastYears, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

scenarioButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tenureInput.value = btn.dataset.tenure ?? "";
    if (monthlyInput.value && returnInput.value) calculate();
  });
});
