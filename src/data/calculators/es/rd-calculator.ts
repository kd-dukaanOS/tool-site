// src/data/calculators/es/rd-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const rdCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Depósito Recurrente (RD) — Vencimiento e Interés",
    metaDescription: "Calcula el valor de vencimiento de tu Depósito Recurrente (RD), el total depositado y el interés ganado. Calculadora gratis con capitalización trimestral.",
    canonicalSlug: "/es/finance/rd-calculator",
    ogTitle: "Calculadora de Depósito Recurrente (RD)",
    ogDescription: "Descubre cuánto valdrá tu Depósito Recurrente al vencimiento.",
    twitterTitle: "Calculadora de RD Gratis",
    twitterDescription: "Calcula el vencimiento de tu Depósito Recurrente, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Depósito Recurrente (RD) calcula el valor de vencimiento de tus depósitos mensuales usando la fórmula bancaria estándar con capitalización trimestral — para que sepas exactamente cuánto acumularás al final del plazo.",
  },

  about: {
    text: `Un Depósito Recurrente (RD) es un producto de ahorro donde depositas una cantidad fija cada mes durante un plazo determinado, ganando interés compuesto sobre esos depósitos regulares — común en bancos de India y otros países.

A diferencia de un Depósito Fijo (FD) donde inviertes una suma única, el RD te permite construir ahorros gradualmente con aportes mensuales, siendo ideal para metas de ahorro disciplinado.

Esta calculadora usa la fórmula bancaria estándar para RD con capitalización trimestral: M = P × [(1+i)^n − 1] / (1 − (1+i)^(−1/3)), donde P es tu depósito mensual, i es la tasa trimestral, y n es el número de trimestres en tu plazo elegido.`,
  },

  formula: {
    formula: "M = P × [(1+i)^n − 1] / (1 − (1+i)^(−1/3))",
    variables: [
      { symbol: "P", meaning: "Depósito mensual" },
      { symbol: "i", meaning: "Tasa de interés trimestral (tasa anual ÷ 4 ÷ 100)" },
      { symbol: "n", meaning: "Número de trimestres en el plazo total" },
    ],
    explanation: "La fórmula calcula el valor de vencimiento capitalizando trimestralmente cada depósito mensual durante todo el plazo, sumando el efecto compuesto de cada aporte regular.",
    interpretation: "Por ejemplo, un depósito mensual de ₹5,000 al 7% anual durante 24 meses acumula aproximadamente ₹129,000 al vencimiento, de los cuales ₹120,000 son depósitos y ₹9,000 es interés ganado.",
  },

  steps: [
    "Ingresa el monto que depositarás cada mes.",
    "Ingresa la tasa de interés anual ofrecida por el banco.",
    "Ingresa el plazo del RD en meses.",
    "Haz clic en Calcular.",
    "Revisa el valor de vencimiento, el total depositado, el interés ganado y el rendimiento anual efectivo.",
  ],

  examples: [
    { inputs: "Depósito: ₹5,000/mes, Tasa: 7%, Plazo: 24 meses", result: "Vencimiento: ~₹129,000", explanation: "Un RD típico a dos años con aportes mensuales moderados." },
    { inputs: "Depósito: ₹10,000/mes, Tasa: 6.5%, Plazo: 36 meses", result: "Vencimiento: ~₹397,000", explanation: "Un plan de ahorro a mediano plazo con aportes constantes." },
    { inputs: "Depósito: ₹2,000/mes, Tasa: 7.5%, Plazo: 12 meses", result: "Vencimiento: ~₹24,900", explanation: "Un RD a corto plazo con aportes pequeños, ideal para una meta específica cercana." },
  ],

  practicalUses: [
    "Planear ahorros mensuales disciplinados hacia una meta específica",
    "Comparar el rendimiento de un RD frente a otras opciones de ahorro",
    "Estimar cuánto acumularás al final de un plazo determinado",
    "Decidir el plazo y monto mensual ideal según tu objetivo de ahorro",
    "Verificar el rendimiento anual efectivo de la oferta de tu banco",
  ],

  expertTips: [
    "El RD es ideal si no tienes una suma grande para invertir de una vez, pero puedes comprometerte a ahorrar una cantidad fija cada mes.",
    "La mayoría de los bancos capitalizan el interés de RD trimestralmente, lo que da un rendimiento ligeramente mayor que la capitalización anual con la misma tasa nominal.",
    "Elige un plazo que sea múltiplo de 3 meses, ya que es el estándar más común para productos RD.",
    "Compara la tasa de interés entre varios bancos, ya que puede variar significativamente para el mismo plazo.",
    "Automatiza tu depósito mensual para evitar olvidar pagos, ya que algunos bancos aplican penalizaciones por depósitos tardíos.",
  ],

  commonMistakes: [
    { mistake: "Elegir un plazo que no es múltiplo de 3 meses", fix: "La mayoría de los productos RD funcionan en trimestres; verifica los términos exactos de tu banco." },
    { mistake: "Olvidar que el interés se calcula sobre depósitos decrecientes en el tiempo", fix: "Los primeros depósitos ganan interés por más tiempo que los últimos, así que el interés total no es simplemente una tasa fija sobre el total depositado." },
    { mistake: "No considerar penalizaciones por depósitos tardíos o faltantes", fix: "Revisa los términos del RD, ya que algunos bancos cobran cargos si te retrasas en un depósito mensual." },
    { mistake: "Confundir RD con FD en el cálculo de interés", fix: "El RD usa una fórmula distinta al FD porque involucra múltiples depósitos en el tiempo, no una suma única inicial." },
  ],

  faq: [
    { q: "¿Qué es un Depósito Recurrente (RD)?", a: "Es un producto de ahorro donde depositas una cantidad fija cada mes durante un plazo determinado, ganando interés compuesto sobre esos aportes regulares." },
    { q: "¿Cuál es la diferencia entre RD y FD?", a: "El FD requiere una suma única invertida de una vez, mientras que el RD te permite construir ahorros gradualmente con depósitos mensuales fijos." },
    { q: "¿Cómo se calcula el interés de un RD?", a: "Se usa una fórmula de interés compuesto con capitalización trimestral que considera que cada depósito mensual gana interés por un período distinto hasta el vencimiento." },
    { q: "¿Puedo retirar mi RD antes del vencimiento?", a: "Sí, la mayoría de los bancos permiten el retiro anticipado, generalmente con una penalización en la tasa de interés aplicada." },
    { q: "¿Qué pasa si me pierdo un depósito mensual del RD?", a: "Muchos bancos cobran una pequeña penalización por depósitos tardíos o faltantes — revisa los términos específicos de tu producto." },
    { q: "¿Cuál es el plazo mínimo y máximo para un RD?", a: "Generalmente varía entre 6 meses y 10 años, aunque esto depende del banco específico y sus productos disponibles." },
    { q: "¿El interés del RD se paga mensualmente o al vencimiento?", a: "Normalmente el interés se acumula y se paga junto con el capital al vencimiento del plazo completo, no mes a mes." },
    { q: "¿Es mejor un RD o invertir en un fondo mutuo?", a: "El RD ofrece un retorno fijo y predecible con bajo riesgo, mientras que los fondos mutuos pueden ofrecer mayores retornos potenciales pero con más volatilidad — depende de tu tolerancia al riesgo." },
  ],

  relatedCalculators: ["Calculadora de Depósito Fijo", "Calculadora de SIP", "Calculadora de Interés Compuesto", "Calculadora de Ahorro"],

  youMayLike: pickYouMayLike("rd-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Depósito Recurrente (RD)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};