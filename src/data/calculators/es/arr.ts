import { pickYouMayLike } from "../../calculator-pool";

export const arrCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de ARR — Ingreso Recurrente Anual (SaaS)",
    metaDescription: "Calculadora de ARR gratis. Encuentra tu Ingreso Recurrente Anual (ARR) actual, el ARR neto nuevo, la tasa de crecimiento y una proyección de ARR para tu negocio SaaS.",
    canonicalSlug: "/es/finance/arr-calculator",
    ogTitle: "Calculadora de ARR — Estimador de Ingreso Recurrente Anual",
    ogDescription: "Calcula tu ARR de SaaS, tasa de crecimiento y proyección futura al instante.",
    twitterTitle: "Calculadora de ARR Gratis",
    twitterDescription: "Encuentra tu ARR y tasa de crecimiento, gratis e instantáneo.",
  },
  hero: {
    text: "La Calculadora de ARR encuentra tu Ingreso Recurrente Anual actual a partir de tu MRR, desglosa el ARR neto nuevo por negocio nuevo, expansión, contracción y churn, y proyecta tu ARR hacia adelante según tu tasa de crecimiento actual.",
  },
  about: {
    text: `El ARR (Annual Recurring Revenue, o Ingreso Recurrente Anual) es el valor anual de tus ingresos por suscripción, calculado normalmente como el MRR (Monthly Recurring Revenue) multiplicado por 12 — la métrica de crecimiento principal que las empresas SaaS reportan a inversores y juntas directivas.

Esta calculadora parte de tu MRR actual para hallar tu ARR actual, y luego toma en cuenta el negocio nuevo, la expansión (upsells/upgrades), la contracción (downgrades) y el ingreso perdido por churn para calcular el ARR neto nuevo — la tasa anualizada a la que tu ingreso recurrente realmente está creciendo o reduciéndose.

Después proyecta tu ARR hacia adelante durante un número de meses elegido, componiendo tu tasa de crecimiento de MRR neto actual, dando una estimación a futuro en vez de solo una fotografía del presente.

Limitaciones: esta herramienta asume que tu tasa de crecimiento de MRR neto se mantiene constante hacia adelante — no modela estacionalidad, ingresos únicos, ingresos por servicios no recurrentes, ni cambios planeados de precio o empaquetado.`,
  },
  formula: {
    formula: "ARR = MRR × 12; ARR Neto Nuevo = (Nuevo + Expansión − Contracción − Churn) × 12",
    variables: [
      { symbol: "MRR Actual", meaning: "Tu Ingreso Recurrente Mensual total en este momento" },
      { symbol: "MRR Neto Nuevo", meaning: "Negocio nuevo más expansión, menos contracción e ingreso perdido por churn" },
      { symbol: "Tasa de Crecimiento Mensual", meaning: "MRR Neto Nuevo dividido entre el MRR Actual, usado para componer la proyección de ARR" },
    ],
    explanation: "El ARR actual es simplemente el MRR anualizado. El ARR neto nuevo captura la tasa anualizada de cambio, y la proyección compone esa tasa de crecimiento mensual hacia adelante para estimar el ARR en una fecha futura.",
    interpretation: "Por ejemplo, con $50,000 de MRR actual y $5,000 de MRR neto nuevo este mes, se obtiene un ARR actual de $600,000, una tasa de crecimiento mensual del 10%, y un ARR proyectado de aproximadamente $1.06M después de 12 meses si esa tasa se mantiene.",
  },
  steps: [
    "Ingresa tu MRR total actual.",
    "Ingresa el MRR de negocio nuevo añadido este mes.",
    "Ingresa el MRR de expansión por upsells o upgrades.",
    "Ingresa el MRR de contracción por downgrades.",
    "Ingresa el MRR perdido por cancelaciones (churn).",
    "Ingresa el número de meses a proyectar hacia adelante.",
    "Haz clic en Calcular para ver tu ARR, tasa de crecimiento y proyección.",
  ],
  examples: [
    { inputs: "MRR: $50,000, Nuevo: $6,000, Expansión: $2,000, Contracción: $1,000, Churn: $2,000, 12 meses", result: "ARR Actual: $600,000, ARR Proyectado: ~$1.06M", explanation: "Un MRR neto nuevo saludable de $5,000/mes se compone hasta aproximadamente 76% de crecimiento de ARR en un año." },
    { inputs: "MRR: $200,000, Nuevo: $4,000, Expansión: $1,000, Contracción: $2,000, Churn: $5,000, 12 meses", result: "ARR Actual: $2.4M, ARR Proyectado: ~$2.16M", explanation: "Un MRR neto nuevo negativo reduce el ARR proyectado a pesar del negocio nuevo continuo." },
    { inputs: "MRR: $10,000, Nuevo: $3,000, Expansión: $500, Contracción: $200, Churn: $300, 6 meses", result: "ARR Actual: $120,000, ARR Proyectado: ~$268,000", explanation: "Las startups en etapa temprana suelen ver tasas de crecimiento compuesto muy altas sobre una base de ingresos pequeña." },
  ],
  practicalUses: [
    "Reportar el ARR a inversores, una junta directiva o al equipo de liderazgo",
    "Rastrear si el crecimiento de MRR neto nuevo se está acelerando o desacelerando",
    "Proyectar dónde estará el ARR al final del año según la tasa de crecimiento actual",
    "Diagnosticar si el crecimiento viene del negocio nuevo o del ingreso por expansión",
    "Fijar metas realistas de crecimiento de ARR para los equipos de ventas y éxito del cliente",
    "Comparar tu tasa de crecimiento contra benchmarks de SaaS para la etapa de tu empresa",
  ],
  expertTips: [
    "El ARR es una métrica de fotografía del presente, no dinero realmente cobrado — siempre concíliala contra tus datos de facturación y flujo de caja.",
    "El ARR neto nuevo (no solo el negocio nuevo bruto) es la cifra que más le importa a los inversores, ya que considera el churn y la contracción que erosionan el crecimiento.",
    "Un benchmark común de SaaS es la 'Regla del 40' — la tasa de crecimiento más el margen de utilidad debe superar el 40% para una empresa saludable.",
    "El ingreso por expansión suele ser la fuente más barata de crecimiento de ARR, ya que no requiere costos de adquisición de nuevos clientes.",
    "Ten cuidado al proyectar el ARR usando el MRR neto nuevo de un solo mes — usa un promedio móvil de 3 meses para una estimación de crecimiento más estable.",
    "El ARR no es lo mismo que el reconocimiento de ingresos bajo GAAP — inversores y auditores los tratan de forma diferente, así que no sustituyas uno por el otro en estados financieros.",
  ],
  commonMistakes: [
    { mistake: "Simplemente multiplicar el MRR por 12 sin ajustar por el churn conocido", fix: "Usa el MRR neto nuevo (incluyendo churn y contracción) para una proyección más realista, no solo el MRR bruto por 12." },
    { mistake: "Incluir ingresos únicos o no recurrentes en el ARR", fix: "El ARR solo debe incluir ingresos recurrentes por suscripción — las tarifas de implementación, servicios únicos y picos de uso no pertenecen a esta métrica." },
    { mistake: "Proyectar el ARR a partir de un solo mes volátil", fix: "Usa un promedio de MRR neto nuevo de 3 meses para suavizar picos o caídas puntuales antes de proyectar." },
    { mistake: "Confundir el ARR con el valor total del contrato (TCV)", fix: "El ARR refleja un año de valor recurrente, mientras que el TCV incluye el valor completo de un contrato multianual — no los confundas." },
    { mistake: "Ignorar el ingreso por contracción y downgrade", fix: "Rastrear solo el negocio nuevo y el churn pasa por alto la contracción de los downgrades, que puede compensar de forma significativa un crecimiento aparentemente fuerte." },
  ],
  faq: [
    { q: "¿Qué es el ARR en SaaS?", a: "El ARR (Annual Recurring Revenue) es el valor anual del ingreso por suscripción de una empresa, calculado típicamente como el MRR multiplicado por 12." },
    { q: "¿Cómo se calcula el ARR?", a: "Multiplica tu MRR actual por 12, o suma directamente el valor anualizado de todos los contratos de suscripción activos si se facturan anualmente." },
    { q: "¿Cuál es la diferencia entre ARR y MRR?", a: "El MRR mide el ingreso recurrente de forma mensual, mientras que el ARR es ese mismo ingreso recurrente expresado como una cifra anual, usualmente el MRR multiplicado por 12." },
    { q: "¿Qué es el ARR neto nuevo?", a: "El ARR neto nuevo es el cambio anualizado en el ingreso recurrente por negocio nuevo y expansión, menos las pérdidas por contracción y churn, durante un período dado." },
    { q: "¿Cuál es una buena tasa de crecimiento de ARR para una empresa SaaS?", a: "Los benchmarks varían según la etapa, pero muchas empresas SaaS en etapa temprana buscan más del 100% de crecimiento anual, mientras que empresas más maduras suelen apuntar a 20-40% dependiendo del tamaño y mercado." },
    { q: "¿En qué se diferencia el ARR del ingreso total?", a: "El ARR solo incluye ingreso recurrente por suscripción, mientras que el ingreso total (ingreso GAAP) también puede incluir tarifas únicas, ingresos por servicios y otros ingresos no recurrentes." },
    { q: "¿Por qué las empresas SaaS reportan ARR en vez de ingreso total?", a: "El ARR le da a inversores y operadores una vista más clara y a futuro del ingreso recurrente predecible, separado de fuentes de ingreso únicas o irregulares." },
    { q: "¿Cómo afecta el churn al ARR?", a: "Los clientes que se dan de baja reducen el MRR, lo que reduce directamente el ARR al anualizarlo — un churn alto puede compensar incluso un crecimiento fuerte de negocio nuevo." },
    { q: "¿Cuál es la diferencia entre ARR y TCV (valor total del contrato)?", a: "El ARR refleja un año de valor de ingreso recurrente, mientras que el TCV incluye el valor completo de un contrato durante todo su plazo multianual." },
    { q: "¿Cómo se proyecta el ARR futuro?", a: "Proyecta el ARR futuro componiendo tu tasa de crecimiento de MRR neto nuevo actual hacia adelante durante el número de meses deseado, y luego anualizando el MRR resultante." },
    { q: "¿Qué es la Regla del 40 en relación al ARR?", a: "La Regla del 40 establece que la tasa de crecimiento de ARR de una empresa SaaS saludable más su margen de utilidad debe sumar 40% o más, equilibrando el crecimiento con la rentabilidad." },
    { q: "¿El ARR incluye el ingreso por expansión?", a: "Sí, el ingreso por expansión de upsells y upgrades debe incluirse en los cálculos de ARR neto nuevo, ya que representa crecimiento real de ingreso recurrente de clientes existentes." },
    { q: "¿Con qué frecuencia debe recalcularse el ARR?", a: "La mayoría de las empresas SaaS recalculan el ARR mensualmente, junto con el MRR, para rastrear tendencias de crecimiento y reportar cifras precisas a inversores y liderazgo." },
    { q: "¿El ARR es lo mismo que el ingreso anual en los estados financieros?", a: "No, el ARR es una métrica operativa basada en el ingreso recurrente actual, mientras que el ingreso anual GAAP refleja el ingreso realmente reconocido durante el año fiscal, que puede diferir por reglas de tiempo y reconocimiento." },
  ],
  relatedCalculators: ["Calculadora de MRR", "Calculadora de Tasa de Churn", "Calculadora de Runway", "Calculadora de Burn Rate"],
  youMayLike: pickYouMayLike("arr-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de ARR",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};