// src/data/calculators/es/prime-number-calculator.ts
// NOTE: category assumed "math-stats" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const primeNumberCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Números Primos 2026",
    metaDescription: "Verifica si un número es primo, sus factores y los primos más cercanos. Gratis e instantáneo.",
    canonicalSlug: "/es/math-stats/prime-number-calculator",
    ogTitle: "Calculadora de Números Primos",
    ogDescription: "Verifica si un número es primo y encuentra sus factores al instante.",
    twitterTitle: "Calculadora de Números Primos",
    twitterDescription: "Verifica si un número es primo al instante, gratis.",
  },
  hero: {
    text: "La Calculadora de Números Primos verifica si un número es primo, muestra sus factores y encuentra el número primo más cercano tanto por debajo como por encima.",
  },
  about: {
    text: `Un número primo es un número entero mayor a 1 que solo es divisible exactamente entre 1 y él mismo, y son fundamentales en matemáticas, criptografía y teoría de números.

Esta calculadora recibe un número entero positivo y verifica si es primo, lista todos sus factores (divisores), y encuentra el número primo más cercano tanto por debajo como por encima del número ingresado.

Limitaciones: la calculadora funciona con números enteros positivos; no procesa decimales ni números negativos, ya que el concepto de número primo se define únicamente sobre los enteros positivos mayores a 1.`,
  },
  formula: {
    formula: "Un número N es primo si sus únicos divisores son 1 y N",
    variables: [
      { symbol: "Factores", meaning: "Todos los números enteros que dividen exactamente a N sin dejar residuo" },
      { symbol: "Primo Más Cercano", meaning: "El número primo más próximo por debajo o por encima del número ingresado" },
    ],
    explanation: "Se verifica si el número ingresado tiene divisores además de 1 y sí mismo, probando la divisibilidad hasta la raíz cuadrada del número; si no se encuentran divisores adicionales, el número es primo. Luego se buscan los primos más cercanos explorando números consecutivos.",
    interpretation: "Por ejemplo, el número 29 es primo porque no tiene divisores además de 1 y 29; sus primos cercanos son 23 (abajo) y 31 (arriba).",
  },
  steps: [
    "Ingresa un número entero positivo.",
    "Haz clic en Calcular.",
    "Revisa si el número es primo, sus factores, y los primos más cercanos por debajo y por encima.",
  ],
  examples: [
    { inputs: "Número: 29", result: "Es Primo, Factores: 1, 29, Primo Más Cercano Abajo: 23, Arriba: 31", explanation: "29 es un número primo clásico usado en ejemplos matemáticos." },
    { inputs: "Número: 30", result: "No es Primo, Factores: 1, 2, 3, 5, 6, 10, 15, 30", explanation: "30 tiene múltiples factores además de 1 y sí mismo, por lo que no es primo." },
    { inputs: "Número: 2", result: "Es Primo, Factores: 1, 2, Primo Más Cercano Abajo: Ninguno", explanation: "2 es el único número primo par y el más pequeño de todos los primos." },
  ],
  practicalUses: [
    "Verificar rápidamente si un número es primo para tareas escolares de matemáticas",
    "Encontrar todos los factores de un número para simplificar fracciones",
    "Explorar conceptos de teoría de números de forma interactiva",
    "Ayudar en ejercicios de programación relacionados con algoritmos de primalidad",
    "Encontrar números primos cercanos para problemas de criptografía básica o educativa",
  ],
  expertTips: [
    "El número 1 no se considera primo ni compuesto por definición matemática; los números primos comienzan en 2.",
    "2 es el único número primo par; todos los demás números primos son impares.",
    "Para verificar si un número grande es primo manualmente, solo necesitas probar divisores hasta la raíz cuadrada del número, no hasta el número mismo.",
    "Los números primos son la base de la criptografía moderna, especialmente en algoritmos como RSA que dependen de la dificultad de factorizar números grandes.",
  ],
  commonMistakes: [
    { mistake: "Considerar que 1 es un número primo", fix: "Por definición matemática, 1 no es primo ni compuesto; los números primos comienzan en 2." },
    { mistake: "Asumir que todos los números impares son primos", fix: "No es cierto; por ejemplo, 9, 15 y 21 son impares pero no son primos, ya que tienen factores adicionales." },
    { mistake: "Probar divisibilidad hasta el número completo en lugar de su raíz cuadrada", fix: "Solo es necesario verificar divisores hasta la raíz cuadrada del número para determinar si es primo, lo cual es mucho más eficiente." },
    { mistake: "Ingresar números negativos o decimales", fix: "Esta calculadora funciona únicamente con números enteros positivos mayores a 1, ya que el concepto de número primo no aplica a negativos o decimales." },
  ],
  faq: [
    { q: "¿Qué es un número primo?", a: "Es un número entero mayor a 1 que solo es divisible exactamente entre 1 y él mismo, sin ningún otro factor." },
    { q: "¿Cómo saber si un número es primo?", a: "Se verifica si el número tiene divisores además de 1 y sí mismo, probando la divisibilidad hasta la raíz cuadrada del número." },
    { q: "¿El número 1 es primo?", a: "No, por definición matemática, 1 no se considera ni primo ni compuesto; los números primos comienzan en 2." },
    { q: "¿Cuál es el número primo más pequeño?", a: "El número primo más pequeño es 2, que también es el único número primo par." },
    { q: "¿Todos los números impares son primos?", a: "No, muchos números impares no son primos; por ejemplo, 9 (3×3), 15 (3×5) y 21 (3×7) son impares pero tienen factores adicionales." },
    { q: "¿Cómo se encuentran los factores de un número?", a: "Se prueba la divisibilidad del número entre cada entero desde 1 hasta el número mismo, registrando aquellos que dividen exactamente sin dejar residuo." },
    { q: "¿Para qué se usan los números primos en la vida real?", a: "Son fundamentales en criptografía (como el algoritmo RSA), en la generación de códigos de seguridad, y en diversas áreas de las matemáticas y la informática." },
    { q: "¿Cuántos números primos hay entre 1 y 100?", a: "Hay 25 números primos entre 1 y 100, comenzando con 2 y terminando con 97." },
    { q: "¿Cómo se calcula el número primo más cercano a uno dado?", a: "Se exploran números consecutivos hacia abajo y hacia arriba del número ingresado, verificando en cada caso si son primos, hasta encontrar el más cercano en cada dirección." },
    { q: "¿Existe un número primo más grande conocido?", a: "Sí, matemáticos continúan descubriendo números primos cada vez más grandes (como los primos de Mersenne), aunque no existe un número primo 'más grande' definitivo, ya que hay infinitos números primos." },
    { q: "¿Los números negativos pueden ser primos?", a: "No, el concepto de número primo se define únicamente para números enteros positivos mayores a 1." },
    { q: "¿Qué es un número compuesto?", a: "Es un número entero mayor a 1 que no es primo, es decir, que tiene al menos un factor además de 1 y sí mismo." },
    { q: "¿Cómo se relacionan los números primos con la factorización?", a: "Todo número entero mayor a 1 puede expresarse como un producto único de números primos, conocido como su factorización prima." },
    { q: "¿Esta calculadora funciona con números muy grandes?", a: "Funciona bien con números de tamaño razonable para uso educativo; para números extremadamente grandes usados en criptografía real, se requieren algoritmos especializados de primalidad." },
  ],
  relatedCalculators: ["Calculadora de MCM", "Calculadora de MCD", "Calculadora de Factorización", "Calculadora de Fracciones"],
  youMayLike: pickYouMayLike("prime-number-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Números Primos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};