// src/data/calculators/es/closing-costs-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const closingCostsCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Costos de Cierre 2026 (Compra de Vivienda)",
    metaDescription: "Calcula tus costos de cierre y el efectivo total que necesitas para comprar una vivienda: comisiones del prestamista, título, impuestos y prepagos.",
    canonicalSlug: "/es/finance/closing-costs-calculator",
    ogTitle: "Calculadora de Costos de Cierre",
    ogDescription: "Estima tus costos de cierre totales y el efectivo necesario antes de comprar una casa.",
    twitterTitle: "Calculadora de Costos de Cierre 2026",
    twitterDescription: "Calcula el efectivo que necesitas para cerrar la compra de tu vivienda.",
  },

  hero: {
    text: "La Calculadora de Costos de Cierre estima las comisiones del prestamista, los costos de título, los impuestos de transferencia y los prepagos de depósito en garantía para mostrarte el efectivo total que necesitas al comprar una vivienda.",
  },

  about: {
    text: `Los costos de cierre son los gastos adicionales al precio de la vivienda y al pago inicial que debes pagar al finalizar la compra, e incluyen comisiones del prestamista, seguro de título, impuestos de transferencia, comisiones de registro y montos prepagados de seguro e impuesto predial.

Esta calculadora suma cada categoría de costo por separado (comisiones del prestamista y puntos de descuento, título y gobierno, y prepagos) para darte el total de costos de cierre y el efectivo total necesario, incluyendo tu pago inicial.

Limitaciones: las tasas exactas de comisiones, seguro de título e impuestos de transferencia varían según el estado, condado y prestamista — usa esta herramienta como una estimación general antes de solicitar tu Estimación de Préstamo oficial.`,
  },

  formula: {
    formula: "Costos de Cierre Totales = Comisiones del Prestamista + Puntos + Título y Gobierno + Prepagos",
    variables: [
      { symbol: "Comisiones del Prestamista", meaning: "Comisión de originación más el costo de los puntos de descuento comprados" },
      { symbol: "Título y Gobierno", meaning: "Seguro de título, comisiones de registro e impuesto de transferencia" },
      { symbol: "Prepagos", meaning: "Meses de seguro y de impuesto predial pagados por adelantado hacia la cuenta de depósito en garantía" },
    ],
    explanation: "Cada categoría de costo se calcula por separado según el precio de la vivienda, el monto del préstamo y las tasas ingresadas, y luego se suman todas para obtener el total de costos de cierre y el efectivo necesario junto con el pago inicial.",
    interpretation: "Por ejemplo, en una vivienda de $350,000 con préstamo de $280,000, los costos de cierre suelen representar entre 2% y 5% del precio de la vivienda, es decir, entre $7,000 y $17,500.",
  },

  steps: [
    "Ingresa el precio de la vivienda, el monto del préstamo y tu pago inicial.",
    "Ingresa la comisión de originación y los puntos de descuento del prestamista.",
    "Ingresa el seguro de título, comisiones de registro e impuesto de transferencia.",
    "Ingresa los meses prepagados de seguro e impuesto predial junto con sus montos anuales.",
    "Haz clic en Calcular para ver tus costos de cierre totales y el efectivo necesario.",
  ],

  examples: [
    { inputs: "Precio: $350,000, Préstamo: $280,000, Pago Inicial: $70,000, Comisión: 0.5%, Título: 0.5%, Transferencia: 0.5%", result: "Costos de Cierre: ~$9,500 | Efectivo Necesario: ~$79,500", explanation: "Una compra típica con tasas de comisión moderadas." },
    { inputs: "Precio: $500,000, Préstamo: $400,000, Pago Inicial: $100,000, Comisión: 1%, Título: 0.6%, Transferencia: 1%", result: "Costos de Cierre: ~$18,000 | Efectivo Necesario: ~$118,000", explanation: "Una vivienda de mayor valor con comisiones e impuestos de transferencia más altos." },
    { inputs: "Precio: $250,000, Préstamo: $237,500, Pago Inicial: $12,500, Comisión: 0.5%, Título: 0.4%, Transferencia: 0%", result: "Costos de Cierre: ~$6,000 | Efectivo Necesario: ~$18,500", explanation: "Un comprador primerizo con pago inicial bajo en un estado sin impuesto de transferencia." },
  ],

  practicalUses: [
    "Calcular cuánto efectivo necesitas ahorrar antes de comprar una vivienda",
    "Comparar el costo total de cierre entre distintas ofertas de préstamo",
    "Decidir si comprar puntos de descuento para reducir tu tasa de interés vale la pena",
    "Presupuestar los montos prepagados de seguro e impuesto predial",
    "Negociar con el vendedor una contribución hacia los costos de cierre",
  ],

  expertTips: [
    "Los costos de cierre suelen representar entre el 2% y el 5% del precio de la vivienda — usa este rango como referencia rápida.",
    "Comprar puntos de descuento aumenta tus costos de cierre pero reduce tu tasa de interés; calcula el punto de equilibrio en años antes de decidir.",
    "Algunos estados no cobran impuesto de transferencia; verifica las reglas locales antes de estimar ese costo.",
    "Puedes negociar que el vendedor cubra parte de tus costos de cierre (seller credits) en mercados de comprador.",
    "Solicita siempre la Estimación de Préstamo (Loan Estimate) oficial del prestamista para confirmar los montos exactos antes de cerrar.",
  ],

  commonMistakes: [
    { mistake: "Olvidar presupuestar los costos de cierre además del pago inicial", fix: "Suma siempre el pago inicial y los costos de cierre para saber el efectivo total que necesitas ahorrar." },
    { mistake: "No comparar las comisiones de originación entre prestamistas", fix: "Solicita cotizaciones de varios prestamistas, ya que las comisiones de originación pueden variar significativamente." },
    { mistake: "Ignorar los prepagos de depósito en garantía", fix: "Los meses de seguro e impuesto predial prepagados pueden sumar miles de dólares adicionales al cierre." },
    { mistake: "Asumir que los costos de cierre son iguales en todos los estados", fix: "El impuesto de transferencia, las comisiones de registro y el seguro de título varían por estado y condado." },
  ],

  faq: [
    { q: "¿Cuánto son los costos de cierre normalmente?", a: "Los costos de cierre suelen representar entre el 2% y el 5% del precio de la vivienda, dependiendo del estado, el prestamista y el monto del préstamo." },
    { q: "¿Qué incluyen los costos de cierre?", a: "Incluyen comisiones del prestamista, seguro de título, impuestos de transferencia, comisiones de registro y montos prepagados de seguro e impuesto predial." },
    { q: "¿Quién paga los costos de cierre, el comprador o el vendedor?", a: "Generalmente el comprador los paga, aunque en algunos mercados el vendedor puede aceptar cubrir una parte como incentivo (seller credit)." },
    { q: "¿Qué son los puntos de descuento?", a: "Son comisiones opcionales pagadas al prestamista al cierre para reducir tu tasa de interés durante la vida del préstamo." },
    { q: "¿Puedo incluir los costos de cierre en el préstamo hipotecario?", a: "Algunos programas de préstamo permiten financiar parte de los costos de cierre, aunque esto aumenta el monto total del préstamo y los intereses pagados." },
    { q: "¿Qué es el seguro de título y por qué debo pagarlo?", a: "El seguro de título protege al comprador y al prestamista contra problemas legales con la propiedad del inmueble, como gravámenes o disputas de título." },
    { q: "¿Qué es el impuesto de transferencia?", a: "Es un impuesto que cobra el estado o condado al transferir la propiedad de una vivienda de un dueño a otro; su tasa varía según la ubicación." },
    { q: "¿Cómo puedo reducir mis costos de cierre?", a: "Compara varios prestamistas, negocia la comisión de originación, evita puntos de descuento innecesarios y pregunta si el vendedor puede cubrir parte de los costos." },
    { q: "¿Qué son los prepagos en el cierre?", a: "Son montos de seguro e impuesto predial que pagas por adelantado para financiar tu cuenta de depósito en garantía (escrow)." },
    { q: "¿Los costos de cierre son negociables?", a: "Sí, algunas comisiones del prestamista y del título pueden negociarse, y también puedes pedir que el vendedor contribuya." },
    { q: "¿Cuánto efectivo necesito para cerrar la compra de una casa?", a: "Necesitas el pago inicial más los costos de cierre totales; usa esta calculadora para estimar ambos montos combinados." },
    { q: "¿Los costos de cierre son los mismos para una refinanciación?", a: "Son similares pero generalmente no incluyen pago inicial ni algunos costos asociados a la compra, como comisiones de agente inmobiliario." },
    { q: "¿Qué documento me muestra los costos de cierre exactos?", a: "El prestamista debe entregarte una Estimación de Préstamo (Loan Estimate) y luego una Divulgación de Cierre (Closing Disclosure) con los montos finales." },
  ],

  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Pago Inicial", "Calculadora de Relación Préstamo-Valor (LTV)", "Calculadora de Relación Deuda-Ingreso (DTI)"],

  youMayLike: pickYouMayLike("closing-costs-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Costos de Cierre",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};