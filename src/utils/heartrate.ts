import { round } from "./calculator";

export interface HeartRateInput {
  age: number;
}

export interface HeartRateZone {
  label: string;
  low: number;
  high: number;
}

export interface HeartRateResult {
  maxHr: number;
  zones: HeartRateZone[];
}

const ZONES: { label: string; low: number; high: number }[] = [
  { label: "Warm Up", low: 0.5, high: 0.6 },
  { label: "Fat Burn", low: 0.6, high: 0.7 },
  { label: "Cardio", low: 0.7, high: 0.8 },
  { label: "Hardcore", low: 0.8, high: 0.9 },
  { label: "Peak", low: 0.9, high: 1.0 },
];

export function validateHeartRateInput(i: HeartRateInput): string | null {
  if (!i.age || i.age <= 0 || i.age > 120) return "Enter a valid age.";
  return null;
}

export function calculateHeartRate(i: HeartRateInput): HeartRateResult {
  const maxHr = 220 - i.age;
  const zones = ZONES.map((z) => ({
    label: z.label,
    low: round(maxHr * z.low, 0),
    high: round(maxHr * z.high, 0),
  }));
  return { maxHr: round(maxHr, 0), zones };
}

export function copyHeartRateSummary(_i: HeartRateInput, r: HeartRateResult): string {
  const zoneLines = r.zones.map((z) => `${z.label}: ${z.low}-${z.high} bpm`).join("\n");
  return `
Heart Rate Zone Calculator

Max Heart Rate: ${r.maxHr} bpm

${zoneLines}
`.trim();
}

