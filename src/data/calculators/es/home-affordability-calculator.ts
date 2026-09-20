// src/data/calculators/es/home-affordability-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const homeAffordabilityCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Asequibilidad de Vivienda 2026",
    metaDescription: "Descubre el precio máximo de vivienda que puedes pagar según tu ingreso, deudas y pago inicial. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/home-affordability-calculator",
    ogTitle: "Calculadora de Asequibilidad de Vivienda",
    ogDescription: "Calcula cuánta casa puedes pagar según tu ingreso y deudas actuales.",
    twitterTitle: "Calculadora de Asequibilidad de Vivienda 2026",
    twitterDescription: "Descubre cuánta casa puedes pagar al instante.",
  },
  hero: {
    text: "La Calculadora de Asequibilidad de Vivienda estima el precio máximo de vivienda que puedes pagar, limitando tu pago mensual total (capital, interés, impuesto predial y seguro) a tu relación deuda-ingreso objetivo.",
  },
  about: {
    text: `Los prestamistas hipotecarios generalmente limitan cuánto puedes pedir prestado según tu relación deuda-ingreso (DTI), que compara tus pagos de deuda mensuales totales (incluyendo la nueva hipoteca) con tu ingreso bruto mensual.

Esta calculadora usa tu ingreso anual, tus deudas mensuales actuales, tu pago inicial disponible y los términos del préstamo para determinar el precio máximo de vivienda que mantendría tu DTI dentro del límite que elijas, generalmente entre 36% y 43%.

Limitaciones: esta calculadora no incluye cuotas de HOA, seguro hipotecario privado (PMI), ni las reglas específicas de suscripción de cada prestamista, que pueden variar el resultado real que te aprueben.`,
  },
  formula: {
    formula: "Pago Máximo Mensual = (Ingreso Mensual × DTI Máximo) − Deudas Mensuales",
    variables: [
      { symbol: "PITI", meaning: "Capital, Interés, Impuesto Predial (Property Tax) y Seguro (Insurance) — el pago mensual total de vivienda" },
      { symbol: "DTI (Relación Deuda-Ingreso)", meaning: "Porcentaje de tu ingreso mensual bruto destinado a pagos de deuda, incluyendo la hipoteca" },
    ],
    explanation: "Se calcula el pago mensual máximo permitido según tu DTI objetivo y tus deudas actuales, se resta el impuesto predial y el seguro estimados de ese pago máximo, y el resto se usa para determinar el monto de préstamo e hipoteca que puedes pagar con capital e interés.",
    interpretation: "Por ejemplo, con un ingreso anual de $90,000, deudas mensuales de $400 y un DTI máximo del 36%, el pago mensual de vivienda permitido sería aproximadamente $2,300, lo que podría traducirse en una casa de $350,000-$400,000 dependiendo del pago inicial y la tasa de interés.",
  },
  steps: [
    "Ingresa tu ingreso anual y tus pagos de deuda mensuales actuales.",
    "Ingresa tu pago inicial disponible.",
    "Ingresa la tasa de interés esperada y el plazo del préstamo.",
    "Ingresa la tasa de impuesto predial y el seguro anual del hogar.",
    "Ajusta tu relación deuda-ingreso máxima objetivo (generalmente 36-43%).",
    "Haz clic en Calcular para ver el precio máximo de vivienda y el pago mensual estimado.",
  ],
  examples: [
    { inputs: "Ingreso: $90,000, Deudas: $400, Pago Inicial: $40,000, Tasa: 6.5%, Plazo: 30 años, DTI: 36%", result: "Precio Máximo de Vivienda: ~$380,000", explanation: "Un comprador con ingreso medio y deudas moderadas usando el límite de DTI convencional." },
    { inputs: "Ingreso: $120,000, Deudas: $800, Pago Inicial: $60,000, Tasa: 7%, Plazo: 30 años, DTI: 43%", result: "Precio Máximo de Vivienda: ~$450,000", explanation: "Un comprador con más deudas pero DTI máximo más flexible aprobado por su prestamista." },
    { inputs: "Ingreso: $60,000, Deudas: $200, Pago Inicial: $20,000, Tasa: 6%, Plazo: 30 años, DTI: 36%", result: "Precio Máximo de Vivienda: ~$250,000", explanation: "Un comprador primerizo con ingreso más bajo y pago inicial modesto." },
  ],
  practicalUses: [
    "Definir un presupuesto realista antes de comenzar a buscar vivienda",
    "Entender cómo tus deudas actuales afectan el monto de hipoteca que puedes calificar",
    "Comparar cuánto cambia tu poder de compra al ajustar el pago inicial o la tasa de interés",
    "Prepararte para una conversación con un prestamista con expectativas realistas",
    "Evaluar si pagar deudas existentes antes de comprar aumentaría significativamente tu presupuesto",
  ],
  expertTips: [
    "Reducir tus deudas mensuales antes de solicitar una hipoteca puede aumentar significativamente el precio de vivienda que calificas.",
    "Un DTI del 36% es el estándar convencional más conservador; algunos programas de préstamo permiten hasta 43-50% en ciertos casos.",
    "Esta calculadora no incluye PMI (seguro hipotecario privado), que suele aplicar si tu pago inicial es menor al 20% del precio de la vivienda.",
    "Solicita una preaprobación con un prestamista real para confirmar el monto exacto, ya que las reglas de suscripción varían entre instituciones.",
  ],
  commonMistakes: [
    { mistake: "Olvidar incluir el impuesto predial y el seguro en el pago mensual estimado", fix: "El pago mensual real de vivienda (PITI) incluye capital, interés, impuesto predial y seguro, no solo la parte de capital e interés." },
    { mistake: "Ignorar cómo las deudas actuales reducen el presupuesto para vivienda", fix: "Cada dólar de deuda mensual existente reduce directamente cuánto puedes destinar a tu pago de hipoteca dentro del mismo límite de DTI." },
    { mistake: "Usar un DTI máximo poco realista para tu perfil crediticio", fix: "Verifica con un prestamista qué DTI máximo realmente calificas, ya que depende de tu historial crediticio y tipo de préstamo." },
    { mistake: "No considerar el PMI si el pago inicial es menor al 20%", fix: "Si tu pago inicial es bajo, probablemente pagarás PMI adicional que esta calculadora no incluye automáticamente." },
  ],
  faq: [
    { q: "¿Cómo se calcula cuánta casa puedo pagar?", a: "Se calcula el pago mensual máximo permitido según tu ingreso y tu relación deuda-ingreso objetivo, y se traduce ese pago en un monto de préstamo e hipoteca correspondiente." },
    { q: "¿Qué es la relación deuda-ingreso (DTI) en una hipoteca?", a: "Es el porcentaje de tu ingreso mensual bruto que se destina a pagos de deuda, incluyendo la nueva hipoteca; los prestamistas suelen limitarlo entre 36% y 43%." },
    { q: "¿Qué es PITI?", a: "Son las siglas de Principal (capital), Interest (interés), Taxes (impuesto predial) e Insurance (seguro) — los cuatro componentes del pago mensual de vivienda." },
    { q: "¿Cómo afectan mis deudas actuales al precio de vivienda que puedo pagar?", a: "Cada deuda mensual existente reduce el espacio disponible dentro de tu límite de DTI para el pago de la hipoteca, disminuyendo el precio máximo de vivienda calificado." },
    { q: "¿Cuánto pago inicial necesito para comprar una casa?", a: "Varía según el tipo de préstamo; convencionales suelen requerir 5-20%, mientras que programas gubernamentales pueden requerir tan poco como 3-3.5%." },
    { q: "¿Qué es el seguro hipotecario privado (PMI)?", a: "Es un seguro adicional que los prestamistas requieren cuando el pago inicial es menor al 20% del precio de la vivienda, y esta calculadora no lo incluye automáticamente." },
    { q: "¿Cuál es un buen DTI para calificar para una hipoteca?", a: "Un DTI de 36% o menos se considera conservador y ampliamente aceptado; algunos préstamos permiten hasta 43-50% dependiendo del programa." },
    { q: "¿Cómo puedo aumentar el precio de vivienda que puedo pagar?", a: "Aumentando tu pago inicial, reduciendo tus deudas mensuales actuales, o mejorando tu ingreso antes de solicitar la hipoteca." },
    { q: "¿Esta calculadora incluye impuestos y seguro en el resultado?", a: "Sí, el pago mensual estimado (PITI) incluye capital, interés, impuesto predial y seguro del hogar según las tasas que ingreses." },
    { q: "¿Esta calculadora reemplaza una preaprobación de hipoteca?", a: "No, es una estimación general; solicita una preaprobación con un prestamista real para conocer el monto exacto que calificas." },
    { q: "¿Qué pasa si mi DTI actual ya es alto por otras deudas?", a: "Un DTI alto reduce significativamente el precio de vivienda que puedes calificar; considera pagar deudas existentes antes de solicitar una hipoteca." },
    { q: "¿El plazo del préstamo afecta cuánta casa puedo pagar?", a: "Sí, un plazo más largo (como 30 años en vez de 15) reduce el pago mensual, permitiéndote calificar para un precio de vivienda mayor con el mismo ingreso." },
    { q: "¿Debo usar el DTI de 36% o el máximo permitido por mi prestamista?", a: "Un DTI más conservador (36%) deja más margen en tu presupuesto mensual, aunque calificar para el máximo permitido puede darte más poder de compra si tu situación financiera es estable." },
  ],
  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Pago Inicial", "Calculadora de Costos de Cierre", "Calculadora de Relación Deuda-Ingreso (DTI)"],
  youMayLike: pickYouMayLike("home-affordability-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Asequibilidad de Vivienda",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};