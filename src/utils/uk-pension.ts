export interface UkPensionResult {
  projectedPot: number;
  totalContributions: number;
  employerContributions: number;
  taxReliefAdded: number;
  investmentGrowth: number;
  yearsInvested: number;
}

const ANNUAL_ALLOWANCE_2026_27 = 60000;

export function calculateUkPension(
  currentAge: number,
  retirementAge: number,
  currentPot: number,
  annualSalary: number,
  employeeContributionPercent: number,
  employerContributionPercent: number,
  expectedReturn: number
): UkPensionResult {
  const yearsInvested = Math.max(retirementAge - currentAge, 0);

  const employeeAnnual = annualSalary * (employeeContributionPercent / 100);
  const employerAnnual = annualSalary * (employerContributionPercent / 100);
  const taxReliefAnnual = employeeAnnual * 0.25; // basic rate relief: 20% relief = pot grows by 25% of net contribution

  const cappedEmployee = Math.min(employeeAnnual + taxReliefAnnual, ANNUAL_ALLOWANCE_2026_27);
  const totalAnnualContribution = cappedEmployee + employerAnnual;

  let pot = currentPot;
  let totalContributions = 0;
  let employerContributions = 0;
  let taxReliefAdded = 0;

  for (let i = 0; i < yearsInvested; i++) {
    pot = pot * (1 + expectedReturn / 100) + totalAnnualContribution;
    totalContributions += employeeAnnual;
    employerContributions += employerAnnual;
    taxReliefAdded += taxReliefAnnual;
  }

  const investmentGrowth = pot - currentPot - totalContributions - employerContributions - taxReliefAdded;

  return {
    projectedPot: pot,
    totalContributions,
    employerContributions,
    taxReliefAdded,
    investmentGrowth,
    yearsInvested,
  };
}

export function validateUkPensionInputs(currentAge: number, retirementAge: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    age: "La edad actual debe ser mayor a cero.",
    retire: "La edad de jubilación debe ser mayor que la edad actual.",
    min55: "Las pensiones privadas generalmente no se pueden acceder antes de los 55 años (subiendo a 57 desde 2028).",
  } : {
    age: "Current age must be greater than zero.",
    retire: "Retirement age must be greater than current age.",
    min55: "Private pensions generally can't be accessed before age 55 (rising to 57 from 2028).",
  };
  if (currentAge <= 0) return msg.age;
  if (retirementAge <= currentAge) return msg.retire;
  if (retirementAge < 55) return msg.min55;
  return null;
}