// src/data/calculators/es/net-worth-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const netWorthCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Patrimonio Neto 2026",
    metaDescription: "Calcula tu patrimonio neto sumando activos y restando pasivos. Incluye ratio deuda-activo. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/net-worth-calculator",
    ogTitle: "Calculadora de Patrimonio Neto",
    ogDescription: "Descubre tu patrimonio neto total al instante.",
    twitterTitle: "Calculadora de Patrimonio Neto 2026",
    twitterDescription: "Calcula tu patrimonio neto al instante.",
  },
  hero: {
    text: "La Calculadora de Patrimonio Neto suma tus activos (efectivo, inversiones, bienes raíces, otros) y resta tus pasivos (hipoteca, préstamos, tarjetas de crédito, otros) para mostrarte tu patrimonio neto total.",
  },
  about: {
    text: `El patrimonio neto es una de las métricas más importantes de salud financiera personal, ya que resume en un solo número cuánto valen realmente tus finanzas después de restar todas tus deudas.

Esta calculadora suma tus activos en distintas categorías y tus pasivos por separado, restando ambos totales para obtener tu patrimonio neto, junto con un ratio deuda-activo que muestra qué tan apalancada está tu posición financiera.

Limitaciones: esta calculadora usa los valores que ingreses manualmente; no actualiza automáticamente el valor de mercado de inversiones o propiedades, por lo que debes revisar y actualizar los montos periódicamente.`,
  },
  formula: {
    formula: "Patrimonio Neto = Activos Totales − Pasivos Totales",
    variables: [
      { symbol: "Activos Totales", meaning: "Suma de efectivo, inversiones, bienes raíces y otros activos" },
      { symbol: "Pasivos Totales", meaning: "Suma de hipoteca, otros préstamos, deuda de tarjeta de crédito y otros pasivos" },
      { symbol: "Ratio Deuda-Activo", meaning: "Pasivos totales divididos entre activos totales, expresado en porcentaje" },
    ],
    explanation: "Se suman todas las categorías de activos y todas las categorías de pasivos por separado, y se resta el total de pasivos del total de activos para obtener el patrimonio neto; el ratio deuda-activo muestra qué proporción de tus activos está financiada con deuda.",
    interpretation: "Por ejemplo, con activos totales de $385,000 y pasivos totales de $235,000, el patrimonio neto sería de $150,000, con un ratio deuda-activo de aproximadamente 61%.",
  },
  steps: [
    "Ingresa tus activos: efectivo y ahorros, inversiones, bienes raíces y otros activos.",
    "Ingresa tus pasivos: saldo hipotecario, otros préstamos, deuda de tarjeta de crédito y otros pasivos.",
    "Haz clic en Calcular.",
    "Revisa tu patrimonio neto total, activos totales, pasivos totales y ratio deuda-activo.",
  ],
  examples: [
    { inputs: "Efectivo: $15,000, Inversiones: $60,000, Bienes Raíces: $300,000, Hipoteca: $220,000, Otros Préstamos: $12,000, Tarjeta: $3,000", result: "Patrimonio Neto: $140,000", explanation: "Un perfil financiero típico de clase media con vivienda propia e inversiones moderadas." },
    { inputs: "Efectivo: $5,000, Inversiones: $10,000, Bienes Raíces: $0, Hipoteca: $0, Otros Préstamos: $25,000, Tarjeta: $8,000", result: "Patrimonio Neto: -$18,000", explanation: "Un perfil con patrimonio neto negativo debido a deudas de préstamos estudiantiles y tarjeta de crédito." },
    { inputs: "Efectivo: $50,000, Inversiones: $500,000, Bienes Raíces: $450,000, Hipoteca: $150,000, Otros Préstamos: $0, Tarjeta: $0", result: "Patrimonio Neto: $850,000", explanation: "Un perfil financiero sólido con inversiones sustanciales y baja deuda relativa." },
  ],
  practicalUses: [
    "Hacer seguimiento de tu progreso financiero personal año tras año",
    "Establecer una línea base antes de comenzar un plan de ahorro o inversión",
    "Evaluar qué tan apalancada está tu posición financiera con el ratio deuda-activo",
    "Preparar información financiera para solicitar un préstamo o hipoteca",
    "Identificar qué categoría de deuda tiene mayor impacto en tu patrimonio neto",
  ],
  expertTips: [
    "Calcula tu patrimonio neto al menos una vez al año para hacer seguimiento real de tu progreso financiero a largo plazo.",
    "Un patrimonio neto negativo es común al inicio de la vida adulta (préstamos estudiantiles) y no necesariamente indica un problema si tiendes a mejorar con el tiempo.",
    "El ratio deuda-activo te ayuda a entender el riesgo de tu posición: un ratio alto significa que dependes mucho de deuda para financiar tus activos.",
    "Actualiza el valor de tus inversiones y bienes raíces periódicamente, ya que fluctúan con el mercado y afectan tu patrimonio neto real.",
  ],
  commonMistakes: [
    { mistake: "Olvidar incluir todas las categorías de deuda", fix: "Incluye préstamos estudiantiles, préstamos de auto y cualquier otra deuda, no solo la hipoteca y tarjetas de crédito." },
    { mistake: "Usar el precio de compra en lugar del valor actual de mercado", fix: "Usa el valor actual de mercado de tus inversiones y propiedades, no lo que pagaste originalmente por ellos." },
    { mistake: "No actualizar el cálculo periódicamente", fix: "Recalcula tu patrimonio neto al menos anualmente para ver tu progreso financiero real a lo largo del tiempo." },
  ],
  faq: [
    { q: "¿Cómo se calcula el patrimonio neto?", a: "Se suman todos tus activos (efectivo, inversiones, bienes raíces, otros) y se restan todos tus pasivos (hipoteca, préstamos, tarjetas de crédito, otros)." },
    { q: "¿Qué es un buen patrimonio neto para mi edad?", a: "Varía mucho según ingresos, ubicación y etapa de vida; una regla general sugiere que el patrimonio neto debería crecer progresivamente con la edad y el ingreso acumulado." },
    { q: "¿Es normal tener un patrimonio neto negativo?", a: "Sí, es común entre adultos jóvenes con préstamos estudiantiles recién graduados; lo importante es la tendencia de mejora a lo largo del tiempo." },
    { q: "¿Qué se considera un activo en el cálculo de patrimonio neto?", a: "Efectivo y ahorros, inversiones (acciones, fondos, retiro), bienes raíces, vehículos y otros bienes de valor que posees." },
    { q: "¿Qué se considera un pasivo en el cálculo de patrimonio neto?", a: "Saldo hipotecario, préstamos estudiantiles, préstamos de auto, deuda de tarjeta de crédito y cualquier otra deuda pendiente." },
    { q: "¿Con qué frecuencia debo calcular mi patrimonio neto?", a: "Se recomienda calcularlo al menos una vez al año, o trimestralmente si estás siguiendo de cerca un plan financiero específico." },
    { q: "¿Qué es el ratio deuda-activo?", a: "Es el porcentaje de tus activos totales que está financiado con deuda; se calcula dividiendo tus pasivos totales entre tus activos totales." },
    { q: "¿Debo incluir el valor de mi vivienda principal en mi patrimonio neto?", a: "Sí, generalmente se incluye el valor de mercado de tu vivienda como activo, y el saldo hipotecario pendiente como pasivo." },
    { q: "¿Cómo puedo aumentar mi patrimonio neto?", a: "Aumentando tus ahorros e inversiones, pagando deudas de forma acelerada, o incrementando el valor de tus activos existentes." },
    { q: "¿El patrimonio neto incluye mi salario o ingreso anual?", a: "No, el patrimonio neto es una fotografía de tus activos y pasivos en un momento dado, no un flujo de ingresos como el salario." },
    { q: "¿Un ratio deuda-activo alto es siempre malo?", a: "No necesariamente; una hipoteca a tasa baja financiando una propiedad que se aprecia puede ser una deuda saludable, pero un ratio muy alto sí implica mayor riesgo financiero." },
    { q: "¿Cómo comparo mi patrimonio neto con el de otras personas de mi edad?", a: "Existen encuestas y estudios sobre patrimonio neto promedio por edad en distintos países, aunque las comparaciones varían mucho según el costo de vida y contexto económico." },
  ],
  relatedCalculators: ["Calculadora de Presupuesto", "Calculadora de Interés Compuesto", "Calculadora Coast FIRE", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("net-worth-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Patrimonio Neto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};