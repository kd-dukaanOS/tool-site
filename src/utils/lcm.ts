export interface LCMInput {
  numbers: number[];
}

export interface LCMResult {
  lcm: number;
  steps: string[];
}

export function parseNumberList(value: string): number[] {
  return value
    .split(/[,\s]+/)
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n) && Number.isInteger(n));
}

export function validateLCMInput(i: LCMInput): string | null {
  if (i.numbers.length < 2) return "Enter at least two whole numbers.";
  if (i.numbers.some((n) => n <= 0)) return "Enter only positive whole numbers.";
  return null;
}

function gcdTwo(a: number, b: number): number {
  return b === 0 ? a : gcdTwo(b, a % b);
}

function lcmTwo(a: number, b: number): number {
  return (a * b) / gcdTwo(a, b);
}

export function calculateLCM(i: LCMInput): LCMResult {
  const lcm = i.numbers.reduce((acc, n) => lcmTwo(acc, n));

  return {
    lcm,
    steps: i.numbers.map((n) => `${n}`),
  };
}

export function copyLCMSummary(i: LCMInput, r: LCMResult): string {
  return `
LCM Summary

Numbers: ${i.numbers.join(", ")}

LCM: ${r.lcm}
`.trim();
}