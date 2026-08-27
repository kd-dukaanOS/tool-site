import { calculateBurnRate, validateBurnRateInputs } from "../utils/burn-rate";
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

const fieldIds = ["currentCashBalance", "monthlyRevenue", "monthlyOperatingExpenses"];
let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [currentCashBalance, monthlyRevenue, monthlyOperatingExpenses] = fieldIds.map(val);

  const err = validateBurnRateInputs(currentCashBalance, monthlyOperatingExpenses);
  if (err) { showError(err); return; }

  const result = calculateBurnRate(currentCashBalance, monthlyRevenue, monthlyOperatingExpenses);

  setValue("grossBurnResult", fmtCurrency(result.grossBurnRate));
  setValue("netBurnResult", fmtCurrency(result.netBurnRate));
  setValue("runwayResult", result.runwayMonths === null ? "Cash flow positive" : `${result.runwayMonths} mo`);
  setValue("cashBalanceResult", fmtCurrency(currentCashBalance));
  setSubtitle("netBurnResult", result.netBurnRate > 0 ? "Burning cash" : "Cash flow positive");

  lastSummary = `
Burn Rate Summary

Gross Burn Rate: ${fmtCurrency(result.grossBurnRate)}/mo
Net Burn Rate: ${fmtCurrency(result.netBurnRate)}/mo
Runway: ${result.runwayMonths === null ? "Cash flow positive" : result.runwayMonths + " months"}
Current Cash Balance: ${fmtCurrency(currentCashBalance)}
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

function handleCopy() { if (lastSummary) copyToClipboard(lastSummary); }

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);