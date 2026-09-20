export interface RentVsBuyResult {
  buyerNetWorth: number;
  renterNetWorth: number;
  betterOption: "buy" | "rent";
  breakEvenYear: number | null;
}

function monthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / termMonths;
  return (principal * r) / (1 - Math.pow(1 + r, -termMonths));
}

export function calculateRentVsBuy(
  homePrice: number,
  downPaymentPercent: number,
  mortgageRate: number,
  loanTermYears: number,
  propertyTaxRate: number,
  annualInsurance: number,
  maintenanceRate: number,
  appreciationRate: number,
  closingCostPercent: number,
  sellingCostPercent: number,
  monthlyRent: number,
  rentGrowthRate: number,
  investmentReturnRate: number,
  comparisonYears: number
): RentVsBuyResult {
  const downPayment = homePrice * (downPaymentPercent / 100);
  const closingCosts = homePrice * (closingCostPercent / 100);
  const loanAmount = homePrice - downPayment;
  const termMonths = loanTermYears * 12;
  const monthlyPI = monthlyPayment(loanAmount, mortgageRate, termMonths);

  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = annualInsurance / 12;
  const monthlyMaintenance = (homePrice * (maintenanceRate / 100)) / 12;
  const buyMonthlyCost = monthlyPI + monthlyPropertyTax + monthlyInsurance + monthlyMaintenance;

  const monthlyMortgageRate = mortgageRate / 100 / 12;
  const monthlyAppreciationRate = appreciationRate / 100 / 12;

  let remainingBalance = loanAmount;
  let homeValue = homePrice;
  let rent = monthlyRent;
  let investmentBalance = downPayment + closingCosts;

  const totalMonths = comparisonYears * 12;
  let breakEvenYear: number | null = null;

  for (let month = 1; month <= totalMonths; month++) {
    const interest = remainingBalance * monthlyMortgageRate;
    const principal = Math.min(monthlyPI - interest, remainingBalance);
    remainingBalance = Math.max(remainingBalance - principal, 0);

    homeValue *= 1 + monthlyAppreciationRate;

    const netDifference = buyMonthlyCost - rent;
    investmentBalance = investmentBalance * (1 + investmentReturnRate / 100 / 12) + netDifference;

    if (month % 12 === 0) {
      rent *= 1 + rentGrowthRate / 100;

      const sellingCosts = homeValue * (sellingCostPercent / 100);
      const buyerNetWorthAtYear = homeValue - remainingBalance - sellingCosts;

      if (breakEvenYear === null && buyerNetWorthAtYear > investmentBalance) {
        breakEvenYear = month / 12;
      }
    }
  }

  const finalSellingCosts = homeValue * (sellingCostPercent / 100);
  const buyerNetWorth = homeValue - remainingBalance - finalSellingCosts;
  const renterNetWorth = investmentBalance;

  return {
    buyerNetWorth,
    renterNetWorth,
    betterOption: buyerNetWorth >= renterNetWorth ? "buy" : "rent",
    breakEvenYear,
  };
}

export function validateRentVsBuyInputs(homePrice: number, monthlyRent: number, comparisonYears: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    price: "El precio de la vivienda debe ser mayor a cero.",
    rent: "La renta mensual debe ser mayor a cero.",
    years: "El período de comparación debe ser mayor a cero.",
  } : {
    price: "Home price must be greater than zero.",
    rent: "Monthly rent must be greater than zero.",
    years: "Comparison period must be greater than zero.",
  };
  if (homePrice <= 0) return msg.price;
  if (monthlyRent <= 0) return msg.rent;
  if (comparisonYears <= 0) return msg.years;
  return null;
}