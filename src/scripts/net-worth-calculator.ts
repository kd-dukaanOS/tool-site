import { calculateNetWorth, validateNetWorthInputs } from "../utils/net-worth";
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

const assetIds = ["cash", "investments", "realEstate", "otherAssets"];
const liabilityIds = ["mortgageDebt", "loanDebt", "creditCardDebt", "otherLiabilities"];

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

function calculate() {
  clearError();

  const [cash, investments, realEstate, otherAssets] = assetIds.map(val);
  const [mortgageDebt, loanDebt, creditCardDebt, otherLiabilities] = liabilityIds.map(val);

  const totalAssets = cash + investments + realEstate + otherAssets;
  const totalLiabilities = mortgageDebt + loanDebt + creditCardDebt + otherLiabilities;

  const validationError = validateNetWorthInputs(totalAssets, totalLiabilities);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateNetWorth(cash, investments, realEstate, otherAssets, mortgageDebt, loanDebt, creditCardDebt, otherLiabilities);

  setValue("netWorthResult", fmtCurrency(result.netWorth));
  setValue("totalAssetsResult", fmtCurrency(result.totalAssets));
  setValue("totalLiabilitiesResult", fmtCurrency(result.totalLiabilities));
  setValue("debtRatioResult", `${result.debtToAssetRatio.toFixed(1)}%`);
  setSubtitle("netWorthResult", result.netWorth >= 0 ? "Positive" : "Negative");

  lastSummary = `
Net Worth Summary

Total Assets: ${fmtCurrency(result.totalAssets)}
Total Liabilities: ${fmtCurrency(result.totalLiabilities)}
Net Worth: ${fmtCurrency(result.netWorth)}
Debt-to-Asset Ratio: ${result.debtToAssetRatio.toFixed(1)}%
`.trim();

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  [...assetIds, ...liabilityIds].forEach((id) => {
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