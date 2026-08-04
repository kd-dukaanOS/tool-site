export interface TimezoneInput {
  dateTime: string; // "YYYY-MM-DDTHH:MM"
  fromTimezone: string; // IANA e.g. "Asia/Kolkata"
  toTimezone: string;
}

export interface TimezoneResult {
  convertedDateTime: string;
  convertedFormatted: string;
  hourDifference: number;
}

export function validateTimezoneInput(i: TimezoneInput): string | null {
  if (!i.dateTime) return "Please select a date and time.";
  if (!i.fromTimezone) return "Please select a source timezone.";
  if (!i.toTimezone) return "Please select a target timezone.";
  return null;
}

function getOffsetMinutes(date: Date, timeZone: string): number {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = dtf.formatToParts(date).reduce((acc, p) => {
    acc[p.type] = p.value;
    return acc;
  }, {} as Record<string, string>);

  const asUTC = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second)
  );

  return (asUTC - date.getTime()) / 60000;
}

export function calculateTimezoneConversion(i: TimezoneInput): TimezoneResult {
  const localDate = new Date(i.dateTime);

  const fromOffset = getOffsetMinutes(localDate, i.fromTimezone);
  const utcDate = new Date(localDate.getTime() - fromOffset * 60000);

  const toOffset = getOffsetMinutes(utcDate, i.toTimezone);
  const convertedDate = new Date(utcDate.getTime() + toOffset * 60000);

  const convertedFormatted = new Intl.DateTimeFormat("en-US", {
    timeZone: i.toTimezone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(utcDate);

  return {
    convertedDateTime: convertedDate.toISOString(),
    convertedFormatted,
    hourDifference: Math.round(((toOffset - fromOffset) / 60) * 100) / 100,
  };
}

export function copyTimezoneSummary(i: TimezoneInput, r: TimezoneResult): string {
  return `
Time Zone Conversion Summary

From: ${i.fromTimezone}
To: ${i.toTimezone}

Original: ${i.dateTime}
Converted: ${r.convertedFormatted}
Difference: ${r.hourDifference >= 0 ? "+" : ""}${r.hourDifference} hours
`.trim();
}