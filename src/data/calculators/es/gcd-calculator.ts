// src/data/calculators/es/gcd-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const gcdCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de MCD (Máximo Común Divisor) Online Gratis",
    metaDescription: "Calcula el máximo común divisor (MCD) de dos o más números al instante. Gratis, rápido y sin límites.",
    canonicalSlug: "/es/math-stats/gcd-calculator",
    ogTitle: "Calculadora de MCD",
    ogDescription: "Encuentra el máximo común divisor de cualquier conjunto de números al instante.",
    twitterTitle: "Calculadora de MCD Gratis",
    twitterDescription: "Calcula el máximo común divisor al instante.",
  },
  hero: {
    text: "La Calculadora de MCD encuentra el máximo común divisor de dos o más números enteros positivos al instante.",
  },
  about: {
    text: `El máximo común divisor (MCD), también llamado máximo común denominador, es el número entero más grande que divide exactamente a todos los números dados, sin dejar residuo.

Esta calculadora acepta dos o más números separados por comas o espacios y calcula su MCD usando el algoritmo de Euclides, ampliamente utilizado por su eficiencia.

Limitaciones: solo acepta números enteros positivos; no calcula el MCD de números decimales o negativos.`,
  },
  formula: {
    formula: "MCD(a, b) = MCD(b, a mod b), hasta que el residuo sea 0",
    variables: [
      { symbol: "a mod b", meaning: "El residuo de dividir a entre b" },
      { symbol: "MCD de más de dos números", meaning: "Se calcula el MCD de los dos primeros, y luego el MCD de ese resultado con el siguiente número, y así sucesivamente" },
    ],
    explanation: "El algoritmo de Euclides reemplaza repetidamente el número mayor por el residuo de dividirlo entre el menor, hasta que el residuo es cero; el último divisor distinto de cero es el MCD.",
    interpretation: "Por ejemplo, el MCD de 12, 18 y 24 es 6, ya que 6 es el número más grande que divide exactamente a los tres.",
  },
  steps: [
    "Ingresa dos o más números enteros positivos separados por comas o espacios.",
    "Haz clic en Calcular.",
    "Revisa el máximo común divisor de los números ingresados.",
  ],
  examples: [
    { inputs: "Números: 12, 18, 24", result: "MCD: 6", explanation: "6 es el mayor número que divide exactamente a 12, 18 y 24." },
    { inputs: "Números: 48, 60", result: "MCD: 12", explanation: "12 es el máximo común divisor de estos dos números." },
    { inputs: "Números: 17, 23", result: "MCD: 1", explanation: "Cuando dos números son coprimos (no comparten factores), su MCD es siempre 1." },
  ],
  practicalUses: [
    "Simplificar fracciones a su forma más reducida",
    "Resolver problemas de matemáticas escolares sobre divisibilidad",
    "Dividir cantidades en grupos iguales del mayor tamaño posible",
    "Calcular el MCD como paso intermedio para encontrar el mínimo común múltiplo (MCM)",
  ],
  expertTips: [
    "El MCD y el MCM están relacionados por la fórmula: MCD(a,b) × MCM(a,b) = a × b, útil para verificar resultados.",
    "Para simplificar una fracción, divide el numerador y el denominador entre su MCD para obtener la fracción más simple.",
    "Si el MCD de dos números es 1, se dice que son coprimos o primos entre sí.",
  ],
  commonMistakes: [
    { mistake: "Confundir el MCD con el mínimo común múltiplo (MCM)", fix: "El MCD es el divisor común más grande; el MCM es el múltiplo común más pequeño — son conceptos opuestos." },
    { mistake: "Ingresar números decimales o negativos", fix: "El MCD tradicional solo se define para números enteros positivos; usa valores enteros positivos en esta calculadora." },
    { mistake: "Asumir que el MCD de números coprimos es cero", fix: "El MCD de números que no comparten factores comunes (coprimos) es 1, no cero." },
  ],
  faq: [
    { q: "¿Cómo se calcula el máximo común divisor (MCD)?", a: "Se usa el algoritmo de Euclides, que divide repetidamente los números y toma el residuo, hasta que el residuo es cero; el último divisor es el MCD." },
    { q: "¿Cuál es la diferencia entre MCD y MCM?", a: "El MCD (máximo común divisor) es el número más grande que divide a todos los números dados; el MCM (mínimo común múltiplo) es el número más pequeño que es múltiplo de todos ellos." },
    { q: "¿Puedo calcular el MCD de más de dos números?", a: "Sí, esta calculadora acepta múltiples números separados por comas o espacios y calcula el MCD de todo el conjunto." },
    { q: "¿Qué significa que el MCD de dos números sea 1?", a: "Significa que los números son coprimos, es decir, no comparten ningún factor común aparte de 1." },
    { q: "¿Cómo uso el MCD para simplificar una fracción?", a: "Divide el numerador y el denominador de la fracción entre su MCD para obtener la fracción equivalente más simple." },
    { q: "¿El MCD puede ser negativo?", a: "No, el MCD tradicionalmente se define como un número entero positivo, independientemente del signo de los números originales." },
    { q: "¿Qué es el algoritmo de Euclides?", a: "Es un método eficiente para calcular el MCD de dos números, basado en dividir repetidamente y tomar el residuo hasta llegar a cero." },
    { q: "¿Cómo se relacionan el MCD y el MCM?", a: "Para dos números a y b, se cumple que MCD(a,b) × MCM(a,b) = a × b, lo cual permite calcular uno a partir del otro." },
    { q: "¿Esta calculadora funciona con números muy grandes?", a: "Sí, el algoritmo de Euclides es eficiente incluso para números grandes, procesándolos casi instantáneamente." },
    { q: "¿Por qué es útil el MCD en matemáticas escolares?", a: "Se usa para simplificar fracciones, resolver problemas de divisibilidad y como base para entender conceptos como el MCM y los números primos." },
    { q: "¿El MCD de un número consigo mismo es el mismo número?", a: "Sí, el MCD de un número consigo mismo siempre es igual a ese número." },
    { q: "¿Qué pasa si uno de los números es 0?", a: "El MCD de cualquier número y 0 es el valor absoluto del número distinto de cero." },
  ],
  relatedCalculators: ["Calculadora de MCM", "Calculadora de Fracciones", "Calculadora de Números Primos", "Calculadora de Porcentaje"],
  youMayLike: pickYouMayLike("gcd-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de MCD (Máximo Común Divisor)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};