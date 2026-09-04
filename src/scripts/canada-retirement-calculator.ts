import { calculateCanadaRetirement, validateCanadaRetirementInputs } from "../utils/canada-retirement";
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
  "currentAge",
  "retirementAge",
  "currentRrspBalance",
  "currentTfsaBalance",
  "annualRrspContribution",
  "annualTfsaContribution",
  "expectedReturn",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";
const t = {
  en: {
    yearsToRetirement: (y: number) => `${y} years to retirement`,
    summary: (r: any) => `
Canada Retirement Projection Summary

Total Projected Balance: ${fmtCurrency(r.totalBalance)}
RRSP Balance: ${fmtCurrency(r.rrspBalance)}
TFSA Balance: ${fmtCurrency(r.tfsaBalance)}
Total Contributions: ${fmtCurrency(r.totalContributions)}
Investment Growth: ${fmtCurrency(r.totalGrowth)}
Years to Retirement: ${r.yearsToRetirement}
`.trim(),
  },
  es: {
    yearsToRetirement: (y: number) => `${y} años para la jubilación`,
    summary: (r: any) => `
Resumen de Proyección de Jubilación de Canadá

Saldo Total Proyectado: ${fmtCurrency(r.totalBalance)}
Saldo RRSP: ${fmtCurrency(r.rrspBalance)}
Saldo TFSA: ${fmtCurrency(r.tfsaBalance)}
Contribuciones Totales: ${fmtCurrency(r.totalContributions)}
Crecimiento de Inversión: ${fmtCurrency(r.totalGrowth)}
Años para la Jubilación: ${r.yearsToRetirement}
`.trim(),
  },
}[lang];

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
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
    currentAge,
    retirementAge,
    currentRrspBalance,
    currentTfsaBalance,
    annualRrspContribution,
    annualTfsaContribution,
    expectedReturn,
  ] = fieldIds.map(val);

  const validationError = validateCanadaRetirementInputs(
    currentAge,
    retirementAge,
    annualRrspContribution,
    annualTfsaContribution
  );
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateCanadaRetirement(
    currentAge,
    retirementAge,
    currentRrspBalance,
    currentTfsaBalance,
    annualRrspContribution,
    annualTfsaContribution,
    expectedReturn
  );

  setValue("totalBalanceResult", fmtCurrency(result.totalBalance));
  setValue("rrspBalanceResult", fmtCurrency(result.rrspBalance));
  setValue("tfsaBalanceResult", fmtCurrency(result.tfsaBalance));
  setValue("totalGrowthResult", fmtCurrency(result.totalGrowth));
  setSubtitle("totalBalanceResult", t.yearsToRetirement(result.yearsToRetirement));

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