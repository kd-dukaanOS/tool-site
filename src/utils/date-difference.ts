import { calculateExactAge, type ExactAge } from "./age";

export interface DateDifferenceInput {
  startDate: Date;
  endDate: Date;
}

export interface DateDifferenceResult {
  diff: ExactAge;
  isNegative: boolean;
}

export function validateDateDifferenceInput(i: DateDifferenceInput, lang: "en" | "es" = "en"): string | null {
  if (lang === "es") {
    if (Number.isNaN(i.startDate.getTime())) return "Por favor selecciona una fecha de inicio válida.";
    if (Number.isNaN(i.endDate.getTime())) return "Por favor selecciona una fecha de fin válida.";
    return null;
  }
  if (Number.isNaN(i.startDate.getTime())) return "Please select a valid start date.";
  if (Number.isNaN(i.endDate.getTime())) return "Please select a valid end date.";
  return null;
}

export function calculateDateDifference(i: DateDifferenceInput): DateDifferenceResult {
  const isNegative = i.endDate < i.startDate;
  const [from, to] = isNegative ? [i.endDate, i.startDate] : [i.startDate, i.endDate];

  return {
    diff: calculateExactAge(from, to),
    isNegative,
  };
}

export function copyDateDifferenceSummary(i: DateDifferenceInput, r: DateDifferenceResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Diferencia de Fechas

Fecha de Inicio: ${i.startDate.toLocaleDateString("es-ES")}
Fecha de Fin: ${i.endDate.toLocaleDateString("es-ES")}

Diferencia: ${r.diff.years} años, ${r.diff.months} meses, ${r.diff.days} días
Días Totales: ${r.diff.totalDays}
Semanas Totales: ${r.diff.totalWeeks}
`.trim();
  }
  return `
Date Difference Summary

Start Date: ${i.startDate.toLocaleDateString("en-US")}
End Date: ${i.endDate.toLocaleDateString("en-US")}

Difference: ${r.diff.years} years, ${r.diff.months} months, ${r.diff.days} days
Total Days: ${r.diff.totalDays}
Total Weeks: ${r.diff.totalWeeks}
`.trim();
}