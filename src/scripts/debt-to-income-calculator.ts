import { calculateDTI, validateDTIInputs } from "../utils/debt-to-income";
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
  "grossMonthlyIncome", "housingPayment", "carLoanPayment",
  "studentLoanPayment", "creditCardMinPayments", "otherDebtPayments",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: { roomTo43:(v:string)=>`Room to 43%: ${v}/mo`, summaryTitle:"Debt-to-Income Summary", frontEndLabel:"Front-End DTI (Housing)", backEndLabel:"Back-End DTI (Total Debt)", totalMonthlyDebt:"Total Monthly Debt", roomTo36:"Room to reach 36% DTI", roomTo43Full:"Room to reach 43% DTI" },
  es: { roomTo43:(v:string)=>`Margen al 43%: ${v}/mes`, summaryTitle:"Resumen de Deuda a Ingresos", frontEndLabel:"DTI Inicial (Vivienda)", backEndLabel:"DTI Total (Toda la Deuda)", totalMonthlyDebt:"Deuda Mensual Total", roomTo36:"Margen para llegar al 36% DTI", roomTo43Full:"Margen para llegar al 43% DTI" },
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
    grossMonthlyIncome, housingPayment, carLoanPayment,
    studentLoanPayment, creditCardMinPayments, otherDebtPayments,
  ] = fieldIds.map(val);

  const validationError = validateDTIInputs(grossMonthlyIncome, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateDTI(
    grossMonthlyIncome, housingPayment, carLoanPayment,
    studentLoanPayment, creditCardMinPayments, otherDebtPayments, lang
  );

  setValue("frontEndResult", `${result.frontEndDTI.toFixed(1)}%`);
  setValue("backEndResult", `${result.backEndDTI.toFixed(1)}%`);
  setValue("totalDebtResult", fmtCurrency(result.totalMonthlyDebt));
  setValue("ratingResult", result.backEndRating);
  setSubtitle("frontEndResult", result.frontEndRating);
  setSubtitle("backEndResult", result.backEndRating);
  setSubtitle("ratingResult", t.roomTo43(fmtCurrency(result.maxAdditionalDebtFor43)));

  lastSummary = `
${t.summaryTitle}

${t.frontEndLabel}: ${result.frontEndDTI.toFixed(1)}% - ${result.frontEndRating}
${t.backEndLabel}: ${result.backEndDTI.toFixed(1)}% - ${result.backEndRating}
${t.totalMonthlyDebt}: ${fmtCurrency(result.totalMonthlyDebt)}
${t.roomTo36}: ${fmtCurrency(result.maxAdditionalDebtFor36)}/mo
${t.roomTo43Full}: ${fmtCurrency(result.maxAdditionalDebtFor43)}/mo
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