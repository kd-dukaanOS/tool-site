import { calculateChildTaxCredit, validateCTCInputs } from "../utils/child-tax-credit";
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

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { reduced:"Reduced by income phase-out", full:"Full credit amount", maxActc:"Max Additional CTC (refundable)", summary:(r:any)=>`
Child Tax Credit Summary (2026)

Final Credit Amount: ${fmtCurrency(r.finalCredit)}
Base Credit (before phase-out): ${fmtCurrency(r.totalBaseCredit)}
Phase-Out Reduction: ${fmtCurrency(r.phaseOutReduction)}
Max Refundable (Additional CTC): ${fmtCurrency(r.refundableCap)}
`.trim() },
  es: { reduced:"Reducido por límite de ingresos", full:"Monto de crédito completo", maxActc:"Máximo ACTC Adicional (reembolsable)", summary:(r:any)=>`
Resumen de Crédito Tributario por Hijos (2026)

Monto de Crédito Final: ${fmtCurrency(r.finalCredit)}
Crédito Base (antes de reducción): ${fmtCurrency(r.totalBaseCredit)}
Reducción por Ingresos: ${fmtCurrency(r.phaseOutReduction)}
Máximo Reembolsable (ACTC Adicional): ${fmtCurrency(r.refundableCap)}
`.trim() },
}[lang];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { reduced:"Reduced by income phase-out", full:"Full credit amount", maxActc:"Max Additional CTC (refundable)", summary:(r:any)=>`
Child Tax Credit Summary (2026)

Final Credit Amount: ${fmtCurrency(r.finalCredit)}
Base Credit (before phase-out): ${fmtCurrency(r.totalBaseCredit)}
Phase-Out Reduction: ${fmtCurrency(r.phaseOutReduction)}
Max Refundable (Additional CTC): ${fmtCurrency(r.refundableCap)}
`.trim() },
  es: { reduced:"Reducido por límite de ingresos", full:"Monto de crédito completo", maxActc:"Máximo ACTC Adicional (reembolsable)", summary:(r:any)=>`
Resumen de Crédito Tributario por Hijos (2026)

Monto de Crédito Final: ${fmtCurrency(r.finalCredit)}
Crédito Base (antes de reducción): ${fmtCurrency(r.totalBaseCredit)}
Reducción por Ingresos: ${fmtCurrency(r.phaseOutReduction)}
Máximo Reembolsable (ACTC Adicional): ${fmtCurrency(r.refundableCap)}
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

  const magi = val("magi");
  const filingStatus = (document.getElementById("filingStatus") as HTMLSelectElement)?.value as "single" | "mfj" | "hoh" | "mfs";
  const numQualifyingChildren = val("numQualifyingChildren");
  const numOtherDependents = val("numOtherDependents");

  const validationError = validateCTCInputs(magi, numQualifyingChildren, numOtherDependents, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateChildTaxCredit(magi, filingStatus, numQualifyingChildren, numOtherDependents);

  setValue("finalCreditResult", fmtCurrency(result.finalCredit));
  setValue("baseCreditResult", fmtCurrency(result.totalBaseCredit));
  setValue("phaseOutResult", fmtCurrency(result.phaseOutReduction));
  setValue("refundableCapResult", fmtCurrency(result.refundableCap));
  setSubtitle("finalCreditResult", result.isPhasingOut ? t.reduced : t.full);
  setSubtitle("refundableCapResult", t.maxActc);

  lastSummary = t.summary(result);

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function resetCalculator() {
  ["magi", "numQualifyingChildren", "numOtherDependents"].forEach((id) => {
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