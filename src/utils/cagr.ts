export interface CAGRInput {
  initialValue: number;
  finalValue: number;
  years: number;
}

export interface CAGRResult {
  cagr: number;
  absoluteReturn: number;
  totalGrowth: number;
  wealthMultiple: number;
}

export function validateCAGRInput(i: CAGRInput): string | null {
  if (i.initialValue <= 0) return "Enter a valid initial investment.";
  if (i.finalValue <= 0) return "Enter a valid final value.";
  if (i.years <= 0) return "Enter a valid time period.";
  return null;
}

export function calculateCAGR(i: CAGRInput): CAGRResult {
  const cagr =
    (Math.pow(i.finalValue / i.initialValue, 1 / i.years) - 1) * 100;

  const totalGrowth = i.finalValue - i.initialValue;
  const absoluteReturn = (totalGrowth / i.initialValue) * 100;
  const wealthMultiple = i.finalValue / i.initialValue;

  return {
    cagr: Math.round(cagr * 100) / 100,
    absoluteReturn: Math.round(absoluteReturn * 100) / 100,
    totalGrowth: Math.round(totalGrowth),
    wealthMultiple: Math.round(wealthMultiple * 100) / 100,
  };
}

export function copyCAGRSummary(i: CAGRInput, r: CAGRResult): string {
  return `
CAGR Calculation Summary

Initial Value: ₹${i.initialValue}
Final Value: ₹${i.finalValue}
Time Period: ${i.years} years

CAGR: ${r.cagr}%
Absolute Return: ${r.absoluteReturn}%
Total Growth: ₹${r.totalGrowth}
Wealth Multiple: ${r.wealthMultiple}x
`.trim();
}