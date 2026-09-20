// src/data/calculators/es/stock-profit-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const stockProfitCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Ganancia en Bolsa — Retorno y Precio de Equilibrio",
    metaDescription: "Calcula tu ganancia o pérdida neta, retorno porcentual y precio de equilibrio en una operación bursátil, considerando comisiones de compra y venta.",
    canonicalSlug: "/es/finance/stock-profit-calculator",
    ogTitle: "Calculadora de Ganancia en Bolsa",
    ogDescription: "Descubre tu ganancia neta y precio de equilibrio en una operación de acciones.",
    twitterTitle: "Calculadora de Ganancia en Bolsa Gratis",
    twitterDescription: "Calcula tu ganancia en una operación bursátil, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Ganancia en Bolsa calcula tu ganancia o pérdida neta, tu porcentaje de retorno, y el precio de equilibrio de una operación con acciones — considerando las comisiones de compra y venta que muchos inversionistas olvidan incluir.",
  },

  about: {
    text: `Al comprar y vender acciones, tu ganancia real no es simplemente la diferencia entre el precio de venta y el de compra — las comisiones de tu bróker en ambos lados de la operación reducen tu ganancia neta real.

Esta calculadora toma tu precio de compra por acción, precio de venta por acción, número de acciones, y las comisiones tanto de compra como de venta, para calcular tu ganancia o pérdida neta exacta, tu retorno porcentual, y el precio de equilibrio — el precio de venta mínimo necesario para no perder dinero considerando las comisiones.

Conocer tu precio de equilibrio es especialmente útil antes de vender, ya que te permite establecer un precio objetivo que realmente cubra tus costos de transacción, no solo tu precio de compra original.`,
  },

  formula: {
    formula: "Ganancia Neta = (Precio de Venta × Acciones − Comisión de Venta) − (Precio de Compra × Acciones + Comisión de Compra)",
    variables: [
      { symbol: "Retorno %", meaning: "(Ganancia Neta ÷ Costo Total de Compra) × 100" },
      { symbol: "Precio de Equilibrio", meaning: "El precio de venta mínimo por acción necesario para cubrir el costo de compra más ambas comisiones" },
    ],
    explanation: "Se resta el costo total de compra (incluyendo comisión) del ingreso total de venta (después de restar la comisión de venta), dando la ganancia o pérdida neta; el precio de equilibrio se calcula despejando el precio de venta necesario para que esa ganancia neta sea exactamente cero.",
    interpretation: "Por ejemplo, comprando 100 acciones a $50 con $5 de comisión, y vendiendo a $58 con $5 de comisión, la ganancia neta es $790, un retorno de 15.6%, con un precio de equilibrio de aproximadamente $50.10 por acción.",
  },

  steps: [
    "Ingresa el precio de compra por acción.",
    "Ingresa el precio de venta por acción.",
    "Ingresa el número de acciones de la operación.",
    "Ingresa las comisiones de compra y de venta cobradas por tu bróker.",
    "Haz clic en Calcular.",
    "Revisa tu ganancia o pérdida neta, retorno porcentual, comisiones totales y precio de equilibrio.",
  ],

  examples: [
    { inputs: "Compra: $50, Venta: $58, Acciones: 100, Comisiones: $5 + $5", result: "Ganancia Neta: $790, Retorno: 15.6%", explanation: "Una operación rentable típica con comisiones estándar de bróker." },
    { inputs: "Compra: $20, Venta: $19, Acciones: 200, Comisiones: $0 + $0", result: "Ganancia Neta: -$200, Retorno: -5%", explanation: "Una operación con pérdida, sin comisiones (común en brókers de comisión cero)." },
    { inputs: "Compra: $100, Venta: $102, Acciones: 50, Comisiones: $10 + $10", result: "Ganancia Neta: -$20, Retorno: -0.4%", explanation: "Un pequeño movimiento al alza que aún resulta en pérdida debido a las comisiones." },
  ],

  practicalUses: [
    "Calcular tu ganancia real después de comisiones antes de vender una posición",
    "Determinar el precio mínimo de venta necesario para no perder dinero",
    "Comparar el impacto de las comisiones entre distintos brókers",
    "Verificar tu retorno real en operaciones ya cerradas",
    "Planear tu estrategia de salida considerando el precio de equilibrio, no solo el precio de compra",
  ],

  expertTips: [
    "Con brókers de comisión cero, el precio de equilibrio es prácticamente igual a tu precio de compra; con comisiones, siempre es ligeramente mayor.",
    "Calcula el precio de equilibrio antes de vender para asegurarte de que tu orden de venta realmente genere ganancia, no solo cubra el precio de compra.",
    "Las comisiones porcentuales pequeñas pueden acumularse significativamente en operaciones de alta frecuencia — revisa el costo total, no solo la comisión por operación.",
    "Recuerda que esta calculadora no incluye impuestos sobre ganancias de capital, que reducirán tu ganancia neta real después de declarar impuestos.",
  ],

  commonMistakes: [
    { mistake: "Calcular la ganancia solo con la diferencia de precios, ignorando comisiones", fix: "Siempre incluye las comisiones de compra y venta para obtener tu ganancia neta real." },
    { mistake: "Vender exactamente al precio de compra pensando que no hay pérdida", fix: "Si pagaste comisiones, necesitas vender por encima de tu precio de compra (al precio de equilibrio) solo para no perder dinero." },
    { mistake: "No considerar el impuesto sobre ganancias de capital al evaluar el retorno real", fix: "Esta calculadora muestra la ganancia antes de impuestos; tu ganancia neta después de impuestos será menor." },
    { mistake: "Ignorar comisiones pequeñas en operaciones frecuentes", fix: "Comisiones aparentemente pequeñas pueden sumar significativamente en estrategias de trading activo — calcula el impacto acumulado." },
  ],

  faq: [
    { q: "¿Cómo se calcula la ganancia neta en una operación de acciones?", a: "Se resta el costo total de compra (precio × acciones más comisión de compra) del ingreso total de venta (precio × acciones menos comisión de venta)." },
    { q: "¿Qué es el precio de equilibrio en una operación bursátil?", a: "Es el precio de venta mínimo por acción necesario para cubrir tu costo de compra más ambas comisiones, sin generar ganancia ni pérdida." },
    { q: "¿Las comisiones de bróker afectan mucho mi ganancia?", a: "Depende del monto de la comisión y del tamaño de la operación; en operaciones pequeñas o de bajo margen, las comisiones pueden representar una porción significativa de tu ganancia potencial." },
    { q: "¿Esta calculadora incluye impuestos sobre ganancias de capital?", a: "No, calcula tu ganancia bruta antes de impuestos; tu ganancia neta real después de declarar impuestos sobre ganancias de capital será menor." },
    { q: "¿Cómo calculo mi retorno porcentual en una operación?", a: "Divide tu ganancia neta entre el costo total de compra (incluyendo comisión) y multiplica por 100." },
    { q: "¿Por qué necesito vender por encima de mi precio de compra para no perder dinero?", a: "Porque las comisiones de compra y venta reducen tu ganancia real; necesitas cubrir ambas comisiones además del precio de compra original, lo cual define tu precio de equilibrio." },
    { q: "¿Los brókers de comisión cero eliminan la necesidad de calcular el precio de equilibrio?", a: "Lo simplifican considerablemente, ya que el precio de equilibrio se acerca mucho a tu precio de compra original, pero sigue siendo útil verificarlo, especialmente si hay otros cargos aplicables." },
    { q: "¿Puedo usar esta calculadora para operaciones en corto (short selling)?", a: "Esta calculadora está diseñada para operaciones estándar de compra-venta (posiciones largas); las operaciones en corto requieren un cálculo diferente considerando el precio de préstamo y recompra." },
  ],

  relatedCalculators: ["Calculadora de ROI", "Calculadora de Rendimiento de Dividendos", "Calculadora de Ganancias de Capital de Canadá", "Calculadora de CAGR"],

  youMayLike: pickYouMayLike("stock-profit-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Ganancia en Bolsa",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};