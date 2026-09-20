// src/data/calculators/es/coast-fire-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const coastFireCalculatorContent = {
  meta: {
    seoTitle: "Calculadora Coast FIRE 2026 — ¿Ya Puedes Dejar de Ahorrar?",
    metaDescription: "Calcula tu número Coast FIRE y descubre si ya has ahorrado lo suficiente para dejar de contribuir y aún así jubilarte a tiempo.",
    canonicalSlug: "/es/finance/coast-fire-calculator",
    ogTitle: "Calculadora Coast FIRE",
    ogDescription: "Descubre si ya alcanzaste tu número Coast FIRE y puedes dejar de aportar a tu retiro.",
    twitterTitle: "Calculadora Coast FIRE 2026",
    twitterDescription: "Calcula tu número Coast FIRE al instante.",
  },

  hero: {
    text: "La Calculadora Coast FIRE determina cuánto necesitas tener ahorrado hoy para que, sin aportar ni un dólar más, tu dinero crezca por sí solo hasta un número FIRE completo para cuando llegues a tu edad objetivo de jubilación.",
  },

  about: {
    text: `Coast FIRE es una variante del movimiento FIRE (Independencia Financiera, Retiro Anticipado) donde ya no necesitas seguir ahorrando activamente porque tus inversiones actuales, dejadas crecer con interés compuesto, alcanzarán tu meta de jubilación por sí solas.

Esta calculadora usa tu edad actual, tus ahorros actuales, tu edad objetivo de jubilación, tus gastos anuales esperados y una tasa de retorno esperada para determinar tu "número Coast FIRE" — el monto que necesitas tener hoy — y compara ese número con tus ahorros actuales.

Limitaciones: esta calculadora asume un retorno promedio constante y no modela la volatilidad del mercado, cambios en tus gastos futuros, ni eventos inesperados como una crisis financiera personal.`,
  },

  formula: {
    formula: "Número Coast FIRE = Número FIRE Total / (1 + Retorno)^(Edad Objetivo − Edad Actual)",
    variables: [
      { symbol: "Número FIRE Total", meaning: "Gastos anuales en la jubilación dividido entre la tasa de retiro (usualmente 4%)" },
      { symbol: "Retorno Esperado", meaning: "Tasa de rendimiento anual esperada de tus inversiones" },
      { symbol: "Edad Coast FIRE", meaning: "La edad en la que tus ahorros actuales, sin más aportes, alcanzan el número Coast FIRE necesario" },
    ],
    explanation: "Se calcula primero el número FIRE total necesario en la jubilación, luego se descuenta ese monto hacia el presente usando la tasa de retorno esperada durante los años que faltan hasta la jubilación, obteniendo el monto que necesitas tener ahorrado hoy.",
    interpretation: "Por ejemplo, con $150,000 ahorrados a los 30 años, gastos de $50,000 anuales en la jubilación a los 60, y un retorno del 7%, es posible que ya hayas alcanzado o estés cerca de tu número Coast FIRE.",
  },

  steps: [
    "Ingresa tu edad actual, tus ahorros actuales y tu edad objetivo de jubilación.",
    "Ingresa tus gastos anuales esperados en la jubilación y tu contribución anual actual.",
    "Ingresa el retorno esperado, la tasa de inflación y la tasa de retiro.",
    "Haz clic en Calcular.",
    "Revisa tu número Coast FIRE, tu estado actual, tu edad Coast FIRE y el saldo proyectado en la jubilación.",
  ],

  examples: [
    { inputs: "Edad: 30, Ahorros: $150,000, Edad Objetivo: 60, Gastos: $50,000, Retorno: 7%, Retiro: 4%", result: "Estado: Alcanzado", explanation: "Ahorros actuales suficientes para crecer hasta el número FIRE completo sin más aportes." },
    { inputs: "Edad: 25, Ahorros: $20,000, Edad Objetivo: 55, Gastos: $40,000, Retorno: 7%, Retiro: 4%", result: "Estado: Aún No Alcanzado", explanation: "Ahorros insuficientes todavía; se necesita seguir aportando." },
    { inputs: "Edad: 40, Ahorros: $400,000, Edad Objetivo: 55, Gastos: $60,000, Retorno: 6%, Retiro: 4%", result: "Estado: Alcanzado", explanation: "Un ahorrador de mitad de carrera con un fondo sustancial que ya cubre su número Coast FIRE." },
  ],

  practicalUses: [
    "Decidir si puedes reducir o pausar tus aportes de jubilación sin poner en riesgo tu meta",
    "Planear un cambio de carrera hacia un trabajo de menor salario pero más gratificante",
    "Calcular a qué edad podrías alcanzar tu número Coast FIRE si sigues aportando",
    "Evaluar el impacto de aumentar o reducir tu contribución anual actual",
    "Entender cuánto peso tiene el interés compuesto en tu plan de jubilación",
  ],

  expertTips: [
    "Alcanzar Coast FIRE no significa dejar de trabajar — significa que ya no necesitas seguir ahorrando para la jubilación, aunque sí cubrir tus gastos actuales.",
    "Cuanto antes empieces a ahorrar, menor será el número Coast FIRE necesario, ya que el interés compuesto tiene más tiempo para trabajar.",
    "Revisa tu número Coast FIRE cada año, ya que cambios en tus gastos esperados o en el mercado pueden mover la meta.",
    "Un retorno esperado más conservador (6-7%) da una estimación más realista que usar promedios históricos optimistas.",
    "Considera la inflación al estimar tus gastos futuros en la jubilación, ya que el poder adquisitivo del dinero cambia con el tiempo.",
  ],

  commonMistakes: [
    { mistake: "Asumir que Coast FIRE significa poder retirarse de inmediato", fix: "Coast FIRE solo cubre tu jubilación futura; aún necesitas ingresos para gastos actuales hasta la edad objetivo." },
    { mistake: "Usar un retorno esperado poco realista", fix: "Usa una tasa conservadora (6-8%) en lugar de retornos excepcionales de años específicos del mercado." },
    { mistake: "No actualizar el cálculo tras cambios importantes de vida", fix: "Recalcula tu número Coast FIRE si cambian tus gastos esperados, tu edad objetivo o tus ahorros actuales." },
    { mistake: "Ignorar el efecto de la inflación en los gastos futuros", fix: "Considera que tus gastos en dólares futuros serán mayores que hoy debido a la inflación acumulada." },
  ],

  faq: [
    { q: "¿Qué es Coast FIRE?", a: "Es el punto en el que tus ahorros actuales, sin más aportes, crecerán por interés compuesto hasta cubrir tu jubilación en la edad objetivo." },
    { q: "¿Cómo se calcula el número Coast FIRE?", a: "Se calcula el número FIRE total (gastos anuales dividido entre la tasa de retiro) y se descuenta hacia el presente usando la tasa de retorno esperada durante los años restantes hasta la jubilación." },
    { q: "¿Cuál es la diferencia entre Coast FIRE y FIRE tradicional?", a: "FIRE tradicional requiere tener el número FIRE completo antes de dejar de trabajar; Coast FIRE solo requiere tener el monto que crecerá por sí solo hasta esa meta." },
    { q: "¿Si alcanzo Coast FIRE puedo dejar de trabajar?", a: "No necesariamente; puedes dejar de ahorrar para la jubilación, pero aún necesitas ingresos para cubrir tus gastos actuales hasta la edad objetivo." },
    { q: "¿Qué tasa de retiro debo usar en esta calculadora?", a: "La tasa del 4% es la más comúnmente usada (regla del 4%), aunque algunos prefieren tasas más conservadoras como 3.5%." },
    { q: "¿Cómo afecta la edad actual a mi número Coast FIRE?", a: "Mientras más joven seas, menor será el número Coast FIRE necesario, ya que tienes más años para que el interés compuesto trabaje." },
    { q: "¿Qué pasa si aún no he alcanzado mi número Coast FIRE?", a: "La calculadora te muestra a qué edad lo alcanzarías si continúas con tu contribución anual actual." },
    { q: "¿Debo considerar la inflación en mis gastos de jubilación?", a: "Sí, es recomendable usar el valor de tus gastos en términos de poder adquisitivo actual y ajustar por inflación esperada." },
    { q: "¿Coast FIRE funciona igual para cualquier edad de jubilación?", a: "Sí, la fórmula se ajusta automáticamente según la diferencia entre tu edad actual y tu edad objetivo de jubilación." },
    { q: "¿Qué retorno de inversión debo usar para calcular mi Coast FIRE?", a: "Un retorno anual entre 6% y 8% antes de inflación es un supuesto razonable basado en promedios históricos del mercado bursátil." },
    { q: "¿Coast FIRE es lo mismo que Barista FIRE?", a: "Son similares pero distintos: Coast FIRE no requiere trabajo adicional necesariamente, mientras que Barista FIRE asume un trabajo de medio tiempo con beneficios durante la transición." },
    { q: "¿Cómo afecta seguir aportando después de alcanzar Coast FIRE?", a: "Seguir aportando después de alcanzar Coast FIRE simplemente adelanta tu jubilación o aumenta tu colchón financiero final." },
    { q: "¿Esta calculadora considera el Seguro Social o pensiones?", a: "No, esta calculadora se basa únicamente en tus ahorros e inversiones personales, sin incluir ingresos futuros de pensiones o Seguro Social." },
  ],

  relatedCalculators: ["Calculadora FIRE", "Calculadora de Jubilación", "Calculadora de Interés Compuesto", "Calculadora de Roth IRA"],

  youMayLike: pickYouMayLike("coast-fire-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora Coast FIRE",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};