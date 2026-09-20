export interface NPSInput {
  currentAge: number;
  retirementAge: number;
  monthlyContribution: number;
  expectedReturn: number;
  annuityPercent: number;
  annuityRate: number;
}

export interface NPSResult {
  totalInvested: number;
  totalGrowth: number;
  maturityCorpus: number;
  lumpsumWithdrawal: number;
  annuityCorpus: number;
  monthlyPension: number;
}

export function validateNPSInput(i: NPSInput, lang: "en" | "es" = "en"): string | null {
  if (i.currentAge <= 0 || i.currentAge >= i.retirementAge)
    return lang === "es" ? "La edad actual debe ser menor que la edad de jubilación." : "Current age must be less than retirement age.";
  if (i.retirementAge > 75) return lang === "es" ? "La edad de jubilación no puede exceder 75." : "Retirement age cannot exceed 75.";
  if (i.monthlyContribution <= 0) return lang === "es" ? "Ingresa una aportación mensual válida." : "Enter a valid monthly contribution.";
  if (i.expectedReturn <= 0 || i.expectedReturn > 30) return lang === "es" ? "Ingresa un rendimiento esperado realista." : "Enter a realistic expected return.";
  if (i.annuityPercent < 40 || i.annuityPercent > 100) return lang === "es" ? "La compra de anualidad debe ser de 40% a 100%." : "Annuity purchase must be 40% to 100%.";
  if (i.annuityRate <= 0 || i.annuityRate > 15) return lang === "es" ? "Ingresa una tasa de anualidad realista." : "Enter a realistic annuity rate.";
  return null;
}

export function calculateNPS(i: NPSInput): NPSResult {
  const months = (i.retirementAge - i.currentAge) * 12;
  const r = i.expectedReturn / 100 / 12;

  const maturityCorpus =
    r === 0
      ? i.monthlyContribution * months
      : i.monthlyContribution * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);

  const totalInvested = i.monthlyContribution * months;
  const totalGrowth = maturityCorpus - totalInvested;

  const annuityCorpus = (maturityCorpus * i.annuityPercent) / 100;
  const lumpsumWithdrawal = maturityCorpus - annuityCorpus;
  const monthlyPension = (annuityCorpus * (i.annuityRate / 100)) / 12;

  return {
    totalInvested: Math.round(totalInvested),
    totalGrowth: Math.round(totalGrowth),
    maturityCorpus: Math.round(maturityCorpus),
    lumpsumWithdrawal: Math.round(lumpsumWithdrawal),
    annuityCorpus: Math.round(annuityCorpus),
    monthlyPension: Math.round(monthlyPension),
  };
}

export function copyNPSSummary(i: NPSInput, r: NPSResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Cálculo NPS

Edad Actual: ${i.currentAge}
Edad de Jubilación: ${i.retirementAge}
Aportación Mensual: ₹${i.monthlyContribution}
Rendimiento Esperado: ${i.expectedReturn}%
Compra de Anualidad: ${i.annuityPercent}%
Tasa de Anualidad: ${i.annuityRate}%

Total Invertido: ₹${r.totalInvested}
Crecimiento Total: ₹${r.totalGrowth}
Capital al Vencimiento: ₹${r.maturityCorpus}
Retiro de Suma Global: ₹${r.lumpsumWithdrawal}
Capital de Anualidad: ₹${r.annuityCorpus}
Pensión Mensual: ₹${r.monthlyPension}
`.trim();
  }
  return `
NPS Calculation Summary

Current Age: ${i.currentAge}
Retirement Age: ${i.retirementAge}
Monthly Contribution: ₹${i.monthlyContribution}
Expected Return: ${i.expectedReturn}%
Annuity Purchase: ${i.annuityPercent}%
Annuity Rate: ${i.annuityRate}%

Total Invested: ₹${r.totalInvested}
Total Growth: ₹${r.totalGrowth}
Maturity Corpus: ₹${r.maturityCorpus}
Lumpsum Withdrawal: ₹${r.lumpsumWithdrawal}
Annuity Corpus: ₹${r.annuityCorpus}
Monthly Pension: ₹${r.monthlyPension}
`.trim();
}