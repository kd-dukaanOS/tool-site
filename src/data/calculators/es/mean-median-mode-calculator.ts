// src/data/calculators/es/mean-median-mode-calculator.ts
// NOTE: real slug is "mean-median-mode-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const meanMedianModeCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Media, Mediana y Moda 2026",
    metaDescription: "Calcula la media, mediana, moda y rango de un conjunto de números al instante. Gratis y sin registro.",
    canonicalSlug: "/es/math-stats/mean-median-mode-calculator",
    ogTitle: "Calculadora de Media, Mediana y Moda",
    ogDescription: "Encuentra la tendencia central de tus datos al instante.",
    twitterTitle: "Calculadora de Media, Mediana, Moda",
    twitterDescription: "Calcula media, mediana, moda y rango de tus datos al instante.",
  },
  hero: {
    text: "La Calculadora de Media, Mediana y Moda calcula la tendencia central de un conjunto de números: su promedio (media), valor central (mediana), valor más frecuente (moda) y el rango entre el mínimo y máximo.",
  },
  about: {
    text: `La media, mediana y moda son las tres medidas de tendencia central más usadas en estadística para resumir un conjunto de datos con un solo valor representativo.

Esta calculadora recibe una lista de números separados por coma o espacio, y calcula automáticamente la media (promedio), la mediana (valor central al ordenar los datos), la moda (valor o valores más frecuentes) y el rango (diferencia entre el máximo y el mínimo).

Limitaciones: si todos los números aparecen la misma cantidad de veces, no hay moda definida; en ese caso, la calculadora lo indicará como "sin moda".`,
  },
  formula: {
    formula: "Media = Suma de todos los valores / Cantidad de valores",
    variables: [
      { symbol: "Mediana", meaning: "El valor central de los datos ordenados (o el promedio de los dos valores centrales si hay una cantidad par)" },
      { symbol: "Moda", meaning: "El valor o valores que aparecen con mayor frecuencia en el conjunto de datos" },
    ],
    explanation: "La media se calcula sumando todos los valores y dividiendo entre la cantidad total; la mediana se obtiene ordenando los datos y tomando el valor central; la moda es el valor que se repite más veces; y el rango es la diferencia entre el valor máximo y el mínimo.",
    interpretation: "Por ejemplo, para los números 2, 4, 4, 6, 8: la media es 4.8, la mediana es 4, la moda es 4 (se repite dos veces), y el rango es 6 (8 menos 2).",
  },
  steps: [
    "Ingresa una lista de números separados por coma o espacio.",
    "Haz clic en Calcular.",
    "Revisa la media, mediana, moda y rango de tus datos.",
    "Usa el botón Copiar para guardar el resumen completo.",
  ],
  examples: [
    { inputs: "Números: 2, 4, 4, 6, 8", result: "Media: 4.8, Mediana: 4, Moda: 4, Rango: 6", explanation: "Un conjunto simple con una moda claramente definida." },
    { inputs: "Números: 1, 2, 3, 4, 5", result: "Media: 3, Mediana: 3, Moda: Sin moda, Rango: 4", explanation: "Cuando todos los valores son distintos, no existe una moda." },
    { inputs: "Números: 10, 10, 20, 20, 30", result: "Media: 18, Mediana: 20, Moda: 10 y 20 (bimodal), Rango: 20", explanation: "Un conjunto de datos puede tener más de una moda (bimodal o multimodal)." },
  ],
  practicalUses: [
    "Analizar calificaciones de un grupo de estudiantes",
    "Resumir datos de ventas o encuestas con una sola medida representativa",
    "Ayudar con tareas escolares de estadística básica",
    "Identificar el valor más común en un conjunto de datos (moda)",
    "Detectar valores atípicos comparando la media con la mediana",
  ],
  expertTips: [
    "Si la media es mucho más alta o baja que la mediana, es señal de que existen valores atípicos (outliers) que están sesgando el promedio.",
    "La mediana es más resistente a valores extremos que la media, por lo que es útil cuando los datos tienen outliers importantes.",
    "Un conjunto de datos puede ser bimodal (dos modas) o multimodal (varias modas) si más de un valor se repite con la misma frecuencia máxima.",
    "El rango es una medida simple de dispersión, pero no considera cómo se distribuyen los valores intermedios; para eso se usa la desviación estándar.",
  ],
  commonMistakes: [
    { mistake: "Confundir media con mediana", fix: "La media es el promedio aritmético; la mediana es el valor central de los datos ordenados. Pueden diferir mucho si hay valores atípicos." },
    { mistake: "Asumir que siempre existe una moda", fix: "Si todos los valores son distintos o se repiten la misma cantidad de veces, no hay una moda única definida." },
    { mistake: "No ordenar los datos antes de calcular la mediana manualmente", fix: "La mediana requiere que los datos estén ordenados de menor a mayor antes de identificar el valor central." },
    { mistake: "Ignorar el rango al analizar solo la tendencia central", fix: "El rango complementa la media, mediana y moda mostrando qué tan dispersos están los datos entre su mínimo y máximo." },
  ],
  faq: [
    { q: "¿Cuál es la diferencia entre media, mediana y moda?", a: "La media es el promedio aritmético de todos los valores; la mediana es el valor central al ordenar los datos; la moda es el valor que aparece con mayor frecuencia." },
    { q: "¿Cómo se calcula la media de un conjunto de números?", a: "Se suman todos los valores del conjunto y el resultado se divide entre la cantidad total de valores." },
    { q: "¿Cómo se calcula la mediana cuando hay una cantidad par de números?", a: "Se ordenan los datos de menor a mayor y se promedian los dos valores centrales del conjunto." },
    { q: "¿Qué es la moda en estadística?", a: "La moda es el valor o valores que se repiten con mayor frecuencia dentro de un conjunto de datos." },
    { q: "¿Un conjunto de datos puede tener más de una moda?", a: "Sí, si dos o más valores se repiten la misma cantidad máxima de veces, el conjunto es bimodal o multimodal." },
    { q: "¿Qué significa cuando un conjunto de datos no tiene moda?", a: "Significa que todos los valores aparecen la misma cantidad de veces, generalmente una sola vez cada uno, por lo que no hay un valor más frecuente." },
    { q: "¿Cuál es más útil, la media o la mediana?", a: "Depende de los datos: la media es útil cuando los datos son uniformes, mientras que la mediana es mejor cuando hay valores atípicos que podrían distorsionar el promedio." },
    { q: "¿Cómo se calcula el rango de un conjunto de datos?", a: "El rango se calcula restando el valor mínimo al valor máximo del conjunto de números." },
    { q: "¿Por qué la media y la mediana pueden ser muy diferentes?", a: "Esto ocurre cuando existen valores atípicos (muy altos o muy bajos) que afectan significativamente el promedio pero no el valor central." },
    { q: "¿Cómo se usa la media, mediana y moda en la vida real?", a: "Se usan para resumir datos de calificaciones, salarios, ventas, encuestas o cualquier conjunto de números donde se necesite un valor representativo." },
    { q: "¿La moda se puede calcular con números decimales?", a: "Sí, la moda se calcula igual con decimales, aunque es menos común encontrar valores repetidos exactos cuando los datos tienen muchos decimales." },
    { q: "¿Cuál medida de tendencia central es mejor para datos con valores atípicos?", a: "La mediana es generalmente más adecuada, ya que no se ve afectada tan drásticamente por valores extremadamente altos o bajos como la media." },
    { q: "¿Qué es la tendencia central en estadística?", a: "Es un valor único que intenta representar o resumir un conjunto completo de datos, siendo la media, mediana y moda las tres medidas más comunes." },
    { q: "¿Cómo interpreto el rango junto con la media?", a: "Un rango pequeño junto con una media indica datos agrupados cerca del promedio; un rango grande sugiere mayor dispersión entre los valores del conjunto." },
  ],
  relatedCalculators: ["Calculadora de Desviación Estándar", "Calculadora de Varianza", "Calculadora de Percentiles", "Calculadora de Promedio Ponderado"],
  youMayLike: pickYouMayLike("mean-median-mode-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Media, Mediana y Moda",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};