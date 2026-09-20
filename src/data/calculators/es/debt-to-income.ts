// src/data/calculators/es/debt-to-income.ts
import { pickYouMayLike } from "../../calculator-pool";

export const debtToIncomeCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Deuda a Ingresos (DTI) — Califica para una Hipoteca",
    metaDescription: "Calcula tu relación deuda a ingresos (DTI) inicial y total para saber si calificas para una hipoteca. Calculadora gratis con umbrales estándar de prestamistas.",
    canonicalSlug: "/es/finance/debt-to-income",
    ogTitle: "Calculadora de Deuda a Ingresos (DTI)",
    ogDescription: "Descubre tu relación DTI y qué tan bien calificas para un préstamo hipotecario.",
    twitterTitle: "Calculadora de DTI Gratis",
    twitterDescription: "Calcula tu relación deuda a ingresos, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Deuda a Ingresos (DTI) calcula tu relación de deuda inicial (solo vivienda) y total (toda tu deuda) frente a tu ingreso mensual bruto — el número clave que los prestamistas usan para decidir si calificas para una hipoteca.",
  },

  about: {
    text: `El DTI (Debt-to-Income Ratio), o relación deuda a ingresos, es el porcentaje de tu ingreso mensual bruto que se destina a pagar deudas. Los prestamistas hipotecarios lo usan como uno de los factores principales para decidir cuánto préstamo puedes calificar.

Esta calculadora te da dos números: tu DTI inicial (front-end), que solo considera tu pago de vivienda, y tu DTI total (back-end), que incluye todas tus deudas mensuales — préstamo de auto, préstamos estudiantiles, tarjetas de crédito y otras deudas.

La mayoría de los prestamistas prefiere un DTI inicial por debajo del 28% y un DTI total por debajo del 36%, aunque algunos programas de préstamo aceptan hasta 43% o incluso 50% en ciertos casos.`,
  },

  formula: {
    formula: "DTI = (Pagos de Deuda Mensuales ÷ Ingreso Mensual Bruto) × 100",
    variables: [
      { symbol: "DTI Inicial (Front-End)", meaning: "Solo el pago de vivienda dividido entre el ingreso bruto" },
      { symbol: "DTI Total (Back-End)", meaning: "Todos los pagos de deuda mensuales, incluida la vivienda, divididos entre el ingreso bruto" },
    ],
    explanation: "Se suman todos tus pagos mensuales de deuda (vivienda, auto, préstamos estudiantiles, tarjetas de crédito y otras deudas) y se dividen entre tu ingreso mensual bruto para obtener el porcentaje.",
    interpretation: "Por ejemplo, con un ingreso bruto de $6,000, un pago de vivienda de $1,500 y otras deudas de $500, el DTI inicial es 25% y el DTI total es 33% — ambos dentro de rangos favorables para la mayoría de los prestamistas.",
  },

  steps: [
    "Ingresa tu ingreso mensual bruto (antes de impuestos).",
    "Ingresa tu pago total de vivienda mensual.",
    "Ingresa tus otros pagos de deuda: préstamo de auto, préstamo estudiantil, tarjetas de crédito y otras deudas.",
    "Haz clic en Calcular.",
    "Revisa tu DTI inicial, tu DTI total y tu calificación general.",
  ],

  examples: [
    { inputs: "Ingreso: $6,000/mes, Vivienda: $1,500, Otras Deudas: $500", result: "DTI Inicial: 25%, DTI Total: 33%", explanation: "Un perfil sólido que probablemente calificaría fácilmente para la mayoría de las hipotecas." },
    { inputs: "Ingreso: $4,500/mes, Vivienda: $1,400, Otras Deudas: $900", result: "DTI Inicial: 31%, DTI Total: 51%", explanation: "Un DTI total alto que podría dificultar la calificación sin reducir otras deudas primero." },
    { inputs: "Ingreso: $8,000/mes, Vivienda: $2,000, Otras Deudas: $600", result: "DTI Inicial: 25%, DTI Total: 32.5%", explanation: "Un perfil de ingreso alto con deuda controlada, favorable para calificar." },
  ],

  practicalUses: [
    "Saber si calificas para una hipoteca antes de solicitarla",
    "Entender cuánto de tu ingreso se destina a pagar deudas",
    "Planear cuánta deuda pagar antes de solicitar un préstamo",
    "Comparar tu perfil financiero contra los umbrales típicos de los prestamistas",
    "Decidir si conviene esperar y reducir deudas antes de comprar una casa",
  ],

  expertTips: [
    "Un DTI inicial (vivienda) por debajo del 28% y un DTI total por debajo del 36% suelen calificar para las mejores tasas hipotecarias.",
    "Pagar o reducir deudas de tarjetas de crédito antes de solicitar una hipoteca puede mejorar significativamente tu DTI total.",
    "Algunos programas de préstamo (como FHA en EE.UU.) aceptan DTI de hasta 43-50% con otros factores compensatorios.",
    "El DTI no incluye gastos como comida, servicios o entretenimiento — solo pagos de deuda fijos y reportados a burós de crédito.",
    "Aumentar tu ingreso (como un segundo trabajo verificable) también mejora tu DTI, no solo reducir deudas.",
  ],

  commonMistakes: [
    { mistake: "Confundir el DTI con tu puntaje de crédito", fix: "Son métricas distintas: el DTI mide cuánto de tu ingreso va a deudas, el puntaje de crédito mide tu historial de pago." },
    { mistake: "No incluir todas las deudas mensuales en el cálculo", fix: "Incluye préstamos de auto, estudiantiles, pagos mínimos de tarjetas y cualquier otra deuda recurrente." },
    { mistake: "Usar el ingreso neto en lugar del ingreso bruto", fix: "Los prestamistas calculan el DTI sobre tu ingreso bruto (antes de impuestos), no sobre tu sueldo neto." },
    { mistake: "Pensar que un DTI bajo garantiza la aprobación del préstamo", fix: "El DTI es un factor importante, pero los prestamistas también consideran tu puntaje de crédito, historial de empleo y enganche." },
    { mistake: "No recalcular el DTI después de adquirir una deuda nueva", fix: "Cualquier deuda nueva (como un préstamo de auto) cambia tu DTI y puede afectar tu elegibilidad hipotecaria." },
  ],

  faq: [
    { q: "¿Qué es la relación deuda a ingresos (DTI)?", a: "Es el porcentaje de tu ingreso mensual bruto que se destina a pagar deudas, usado por los prestamistas para evaluar tu capacidad de pago de una hipoteca." },
    { q: "¿Cuál es un buen DTI para calificar para una hipoteca?", a: "Generalmente un DTI inicial por debajo de 28% y un DTI total por debajo de 36% se consideran excelentes; muchos prestamistas aceptan hasta 43%." },
    { q: "¿Cuál es la diferencia entre DTI inicial y DTI total?", a: "El DTI inicial (front-end) solo considera tu pago de vivienda; el DTI total (back-end) incluye todas tus deudas mensuales, incluida la vivienda." },
    { q: "¿Cómo puedo bajar mi relación deuda a ingresos?", a: "Puedes pagar deudas existentes, evitar adquirir deuda nueva antes de solicitar un préstamo, o aumentar tu ingreso verificable." },
    { q: "¿Qué deudas se incluyen en el cálculo del DTI?", a: "Se incluyen pagos de vivienda, préstamos de auto, préstamos estudiantiles, pagos mínimos de tarjetas de crédito y otras deudas recurrentes reportadas." },
    { q: "¿El DTI incluye gastos como comida o servicios?", a: "No, el DTI solo considera pagos de deuda fijos y reportados a burós de crédito, no gastos de vida diaria." },
    { q: "¿Puedo calificar para una hipoteca con un DTI alto?", a: "Es posible con ciertos programas de préstamo y factores compensatorios como un enganche grande o excelente historial crediticio, pero es más difícil y las tasas suelen ser peores." },
    { q: "¿El DTI usa mi ingreso bruto o neto?", a: "Se calcula sobre tu ingreso bruto mensual, es decir, antes de impuestos y otras deducciones." },
    { q: "¿Qué es un DTI de 43%?", a: "Es el umbral máximo típico usado en muchos programas de préstamo hipotecario calificado (Qualified Mortgage) en Estados Unidos." },
    { q: "¿Cómo afecta un préstamo de auto nuevo a mi DTI?", a: "Aumenta tu DTI total al sumar un nuevo pago mensual de deuda; considera el impacto antes de financiar un vehículo si planeas solicitar una hipoteca pronto." },
  ],

  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Bola de Nieve", "Calculadora de Presupuesto", "Calculadora de Asequibilidad de Vivienda"],

  youMayLike: pickYouMayLike("debt-to-income"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Deuda a Ingresos (DTI)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};