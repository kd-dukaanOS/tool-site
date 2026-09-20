// src/data/calculators/es/lcm-calculator.ts
// NOTE: real slug is "lcm-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const lcmCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de MCM (Mínimo Común Múltiplo) 2026",
    metaDescription: "Calcula el mínimo común múltiplo (MCM) de dos o más números al instante. Gratis y sin registro.",
    canonicalSlug: "/es/math-stats/lcm-calculator",
    ogTitle: "Calculadora de MCM",
    ogDescription: "Encuentra el mínimo común múltiplo de cualquier conjunto de números.",
    twitterTitle: "Calculadora de Mínimo Común Múltiplo",
    twitterDescription: "Calcula el MCM de tus números al instante.",
  },
  hero: {
    text: "La Calculadora de MCM (Mínimo Común Múltiplo) encuentra el número más pequeño que es múltiplo de todos los números que ingreses, ideal para fracciones, tareas escolares y problemas de programación.",
  },
  about: {
    text: `El Mínimo Común Múltiplo (MCM) es el número más pequeño que es divisible exactamente por todos los números de un conjunto dado, y es una de las operaciones más usadas en matemáticas básicas y álgebra.

Esta calculadora recibe una lista de números enteros positivos, separados por coma o espacio, y calcula automáticamente su MCM usando el algoritmo estándar basado en el máximo común divisor (MCD).

Limitaciones: la calculadora solo acepta números enteros positivos; no calcula el MCM de números decimales, negativos o fracciones directamente.`,
  },
  formula: {
    formula: "MCM(a, b) = (a × b) / MCD(a, b)",
    variables: [
      { symbol: "MCD", meaning: "Máximo Común Divisor entre los números" },
      { symbol: "a, b", meaning: "Los números de entrada para los que se calcula el múltiplo común más pequeño" },
    ],
    explanation: "Para dos números, el MCM se calcula multiplicándolos y dividiendo el resultado entre su Máximo Común Divisor (MCD); para más de dos números, este proceso se repite sucesivamente entre pares.",
    interpretation: "Por ejemplo, el MCM de 4 y 6 es 12, porque 12 es el número más pequeño que es múltiplo exacto de ambos.",
  },
  steps: [
    "Ingresa dos o más números enteros positivos, separados por coma o espacio.",
    "Haz clic en Calcular.",
    "Revisa el resultado del Mínimo Común Múltiplo (MCM).",
    "Usa el botón Copiar para guardar el resultado.",
  ],
  examples: [
    { inputs: "Números: 4, 6", result: "MCM: 12", explanation: "El caso clásico de dos números pequeños usado en clases de matemáticas." },
    { inputs: "Números: 3, 5, 8", result: "MCM: 120", explanation: "Con tres números, el cálculo se repite sucesivamente por pares." },
    { inputs: "Números: 12, 18", result: "MCM: 36", explanation: "Útil para sumar fracciones con denominadores 12 y 18." },
  ],
  practicalUses: [
    "Encontrar el denominador común al sumar o restar fracciones",
    "Resolver problemas de programación relacionados con ciclos o intervalos que coinciden",
    "Ayudar con tareas escolares de matemáticas de primaria y secundaria",
    "Calcular cada cuánto tiempo coinciden eventos que se repiten en intervalos distintos",
    "Simplificar cálculos en problemas de razones y proporciones",
  ],
  expertTips: [
    "El MCM siempre es mayor o igual que el número más grande del conjunto ingresado.",
    "Si dos números son primos entre sí (no comparten factores), su MCM es simplemente el producto de ambos.",
    "Para sumar fracciones rápidamente, usa el MCM de los denominadores como denominador común.",
    "El MCM y el MCD están directamente relacionados: conociendo uno, puedes calcular el otro con la fórmula MCM × MCD = a × b.",
  ],
  commonMistakes: [
    { mistake: "Confundir MCM con MCD (Máximo Común Divisor)", fix: "El MCM es el múltiplo más pequeño compartido; el MCD es el divisor más grande compartido. Son operaciones opuestas." },
    { mistake: "Ingresar números decimales o negativos", fix: "Esta calculadora solo funciona con números enteros positivos; redondea o usa valores absolutos antes de ingresarlos." },
    { mistake: "Calcular el MCM manualmente por listado de múltiplos con números grandes", fix: "Para números grandes, usa la fórmula basada en el MCD en lugar de listar múltiplos uno por uno." },
    { mistake: "Olvidar que el MCM de un solo número no está definido", fix: "Ingresa al menos dos números para que el cálculo del MCM tenga sentido." },
  ],
  faq: [
    { q: "¿Cómo se calcula el MCM de dos números?", a: "Se multiplican ambos números y el resultado se divide entre su Máximo Común Divisor (MCD): MCM(a,b) = (a × b) / MCD(a,b)." },
    { q: "¿Cuál es la diferencia entre MCM y MCD?", a: "El MCM (Mínimo Común Múltiplo) es el múltiplo más pequeño compartido entre números; el MCD (Máximo Común Divisor) es el divisor más grande que tienen en común." },
    { q: "¿Para qué sirve el MCM en fracciones?", a: "El MCM de los denominadores se usa como denominador común para sumar o restar fracciones con distintos denominadores." },
    { q: "¿Cómo calcular el MCM de tres o más números?", a: "Se calcula el MCM entre los dos primeros números, y luego se repite el cálculo entre ese resultado y cada número siguiente." },
    { q: "¿Cuál es el MCM de 4 y 6?", a: "El MCM de 4 y 6 es 12, ya que es el número más pequeño divisible exactamente por ambos." },
    { q: "¿El MCM puede ser menor que los números originales?", a: "No, el MCM siempre es mayor o igual al número más grande del conjunto ingresado." },
    { q: "¿Cómo se relaciona el MCM con el MCD matemáticamente?", a: "Para dos números a y b se cumple que MCM(a,b) × MCD(a,b) = a × b, por lo que conociendo uno puedes calcular el otro." },
    { q: "¿Se puede calcular el MCM de números decimales?", a: "No directamente; el MCM se define para números enteros. Para decimales, generalmente se convierten a fracciones primero." },
    { q: "¿Qué es el MCM de números primos entre sí?", a: "Si dos números no comparten factores comunes (son primos entre sí), su MCM es simplemente el producto de ambos números." },
    { q: "¿Cómo se usa el MCM en la vida real?", a: "Se usa para calcular cada cuánto tiempo coinciden eventos repetitivos, como buses que salen cada 15 y 20 minutos, o para sumar fracciones en recetas de cocina." },
    { q: "¿Cuál es el MCM de 12 y 18?", a: "El MCM de 12 y 18 es 36, el múltiplo más pequeño que ambos números comparten." },
    { q: "¿Existe un límite en la cantidad de números que puedo ingresar?", a: "No hay un límite estricto; puedes ingresar varios números separados por coma o espacio y la calculadora procesará todos." },
    { q: "¿El MCM de números negativos es diferente?", a: "El MCM tradicionalmente se define para números enteros positivos; para negativos se suele usar su valor absoluto." },
    { q: "¿Cómo se calcula el MCM en programación?", a: "Generalmente se implementa calculando primero el MCD (con el algoritmo de Euclides) y luego aplicando la fórmula MCM = (a × b) / MCD(a, b)." },
  ],
  relatedCalculators: ["Calculadora de MCD", "Calculadora de Fracciones", "Calculadora de Números Primos", "Calculadora de Porcentajes"],
  youMayLike: pickYouMayLike("lcm-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de MCM (Mínimo Común Múltiplo)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};