// src/data/calculators/es/sip-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const sipCalculatorContent = {
  meta: {
    seoTitle: "Calculadora SIP (Plan de Inversión Sistemática) 2026",
    metaDescription: "Calcula el valor de vencimiento de tu inversión SIP mensual con interés compuesto. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/sip-calculator",
    ogTitle: "Calculadora SIP",
    ogDescription: "Calcula cuánto crecerá tu inversión mensual con SIP.",
    twitterTitle: "Calculadora SIP (Inversión Sistemática)",
    twitterDescription: "Calcula tu valor de vencimiento SIP al instante.",
  },
  hero: {
    text: "La Calculadora SIP calcula el valor de vencimiento de tu inversión mensual sistemática (SIP), mostrando el monto invertido, los retornos estimados y el crecimiento año por año con interés compuesto.",
  },
  about: {
    text: `Un SIP (Systematic Investment Plan / Plan de Inversión Sistemática) es una forma de invertir un monto fijo de dinero cada mes en un fondo mutuo u otro instrumento de inversión, muy popular en India como estrategia de ahorro disciplinado a largo plazo.

Esta calculadora recibe tu inversión mensual, la tasa de retorno anual esperada, y el plazo en años, y calcula el valor de vencimiento proyectado, el monto total invertido, los retornos estimados y el crecimiento año por año, incluyendo una gráfica visual de la evolución.

Limitaciones: la calculadora asume una tasa de retorno anual constante durante todo el plazo; los retornos reales de fondos mutuos y mercados de inversión fluctúan y no están garantizados.`,
  },
  formula: {
    formula: "Valor de Vencimiento = P × [((1+r)^n − 1) / r] × (1+r)",
    variables: [
      { symbol: "P", meaning: "Inversión mensual (monto fijo aportado cada mes)" },
      { symbol: "r, n", meaning: "r es la tasa de retorno mensual (tasa anual dividida entre 12), n es el número total de meses (años × 12)" },
    ],
    explanation: "Se aplica la fórmula estándar de valor futuro de una anualidad con aportes mensuales, calculando cómo cada aporte mensual crece con interés compuesto hasta el final del plazo; el monto invertido total es simplemente la inversión mensual multiplicada por el número de meses, y los retornos estimados son la diferencia entre el valor de vencimiento y el monto invertido.",
    interpretation: "Por ejemplo, invirtiendo ₹10,000 mensuales durante 15 años con un retorno esperado del 12% anual, el valor de vencimiento puede superar significativamente el monto total invertido gracias al interés compuesto.",
  },
  steps: [
    "Ingresa tu inversión mensual.",
    "Ingresa la tasa de retorno anual esperada.",
    "Ingresa el plazo de inversión en años.",
    "Haz clic en Calcular para ver el valor de vencimiento, monto invertido y retornos estimados.",
    "Revisa la gráfica y la tabla de crecimiento año por año.",
  ],
  examples: [
    { inputs: "Inversión Mensual: ₹10,000, Retorno: 12%, Plazo: 15 años", result: "Valor de vencimiento significativamente mayor al monto invertido", explanation: "Un SIP a largo plazo con retorno moderado típico de fondos de renta variable indios." },
    { inputs: "Inversión Mensual: ₹5,000, Retorno: 8%, Plazo: 10 años", result: "Crecimiento más moderado por el retorno y plazo menores", explanation: "Un SIP más conservador con menor riesgo y retorno esperado." },
    { inputs: "Inversión Mensual: ₹15,000, Retorno: 10%, Plazo: 20 años", result: "Crecimiento sustancial gracias al plazo extendido de inversión", explanation: "Plazos más largos amplifican significativamente el efecto del interés compuesto en un SIP." },
  ],
  practicalUses: [
    "Planear tu inversión mensual en fondos mutuos usando la estrategia SIP",
    "Comparar cómo distintos montos mensuales afectan tu valor de vencimiento",
    "Ver el impacto de aumentar tu inversión mensual en tu resultado final",
    "Establecer metas realistas de inversión a largo plazo para objetivos financieros específicos",
    "Visualizar el crecimiento año por año de tu inversión SIP mediante la gráfica",
  ],
  expertTips: [
    "Comenzar tu SIP más temprano tiene un impacto mucho mayor en el valor final que invertir montos más grandes por menos tiempo, debido al poder del interés compuesto.",
    "Aumentar tu inversión mensual en pasos regulares (conocido como 'SIP step-up') puede acelerar significativamente el crecimiento de tu valor de vencimiento.",
    "Los retornos de fondos mutuos de renta variable fluctúan año a año; usa una tasa de retorno conservadora basada en promedios históricos de largo plazo para tus proyecciones.",
    "Mantener tu SIP activo durante caídas del mercado (en lugar de detenerlo) generalmente beneficia a largo plazo, ya que compras más unidades cuando los precios son bajos.",
  ],
  commonMistakes: [
    { mistake: "Usar una tasa de retorno poco realista en la proyección", fix: "Basa tu tasa esperada en promedios históricos razonables del tipo de fondo que planeas usar, no en rendimientos excepcionales de corto plazo." },
    { mistake: "Detener el SIP durante caídas del mercado", fix: "Mantener la inversión constante durante caídas generalmente beneficia a largo plazo, ya que compras más unidades a precios más bajos." },
    { mistake: "Subestimar el impacto de comenzar temprano", fix: "El tiempo invertido tiene un efecto mayor en el valor final que el monto mensual; comenzar antes, incluso con montos pequeños, genera mejores resultados a largo plazo." },
    { mistake: "No revisar ni ajustar el SIP con el tiempo", fix: "Aumenta tu inversión mensual periódicamente conforme tus ingresos crezcan, para maximizar tu valor de vencimiento final." },
  ],
  faq: [
    { q: "¿Qué es un SIP (Plan de Inversión Sistemática)?", a: "Es una forma de invertir un monto fijo de dinero cada mes en un fondo mutuo u otro instrumento de inversión, popular en India como estrategia de ahorro disciplinado a largo plazo." },
    { q: "¿Cómo se calcula el valor de vencimiento de un SIP?", a: "Se usa la fórmula de valor futuro de una anualidad con aportes mensuales, que calcula cómo cada aporte crece con interés compuesto hasta el final del plazo de inversión." },
    { q: "¿Cuál es la diferencia entre el monto invertido y el valor de vencimiento?", a: "El monto invertido es la suma de todos tus aportes mensuales sin interés; el valor de vencimiento incluye ese monto más todos los retornos generados por el interés compuesto." },
    { q: "¿Qué tasa de retorno debo usar para proyectar mi SIP?", a: "Depende del tipo de fondo; los fondos de renta variable históricamente han promediado entre 10-15% anual a largo plazo en India, aunque los retornos reales varían y no están garantizados." },
    { q: "¿Es mejor invertir en SIP por más tiempo o con montos más altos?", a: "Invertir por más tiempo generalmente tiene un mayor impacto en el valor final debido al interés compuesto, aunque ambos factores (tiempo y monto) contribuyen significativamente." },
    { q: "¿Qué pasa si dejo de hacer mis aportes SIP antes de completar el plazo?", a: "El valor acumulado hasta ese punto seguirá creciendo con interés compuesto si permanece invertido, pero no recibirá los aportes adicionales planeados originalmente." },
    { q: "¿Debo detener mi SIP cuando el mercado cae?", a: "Generalmente no se recomienda; mantener el SIP activo durante caídas del mercado te permite comprar más unidades a precios más bajos, lo que puede beneficiar el retorno a largo plazo." },
    { q: "¿Qué es el 'SIP step-up' y cómo afecta mi inversión?", a: "Es la práctica de aumentar tu inversión mensual periódicamente (por ejemplo, cada año), lo cual puede acelerar significativamente el crecimiento de tu valor de vencimiento comparado con un monto fijo." },
    { q: "¿Los retornos de un SIP están garantizados?", a: "No, los retornos dependen del desempeño real del fondo mutuo o instrumento de inversión elegido; esta calculadora usa una tasa esperada constante solo como estimación." },
    { q: "¿Cuánto debo invertir mensualmente en un SIP para alcanzar una meta específica?", a: "Puedes ajustar el monto mensual en esta calculadora hasta que el valor de vencimiento proyectado coincida con tu meta financiera deseada para el plazo elegido." },
    { q: "¿Cómo afecta el plazo de inversión al valor de vencimiento de un SIP?", a: "A mayor plazo, mayor es el efecto del interés compuesto sobre tus aportes, generando un crecimiento proporcionalmente mayor cuanto más tiempo mantengas la inversión." },
    { q: "¿Qué diferencia hay entre un SIP y una inversión de suma única (lump sum)?", a: "El SIP distribuye la inversión en aportes mensuales regulares, promediando el costo de compra con el tiempo; una inversión de suma única coloca todo el capital de una sola vez." },
    { q: "¿Puedo usar esta calculadora para cualquier tipo de fondo mutuo?", a: "Sí, esta calculadora funciona para proyectar cualquier inversión mensual sistemática, sin importar el tipo específico de fondo mutuo u otro instrumento que elijas." },
    { q: "¿Cómo interpreto el retorno porcentual mostrado en el resultado?", a: "El retorno porcentual muestra los retornos estimados como porcentaje del monto total invertido, dándote una idea de la ganancia relativa generada durante todo el plazo." },
  ],
  relatedCalculators: ["Calculadora de PPF", "Calculadora de Interés Compuesto", "Calculadora de Depósito Fijo (FD)", "Calculadora de Lump Sum"],
  youMayLike: pickYouMayLike("sip-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora SIP",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};