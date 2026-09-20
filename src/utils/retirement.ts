export interface RetirementResult {
  projectedSavings: number;
  totalContributions: number;
  totalGrowth: number;
  yearsToRetirement: number;
  monthlyRetirementIncome: number;
}

export function calculateRetirementProjection(
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualReturnPercent: number
): RetirementResult {
  const years = retirementAge - currentAge;
  const months = years * 12;
  const r = annualReturnPercent / 100 / 12;

  const fvCurrent = currentSavings * Math.pow(1 + r, months);

  const fvContributions =
    r === 0
      ? monthlyContribution * months
      : monthlyContribution * ((Math.pow(1 + r, months) - 1) / r);

  const projectedSavings = fvCurrent + fvContributions;
  const totalContributions = currentSavings + monthlyContribution * months;
  const totalGrowth = projectedSavings - totalContributions;

  // 4% safe withdrawal rule, expressed monthly
  const monthlyRetirementIncome = (projectedSavings * 0.04) / 12;

  return {
    projectedSavings,
    totalContributions,
    totalGrowth,
    yearsToRetirement: years,
    monthlyRetirementIncome,
  };
}

export function validateRetirementInputs(
  currentAge: number,
  retirementAge: number,
  monthlyContribution: number,
  lang: "en" | "es" = "en"
): string | null {
  const msg = lang === "es" ? {
    age: "Por favor ingresa una edad actual válida.",
    retAge: "La edad de jubilación debe ser mayor que la edad actual.",
    contrib: "El aporte mensual no puede ser negativo.",
  } : {
    age: "Please enter a valid current age.",
    retAge: "Retirement age must be greater than current age.",
    contrib: "Monthly contribution cannot be negative.",
  };
  if (!currentAge || currentAge <= 0) return msg.age;
  if (!retirementAge || retirementAge <= currentAge) return msg.retAge;
  if (monthlyContribution < 0) return msg.contrib;
  return null;
}