// src/data/calculators/es/social-security-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const socialSecurityCalculatorContent = {
  meta: {
    seoTitle: "Calculadora del Seguro Social 2026 — Estima tu Beneficio Mensual",
    metaDescription: "Estima tu beneficio mensual del Seguro Social a los 62, la edad plena de jubilación y los 70 años. Calculadora gratis con edad de equilibrio para retrasar tu reclamo.",
    canonicalSlug: "/es/finance/social-security-calculator",
    ogTitle: "Calculadora de Beneficios del Seguro Social",
    ogDescription: "Descubre cuánto recibirás del Seguro Social según la edad en que reclames.",
    twitterTitle: "Calculadora del Seguro Social Gratis",
    twitterDescription: "Estima tu beneficio del Seguro Social, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora del Seguro Social estima tu Monto de Seguro Primario (PIA) y tu beneficio mensual a los 62 años, tu edad plena de jubilación, y los 70 años — mostrándote también la edad de equilibrio para decidir si conviene retrasar tu reclamo.",
  },

  about: {
    text: `El Seguro Social (Social Security) es un programa federal de Estados Unidos que paga beneficios mensuales a jubilados según su historial de ingresos. La edad a la que decides reclamar tu beneficio afecta significativamente cuánto recibes cada mes: reclamar antes de tu edad plena de jubilación reduce tu beneficio, mientras que retrasarlo hasta los 70 años lo aumenta.

Esta calculadora usa tu año de nacimiento y tu Promedio de Ingresos Mensuales Indexados (AIME) para estimar tu Monto de Seguro Primario (PIA) usando la fórmula oficial de puntos de quiebre del Seguro Social para 2026. Luego proyecta tu beneficio mensual si reclamas a los 62 años, en tu edad plena de jubilación, a los 70 años, y en la edad que planees reclamar.

También calcula la "edad de equilibrio" — el punto en el que el beneficio acumulado de esperar más tiempo supera al de haber reclamado antes, ayudándote a decidir cuál estrategia de reclamo conviene más según tu expectativa de vida.`,
  },

  formula: {
    formula: "PIA = Suma de porcentajes aplicados a tramos del AIME según los puntos de quiebre de 2026",
    variables: [
      { symbol: "AIME", meaning: "Promedio de Ingresos Mensuales Indexados durante tus 35 años de mayor ingreso" },
      { symbol: "Edad Plena de Jubilación (FRA)", meaning: "La edad en la que recibes el 100% de tu PIA, generalmente 66-67 años según tu año de nacimiento" },
      { symbol: "Ajuste por Edad de Reclamo", meaning: "Reducción si reclamas antes de tu FRA, o aumento si reclamas después, hasta los 70 años" },
    ],
    explanation: "El PIA se calcula aplicando distintos porcentajes a tramos de tu AIME según la fórmula de puntos de quiebre del Seguro Social. Luego, dependiendo de si reclamas antes, en, o después de tu edad plena de jubilación, tu beneficio mensual se reduce o aumenta respecto al PIA.",
    interpretation: "Por ejemplo, con un AIME de $5,000 y nacido en 1985, tu PIA estimado sería un beneficio mensual base a tu edad plena de jubilación; reclamar a los 62 reduciría ese monto significativamente, mientras que esperar hasta los 70 lo aumentaría considerablemente.",
  },

  steps: [
    "Ingresa tu año de nacimiento.",
    "Ingresa tu Promedio de Ingresos Mensuales Indexados (AIME).",
    "Ingresa la edad en la que planeas reclamar tu beneficio.",
    "Haz clic en Calcular.",
    "Revisa tu PIA, tu beneficio a los 62, tu edad plena, los 70 años, y la edad de equilibrio.",
  ],

  examples: [
    { inputs: "Año de Nacimiento: 1985, AIME: $5,000, Edad de Reclamo: 67", result: "Beneficio Estimado a los 67: ~$2,300/mes", explanation: "Reclamar en la edad plena de jubilación da el 100% del PIA calculado." },
    { inputs: "Año de Nacimiento: 1985, AIME: $5,000, Edad de Reclamo: 62", result: "Beneficio Estimado a los 62: ~$1,650/mes", explanation: "Reclamar temprano reduce permanentemente el beneficio mensual." },
    { inputs: "Año de Nacimiento: 1985, AIME: $5,000, Edad de Reclamo: 70", result: "Beneficio Estimado a los 70: ~$2,850/mes", explanation: "Retrasar el reclamo hasta los 70 maximiza el beneficio mensual." },
  ],

  practicalUses: [
    "Decidir a qué edad conviene reclamar tu beneficio del Seguro Social",
    "Comparar el beneficio mensual entre reclamar a los 62, edad plena, y 70 años",
    "Calcular la edad de equilibrio para evaluar si retrasar el reclamo vale la pena según tu expectativa de vida",
    "Planear tu ingreso de jubilación combinando el Seguro Social con otros ahorros",
    "Entender cómo tu historial de ingresos afecta tu beneficio futuro",
  ],

  expertTips: [
    "Retrasar tu reclamo desde tu edad plena de jubilación hasta los 70 años aumenta tu beneficio aproximadamente 8% por cada año de espera.",
    "Si tienes una expectativa de vida más larga que el promedio, retrasar el reclamo generalmente resulta en más dinero total recibido a lo largo de tu vida.",
    "El AIME se calcula sobre tus 35 años de mayores ingresos ajustados por inflación — trabajar más años con ingresos altos puede aumentar tu AIME si reemplaza años de ingresos bajos.",
    "Si estás casado, considera estrategias de reclamo conjunto, ya que los beneficios de cónyuge y sobreviviente pueden verse afectados por cuándo cada uno reclama.",
    "Esta calculadora da una estimación — verifica tu beneficio real y personalizado en tu cuenta de mySocialSecurity en ssa.gov.",
  ],

  commonMistakes: [
    { mistake: "Asumir que reclamar temprano siempre es mejor", fix: "Reclamar a los 62 reduce permanentemente tu beneficio mensual; evalúa tu expectativa de vida y necesidades financieras antes de decidir." },
    { mistake: "No considerar el impacto en beneficios de cónyuge o sobreviviente", fix: "Si estás casado, la edad en que cada cónyuge reclama puede afectar los beneficios combinados de la pareja a largo plazo." },
    { mistake: "Ignorar cómo el AIME se calcula sobre 35 años de ingresos", fix: "Si trabajaste menos de 35 años, los años faltantes cuentan como cero, reduciendo tu AIME — trabajar más años puede mejorar tu beneficio." },
    { mistake: "No verificar el beneficio real en tu cuenta oficial de Seguro Social", fix: "Esta calculadora da una estimación; confirma tu beneficio exacto y personalizado en ssa.gov." },
  ],

  faq: [
    { q: "¿A qué edad puedo empezar a recibir el Seguro Social?", a: "Puedes reclamar tan pronto como a los 62 años, aunque esto reduce tu beneficio mensual permanentemente; el beneficio completo se paga en tu edad plena de jubilación (66-67 años según tu año de nacimiento)." },
    { q: "¿Cuánto aumenta mi beneficio si espero hasta los 70 años?", a: "Retrasar tu reclamo desde la edad plena de jubilación hasta los 70 años aumenta tu beneficio aproximadamente 8% por cada año de espera, hasta un máximo del 124% de tu PIA." },
    { q: "¿Qué es el Monto de Seguro Primario (PIA)?", a: "Es el beneficio mensual base que recibirías a tu edad plena de jubilación, calculado a partir de tu historial de ingresos usando la fórmula de puntos de quiebre del Seguro Social." },
    { q: "¿Cómo se calcula mi AIME?", a: "Se calcula promediando tus 35 años de mayores ingresos ajustados por inflación; si trabajaste menos de 35 años, los años faltantes cuentan como cero." },
    { q: "¿Es mejor reclamar el Seguro Social a los 62, en mi edad plena, o a los 70?", a: "Depende de tu expectativa de vida, necesidades financieras actuales, y situación familiar; reclamar más tarde generalmente resulta en más dinero total si vives más allá de la edad de equilibrio." },
    { q: "¿Qué es la edad de equilibrio en el Seguro Social?", a: "Es la edad a la que el beneficio total acumulado de haber esperado más tiempo supera al de haber reclamado antes, ayudándote a evaluar si retrasar el reclamo vale la pena." },
    { q: "¿Mi cónyuge también recibe beneficios del Seguro Social?", a: "Sí, los cónyuges pueden calificar para beneficios propios o de cónyuge (hasta 50% del beneficio del cónyuge principal), dependiendo de cuál sea mayor." },
    { q: "¿Cuál es mi edad plena de jubilación (FRA)?", a: "Generalmente es 66-67 años dependiendo de tu año de nacimiento; las personas nacidas en 1960 o después tienen una FRA de 67 años." },
    { q: "¿Puedo trabajar mientras recibo beneficios del Seguro Social?", a: "Sí, pero si reclamas antes de tu edad plena de jubilación y sigues trabajando, tu beneficio puede reducirse temporalmente si tus ingresos superan ciertos límites anuales." },
    { q: "¿Los beneficios del Seguro Social están sujetos a impuestos?", a: "Pueden estarlo, dependiendo de tu ingreso combinado total; hasta el 85% de tus beneficios pueden ser gravables según tu nivel de ingreso en la jubilación." },
  ],

  relatedCalculators: ["Calculadora de Impuesto de Seguro Social", "Calculadora de Jubilación", "Calculadora de Ingreso de Jubilación", "Calculadora de 401(k)"],

  youMayLike: pickYouMayLike("social-security-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Beneficios del Seguro Social",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};