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

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { na:"N/A", positive:"Positive cash flow", negative:"Negative cash flow", summary:(r:any,mr:number)=>`
Cash Flow Summary

Operating Cash Flow: ${fmtCurrency(r.operatingCashFlow)}
Net Cash Flow: ${fmtCurrency(r.netCashFlow)}
Ending Cash Balance: ${fmtCurrency(r.endingCashBalance)}
Cash Flow Margin: ${mr > 0 ? r.cashFlowMargin.toFixed(1) + "%" : "N/A"}
`.trim() },
  es: { na:"N/D", positive:"Flujo de caja positivo", negative:"Flujo de caja negativo", summary:(r:any,mr:number)=>`
Resumen de Flujo de Caja

Flujo de Caja Operativo: ${fmtCurrency(r.operatingCashFlow)}
Flujo de Caja Neto: ${fmtCurrency(r.netCashFlow)}
Saldo Final de Caja: ${fmtCurrency(r.endingCashBalance)}
Margen de Flujo de Caja: ${mr > 0 ? r.cashFlowMargin.toFixed(1) + "%" : "N/D"}
`.trim() },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}
function showError(m: string) { errorBox.textContent = m; errorBox.hidden = false; }
function clearError() { errorBox.textContent = ""; errorBox.hidden = true; }

function calculate() {
  clearError();
  const [beginningCashBalance, operatingInflows, operatingOutflows, investingCashFlow, financingCashFlow, monthlyRevenue] = fieldIds.map(val);

  const err = validateCashFlowInputs(operatingInflows, operatingOutflows, lang);
  if (err) { showError(err); return; }

  const result = calculateCashFlow(beginningCashBalance, operatingInflows, operatingOutflows, investingCashFlow, financingCashFlow, monthlyRevenue);

  setValue("netCashFlowResult", fmtCurrency(result.netCashFlow));
  setValue("endingBalanceResult", fmtCurrency(result.endingCashBalance));
  setValue("operatingCashFlowResult", fmtCurrency(result.operatingCashFlow));
  setValue("cashFlowMarginResult", monthlyRevenue > 0 ? `${result.cashFlowMargin.toFixed(1)}%` : t.na);
  setSubtitle("netCashFlowResult", result.netCashFlow >= 0 ? t.positive : t.negative);

  lastSummary = t.summary(result, monthlyRevenue);

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