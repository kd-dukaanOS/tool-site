export interface MMMInput {
  numbers: number[];
}

export interface MMMResult {
  mean: number;
  median: number;
  mode: number[];
  range: number;
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

export function validateMMMInput(i: MMMInput): string | null {
  if (i.numbers.length === 0) return "Enter at least one valid number.";
  return null;
}

export function calculateMeanMedianMode(i: MMMInput): MMMResult {
  const nums = [...i.numbers].sort((a, b) => a - b);
  const count = nums.length;

  const mean = nums.reduce((a, b) => a + b, 0) / count;

  const mid = Math.floor(count / 2);
  const median = count % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];

  const freq = new Map<number, number>();
  nums.forEach((n) => freq.set(n, (freq.get(n) ?? 0) + 1));
  const maxFreq = Math.max(...freq.values());
  const mode =
    maxFreq === 1 ? [] : [...freq.entries()].filter(([, f]) => f === maxFreq).map(([n]) => n);

  const range = nums[count - 1] - nums[0];

  return {
    mean: Math.round(mean * 100) / 100,
    median: Math.round(median * 100) / 100,
    mode,
    range: Math.round(range * 100) / 100,
    count,
  };
}

export function copyMMMSummary(i: MMMInput, r: MMMResult): string {
  return `
Mean, Median, Mode Summary

Numbers: ${i.numbers.join(", ")}

Mean: ${r.mean}
Median: ${r.median}
Mode: ${r.mode.length ? r.mode.join(", ") : "No mode"}
Range: ${r.range}
Count: ${r.count}
`.trim();
}