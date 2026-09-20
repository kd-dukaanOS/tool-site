import { calculateUkPension, validateUkPensionInputs } from "../utils/uk-pension";
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
  "currentPot",
  "annualSalary",
  "employeeContributionPercent",
  "employerContributionPercent",
  "expectedReturn",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";

let lastSummary = "";

function fmtCurrency(n: number): string {
  return n.toLocaleString("en-GB", { style: "currency", currency: "GBP", maximumFractionDigits: 0 });
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
    currentPot,
    annualSalary,
    employeeContributionPercent,
    employerContributionPercent,
    expectedReturn,
  ] = fieldIds.map(val);

  const validationError = validateUkPensionInputs(currentAge, retirementAge, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateUkPension(
    currentAge,
    retirementAge,
    currentPot,
    annualSalary,
    employeeContributionPercent,
    employerContributionPercent,
    expectedReturn
  );

  setValue("projectedPotResult", fmtCurrency(result.projectedPot));
  setValue("totalContributionsResult", fmtCurrency(result.totalContributions));
  setValue("employerContributionsResult", fmtCurrency(result.employerContributions));
  setValue("taxReliefAddedResult", fmtCurrency(result.taxReliefAdded));
  setSubtitle("projectedPotResult", lang === "es" ? `${result.yearsInvested} años invertidos` : `${result.yearsInvested} years invested`);

  lastSummary = lang === "es" ? `
Resumen de Proyección de Pensión del Reino Unido

Fondo Proyectado: ${fmtCurrency(result.projectedPot)}
Tus Contribuciones: ${fmtCurrency(result.totalContributions)}
Contribuciones del Empleador: ${fmtCurrency(result.employerContributions)}
Alivio Fiscal Agregado: ${fmtCurrency(result.taxReliefAdded)}
Años Invertidos: ${result.yearsInvested}
`.trim() : `
UK Pension Projection Summary

Projected Pot: ${fmtCurrency(result.projectedPot)}
Your Contributions: ${fmtCurrency(result.totalContributions)}
Employer Contributions: ${fmtCurrency(result.employerContributions)}
Tax Relief Added: ${fmtCurrency(result.taxReliefAdded)}
Years Invested: ${result.yearsInvested}
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