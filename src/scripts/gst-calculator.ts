import Chart from "chart.js/auto";

import {
  calculateGST,
  gstSlabComparison,
  gstInsight,
  validateGSTInputs,
  copyGSTSummary,
  type GSTMode,
} from "../utils/gst";

import { setValue, copyToClipboard } from "../utils/calculator";

const amountInput = document.getElementById("amount") as HTMLInputElement;
const rateInput = document.getElementById("rate") as HTMLInputElement;

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
const insightBox = document.getElementById("insightBox") as HTMLElement;
const scheduleBody = document.getElementById("scheduleBody") as HTMLElement;

const modeButtons = document.querySelectorAll<HTMLButtonElement>("[data-mode]");
const rateButtons = document.querySelectorAll<HTMLButtonElement>("[data-rate]");

let pieChart: Chart | null = null;
let currentMode: GSTMode = "exclusive";

let lastAmount: number | null = null;
let lastRate: number | null = null;
let lastResult: ReturnType<typeof calculateGST> | null = null;

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

function renderChart(base: number, gst: number) {

  const canvas = document.getElementById("gstPieChart") as HTMLCanvasElement;
  if (!canvas) return;

  if (pieChart) pieChart.destroy();

  pieChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Base Amount", "GST Amount"],
      datasets: [
        {
          data: [base, gst],
          backgroundColor: ["#4F46E5", "#10B981"],
          borderWidth: 0,
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

function renderSlabTable(amount: number) {

  const rows = gstSlabComparison(amount, currentMode);

  scheduleBody.innerHTML = rows
    .map(
      (row) => `
      <tr>
        <td>${row.rate}%</td>
        <td>${inr(row.gstAmount)}</td>
        <td>${inr(row.totalAmount)}</td>
      </tr>`
    )
    .join("");
}

function calculate() {

  clearError();

  const amount = parseFloat(amountInput.value);
  const rate = parseFloat(rateInput.value);

  const validationError = validateGSTInputs(amount, rate);

  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateGST(amount, rate, currentMode);

  setValue("baseResult", inr(result.baseAmount));
  setValue("gstResult", inr(result.gstAmount));
  setValue("totalResult", inr(result.totalAmount));
  setValue("splitResult", `${inr(result.cgst)} + ${inr(result.sgst)}`);

  insightBox.textContent = gstInsight(rate, result);
  insightBox.hidden = false;

  renderChart(result.baseAmount, result.gstAmount);
  renderSlabTable(amount);

  lastAmount = amount;
  lastRate = rate;
  lastResult = result;

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {

  amountInput.value = "";
  rateInput.value = "";
  clearError();

  lastAmount = null;
  lastRate = null;
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
  if (lastAmount === null || lastRate === null || !lastResult) return;
  copyToClipboard(copyGSTSummary(lastAmount, lastRate, currentMode, lastResult));
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentMode = (btn.dataset.mode as GSTMode) ?? "exclusive";

    modeButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    if (amountInput.value && rateInput.value) calculate();
  });
});

rateButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    rateInput.value = btn.dataset.rate ?? "";
    if (amountInput.value) calculate();
  });
});
