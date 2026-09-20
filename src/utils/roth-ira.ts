export interface RothIRAResult {
  projectedBalance: number;
  totalContributions: number;
  investmentGrowth: number;
  yearsInvested: number;
}

export function calculateRothIRA(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  expectedReturn: number
): RothIRAResult {
  const yearsInvested = Math.max(retirementAge - currentAge, 0);
  let balance = currentBalance;
  let totalContributions = 0;

  for (let i = 0; i < yearsInvested; i++) {
    balance = balance * (1 + expectedReturn / 100) + annualContribution;
    totalContributions += annualContribution;
  }

  const investmentGrowth = balance - currentBalance - totalContributions;

  return { projectedBalance: balance, totalContributions, investmentGrowth, yearsInvested };
}

export function validateRothIRAInputs(currentAge: number, retirementAge: number, annualContribution: number, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    age: "La edad actual debe ser mayor a cero.",
    retAge: "La edad de jubilación debe ser mayor que la edad actual.",
    limit: "El límite de Roth IRA para 2026 es $8,600 (50+ años) o $7,500 (menos de 50) — ajusta tu aporte anual.",
  } : {
    age: "Current age must be greater than zero.",
    retAge: "Retirement age must be greater than current age.",
    limit: "2026 Roth IRA limit is $8,600 (age 50+) or $7,500 (under 50) — adjust your annual contribution.",
  };
  if (currentAge <= 0) return msg.age;
  if (retirementAge <= currentAge) return msg.retAge;
  if (annualContribution > 8600) return msg.limit;
  return null;
}