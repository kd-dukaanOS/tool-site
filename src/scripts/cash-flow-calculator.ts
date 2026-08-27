import { calculateCashFlow, validateCashFlowInputs } from "../utils/cash-flow";
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

const fieldIds = [
  "beginningCashBalance", "operatingInflows", "operatingOutflows",
  "investingCashFlow", "financingCashFlow", "monthlyRevenue",
];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [beginningCashBalance, operatingInflows, operatingOutflows, investingCashFlow, financingCashFlow, monthlyRevenue] = fieldIds.map(val);

  const err = validateCashFlowInputs(operatingInflows, operatingOutflows);
  if (err) { showError(err); return; }

  const result = calculateCashFlow(beginningCashBalance, operatingInflows, operatingOutflows, investingCashFlow, financingCashFlow, monthlyRevenue);

  setValue("netCashFlowResult", fmtCurrency(result.netCashFlow));
  setValue("endingBalanceResult", fmtCurrency(result.endingCashBalance));
  setValue("operatingCashFlowResult", fmtCurrency(result.operatingCashFlow));
  setValue("cashFlowMarginResult", monthlyRevenue > 0 ? `${result.cashFlowMargin.toFixed(1)}%` : "N/A");
  setSubtitle("netCashFlowResult", result.netCashFlow >= 0 ? "Positive cash flow" : "Negative cash flow");

  lastSummary = `
Cash Flow Summary

Operating Cash Flow: ${fmtCurrency(result.operatingCashFlow)}
Net Cash Flow: ${fmtCurrency(result.netCashFlow)}
Ending Cash Balance: ${fmtCurrency(result.endingCashBalance)}
Cash Flow Margin: ${monthlyRevenue > 0 ? result.cashFlowMargin.toFixed(1) + "%" : "N/A"}
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