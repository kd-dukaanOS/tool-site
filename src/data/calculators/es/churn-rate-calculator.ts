// src/data/calculators/es/churn-rate-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const churnRateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Tasa de Abandono (Churn Rate) 2026",
    metaDescription: "Calcula tu tasa de abandono de clientes e ingresos (churn rate) para SaaS, con proyección de clientes restantes. Gratis e instantáneo.",
    canonicalSlug: "/es/business/churn-rate-calculator",
    ogTitle: "Calculadora de Tasa de Abandono",
    ogDescription: "Mide tu abandono de clientes, abandono de ingresos y abandono neto de ingresos.",
    twitterTitle: "Calculadora de Churn Rate 2026",
    twitterDescription: "Calcula tu tasa de abandono SaaS al instante.",
  },

  hero: {
    text: "La Calculadora de Tasa de Abandono mide cuántos clientes e ingresos pierdes en un período, mostrando tu abandono de clientes, abandono de ingresos y abandono neto de ingresos, junto con una proyección de clientes restantes.",
  },

  about: {
    text: `El churn rate (tasa de abandono) es una de las métricas más importantes para negocios de suscripción o SaaS, ya que mide qué tan rápido pierdes clientes o ingresos recurrentes.

Esta calculadora separa el abandono de clientes (cuántos clientes cancelaron) del abandono de ingresos (cuánto MRR perdiste) y calcula el abandono neto de ingresos considerando también la expansión (upsells) de clientes existentes.

Limitaciones: esta herramienta asume una tasa de abandono constante para la proyección; no considera cambios estacionales, nuevas adquisiciones de clientes, ni variaciones futuras en la tasa.`,
  },

  formula: {
    formula: "Tasa de Abandono de Clientes = (Clientes Perdidos / Clientes al Inicio) × 100",
    variables: [
      { symbol: "Tasa de Abandono de Ingresos", meaning: "MRR perdido dividido entre el MRR inicial, expresado en porcentaje" },
      { symbol: "Tasa Neta de Abandono de Ingresos", meaning: "(MRR Perdido − MRR de Expansión) dividido entre el MRR inicial" },
      { symbol: "Clientes Proyectados Restantes", meaning: "Clientes restantes tras aplicar la tasa de abandono mensual de forma compuesta durante el período de proyección" },
    ],
    explanation: "El abandono de clientes mide la pérdida en número de cuentas, mientras que el abandono de ingresos mide el impacto económico; el abandono neto de ingresos resta la expansión de clientes existentes, pudiendo incluso ser negativo (expansión neta).",
    interpretation: "Por ejemplo, con 200 clientes al inicio y 10 perdidos, la tasa de abandono de clientes es del 5%; si el MRR inicial es $100,000 con $6,000 perdidos y $3,000 de expansión, el abandono neto de ingresos es del 3%.",
  },

  steps: [
    "Ingresa el número de clientes al inicio del período y los clientes perdidos.",
    "Ingresa tu MRR inicial, el MRR perdido por cancelaciones y el MRR de expansión.",
    "Ingresa el número de meses para la proyección.",
    "Haz clic en Calcular para ver tu abandono de clientes, de ingresos, neto y la proyección.",
  ],

  examples: [
    { inputs: "Clientes: 200, Perdidos: 10, MRR: $100,000, MRR Perdido: $6,000, Expansión: $3,000, Proyección: 12 meses", result: "Abandono de Clientes: 5% | Abandono Neto de Ingresos: 3%", explanation: "Un SaaS con abandono moderado parcialmente compensado por expansión." },
    { inputs: "Clientes: 500, Perdidos: 50, MRR: $250,000, MRR Perdido: $30,000, Expansión: $5,000, Proyección: 6 meses", result: "Abandono de Clientes: 10% | Abandono Neto de Ingresos: 10%", explanation: "Un abandono alto de clientes con poca expansión que compense la pérdida." },
    { inputs: "Clientes: 1000, Perdidos: 20, MRR: $500,000, MRR Perdido: $10,000, Expansión: $25,000, Proyección: 12 meses", result: "Abandono de Clientes: 2% | Abandono Neto de Ingresos: negativo (expansión neta)", explanation: "Un negocio saludable donde la expansión de clientes existentes supera las pérdidas." },
  ],

  practicalUses: [
    "Medir la salud de retención de un negocio SaaS o de suscripción",
    "Comparar el abandono de clientes contra el abandono de ingresos para detectar si se pierden cuentas grandes o pequeñas",
    "Proyectar cuántos clientes quedarán si el abandono actual se mantiene constante",
    "Justificar inversión en retención de clientes ante inversionistas",
    "Evaluar si las estrategias de upsell están compensando las cancelaciones",
  ],

  expertTips: [
    "Un abandono neto de ingresos negativo (expansión neta) es la señal más fuerte de un negocio SaaS saludable — significa que creces incluso sin nuevos clientes.",
    "Compara siempre el abandono de clientes con el de ingresos: perder pocos clientes grandes puede doler más que perder muchos clientes pequeños.",
    "Un churn mensual del 5% equivale aproximadamente a perder más del 45% de tu base de clientes en un año si no cambia.",
    "Segmenta el churn por plan o segmento de cliente para identificar dónde se concentra el problema.",
    "Revisa el churn mensualmente, no solo anualmente, para detectar tendencias antes de que se agraven.",
  ],

  commonMistakes: [
    { mistake: "Calcular el churn solo con el número de clientes, ignorando el impacto en ingresos", fix: "Revisa siempre el abandono de ingresos junto al de clientes, ya que no todos los clientes valen lo mismo." },
    { mistake: "No restar la expansión de clientes existentes al calcular el churn neto", fix: "El abandono neto de ingresos debe considerar tanto las pérdidas como las expansiones (upsells) del mismo período." },
    { mistake: "Asumir que el churn se mantendrá constante para siempre", fix: "Usa la proyección como una referencia, no una garantía; el churn puede cambiar con nuevas estrategias de retención." },
    { mistake: "Comparar el churn mensual directamente con el churn anual sin ajustar", fix: "Un churn mensual del 5% no equivale a un churn anual del 60%; el efecto compuesto lo hace distinto — usa la proyección de esta calculadora." },
  ],

  faq: [
    { q: "¿Cómo se calcula la tasa de abandono de clientes (churn rate)?", a: "Se divide el número de clientes perdidos entre los clientes al inicio del período y se multiplica por 100 para obtener el porcentaje." },
    { q: "¿Qué es un buen churn rate para una empresa SaaS?", a: "Un churn mensual entre 3% y 5% se considera aceptable para SaaS de pequeñas y medianas empresas; para SaaS empresarial, se espera menos del 1% mensual." },
    { q: "¿Qué diferencia hay entre churn de clientes y churn de ingresos?", a: "El churn de clientes mide cuántas cuentas cancelan, mientras que el churn de ingresos mide cuánto MRR se pierde, lo cual puede diferir si los clientes que se van tienen planes distintos." },
    { q: "¿Qué es el churn neto de ingresos?", a: "Es el churn de ingresos menos la expansión (upsells) de clientes existentes; puede ser negativo si la expansión supera las pérdidas." },
    { q: "¿Qué significa un churn neto negativo?", a: "Significa que tus clientes existentes están gastando más de lo que pierdes por cancelaciones — una señal muy positiva de crecimiento saludable." },
    { q: "¿Cómo afecta el churn mensual al churn anual?", a: "El efecto es compuesto: un churn del 5% mensual resulta en una pérdida acumulada mayor al 45% anual si se mantiene constante, no simplemente 60%." },
    { q: "¿Qué es el MRR en el contexto del churn?", a: "El MRR (Ingreso Recurrente Mensual) es el ingreso predecible generado por suscripciones activas cada mes." },
    { q: "¿Cómo puedo reducir mi churn rate?", a: "Mejorando el onboarding, ofreciendo soporte proactivo, identificando señales tempranas de cancelación y ajustando precios o planes según el uso del cliente." },
    { q: "¿El churn rate incluye clientes que hacen downgrade?", a: "El churn de ingresos sí refleja downgrades como una reducción de MRR, aunque el cliente no cancele por completo su cuenta." },
    { q: "¿Cómo proyecto cuántos clientes tendré en el futuro con mi churn actual?", a: "Aplica tu tasa de churn mensual de forma compuesta sobre el número de meses de proyección para estimar los clientes restantes." },
    { q: "¿El churn rate es lo mismo que la tasa de retención?", a: "No, son complementarios: la tasa de retención es 100% menos la tasa de churn del mismo período." },
    { q: "¿Debo medir el churn mensual o anual?", a: "El churn mensual es más útil para detectar problemas rápidamente; el churn anual es útil para reportes a inversionistas o comparaciones de largo plazo." },
    { q: "¿Qué causa un alto churn de ingresos pero bajo churn de clientes?", a: "Generalmente significa que los clientes que cancelan tienen planes de mayor valor, aunque sean pocos en número." },
  ],

  relatedCalculators: ["Calculadora de MRR", "Calculadora de ARR", "Calculadora de CAC", "Calculadora de LTV (Valor de Vida del Cliente)"],

  youMayLike: pickYouMayLike("churn-rate-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Tasa de Abandono (Churn Rate)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};