// src/data/calculators/es/retirement-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const retirementCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Jubilación — Proyección de Ahorros e Ingreso",
    metaDescription: "Proyecta tus ahorros de jubilación y el ingreso mensual estimado según tu edad, ahorros actuales, aporte mensual y retorno esperado. Calculadora gratis.",
    canonicalSlug: "/es/finance/retirement-calculator",
    ogTitle: "Calculadora de Jubilación",
    ogDescription: "Descubre tus ahorros proyectados de jubilación y tu ingreso mensual estimado.",
    twitterTitle: "Calculadora de Jubilación Gratis",
    twitterDescription: "Proyecta tus ahorros de jubilación, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Jubilación proyecta tus ahorros al momento de jubilarte, a partir de tu edad actual, ahorros actuales, aporte mensual y retorno esperado, y estima un ingreso mensual sostenible usando la regla de retiro del 4%.",
  },

  about: {
    text: `Planear tu jubilación requiere entender cómo el crecimiento compuesto transforma aportes regulares en un ahorro significativo con el tiempo, y cuánto ingreso mensual puede generar razonablemente ese ahorro sin agotarse.

Esta calculadora usa tu edad actual y edad de jubilación deseada, tus ahorros actuales, tu aporte mensual, y el retorno anual esperado de tu inversión, para proyectar tu saldo total al jubilarte. También muestra cuánto de ese saldo proviene de tus propios aportes versus el crecimiento de la inversión.

Finalmente, aplica la conocida "regla del 4%" — retirar el 4% de tu saldo cada año se considera generalmente sostenible durante un retiro de 30 años según estudios históricos — para estimar tu ingreso mensual disponible en la jubilación.`,
  },

  formula: {
    formula: "Saldoₙ = (Saldoₙ₋₁ + Aporte Mensual) × (1 + Retorno Mensual)",
    variables: [
      { symbol: "Ingreso Mensual Estimado", meaning: "(Ahorros Proyectados × 4%) ÷ 12" },
      { symbol: "Crecimiento Total", meaning: "Ahorros Proyectados − Ahorros Actuales − Aportes Totales" },
    ],
    explanation: "Cada mes, tu aporte se suma al saldo, y el saldo completo se compone al retorno mensual esperado, repetido hasta tu edad de jubilación; luego se aplica la regla del 4% para estimar el ingreso mensual sostenible.",
    interpretation: "Por ejemplo, comenzando con $20,000 a los 30 años, aportando $500 mensuales con un retorno del 7% hasta los 65 años, se proyecta un saldo de aproximadamente $1,050,000, generando un ingreso mensual estimado de ~$3,500.",
  },

  steps: [
    "Ingresa tu edad actual y tu edad objetivo de jubilación.",
    "Ingresa tus ahorros actuales para el retiro.",
    "Ingresa tu aporte mensual planeado.",
    "Ingresa tu retorno anual esperado de inversión.",
    "Haz clic en Calcular.",
    "Revisa tus ahorros proyectados, aportes totales, crecimiento total e ingreso mensual estimado.",
  ],

  examples: [
    { inputs: "Edad 30→65, Ahorros: $20,000, Aporte: $500/mes, Retorno: 7%", result: "Ahorros Proyectados: ~$1,050,000, Ingreso Mensual: ~$3,500", explanation: "Un ahorrador consistente de mitad de carrera con un aporte moderado." },
    { inputs: "Edad 25→65, Ahorros: $0, Aporte: $300/mes, Retorno: 7%", result: "Ahorros Proyectados: ~$760,000, Ingreso Mensual: ~$2,530", explanation: "Empezar temprano permite que el interés compuesto trabaje durante 40 años completos." },
    { inputs: "Edad 45→65, Ahorros: $150,000, Aporte: $1,000/mes, Retorno: 6%", result: "Ahorros Proyectados: ~$740,000, Ingreso Mensual: ~$2,470", explanation: "Un comienzo más tardío compensado con un aporte mensual más alto." },
  ],

  practicalUses: [
    "Verificar si tus ahorros actuales van encaminados para una jubilación cómoda",
    "Estimar cuánto ingreso mensual tendrás disponible al jubilarte",
    "Probar el impacto de aumentar tu aporte mensual en tu proyección final",
    "Planear una edad de jubilación según un saldo objetivo específico",
    "Entender cuánto de tu saldo final proviene del crecimiento versus tus aportes",
  ],

  expertTips: [
    "Empezar antes importa más que aportar más después — el tiempo en el mercado es la palanca más grande en esta proyección.",
    "La regla del 4% es una guía general basada en estudios históricos; algunos prefieren una tasa más conservadora (3-3.5%) para mayor seguridad en retiros muy largos.",
    "Pequeños aumentos en tu aporte mensual se componen significativamente a lo largo de décadas.",
    "Esta proyección no considera la volatilidad del mercado — trata el resultado como un promedio a largo plazo, no una garantía.",
    "Revisa y ajusta tu plan cada vez que recibas un aumento salarial, destinando parte del incremento a tu aporte mensual.",
  ],

  commonMistakes: [
    { mistake: "Empezar a ahorrar tarde y esperar recuperar el tiempo perdido fácilmente", fix: "Un comienzo tardío generalmente requiere aportes mucho más altos para alcanzar el mismo saldo final — empieza lo antes posible." },
    { mistake: "Usar un retorno de inversión poco realista", fix: "Los promedios históricos del mercado bursátil se modelan comúnmente entre 6-8% antes de inflación; evita proyecciones demasiado optimistas." },
    { mistake: "Ignorar la regla del 4% al planear el ingreso de jubilación", fix: "Retirar más del 4% anual aumenta significativamente el riesgo de agotar tus ahorros antes de tiempo." },
    { mistake: "No recalcular la proyección tras cambios de ingreso o aporte", fix: "Actualiza tu proyección cada vez que cambie tu capacidad de ahorro para mantener un plan realista." },
  ],

  faq: [
    { q: "¿Cuánto necesito ahorrar para jubilarme cómodamente?", a: "Depende de tu estilo de vida deseado, pero una guía común es apuntar a un saldo que, usando la regla del 4%, genere un ingreso anual suficiente para cubrir tus gastos esperados en el retiro." },
    { q: "¿Qué es la regla del 4% en la planificación de jubilación?", a: "Es una guía basada en estudios históricos que sugiere que puedes retirar el 4% de tu portafolio de inversión cada año con baja probabilidad de quedarte sin fondos durante un retiro de 30 años." },
    { q: "¿A qué edad debería empezar a ahorrar para la jubilación?", a: "Mientras más temprano mejor, ya que el crecimiento compuesto tiene más tiempo para trabajar; incluso aportes modestos desde los 20 o 30 años se acumulan significativamente." },
    { q: "¿Cuánto debo aportar mensualmente para mi jubilación?", a: "Muchos asesores sugieren destinar entre 10% y 15% de tu ingreso a ahorros de jubilación, aunque la cifra exacta depende de tu edad, meta y tiempo restante hasta jubilarte." },
    { q: "¿Cómo afecta el retorno de inversión a mi proyección de jubilación?", a: "Un retorno más alto acelera significativamente el crecimiento compuesto a largo plazo, pero también conlleva más riesgo; usa una cifra realista basada en tu perfil de inversión." },
    { q: "¿Qué pasa si empiezo a ahorrar tarde para la jubilación?", a: "Necesitarás aportar cantidades mensuales considerablemente mayores para alcanzar una meta similar, ya que tienes menos años para que el crecimiento compuesto trabaje a tu favor." },
    { q: "¿Cuánto de mi saldo final proviene del crecimiento versus mis aportes?", a: "En horizontes largos (20-40 años), el crecimiento compuesto suele representar la mayor parte del saldo final, superando frecuentemente el total de tus aportes directos." },
    { q: "¿Es seguro retirar más del 4% anual en la jubilación?", a: "Retirar más del 4% aumenta el riesgo de agotar tus ahorros antes de tiempo, especialmente en retiros largos o durante períodos de bajo rendimiento del mercado." },
    { q: "¿Debo ajustar mi aporte mensual conforme aumente mi salario?", a: "Sí, aumentar tu tasa de ahorro junto con tu ingreso ayuda a mantener el ritmo hacia tu meta de jubilación sin sacrificar tu estilo de vida actual." },
    { q: "¿Esta calculadora considera la inflación?", a: "No directamente — muestra valores nominales; para una proyección más precisa en poder adquisitivo actual, considera usar un retorno esperado ya ajustado por inflación." },
  ],

  relatedCalculators: ["Calculadora de Ingreso de Jubilación", "Calculadora FIRE", "Calculadora de 401(k)", "Calculadora de Interés Compuesto"],

  youMayLike: pickYouMayLike("retirement-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Jubilación",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};