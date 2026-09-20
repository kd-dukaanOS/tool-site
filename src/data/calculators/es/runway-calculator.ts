// src/data/calculators/es/runway-calculator.ts
// NOTE: category assumed "business" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const runwayCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Runway (Startup) 2026",
    metaDescription: "Calcula cuántos meses de runway le quedan a tu startup según tu efectivo, ingresos y gastos. Gratis.",
    canonicalSlug: "/es/business/runway-calculator",
    ogTitle: "Calculadora de Runway",
    ogDescription: "Descubre cuántos meses de efectivo le quedan a tu startup.",
    twitterTitle: "Calculadora de Runway para Startups",
    twitterDescription: "Calcula el runway de tu startup al instante.",
  },
  hero: {
    text: "La Calculadora de Runway proyecta cuántos meses de efectivo le quedan a tu startup, de dos formas: una estimación estática con tu tasa de quema actual, y una simulación dinámica que aplica tus tasas de crecimiento esperadas de ingresos y gastos.",
  },
  about: {
    text: `El runway es el tiempo (generalmente en meses) que le queda a una startup antes de quedarse sin efectivo, calculado dividiendo el saldo de efectivo actual entre la tasa de quema neta mensual (gastos menos ingresos).

Esta calculadora recibe tu saldo de efectivo actual, ingresos y gastos mensuales, y tasas de crecimiento mensual esperadas para ambos, calculando tanto un runway estático (basado en tu tasa de quema actual sin cambios) como un runway dinámico (simulado mes a mes aplicando el crecimiento proyectado).

Limitaciones: la simulación dinámica asume tasas de crecimiento constantes mes a mes; en la práctica, el crecimiento real de startups rara vez es perfectamente lineal, por lo que esto es una proyección aproximada, no una garantía.`,
  },
  formula: {
    formula: "Runway Estático = Saldo de Efectivo Actual / Quema Neta Mensual",
    variables: [
      { symbol: "Quema Neta Mensual", meaning: "Gastos mensuales menos ingresos mensuales (si es negativa, hay flujo de caja positivo)" },
      { symbol: "Runway Dinámico", meaning: "Simulación mes a mes que aplica el crecimiento esperado de ingresos y gastos hasta que el saldo llega a cero" },
    ],
    explanation: "El runway estático se calcula dividiendo el saldo de efectivo actual entre la quema neta mensual actual, asumiendo que no cambia; el runway dinámico simula cada mes por separado, aplicando el crecimiento porcentual de ingresos y gastos, hasta que el saldo de efectivo llega a cero.",
    interpretation: "Por ejemplo, con $300,000 en caja, $15,000 de ingresos mensuales y $40,000 de gastos mensuales, la quema neta es de $25,000/mes, dando un runway estático de 12 meses; si los ingresos crecen más rápido que los gastos, el runway dinámico puede ser mayor.",
  },
  steps: [
    "Ingresa tu saldo de efectivo actual.",
    "Ingresa tus ingresos y gastos mensuales actuales.",
    "Ingresa las tasas de crecimiento mensual esperadas para ingresos y gastos.",
    "Haz clic en Calcular para ver tu runway estático, dinámico y saldo proyectado en 6 meses.",
  ],
  examples: [
    { inputs: "Efectivo: $300,000, Ingresos: $15,000/mes, Gastos: $40,000/mes", result: "Runway Estático: 12 meses", explanation: "Un cálculo simple sin considerar crecimiento futuro." },
    { inputs: "Mismos datos, Crecimiento de Ingresos: 5%/mes, Gastos: 2%/mes", result: "Runway Dinámico mayor a 12 meses si los ingresos crecen más rápido", explanation: "Cuando los ingresos crecen más rápido que los gastos, el runway dinámico se extiende más allá del estático." },
    { inputs: "Ingresos: $50,000/mes, Gastos: $45,000/mes", result: "Flujo de caja positivo, sin límite de runway", explanation: "Cuando los ingresos superan los gastos, la startup genera efectivo en lugar de consumirlo." },
  ],
  practicalUses: [
    "Planear cuánto tiempo tiene tu startup antes de necesitar una nueva ronda de financiamiento",
    "Comunicar tu runway a inversionistas de forma clara y basada en datos",
    "Comparar el impacto de reducir gastos vs aumentar ingresos en tu runway",
    "Evaluar si tu tasa de crecimiento actual es suficiente para alcanzar rentabilidad antes de quedarte sin efectivo",
    "Planear el momento óptimo para iniciar tu próxima ronda de recaudación de fondos",
  ],
  expertTips: [
    "Muchos inversionistas recomiendan comenzar a recaudar tu próxima ronda cuando te quedan entre 6 y 9 meses de runway, no cuando el efectivo esté por agotarse.",
    "El runway dinámico es más útil que el estático si tu startup está en fase de crecimiento activo, ya que refleja mejor la trayectoria real de ingresos y gastos.",
    "Reducir gastos generalmente extiende el runway de forma más inmediata y predecible que esperar un aumento de ingresos.",
    "Revisa y actualiza tu cálculo de runway mensualmente, ya que pequeños cambios en la tasa de quema pueden tener un gran impacto acumulado con el tiempo.",
  ],
  commonMistakes: [
    { mistake: "Basar todas las decisiones solo en el runway estático", fix: "Si tu startup está creciendo activamente, el runway dinámico ofrece una proyección más realista al considerar las tendencias de ingresos y gastos." },
    { mistake: "Esperar hasta quedarse casi sin efectivo para empezar a recaudar fondos", fix: "Comienza el proceso de recaudación cuando aún tengas 6-9 meses de runway, ya que levantar capital toma tiempo." },
    { mistake: "Asumir que el crecimiento de ingresos será perfectamente constante", fix: "Usa el runway dinámico como una proyección aproximada, no como una garantía; el crecimiento real de startups rara vez es perfectamente lineal." },
    { mistake: "No recalcular el runway después de cambios significativos en gastos o ingresos", fix: "Actualiza tu cálculo de runway regularmente, especialmente después de contrataciones, nuevos clientes grandes, o recortes de gastos." },
  ],
  faq: [
    { q: "¿Qué es el runway de una startup?", a: "Es el número de meses que le quedan a una startup antes de quedarse sin efectivo, calculado dividiendo el saldo de efectivo actual entre la tasa de quema neta mensual." },
    { q: "¿Cómo se calcula el runway de una startup?", a: "Se divide el saldo de efectivo actual entre la quema neta mensual (gastos mensuales menos ingresos mensuales) para obtener el número de meses de runway." },
    { q: "¿Cuál es la diferencia entre runway estático y dinámico?", a: "El runway estático asume que la quema neta actual se mantiene constante; el runway dinámico simula mes a mes aplicando las tasas de crecimiento esperadas de ingresos y gastos." },
    { q: "¿Cuándo debo empezar a recaudar mi próxima ronda de inversión?", a: "Muchos inversionistas recomiendan iniciar el proceso cuando te quedan entre 6 y 9 meses de runway, ya que levantar capital generalmente toma varios meses." },
    { q: "¿Qué es la tasa de quema neta (burn rate)?", a: "Es la cantidad de efectivo que una startup consume mensualmente, calculada como gastos mensuales menos ingresos mensuales." },
    { q: "¿Qué significa tener flujo de caja positivo?", a: "Significa que tus ingresos mensuales superan tus gastos mensuales, por lo que en lugar de consumir efectivo, tu startup lo está generando." },
    { q: "¿Cómo afecta el crecimiento de ingresos a mi runway?", a: "Si tus ingresos crecen más rápido que tus gastos, tu runway dinámico se extenderá más allá de lo que indica el cálculo estático simple." },
    { q: "¿Debo reducir gastos o aumentar ingresos para extender mi runway?", a: "Ambas estrategias ayudan, pero reducir gastos generalmente tiene un impacto más inmediato y predecible que esperar un aumento de ingresos." },
    { q: "¿Qué runway es considerado saludable para una startup?", a: "Generalmente se recomienda mantener al menos 12-18 meses de runway, y comenzar a recaudar una nueva ronda cuando quedan 6-9 meses." },
    { q: "¿Cómo se calcula el saldo proyectado en 6 meses?", a: "Se simula el saldo de efectivo mes a mes durante 6 meses, aplicando los ingresos y gastos actuales (y su crecimiento esperado si corresponde) para proyectar el saldo final." },
    { q: "¿El runway cambia si contrato más empleados?", a: "Sí, contratar nuevos empleados generalmente aumenta tus gastos mensuales, lo que incrementa tu tasa de quema neta y reduce tu runway, salvo que también genere un aumento proporcional de ingresos." },
    { q: "¿Cómo comunico mi runway a los inversionistas?", a: "Presenta tanto el runway estático (situación actual) como el dinámico (con tendencia de crecimiento), explicando claramente los supuestos usados en cada proyección." },
    { q: "¿Qué pasa si mi runway dinámico muestra '120+' meses?", a: "Significa que, según tus tasas de crecimiento ingresadas, tu startup no se quedaría sin efectivo dentro de un horizonte razonable de proyección (generalmente porque los ingresos crecen más rápido que los gastos)." },
    { q: "¿Con qué frecuencia debo recalcular el runway de mi startup?", a: "Se recomienda recalcularlo mensualmente, o inmediatamente después de cambios significativos como una ronda de inversión, contrataciones grandes, o cambios importantes en ingresos." },
  ],
  relatedCalculators: ["Calculadora de MRR", "Calculadora de Burn Rate", "Calculadora de CAC", "Calculadora de LTV"],
  youMayLike: pickYouMayLike("runway-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Runway",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};