// src/data/calculators/es/markup-calculator.ts
// NOTE: real slug is "markup-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const markupCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Margen de Ganancia (Markup) 2026",
    metaDescription: "Calcula tu precio de venta y ganancia a partir del costo y porcentaje de margen. Gratis e instantáneo.",
    canonicalSlug: "/es/business/markup-calculator",
    ogTitle: "Calculadora de Margen",
    ogDescription: "Calcula tu precio de venta y ganancia a partir del costo.",
    twitterTitle: "Calculadora de Markup",
    twitterDescription: "Calcula precio de venta y ganancia al instante.",
  },
  hero: {
    text: "La Calculadora de Margen (Markup) calcula tu precio de venta, ganancia y margen resultante a partir del costo de un producto y el porcentaje de margen que quieras aplicar.",
  },
  about: {
    text: `El markup (margen de ganancia) es el porcentaje que se agrega sobre el costo de un producto para determinar su precio de venta, y es una de las decisiones de precios más importantes para cualquier negocio o vendedor.

Esta calculadora recibe el costo del producto y el porcentaje de markup deseado, y calcula automáticamente el precio de venta resultante, la ganancia en dinero y el margen de ganancia real expresado como porcentaje del precio de venta.

Limitaciones: esta calculadora no incluye impuestos, comisiones de plataforma ni costos de envío; para un precio final al cliente, suma esos costos adicionales por separado.`,
  },
  formula: {
    formula: "Precio de Venta = Costo × (1 + Markup% / 100)",
    variables: [
      { symbol: "Markup %", meaning: "Porcentaje agregado sobre el costo para determinar el precio de venta" },
      { symbol: "Margen Resultante", meaning: "Ganancia dividida entre el precio de venta, expresado como porcentaje" },
    ],
    explanation: "Se multiplica el costo por (1 + el porcentaje de markup dividido entre 100) para obtener el precio de venta; la ganancia es la diferencia entre el precio de venta y el costo, y el margen resultante es esa ganancia dividida entre el precio de venta.",
    interpretation: "Por ejemplo, con un costo de $40 y un markup del 25%, el precio de venta es de $50, la ganancia es de $10, y el margen resultante es del 20% del precio de venta.",
  },
  steps: [
    "Ingresa el costo del producto.",
    "Ingresa el porcentaje de markup que deseas aplicar.",
    "Haz clic en Calcular.",
    "Revisa el precio de venta, la ganancia en dinero y el margen resultante.",
  ],
  examples: [
    { inputs: "Costo: $40, Markup: 25%", result: "Precio de Venta: $50, Ganancia: $10, Margen: 20%", explanation: "Un ejemplo básico de margen aplicado a un producto minorista." },
    { inputs: "Costo: $100, Markup: 50%", result: "Precio de Venta: $150, Ganancia: $50, Margen: 33.3%", explanation: "Nota cómo el margen resultante siempre es menor al porcentaje de markup aplicado." },
    { inputs: "Costo: $15, Markup: 100%", result: "Precio de Venta: $30, Ganancia: $15, Margen: 50%", explanation: "Duplicar el precio (markup del 100%) resulta en un margen del 50%, no del 100%." },
  ],
  practicalUses: [
    "Fijar precios de venta para productos en una tienda física u online",
    "Calcular cuánto debes cobrar para alcanzar una ganancia objetivo",
    "Comparar el margen real obtenido según distintos porcentajes de markup",
    "Ajustar precios de productos al cambiar el costo de proveedores",
    "Explicar a un cliente o socio cómo se calcula el precio final de un producto",
  ],
  expertTips: [
    "El markup y el margen de ganancia no son lo mismo: un markup del 50% siempre resulta en un margen menor al 50% (en este caso, 33.3%).",
    "Para alcanzar un margen de ganancia objetivo específico, es más preciso calcular directamente desde el margen deseado en lugar de adivinar el markup.",
    "Revisa periódicamente tus márgenes si los costos de tus proveedores cambian, para mantener tu rentabilidad esperada.",
    "Considera el markup necesario para cubrir no solo el costo del producto, sino también gastos operativos, antes de fijar tu precio final.",
  ],
  commonMistakes: [
    { mistake: "Confundir markup con margen de ganancia", fix: "El markup se calcula sobre el costo; el margen se calcula sobre el precio de venta. Son porcentajes distintos aunque estén relacionados." },
    { mistake: "No considerar gastos operativos adicionales al fijar el precio", fix: "Suma costos de envío, comisiones de plataforma o impuestos por separado antes de fijar el precio final al cliente." },
    { mistake: "Asumir que duplicar el precio da un margen del 100%", fix: "Duplicar el precio (markup del 100%) en realidad genera un margen de ganancia del 50% sobre el precio de venta." },
    { mistake: "Usar el mismo markup para todos los productos sin considerar la competencia", fix: "Ajusta el markup según la categoría de producto, la competencia y la elasticidad de precio de tus clientes." },
  ],
  faq: [
    { q: "¿Cuál es la diferencia entre markup y margen de ganancia?", a: "El markup se calcula como porcentaje sobre el costo del producto; el margen de ganancia se calcula como porcentaje sobre el precio de venta final, por lo que ambos números son distintos para el mismo producto." },
    { q: "¿Cómo se calcula el precio de venta a partir del costo y el markup?", a: "Se multiplica el costo por (1 + el porcentaje de markup dividido entre 100); por ejemplo, un costo de $40 con 25% de markup da un precio de venta de $50." },
    { q: "¿Qué markup debo usar para mi negocio?", a: "Depende de tu industria, competencia y costos operativos; los negocios minoristas suelen usar markups entre 50% y 100%, pero varía ampliamente por sector." },
    { q: "¿Cómo convierto un markup en margen de ganancia?", a: "Divide la ganancia (precio de venta menos costo) entre el precio de venta; un markup del 50% siempre equivale a un margen de aproximadamente 33.3%." },
    { q: "¿Cuál es el markup necesario para lograr un margen del 50%?", a: "Para lograr un margen del 50% sobre el precio de venta, necesitas aplicar un markup del 100% sobre el costo (duplicar el precio)." },
    { q: "¿El markup incluye impuestos y gastos de envío?", a: "No, esta calculadora solo considera el costo del producto; impuestos, envío y comisiones deben sumarse por separado al precio final." },
    { q: "¿Cómo calculo mi ganancia en dinero a partir del markup?", a: "La ganancia es la diferencia entre el precio de venta y el costo del producto; esta calculadora la muestra automáticamente junto con el margen resultante." },
    { q: "¿Qué markup usan las tiendas de ropa normalmente?", a: "Las tiendas de ropa suelen aplicar markups entre 100% y 300% (2 a 4 veces el costo mayorista), dependiendo de la marca y el canal de venta." },
    { q: "¿Cómo afecta la competencia al markup que puedo aplicar?", a: "Si hay mucha competencia con precios similares, es posible que debas reducir tu markup para mantenerte competitivo sin perder rentabilidad." },
    { q: "¿Puedo usar esta calculadora para servicios además de productos físicos?", a: "Sí, el mismo cálculo de costo, markup y precio de venta aplica igual para fijar precios de servicios, no solo productos." },
    { q: "¿Qué pasa si mi markup es muy bajo?", a: "Un markup muy bajo puede no cubrir tus gastos operativos, resultando en pérdidas incluso si estás vendiendo el producto." },
    { q: "¿Cómo se relaciona el markup con el punto de equilibrio de mi negocio?", a: "Un markup adecuado debe cubrir no solo el costo del producto, sino también los gastos fijos y variables, para alcanzar y superar tu punto de equilibrio." },
    { q: "¿Debo usar el mismo markup para todos mis productos?", a: "No necesariamente; puedes variar el markup según la demanda, la competencia y la rotación de cada producto para maximizar la rentabilidad total." },
    { q: "¿Cómo calculo el markup si ya conozco mi precio de venta deseado?", a: "Resta el costo al precio de venta deseado, divide ese resultado entre el costo, y multiplica por 100 para obtener el porcentaje de markup necesario." },
  ],
  relatedCalculators: ["Calculadora de Margen de Ganancia", "Calculadora de Punto de Equilibrio", "Calculadora de CAC", "Calculadora de ROI"],
  youMayLike: pickYouMayLike("markup-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Margen de Ganancia (Markup)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};