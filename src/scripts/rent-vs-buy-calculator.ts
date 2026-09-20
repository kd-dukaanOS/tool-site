import { calculateRentVsBuy, validateRentVsBuyInputs } from "../utils/rent-vs-buy";
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
  "homePrice", "downPaymentPercent", "mortgageRate", "loanTermYears",
  "propertyTaxRate", "annualInsurance", "maintenanceRate", "appreciationRate",
  "closingCostPercent", "sellingCostPercent", "monthlyRent", "rentGrowthRate",
  "investmentReturnRate", "comparisonYears",
];

const lang = (window as any).calcLang === "es" ? "es" : "en";

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
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, maintenanceRate, appreciationRate,
    closingCostPercent, sellingCostPercent, monthlyRent, rentGrowthRate,
    investmentReturnRate, comparisonYears,
  ] = fieldIds.map(val);

  const validationError = validateRentVsBuyInputs(homePrice, monthlyRent, comparisonYears, lang);
  if (validationError) {
    showError(validationError);
    return;
  }

  const result = calculateRentVsBuy(
    homePrice, downPaymentPercent, mortgageRate, loanTermYears,
    propertyTaxRate, annualInsurance, maintenanceRate, appreciationRate,
    closingCostPercent, sellingCostPercent, monthlyRent, rentGrowthRate,
    investmentReturnRate, comparisonYears
  );

  setValue("buyNetWorthResult", fmtCurrency(result.buyerNetWorth));
  setValue("rentNetWorthResult", fmtCurrency(result.renterNetWorth));
  const betterOptionText = result.betterOption === "buy" ? (lang === "es" ? "Comprar" : "Buying") : (lang === "es" ? "Alquilar" : "Renting");
  const breakEvenText = result.breakEvenYear === null ? (lang === "es" ? "Fuera del rango" : "Beyond range") : `${lang === "es" ? "Año" : "Year"} ${result.breakEvenYear}`;

  setValue("betterOptionResult", betterOptionText);
  setValue("breakEvenResult", breakEvenText);
  setSubtitle("betterOptionResult", lang === "es" ? `Durante ${comparisonYears} años` : `Over ${comparisonYears} years`);

  lastSummary = lang === "es" ? `
Resumen de Alquilar vs Comprar

Patrimonio Neto al Comprar: ${fmtCurrency(result.buyerNetWorth)}
Patrimonio Neto al Alquilar: ${fmtCurrency(result.renterNetWorth)}
Mejor Opción: ${betterOptionText}
Año de Equilibrio: ${result.breakEvenYear === null ? "Fuera del rango de comparación" : `Año ${result.breakEvenYear}`}
`.trim() : `
Rent vs Buy Summary

Net Worth if Buying: ${fmtCurrency(result.buyerNetWorth)}
Net Worth if Renting: ${fmtCurrency(result.renterNetWorth)}
Better Option: ${betterOptionText}
Break-Even Year: ${result.breakEvenYear === null ? "Beyond comparison range" : `Year ${result.breakEvenYear}`}
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