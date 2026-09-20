import { calculateClosingCosts, validateClosingCostsInputs } from "../utils/closing-costs";
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
  "homePrice", "loanAmount", "originationRate", "discountPointsCount",
  "titleInsuranceRate", "recordingFees", "transferTaxRate",
  "monthsPrepaidInsurance", "annualInsurance", "monthsPrepaidTax",
  "annualPropertyTax", "downPayment",
];



const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { percentOfPrice:(p:string)=>`${p}% of home price`, cashSub:"Closing Costs + Down Payment", summary:(r:any)=>`
Closing Costs Summary

Total Closing Costs: ${fmtCurrency(r.totalClosingCosts)} (${r.closingCostPercentOfPrice.toFixed(1)}% of price)
Lender Fees + Points: ${fmtCurrency(r.lenderFees + r.discountPoints)}
Title & Transfer/Recording: ${fmtCurrency(r.titleFees + r.taxesAndRecording)}
Prepaids & Escrow: ${fmtCurrency(r.prepaidsAndEscrow)}
Total Cash Needed (incl. Down Payment): ${fmtCurrency(r.totalCashNeeded)}
`.trim() },
  es: { percentOfPrice:(p:string)=>`${p}% del precio`, cashSub:"Costos de Cierre + Pago Inicial", summary:(r:any)=>`
Resumen de Costos de Cierre

Costos de Cierre Totales: ${fmtCurrency(r.totalClosingCosts)} (${r.closingCostPercentOfPrice.toFixed(1)}% del precio)
Comisiones de Prestamista + Puntos: ${fmtCurrency(r.lenderFees + r.discountPoints)}
Título y Transferencia/Registro: ${fmtCurrency(r.titleFees + r.taxesAndRecording)}
Prepagos y Depósito en Garantía: ${fmtCurrency(r.prepaidsAndEscrow)}
Efectivo Total Necesario (incl. Pago Inicial): ${fmtCurrency(r.totalCashNeeded)}
`.trim() },
}[lang];

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

  const [
    homePrice, loanAmount, originationRate, discountPointsCount,
    titleInsuranceRate, recordingFees, transferTaxRate,
    monthsPrepaidInsurance, annualInsurance, monthsPrepaidTax,
    annualPropertyTax, downPayment,
  ] = fieldIds.map(val);

  const validationError = validateClosingCostsInputs(homePrice, loanAmount, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateClosingCosts(
    homePrice, loanAmount, originationRate, discountPointsCount,
    titleInsuranceRate, recordingFees, transferTaxRate,
    monthsPrepaidInsurance, annualInsurance, monthsPrepaidTax,
    annualPropertyTax, downPayment
  );

  setValue("totalClosingCostsResult", fmtCurrency(result.totalClosingCosts));
  setValue("cashNeededResult", fmtCurrency(result.totalCashNeeded));
  setValue("lenderFeesResult", fmtCurrency(result.lenderFees + result.discountPoints));
  setValue("prepaidsResult", fmtCurrency(result.prepaidsAndEscrow));
  setSubtitle("totalClosingCostsResult", t.percentOfPrice(result.closingCostPercentOfPrice.toFixed(1)));
  setSubtitle("cashNeededResult", t.cashSub);

  lastSummary = t.summary(result);

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