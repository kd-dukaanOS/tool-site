export interface OvulationInput {
  lastPeriodDate: Date;
  cycleLength: number;
}

export interface OvulationResult {
  ovulationDate: Date;
  fertileWindowStart: Date;
  fertileWindowEnd: Date;
  nextPeriodDate: Date;
}

export function validateOvulationInput(i: OvulationInput, lang: "en" | "es" = "en"): string | null {
  if (Number.isNaN(i.lastPeriodDate.getTime())) return lang === "es" ? "Por favor selecciona una fecha válida." : "Please select a valid date.";
  if (i.lastPeriodDate > new Date()) return lang === "es" ? "La fecha no puede ser en el futuro." : "Date cannot be in the future.";
  if (i.cycleLength < 20 || i.cycleLength > 45) return lang === "es" ? "Ingresa una duración de ciclo realista (20-45 días)." : "Enter a realistic cycle length (20-45 days).";
  return null;
}

export function calculateOvulation(i: OvulationInput): OvulationResult {
  const ovulationDate = new Date(i.lastPeriodDate);
  ovulationDate.setDate(ovulationDate.getDate() + i.cycleLength - 14);

  const fertileWindowStart = new Date(ovulationDate);
  fertileWindowStart.setDate(fertileWindowStart.getDate() - 5);

  const fertileWindowEnd = new Date(ovulationDate);
  fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 1);

  const nextPeriodDate = new Date(i.lastPeriodDate);
  nextPeriodDate.setDate(nextPeriodDate.getDate() + i.cycleLength);

  return { ovulationDate, fertileWindowStart, fertileWindowEnd, nextPeriodDate };
}

export function copyOvulationSummary(i: OvulationInput, r: OvulationResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen de Ovulación

Fecha del Último Período: ${i.lastPeriodDate.toLocaleDateString("es-ES")}
Duración del Ciclo: ${i.cycleLength} días

Fecha Estimada de Ovulación: ${r.ovulationDate.toLocaleDateString("es-ES")}
Ventana Fértil: ${r.fertileWindowStart.toLocaleDateString("es-ES")} - ${r.fertileWindowEnd.toLocaleDateString("es-ES")}
Próximo Período (Estimado): ${r.nextPeriodDate.toLocaleDateString("es-ES")}
`.trim();
  }
  return `
Ovulation Summary

Last Period Date: ${i.lastPeriodDate.toLocaleDateString("en-US")}
Cycle Length: ${i.cycleLength} days

Estimated Ovulation Date: ${r.ovulationDate.toLocaleDateString("en-US")}
Fertile Window: ${r.fertileWindowStart.toLocaleDateString("en-US")} - ${r.fertileWindowEnd.toLocaleDateString("en-US")}
Next Period (Estimated): ${r.nextPeriodDate.toLocaleDateString("en-US")}
`.trim();
}