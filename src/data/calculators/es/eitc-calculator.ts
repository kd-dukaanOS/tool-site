// src/data/calculators/es/eitc-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const eitcCalculatorContentEs = {
  meta: {
    seoTitle: "Calculadora de EITC 2025-2026 — Crédito por Ingreso del Trabajo",
    metaDescription: "Calculadora gratis del EITC (Crédito Tributario por Ingreso del Trabajo) para 2025 y 2026. Estima tu crédito según ingreso, estado civil e hijos calificados con las tablas actuales del IRS.",
    canonicalSlug: "/es/finance/eitc-calculator",
    ogTitle: "Calculadora de EITC — Estimador del Crédito por Ingreso del Trabajo",
    ogDescription: "Estima al instante cuánto EITC te corresponde para 2025 o 2026.",
    twitterTitle: "Calculadora de EITC Gratis 2025-2026",
    twitterDescription: "Descubre cuánto Crédito por Ingreso del Trabajo puedes recibir.",
  },

  hero: {
    text: "La Calculadora de EITC estima tu Crédito Tributario por Ingreso del Trabajo para el año fiscal 2025 o 2026 según tu ingreso ganado, tu AGI, tu estado civil tributario y el número de hijos calificados — usando la fórmula oficial de aumento, meseta y reducción del IRS.",
  },

  about: {
    text: `El EITC (Earned Income Tax Credit), conocido en español como Crédito Tributario por Ingreso del Trabajo, es un crédito federal reembolsable para trabajadores de ingresos bajos a moderados — es decir, puede reducir tu impuesto por debajo de cero y pagarse como parte de tu reembolso.

El crédito funciona en tres etapas: aumenta como un porcentaje de tu ingreso ganado, se mantiene estable (meseta) una vez que alcanzas el "monto de ingreso ganado", y luego disminuye gradualmente una vez que tu ingreso (o tu AGI, el que sea mayor) supera el umbral de reducción.

Esta calculadora usa las cifras oficiales del IRS para los años fiscales 2025 y 2026, ajustadas según tu estado civil tributario y número de hijos calificados (de 0 a 3 o más).

Limitaciones: esta herramienta estima solo el crédito federal — no incluye créditos EITC adicionales de algunos estados, no verifica todas las reglas de elegibilidad (residencia, pruebas de hijo calificado, tope de ingreso de inversión), y los resultados deben confirmarse con el Asistente de EITC del IRS o un profesional de impuestos.`,
  },

  formula: {
    formula: "EITC = mín(Ingreso Ganado × Tasa del Crédito, Crédito Máximo) − máx(0, Ingreso − Umbral de Reducción) × Tasa de Reducción",
    variables: [
      { symbol: "Tasa del Crédito", meaning: "7.65% (sin hijos), 34% (1 hijo), 40% (2 hijos), 45% (3+ hijos)" },
      { symbol: "Crédito Máximo", meaning: "El monto de meseta alcanzado una vez que el ingreso ganado llega al 'monto de ingreso ganado'" },
      { symbol: "Tasa de Reducción", meaning: "La tasa a la que se reduce el crédito una vez que el ingreso supera el umbral de reducción" },
    ],
    explanation: "El crédito aumenta con el ingreso ganado hasta su máximo, se mantiene estable durante un rango de meseta, y luego disminuye a una tasa fija basada en el mayor entre ingreso ganado y AGI.",
    interpretation: "Por ejemplo, un declarante soltero con un hijo que gana $20,000 en 2025 recibiría casi el crédito máximo completo de $4,328, ya que $20,000 cae dentro del rango de meseta antes del umbral de reducción de $23,350.",
  },

  steps: [
    "Selecciona el año fiscal (2025 o 2026).",
    "Elige tu estado civil tributario (Casado Declarando por Separado no es elegible).",
    "Ingresa tu ingreso ganado total (salarios, propinas, ingreso por cuenta propia).",
    "Ingresa tu Ingreso Bruto Ajustado (AGI) si es diferente al ingreso ganado.",
    "Ingresa tu número de hijos calificados (0-3+).",
    "Ingresa cualquier ingreso de inversión del año.",
    "Haz clic en Calcular para ver tu crédito estimado y estado de elegibilidad.",
  ],

  examples: [
    { inputs: "Soltero, 2025, 1 hijo, Ingreso Ganado: $20,000, AGI: $20,000", result: "EITC Estimado: ~$4,328", explanation: "El ingreso cae en el rango de meseta, así que aplica el crédito máximo completo." },
    { inputs: "Casado Conjunto, 2025, 2 hijos, Ingreso Ganado: $45,000, AGI: $45,000", result: "EITC Estimado: ~$3,850", explanation: "El ingreso superó el umbral de reducción, disminuyendo el crédito por debajo del máximo de $7,152." },
    { inputs: "Soltero, 2025, 0 hijos, Ingreso Ganado: $12,000, AGI: $12,000", result: "EITC Estimado: ~$489", explanation: "El ingreso supera el monto de ingreso ganado para declarantes sin hijos, activando la reducción." },
  ],

  practicalUses: [
    "Estimar tu reembolso antes de presentar tu declaración de impuestos",
    "Verificar si un aumento de sueldo o ingreso freelance cambia tu elegibilidad para el EITC",
    "Comparar resultados del EITC entre distintos estados civiles tributarios",
    "Planear en torno al tope de ingreso de inversión que puede descalificarte",
    "Entender cómo un hijo calificado adicional cambia el monto de tu crédito",
    "Estimar cambios año a año conforme se ajustan los umbrales del IRS",
  ],

  expertTips: [
    "El EITC es reembolsable — puedes recibirlo como parte de tu reembolso incluso si no debes impuesto federal.",
    "Tanto el AGI como el ingreso ganado se comparan contra los límites; se usa el mayor de los dos para la reducción, así que ingresos de inversión o desempleo reflejados en tu AGI pueden reducir tu crédito aunque tu ingreso ganado sea bajo.",
    "Los declarantes de Casado Declarando por Separado casi nunca son elegibles para el EITC — declara conjuntamente si quieres reclamarlo.",
    "El tope de ingreso de inversión ($11,950 para 2025, $12,200 para 2026) incluye intereses, dividendos, ganancias de capital e ingreso por alquiler — una sola ganancia de capital grande puede descalificarte por completo.",
    "Debes presentar una declaración de impuestos para reclamar el EITC, incluso si tu ingreso está por debajo del umbral mínimo de declaración.",
    "Generalmente puedes reclamar tanto el EITC como el Crédito Tributario por Hijos en el mismo año si calificas para ambos.",
  ],

  commonMistakes: [
    { mistake: "Olvidar incluir el AGI cuando es mayor al ingreso ganado", fix: "Ingresa el AGI por separado — el IRS usa el mayor de los dos para determinar tu reducción." },
    { mistake: "Asumir que el ingreso por cuenta propia no cuenta", fix: "El ingreso por trabajo independiente y de la economía gig sí cuentan como ingreso ganado para el EITC." },
    { mistake: "Declarar como Casado por Separado esperando el crédito", fix: "Los declarantes MFS quedan descalificados del EITC en casi todos los casos — usa Casado Declarando Conjuntamente en su lugar." },
    { mistake: "Ignorar el límite de ingreso de inversión", fix: "Verifica que intereses, dividendos y ganancias de capital estén bajo el tope anual, o el crédito cae a cero sin importar tu ingreso ganado." },
    { mistake: "Usar umbrales de ingreso desactualizados", fix: "Los umbrales y créditos máximos del EITC se ajustan cada año por inflación — revisa siempre la tabla del año fiscal actual." },
  ],

  faq: [
    { q: "¿Qué es el Crédito Tributario por Ingreso del Trabajo (EITC)?", a: "Es un crédito federal reembolsable para trabajadores de ingresos bajos a moderados que aumenta con el ingreso ganado hasta un máximo, y luego se reduce conforme el ingreso sigue subiendo." },
    { q: "¿Cuánto es el EITC para 2025?", a: "Para el año fiscal 2025, el EITC máximo va desde $649 sin hijos calificados hasta $8,046 para declarantes con tres o más hijos calificados." },
    { q: "¿Cuánto es el EITC para 2026?", a: "Para el año fiscal 2026, el EITC máximo va desde $664 sin hijos calificados hasta $8,231 para declarantes con tres o más hijos calificados." },
    { q: "¿Quién califica para el Crédito por Ingreso del Trabajo?", a: "Necesitas ingreso ganado dentro de los límites de elegibilidad, un número de Seguro Social válido, residencia en EE.UU. por más de la mitad del año, y un estado civil distinto a Casado Declarando por Separado." },
    { q: "¿Puedo recibir el EITC sin hijos?", a: "Sí — los declarantes sin hijos calificados aún pueden reclamar un EITC menor si su ingreso y edad cumplen los requisitos (generalmente entre 25 y 65 años)." },
    { q: "¿Casado Declarando por Separado califica para el EITC?", a: "No, en casi todos los casos los declarantes de Casado Declarando por Separado no pueden reclamar el EITC; se requiere Casado Declarando Conjuntamente para reclamarlo estando casado." },
    { q: "¿Qué cuenta como ingreso ganado para el EITC?", a: "Salarios, sueldos, propinas, ingreso de la economía gig e ingreso por cuenta propia cuentan; el ingreso de inversión, Seguro Social, pensiones y beneficios de desempleo no cuentan." },
    { q: "¿Existe un límite de ingreso de inversión para el EITC?", a: "Sí — para 2025 tu ingreso de inversión debe ser $11,950 o menos, subiendo a $12,200 para 2026, o quedas descalificado sin importar tu ingreso ganado." },
    { q: "¿Cómo se calcula el EITC?", a: "El crédito aumenta como un porcentaje del ingreso ganado hasta un máximo, se mantiene estable, y luego se reduce a una tasa fija una vez que el ingreso supera un umbral, usando el mayor entre ingreso ganado y AGI." },
    { q: "¿Puedo reclamar tanto el EITC como el Crédito Tributario por Hijos?", a: "Sí, la mayoría de los contribuyentes que califican para ambos pueden reclamar el EITC y el Crédito Tributario por Hijos en el mismo año fiscal, ya que no son mutuamente excluyentes." },
    { q: "¿Necesito presentar una declaración de impuestos para recibir el EITC?", a: "Sí — debes presentar una declaración federal de impuestos, incluso si tu ingreso está por debajo del umbral mínimo estándar, para reclamar el EITC." },
    { q: "¿Cómo afecta el número de hijos calificados al EITC?", a: "La tasa del crédito y el monto máximo aumentan con cada hijo calificado, hasta tres o más hijos, que llevan el crédito máximo más alto." },
    { q: "¿Qué es el umbral de reducción del EITC?", a: "Es el nivel de ingreso por encima del cual tu crédito comienza a reducirse; varía según el estado civil tributario y el número de hijos calificados, y es más alto para Casado Declarando Conjuntamente." },
    { q: "¿Por qué mi EITC estimado salió más bajo que el máximo?", a: "Probablemente tu ingreso está por encima del umbral de reducción para tu estado civil y tamaño familiar, lo que reduce el crédito gradualmente hasta llegar a cero en el monto de reducción completa." },
  ],

  relatedCalculators: ["Calculadora de Crédito Tributario por Hijos", "Calculadora de Tramo de Impuesto", "Calculadora de Reembolso de Impuestos", "Calculadora de Formulario W-4"],

  youMayLike: pickYouMayLike("eitc-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de EITC",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};