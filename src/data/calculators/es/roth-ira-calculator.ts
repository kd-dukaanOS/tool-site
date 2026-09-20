// src/data/calculators/es/roth-ira-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const rothIraCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Roth IRA 2026",
    metaDescription: "Proyecta tu saldo de Roth IRA al jubilarte con crecimiento libre de impuestos. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/roth-ira-calculator",
    ogTitle: "Calculadora de Roth IRA",
    ogDescription: "Proyecta cuánto tendrás en tu Roth IRA al jubilarte.",
    twitterTitle: "Calculadora Roth IRA 2026",
    twitterDescription: "Calcula tu saldo proyectado de Roth IRA al instante.",
  },
  hero: {
    text: "La Calculadora de Roth IRA proyecta tu saldo al momento de jubilarte, usando tu saldo actual, aporte anual y retorno esperado, mostrando cuánto de ese saldo será crecimiento de inversión libre de impuestos.",
  },
  about: {
    text: `Una Roth IRA es una cuenta de retiro individual en Estados Unidos donde aportas dinero después de impuestos, pero todo el crecimiento y los retiros calificados en la jubilación están completamente libres de impuestos.

Esta calculadora recibe tu edad actual, edad de jubilación planeada, saldo actual de Roth IRA, aporte anual y retorno esperado, y proyecta tu saldo final al jubilarte, desglosando cuánto proviene de tus aportes totales y cuánto del crecimiento de inversión acumulado.

Limitaciones: la calculadora asume un retorno anual constante y aportes anuales fijos; los mercados reales fluctúan, y los límites de aporte de Roth IRA pueden cambiar cada año fiscal según ajustes del IRS.`,
  },
  formula: {
    formula: "Saldo Proyectado = Saldo Actual × (1+r)^n + Aporte Anual × [((1+r)^n − 1) / r]",
    variables: [
      { symbol: "r", meaning: "Tasa de retorno anual esperada (en decimal)" },
      { symbol: "n", meaning: "Número de años hasta la jubilación (edad de jubilación menos edad actual)" },
    ],
    explanation: "Se proyecta el saldo actual con interés compuesto anual durante los años restantes hasta la jubilación, y se suma el valor futuro de los aportes anuales realizados durante ese mismo período, usando la fórmula de valor futuro de una anualidad.",
    interpretation: "Por ejemplo, con $8,000 de saldo actual, $7,000 de aporte anual, 7% de retorno esperado y 37 años hasta la jubilación, el saldo proyectado puede superar el millón de dólares, la mayor parte proveniente del crecimiento compuesto.",
  },
  steps: [
    "Ingresa tu edad actual y tu edad de jubilación planeada.",
    "Ingresa tu saldo actual de Roth IRA.",
    "Ingresa tu aporte anual planeado.",
    "Ingresa tu retorno anual esperado.",
    "Haz clic en Calcular para ver tu saldo proyectado, aportes totales y crecimiento de inversión.",
  ],
  examples: [
    { inputs: "Edad Actual: 28, Jubilación: 65, Saldo: $8,000, Aporte: $7,000/año, Retorno: 7%", result: "Saldo proyectado superior a $1,000,000, mayormente crecimiento compuesto", explanation: "Un ejemplo típico de una persona joven comenzando temprano su Roth IRA." },
    { inputs: "Edad Actual: 45, Jubilación: 65, Saldo: $50,000, Aporte: $7,000/año, Retorno: 6%", result: "Saldo proyectado significativo pero menor por el plazo más corto", explanation: "Comenzar más tarde reduce el tiempo de crecimiento compuesto disponible." },
    { inputs: "Edad Actual: 30, Jubilación: 60, Saldo: $0, Aporte: $6,500/año, Retorno: 8%", result: "Saldo proyectado construido enteramente desde cero mediante aportes constantes", explanation: "Incluso sin saldo inicial, aportes constantes y un buen retorno generan un saldo considerable." },
  ],
  practicalUses: [
    "Planear tu estrategia de ahorro para la jubilación usando una Roth IRA",
    "Comparar cómo distintos montos de aporte anual afectan tu saldo final",
    "Ver el impacto de comenzar a invertir antes vs después en tu jubilación",
    "Entender cuánto de tu saldo futuro provendrá de aportes vs crecimiento de inversión",
    "Establecer metas realistas de aporte anual para alcanzar un saldo de jubilación objetivo",
  ],
  expertTips: [
    "Los retiros calificados de una Roth IRA (después de los 59½ años y con la cuenta abierta por al menos 5 años) están completamente libres de impuestos, incluyendo todo el crecimiento acumulado.",
    "Comenzar a aportar a una Roth IRA lo antes posible maximiza el efecto del interés compuesto a largo plazo, incluso con aportes modestos.",
    "El límite de aporte anual a una Roth IRA se ajusta periódicamente por el IRS; verifica siempre el límite vigente para el año fiscal actual.",
    "A diferencia de una Traditional IRA, las Roth IRA no requieren distribuciones mínimas obligatorias (RMD) durante la vida del titular original.",
  ],
  commonMistakes: [
    { mistake: "Aportar más del límite anual permitido por el IRS", fix: "Verifica el límite de aporte vigente para tu edad y año fiscal antes de definir tu aporte anual planeado." },
    { mistake: "Esperar demasiado tiempo para comenzar a aportar", fix: "El efecto del interés compuesto es más poderoso cuanto más tiempo tiene para crecer; comenzar antes, incluso con montos pequeños, genera mayor beneficio a largo plazo." },
    { mistake: "Asumir un retorno anual poco realista en la proyección", fix: "Usa una tasa de retorno conservadora y razonable basada en promedios históricos de mercado, no en rendimientos excepcionales de corto plazo." },
    { mistake: "No considerar los límites de ingreso para poder aportar a una Roth IRA", fix: "Existen límites de ingreso (MAGI) que pueden reducir o eliminar tu elegibilidad para aportar directamente a una Roth IRA; verifica tu elegibilidad específica." },
  ],
  faq: [
    { q: "¿Qué es una Roth IRA?", a: "Es una cuenta de retiro individual en Estados Unidos donde aportas dinero después de impuestos, pero el crecimiento y los retiros calificados en la jubilación están completamente libres de impuestos." },
    { q: "¿Cómo se calcula el saldo proyectado de una Roth IRA?", a: "Se proyecta el saldo actual con interés compuesto anual, y se suma el valor futuro de los aportes anuales realizados durante los años hasta la jubilación." },
    { q: "¿Cuál es el límite de aporte anual a una Roth IRA?", a: "El límite se ajusta periódicamente por el IRS y depende de tu edad (con un monto adicional de 'catch-up' para personas de 50 años o más); verifica siempre el límite vigente para el año fiscal actual." },
    { q: "¿Los retiros de una Roth IRA son realmente libres de impuestos?", a: "Sí, los retiros calificados (generalmente después de los 59½ años y con la cuenta abierta al menos 5 años) están completamente libres de impuestos federales, incluyendo todo el crecimiento acumulado." },
    { q: "¿Cuál es la diferencia entre una Roth IRA y una Traditional IRA?", a: "En una Roth IRA aportas dinero después de impuestos pero los retiros son libres de impuestos; en una Traditional IRA los aportes pueden ser deducibles de impuestos, pero los retiros en la jubilación se gravan como ingreso." },
    { q: "¿Existen límites de ingreso para aportar a una Roth IRA?", a: "Sí, el IRS establece límites de ingreso bruto ajustado modificado (MAGI) que pueden reducir o eliminar tu capacidad de aportar directamente a una Roth IRA según tu estado civil tributario." },
    { q: "¿Puedo retirar mis aportes de Roth IRA antes de la jubilación sin penalización?", a: "Generalmente puedes retirar tus aportes originales (no las ganancias) en cualquier momento sin impuestos ni penalización, ya que ya pagaste impuestos sobre ese dinero al aportarlo." },
    { q: "¿Cuánto debo aportar mensualmente a mi Roth IRA para alcanzar mi meta de jubilación?", a: "Depende de tu saldo actual, años restantes hasta la jubilación y retorno esperado; usa esta calculadora ajustando el aporte anual hasta alcanzar tu saldo objetivo." },
    { q: "¿Las Roth IRA requieren distribuciones mínimas obligatorias (RMD)?", a: "No, a diferencia de las Traditional IRA, las Roth IRA no requieren distribuciones mínimas obligatorias durante la vida del titular original de la cuenta." },
    { q: "¿Qué pasa si mi ingreso es demasiado alto para aportar a una Roth IRA?", a: "Puedes considerar una estrategia conocida como 'Roth IRA backdoor', que consiste en aportar a una Traditional IRA no deducible y luego convertirla a Roth IRA." },
    { q: "¿Cómo afecta el interés compuesto a mi saldo de Roth IRA a largo plazo?", a: "El interés compuesto hace que tu dinero genere retorno no solo sobre tus aportes, sino también sobre el crecimiento previamente acumulado, acelerando significativamente el crecimiento del saldo con el tiempo." },
    { q: "¿Es mejor una Roth IRA si espero pagar más impuestos en el futuro?", a: "Generalmente sí, ya que pagas impuestos ahora a una tasa potencialmente menor, en lugar de pagar impuestos sobre los retiros en el futuro cuando podrías estar en una categoría fiscal más alta." },
    { q: "¿Puedo tener una Roth IRA y un plan 401(k) al mismo tiempo?", a: "Sí, puedes contribuir a ambos tipos de cuentas simultáneamente, siempre que cumplas con los límites de ingreso y aporte específicos de cada una." },
    { q: "¿Qué edad de jubilación debo usar en esta calculadora?", a: "Usa la edad a la que planeas comenzar a retirar fondos de tu Roth IRA; muchas personas usan 65 como referencia estándar, aunque puedes ajustarla según tu plan personal." },
  ],
  relatedCalculators: ["Calculadora Roth vs Traditional IRA", "Calculadora de 401(k)", "Calculadora de Interés Compuesto", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("roth-ira-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Roth IRA",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};