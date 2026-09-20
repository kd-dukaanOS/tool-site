// src/data/calculators/es/percentage-increase-calculator.ts
// NOTE: category assumed "math-stats" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const percentageIncreaseCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Aumento Porcentual 2026",
    metaDescription: "Calcula el aumento o disminución porcentual entre dos valores al instante. Gratis y sin registro.",
    canonicalSlug: "/es/math-stats/percentage-increase-calculator",
    ogTitle: "Calculadora de Aumento Porcentual",
    ogDescription: "Calcula el cambio porcentual entre dos valores al instante.",
    twitterTitle: "Calculadora de % de Aumento o Disminución",
    twitterDescription: "Calcula el cambio porcentual entre dos valores.",
  },
  hero: {
    text: "La Calculadora de Aumento Porcentual calcula el cambio porcentual entre un valor original y un nuevo valor, indicando si se trata de un aumento o una disminución.",
  },
  about: {
    text: `Calcular el cambio porcentual entre dos números es una operación común en finanzas personales, negocios y análisis de datos, ya sea para medir el aumento de un precio, un salario, o cualquier otra cifra a lo largo del tiempo.

Esta calculadora recibe un valor original y un nuevo valor, y calcula automáticamente el cambio absoluto y el porcentaje de aumento o disminución entre ambos, mostrando claramente cuál de los dos ocurrió.

Limitaciones: la calculadora requiere que el valor original sea mayor a cero, ya que el porcentaje de cambio no está matemáticamente definido cuando el valor de partida es cero.`,
  },
  formula: {
    formula: "Cambio Porcentual = ((Nuevo Valor − Valor Original) / Valor Original) × 100",
    variables: [
      { symbol: "Cambio", meaning: "Diferencia absoluta entre el nuevo valor y el valor original" },
      { symbol: "Cambio Porcentual", meaning: "El cambio expresado como porcentaje del valor original" },
    ],
    explanation: "Se resta el valor original al nuevo valor para obtener el cambio absoluto, y ese resultado se divide entre el valor original y se multiplica por 100 para obtener el porcentaje de cambio; un resultado positivo indica aumento, uno negativo indica disminución.",
    interpretation: "Por ejemplo, si un valor pasa de 200 a 250, el cambio es de 50, y el aumento porcentual es del 25% (50/200 × 100).",
  },
  steps: [
    "Ingresa el valor original.",
    "Ingresa el nuevo valor.",
    "Haz clic en Calcular.",
    "Revisa el cambio absoluto y el porcentaje de aumento o disminución.",
  ],
  examples: [
    { inputs: "Original: 200, Nuevo: 250", result: "Cambio: 50, Aumento: 25%", explanation: "Un aumento simple entre dos valores, común al analizar precios o ventas." },
    { inputs: "Original: 500, Nuevo: 400", result: "Cambio: -100, Disminución: 20%", explanation: "Cuando el nuevo valor es menor, el resultado se muestra como disminución porcentual." },
    { inputs: "Original: 50, Nuevo: 50", result: "Cambio: 0, Sin cambio: 0%", explanation: "Cuando ambos valores son iguales, no hay cambio porcentual." },
  ],
  practicalUses: [
    "Calcular el aumento porcentual de un salario o aumento salarial",
    "Medir el cambio porcentual en precios de productos o servicios",
    "Analizar el crecimiento o caída porcentual de ventas mes a mes",
    "Calcular descuentos o incrementos de precios en compras y negocios",
    "Ayudar con tareas escolares de matemáticas sobre porcentajes",
  ],
  expertTips: [
    "Un aumento del 50% seguido de una disminución del 50% NO regresa al valor original; por ejemplo, 100 sube a 150 (+50%), pero 150 baja a 75 (-50%), no a 100.",
    "El cambio porcentual siempre se calcula respecto al valor original, no al nuevo valor; esto es clave para interpretar correctamente el resultado.",
    "Para comparar cambios entre distintos períodos de tiempo, asegúrate de usar siempre el mismo valor base (original) para que las comparaciones sean justas.",
    "Un cambio porcentual negativo simplemente indica una disminución; no es un error de cálculo.",
  ],
  commonMistakes: [
    { mistake: "Calcular el porcentaje sobre el nuevo valor en lugar del valor original", fix: "El cambio porcentual siempre se divide entre el valor original, no entre el nuevo valor, para obtener el resultado correcto." },
    { mistake: "Asumir que aumentos y disminuciones porcentuales son simétricos", fix: "Un aumento del 20% seguido de una disminución del 20% no regresa al valor original, ya que cada porcentaje se calcula sobre una base distinta." },
    { mistake: "Intentar calcular el cambio porcentual con un valor original de cero", fix: "El cálculo no está definido matemáticamente cuando el valor original es cero; usa un valor de referencia distinto de cero." },
    { mistake: "Confundir el cambio absoluto con el cambio porcentual", fix: "El cambio absoluto es la diferencia simple entre los números; el cambio porcentual expresa esa diferencia en relación proporcional al valor original." },
  ],
  faq: [
    { q: "¿Cómo se calcula el aumento porcentual entre dos números?", a: "Se resta el valor original al nuevo valor, se divide ese resultado entre el valor original, y se multiplica por 100 para obtener el porcentaje de aumento." },
    { q: "¿Cómo se calcula la disminución porcentual?", a: "Se usa la misma fórmula que el aumento porcentual; si el resultado es negativo, representa una disminución porcentual respecto al valor original." },
    { q: "¿Cuál es la fórmula para calcular el cambio porcentual?", a: "La fórmula es: ((Nuevo Valor − Valor Original) / Valor Original) × 100, donde el resultado positivo indica aumento y el negativo indica disminución." },
    { q: "¿Por qué un aumento del 50% y luego una disminución del 50% no regresan al valor original?", a: "Porque cada porcentaje se calcula sobre una base distinta: el aumento se calcula sobre el valor original, mientras que la disminución se calcula sobre el nuevo valor ya aumentado." },
    { q: "¿Cómo calculo el porcentaje de aumento de mi salario?", a: "Resta tu salario anterior al nuevo salario, divide ese resultado entre el salario anterior, y multiplica por 100 para obtener el porcentaje de aumento." },
    { q: "¿Qué pasa si el valor original es cero en el cálculo?", a: "El cálculo del cambio porcentual no está definido matemáticamente cuando el valor original es cero, ya que implicaría una división entre cero." },
    { q: "¿Cómo calculo un descuento en porcentaje sobre un precio?", a: "Usa el precio original como valor original y el precio con descuento como nuevo valor; el resultado negativo representará el porcentaje de descuento aplicado." },
    { q: "¿Cuál es la diferencia entre cambio absoluto y cambio porcentual?", a: "El cambio absoluto es la diferencia simple en unidades entre dos valores; el cambio porcentual expresa esa diferencia como proporción del valor original." },
    { q: "¿Cómo se calcula el crecimiento porcentual de ventas mes a mes?", a: "Se usa el valor del mes anterior como valor original y el valor del mes actual como nuevo valor, aplicando la misma fórmula de cambio porcentual." },
    { q: "¿El aumento porcentual puede ser mayor al 100%?", a: "Sí, si el nuevo valor es más del doble del valor original, el aumento porcentual será mayor al 100%, lo cual es matemáticamente válido." },
    { q: "¿Cómo interpreto un resultado de disminución porcentual del 100%?", a: "Una disminución del 100% significa que el nuevo valor llegó a cero, ya que representa la pérdida total del valor original." },
    { q: "¿Puedo usar esta calculadora para comparar precios entre tiendas?", a: "Sí, puedes usar el precio de una tienda como valor original y el precio de otra como nuevo valor, para ver la diferencia porcentual entre ambos." },
    { q: "¿Cómo se calcula el aumento porcentual acumulado en varios períodos?", a: "Debes calcular el cambio porcentual de cada período por separado y luego combinarlos multiplicativamente (no sumándolos directamente), ya que cada aumento se aplica sobre una base distinta." },
    { q: "¿Esta calculadora funciona con números decimales?", a: "Sí, puedes ingresar valores decimales tanto en el valor original como en el nuevo valor, y el cálculo del porcentaje funcionará de la misma forma." },
  ],
  relatedCalculators: ["Calculadora de Porcentaje", "Calculadora de Descuento", "Calculadora de Margen de Ganancia", "Calculadora de Media, Mediana y Moda"],
  youMayLike: pickYouMayLike("percentage-increase-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Aumento Porcentual",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};