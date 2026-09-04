export interface AverageInput {
  numbers: number[];
}

export interface AverageResult {
  average: number;
  sum: number;
  count: number;
  min: number;
  max: number;
}

export function parseNumberList(value: string): number[] {
  return value
    .split(/[,\s]+/)
    .map((v) => v.trim())
    .filter((v) => v !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

export function validateAverageInput(i: AverageInput, lang: "en" | "es" = "en"): string | null {
  if (i.numbers.length === 0) return lang === "es" ? "Ingresa al menos un número válido." : "Enter at least one valid number.";
  return null;
}

export function calculateAverage(i: AverageInput): AverageResult {
  const sum = i.numbers.reduce((acc, n) => acc + n, 0);
  const average = sum / i.numbers.length;

  return {
    average: Math.round(average * 100) / 100,
    sum: Math.round(sum * 100) / 100,
    count: i.numbers.length,
    min: Math.min(...i.numbers),
    max: Math.max(...i.numbers),
  };
}

export function copyAverageSummary(i: AverageInput, r: AverageResult, lang: "en" | "es" = "en"): string {
  if (lang === "es") {
    return `
Resumen del Promedio

Números: ${i.numbers.join(", ")}

Promedio: ${r.average}
Suma: ${r.sum}
Cantidad: ${r.count}
Mínimo: ${r.min}
Máximo: ${r.max}
`.trim();
  }
  return `
Average Summary

Numbers: ${i.numbers.join(", ")}

Average: ${r.average}
Sum: ${r.sum}
Count: ${r.count}
Min: ${r.min}
Max: ${r.max}
`.trim();
}