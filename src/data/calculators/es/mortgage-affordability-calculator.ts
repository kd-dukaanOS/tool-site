// src/data/calculators/es/mortgage-affordability-calculator.ts
// NOTE: real slug is "mortgage-affordability-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const mortgageAffordabilityCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Capacidad Hipotecaria 2026",
    metaDescription: "Descubre cuánta casa puedes pagar según tus ingresos y deudas. Gratis, instantánea y basada en la regla 28/36.",
    canonicalSlug: "/es/finance/mortgage-affordability-calculator",
    ogTitle: "Calculadora de Capacidad Hipotecaria",
    ogDescription: "Descubre cuánta vivienda puedes pagar realmente según tus ingresos.",
    twitterTitle: "¿Cuánta Casa Puedo Pagar?",
    twitterDescription: "Calcula tu capacidad hipotecaria real al instante.",
  },
  hero: {
    text: "La Calculadora de Capacidad Hipotecaria estima cuánta vivienda puedes pagar realmente, usando la guía estándar 28/36 de deuda-ingreso que aplican los prestamistas hipotecarios.",
  },
  about: {
    text: `Determinar cuánta casa puedes pagar depende de más que solo tu ingreso: los prestamistas evalúan tu ingreso bruto, tus deudas mensuales existentes, tu pago inicial y la tasa de interés disponible para decidir cuánto préstamo pueden ofrecerte.

Esta calculadora usa la guía estándar 28/36 (costos de vivienda máximo 28% del ingreso bruto, deudas totales máximo 36%) para estimar el precio máximo de vivienda, el monto máximo de préstamo y tu pago mensual máximo recomendado.

Limitaciones: esta es una guía general basada en reglas estándar de la industria, no una decisión de préstamo real; la aprobación final depende de tu prestamista específico, tu perfil crediticio, tu historial laboral y otros factores individuales.`,
  },
  formula: {
    formula: "Pago Máximo de Vivienda = min(28% del Ingreso Mensual, 36% del Ingreso Mensual − Deudas Mensuales)",
    variables: [
      { symbol: "Ratio Front-End", meaning: "Porcentaje del ingreso bruto destinado solo a costos de vivienda (máximo 28%)" },
      { symbol: "Ratio Back-End", meaning: "Porcentaje del ingreso bruto destinado a todas las deudas, incluyendo vivienda (máximo 36%)" },
    ],
    explanation: "Se calcula el pago mensual máximo de vivienda como el menor entre el 28% del ingreso bruto mensual, o el 36% del ingreso menos tus deudas mensuales actuales; ese pago máximo, junto con la tasa de interés y el plazo, determina el monto máximo de préstamo y precio de vivienda.",
    interpretation: "Por ejemplo, con un ingreso anual de $85,000 y $400 de deudas mensuales, el factor limitante suele ser el ratio back-end (36%) si las deudas son significativas, resultando en un presupuesto de vivienda más conservador.",
  },
  steps: [
    "Ingresa tu ingreso bruto anual.",
    "Ingresa tus pagos de deuda mensuales (auto, estudiantiles, tarjetas, etc.).",
    "Ingresa el pago inicial que planeas dar.",
    "Ingresa la tasa de interés esperada y el plazo del préstamo en años.",
    "Opcionalmente, ingresa una estimación de impuesto predial y seguro mensual.",
    "Haz clic en Calcular para ver tu precio máximo de vivienda y monto de préstamo.",
  ],
  examples: [
    { inputs: "Ingreso: $85,000, Deudas: $400/mes, Enganche: $40,000, Tasa: 6.5%, Plazo: 30 años", result: "Precio máximo de vivienda estimado según el factor limitante (28% o 36%)", explanation: "Un perfil típico de comprador primerizo con deudas moderadas." },
    { inputs: "Ingreso: $120,000, Sin deudas, Enganche: $60,000, Tasa: 6%, Plazo: 30 años", result: "Mayor precio máximo de vivienda al no tener deudas que limiten el ratio back-end", explanation: "Sin deudas mensuales, el ratio front-end (28%) suele ser el factor limitante." },
    { inputs: "Ingreso: $60,000, Deudas: $800/mes, Enganche: $10,000, Tasa: 7%, Plazo: 30 años", result: "Precio máximo de vivienda reducido por el alto nivel de deuda", explanation: "Deudas mensuales altas reducen significativamente la capacidad hipotecaria disponible." },
  ],
  practicalUses: [
    "Estimar tu presupuesto realista antes de empezar a buscar casa",
    "Entender cómo tus deudas actuales afectan cuánto préstamo puedes calificar",
    "Comparar cómo cambia tu capacidad hipotecaria según distintas tasas de interés",
    "Decidir si pagar deudas antes de solicitar una hipoteca mejoraría tu presupuesto",
    "Planear cuánto pago inicial necesitas para alcanzar el precio de vivienda deseado",
  ],
  expertTips: [
    "Pagar deudas existentes antes de solicitar una hipoteca puede aumentar significativamente tu presupuesto máximo, ya que mejora tu ratio back-end.",
    "La regla 28/36 es una guía general; algunos prestamistas (especialmente con buen crédito) permiten ratios más altos, mientras que otros son más estrictos.",
    "Un pago inicial más alto reduce el monto del préstamo necesario, lo que puede ayudarte a calificar para una vivienda de mayor precio con el mismo ingreso.",
    "No olvides incluir impuesto predial y seguro de vivienda en tu estimación, ya que estos costos afectan tu ratio de deuda-ingreso real ante el prestamista.",
  ],
  commonMistakes: [
    { mistake: "Ignorar las deudas mensuales existentes al estimar el presupuesto", fix: "Incluye todas tus deudas (auto, estudiantiles, tarjetas) ya que afectan directamente tu ratio back-end y el monto máximo de préstamo." },
    { mistake: "No considerar el impuesto predial y seguro en el pago mensual", fix: "Agrega una estimación de estos costos, ya que los prestamistas los incluyen al calcular tu capacidad de pago real." },
    { mistake: "Asumir que el precio máximo calculado es lo que deberías gastar", fix: "El resultado es un límite máximo según reglas estándar; considera un presupuesto más conservador según tu comodidad financiera personal." },
    { mistake: "No actualizar el cálculo al cambiar la tasa de interés del mercado", fix: "La tasa de interés afecta directamente cuánto préstamo puedes pagar con el mismo pago mensual; recalcula si las tasas cambian." },
  ],
  faq: [
    { q: "¿Cómo se calcula cuánta casa puedo pagar?", a: "Se usa la guía 28/36: tus costos de vivienda no deben superar el 28% de tu ingreso bruto mensual, y tus deudas totales (incluyendo vivienda) no deben superar el 36%." },
    { q: "¿Qué es la regla 28/36 en hipotecas?", a: "Es una guía estándar de la industria hipotecaria donde el 28% del ingreso bruto es el límite recomendado para costos de vivienda, y el 36% es el límite para todas las deudas combinadas." },
    { q: "¿Cómo afectan mis deudas actuales a mi capacidad hipotecaria?", a: "Deudas mensuales más altas (auto, tarjetas, préstamos estudiantiles) reducen el espacio disponible en tu ratio back-end del 36%, disminuyendo el precio máximo de vivienda que puedes calificar." },
    { q: "¿Cuánto enganche necesito para comprar una casa?", a: "Depende del tipo de préstamo; algunos programas permiten desde 3-5% de enganche, mientras que un 20% evita el seguro hipotecario privado (PMI) en préstamos convencionales." },
    { q: "¿Qué significa el ratio front-end y back-end en una hipoteca?", a: "El ratio front-end mide solo tus costos de vivienda contra tu ingreso; el ratio back-end incluye vivienda más todas tus demás deudas mensuales." },
    { q: "¿Esta calculadora garantiza que seré aprobado para ese monto de préstamo?", a: "No, es una estimación basada en guías generales de la industria; la aprobación real depende de tu prestamista específico, historial crediticio y otros factores individuales." },
    { q: "¿Cómo afecta la tasa de interés a cuánta casa puedo pagar?", a: "Una tasa de interés más alta reduce el monto de préstamo que puedes obtener con el mismo pago mensual, disminuyendo tu precio máximo de vivienda." },
    { q: "¿Debo incluir el impuesto predial en mi cálculo de capacidad hipotecaria?", a: "Sí, el impuesto predial y el seguro de vivienda forman parte de tu pago mensual total y son considerados por los prestamistas al evaluar tu capacidad de pago." },
    { q: "¿Qué pasa si mi ratio de deuda-ingreso supera el 36%?", a: "Muchos prestamistas serán más estrictos o podrían rechazar el préstamo; pagar deudas existentes antes de solicitar la hipoteca puede ayudar a mejorar este ratio." },
    { q: "¿Puedo pagar más del 28% de mi ingreso en vivienda si no tengo otras deudas?", a: "Algunos prestamistas lo permiten si tu ratio back-end total sigue bajo el 36%, ya que sin otras deudas tienes más margen disponible en esa guía." },
    { q: "¿Cómo afecta el plazo del préstamo (15 vs 30 años) a mi capacidad hipotecaria?", a: "Un plazo más largo (30 años) reduce el pago mensual, permitiéndote calificar para un precio de vivienda mayor comparado con un plazo más corto de 15 años." },
    { q: "¿Qué ingresos se consideran para calcular mi capacidad hipotecaria?", a: "Generalmente se considera tu ingreso bruto anual estable, incluyendo salario, bonos regulares e ingresos de trabajo independiente verificables." },
    { q: "¿Los prestamistas siempre usan exactamente la regla 28/36?", a: "No siempre; algunos prestamistas y programas de préstamo (como FHA o VA) permiten ratios más altos según el perfil crediticio del solicitante." },
    { q: "¿Cómo puedo aumentar cuánta casa puedo pagar?", a: "Puedes aumentar tu presupuesto pagando deudas existentes, ahorrando un enganche mayor, mejorando tu tasa de interés disponible, o aumentando tus ingresos verificables." },
  ],
  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Amortización de Préstamo", "Calculadora LTV", "Calculadora de Pago Inicial"],
  youMayLike: pickYouMayLike("mortgage-affordability-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Capacidad Hipotecaria",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};