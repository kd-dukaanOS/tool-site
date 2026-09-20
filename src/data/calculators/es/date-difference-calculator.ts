// src/data/calculators/es/date-difference-calculator.ts
// NOTE: real slug is "date-difference-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const dateDifferenceCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Diferencia entre Fechas 2026",
    metaDescription: "Calcula cuántos días, meses y años hay entre dos fechas. Gratis, instantánea y sin registro.",
    canonicalSlug: "/es/date-time/date-difference-calculator",
    ogTitle: "Calculadora de Diferencia entre Fechas",
    ogDescription: "Descubre cuántos días, semanas, meses y años hay entre dos fechas.",
    twitterTitle: "Calculadora de Días entre Fechas",
    twitterDescription: "Calcula la diferencia exacta entre dos fechas al instante.",
  },
  hero: {
    text: "La Calculadora de Diferencia entre Fechas te muestra exactamente cuántos años, meses, días, y el total de días y semanas que hay entre dos fechas cualquiera.",
  },
  about: {
    text: `Calcular la diferencia entre dos fechas es útil para planear eventos, medir plazos legales o laborales, o simplemente saber cuánto tiempo ha pasado (o falta) para una fecha importante.

Esta calculadora toma una fecha de inicio y una fecha de fin, y calcula la diferencia exacta en años, meses y días, además del total de días y semanas transcurridos entre ambas.

Limitaciones: el cálculo usa el calendario gregoriano estándar y no considera zonas horarias; si necesitas contar días hábiles (excluyendo fines de semana), esta calculadora no hace esa distinción automáticamente.`,
  },
  formula: {
    formula: "Diferencia = Fecha de Fin − Fecha de Inicio",
    variables: [
      { symbol: "Total de Días", meaning: "Número total de días calendario entre las dos fechas" },
      { symbol: "Total de Semanas", meaning: "Total de días dividido entre 7" },
    ],
    explanation: "Se resta la fecha de inicio de la fecha de fin para obtener el número exacto de años, meses y días completos, además del total acumulado en días y semanas.",
    interpretation: "Por ejemplo, entre el 1 de enero de 2024 y el 15 de marzo de 2025 hay 1 año, 2 meses y 14 días, o 439 días en total.",
  },
  steps: [
    "Selecciona la fecha de inicio.",
    "Selecciona la fecha de fin.",
    "Haz clic en Calcular.",
    "Revisa el resultado en años, meses, días, y el total de días y semanas.",
  ],
  examples: [
    { inputs: "Inicio: 01/01/2024, Fin: 15/03/2025", result: "1 año, 2 meses, 14 días (439 días totales)", explanation: "Diferencia entre dos fechas separadas por más de un año." },
    { inputs: "Inicio: 10/06/2025, Fin: 10/06/2025", result: "0 días", explanation: "Cuando ambas fechas coinciden, la diferencia es cero." },
    { inputs: "Inicio: 20/12/2025, Fin: 05/01/2026", result: "16 días", explanation: "Diferencia entre dos fechas que cruzan el fin de año." },
  ],
  practicalUses: [
    "Calcular la edad exacta en años, meses y días",
    "Medir cuántos días faltan para una boda, viaje o evento importante",
    "Calcular la duración de un contrato, préstamo o proyecto laboral",
    "Determinar plazos legales o administrativos entre dos fechas",
    "Calcular cuántas semanas de embarazo han transcurrido entre dos fechas",
  ],
  expertTips: [
    "Para calcular tu edad exacta, usa tu fecha de nacimiento como fecha de inicio y la fecha actual como fecha de fin.",
    "Si necesitas contar solo días hábiles (sin fines de semana), resta aproximadamente 2 días por cada semana completa del resultado total.",
    "Ten en cuenta los años bisiestos: pueden agregar un día adicional a cálculos que abarcan febrero.",
    "Para plazos legales que cuentan 'días naturales' vs 'días hábiles', verifica cuál aplica en tu caso antes de usar el total de días de esta calculadora.",
  ],
  commonMistakes: [
    { mistake: "Confundir días naturales con días hábiles", fix: "Esta calculadora cuenta todos los días del calendario; si necesitas días hábiles, resta los fines de semana manualmente." },
    { mistake: "Invertir la fecha de inicio y la fecha de fin", fix: "Verifica que la fecha de inicio sea siempre anterior a la fecha de fin para evitar resultados negativos." },
    { mistake: "Olvidar los años bisiestos en cálculos largos", fix: "La calculadora ya considera automáticamente los años bisiestos en el conteo total de días." },
    { mistake: "No verificar el formato de fecha (día/mes vs mes/día)", fix: "Usa siempre el selector de calendario en lugar de escribir la fecha manualmente para evitar errores de formato." },
  ],
  faq: [
    { q: "¿Cómo calcular cuántos días hay entre dos fechas?", a: "Resta la fecha de inicio a la fecha de fin; esta calculadora lo hace automáticamente y muestra el resultado en años, meses, días y total de días." },
    { q: "¿Cuántos días faltan para una fecha específica?", a: "Ingresa la fecha de hoy como inicio y la fecha objetivo como fin; el resultado mostrará los días restantes." },
    { q: "¿Cómo saber mi edad exacta en años, meses y días?", a: "Usa tu fecha de nacimiento como fecha de inicio y la fecha actual como fecha de fin para obtener tu edad exacta." },
    { q: "¿Esta calculadora cuenta días hábiles o días naturales?", a: "Cuenta días naturales (todos los días del calendario); no excluye automáticamente sábados y domingos." },
    { q: "¿Cómo calcular cuántas semanas hay entre dos fechas?", a: "El resultado incluye el total de semanas, calculado dividiendo el total de días entre 7." },
    { q: "¿Los años bisiestos afectan el cálculo?", a: "Sí, y la calculadora los tiene en cuenta automáticamente al contar el total de días entre las fechas." },
    { q: "¿Puedo calcular la diferencia entre una fecha pasada y una futura?", a: "Sí, siempre que la fecha de inicio sea anterior a la fecha de fin; de lo contrario el resultado se marcará como negativo." },
    { q: "¿Cómo calcular cuántos meses de embarazo llevo entre dos fechas?", a: "Ingresa la fecha de la última menstruación como inicio y la fecha actual como fin para ver semanas y meses transcurridos." },
  ],
  relatedCalculators: ["Calculadora de Edad", "Calculadora de Cuenta Regresiva", "Calculadora de Duración de Tiempo", "Calculadora de Zona Horaria"],
  youMayLike: pickYouMayLike("date-difference-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Diferencia entre Fechas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};
