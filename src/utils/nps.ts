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

export function validateNPSInput(i: NPSInput): string | null {
  if (i.currentAge <= 0 || i.currentAge >= i.retirementAge)
    return "Current age must be less than retirement age.";
  if (i.retirementAge > 75) return "Retirement age cannot exceed 75.";
  if (i.monthlyContribution <= 0) return "Enter a valid monthly contribution.";
  if (i.expectedReturn <= 0 || i.expectedReturn > 30) return "Enter a realistic expected return.";
  if (i.annuityPercent < 40 || i.annuityPercent > 100) return "Annuity purchase must be 40% to 100%.";
  if (i.annuityRate <= 0 || i.annuityRate > 15) return "Enter a realistic annuity rate.";
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

export function copyNPSSummary(i: NPSInput, r: NPSResult): string {
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