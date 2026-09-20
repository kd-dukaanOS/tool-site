// src/data/calculators/es/canada-capital-gains.ts
import { pickYouMayLike } from "../../calculator-pool";

export const canadaCapitalGainsCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Ganancias de Capital Canadá 2026 — Impuesto sobre Venta",
    metaDescription: "Calcula el impuesto sobre ganancias de capital en Canadá con la tasa de inclusión de 2026 (50%). Calculadora gratis para ventas de acciones, propiedades e inversiones.",
    canonicalSlug: "/es/finance/canada-capital-gains",
    ogTitle: "Calculadora de Ganancias de Capital de Canadá — Impuesto Estimado",
    ogDescription: "Estima cuánto impuesto pagarás sobre una ganancia de capital en Canadá según tu tasa marginal.",
    twitterTitle: "Calculadora de Ganancias de Capital Canadá",
    twitterDescription: "Calcula el impuesto sobre tu ganancia de capital en Canadá, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Ganancias de Capital de Canadá estima cuánto impuesto pagarás al vender una inversión, propiedad u otro activo, aplicando la tasa de inclusión vigente de 2026 y tu tasa de impuesto marginal.",
  },

  about: {
    text: `En Canadá, cuando vendes un activo de capital (acciones, fondos, una propiedad que no es tu residencia principal, etc.) por más de lo que pagaste, generas una ganancia de capital. Solo una parte de esa ganancia se grava como ingreso — el resto queda libre de impuesto.

Esta calculadora estima tu impuesto usando la tasa de inclusión vigente del 50% para 2026 (la ganancia se calcula como Producto de la Disposición − Base de Costo Ajustada − Gastos), y aplica tu tasa marginal de impuesto sobre la porción imponible de la ganancia.

Nota importante para 2026: el aumento propuesto de la tasa de inclusión al 66.67% (anunciado en el presupuesto federal de 2024) fue cancelado oficialmente el 21 de marzo de 2025 y nunca entró en vigor. La tasa de inclusión sigue siendo del 50% para todos los contribuyentes, sin importar el tamaño de la ganancia.

Limitaciones: esta calculadora no considera exenciones especiales como la Exención Vitalicia de Ganancias de Capital (LCGE, $1,275,000 en 2026 para acciones de pequeñas empresas calificadas) ni la Exención de Residencia Principal. Consulta a un contador para tu situación específica.`,
  },

  formula: {
    formula: "Ganancia de Capital = Producto de la Disposición − Base de Costo Ajustada − Gastos de Venta",
    variables: [
      { symbol: "Tasa de Inclusión", meaning: "50% — la porción de la ganancia que es imponible (vigente en 2026)" },
      { symbol: "Ganancia de Capital Imponible", meaning: "Ganancia de Capital × 50%" },
      { symbol: "Impuesto Estimado", meaning: "Ganancia de Capital Imponible × Tu Tasa de Impuesto Marginal" },
    ],
    explanation: "Se calcula la ganancia bruta restando la base de costo y los gastos del producto de venta, se aplica la tasa de inclusión del 50% para obtener la porción imponible, y esa porción se grava a tu tasa marginal.",
    interpretation: "Por ejemplo, con un producto de venta de $150,000, una base de costo de $90,000 y $2,000 en gastos, la ganancia de capital es $58,000, la ganancia imponible es $29,000, y con una tasa marginal de 30% el impuesto estimado es $8,700.",
  },

  steps: [
    "Ingresa el producto de la disposición (el precio de venta).",
    "Ingresa la base de costo ajustada (lo que pagaste originalmente, más mejoras).",
    "Ingresa cualquier gasto u desembolso relacionado con la venta (comisiones, honorarios legales).",
    "Ingresa tu tasa de impuesto marginal estimada.",
    "Haz clic en Calcular.",
    "Revisa tu ganancia de capital, la porción imponible y el impuesto estimado.",
  ],

  examples: [
    { inputs: "Producto: $150,000, Base de Costo: $90,000, Gastos: $2,000, Tasa Marginal: 30%", result: "Impuesto Estimado: ~$8,700", explanation: "Venta típica de una inversión con ganancia moderada." },
    { inputs: "Producto: $500,000, Base de Costo: $350,000, Gastos: $10,000, Tasa Marginal: 43%", result: "Impuesto Estimado: ~$30,100", explanation: "Venta de una propiedad de inversión con una tasa marginal alta." },
    { inputs: "Producto: $50,000, Base de Costo: $45,000, Gastos: $500, Tasa Marginal: 20%", result: "Impuesto Estimado: ~$450", explanation: "Una ganancia pequeña con impacto fiscal mínimo." },
  ],

  practicalUses: [
    "Estimar el impuesto antes de vender acciones, fondos u otras inversiones",
    "Planear la venta de una propiedad de inversión o segunda residencia",
    "Comparar el impacto fiscal de vender en distintos años según tu ingreso",
    "Verificar cuánto necesitarás reservar para tu declaración de impuestos",
    "Evaluar si conviene repartir una venta grande en varios años fiscales",
  ],

  expertTips: [
    "La tasa de inclusión sigue siendo 50% en 2026 — el aumento propuesto al 66.67% fue cancelado oficialmente en marzo de 2025.",
    "Si vendes tu residencia principal, normalmente está exenta de impuesto sobre ganancias de capital gracias a la Exención de Residencia Principal.",
    "Considera vender en un año de menor ingreso para reducir tu tasa marginal aplicable a la ganancia.",
    "Guarda todos los recibos de mejoras a la propiedad, ya que aumentan tu base de costo ajustada y reducen la ganancia imponible.",
    "Si tienes pérdidas de capital de años anteriores, pueden compensar ganancias de capital actuales.",
  ],

  commonMistakes: [
    { mistake: "Pensar que toda la ganancia se grava al 100%", fix: "Solo el 50% de la ganancia de capital es imponible en 2026; el resto queda libre de impuesto." },
    { mistake: "Olvidar incluir gastos de venta en el cálculo", fix: "Comisiones, honorarios legales y otros costos de venta reducen la ganancia de capital imponible." },
    { mistake: "No considerar la Exención de Residencia Principal", fix: "Si el activo vendido fue tu residencia principal durante todos los años de propiedad, probablemente no debas impuesto sobre esa ganancia." },
    { mistake: "Usar la tasa de inclusión propuesta del 66.67% que fue cancelada", fix: "Para 2026, la tasa de inclusión vigente es 50% para todos los contribuyentes, sin excepciones por monto de la ganancia." },
    { mistake: "No actualizar la base de costo ajustada con mejoras hechas al activo", fix: "Las mejoras de capital (no reparaciones) aumentan tu base de costo y reducen la ganancia imponible." },
  ],

  faq: [
    { q: "¿Cuál es la tasa de inclusión de ganancias de capital en Canadá en 2026?", a: "Es del 50% para individuos, corporaciones y fideicomisos; el aumento propuesto al 66.67% fue cancelado oficialmente el 21 de marzo de 2025." },
    { q: "¿Cómo se calcula el impuesto sobre ganancias de capital en Canadá?", a: "Se calcula la ganancia (producto de venta menos base de costo y gastos), se toma el 50% de esa ganancia como porción imponible, y se grava a tu tasa marginal de impuesto." },
    { q: "¿Se pagan impuestos por vender la casa donde vivo?", a: "Generalmente no, si la propiedad calificó como tu residencia principal durante todos los años que la tuviste, gracias a la Exención de Residencia Principal." },
    { q: "¿Qué es la base de costo ajustada?", a: "Es el precio original que pagaste por el activo, más cualquier mejora de capital realizada, menos ciertos ajustes — se usa para calcular tu ganancia real." },
    { q: "¿Subió la tasa de impuesto a las ganancias de capital en Canadá?", a: "No, el aumento propuesto en el presupuesto de 2024 fue cancelado en marzo de 2025; la tasa de inclusión sigue en 50% para 2026." },
    { q: "¿Qué es la Exención Vitalicia de Ganancias de Capital (LCGE)?", a: "Es una exención especial para acciones de pequeñas empresas calificadas o propiedad agrícola/pesquera, que en 2026 permite hasta $1,275,000 libres de impuesto." },
    { q: "¿Se pagan ganancias de capital al vender acciones en una cuenta TFSA?", a: "No, las ganancias dentro de un TFSA están completamente libres de impuesto, incluidas las ganancias de capital." },
    { q: "¿Se pagan ganancias de capital al vender dentro de un RRSP?", a: "No mientras el dinero permanezca en el RRSP; el impuesto se paga como ingreso regular cuando retiras los fondos, no como ganancia de capital." },
    { q: "¿Puedo compensar una ganancia de capital con una pérdida de capital?", a: "Sí, las pérdidas de capital pueden compensar ganancias de capital del mismo año, y las pérdidas no usadas pueden aplicarse a años anteriores o futuros." },
    { q: "¿Cuál es mi tasa marginal de impuesto para calcular la ganancia de capital?", a: "Es la tasa combinada (federal + provincial) que pagarías sobre tu próximo dólar de ingreso; puedes verla en la Calculadora de Impuesto sobre la Renta de Canadá." },
    { q: "¿Hay que declarar la venta de la casa aunque esté exenta de impuesto?", a: "Sí, desde 2016 es obligatorio reportar la venta de tu residencia principal en tu declaración, incluso si la ganancia está completamente exenta." },
    { q: "¿Las criptomonedas generan ganancias de capital en Canadá?", a: "Sí, la venta o intercambio de criptomonedas generalmente se trata como una disposición de capital sujeta a la misma tasa de inclusión del 50%." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre la Renta Canadá", "Calculadora de Jubilación de Canadá", "Calculadora de CPP", "Calculadora de RRSP"],

  youMayLike: pickYouMayLike("canada-capital-gains"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Ganancias de Capital de Canadá",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};