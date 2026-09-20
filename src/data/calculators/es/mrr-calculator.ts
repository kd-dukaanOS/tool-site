// src/data/calculators/es/mrr-calculator.ts
// NOTE: real slug is "mrr-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const mrrCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de MRR (Ingresos Recurrentes Mensuales) 2026",
    metaDescription: "Calcula tu MRR total, MRR neto nuevo y ARR proyectado a partir del movimiento mensual. Gratis.",
    canonicalSlug: "/es/business/mrr-calculator",
    ogTitle: "Calculadora de MRR",
    ogDescription: "Rastrea tu MRR y ARR proyectado al instante.",
    twitterTitle: "Calculadora de MRR para SaaS",
    twitterDescription: "Calcula tu MRR neto nuevo y ARR proyectado al instante.",
  },
  hero: {
    text: "La Calculadora de MRR desglosa el movimiento de tus Ingresos Recurrentes Mensuales (nuevo, expansión, perdido y contracción) para calcular tu MRR total actualizado, tu MRR neto nuevo y tu ARR proyectado.",
  },
  about: {
    text: `El MRR (Monthly Recurring Revenue) es la métrica central de cualquier negocio de suscripción o SaaS, ya que representa los ingresos predecibles que se repiten cada mes, y su movimiento mes a mes indica si el negocio está creciendo o contrayéndose.

Esta calculadora recibe tu MRR existente al inicio del mes, más el MRR de nuevos clientes, expansión (mejoras de plan), MRR perdido (clientes cancelados) y contracción (bajas de plan), y calcula tu MRR total actualizado, tu MRR neto nuevo y el ARR (Ingreso Recurrente Anual) proyectado.

Limitaciones: esta calculadora asume que ingresas los movimientos de un solo mes; para análisis de tendencias a largo plazo, deberás repetir el cálculo mensualmente y llevar tu propio historial.`,
  },
  formula: {
    formula: "MRR Total = MRR Existente + Nuevo + Expansión − Perdido − Contracción",
    variables: [
      { symbol: "MRR Neto Nuevo", meaning: "Suma de MRR nuevo y de expansión, menos el MRR perdido y de contracción" },
      { symbol: "ARR Proyectado", meaning: "MRR total multiplicado por 12, proyectando el ingreso anual si el MRR se mantiene constante" },
    ],
    explanation: "Se parte del MRR existente al inicio del mes, se suman los ingresos de nuevos clientes y expansiones (upgrades), y se restan el MRR perdido por cancelaciones y el MRR de contracción por downgrades, obteniendo el MRR total actualizado; multiplicando ese total por 12 se obtiene el ARR proyectado.",
    interpretation: "Por ejemplo, con $50,000 de MRR existente, $8,000 nuevo, $3,000 de expansión, $2,000 perdido y $1,000 de contracción, el MRR neto nuevo es de $8,000 y el MRR total sube a $58,000.",
  },
  steps: [
    "Ingresa tu MRR existente al inicio del mes.",
    "Ingresa el MRR de nuevos clientes adquiridos este mes.",
    "Ingresa el MRR de expansión (clientes que mejoraron su plan).",
    "Ingresa el MRR perdido por cancelaciones y el MRR de contracción por downgrades.",
    "Haz clic en Calcular para ver tu MRR total, MRR neto nuevo y ARR proyectado.",
  ],
  examples: [
    { inputs: "MRR Existente: $50,000, Nuevo: $8,000, Expansión: $3,000, Perdido: $2,000, Contracción: $1,000", result: "MRR Neto Nuevo: $8,000, MRR Total: $58,000", explanation: "Un mes de crecimiento saludable donde las adquisiciones superan las pérdidas." },
    { inputs: "MRR Existente: $100,000, Nuevo: $2,000, Perdido: $6,000", result: "MRR Neto Nuevo: -$4,000, MRR Total: $96,000", explanation: "Un mes de contracción donde el churn supera las nuevas adquisiciones." },
    { inputs: "MRR Existente: $30,000, Nuevo: $5,000, Expansión: $2,000, Perdido: $0, Contracción: $0", result: "MRR Neto Nuevo: $7,000, ARR Proyectado: $444,000", explanation: "Sin pérdidas este mes, todo el crecimiento se traduce directamente en MRR neto positivo." },
  ],
  practicalUses: [
    "Reportar métricas mensuales de crecimiento a inversionistas o al equipo directivo",
    "Identificar si el crecimiento de nuevos clientes compensa el churn mensual",
    "Proyectar el ARR (ingreso anual) basado en el MRR actual del negocio",
    "Comparar el impacto de la expansión (upsells) contra la contracción (downgrades) mes a mes",
    "Establecer metas de adquisición de clientes necesarias para alcanzar un MRR objetivo",
  ],
  expertTips: [
    "Un MRR neto nuevo negativo de forma consistente indica que el churn está superando la adquisición, una señal de alerta temprana para cualquier negocio SaaS.",
    "Separar el MRR perdido (churn) del MRR de contracción (downgrades) ayuda a diagnosticar si el problema es retención total o simplemente reducción de plan.",
    "El ARR proyectado asume que el MRR se mantiene constante todo el año; en la práctica, debe recalcularse cada mes para reflejar la tendencia real.",
    "Compara tu MRR de expansión contra tu MRR nuevo: un negocio maduro suele generar una porción creciente de ingresos a través de expansión de clientes existentes.",
  ],
  commonMistakes: [
    { mistake: "Confundir MRR perdido (churn) con MRR de contracción (downgrade)", fix: "El churn es la pérdida total de un cliente; la contracción es cuando un cliente reduce su plan pero sigue siendo cliente. Son movimientos distintos." },
    { mistake: "No actualizar el MRR existente cada mes con el resultado del mes anterior", fix: "El MRR total calculado este mes debe usarse como el 'MRR existente' del siguiente mes para mantener un seguimiento preciso." },
    { mistake: "Proyectar el ARR sin considerar la tendencia de crecimiento o contracción", fix: "El ARR proyectado es una instantánea; si el MRR está creciendo o cayendo consistentemente, ajusta tus proyecciones considerando esa tendencia." },
    { mistake: "Ignorar el MRR de expansión al analizar el crecimiento", fix: "La expansión de clientes existentes es a menudo más rentable que adquirir nuevos clientes; sepárala claramente en tu análisis mensual." },
  ],
  faq: [
    { q: "¿Qué es el MRR (Monthly Recurring Revenue)?", a: "Es el Ingreso Recurrente Mensual, la métrica que representa los ingresos predecibles y repetitivos que un negocio de suscripción genera cada mes." },
    { q: "¿Cómo se calcula el MRR total de un mes?", a: "Se suma el MRR existente al inicio del mes más el MRR nuevo y de expansión, y se resta el MRR perdido por cancelaciones y el de contracción por downgrades." },
    { q: "¿Qué es el MRR neto nuevo?", a: "Es la suma del MRR de nuevos clientes y de expansión, menos el MRR perdido y de contracción; indica el crecimiento real neto del mes." },
    { q: "¿Cuál es la diferencia entre MRR y ARR?", a: "El MRR es el ingreso recurrente mensual; el ARR (Annual Recurring Revenue) es el ingreso recurrente anual, generalmente calculado multiplicando el MRR por 12." },
    { q: "¿Qué significa MRR de contracción?", a: "Es la reducción de ingresos causada por clientes existentes que bajan a un plan más económico (downgrade), sin cancelar completamente su suscripción." },
    { q: "¿Qué diferencia hay entre MRR de contracción y MRR perdido (churn)?", a: "El MRR perdido ocurre cuando un cliente cancela por completo; el MRR de contracción ocurre cuando un cliente reduce su plan pero permanece activo." },
    { q: "¿Cómo sé si mi negocio SaaS está creciendo según el MRR?", a: "Si tu MRR neto nuevo (nuevo + expansión − perdido − contracción) es positivo, tu negocio está creciendo; si es negativo, está contrayéndose." },
    { q: "¿Qué es un buen MRR de expansión para un negocio SaaS?", a: "Depende de la industria, pero muchos negocios SaaS maduros buscan que la expansión (upsells) represente un porcentaje creciente del MRR nuevo total con el tiempo." },
    { q: "¿Cómo se proyecta el ARR a partir del MRR?", a: "Se multiplica el MRR total actual por 12, asumiendo que se mantendría constante durante todo el año; es una proyección simple, no una garantía." },
    { q: "¿Con qué frecuencia debo calcular mi MRR?", a: "Se recomienda calcularlo mensualmente, usando el MRR total del mes anterior como punto de partida para el cálculo del mes siguiente." },
    { q: "¿El MRR incluye ingresos únicos o solo recurrentes?", a: "El MRR solo debe incluir ingresos recurrentes de suscripciones; cargos únicos como tarifas de instalación no deben incluirse en el cálculo." },
    { q: "¿Cómo afecta el churn al crecimiento de mi MRR?", a: "Un alto MRR perdido por churn puede anular o superar el MRR de nuevos clientes, resultando en un MRR neto nuevo negativo aunque estés adquiriendo clientes activamente." },
    { q: "¿Qué inversionistas o métricas usan el MRR y ARR?", a: "Inversionistas de capital de riesgo y equipos directivos de empresas SaaS usan estas métricas como indicadores clave de salud y crecimiento del negocio." },
    { q: "¿Puedo usar esta calculadora para cualquier modelo de suscripción?", a: "Sí, aplica a cualquier negocio con ingresos recurrentes mensuales, ya sea software, membresías, servicios por suscripción u otros modelos similares." },
  ],
  relatedCalculators: ["Calculadora de Churn Rate", "Calculadora de LTV (Valor de Vida del Cliente)", "Calculadora de CAC", "Calculadora de ROAS"],
  youMayLike: pickYouMayLike("mrr-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de MRR",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};