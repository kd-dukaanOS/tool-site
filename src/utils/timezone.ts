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

export function validateTimezoneInput(i: TimezoneInput, lang: "en" | "es" = "en"): string | null {
  const msg = lang === "es" ? {
    dateTime: "Selecciona una fecha y hora.",
    from: "Selecciona una zona horaria de origen.",
    to: "Selecciona una zona horaria de destino.",
  } : {
    dateTime: "Please select a date and time.",
    from: "Please select a source timezone.",
    to: "Please select a target timezone.",
  };
  if (!i.dateTime) return msg.dateTime;
  if (!i.fromTimezone) return msg.from;
  if (!i.toTimezone) return msg.to;
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

export function copyTimezoneSummary(i: TimezoneInput, r: TimezoneResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Conversión de Zona Horaria

De: ${i.fromTimezone}
A: ${i.toTimezone}

Original: ${i.dateTime}
Convertido: ${r.convertedFormatted}
Diferencia: ${r.hourDifference >= 0 ? "+" : ""}${r.hourDifference} horas
`.trim();
  }
  return `
Time Zone Conversion Summary

From: ${i.fromTimezone}
To: ${i.toTimezone}

Original: ${i.dateTime}
Converted: ${r.convertedFormatted}
Difference: ${r.hourDifference >= 0 ? "+" : ""}${r.hourDifference} hours
`.trim();
}