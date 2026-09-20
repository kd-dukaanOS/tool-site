// src/data/calculators/es/child-tax-credit-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const childTaxCreditCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Crédito Tributario por Hijos 2026 (CTC)",
    metaDescription: "Calcula tu Crédito Tributario por Hijos 2026 ($2,200/hijo) después de la reducción por ingresos, según tu ingreso y estado civil tributario.",
    canonicalSlug: "/es/finance/child-tax-credit-calculator",
    ogTitle: "Calculadora de Crédito Tributario por Hijos",
    ogDescription: "Descubre cuánto Crédito Tributario por Hijos recibirás en 2026 después de la reducción por ingresos.",
    twitterTitle: "Calculadora de Crédito Tributario por Hijos 2026",
    twitterDescription: "Calcula tu CTC 2026 al instante según tus ingresos y dependientes.",
  },

  hero: {
    text: "La Calculadora de Crédito Tributario por Hijos estima tu Crédito Tributario por Hijos 2026 ($2,200 por hijo calificado) y el Crédito por Otros Dependientes ($500), aplicando la reducción basada en tu ingreso.",
  },

  about: {
    text: `El Crédito Tributario por Hijos (CTC) reduce directamente el impuesto federal que debes por cada hijo calificado menor de 17 años, mientras que el Crédito por Otros Dependientes cubre a dependientes que no califican para el CTC completo.

Ambos créditos comienzan a reducirse (phase-out) cuando tu Ingreso Bruto Ajustado Modificado (MAGI) supera ciertos umbrales, que varían según tu estado civil tributario.

Esta calculadora suma el crédito base según el número de hijos y dependientes, aplica la reducción por ingresos si corresponde, y muestra tu crédito final junto con el monto máximo reembolsable (Crédito Tributario Adicional por Hijos, ACTC).

Limitaciones: esta calculadora ofrece una estimación general; no considera otros créditos fiscales, situaciones de custodia compartida, ni cambios legislativos posteriores a 2026.`,
  },

  formula: {
    formula: "Crédito Final = Crédito Base − Reducción por Ingresos (si el MAGI supera el umbral)",
    variables: [
      { symbol: "Crédito Base", meaning: "$2,200 por hijo calificado más $500 por cada otro dependiente" },
      { symbol: "Reducción por Ingresos", meaning: "$50 de reducción por cada $1,000 (o fracción) de MAGI que supere el umbral de tu estado civil tributario" },
      { symbol: "Máximo Reembolsable (ACTC)", meaning: "La porción del crédito que puedes recibir como reembolso aunque no debas impuesto" },
    ],
    explanation: "El crédito base se calcula multiplicando el número de hijos calificados y otros dependientes por sus montos respectivos; si tu MAGI supera el umbral de tu estado civil, se resta $50 por cada $1,000 de exceso hasta agotar el crédito.",
    interpretation: "Por ejemplo, con 2 hijos calificados y un MAGI de $150,000 declarando conjuntamente, generalmente no hay reducción y el crédito final sería de $4,400.",
  },

  steps: [
    "Ingresa tu Ingreso Bruto Ajustado Modificado (MAGI).",
    "Selecciona tu estado civil tributario.",
    "Ingresa el número de hijos calificados (menores de 17) y otros dependientes.",
    "Haz clic en Calcular.",
    "Revisa tu crédito final, el crédito base, la reducción aplicada y el máximo reembolsable.",
  ],

  examples: [
    { inputs: "MAGI: $150,000, Casado Conjunto, 2 hijos calificados", result: "Crédito Final: $4,400", explanation: "Ingreso por debajo del umbral de reducción para casados declarando conjuntamente." },
    { inputs: "MAGI: $220,000, Soltero, 1 hijo calificado", result: "Crédito Final: reducido significativamente", explanation: "El ingreso supera el umbral para soltero, activando la reducción por ingresos." },
    { inputs: "MAGI: $80,000, Cabeza de Familia, 1 hijo calificado, 1 otro dependiente", result: "Crédito Final: $2,700", explanation: "Ingreso bajo el umbral, crédito completo sin reducción." },
  ],

  practicalUses: [
    "Estimar tu reembolso o deuda de impuestos antes de presentar tu declaración",
    "Planear cuánto crédito recibirás si tu ingreso cambia durante el año",
    "Entender cómo el aumento de ingreso afecta tu crédito por hijos",
    "Comparar el impacto del crédito según distintos estados civiles tributarios",
    "Verificar si calificas para el monto reembolsable (ACTC) si no debes impuesto",
  ],

  expertTips: [
    "El umbral de reducción es distinto según tu estado civil tributario — verifica el umbral correcto antes de estimar tu crédito.",
    "El Crédito por Otros Dependientes ($500) aplica a dependientes que no califican como hijos menores de 17, como hijos mayores o padres dependientes.",
    "Si no debes impuesto federal, aún podrías recibir parte del crédito como reembolso a través del Crédito Tributario Adicional por Hijos (ACTC).",
    "Aportar a una cuenta de retiro puede reducir tu MAGI y ayudarte a evitar o reducir la fase de reducción del crédito.",
    "Revisa cada año los montos y umbrales, ya que pueden ajustarse por inflación o cambios legislativos.",
  ],

  commonMistakes: [
    { mistake: "Confundir el ingreso bruto con el MAGI", fix: "El MAGI incluye ciertos ajustes; usa el monto correcto de tu declaración de impuestos, no solo tu salario bruto." },
    { mistake: "Olvidar incluir a otros dependientes además de los hijos calificados", fix: "Los otros dependientes (como hijos mayores de 17) califican para un crédito separado de $500." },
    { mistake: "No verificar el umbral correcto según el estado civil tributario", fix: "El umbral de reducción varía entre soltero, casado conjunto, casado separado y cabeza de familia." },
    { mistake: "Asumir que el crédito completo siempre es reembolsable", fix: "Solo una parte del crédito (el ACTC) es reembolsable si no debes suficiente impuesto para usar el crédito completo." },
  ],

  faq: [
    { q: "¿Cuánto es el Crédito Tributario por Hijos en 2026?", a: "El crédito es de $2,200 por cada hijo calificado menor de 17 años, sujeto a reducción según tu ingreso." },
    { q: "¿Qué es el Crédito por Otros Dependientes?", a: "Es un crédito de $500 para dependientes que no califican como hijos menores de 17, como hijos mayores o familiares dependientes." },
    { q: "¿A partir de qué ingreso se reduce el Crédito Tributario por Hijos?", a: "La reducción comienza cuando tu Ingreso Bruto Ajustado Modificado supera el umbral correspondiente a tu estado civil tributario." },
    { q: "¿Cómo se calcula la reducción del crédito por ingresos altos?", a: "Se resta $50 del crédito por cada $1,000 (o fracción) de MAGI que exceda el umbral aplicable." },
    { q: "¿Qué es el MAGI y cómo lo calculo?", a: "El Ingreso Bruto Ajustado Modificado es tu ingreso bruto ajustado con ciertos ajustes sumados de nuevo; para la mayoría de los contribuyentes es igual o muy cercano a su AGI." },
    { q: "¿Qué es el Crédito Tributario Adicional por Hijos (ACTC)?", a: "Es la porción reembolsable del Crédito Tributario por Hijos que puedes recibir aunque no debas suficiente impuesto para usar el crédito completo." },
    { q: "¿Puedo reclamar el crédito por un hijo que cumple 17 años durante el año?", a: "No, el hijo debe tener menos de 17 años al final del año fiscal para calificar para el crédito completo por hijo." },
    { q: "¿El crédito es diferente para padres solteros?", a: "El umbral de reducción para Cabeza de Familia es distinto al de Soltero o Casado, lo que puede afectar el monto final del crédito." },
    { q: "¿Necesito un número de Seguro Social para reclamar el crédito?", a: "Sí, el hijo calificado generalmente debe tener un número de Seguro Social válido para trabajar en EE. UU." },
    { q: "¿Puedo reclamar el crédito si no tengo ingresos?", a: "Puedes calificar para una parte reembolsable del crédito (ACTC) incluso con ingresos bajos, sujeto a ciertos requisitos de ingreso mínimo." },
    { q: "¿El crédito cambia si tengo custodia compartida de mis hijos?", a: "Generalmente solo el padre que reclama al hijo como dependiente en su declaración puede reclamar el crédito ese año." },
    { q: "¿Cuántos hijos puedo reclamar para el Crédito Tributario por Hijos?", a: "No hay un límite en el número de hijos calificados que puedes reclamar, siempre que cada uno cumpla los requisitos de edad y dependencia." },
    { q: "¿El Crédito Tributario por Hijos es lo mismo que la deducción por dependientes?", a: "No, el crédito reduce directamente el impuesto que debes, mientras que una deducción solo reduce tu ingreso gravable." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre la Renta", "Calculadora de Retención W-4", "Calculadora del Crédito por Ingreso del Trabajo (EITC)", "Calculadora de Reembolso de Impuestos"],

  youMayLike: pickYouMayLike("child-tax-credit-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Crédito Tributario por Hijos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};