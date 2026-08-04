export interface StdDevInput {
  numbers: number[];
  isSample: boolean;
}

export interface StdDevResult {
  mean: number;
  variance: number;
  standardDeviation: number;
  count: number;
}

export function parseNumberList(value: string): number[] {
  return value
    .split(/[,\s]+/)
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

export function validateStdDevInput(i: StdDevInput): string | null {
  if (i.numbers.length === 0) return "Enter at least one number.";
  if (i.isSample && i.numbers.length < 2) return "Sample deviation needs at least 2 numbers.";
  return null;
}

export function calculateStandardDeviation(i: StdDevInput): StdDevResult {
  const count = i.numbers.length;
  const mean = i.numbers.reduce((a, b) => a + b, 0) / count;

  const squaredDiffs = i.numbers.map((n) => Math.pow(n - mean, 2));
  const divisor = i.isSample ? count - 1 : count;
  const variance = squaredDiffs.reduce((a, b) => a + b, 0) / divisor;
  const standardDeviation = Math.sqrt(variance);

  return {
    mean: Math.round(mean * 100) / 100,
    variance: Math.round(variance * 100) / 100,
    standardDeviation: Math.round(standardDeviation * 100) / 100,
    count,
  };
}

export function copyStdDevSummary(i: StdDevInput, r: StdDevResult): string {
  return `
Standard Deviation Summary

Numbers: ${i.numbers.join(", ")}
Type: ${i.isSample ? "Sample" : "Population"}

Mean: ${r.mean}
Variance: ${r.variance}
Standard Deviation: ${r.standardDeviation}
Count: ${r.count}
`.trim();
}