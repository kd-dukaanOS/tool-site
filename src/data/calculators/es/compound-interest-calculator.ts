// src/data/calculators/es/compound-interest-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const compoundInterestCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Interés Compuesto 2026 — Crecimiento de Inversión",
    metaDescription: "Calcula el valor de vencimiento, interés total ganado y tasa anual efectiva de tu inversión con interés compuesto. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/compound-interest-calculator",
    ogTitle: "Calculadora de Interés Compuesto",
    ogDescription: "Descubre cuánto crece tu dinero con interés compuesto según la frecuencia de capitalización.",
    twitterTitle: "Calculadora de Interés Compuesto 2026",
    twitterDescription: "Calcula el crecimiento de tu inversión con interés compuesto al instante.",
  },
  hero: {
    text: "La Calculadora de Interés Compuesto muestra cómo crece tu capital con el tiempo cuando el interés ganado se reinvierte y comienza a generar más interés, según la frecuencia de capitalización elegida.",
  },
  about: {
    text: `El interés compuesto ocurre cuando el interés ganado se suma al capital y, a partir de ese momento, también genera interés — a diferencia del interés simple, que solo se calcula sobre el capital original.

Esta calculadora proyecta el valor de vencimiento de tu inversión a partir del monto inicial, la tasa de interés anual, el período de tiempo y la frecuencia de capitalización (anual, semestral, trimestral, mensual o diaria), mostrando también la tasa anual efectiva real y un programa de crecimiento año por año.

Limitaciones: asume una tasa de interés constante durante todo el período y no incluye impuestos sobre las ganancias ni aportes adicionales periódicos.`,
  },
  formula: {
    formula: "Valor de Vencimiento = Capital × (1 + Tasa/n)^(n × Años)",
    variables: [
      { symbol: "n", meaning: "Frecuencia de capitalización por año (1=anual, 4=trimestral, 12=mensual, 365=diaria)" },
      { symbol: "Tasa Anual Efectiva", meaning: "El rendimiento real anual una vez aplicado el efecto de la capitalización" },
      { symbol: "Multiplicador de Crecimiento", meaning: "Cuántas veces se multiplica el capital original al vencimiento" },
    ],
    explanation: "El capital se compone repetidamente n veces por año durante el número de años ingresado; mientras más frecuente sea la capitalización, mayor será el valor final para la misma tasa nominal.",
    interpretation: "Por ejemplo, $100,000 al 8.5% anual durante 5 años con capitalización anual crecen a aproximadamente $150,366; con capitalización mensual, el resultado es ligeramente mayor.",
  },
  steps: [
    "Ingresa el monto del capital inicial.",
    "Ingresa la tasa de interés anual.",
    "Ingresa el período de tiempo en años.",
    "Ingresa la frecuencia de capitalización (1, 2, 4, 12 o 365 veces por año).",
    "Haz clic en Calcular para ver el valor de vencimiento, el interés ganado y el programa de crecimiento anual.",
  ],
  examples: [
    { inputs: "Capital: $100,000, Tasa: 8.5%, Años: 5, Frecuencia: Anual", result: "Valor de Vencimiento: ~$150,366", explanation: "Una inversión de mediano plazo con capitalización anual estándar." },
    { inputs: "Capital: $50,000, Tasa: 6%, Años: 10, Frecuencia: Mensual", result: "Valor de Vencimiento: ~$91,000", explanation: "La capitalización mensual genera un rendimiento ligeramente superior a la anual para la misma tasa." },
    { inputs: "Capital: $10,000, Tasa: 10%, Años: 20, Frecuencia: Trimestral", result: "Valor de Vencimiento: ~$72,500", explanation: "A largo plazo, el efecto compuesto multiplica significativamente el capital inicial." },
  ],
  practicalUses: [
    "Proyectar el crecimiento de un depósito a plazo fijo o inversión a largo plazo",
    "Comparar cómo distintas frecuencias de capitalización afectan el rendimiento final",
    "Calcular cuánto tiempo necesitas para duplicar tu inversión a una tasa dada",
    "Entender la diferencia entre la tasa nominal y la tasa anual efectiva real",
    "Planear metas de ahorro a largo plazo con una tasa de interés esperada",
  ],
  expertTips: [
    "Una capitalización más frecuente (mensual o diaria) siempre produce un rendimiento ligeramente mayor que la anual para la misma tasa nominal.",
    "La tasa anual efectiva es el número real que debes comparar entre distintos productos financieros, no solo la tasa nominal anunciada.",
    "El interés compuesto favorece los horizontes de tiempo largos — mientras antes inviertas, mayor será el efecto multiplicador.",
    "Usa el programa de crecimiento año por año para visualizar cuánto del valor final proviene de interés versus tu capital original.",
  ],
  commonMistakes: [
    { mistake: "Confundir la tasa nominal con la tasa anual efectiva", fix: "La tasa efectiva siempre es igual o mayor que la nominal cuando la capitalización es más frecuente que anual — revisa ambos valores." },
    { mistake: "Asumir que la frecuencia de capitalización no afecta el resultado", fix: "Una capitalización mensual o diaria produce un valor final mayor que la anual para la misma tasa declarada." },
    { mistake: "No considerar impuestos sobre el interés ganado", fix: "Esta calculadora muestra el interés bruto; verifica si tu jurisdicción grava las ganancias por intereses." },
    { mistake: "Usar un período de tiempo poco realista", fix: "Proyecciones a más de 30-40 años suelen ser poco confiables debido a cambios de tasa e inflación no modelados." },
  ],
  faq: [
    { q: "¿Cómo se calcula el interés compuesto?", a: "Se usa la fórmula Capital × (1 + Tasa/n)^(n × Años), donde n es la frecuencia de capitalización por año." },
    { q: "¿Cuál es la diferencia entre interés simple y compuesto?", a: "El interés simple se calcula solo sobre el capital original; el interés compuesto se calcula sobre el capital más el interés ya acumulado." },
    { q: "¿Qué es la tasa anual efectiva?", a: "Es el rendimiento real anual una vez que se aplica el efecto de la capitalización, generalmente mayor que la tasa nominal declarada." },
    { q: "¿La capitalización mensual es mejor que la anual?", a: "Para el inversionista, sí — la capitalización más frecuente produce un valor final ligeramente mayor para la misma tasa nominal." },
    { q: "¿Cuánto tiempo tarda mi dinero en duplicarse con interés compuesto?", a: "Puedes estimarlo dividiendo 72 entre la tasa de interés anual (Regla del 72); por ejemplo, al 8% tardaría aproximadamente 9 años." },
    { q: "¿Esta calculadora incluye aportes mensuales adicionales?", a: "No, esta versión calcula el crecimiento de una suma única (lump sum) sin aportes periódicos adicionales." },
    { q: "¿Qué frecuencia de capitalización debo elegir para mi cálculo?", a: "Usa la frecuencia que realmente ofrece tu banco o producto financiero, indicada en los términos de la cuenta o inversión." },
    { q: "¿El interés compuesto se aplica a las cuentas de ahorro?", a: "Sí, la mayoría de las cuentas de ahorro y depósitos a plazo fijo usan interés compuesto, generalmente con capitalización mensual o diaria." },
    { q: "¿Qué es el multiplicador de crecimiento?", a: "Es cuántas veces se multiplica tu capital original al final del período; un multiplicador de 3x significa que tu dinero se triplicó." },
    { q: "¿Esta calculadora sirve para deudas o solo para inversiones?", a: "El mismo principio aplica a deudas con interés compuesto, aunque esta calculadora está orientada a mostrar crecimiento de inversiones." },
    { q: "¿Por qué mi banco muestra una tasa distinta a la que calculé aquí?", a: "Verifica que estés usando la misma frecuencia de capitalización y que no haya comisiones o impuestos adicionales no reflejados en la tasa nominal." },
    { q: "¿El interés compuesto diario es significativamente mejor que el mensual?", a: "La diferencia es pequeña para la mayoría de las tasas — el mayor salto ocurre entre capitalización anual y mensual, no entre mensual y diaria." },
  ],
  relatedCalculators: ["Calculadora de Interés Simple", "Calculadora de SIP", "Calculadora de Depósito a Plazo Fijo (FD)", "Calculadora de CAGR"],
  youMayLike: pickYouMayLike("compound-interest-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Interés Compuesto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};