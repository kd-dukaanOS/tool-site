// src/data/calculators/es/discount-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const discountCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Descuentos — Precio Final y Ahorro",
    metaDescription: "Calcula el precio final después de un descuento y cuánto ahorras. Calculadora gratis con descuento porcentual, monto fijo y cupones adicionales.",
    canonicalSlug: "/es/finance/discount-calculator",
    ogTitle: "Calculadora de Descuentos — Precio Final",
    ogDescription: "Descubre el precio final y tu ahorro total al aplicar uno o varios descuentos.",
    twitterTitle: "Calculadora de Descuentos Gratis",
    twitterDescription: "Calcula el precio final con descuento, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Descuentos te muestra el precio final después de aplicar un descuento porcentual o de monto fijo, además de cuánto ahorras — y te permite añadir un cupón adicional para ver cómo se combinan los descuentos.",
  },

  about: {
    text: `Calcular descuentos rápidamente es útil tanto para compradores que quieren saber cuánto pagarán realmente, como para negocios que necesitan fijar precios de rebaja. Esta calculadora permite ingresar el precio original y un descuento — ya sea como porcentaje o como monto fijo — para obtener el precio final al instante.

También puedes agregar un cupón adicional para ver el efecto de descuentos apilados, que no se suman directamente sino que se aplican de forma consecutiva: primero el descuento principal, luego el cupón adicional sobre el precio ya rebajado.

Además de calcular tu compra específica, la herramienta compara automáticamente cómo se vería el precio final con distintas tasas de descuento comunes (10%, 20%, 30%, etc.) para que puedas evaluar ofertas rápidamente.`,
  },

  formula: {
    formula: "Precio Final = Precio Original × (1 − Descuento%) × (1 − Cupón Adicional%)",
    variables: [
      { symbol: "Descuento Porcentual", meaning: "El porcentaje de descuento principal aplicado al precio original" },
      { symbol: "Descuento Fijo", meaning: "Un monto de dinero fijo restado directamente del precio original" },
      { symbol: "Cupón Adicional", meaning: "Un segundo descuento porcentual aplicado sobre el precio ya rebajado" },
    ],
    explanation: "Si eliges descuento porcentual, se multiplica el precio original por (1 − el porcentaje); si eliges monto fijo, se resta directamente. Luego, si agregas un cupón adicional, se aplica ese porcentaje sobre el precio ya rebajado, no sobre el original.",
    interpretation: "Por ejemplo, con un precio de $2,000, un descuento del 20% y un cupón adicional del 10%, el precio tras el primer descuento es $1,600, y tras el cupón adicional queda en $1,440 — un ahorro total de $560, equivalente a un 28% efectivo, no un 30% simple.",
  },

  steps: [
    "Ingresa el precio original del producto.",
    "Elige si el descuento es un porcentaje o un monto fijo.",
    "Ingresa el valor del descuento.",
    "Opcionalmente, ingresa un cupón adicional en porcentaje.",
    "Haz clic en Calcular.",
    "Revisa el precio final, cuánto ahorras y el descuento efectivo total.",
  ],

  examples: [
    { inputs: "Precio: $2,000, Descuento: 20%, Cupón Adicional: 10%", result: "Precio Final: $1,440, Ahorras: $560", explanation: "Los descuentos apilados dan un descuento efectivo del 28%, no una simple suma del 30%." },
    { inputs: "Precio: $500, Descuento: $100 (monto fijo)", result: "Precio Final: $400, Ahorras: $100", explanation: "Un descuento de monto fijo se resta directamente sin cálculo porcentual." },
    { inputs: "Precio: $1,200, Descuento: 35%", result: "Precio Final: $780, Ahorras: $420", explanation: "Un descuento porcentual simple sin cupón adicional." },
  ],

  practicalUses: [
    "Verificar el precio real antes de comprar durante una oferta o rebaja",
    "Comparar si conviene más un descuento porcentual o un cupón de monto fijo",
    "Calcular cuánto ahorras al combinar una oferta con un cupón adicional",
    "Fijar precios de rebaja si tienes un negocio o tienda",
    "Comparar rápidamente distintas tasas de descuento posibles antes de decidir",
  ],

  expertTips: [
    "Los descuentos apilados no se suman directamente — un 20% más un 10% no es 30% de descuento total, sino aproximadamente 28%.",
    "Un descuento de monto fijo suele ser más ventajoso en compras pequeñas, mientras que un descuento porcentual suele ser mejor en compras grandes.",
    "Siempre verifica si el cupón adicional aplica sobre el precio original o sobre el precio ya rebajado — esta calculadora asume que aplica sobre el precio rebajado, como es más común.",
    "Compara el descuento efectivo total, no solo los porcentajes individuales, para saber realmente cuánto estás ahorrando.",
    "Ten cuidado con ofertas que anuncian '50% + 20% de descuento' — el descuento efectivo real es menor al 70% que parece a simple vista.",
  ],

  commonMistakes: [
    { mistake: "Sumar directamente dos porcentajes de descuento", fix: "Los descuentos apilados se aplican de forma consecutiva, no se suman; un 20% + 10% da un descuento efectivo cercano al 28%, no 30%." },
    { mistake: "Confundir descuento porcentual con monto fijo", fix: "Verifica cuál tipo de descuento te están ofreciendo antes de calcular, ya que el resultado puede variar mucho." },
    { mistake: "No considerar impuestos aplicados después del descuento", fix: "Esta calculadora muestra el precio antes de impuestos; algunos comercios aplican impuestos sobre el precio ya descontado." },
    { mistake: "Asumir que un descuento mayor siempre es mejor oferta", fix: "Compara el precio final real, no solo el porcentaje anunciado, especialmente al comparar productos de precios distintos." },
  ],

  faq: [
    { q: "¿Cómo se calcula el precio con descuento?", a: "Se multiplica el precio original por (1 menos el porcentaje de descuento), o se resta directamente el monto fijo del descuento." },
    { q: "¿Cómo funcionan los descuentos apilados o combinados?", a: "Se aplican de forma consecutiva: primero el descuento principal sobre el precio original, y luego el cupón adicional sobre el precio ya rebajado — no se suman directamente." },
    { q: "¿Un 20% más un 10% de descuento es igual a 30% de descuento total?", a: "No, el descuento efectivo total es aproximadamente 28%, porque el segundo descuento se aplica sobre el precio ya rebajado, no sobre el original." },
    { q: "¿Cómo calculo cuánto ahorro en una oferta?", a: "Resta el precio final del precio original; esa diferencia es tu ahorro total en dinero." },
    { q: "¿Qué es mejor, un descuento porcentual o un cupón de monto fijo?", a: "Depende del precio del producto: en compras pequeñas un monto fijo suele ahorrar más proporcionalmente, mientras que en compras grandes un porcentaje suele ser más ventajoso." },
    { q: "¿Cómo calculo el precio original si ya conozco el precio con descuento?", a: "Divide el precio final entre (1 menos el porcentaje de descuento) para obtener el precio original antes del descuento." },
    { q: "¿El descuento se aplica antes o después de impuestos?", a: "Generalmente el descuento se aplica sobre el precio antes de impuestos, y los impuestos se calculan después sobre el precio ya rebajado." },
    { q: "¿Cómo sé si una oferta de '2x1' o 'lleva 3 paga 2' me conviene más?", a: "Calcula el precio efectivo por unidad dividiendo el total pagado entre el número de artículos, y compáralo con comprar por separado con otro descuento." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre Ventas", "Calculadora de Propinas", "Calculadora de Margen de Ganancia", "Calculadora de IVA"],

  youMayLike: pickYouMayLike("discount-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Descuentos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};