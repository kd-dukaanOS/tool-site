export interface TimestampResult {
  unixSeconds: number;
  unixMillis: number;
  iso: string;
  utc: string;
  local: string;
  relative: string;
}

export function timestampToDate(unixSeconds: number): Date {
  return new Date(unixSeconds * 1000);
}

export function dateToTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export function getRelativeTime(date: Date, now = new Date()): string {
  const diffMs = date.getTime() - now.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const abs = Math.abs(diffSec);

  const units: [number, string][] = [
    [60, "second"], [60, "minute"], [24, "hour"], [7, "day"], [4.345, "week"], [12, "month"], [Infinity, "year"],
  ];

  let value = abs;
  let unit = "second";

  for (const [amount, name] of units) {
    if (value < amount) { unit = name; break; }
    value = Math.floor(value / amount);
    unit = name;
  }

  const suffix = diffSec >= 0 ? "from now" : "ago";
  return `${value} ${unit}${value !== 1 ? "s" : ""} ${suffix}`;
}

export function buildTimestampResult(date: Date): TimestampResult {
  return {
    unixSeconds: dateToTimestamp(date),
    unixMillis: date.getTime(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
    local: date.toLocaleString(),
    relative: getRelativeTime(date),
  };
}

export function validateTimestampInput(value: string): string | null {
  if (!value.trim()) return "Please enter a timestamp or date.";
  return null;
}

export function parseTimestampInput(value: string): Date | null {
  const trimmed = value.trim();

  if (/^\d{10}$/.test(trimmed)) return new Date(parseInt(trimmed, 10) * 1000);
  if (/^\d{13}$/.test(trimmed)) return new Date(parseInt(trimmed, 10));

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function copyTimestampSummary(input: string, r: TimestampResult): string {
  return `Timestamp Conversion

Input: ${input}

Unix (seconds): ${r.unixSeconds}
Unix (millis): ${r.unixMillis}
ISO 8601: ${r.iso}
UTC: ${r.utc}
Local: ${r.local}
Relative: ${r.relative}`.trim();
}