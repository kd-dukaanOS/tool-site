// src/data/calculators/es/standard-deviation-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const standardDeviationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Desviación Estándar — Varianza y Media",
    metaDescription: "Calcula la desviación estándar, varianza y media de un conjunto de números, como muestra o población completa. Calculadora gratis e instantánea.",
    canonicalSlug: "/es/math-stats/standard-deviation-calculator",
    ogTitle: "Calculadora de Desviación Estándar",
    ogDescription: "Calcula la desviación estándar, varianza y media de tus datos.",
    twitterTitle: "Calculadora de Desviación Estándar Gratis",
    twitterDescription: "Calcula la desviación estándar de un conjunto de números, gratis.",
  },

  hero: {
    text: "La Calculadora de Desviación Estándar calcula la desviación estándar, varianza y media de cualquier conjunto de números, ya sea tratados como muestra o como población completa.",
  },

  about: {
    text: `La desviación estándar mide qué tan dispersos están los valores de un conjunto de datos respecto a su media (promedio). Una desviación estándar baja indica que los datos están agrupados cerca de la media; una desviación estándar alta indica mayor dispersión.

Esta calculadora toma una lista de números separados por coma o espacio, y calcula la media, la varianza (el promedio de las diferencias al cuadrado respecto a la media), y la desviación estándar (la raíz cuadrada de la varianza).

Puedes elegir tratar tus datos como una muestra de una población más grande (usando el divisor n-1, conocido como corrección de Bessel) o como la población completa (usando el divisor n) — la elección correcta depende de si tus datos representan todo el grupo de interés o solo una parte de él.`,
  },

  formula: {
    formula: "Desviación Estándar = √(Σ(xᵢ − media)² ÷ (n o n-1))",
    variables: [
      { symbol: "Media", meaning: "El promedio de todos los valores del conjunto" },
      { symbol: "Varianza", meaning: "El promedio de las diferencias al cuadrado entre cada valor y la media" },
      { symbol: "n vs n-1", meaning: "Divisor n para población completa, n-1 para muestra (corrección de Bessel)" },
    ],
    explanation: "Se calcula la media del conjunto de datos, luego se suman las diferencias al cuadrado entre cada valor y la media, y ese total se divide entre n (población) o n-1 (muestra) para obtener la varianza; la raíz cuadrada de la varianza da la desviación estándar.",
    interpretation: "Por ejemplo, con los números 4, 8, 6, 5, 3, la media es 5.2, y tratando los datos como muestra, la desviación estándar es aproximadamente 1.92, indicando una dispersión moderada respecto a la media.",
  },

  steps: [
    "Ingresa tus números separados por coma o espacio.",
    "Marca la casilla si tus datos representan una muestra (no la población completa).",
    "Haz clic en Calcular.",
    "Revisa la desviación estándar, la varianza y la media de tu conjunto de datos.",
  ],

  examples: [
    { inputs: "4, 8, 6, 5, 3 (como muestra)", result: "Media: 5.2, Desviación Estándar: ~1.92", explanation: "Un conjunto pequeño de datos con dispersión moderada." },
    { inputs: "10, 10, 10, 10 (como población)", result: "Media: 10, Desviación Estándar: 0", explanation: "Cuando todos los valores son idénticos, la desviación estándar es cero." },
    { inputs: "1, 2, 3, 4, 5, 100 (como muestra)", result: "Media: ~19.2, Desviación Estándar: ~39.3", explanation: "Un valor atípico (100) aumenta drásticamente la desviación estándar." },
  ],

  practicalUses: [
    "Analizar la dispersión de datos en estadística, investigación o ciencia",
    "Evaluar la consistencia de resultados en experimentos o mediciones",
    "Comparar la variabilidad entre distintos conjuntos de datos",
    "Detectar valores atípicos que aumentan significativamente la dispersión",
    "Calcular métricas de calidad o control de procesos en manufactura",
  ],

  expertTips: [
    "Usa 'muestra' (n-1) cuando tus datos son un subconjunto de una población más grande; usa 'población' (n) cuando tienes todos los datos del grupo completo de interés.",
    "Una desviación estándar de cero significa que todos los valores del conjunto son idénticos.",
    "Los valores atípicos (outliers) afectan significativamente la desviación estándar — revisa tus datos si el resultado parece inusualmente alto.",
    "La desviación estándar usa las mismas unidades que tus datos originales, a diferencia de la varianza que está en unidades al cuadrado.",
  ],

  commonMistakes: [
    { mistake: "Confundir cuándo usar muestra versus población", fix: "Usa muestra (n-1) si tus datos son parte de un grupo más grande; usa población (n) solo si tienes absolutamente todos los datos del grupo de interés." },
    { mistake: "Confundir varianza con desviación estándar", fix: "La varianza está en unidades al cuadrado; la desviación estándar (su raíz cuadrada) está en las mismas unidades que los datos originales, siendo más interpretable." },
    { mistake: "Ignorar el impacto de valores atípicos en el resultado", fix: "Un solo valor muy distinto al resto puede inflar significativamente la desviación estándar — revisa tus datos si el resultado parece inesperado." },
    { mistake: "Usar el divisor incorrecto (n en vez de n-1) para datos de muestra", fix: "Usar el divisor incorrecto subestima ligeramente la variabilidad real de la población de la que proviene la muestra." },
  ],

  faq: [
    { q: "¿Qué es la desviación estándar?", a: "Es una medida de qué tan dispersos están los valores de un conjunto de datos respecto a su media; una desviación estándar baja indica datos agrupados cerca del promedio, y una alta indica mayor dispersión." },
    { q: "¿Cuál es la diferencia entre desviación estándar de muestra y de población?", a: "La de muestra usa el divisor n-1 (corrección de Bessel) para estimar la variabilidad de una población más grande a partir de un subconjunto; la de población usa el divisor n cuando tienes todos los datos del grupo completo." },
    { q: "¿Cómo se calcula la desviación estándar?", a: "Se calcula la media de los datos, se suman las diferencias al cuadrado entre cada valor y la media, se divide ese total entre n o n-1, y se toma la raíz cuadrada del resultado." },
    { q: "¿Qué es la varianza y en qué se diferencia de la desviación estándar?", a: "La varianza es el promedio de las diferencias al cuadrado respecto a la media; la desviación estándar es la raíz cuadrada de la varianza, expresada en las mismas unidades que los datos originales." },
    { q: "¿Cuándo debo usar n-1 en vez de n al calcular la desviación estándar?", a: "Usa n-1 cuando tus datos son una muestra de una población más grande; usa n solo cuando tienes los datos de toda la población de interés, sin excepciones." },
    { q: "¿Qué significa una desviación estándar de cero?", a: "Significa que todos los valores del conjunto de datos son exactamente iguales, sin ninguna variación entre ellos." },
    { q: "¿Los valores atípicos afectan la desviación estándar?", a: "Sí, significativamente — un solo valor muy alejado del resto puede aumentar considerablemente la desviación estándar calculada." },
    { q: "¿Para qué se usa la desviación estándar en la vida real?", a: "Se usa en finanzas para medir volatilidad, en control de calidad para evaluar consistencia de procesos, en investigación científica, y en muchos otros campos donde importa medir la variabilidad de los datos." },
  ],

  relatedCalculators: ["Calculadora de Media, Mediana y Moda", "Calculadora de Razones", "Calculadora Estadística", "Calculadora de Porcentaje"],

  youMayLike: pickYouMayLike("standard-deviation-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Desviación Estándar",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};