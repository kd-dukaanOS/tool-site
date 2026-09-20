// src/data/calculators/es/fire-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const fireCalculatorContent = {
  meta: {
    seoTitle: "Calculadora FIRE — Independencia Financiera y Retiro Anticipado",
    metaDescription: "Calcula tu número de Independencia Financiera (FI) y cuántos años te faltan para el retiro anticipado (FIRE) según tus ahorros, gastos y tasa de retiro.",
    canonicalSlug: "/es/finance/fire-calculator",
    ogTitle: "Calculadora FIRE — Retiro Anticipado",
    ogDescription: "Descubre tu número FI y en cuántos años podrías alcanzar la independencia financiera.",
    twitterTitle: "Calculadora FIRE Gratis",
    twitterDescription: "Calcula tu camino hacia la independencia financiera, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora FIRE calcula tu número de Independencia Financiera (FI) a partir de tus gastos anuales y tasa de retiro, y proyecta en cuántos años podrías alcanzarlo según tus ahorros actuales, tu contribución anual y el crecimiento real de tu inversión.",
  },

  about: {
    text: `FIRE (Financial Independence, Retire Early) es un movimiento y estrategia financiera enfocada en ahorrar e invertir agresivamente para alcanzar la independencia financiera y, opcionalmente, retirarse mucho antes de la edad tradicional de jubilación.

El concepto central es tu "número FI": el monto de ahorros que, invertido, puede sostener tus gastos anuales indefinidamente según una tasa de retiro segura — comúnmente el 4%, basada en el estudio conocido como la "Regla del 4%".

Esta calculadora usa tus gastos anuales, tu tasa de retiro elegida, tus ahorros actuales, tu contribución anual, y supuestos de rendimiento de inversión e inflación, para calcular tu número FI y proyectar cuántos años te tomará alcanzarlo con crecimiento real (ajustado por inflación).

Limitaciones: esta calculadora asume una tasa de rendimiento y contribución constantes — no modela la volatilidad del mercado, cambios en el gasto durante la jubilación, ni eventos inesperados como emergencias médicas mayores.`,
  },

  formula: {
    formula: "Número FI = Gastos Anuales ÷ Tasa de Retiro",
    variables: [
      { symbol: "Tasa de Retiro", meaning: "Comúnmente 4% (equivalente a 25 veces tus gastos anuales)" },
      { symbol: "Tasa de Ahorro", meaning: "(Ingreso Anual − Gastos Anuales) ÷ Ingreso Anual × 100" },
      { symbol: "Años para FI", meaning: "Años necesarios para que tus ahorros, con crecimiento y contribuciones, alcancen tu número FI" },
    ],
    explanation: "El número FI se calcula dividiendo tus gastos anuales entre tu tasa de retiro elegida; luego se proyecta el crecimiento de tus ahorros actuales más tu contribución anual, compuesto al retorno real esperado, hasta alcanzar ese número.",
    interpretation: "Por ejemplo, con gastos anuales de $45,000 y una tasa de retiro del 4%, tu número FI es $1,125,000; con ahorros actuales de $50,000, una contribución anual de $25,000 y un retorno real del 4%, alcanzarías esa meta en aproximadamente 20 años.",
  },

  steps: [
    "Ingresa tu edad actual, ahorros actuales e ingreso anual.",
    "Ingresa tus gastos anuales y tu contribución anual a inversiones.",
    "Ingresa el rendimiento esperado, la tasa de inflación y tu tasa de retiro deseada.",
    "Haz clic en Calcular.",
    "Revisa tu número FI, años para alcanzarlo, tu edad de retiro proyectada y tu tasa de ahorro.",
  ],

  examples: [
    { inputs: "Edad: 30, Ahorros: $50,000, Ingreso: $90,000, Gastos: $45,000, Contribución: $25,000/año, Retorno: 7%, Inflación: 3%, Retiro: 4%", result: "Número FI: $1,125,000, Años para FI: ~20", explanation: "Un ahorrador con una tasa de ahorro alta (~50%) alcanza la independencia financiera en dos décadas." },
    { inputs: "Edad: 25, Ahorros: $10,000, Ingreso: $60,000, Gastos: $40,000, Contribución: $15,000/año, Retorno: 7%, Inflación: 3%, Retiro: 4%", result: "Número FI: $1,000,000, Años para FI: ~26", explanation: "Un ahorrador con menor tasa de ahorro (~33%) toma más tiempo en alcanzar su meta." },
    { inputs: "Edad: 40, Ahorros: $300,000, Ingreso: $120,000, Gastos: $60,000, Contribución: $40,000/año, Retorno: 6%, Inflación: 3%, Retiro: 3.5%", result: "Número FI: $1,714,000, Años para FI: ~14", explanation: "Un ahorrador de mitad de carrera con base sólida y tasa de retiro más conservadora." },
  ],

  practicalUses: [
    "Calcular tu número objetivo de independencia financiera",
    "Ver cuántos años te faltan para el retiro según tu ritmo de ahorro actual",
    "Probar el impacto de aumentar tu tasa de ahorro en tu cronograma FIRE",
    "Comparar distintas tasas de retiro (más conservadoras o agresivas)",
    "Planear tu edad de retiro objetivo y ajustar tu estrategia de ahorro",
    "Motivarte viendo el progreso hacia tu meta de independencia financiera",
  ],

  expertTips: [
    "Tu tasa de ahorro es el factor más poderoso en tu cronograma FIRE — aumentar del 20% al 50% puede reducir tus años para FI a la mitad o menos.",
    "La 'Regla del 4%' se basa en estudios históricos del mercado estadounidense; algunos prefieren una tasa más conservadora (3-3.5%) para mayor seguridad.",
    "Reducir gastos tiene un doble efecto: reduce tu número FI y aumenta tu capacidad de ahorro al mismo tiempo.",
    "Esta calculadora usa retorno real (ajustado por inflación) para proyectar en dólares de poder adquisitivo actual, no dólares futuros nominales.",
    "Considera un colchón adicional (Barista FIRE o Coast FIRE) si el FIRE completo parece demasiado agresivo para tu situación.",
  ],

  commonMistakes: [
    { mistake: "Usar una tasa de retorno poco realista", fix: "Los retornos promedio históricos del mercado bursátil se modelan comúnmente entre 6-8% antes de inflación — evita proyecciones demasiado optimistas." },
    { mistake: "No considerar cambios en gastos durante el retiro", fix: "Tus gastos pueden cambiar en el retiro (menos gastos de trabajo, pero potencialmente más gastos médicos o de tiempo libre) — ajusta tu estimación en consecuencia." },
    { mistake: "Ignorar la volatilidad del mercado en la planificación", fix: "Esta calculadora asume un retorno promedio constante — en la práctica, los mercados fluctúan año a año, así que trata el resultado como una guía, no una garantía." },
    { mistake: "Subestimar el poder de reducir gastos versus aumentar ingresos", fix: "Reducir gastos reduce tu número FI Y aumenta tu tasa de ahorro simultáneamente, teniendo un impacto doble en tu cronograma." },
  ],

  faq: [
    { q: "¿Qué es FIRE (Financial Independence, Retire Early)?", a: "Es una estrategia financiera enfocada en ahorrar e invertir agresivamente para alcanzar la independencia financiera y, opcionalmente, retirarse mucho antes de la edad tradicional." },
    { q: "¿Qué es el número FI?", a: "Es el monto total de ahorros invertidos necesario para sostener tus gastos anuales indefinidamente, calculado dividiendo tus gastos anuales entre tu tasa de retiro elegida." },
    { q: "¿Qué es la Regla del 4%?", a: "Es una guía basada en estudios históricos que sugiere que puedes retirar el 4% de tu cartera de inversión cada año con baja probabilidad de quedarte sin dinero durante un retiro de 30 años." },
    { q: "¿Cuánto dinero necesito para alcanzar FIRE?", a: "Depende de tus gastos anuales; una regla común es multiplicar tus gastos anuales por 25 (equivalente a una tasa de retiro del 4%)." },
    { q: "¿Cuál es la diferencia entre FIRE y jubilación tradicional?", a: "FIRE busca alcanzar la independencia financiera mucho antes (a menudo entre los 30 y 50 años) mediante un ahorro agresivo, mientras que la jubilación tradicional ocurre generalmente entre los 60 y 67 años." },
    { q: "¿Qué tasa de ahorro necesito para retirarme temprano?", a: "Mientras más alta sea tu tasa de ahorro, más rápido alcanzas FIRE; tasas de ahorro del 50% o más pueden llevar a la independencia financiera en 15-20 años." },
    { q: "¿Qué es Coast FIRE?", a: "Es una variante donde ya has ahorrado lo suficiente para que el crecimiento compuesto solo alcance tu número FI para la edad de jubilación tradicional, sin necesidad de seguir contribuyendo activamente." },
    { q: "¿Es segura la Regla del 4% para el retiro anticipado?", a: "Se basa en un horizonte de retiro de 30 años; para retiros mucho más largos (como en FIRE a los 35-40 años), muchos expertos recomiendan una tasa más conservadora como 3-3.5%." },
    { q: "¿Cómo afecta la inflación a mi cálculo de FIRE?", a: "Usar un retorno real (ajustado por inflación) en las proyecciones asegura que tu número FI represente poder adquisitivo actual, no dólares futuros erosionados por la inflación." },
    { q: "¿Puedo alcanzar FIRE con un ingreso promedio?", a: "Sí, es posible con una tasa de ahorro alta y gastos controlados, aunque generalmente toma más tiempo que con ingresos más altos — el factor clave es la brecha entre ingreso y gastos, no el ingreso en sí." },
  ],

  relatedCalculators: ["Calculadora de Jubilación", "Calculadora de Interés Compuesto", "Calculadora de Fondo de Emergencia", "Calculadora de 401(k)"],

  youMayLike: pickYouMayLike("fire-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora FIRE",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};