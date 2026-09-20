// src/data/calculators/es/debt-consolidation-calculator.ts
// NOTE: real slug is "debt-consolidation-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const debtConsolidationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Consolidación de Deudas 2026",
    metaDescription: "Calcula si te conviene consolidar tus deudas en un solo préstamo. Compara interés y pago mensual gratis.",
    canonicalSlug: "/es/finance/debt-consolidation-calculator",
    ogTitle: "Calculadora de Consolidación de Deudas",
    ogDescription: "Descubre si un préstamo de consolidación te ahorra dinero frente a tus deudas actuales.",
    twitterTitle: "Calculadora de Consolidación de Deudas",
    twitterDescription: "Compara tus deudas actuales contra un préstamo de consolidación al instante.",
  },
  hero: {
    text: "La Calculadora de Consolidación de Deudas compara el costo total de tus deudas actuales contra un único préstamo de consolidación, mostrándote si realmente te conviene consolidar.",
  },
  about: {
    text: `Consolidar deudas significa reemplazar varias deudas (tarjetas de crédito, préstamos personales, etc.) por un solo préstamo nuevo, idealmente con una tasa de interés más baja y un solo pago mensual.

Esta calculadora suma tus deudas actuales con sus tasas de interés individuales, y las compara contra un préstamo de consolidación con la tasa y plazo que ingreses, mostrando la diferencia en interés total y en el pago mensual.

Limitaciones: no incluye comisiones de apertura del préstamo de consolidación ni penalizaciones por pago anticipado de tus deudas actuales; verifica esos costos adicionales con tu entidad financiera antes de decidir.`,
  },
  formula: {
    formula: "Interés Ahorrado = Interés Total Actual − Interés Total del Préstamo Consolidado",
    variables: [
      { symbol: "Interés Total Actual", meaning: "Interés que pagarías si sigues pagando cada deuda por separado a su tasa actual" },
      { symbol: "Interés Total Consolidado", meaning: "Interés total del nuevo préstamo único, según su tasa y plazo" },
    ],
    explanation: "Se calcula el interés total que pagarías manteniendo tus deudas actuales por separado, y se compara contra el interés total de un préstamo nuevo que las agrupe en un solo pago mensual.",
    interpretation: "Por ejemplo, si tus deudas actuales generarían $4,000 de interés total y el préstamo de consolidación solo $2,500, ahorrarías $1,500 al consolidar.",
  },
  steps: [
    "Agrega cada una de tus deudas actuales con su saldo, pago mínimo y tasa de interés.",
    "Ingresa la tasa de interés del préstamo de consolidación.",
    "Ingresa el plazo en años del préstamo de consolidación.",
    "Haz clic en Calcular.",
    "Compara el interés ahorrado (o el costo extra) y el nuevo pago mensual.",
  ],
  examples: [
    { inputs: "Deudas: $8,000 total al 24% promedio, Préstamo: 12% a 3 años", result: "Interés ahorrado: $1,850 aprox.", explanation: "Consolidar deudas de tarjeta de crédito de alto interés en un préstamo personal más barato." },
    { inputs: "Deudas: $3,000 al 10%, Préstamo: 15% a 5 años", result: "Consolidación cuesta más interés", explanation: "Si la tasa del préstamo nuevo es más alta o el plazo es muy largo, consolidar puede salir más caro." },
    { inputs: "Deudas: $15,000 en 4 tarjetas, Préstamo: 9% a 4 años", result: "Pago mensual único más bajo y menos interés total", explanation: "Simplifica múltiples pagos mensuales en uno solo con mejor tasa." },
  ],
  practicalUses: [
    "Decidir si conviene consolidar deudas de varias tarjetas de crédito",
    "Comparar el pago mensual actual contra el de un préstamo de consolidación",
    "Calcular cuánto interés se ahorraría al unificar deudas en una sola tasa",
    "Evaluar ofertas de préstamos personales para consolidación de deudas",
    "Planear un presupuesto mensual más simple con un solo pago de deuda",
  ],
  expertTips: [
    "Un préstamo de consolidación solo conviene si su tasa de interés es menor al promedio ponderado de tus deudas actuales.",
    "Cuidado con alargar demasiado el plazo del préstamo: un plazo más largo puede bajar el pago mensual pero aumentar el interés total pagado.",
    "Revisa si el préstamo de consolidación tiene comisión de apertura, ya que puede reducir el ahorro real.",
    "Evita volver a usar las tarjetas de crédito que consolidaste, ya que esto puede generar deuda adicional además del nuevo préstamo.",
  ],
  commonMistakes: [
    { mistake: "Consolidar sin comparar la tasa de interés real", fix: "Calcula el promedio ponderado de tus tasas actuales y compáralo directamente contra la tasa del préstamo nuevo." },
    { mistake: "Ignorar las comisiones de apertura del préstamo", fix: "Suma cualquier comisión al costo total del préstamo antes de decidir si consolidar conviene." },
    { mistake: "Elegir un plazo demasiado largo solo para bajar el pago mensual", fix: "Un plazo más corto puede tener un pago mensual mayor, pero reduce el interés total pagado." },
    { mistake: "Seguir usando las tarjetas de crédito ya consolidadas", fix: "Cierra o guarda las tarjetas consolidadas para evitar acumular deuda nueva encima del préstamo." },
  ],
  faq: [
    { q: "¿Qué es la consolidación de deudas?", a: "Es combinar varias deudas (tarjetas de crédito, préstamos personales) en un solo préstamo nuevo, idealmente con una tasa de interés más baja y un solo pago mensual." },
    { q: "¿La consolidación de deudas realmente ahorra dinero?", a: "Depende de la tasa de interés y plazo del nuevo préstamo comparado con tus deudas actuales; esta calculadora muestra el ahorro (o costo extra) exacto." },
    { q: "¿Qué tasa de interés necesito para que valga la pena consolidar?", a: "Necesitas una tasa menor al promedio ponderado de tus deudas actuales para que la consolidación reduzca el interés total pagado." },
    { q: "¿La consolidación de deudas afecta mi historial crediticio?", a: "Puede tener un impacto inicial al abrir un nuevo crédito, pero a largo plazo puede mejorar tu perfil si simplifica y reduce tus pagos." },
    { q: "¿Cuál es la diferencia entre consolidación de deudas y refinanciamiento?", a: "La consolidación combina varias deudas en un solo préstamo nuevo; el refinanciamiento reemplaza un préstamo existente por otro, generalmente con mejores condiciones." },
    { q: "¿Puedo consolidar deudas de tarjetas de crédito y préstamos personales juntos?", a: "Sí, un préstamo de consolidación puede cubrir distintos tipos de deuda siempre que se paguen por completo con el monto del nuevo préstamo." },
    { q: "¿Qué pasa si el plazo del préstamo de consolidación es muy largo?", a: "Un plazo más largo reduce el pago mensual pero puede aumentar el interés total pagado, incluso si la tasa es más baja." },
    { q: "¿Es mejor la consolidación de deudas o el método avalancha?", a: "La consolidación simplifica pagos con una nueva tasa fija; el método avalancha no requiere préstamo nuevo y prioriza pagar primero la deuda con mayor interés. Depende de tu tasa disponible y disciplina de pago." },
  ],
  relatedCalculators: ["Calculadora de Avalancha de Deudas", "Calculadora de Pago de Deudas", "Calculadora de Préstamo Personal", "Calculadora de Tarjeta de Crédito"],
  youMayLike: pickYouMayLike("debt-consolidation-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Consolidación de Deudas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};
