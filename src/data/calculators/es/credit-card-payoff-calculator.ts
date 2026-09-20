// src/data/calculators/es/credit-card-payoff-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const creditCardPayoffCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Pago de Tarjeta de Crédito 2026",
    metaDescription: "Calcula cuánto tardarás en pagar tu tarjeta y cuánto ahorrarías en interés comparado con pagar solo el mínimo.",
    canonicalSlug: "/es/finance/credit-card-payoff-calculator",
    ogTitle: "Calculadora de Pago de Tarjeta de Crédito",
    ogDescription: "Compara tu plan de pago fijo contra pagar solo el mínimo y descubre cuánto ahorras.",
    twitterTitle: "Calculadora de Pago de Tarjeta 2026",
    twitterDescription: "Calcula tu ahorro en interés al pagar más del mínimo.",
  },
  hero: {
    text: "La Calculadora de Pago de Tarjeta de Crédito compara tu plan de pago fijo mes a mes contra pagar solo el mínimo, mostrando cuánto tiempo e interés te ahorras.",
  },
  about: {
    text: `Pagar solo el mínimo de tu tarjeta de crédito extiende la deuda por años y multiplica el interés total pagado, ya que el mínimo suele cubrir apenas el interés generado cada mes.

Esta calculadora simula tu saldo mes a mes aplicando tu TAE, comparando dos escenarios: tu pago fijo elegido versus pagar solo el mínimo requerido por el banco, mostrando el interés ahorrado al elegir el pago más alto.

Limitaciones: asume un pago fijo constante y no incluye nuevos cargos a la tarjeta ni cambios en la tasa mínima de pago del emisor.`,
  },
  formula: {
    formula: "Interés Ahorrado = Interés Total (Pago Mínimo) − Interés Total (Pago Fijo)",
    variables: [
      { symbol: "Tiempo de Pago", meaning: "Meses necesarios para liquidar el saldo con tu pago fijo elegido" },
      { symbol: "Interés Total", meaning: "Suma de todo el interés pagado durante el período de pago elegido" },
      { symbol: "Interés Ahorrado", meaning: "Diferencia entre el interés que pagarías con el mínimo versus con tu pago fijo" },
    ],
    explanation: "Se simulan dos escenarios mes a mes: uno usando tu pago fijo y otro usando solo el pago mínimo estimado; la diferencia en interés total pagado entre ambos escenarios es el interés ahorrado.",
    interpretation: "Por ejemplo, con un saldo de $5,000 al 24% de TAE, pagar $200 fijos en lugar de solo el mínimo puede ahorrarte miles de dólares en interés y años de pagos.",
  },
  steps: [
    "Ingresa tu saldo actual de la tarjeta.",
    "Ingresa la TAE de tu tarjeta.",
    "Ingresa el pago mensual fijo que planeas hacer.",
    "Haz clic en Calcular para ver tu tiempo de pago, interés total y cuánto ahorras vs. el mínimo.",
  ],
  examples: [
    { inputs: "Saldo: $5,000, TAE: 24%, Pago Fijo: $200", result: "Interés Ahorrado vs Mínimo: ~$4,500", explanation: "Un pago fijo moderado ahorra miles frente a pagar solo el mínimo." },
    { inputs: "Saldo: $8,000, TAE: 21%, Pago Fijo: $350", result: "Interés Ahorrado vs Mínimo: ~$6,200", explanation: "Un saldo mayor con pago fijo alto reduce drásticamente el interés total." },
    { inputs: "Saldo: $2,000, TAE: 26%, Pago Fijo: $100", result: "Interés Ahorrado vs Mínimo: ~$900", explanation: "Incluso un pago moderado sobre un saldo pequeño genera ahorro significativo." },
  ],
  practicalUses: [
    "Ver el impacto real de pagar más del mínimo cada mes",
    "Motivarte a aumentar tu pago mensual mostrando el ahorro concreto en dólares",
    "Comparar distintos montos de pago fijo antes de comprometerte a un plan",
    "Planear una estrategia de salida de deuda con una fecha objetivo",
  ],
  expertTips: [
    "El pago mínimo de una tarjeta suele ser solo 1-3% del saldo, lo que apenas cubre el interés generado — pagar más siempre reduce el costo total.",
    "Automatiza un pago fijo mayor al mínimo cada mes para evitar la tentación de pagar solo lo mínimo.",
    "Si tienes varias tarjetas, prioriza pagar más en la de mayor TAE primero (método avalancha) para ahorrar más interés.",
    "Revisa el interés ahorrado en esta calculadora como motivación concreta para mantener el pago fijo más alto.",
  ],
  commonMistakes: [
    { mistake: "Asumir que el pago mínimo es una forma razonable de pagar la tarjeta", fix: "El pago mínimo extiende la deuda por años y multiplica el interés total — usa siempre un pago fijo más alto si es posible." },
    { mistake: "No comparar el interés ahorrado antes de decidir el monto del pago", fix: "Prueba distintos montos de pago fijo en la calculadora para ver el punto óptimo entre presupuesto y ahorro de interés." },
    { mistake: "Ignorar el efecto de subir el pago fijo aunque sea poco", fix: "Incluso un aumento pequeño en el pago mensual puede generar un ahorro considerable en interés a largo plazo." },
  ],
  faq: [
    { q: "¿Cuánto ahorro pagando más del mínimo en mi tarjeta de crédito?", a: "Depende de tu saldo, TAE y el monto adicional que pagues; esta calculadora muestra el ahorro exacto en interés comparando ambos escenarios." },
    { q: "¿Cómo se calcula el pago mínimo de una tarjeta de crédito?", a: "Generalmente es un porcentaje del saldo (1-3%) o un monto fijo mínimo, lo que sea mayor, establecido por el emisor de la tarjeta." },
    { q: "¿Por qué pagar solo el mínimo es una mala idea?", a: "Porque el mínimo apenas cubre el interés generado, dejando muy poco para reducir el capital, lo que extiende la deuda por años y aumenta el interés total pagado." },
    { q: "¿Cuánto tiempo tardaré en pagar mi tarjeta con un pago fijo?", a: "Depende de tu saldo, TAE y el monto de tu pago fijo; ingresa estos valores en la calculadora para ver el tiempo exacto." },
    { q: "¿Qué es el método avalancha para pagar deudas?", a: "Es una estrategia donde priorizas pagar primero la deuda con la TAE más alta mientras mantienes los pagos mínimos en las demás, ahorrando más interés en total." },
    { q: "¿Cuánto interés ahorro si aumento mi pago mensual en $50?", a: "Prueba distintos montos en esta calculadora para comparar el interés total y el tiempo de pago con cada nivel de pago fijo." },
    { q: "¿Esta calculadora considera cambios en la TAE con el tiempo?", a: "No, asume una TAE constante durante todo el período; si tu tarjeta tiene una tasa promocional que expira, el resultado real puede variar." },
    { q: "¿Qué pasa si sigo usando la tarjeta mientras la pago?", a: "Los nuevos cargos aumentan el saldo y el interés generado, alargando el tiempo de pago; esta calculadora no incluye compras futuras." },
    { q: "¿Cuál es la diferencia entre esta calculadora y la Calculadora de Interés de Tarjeta de Crédito?", a: "Esta calculadora además compara tu pago fijo contra el escenario de pagar solo el mínimo, mostrando el ahorro específico en interés y tiempo." },
    { q: "¿Debo pagar mi tarjeta de crédito antes de invertir?", a: "Generalmente sí, ya que la TAE de una tarjeta suele ser más alta que el rendimiento esperado de la mayoría de las inversiones." },
    { q: "¿Cómo puedo motivarme a pagar más del mínimo cada mes?", a: "Usa esta calculadora para ver el ahorro concreto en dólares e intenta automatizar un pago fijo mayor al mínimo requerido." },
  ],
  relatedCalculators: ["Calculadora de Interés de Tarjeta de Crédito", "Calculadora de Consolidación de Deudas", "Calculadora de Pago de Deuda (Snowball/Avalanche)", "Calculadora de Presupuesto"],
  youMayLike: pickYouMayLike("credit-card-payoff-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Pago de Tarjeta de Crédito",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};