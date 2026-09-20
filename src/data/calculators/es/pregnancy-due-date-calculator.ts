// src/data/calculators/es/pregnancy-due-date-calculator.ts
// NOTE: category assumed "health" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const pregnancyDueDateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Fecha de Parto (Semanas de Embarazo) 2026",
    metaDescription: "Calcula tu fecha probable de parto y semana de embarazo actual según tu último período. Gratis.",
    canonicalSlug: "/es/health/pregnancy-due-date-calculator",
    ogTitle: "Calculadora de Fecha de Parto",
    ogDescription: "Descubre tu fecha probable de parto y semana de embarazo actual.",
    twitterTitle: "Calculadora de Fecha Probable de Parto",
    twitterDescription: "Calcula tu fecha de parto y semanas de embarazo al instante.",
  },
  hero: {
    text: "La Calculadora de Fecha de Parto estima tu fecha probable de parto, tu semana actual de embarazo, el trimestre en que te encuentras y los días restantes, a partir del primer día de tu último período.",
  },
  about: {
    text: `La fecha probable de parto (FPP) se estima tradicionalmente usando la regla de Naegele, que suma 280 días (40 semanas) al primer día del último período menstrual, ajustando según la duración promedio de tu ciclo.

Esta calculadora recibe la fecha del primer día de tu último período y la duración promedio de tu ciclo menstrual, y calcula tu fecha probable de parto, tu progreso actual en semanas y días, el trimestre correspondiente y los días restantes hasta la fecha estimada.

Limitaciones: esta es una estimación basada en promedios estadísticos; solo alrededor del 5% de los bebés nacen exactamente en la fecha calculada, y tu médico puede ajustar la fecha con base en un ultrasonido u otros factores clínicos.`,
  },
  formula: {
    formula: "Fecha de Parto = Último Período + 280 días (ajustado por duración del ciclo)",
    variables: [
      { symbol: "Duración del Ciclo", meaning: "Número de días entre el inicio de un período y el inicio del siguiente (promedio 28 días)" },
      { symbol: "Trimestre", meaning: "El embarazo se divide en tres trimestres: 1º (semanas 1-13), 2º (semanas 14-27), 3º (semanas 28-40)" },
    ],
    explanation: "Se suman 280 días (40 semanas) al primer día del último período menstrual; si tu ciclo es más largo o corto que el promedio de 28 días, se ajusta la fecha proporcionalmente para reflejar una ovulación más tardía o temprana.",
    interpretation: "Por ejemplo, si tu último período comenzó el 1 de enero y tu ciclo es de 28 días, tu fecha probable de parto sería aproximadamente el 8 de octubre del mismo año.",
  },
  steps: [
    "Selecciona el primer día de tu último período menstrual.",
    "Ingresa la duración promedio de tu ciclo (generalmente 28 días).",
    "Haz clic en Calcular.",
    "Revisa tu fecha probable de parto, semana actual, trimestre y días restantes.",
  ],
  examples: [
    { inputs: "Último Período: 1 de enero, Ciclo: 28 días", result: "Fecha de parto estimada: 8 de octubre", explanation: "Un cálculo estándar con la duración de ciclo promedio de 28 días." },
    { inputs: "Último Período: 15 de marzo, Ciclo: 32 días", result: "Fecha de parto ajustada por ciclo más largo", explanation: "Un ciclo más largo desplaza la fecha estimada de ovulación y, por lo tanto, la fecha de parto." },
    { inputs: "Último Período: hace 20 semanas, Ciclo: 28 días", result: "Progreso: Semana 20, Segundo Trimestre", explanation: "El cálculo muestra en qué semana y trimestre te encuentras actualmente según la fecha ingresada." },
  ],
  practicalUses: [
    "Estimar tu fecha probable de parto al inicio del embarazo",
    "Saber en qué semana y trimestre de embarazo te encuentras actualmente",
    "Planear citas médicas y exámenes prenatales según tu progreso estimado",
    "Compartir con familiares una fecha aproximada de nacimiento del bebé",
    "Prepararte con tiempo para la llegada del bebé según los días restantes",
  ],
  expertTips: [
    "Solo alrededor del 5% de los bebés nacen exactamente en la fecha calculada; la mayoría nace dentro de una ventana de dos semanas antes o después.",
    "Un ultrasonido temprano (primer trimestre) generalmente ofrece una estimación más precisa de la fecha de parto que el cálculo basado solo en el último período.",
    "Si tus ciclos menstruales son irregulares, la fecha calculada por esta herramienta puede ser menos precisa; consulta con tu médico para un ajuste más exacto.",
    "El embarazo se considera a término entre las semanas 39 y 40; nacimientos entre las semanas 37 y 42 generalmente se consideran dentro del rango normal.",
  ],
  commonMistakes: [
    { mistake: "Asumir que la fecha calculada es exacta y no aproximada", fix: "Trata la fecha como una estimación; consulta con tu médico y considera ajustes basados en ultrasonido si están disponibles." },
    { mistake: "No ajustar el cálculo si tu ciclo menstrual no es de 28 días", fix: "Ingresa la duración real de tu ciclo promedio para obtener una estimación más precisa de tu fecha de parto." },
    { mistake: "Confundir la fecha del último período con la fecha de concepción", fix: "El cálculo se basa en el primer día del último período, no en la fecha estimada de concepción, que suele ocurrir unas dos semanas después." },
    { mistake: "Preocuparse si el parto no ocurre exactamente en la fecha calculada", fix: "Es normal y común que el parto ocurra dentro de una ventana de varias semanas antes o después de la fecha estimada." },
  ],
  faq: [
    { q: "¿Cómo se calcula la fecha probable de parto?", a: "Se suman 280 días (40 semanas) al primer día del último período menstrual, ajustando según la duración promedio de tu ciclo menstrual." },
    { q: "¿Qué tan precisa es la fecha de parto calculada con el último período?", a: "Es una estimación basada en promedios; solo alrededor del 5% de los bebés nacen exactamente en esa fecha, aunque la mayoría nace dentro de una ventana de dos semanas." },
    { q: "¿Cómo afecta la duración de mi ciclo menstrual a la fecha de parto?", a: "Un ciclo más largo o más corto que el promedio de 28 días desplaza la fecha estimada de ovulación, y por lo tanto ajusta la fecha probable de parto." },
    { q: "¿Cuántas semanas dura un embarazo completo?", a: "Un embarazo completo dura aproximadamente 40 semanas (280 días) contadas desde el primer día del último período menstrual." },
    { q: "¿Cuáles son los trimestres del embarazo y sus semanas?", a: "El primer trimestre abarca las semanas 1-13, el segundo las semanas 14-27, y el tercer trimestre las semanas 28-40." },
    { q: "¿La fecha de parto calculada aquí es igual a la que me da mi médico?", a: "Puede ser similar, pero tu médico puede ajustar la fecha basándose en un ultrasonido temprano, que suele ser más preciso que el cálculo basado solo en el último período." },
    { q: "¿Qué pasa si mis ciclos menstruales son irregulares?", a: "Si tus ciclos son irregulares, esta estimación puede ser menos precisa; consulta con tu médico, quien puede usar un ultrasonido para calcular una fecha más exacta." },
    { q: "¿Cuándo se considera que un bebé nace 'a término'?", a: "Se considera que un embarazo llega a término entre las semanas 39 y 40; nacimientos entre las semanas 37 y 42 generalmente se consideran dentro del rango normal." },
    { q: "¿Cuál es la diferencia entre la fecha de la última menstruación y la fecha de concepción?", a: "La fecha de la última menstruación es el punto de referencia usado para el cálculo, mientras que la concepción real ocurre generalmente unas dos semanas después, durante la ovulación." },
    { q: "¿Puedo calcular en qué semana de embarazo estoy actualmente?", a: "Sí, esta calculadora muestra tu semana y día actual de embarazo basándose en la fecha de tu último período y la fecha de hoy." },
    { q: "¿Qué es la regla de Naegele para calcular la fecha de parto?", a: "Es el método tradicional que suma 280 días (40 semanas) al primer día del último período menstrual para estimar la fecha probable de parto." },
    { q: "¿Cómo afecta un embarazo de gemelos a la fecha de parto estimada?", a: "Los embarazos múltiples (gemelos o más) tienden a terminar antes de la semana 40; esta calculadora está diseñada para embarazos únicos y puede no aplicar de la misma forma." },
    { q: "¿Debo preocuparme si mi bebé no nace en la fecha calculada?", a: "No, es completamente normal; la mayoría de los nacimientos ocurren dentro de una ventana de varias semanas antes o después de la fecha probable calculada." },
    { q: "¿Qué información necesito para usar esta calculadora?", a: "Solo necesitas el primer día de tu último período menstrual y la duración promedio de tu ciclo (generalmente entre 21 y 35 días)." },
  ],
  relatedCalculators: ["Calculadora de Ovulación", "Calculadora de Aumento de Peso en el Embarazo", "Calculadora de Edad", "Calculadora de Diferencia entre Fechas"],
  youMayLike: pickYouMayLike("pregnancy-due-date-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Fecha de Parto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};