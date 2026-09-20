// src/data/calculators/es/percentage-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const percentageCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Porcentajes Online Gratis 2026",
    metaDescription: "Calcula porcentajes al instante: qué es X% de Y, qué porcentaje es X de Y, cambio porcentual y encontrar el número base. Gratis.",
    canonicalSlug: "/es/generators-calculators/percentage-calculator",
    ogTitle: "Calculadora de Porcentajes",
    ogDescription: "Calcula cualquier tipo de porcentaje al instante con explicación en lenguaje sencillo.",
    twitterTitle: "Calculadora de Porcentajes 2026",
    twitterDescription: "Resuelve cualquier cálculo de porcentaje al instante.",
  },
  hero: {
    text: "La Calculadora de Porcentajes resuelve las cuatro preguntas de porcentaje más comunes: cuánto es X% de Y, qué porcentaje es X de Y, el cambio porcentual entre dos valores, y encontrar el número original cuando conoces un porcentaje de él.",
  },
  about: {
    text: `Un porcentaje expresa un número como una fracción de 100, y es una de las herramientas matemáticas más usadas en la vida diaria: descuentos, propinas, impuestos, calificaciones y estadísticas.

Esta calculadora cubre cuatro modos distintos de cálculo: encontrar un porcentaje de un número (X% de Y), encontrar qué porcentaje representa un número de otro (X es qué % de Y), calcular el cambio porcentual entre dos valores, y trabajar hacia atrás para encontrar el número original cuando conoces un porcentaje de él.

Limitaciones: esta calculadora realiza cálculos matemáticos puros; no incluye contexto financiero adicional como impuestos compuestos o interés acumulado en el tiempo.`,
  },
  formula: {
    formula: "X% de Y = (X / 100) × Y",
    variables: [
      { symbol: "X es qué % de Y", meaning: "(X / Y) × 100" },
      { symbol: "% Cambio", meaning: "((Valor Final − Valor Inicial) / Valor Inicial) × 100" },
      { symbol: "Encontrar la Base", meaning: "X / (Y / 100), para encontrar el número original cuando X es Y% de él" },
    ],
    explanation: "Cada modo usa una variación de la relación básica entre porcentaje, parte y total; el modo correcto depende de qué dato conoces y cuál necesitas encontrar.",
    interpretation: "Por ejemplo, el 20% de 150 es 30; 30 es el 20% de 150; el cambio porcentual de 100 a 130 es +30%; y si 30 es el 20% de un número, ese número es 150.",
  },
  steps: [
    "Selecciona el tipo de cálculo que necesitas: X% de Y, X es qué % de Y, % Cambio, o Encontrar la Base.",
    "Ingresa los dos valores requeridos según el modo elegido.",
    "Haz clic en Calcular.",
    "Revisa el resultado junto con la explicación en lenguaje sencillo.",
  ],
  examples: [
    { inputs: "Modo: X% de Y, Porcentaje: 20%, Número: 150", result: "Resultado: 30", explanation: "El 20% de 150 es 30, útil para calcular descuentos o propinas." },
    { inputs: "Modo: X es qué % de Y, Parte: 45, Total: 180", result: "Resultado: 25%", explanation: "45 es el 25% de 180, útil para calcular calificaciones o proporciones." },
    { inputs: "Modo: % Cambio, De: 80, A: 100", result: "Resultado: +25%", explanation: "Un aumento del 80 al 100 representa un cambio porcentual del 25%." },
  ],
  practicalUses: [
    "Calcular descuentos y precios finales durante compras",
    "Calcular propinas en restaurantes según el porcentaje deseado",
    "Determinar el cambio porcentual en ventas, precios o cualquier métrica de negocio",
    "Calcular calificaciones escolares a partir de puntos obtenidos sobre el total",
    "Encontrar el número original cuando conoces solo un porcentaje de él",
  ],
  expertTips: [
    "Para calcular un descuento, usa el modo 'X% de Y' con el porcentaje de descuento y el precio original, luego resta ese resultado del precio original.",
    "El modo '% Cambio' siempre da un resultado positivo si el valor aumentó y negativo si disminuyó — presta atención al signo.",
    "El modo 'Encontrar la Base' es útil cuando sabes el resultado de un porcentaje pero necesitas el número original, como en problemas de impuestos incluidos.",
    "Recuerda que un aumento del 50% seguido de una disminución del 50% no regresa al valor original, debido a cómo funcionan los porcentajes compuestos.",
  ],
  commonMistakes: [
    { mistake: "Confundir 'X% de Y' con 'X es qué % de Y'", fix: "El primero busca un valor resultante; el segundo busca el porcentaje que representa una parte de un total — verifica cuál necesitas antes de calcular." },
    { mistake: "Olvidar el signo en el cálculo de cambio porcentual", fix: "Un cambio porcentual negativo indica una disminución, no un error de cálculo; presta atención al signo del resultado." },
    { mistake: "Asumir que los porcentajes se suman o restan directamente en cambios sucesivos", fix: "Un 20% de aumento seguido de un 20% de disminución no regresa al valor original, ya que cada porcentaje se aplica sobre una base distinta." },
  ],
  faq: [
    { q: "¿Cómo calculo el porcentaje de un número?", a: "Multiplica el número por el porcentaje dividido entre 100; por ejemplo, el 20% de 150 es 150 × (20/100) = 30." },
    { q: "¿Cómo sé qué porcentaje es un número de otro?", a: "Divide la parte entre el total y multiplica por 100; por ejemplo, 45 de 180 es (45/180) × 100 = 25%." },
    { q: "¿Cómo calculo el cambio porcentual entre dos valores?", a: "Resta el valor inicial del valor final, divide ese resultado entre el valor inicial, y multiplica por 100 para obtener el porcentaje de cambio." },
    { q: "¿Cómo encuentro el número original si conozco un porcentaje de él?", a: "Divide el valor conocido entre el porcentaje expresado como decimal; por ejemplo, si 30 es el 20% de un número, ese número es 30 / 0.20 = 150." },
    { q: "¿Cómo calculo un descuento porcentual en una compra?", a: "Calcula el porcentaje de descuento sobre el precio original y réstalo del precio original para obtener el precio final." },
    { q: "¿Cómo calculo el aumento porcentual de un salario?", a: "Usa el modo de cambio porcentual con tu salario anterior como valor inicial y tu nuevo salario como valor final." },
    { q: "¿Qué significa un cambio porcentual negativo?", a: "Significa que el valor disminuyó respecto al valor inicial; el signo negativo indica una reducción, no un error en el cálculo." },
    { q: "¿Cómo calculo qué porcentaje representa mi calificación?", a: "Usa el modo 'X es qué % de Y' con tus puntos obtenidos como X y el puntaje total posible como Y." },
    { q: "¿Un aumento del 50% y luego una disminución del 50% regresan al valor original?", a: "No, porque cada porcentaje se calcula sobre una base distinta; el resultado final será menor que el valor original." },
    { q: "¿Cómo calculo el IVA o impuesto incluido en un precio?", a: "Usa el modo 'Encontrar la Base' con el precio total como valor conocido y la tasa de impuesto más 100% como el porcentaje aplicado." },
    { q: "¿Esta calculadora sirve para calcular propinas?", a: "Sí, usa el modo 'X% de Y' con el porcentaje de propina deseado y el monto de la cuenta para obtener el monto de la propina." },
    { q: "¿Cómo calculo qué porcentaje de aumento necesito para llegar a un objetivo?", a: "Usa el modo de cambio porcentual con tu valor actual como inicial y tu meta como valor final para ver el porcentaje de aumento necesario." },
    { q: "¿Los porcentajes pueden ser mayores a 100%?", a: "Sí, un porcentaje mayor a 100% simplemente significa que el valor es más del doble, triple, etc., del número de referencia." },
  ],
  relatedCalculators: ["Calculadora de Descuento", "Calculadora de Propina", "Calculadora de Impuesto sobre Ventas", "Calculadora de Aumento de Sueldo"],
  youMayLike: pickYouMayLike("percentage-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Porcentajes",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};