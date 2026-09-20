// src/data/calculators/es/capital-gains-tax-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const capitalGainsTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto sobre Ganancias de Capital 2026 (EE.UU.)",
    metaDescription: "Calcula el impuesto federal sobre ganancias de capital a corto y largo plazo según tu ingreso y estado civil tributario. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/capital-gains-tax-calculator",
    ogTitle: "Calculadora de Impuesto sobre Ganancias de Capital",
    ogDescription: "Estima cuánto impuesto federal pagarás sobre una ganancia de capital a corto o largo plazo.",
    twitterTitle: "Calculadora de Ganancias de Capital 2026",
    twitterDescription: "Calcula tu impuesto federal sobre ganancias de capital al instante.",
  },

  hero: {
    text: "La Calculadora de Impuesto sobre Ganancias de Capital estima el impuesto federal que pagarás al vender una inversión, sumando la ganancia a tu otro ingreso y aplicando los tramos vigentes del IRS según sea a corto o largo plazo.",
  },

  about: {
    text: `Cuando vendes una inversión (acciones, bienes raíces, cripto) por más de lo que pagaste, la ganancia se considera ingreso gravable en Estados Unidos. El tratamiento fiscal depende del tiempo que mantuviste el activo.

Si lo mantuviste un año o menos (corto plazo), la ganancia se grava con los tramos ordinarios del IRS, igual que tu salario. Si lo mantuviste más de un año (largo plazo), se aplican tasas preferenciales de 0%, 15% o 20% según tu ingreso total.

Esta calculadora suma tu ganancia a tu otro ingreso anual y a tu deducción (estándar o detallada) para determinar tu tramo y estimar el impuesto adeudado.

Limitaciones: no incluye impuesto estatal, el Impuesto sobre Ingresos Netos de Inversión (NIIT) del 3.8% para ingresos altos, ni reglas especiales para bienes raíces o activos coleccionables.`,
  },

  formula: {
    formula: "Ganancia de Capital = Precio de Venta − Precio de Compra",
    variables: [
      { symbol: "Período de Tenencia", meaning: "Corto plazo (1 año o menos, tramos ordinarios) o largo plazo (más de 1 año, tasas de 0/15/20%)" },
      { symbol: "Ingreso Gravable Total", meaning: "Tu otro ingreso anual más la ganancia de capital, menos tu deducción" },
      { symbol: "Tasa Efectiva sobre la Ganancia", meaning: "El impuesto sobre la ganancia dividido entre la ganancia total, expresado en porcentaje" },
    ],
    explanation: "La ganancia se apila sobre tu otro ingreso: si es a corto plazo, se grava a la tasa marginal ordinaria correspondiente a ese tramo; si es a largo plazo, se grava por separado a 0%, 15% o 20% según el ingreso total.",
    interpretation: "Por ejemplo, una ganancia de $5,000 (compra $10,000, venta $15,000) a largo plazo, con otro ingreso de $75,000 como soltero, probablemente se grave al 15%, resultando en aproximadamente $750 de impuesto.",
  },

  steps: [
    "Ingresa el precio de compra y el precio de venta de tu inversión.",
    "Selecciona el período de tenencia: corto o largo plazo.",
    "Ingresa tu otro ingreso anual (sin incluir esta ganancia).",
    "Selecciona tu estado civil tributario y el año fiscal.",
    "Elige deducción estándar o detallada.",
    "Haz clic en Calcular para ver tu ganancia, impuesto, tasa efectiva y ganancia después de impuestos.",
  ],

  examples: [
    { inputs: "Compra: $10,000, Venta: $15,000, Largo Plazo, Otro Ingreso: $75,000, Soltero", result: "Impuesto: ~$750 (15%)", explanation: "Ganancia a largo plazo de un contribuyente de ingreso medio en el tramo del 15%." },
    { inputs: "Compra: $10,000, Venta: $15,000, Corto Plazo, Otro Ingreso: $75,000, Soltero", result: "Impuesto: ~$1,100 (tramo ordinario del 22%)", explanation: "La misma ganancia a corto plazo se grava a una tasa marginal más alta." },
    { inputs: "Compra: $50,000, Venta: $80,000, Largo Plazo, Otro Ingreso: $30,000, Soltero", result: "Impuesto: $0 (tramo del 0%)", explanation: "Con ingreso total bajo, la ganancia a largo plazo puede caer en el tramo de 0%." },
  ],

  practicalUses: [
    "Estimar cuánto impuesto pagarás antes de vender una inversión",
    "Comparar el impacto fiscal de vender a corto plazo versus esperar al largo plazo",
    "Planear la mejor fecha de venta para minimizar el impuesto sobre la ganancia",
    "Calcular la ganancia neta real después de impuestos antes de reinvertir",
    "Evaluar el efecto de otros ingresos anuales sobre tu tramo de ganancias de capital",
  ],

  expertTips: [
    "Esperar a que una inversión cumpla más de un año antes de venderla puede reducir significativamente el impuesto, pasando de tramos ordinarios a tasas de 0/15/20%.",
    "Si tu ingreso total es bajo, tu ganancia a largo plazo podría calificar para la tasa de 0% — vale la pena calcularlo antes de vender.",
    "Compensar ganancias con pérdidas de otras inversiones (tax-loss harvesting) puede reducir tu impuesto total.",
    "Esta calculadora no incluye el Impuesto sobre Ingresos Netos de Inversión (NIIT) del 3.8%, que aplica a ingresos altos — considéralo si tu ingreso total es elevado.",
    "El impuesto estatal sobre ganancias de capital varía mucho según el estado; verifica las reglas de tu estado por separado.",
  ],

  commonMistakes: [
    { mistake: "Vender una inversión justo antes de cumplir un año", fix: "Espera unos días más si es posible para calificar como ganancia a largo plazo y pagar menos impuesto." },
    { mistake: "Olvidar sumar la ganancia a tu otro ingreso al estimar el tramo", fix: "El tramo de impuesto depende de tu ingreso total, no solo de la ganancia; inclúyelo siempre en el cálculo." },
    { mistake: "No considerar el impuesto estatal", fix: "Esta calculadora solo estima el impuesto federal; algunos estados también gravan las ganancias de capital." },
    { mistake: "Asumir que todas las ganancias a largo plazo pagan la misma tasa", fix: "La tasa (0%, 15% o 20%) depende de tu ingreso gravable total, no es una tasa fija para todos." },
  ],

  faq: [
    { q: "¿Cómo se calcula el impuesto sobre ganancias de capital?", a: "Se resta el precio de compra del precio de venta para obtener la ganancia, que luego se grava según sea a corto o largo plazo y tu ingreso total." },
    { q: "¿Cuál es la diferencia entre ganancia de capital a corto y largo plazo?", a: "Corto plazo es una inversión mantenida un año o menos, gravada con tramos ordinarios; largo plazo es más de un año, con tasas preferenciales de 0%, 15% o 20%." },
    { q: "¿Cuáles son las tasas de impuesto sobre ganancias de capital a largo plazo en 2026?", a: "Las tasas son 0%, 15% o 20%, dependiendo de tu ingreso gravable total y tu estado civil tributario." },
    { q: "¿Cómo se grava una ganancia de capital a corto plazo?", a: "Se grava igual que tu salario, usando los tramos ordinarios del IRS correspondientes a tu ingreso total." },
    { q: "¿Puedo calificar para 0% de impuesto sobre mi ganancia de capital?", a: "Sí, si tu ingreso gravable total (incluyendo la ganancia) es lo suficientemente bajo, puedes calificar para la tasa de 0% en ganancias a largo plazo." },
    { q: "¿Esta calculadora incluye impuesto estatal?", a: "No, solo estima el impuesto federal; el impuesto estatal sobre ganancias de capital varía según el estado." },
    { q: "¿Qué es el Impuesto sobre Ingresos Netos de Inversión (NIIT)?", a: "Es un impuesto adicional del 3.8% que aplica a ingresos por inversión para contribuyentes con ingreso alto; esta calculadora no lo incluye." },
    { q: "¿Cómo afecta mi estado civil tributario al impuesto sobre ganancias de capital?", a: "Los umbrales de ingreso para los tramos de 0%, 15% y 20% varían según si declaras como soltero, casado conjunto, casado separado o cabeza de familia." },
    { q: "¿Debo pagar impuesto sobre ganancias de capital en criptomonedas?", a: "Sí, el IRS trata las criptomonedas como propiedad; las ganancias al venderlas se gravan igual que otras inversiones." },
    { q: "¿Qué pasa si vendo con pérdida en lugar de ganancia?", a: "Una pérdida de capital puede compensar otras ganancias e incluso reducir tu ingreso gravable hasta cierto límite anual." },
    { q: "¿La deducción estándar afecta el cálculo del impuesto sobre ganancias de capital?", a: "Sí, la deducción reduce tu ingreso gravable total, lo que puede bajar el tramo aplicable a tu ganancia." },
    { q: "¿Cuánto tiempo debo mantener una inversión para pagar menos impuesto?", a: "Debes mantenerla más de un año (365 días o más) para calificar como ganancia a largo plazo con tasas preferenciales." },
    { q: "¿Esta calculadora sirve para la venta de una casa?", a: "Puede dar una estimación general, pero la venta de vivienda principal tiene exclusiones especiales que esta calculadora no modela." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre la Renta", "Calculadora de Retención W-4", "Calculadora de Impuesto sobre Dividendos", "Calculadora de Ganancias de Capital Canadá"],

  youMayLike: pickYouMayLike("capital-gains-tax-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Impuesto sobre Ganancias de Capital",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};