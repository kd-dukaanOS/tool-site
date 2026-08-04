export interface RatioInput {
  valueA: number;
  valueB: number;
}

export interface RatioResult {
  simplifiedA: number;
  simplifiedB: number;
  decimalRatio: number;
  percentageA: number;
  percentageB: number;
}

export function validateRatioInput(i: RatioInput): string | null {
  if (i.valueA <= 0) return "Enter a valid first value.";
  if (i.valueB <= 0) return "Enter a valid second value.";
  return null;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function calculateRatio(i: RatioInput): RatioResult {
  const divisor = gcd(Math.round(i.valueA), Math.round(i.valueB));

  const simplifiedA = i.valueA / divisor;
  const simplifiedB = i.valueB / divisor;

  const decimalRatio = i.valueA / i.valueB;

  const total = i.valueA + i.valueB;
  const percentageA = (i.valueA / total) * 100;
  const percentageB = (i.valueB / total) * 100;

  return {
    simplifiedA: Math.round(simplifiedA * 100) / 100,
    simplifiedB: Math.round(simplifiedB * 100) / 100,
    decimalRatio: Math.round(decimalRatio * 1000) / 1000,
    percentageA: Math.round(percentageA * 100) / 100,
    percentageB: Math.round(percentageB * 100) / 100,
  };
}

export function copyRatioSummary(i: RatioInput, r: RatioResult): string {
  return `
Ratio Summary

Values: ${i.valueA} : ${i.valueB}

Simplified Ratio: ${r.simplifiedA} : ${r.simplifiedB}
Decimal Ratio: ${r.decimalRatio}
Percentage Split: ${r.percentageA}% : ${r.percentageB}%
`.trim();
}