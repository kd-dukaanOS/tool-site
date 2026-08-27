export interface RetirementIncomeResult {
  annualWithdrawal: number;
  totalAnnualIncome: number;
  monthlyIncome: number;
  rmdAge: number;
  depletionYear: number | null;
  endingBalance: number;
}

export function getRmdAge(birthYear: number): number {
  if (birthYear <= 1950) return 72;
  if (birthYear <= 1959) return 73;
  return 75;
}

export function calculateRetirementIncome(
  currentSavings: number,
  withdrawalRate: number,
  annualSocialSecurity: number,
  annualPension: number,
  otherAnnualIncome: number,
  expectedAnnualReturn: number,
  inflationRate: number,
  retirementYears: number,
  birthYear: number
): RetirementIncomeResult {
  const annualWithdrawal = currentSavings * (withdrawalRate / 100);
  const totalAnnualIncome = annualWithdrawal + annualSocialSecurity + annualPension + otherAnnualIncome;
  const monthlyIncome = totalAnnualIncome / 12;
  const rmdAge = getRmdAge(birthYear);

  let balance = currentSavings;
  let withdrawal = annualWithdrawal;
  let depletionYear: number | null = null;

  for (let year = 1; year <= retirementYears; year++) {
    balance = balance * (1 + expectedAnnualReturn / 100) - withdrawal;
    withdrawal *= 1 + inflationRate / 100;
    if (balance <= 0 && depletionYear === null) {
      depletionYear = year;
      balance = 0;
      break;
    }
  }

  return {
    annualWithdrawal,
    totalAnnualIncome,
    monthlyIncome,
    rmdAge,
    depletionYear,
    endingBalance: Math.max(balance, 0),
  };
}

export function validateRetirementIncomeInputs(currentSavings: number, withdrawalRate: number, retirementYears: number): string | null {
  if (currentSavings <= 0) return "Current savings must be greater than zero.";
  if (withdrawalRate <= 0 || withdrawalRate > 20) return "Withdrawal rate must be between 0 and 20%.";
  if (retirementYears <= 0) return "Retirement horizon must be greater than zero.";
  return null;
}