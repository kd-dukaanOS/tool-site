export interface PregnancyDueDateInput {
  lastPeriodDate: Date;
  cycleLength: number;
}

export interface PregnancyDueDateResult {
  dueDate: Date;
  currentWeek: number;
  currentDay: number;
  trimester: 1 | 2 | 3;
  daysRemaining: number;
}

export function validatePregnancyDueDateInput(i: PregnancyDueDateInput, lang: "en" | "es" = "en"): string | null {
  if (Number.isNaN(i.lastPeriodDate.getTime())) return lang === "es" ? "Por favor selecciona una fecha válida." : "Please select a valid date.";
  if (i.lastPeriodDate > new Date()) return lang === "es" ? "La fecha no puede ser en el futuro." : "Date cannot be in the future.";
  if (i.cycleLength < 20 || i.cycleLength > 45) return lang === "es" ? "Ingresa una duración de ciclo realista (20-45 días)." : "Enter a realistic cycle length (20-45 days).";
  return null;
}

export function calculatePregnancyDueDate(i: PregnancyDueDateInput): PregnancyDueDateResult {
  const cycleAdjustment = i.cycleLength - 28;

  const dueDate = new Date(i.lastPeriodDate);
  dueDate.setDate(dueDate.getDate() + 280 + cycleAdjustment);

  const today = new Date();
  const daysPregnant = Math.floor(
    (today.getTime() - i.lastPeriodDate.getTime()) / (24 * 60 * 60 * 1000)
  );

  const currentWeek = Math.floor(daysPregnant / 7);
  const currentDay = daysPregnant % 7;

  let trimester: 1 | 2 | 3 = 1;
  if (currentWeek >= 27) trimester = 3;
  else if (currentWeek >= 13) trimester = 2;

  const daysRemaining = Math.max(
    0,
    Math.ceil((dueDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000))
  );

  return { dueDate, currentWeek, currentDay, trimester, daysRemaining };
}

export function copyPregnancyDueDateSummary(
  i: PregnancyDueDateInput,
  r: PregnancyDueDateResult,
  lang: "en" | "es" = "en"
): string {
  if (lang === "es") {
    return `
Resumen de Fecha de Parto

Fecha del Último Período: ${i.lastPeriodDate.toLocaleDateString("es-ES")}
Duración del Ciclo: ${i.cycleLength} días

Fecha de Parto Estimada: ${r.dueDate.toLocaleDateString("es-ES")}
Progreso Actual: Semana ${r.currentWeek}, Día ${r.currentDay}
Trimestre: ${r.trimester}
Días Restantes: ${r.daysRemaining}
`.trim();
  }
  return `
Pregnancy Due Date Summary

Last Period Date: ${i.lastPeriodDate.toLocaleDateString("en-US")}
Cycle Length: ${i.cycleLength} days

Estimated Due Date: ${r.dueDate.toLocaleDateString("en-US")}
Current Progress: Week ${r.currentWeek}, Day ${r.currentDay}
Trimester: ${r.trimester}
Days Remaining: ${r.daysRemaining}
`.trim();
}