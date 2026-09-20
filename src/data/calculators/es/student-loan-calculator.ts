// src/data/calculators/es/student-loan-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const studentLoanCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Préstamo Estudiantil — Pago Mensual e Interés",
    metaDescription: "Calcula tu pago mensual, interés total y tiempo de pago de un préstamo estudiantil. Ve cómo los pagos adicionales aceleran tu libertad de deuda.",
    canonicalSlug: "/es/finance/student-loan-calculator",
    ogTitle: "Calculadora de Préstamo Estudiantil",
    ogDescription: "Descubre tu pago mensual y cuánto interés pagarás en tu préstamo estudiantil.",
    twitterTitle: "Calculadora de Préstamo Estudiantil Gratis",
    twitterDescription: "Calcula tu pago de préstamo estudiantil, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Préstamo Estudiantil estima tu pago mensual, el interés total que pagarás, y cuánto tiempo tomará liquidar tu préstamo — mostrándote también cómo pagos adicionales mensuales pueden acortar significativamente ese plazo.",
  },

  about: {
    text: `Los préstamos estudiantiles suelen tener plazos largos (10 años o más), lo que significa que el interés acumulado a lo largo del tiempo puede representar una parte significativa del costo total del préstamo.

Esta calculadora usa el monto de tu préstamo, la tasa de interés anual, y el plazo en años, junto con cualquier pago mensual adicional que puedas aportar, para calcular tu pago mensual estándar, el interés total que pagarás, el total pagado durante todo el préstamo, y cuánto tiempo tomará liquidarlo completamente.

Ver el impacto de pagos adicionales es especialmente revelador: incluso montos modestos por encima del pago mínimo pueden reducir significativamente tanto el interés total pagado como los años restantes del préstamo.`,
  },

  formula: {
    formula: "Pago Mensual = [P × R × (1+R)^N] ÷ [(1+R)^N − 1]",
    variables: [
      { symbol: "P", meaning: "Monto del préstamo" },
      { symbol: "R", meaning: "Tasa de interés mensual (tasa anual ÷ 12 ÷ 100)" },
      { symbol: "N", meaning: "Número total de pagos mensuales según el plazo del préstamo" },
    ],
    explanation: "El pago mensual se calcula usando la fórmula estándar de amortización; si agregas un pago extra mensual, la simulación reduce el capital más rápido cada mes, acortando el tiempo total de pago y el interés acumulado.",
    interpretation: "Por ejemplo, un préstamo de $30,000 al 6% durante 10 años tiene un pago mensual de aproximadamente $333; agregando $100 extra al mes, el préstamo se liquida varios años antes con miles de dólares menos en interés total.",
  },

  steps: [
    "Ingresa el monto de tu préstamo estudiantil.",
    "Ingresa la tasa de interés anual.",
    "Ingresa el plazo del préstamo en años.",
    "Opcionalmente, ingresa un pago mensual adicional que planees aportar.",
    "Haz clic en Calcular.",
    "Revisa tu pago mensual, interés total, total pagado, y tiempo de pago.",
  ],

  examples: [
    { inputs: "Préstamo: $30,000, Tasa: 6%, Plazo: 10 años", result: "Pago Mensual: ~$333, Interés Total: ~$10,000", explanation: "Un préstamo estudiantil típico a plazo estándar sin pagos extra." },
    { inputs: "Préstamo: $30,000, Tasa: 6%, Plazo: 10 años, Extra: $100/mes", result: "Tiempo de Pago: ~7 años 3 meses, Interés Total: ~$6,900", explanation: "Un pago extra modesto ahorra más de 2 años y miles de dólares en interés." },
    { inputs: "Préstamo: $60,000, Tasa: 5.5%, Plazo: 15 años", result: "Pago Mensual: ~$490, Interés Total: ~$28,200", explanation: "Un préstamo mayor con un plazo más largo acumula un interés total considerable." },
  ],

  practicalUses: [
    "Estimar tu pago mensual antes de aceptar un préstamo estudiantil",
    "Ver cuánto interés total pagarás durante todo el préstamo",
    "Calcular cuánto tiempo y dinero ahorrarías haciendo pagos extra mensuales",
    "Comparar distintos plazos de préstamo y su impacto en el costo total",
    "Planear tu presupuesto mensual sabiendo tu pago fijo esperado",
  ],

  expertTips: [
    "Incluso $50-100 extra al mes pueden reducir significativamente el interés total y el tiempo de pago de tu préstamo estudiantil.",
    "Verifica si tu préstamo tiene penalización por pago anticipado antes de hacer pagos extra — la mayoría de los préstamos federales no la tienen, pero algunos privados sí.",
    "Un plazo más corto aumenta tu pago mensual pero reduce dramáticamente el interés total pagado durante la vida del préstamo.",
    "Si tienes varios préstamos estudiantiles, considera si consolidarlos o refinanciarlos podría ofrecer una tasa de interés más favorable.",
    "Prioriza pagar extra en el préstamo con la tasa de interés más alta si tienes múltiples préstamos, para maximizar el ahorro total en intereses.",
  ],

  commonMistakes: [
    { mistake: "Enfocarse solo en el pago mensual sin ver el interés total", fix: "Un plazo más largo reduce el pago mensual pero puede duplicar o triplicar el interés total pagado — compara ambas cifras." },
    { mistake: "No considerar pagos extra como estrategia de ahorro", fix: "Incluso pagos adicionales modestos pueden ahorrar miles de dólares en interés y años de pago — usa el simulador para ver el impacto real." },
    { mistake: "Ignorar si el préstamo tiene tasa fija o variable", fix: "Esta calculadora asume una tasa fija; los préstamos de tasa variable pueden cambiar tu pago mensual con el tiempo según las condiciones del mercado." },
    { mistake: "No verificar penalizaciones por pago anticipado", fix: "Confirma con tu prestamista que no existan cargos por liquidar el préstamo antes de tiempo antes de hacer pagos extra agresivos." },
  ],

  faq: [
    { q: "¿Cómo se calcula el pago mensual de un préstamo estudiantil?", a: "Se calcula usando la fórmula estándar de amortización, considerando el monto del préstamo, la tasa de interés mensual, y el número total de pagos según el plazo elegido." },
    { q: "¿Cuánto interés pagaré en total por mi préstamo estudiantil?", a: "Depende del monto, tasa de interés y plazo; préstamos con plazos más largos generalmente acumulan más interés total, aunque el pago mensual sea menor." },
    { q: "¿Cómo afectan los pagos extra a mi préstamo estudiantil?", a: "Los pagos adicionales reducen el capital pendiente más rápido, lo que disminuye el interés futuro acumulado y acorta el tiempo total de pago del préstamo." },
    { q: "¿Debo elegir un plazo más corto o más largo para mi préstamo estudiantil?", a: "Un plazo más corto aumenta tu pago mensual pero reduce significativamente el interés total pagado; un plazo más largo hace el pago mensual más manejable pero cuesta más en interés a largo plazo." },
    { q: "¿Hay penalización por pagar mi préstamo estudiantil antes de tiempo?", a: "La mayoría de los préstamos federales en Estados Unidos no tienen penalización por pago anticipado, pero algunos préstamos privados sí — verifica los términos de tu préstamo específico." },
    { q: "¿Qué pasa si no puedo pagar mi préstamo estudiantil mensual?", a: "Considera opciones como planes de pago basados en ingresos, aplazamiento, o refinanciamiento; contacta a tu prestamista antes de dejar de pagar para explorar alternativas disponibles." },
    { q: "¿Es mejor consolidar o refinanciar mis préstamos estudiantiles?", a: "Depende de tu situación: consolidar simplifica múltiples préstamos federales en uno solo, mientras que refinanciar (a menudo con un prestamista privado) puede ofrecer una tasa menor pero podría hacerte perder beneficios de préstamos federales." },
    { q: "¿Cuánto puedo ahorrar pagando $100 extra al mes en mi préstamo estudiantil?", a: "El ahorro exacto depende del monto y tasa de tu préstamo, pero incluso $100 extra mensuales pueden ahorrar miles de dólares en interés y reducir el plazo en varios años." },
  ],

  relatedCalculators: ["Calculadora de Bola de Nieve", "Calculadora de EMI", "Calculadora de Deuda a Ingresos", "Calculadora de Presupuesto"],

  youMayLike: pickYouMayLike("student-loan-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Préstamo Estudiantil",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};