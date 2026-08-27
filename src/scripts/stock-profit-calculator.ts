import { calculateStockProfit, validateStockProfitInputs } from "../utils/stock-profit";
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

const fieldIds = ["buyPrice", "sellPrice", "numberOfShares", "buyFees", "sellFees"];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}
function fmtPercent(n: number): string {
  return `${n.toFixed(2)}%`;
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

  const [buyPrice, sellPrice, numberOfShares, buyFees, sellFees] = fieldIds.map(val);

  const validationError = validateStockProfitInputs(buyPrice, numberOfShares);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateStockProfit(buyPrice, sellPrice, numberOfShares, buyFees, sellFees);

  setValue("netProfitResult", fmtCurrency(result.netProfit));
  setValue("returnPercentResult", fmtPercent(result.returnPercent));
  setValue("totalFeesResult", fmtCurrency(result.totalFees));
  setValue("breakEvenPriceResult", fmtCurrency(result.breakEvenPrice));
  setSubtitle("netProfitResult", result.netProfit >= 0 ? "Profit" : "Loss");

  lastSummary = `
Stock Profit Summary

Net Profit/Loss: ${fmtCurrency(result.netProfit)}
Return: ${fmtPercent(result.returnPercent)}
Total Fees: ${fmtCurrency(result.totalFees)}
Break-Even Price: ${fmtCurrency(result.breakEvenPrice)}
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

function handleCopy() {
  if (!lastSummary) return;
  copyToClipboard(lastSummary);
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", resetCalculator);
copyBtn?.addEventListener("click", handleCopy);