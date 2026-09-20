// src/data/calculators/es/ratio-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ratioCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Razones — Simplificar Proporciones",
    metaDescription: "Simplifica cualquier razón o proporción a su forma más simple, con razón decimal y división porcentual. Calculadora gratis e instantánea.",
    canonicalSlug: "/es/math/ratio-calculator",
    ogTitle: "Calculadora de Razones y Proporciones",
    ogDescription: "Simplifica razones y encuentra su equivalente decimal y porcentual.",
    twitterTitle: "Calculadora de Razones Gratis",
    twitterDescription: "Simplifica cualquier razón al instante, gratis.",
  },

  hero: {
    text: "La Calculadora de Razones simplifica cualquier proporción entre dos valores a su forma más simple, y muestra su equivalente decimal y la división porcentual entre ambos valores.",
  },

  about: {
    text: `Una razón compara dos cantidades, mostrando cuántas veces una contiene a la otra. Simplificar una razón significa reducirla a sus términos más pequeños posibles, manteniendo la misma proporción — de forma similar a simplificar una fracción.

Esta calculadora toma dos valores, encuentra su máximo común divisor para simplificar la razón, y también muestra la razón como número decimal (el resultado de dividir el primer valor entre el segundo) y como una división porcentual, mostrando qué porcentaje del total representa cada valor.

Es útil en matemáticas escolares, cocina (ajustar recetas), diseño (proporciones y aspecto), finanzas (razones financieras) y cualquier situación donde necesites comparar dos cantidades de forma simplificada.`,
  },

  formula: {
    formula: "Razón Simplificada = A/MCD(A,B) : B/MCD(A,B)",
    variables: [
      { symbol: "MCD", meaning: "Máximo Común Divisor entre los dos valores" },
      { symbol: "Razón Decimal", meaning: "Primer Valor ÷ Segundo Valor" },
      { symbol: "Porcentaje A", meaning: "A ÷ (A + B) × 100" },
    ],
    explanation: "Se calcula el máximo común divisor entre ambos valores y se divide cada uno entre ese número para obtener la razón simplificada; también se calcula la razón como decimal y como porcentaje del total combinado.",
    interpretation: "Por ejemplo, con los valores 4 y 6, el MCD es 2, dando una razón simplificada de 2:3, una razón decimal de 0.67, y una división porcentual de 40% : 60%.",
  },

  steps: [
    "Ingresa el primer valor.",
    "Ingresa el segundo valor.",
    "Haz clic en Calcular.",
    "Revisa la razón simplificada, la razón decimal y la división porcentual.",
  ],

  examples: [
    { inputs: "4 : 6", result: "Simplificada: 2:3, Decimal: 0.67, Porcentaje: 40% : 60%", explanation: "Una razón sencilla común en problemas escolares." },
    { inputs: "16 : 24", result: "Simplificada: 2:3, Decimal: 0.67", explanation: "Distintos valores originales pueden simplificarse a la misma razón." },
    { inputs: "3 : 7", result: "Simplificada: 3:7 (ya irreducible), Decimal: 0.43", explanation: "Cuando el MCD es 1, la razón original ya está en su forma más simple." },
  ],

  practicalUses: [
    "Simplificar razones para tareas de matemáticas escolares",
    "Ajustar proporciones de ingredientes al escalar una receta",
    "Calcular proporciones de diseño o aspecto (aspect ratio) simplificadas",
    "Comparar razones financieras o de negocio de forma simplificada",
    "Convertir cualquier comparación de dos cantidades en su forma decimal o porcentual",
  ],

  expertTips: [
    "Una razón simplificada representa exactamente la misma proporción que la original — solo cambia la forma en que se expresa.",
    "Si el máximo común divisor es 1, la razón ya está en su forma más simple y no puede reducirse más.",
    "La razón decimal es especialmente útil para comparar rápidamente si una proporción es mayor o menor que otra.",
    "En diseño y fotografía, las razones de aspecto comunes como 16:9 o 4:3 ya están en su forma simplificada estándar.",
  ],

  commonMistakes: [
    { mistake: "Confundir razón con fracción sin simplificar", fix: "Una razón 4:6 y su forma simplificada 2:3 representan exactamente la misma proporción — ambas son correctas, pero la simplificada es más clara." },
    { mistake: "Invertir el orden de los valores al comparar", fix: "El orden importa: una razón 2:3 no es lo mismo que 3:2 — mantén siempre el mismo orden que en el problema original." },
    { mistake: "Redondear la razón decimal de forma imprecisa", fix: "Para cálculos precisos, usa más decimales cuando la razón no se divide exactamente." },
  ],

  faq: [
    { q: "¿Cómo se simplifica una razón?", a: "Se encuentra el máximo común divisor (MCD) entre ambos valores y se divide cada uno entre ese número para obtener la razón en su forma más simple." },
    { q: "¿Qué es una razón en matemáticas?", a: "Es una comparación entre dos cantidades que muestra cuántas veces una contiene a la otra, expresada comúnmente en la forma A:B." },
    { q: "¿Cuál es la diferencia entre razón y proporción?", a: "Una razón compara dos cantidades; una proporción es una ecuación que muestra que dos razones son iguales entre sí." },
    { q: "¿Cómo convierto una razón a porcentaje?", a: "Divide cada valor entre la suma total de ambos valores y multiplica por 100 para obtener el porcentaje que representa cada parte." },
    { q: "¿Cómo convierto una razón a decimal?", a: "Divide el primer valor entre el segundo valor para obtener el equivalente decimal de la razón." },
    { q: "¿Por qué mi razón no se simplificó a números más pequeños?", a: "Si el máximo común divisor entre los dos valores es 1, la razón ya está en su forma más simple posible y no puede reducirse más." },
  ],

  relatedCalculators: ["Calculadora de Porcentaje", "Calculadora de Fracciones", "Calculadora de Proporciones", "Calculadora de Regla de Tres"],

  youMayLike: pickYouMayLike("ratio-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Razones",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};