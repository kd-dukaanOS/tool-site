// src/data/calculators/es/credit-card-interest-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const creditCardInterestCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Interés de Tarjeta de Crédito 2026",
    metaDescription: "Calcula cuánto tiempo tardarás en pagar tu tarjeta de crédito y cuánto interés pagarás según tu saldo, TAE y pago mensual.",
    canonicalSlug: "/es/finance/credit-card-interest-calculator",
    ogTitle: "Calculadora de Interés de Tarjeta de Crédito",
    ogDescription: "Descubre cuánto interés pagarás y cuánto tardarás en liquidar tu tarjeta de crédito.",
    twitterTitle: "Calculadora de Interés de Tarjeta 2026",
    twitterDescription: "Calcula el interés y tiempo de pago de tu tarjeta al instante.",
  },
  hero: {
    text: "La Calculadora de Interés de Tarjeta de Crédito muestra cuánto tiempo tardarás en pagar tu saldo con un pago mensual fijo, junto con el interés total que pagarás según la TAE de tu tarjeta.",
  },
  about: {
    text: `Las tarjetas de crédito cobran interés sobre el saldo pendiente cada mes según su Tasa Anual Efectiva (TAE). Si solo pagas una parte del saldo, el interés se sigue acumulando sobre lo que queda pendiente.

Esta calculadora proyecta mes a mes cómo se reduce tu saldo con un pago fijo, mostrando el tiempo total para liquidarlo, el interés total pagado y el monto total desembolsado (capital más interés).

Limitaciones: asume un pago mensual fijo y una TAE constante; no considera nuevos cargos a la tarjeta ni cambios de tasa promocional.`,
  },
  formula: {
    formula: "Interés Mensual = Saldo Pendiente × (TAE / 12)",
    variables: [
      { symbol: "TAE", meaning: "Tasa Anual Efectiva de la tarjeta de crédito" },
      { symbol: "Tiempo para Pagar", meaning: "Número de meses necesarios para llevar el saldo a cero con el pago mensual ingresado" },
      { symbol: "Interés Total", meaning: "Suma de todo el interés cobrado durante el período de pago" },
    ],
    explanation: "Cada mes se calcula el interés sobre el saldo restante, se resta el pago mensual (una parte cubre el interés y el resto reduce el capital), y se repite hasta que el saldo llega a cero.",
    interpretation: "Por ejemplo, con un saldo de $5,000 al 22.9% de TAE y un pago mensual de $200, tardarías varios años en pagar la tarjeta y pagarías miles de dólares en interés adicional.",
  },
  steps: [
    "Ingresa tu saldo actual de la tarjeta.",
    "Ingresa la TAE de tu tarjeta.",
    "Ingresa el pago mensual fijo que planeas hacer.",
    "Haz clic en Calcular para ver el tiempo de pago, el interés total y el pago total.",
  ],
  examples: [
    { inputs: "Saldo: $5,000, TAE: 22.9%, Pago Mensual: $200", result: "Tiempo: ~2 años 9 meses | Interés Total: ~$1,530", explanation: "Un pago moderado sobre un saldo típico de tarjeta de crédito." },
    { inputs: "Saldo: $10,000, TAE: 19.9%, Pago Mensual: $300", result: "Tiempo: ~3 años 7 meses | Interés Total: ~$2,830", explanation: "Un saldo mayor con un pago más alto reduce el tiempo total, pero el interés sigue siendo considerable." },
    { inputs: "Saldo: $3,000, TAE: 24.9%, Pago Mensual: $100", result: "Tiempo: ~3 años 5 meses | Interés Total: ~$1,150", explanation: "Un pago mínimo relativo alarga considerablemente el tiempo de pago." },
  ],
  practicalUses: [
    "Calcular cuánto interés extra pagarás si solo haces pagos mínimos",
    "Comparar cuánto tiempo ahorrarías aumentando tu pago mensual",
    "Decidir si conviene transferir el saldo a una tarjeta con TAE más baja",
    "Planear un presupuesto realista para salir de deuda de tarjeta de crédito",
  ],
  expertTips: [
    "Aumentar tu pago mensual, incluso en una cantidad pequeña, puede reducir significativamente el interés total pagado.",
    "Si tu pago mensual apenas cubre el interés, el saldo nunca bajará — verifica que tu pago sea mayor al cargo de interés mensual.",
    "Considera una tarjeta de transferencia de saldo con 0% de interés introductorio si calificas, para reducir el costo total.",
    "Paga siempre más del mínimo requerido por el emisor de la tarjeta para evitar años de pagos e interés acumulado.",
  ],
  commonMistakes: [
    { mistake: "Pagar solo el mínimo mensual indicado por el banco", fix: "El pago mínimo suele cubrir apenas el interés, extendiendo la deuda por años; usa un pago fijo más alto siempre que puedas." },
    { mistake: "No verificar si el pago mensual cubre el interés generado", fix: "Si tu pago es menor al interés mensual, el saldo nunca se reducirá — esta calculadora te avisará si eso ocurre." },
    { mistake: "Ignorar el efecto compuesto del interés en tarjetas de crédito", fix: "El interés se cobra sobre el saldo restante cada mes, por lo que reducir el saldo rápido ahorra interés futuro." },
  ],
  faq: [
    { q: "¿Cómo se calcula el interés de una tarjeta de crédito?", a: "Se multiplica el saldo pendiente por la TAE dividida entre 12 para obtener el interés mensual, que se suma al saldo antes de aplicar tu pago." },
    { q: "¿Qué es la TAE en una tarjeta de crédito?", a: "La Tasa Anual Efectiva es el costo anual del crédito expresado como porcentaje, incluyendo el interés que se cobra sobre el saldo pendiente." },
    { q: "¿Por qué tarda tanto en pagarse una tarjeta con el pago mínimo?", a: "Porque el pago mínimo suele cubrir apenas el interés generado, dejando muy poco para reducir el capital, lo que extiende la deuda por años." },
    { q: "¿Cuánto interés pagaré en total por mi tarjeta de crédito?", a: "Depende de tu saldo, TAE y pago mensual; esta calculadora te muestra el interés total exacto según esos tres valores." },
    { q: "¿Qué pasa si mi pago mensual es menor al interés generado?", a: "El saldo nunca se reducirá y seguirá creciendo; necesitas aumentar tu pago por encima del cargo de interés mensual." },
    { q: "¿Cómo puedo pagar mi tarjeta de crédito más rápido?", a: "Aumenta tu pago mensual todo lo posible, evita nuevos cargos, y considera transferir el saldo a una tarjeta con menor TAE si calificas." },
    { q: "¿La TAE es la misma que la tasa de interés mensual?", a: "No, la TAE es la tasa anual; para obtener la tasa mensual aproximada se divide entre 12." },
    { q: "¿Esta calculadora considera cargos anuales de la tarjeta?", a: "No, solo calcula el interés sobre el saldo según la TAE y el pago mensual ingresado, sin incluir cuotas anuales u otros cargos." },
    { q: "¿Qué es mejor: pagar más cada mes o transferir el saldo?", a: "Ambas estrategias reducen el interés total; transferir a una tarjeta con TAE más baja puede ayudar aún más si el pago mensual se mantiene igual." },
    { q: "¿Esta calculadora funciona para cualquier tarjeta de crédito?", a: "Sí, siempre que conozcas tu saldo actual, la TAE de tu tarjeta y el pago mensual que planeas realizar." },
    { q: "¿Cuánto debo pagar cada mes para salir de deuda en 2 años?", a: "Ajusta el pago mensual en la calculadora hasta que el tiempo de pago mostrado sea de aproximadamente 24 meses." },
  ],
  relatedCalculators: ["Calculadora de Pago de Tarjeta de Crédito", "Calculadora de Consolidación de Deudas", "Calculadora de Pago de Deuda (Snowball/Avalanche)", "Calculadora de Préstamo Personal"],
  youMayLike: pickYouMayLike("credit-card-interest-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Interés de Tarjeta de Crédito",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};