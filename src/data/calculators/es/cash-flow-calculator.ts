// src/data/calculators/es/cash-flow-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const cashFlowCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Flujo de Caja Online Gratis 2026",
    metaDescription: "Calcula tu flujo de caja neto, saldo final y margen de flujo de caja operativo a partir de tus ingresos y egresos. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/cash-flow-calculator",
    ogTitle: "Calculadora de Flujo de Caja",
    ogDescription: "Combina tus actividades operativas, de inversión y de financiamiento para ver tu flujo de caja neto y saldo proyectado.",
    twitterTitle: "Calculadora de Flujo de Caja 2026",
    twitterDescription: "Calcula tu flujo de caja neto y margen operativo al instante.",
  },

  hero: {
    text: "La Calculadora de Flujo de Caja combina tus entradas y salidas de efectivo operativas, de inversión y de financiamiento para mostrarte tu flujo de caja neto, tu saldo final proyectado y tu margen de flujo de caja operativo.",
  },

  about: {
    text: `El flujo de caja mide cuánto efectivo entra y sale realmente de tu negocio o finanzas personales en un período, a diferencia de la utilidad contable que incluye partidas no monetarias.

Esta calculadora separa tus movimientos en tres categorías: actividades operativas (ingresos y gastos del día a día), actividades de inversión (compra/venta de activos) y actividades de financiamiento (préstamos, aportes de capital), y las combina con tu saldo inicial para proyectar tu saldo final.

Limitaciones: esta herramienta asume que los montos ingresados corresponden al mismo período (por ejemplo, un mes) y no ajusta por estacionalidad, cuentas por cobrar/pagar pendientes ni tipo de cambio.`,
  },

  formula: {
    formula: "Flujo de Caja Neto = (Entradas Operativas − Salidas Operativas) + Flujo de Inversión + Flujo de Financiamiento",
    variables: [
      { symbol: "Flujo de Caja Operativo", meaning: "Entradas operativas menos salidas operativas" },
      { symbol: "Saldo Final", meaning: "Saldo inicial más el flujo de caja neto del período" },
      { symbol: "Margen de Flujo de Caja", meaning: "Flujo de caja operativo dividido entre los ingresos mensuales, expresado en porcentaje" },
    ],
    explanation: "El flujo de caja operativo mide la salud del negocio del día a día; sumarlo a los flujos de inversión y financiamiento da el flujo de caja neto total, que se agrega al saldo inicial para obtener el saldo final proyectado.",
    interpretation: "Por ejemplo, con entradas operativas de $40,000, salidas de $28,000, inversión de -$5,000 y financiamiento de $10,000, el flujo de caja neto es de $17,000.",
  },

  steps: [
    "Ingresa tu saldo de caja inicial.",
    "Ingresa tus entradas y salidas de efectivo operativas del período.",
    "Ingresa tu flujo de inversión neto (positivo o negativo).",
    "Ingresa tu flujo de financiamiento neto (positivo o negativo).",
    "Opcionalmente, ingresa tus ingresos mensuales para calcular el margen operativo.",
    "Haz clic en Calcular para ver tu flujo neto, saldo final y margen.",
  ],

  examples: [
    { inputs: "Saldo inicial: $50,000, Entradas: $40,000, Salidas: $28,000, Inversión: -$5,000, Financiamiento: $10,000", result: "Flujo de Caja Neto: $17,000 | Saldo Final: $67,000", explanation: "Un negocio con operación saludable que además invierte y recibe financiamiento." },
    { inputs: "Saldo inicial: $10,000, Entradas: $15,000, Salidas: $20,000, Inversión: $0, Financiamiento: $0", result: "Flujo de Caja Neto: -$5,000 | Saldo Final: $5,000", explanation: "Un negocio con flujo operativo negativo que reduce su reserva de caja." },
    { inputs: "Saldo inicial: $100,000, Entradas: $60,000, Salidas: $35,000, Inversión: -$20,000, Financiamiento: $0", result: "Flujo de Caja Neto: $5,000 | Saldo Final: $105,000", explanation: "Una fuerte operación compensa una inversión significativa en activos." },
  ],

  practicalUses: [
    "Verificar si tu negocio genera suficiente efectivo para cubrir sus gastos operativos",
    "Proyectar tu saldo de caja al final del mes o trimestre",
    "Detectar si el crecimiento del negocio depende de financiamiento externo",
    "Comparar el flujo de caja operativo mes a mes para detectar tendencias",
    "Preparar reportes financieros básicos para inversionistas o socios",
    "Planear cuánto efectivo reservar antes de una inversión grande",
  ],

  expertTips: [
    "Un flujo de caja operativo positivo y consistente es más importante que la utilidad contable para la salud del negocio.",
    "Si tu flujo de financiamiento es la única razón de un saldo positivo, revisa si el negocio depende demasiado de deuda o inversión externa.",
    "El margen de flujo de caja operativo te permite comparar la eficiencia entre distintos períodos, no solo el monto absoluto.",
    "Actualiza esta calculadora mensualmente para detectar caídas de flujo antes de que se conviertan en un problema de liquidez.",
    "Separa siempre las inversiones puntuales grandes del flujo operativo recurrente al analizar tendencias.",
  ],

  commonMistakes: [
    { mistake: "Confundir utilidad neta con flujo de caja", fix: "La utilidad incluye partidas no monetarias (depreciación, cuentas por cobrar); el flujo de caja solo cuenta efectivo real." },
    { mistake: "Ignorar el flujo de financiamiento al evaluar la salud operativa", fix: "Analiza el flujo de caja operativo por separado del financiamiento para ver si el negocio se sostiene solo." },
    { mistake: "No actualizar el saldo inicial cada período", fix: "Usa el saldo final del período anterior como saldo inicial del siguiente para mantener la proyección correcta." },
    { mistake: "Omitir el ingreso mensual y perder la referencia del margen", fix: "Ingresa tus ingresos mensuales para obtener el margen de flujo de caja operativo, útil para comparar eficiencia." },
  ],

  faq: [
    { q: "¿Cómo se calcula el flujo de caja neto?", a: "Se suma el flujo de caja operativo (entradas menos salidas) con el flujo de inversión y el flujo de financiamiento del mismo período." },
    { q: "¿Qué diferencia hay entre flujo de caja y utilidad?", a: "La utilidad incluye ingresos y gastos contables no monetarios; el flujo de caja solo refleja el efectivo que realmente entra y sale." },
    { q: "¿Qué es el flujo de caja operativo?", a: "Es el efectivo generado por las actividades principales del negocio, calculado como entradas operativas menos salidas operativas." },
    { q: "¿Qué significa un flujo de caja negativo?", a: "Significa que salió más efectivo del que entró en el período, lo que reduce el saldo de caja disponible." },
    { q: "¿Cómo se calcula el margen de flujo de caja?", a: "Se divide el flujo de caja operativo entre los ingresos del período y se multiplica por 100 para obtener el porcentaje." },
    { q: "¿Qué incluye el flujo de inversión?", a: "Incluye compra o venta de activos fijos, equipos, inversiones financieras u otros activos de largo plazo." },
    { q: "¿Qué incluye el flujo de financiamiento?", a: "Incluye préstamos recibidos o pagados, aportes de capital, dividendos pagados y emisión o recompra de acciones." },
    { q: "¿Cómo sé si mi negocio tiene un buen flujo de caja?", a: "Un flujo de caja operativo positivo y creciente, junto con un saldo final estable o en aumento, son señales saludables." },
    { q: "¿Con qué frecuencia debo calcular mi flujo de caja?", a: "Idealmente de forma mensual, para detectar problemas de liquidez con tiempo suficiente para corregirlos." },
    { q: "¿Esta calculadora sirve para finanzas personales?", a: "Sí, puedes usar tus ingresos y gastos personales en lugar de las cifras de un negocio para proyectar tu saldo disponible." },
    { q: "¿Qué pasa si mi flujo operativo es negativo pero el total es positivo?", a: "Puede indicar que dependes de financiamiento externo o venta de activos para cubrir gastos operativos, lo cual no es sostenible a largo plazo." },
    { q: "¿Esta calculadora considera impuestos?", a: "No de forma automática; debes incluir los pagos de impuestos dentro de tus salidas operativas si aplican al período." },
    { q: "¿Puedo usar esta calculadora para proyectar varios meses?", a: "Sí, repite el cálculo usando el saldo final de cada mes como saldo inicial del siguiente." },
  ],

  relatedCalculators: ["Calculadora de Punto de Equilibrio", "Calculadora de Margen de Utilidad", "Calculadora de Tasa de Quema (Burn Rate)", "Calculadora de ROI"],

  youMayLike: pickYouMayLike("cash-flow-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Flujo de Caja",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};