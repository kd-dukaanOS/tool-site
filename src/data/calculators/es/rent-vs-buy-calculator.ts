// src/data/calculators/es/rent-vs-buy-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const rentVsBuyCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Alquilar vs Comprar Casa — ¿Qué Conviene Más?",
    metaDescription: "Compara el impacto en tu patrimonio neto a largo plazo de alquilar versus comprar una vivienda. Calculadora gratis con año de equilibrio.",
    canonicalSlug: "/es/finance/rent-vs-buy-calculator",
    ogTitle: "Calculadora de Alquilar vs Comprar",
    ogDescription: "Descubre si te conviene más alquilar o comprar según tu situación.",
    twitterTitle: "Calculadora Alquilar vs Comprar Gratis",
    twitterDescription: "Compara alquilar versus comprar casa, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Alquilar vs Comprar compara el impacto a largo plazo en tu patrimonio neto de comprar una vivienda versus alquilar e invertir la diferencia, mostrándote cuál opción resulta financieramente mejor y en qué año se alcanza el punto de equilibrio.",
  },

  about: {
    text: `Decidir entre alquilar o comprar una vivienda es una de las decisiones financieras más importantes que puedes tomar, y la respuesta correcta depende de muchos factores: precio de la vivienda, tasa hipotecaria, cuánto tiempo planeas quedarte, y qué tan rápido crecen los alquileres en tu zona.

Esta calculadora proyecta tu patrimonio neto en ambos escenarios a lo largo del tiempo. Si compras, considera tu pago inicial, capital acumulado en la propiedad, apreciación del valor de la vivienda, y todos los costos de propiedad (impuesto predial, seguro, mantenimiento, costos de cierre y venta). Si alquilas, asume que inviertes la diferencia entre lo que hubieras gastado en pago inicial y costos de propiedad, con un retorno de inversión esperado.

El resultado te muestra cuál opción genera mayor patrimonio neto al final de tu horizonte de tiempo elegido, y en qué año (si aplica) comprar se vuelve financieramente mejor que alquilar.`,
  },

  formula: {
    formula: "Patrimonio al Comprar = Valor de la Vivienda − Saldo del Préstamo − Costos de Venta",
    variables: [
      { symbol: "Patrimonio al Alquilar", meaning: "Ahorros invertidos (diferencia de pago inicial + costos de propiedad) compuestos al retorno de inversión esperado" },
      { symbol: "Año de Equilibrio", meaning: "El año en que el patrimonio neto de comprar supera al de alquilar" },
    ],
    explanation: "Ambos escenarios proyectan el patrimonio neto año a año: comprar acumula capital en la vivienda menos los costos de propiedad y venta; alquilar invierte el dinero no gastado en vivienda a la tasa de retorno esperada, comparando ambos resultados al final del período.",
    interpretation: "Por ejemplo, con una vivienda de $350,000, 20% de pago inicial, y comparando 10 años, comprar podría generar un patrimonio neto mayor que alquilar si la apreciación de la vivienda supera el retorno de inversión asumido para el alquiler.",
  },

  steps: [
    "Ingresa el precio de la vivienda, pago inicial, tasa hipotecaria y plazo del préstamo.",
    "Ingresa los costos de propiedad: impuesto predial, seguro, mantenimiento, costos de cierre y venta, y apreciación esperada.",
    "Ingresa la renta mensual actual, su crecimiento anual esperado, y el retorno de inversión esperado si alquilas.",
    "Ingresa el número de años que quieres comparar.",
    "Haz clic en Calcular.",
    "Revisa qué opción es mejor, el patrimonio neto proyectado de cada una, y el año de equilibrio.",
  ],

  examples: [
    { inputs: "Vivienda: $350,000, Pago Inicial: 20%, Renta: $1,800/mes, Comparar: 10 años", result: "Mejor Opción: Comprar (si aplica según supuestos)", explanation: "Un escenario típico donde comprar puede superar a alquilar en un horizonte de una década." },
    { inputs: "Vivienda: $500,000, Pago Inicial: 10%, Renta: $2,200/mes, Comparar: 5 años", result: "Mejor Opción: Alquilar (horizonte corto)", explanation: "En horizontes cortos, los costos de cierre y venta al comprar suelen inclinar la balanza hacia alquilar." },
    { inputs: "Vivienda: $250,000, Pago Inicial: 20%, Renta: $1,400/mes, Comparar: 15 años", result: "Mejor Opción: Comprar, Equilibrio: Año 4", explanation: "Con un horizonte largo, comprar se vuelve mejor relativamente pronto." },
  ],

  practicalUses: [
    "Decidir si comprar o seguir alquilando según tu situación financiera específica",
    "Ver en qué año comprar se vuelve mejor que alquilar en tu caso",
    "Comparar distintos escenarios de pago inicial o tasa hipotecaria",
    "Entender el verdadero costo de oportunidad de invertir tu pago inicial en vez de comprar",
    "Planear cuánto tiempo necesitas quedarte en una vivienda para que comprar valga la pena",
  ],

  expertTips: [
    "Mientras más tiempo planees quedarte en la vivienda, más probable es que comprar resulte mejor financieramente, ya que los costos de cierre y venta se distribuyen entre más años.",
    "El retorno de inversión que asumas para el escenario de alquiler afecta enormemente el resultado — sé realista con esta cifra.",
    "No olvides que comprar también tiene beneficios no financieros (estabilidad, personalización) que esta calculadora no captura.",
    "Los costos de mantenimiento y reparaciones de una vivienda propia suelen subestimarse — considera un margen adicional.",
    "Si planeas mudarte en menos de 3-5 años, alquilar suele ser financieramente más ventajoso debido a los costos de transacción de comprar y vender.",
  ],

  commonMistakes: [
    { mistake: "Ignorar los costos de cierre y venta al comparar opciones", fix: "Estos costos pueden representar varios miles de dólares y afectan significativamente el resultado, especialmente en horizontes cortos." },
    { mistake: "Asumir una apreciación de vivienda poco realista", fix: "Usa una tasa de apreciación conservadora basada en promedios históricos de tu mercado local, no proyecciones optimistas." },
    { mistake: "No considerar el costo de oportunidad del pago inicial", fix: "El dinero del pago inicial podría invertirse en otro lugar si alquilas — esta calculadora lo modela, pero verifica que el retorno asumido sea realista." },
    { mistake: "Comparar con un horizonte de tiempo demasiado corto", fix: "Los costos de transacción al comprar y vender suelen hacer que alquilar gane en horizontes menores a 3-5 años, independientemente de otros factores." },
  ],

  faq: [
    { q: "¿Es mejor alquilar o comprar una casa?", a: "Depende de cuánto tiempo planees quedarte, las condiciones del mercado local, tu situación financiera, y factores no financieros como estabilidad y flexibilidad — esta calculadora compara el impacto financiero según tus supuestos específicos." },
    { q: "¿Cuánto tiempo debo quedarme en una casa para que valga la pena comprar?", a: "Generalmente se recomienda un mínimo de 3-5 años, ya que los costos de cierre y venta necesitan tiempo para distribuirse y ser compensados por la acumulación de capital." },
    { q: "¿Qué es el año de equilibrio en la comparación de alquilar vs comprar?", a: "Es el año en el que el patrimonio neto proyectado de comprar supera al de alquilar, considerando todos los costos y beneficios de ambas opciones." },
    { q: "¿Cómo afecta el pago inicial a la decisión de comprar vs alquilar?", a: "Un pago inicial mayor reduce tus pagos mensuales de hipoteca, pero también inmoviliza más dinero que podrías haber invertido si alquilaras en su lugar." },
    { q: "¿Qué costos de propiedad debo considerar al comparar con alquilar?", a: "Impuesto predial, seguro de vivienda, mantenimiento, costos de cierre al comprar, y costos de venta al vender en el futuro, todos afectan el resultado real de comprar." },
    { q: "¿La apreciación de la vivienda garantiza que comprar sea mejor?", a: "No necesariamente — depende de cómo se compare con el retorno de inversión que podrías obtener invirtiendo el dinero equivalente si alquilaras en su lugar." },
    { q: "¿Debo incluir el costo de oportunidad del pago inicial en mi decisión?", a: "Sí, es un factor importante: el dinero del pago inicial podría generar retornos si se invirtiera en vez de destinarse a la compra de una vivienda." },
    { q: "¿Qué pasa si la renta sube más rápido que la apreciación de la vivienda?", a: "En ese caso, comprar tiende a volverse relativamente más atractivo con el tiempo, ya que tus pagos de hipoteca permanecen más estables mientras la renta continúa subiendo." },
    { q: "¿Los costos de cierre siempre favorecen alquilar a corto plazo?", a: "Generalmente sí, ya que estos costos son un gasto único que se distribuye mejor entre más años de propiedad — en horizontes cortos pesan proporcionalmente más." },
    { q: "¿Cómo cambia el resultado si aumento el horizonte de comparación?", a: "Con más años, comprar suele volverse más favorable, ya que los costos de transacción se distribuyen entre más tiempo y el capital acumulado en la vivienda crece." },
    { q: "¿Esta calculadora considera deducciones fiscales por hipoteca?", a: "No, esta calculadora se enfoca en el patrimonio neto proyectado basado en flujos de efectivo y apreciación; beneficios fiscales específicos deben evaluarse por separado." },
    { q: "¿Qué retorno de inversión debo usar para el escenario de alquilar?", a: "Un retorno realista basado en una cartera de inversión diversificada, comúnmente entre 5% y 8% anual antes de inflación, dependiendo de tu tolerancia al riesgo." },
    { q: "¿Comprar siempre construye más patrimonio que alquilar?", a: "No siempre — depende de la relación entre la apreciación de la vivienda, los costos de propiedad, y el retorno de inversión alternativo disponible al alquilar." },
    { q: "¿Cómo afecta la tasa hipotecaria a esta comparación?", a: "Una tasa hipotecaria más alta aumenta tus pagos mensuales y el interés total pagado, haciendo que comprar sea relativamente menos atractivo frente a alquilar." },
  ],

  relatedCalculators: ["Calculadora de Pago Inicial", "Calculadora de Hipoteca", "Calculadora de Deuda a Ingresos", "Calculadora de Jubilación"],

  youMayLike: pickYouMayLike("rent-vs-buy-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Alquilar vs Comprar",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};