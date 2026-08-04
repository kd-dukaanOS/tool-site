export interface GCDInput {
  numbers: number[];
}

export interface GCDResult {
  gcd: number;
}

export function parseNumberList(value: string): number[] {
  return value
    .split(/[,\s]+/)
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n) && Number.isInteger(n));
}

export function validateGCDInput(i: GCDInput): string | null {
  if (i.numbers.length < 2) return "Enter at least two whole numbers.";
  if (i.numbers.some((n) => n <= 0)) return "Enter only positive whole numbers.";
  return null;
}

function gcdTwo(a: number, b: number): number {
  return b === 0 ? a : gcdTwo(b, a % b);
}

export function calculateGCD(i: GCDInput): GCDResult {
  const gcd = i.numbers.reduce((acc, n) => gcdTwo(acc, n));
  return { gcd };
}

export function copyGCDSummary(i: GCDInput, r: GCDResult): string {
  return `
GCD Summary

Numbers: ${i.numbers.join(", ")}

GCD: ${r.gcd}
`.trim();
}