export interface InvestmentReturnResult {
  totalContributed: number;
  totalGain: number;
  totalReturnPercent: number;
  annualizedReturnPercent: number;
}

function futureValue(r: number, principal: number, annualContribution: number, years: number): number {
  if (Math.abs(r) < 1e-9) return principal + annualContribution * years;
  const growth = Math.pow(1 + r, years);
  return principal * growth + annualContribution * ((growth - 1) / r);
}

function solveAnnualizedReturn(
  principal: number,
  annualContribution: number,
  years: number,
  targetValue: number
): number {
  let lo = -0.99;
  let hi = 10;
  for (let i = 0; i < 100; i++) {
    const mid = (lo + hi) / 2;
    const fv = futureValue(mid, principal, annualContribution, years);
    if (fv < targetValue) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function calculateInvestmentReturn(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  endingValue: number
): InvestmentReturnResult {
  const annualContribution = monthlyContribution * 12;
  const totalContributed = initialInvestment + annualContribution * years;
  const totalGain = endingValue - totalContributed;
  const totalReturnPercent = totalContributed > 0 ? (totalGain / totalContributed) * 100 : 0;

  const annualizedReturn = solveAnnualizedReturn(initialInvestment, annualContribution, years, endingValue);
  const annualizedReturnPercent = annualizedReturn * 100;

  return {
    totalContributed,
    totalGain,
    totalReturnPercent,
    annualizedReturnPercent,
  };
}

export function validateInvestmentReturnInputs(
  initialInvestment: number,
  years: number,
  endingValue: number
): string | null {
  if (initialInvestment < 0) return "Initial investment cannot be negative.";
  if (years <= 0) return "Number of years must be greater than zero.";
  if (endingValue <= 0) return "Ending value must be greater than zero.";
  return null;
}