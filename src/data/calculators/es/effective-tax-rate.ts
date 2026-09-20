// src/data/calculators/es/effective-tax-rate.ts
import { pickYouMayLike } from "../../calculator-pool";

export const effectiveTaxRateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Tasa Efectiva de Impuestos 2026 — IRS EE.UU.",
    metaDescription: "Calcula tu tasa efectiva real de impuesto federal frente a tu tramo marginal, usando los tramos oficiales del IRS 2026 y la deducción estándar.",
    canonicalSlug: "/es/finance/effective-tax-rate",
    ogTitle: "Calculadora de Tasa Efectiva de Impuestos",
    ogDescription: "Descubre tu tasa promedio real de impuesto federal, no solo tu tramo marginal.",
    twitterTitle: "Calculadora de Tasa de Impuesto 2026",
    twitterDescription: "Calcula tu tasa efectiva de impuesto federal, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Tasa Efectiva de Impuestos te muestra tu tasa promedio real de impuesto federal — distinta de tu tramo marginal — usando los tramos oficiales del IRS para 2026 y la deducción estándar según tu estado civil tributario.",
  },

  about: {
    text: `Muchas personas confunden su tramo marginal de impuesto con la tasa real que pagan sobre todo su ingreso. Estados Unidos usa un sistema progresivo, donde cada porción de tu ingreso se grava a una tasa distinta — solo tu último dólar ganado se grava a tu tramo marginal más alto.

Esta calculadora usa los tramos oficiales del IRS para 2026 (10%, 12%, 22%, 24%, 32%, 35% y 37%) junto con la deducción estándar de 2026 (o tus deducciones detalladas si las ingresas) para calcular tu impuesto federal total y tu tasa efectiva — el porcentaje real de tu ingreso bruto que pagas en impuestos.

Para 2026, la deducción estándar es de $16,100 para solteros, $32,200 para casados declarando conjuntamente, y $24,150 para cabeza de familia, gracias a la Ley OBBBA que hizo permanentes los tramos de la reforma fiscal de 2017.

Limitaciones: esta calculadora calcula solo el impuesto federal sobre la renta — no incluye impuestos estatales, Seguro Social, Medicare, ni créditos fiscales específicos como el Crédito Tributario por Hijos.`,
  },

  formula: {
    formula: "Tasa Efectiva = (Impuesto Federal Total ÷ Ingreso Bruto) × 100",
    variables: [
      { symbol: "Ingreso Gravable", meaning: "Ingreso Bruto − Deducción Estándar (o Deducciones Detalladas)" },
      { symbol: "Impuesto Federal Total", meaning: "Suma del impuesto calculado en cada tramo aplicable a tu ingreso gravable" },
      { symbol: "Tramo Marginal", meaning: "La tasa que aplica sobre tu último dólar de ingreso gravable" },
    ],
    explanation: "Se resta la deducción estándar (o detallada) del ingreso bruto para obtener el ingreso gravable; ese ingreso se distribuye entre los tramos del IRS 2026, cada porción gravada a su tasa correspondiente, y la suma total se divide entre el ingreso bruto para obtener la tasa efectiva.",
    interpretation: "Por ejemplo, con un ingreso bruto de $100,000 (soltero, deducción estándar), el ingreso gravable es $83,900, el impuesto total resulta en aproximadamente $13,700, y la tasa efectiva es de ~13.7%, aunque el tramo marginal sea 22%.",
  },

  steps: [
    "Ingresa tu ingreso bruto anual.",
    "Selecciona tu estado civil tributario: soltero, casado declarando conjuntamente, o cabeza de familia.",
    "Elige si usarás la deducción estándar de 2026 o deducciones detalladas.",
    "Si eliges deducciones detalladas, ingresa el monto total.",
    "Haz clic en Calcular.",
    "Revisa tu tasa efectiva, tramo marginal, impuesto total e ingreso después de impuestos.",
  ],

  examples: [
    { inputs: "Ingreso: $100,000, Soltero, Deducción Estándar", result: "Tasa Efectiva: ~13.7%, Tramo Marginal: 22%", explanation: "La tasa efectiva es notablemente menor al tramo marginal gracias al sistema progresivo." },
    { inputs: "Ingreso: $250,000, Casado Conjunto, Deducción Estándar", result: "Tasa Efectiva: ~18.1%, Tramo Marginal: 24%", explanation: "Ejemplo de una pareja de altos ingresos con una tasa efectiva bastante menor al tramo superior." },
    { inputs: "Ingreso: $60,000, Cabeza de Familia, Deducción Estándar", result: "Tasa Efectiva: ~8-9%, Tramo Marginal: 12%", explanation: "Un ingreso moderado con una carga fiscal efectiva relativamente baja." },
  ],

  practicalUses: [
    "Entender tu verdadera carga fiscal, no solo tu tramo marginal",
    "Comparar tu tasa efectiva entre distintos años o niveles de ingreso",
    "Planear aportes a cuentas de jubilación sabiendo tu tramo marginal real",
    "Verificar si tus retenciones de nómina son razonables frente a tu impuesto real",
    "Comparar el impacto fiscal de la deducción estándar versus deducciones detalladas",
  ],

  expertTips: [
    "Tu tasa efectiva siempre será menor que tu tramo marginal en un sistema progresivo — no confundas ambas cifras.",
    "Solo alrededor del 15% de los contribuyentes detallan sus deducciones desde que la deducción estándar aumentó significativamente; verifica si tus deducciones detalladas realmente superan la estándar.",
    "Esta calculadora no incluye impuestos estatales, Seguro Social (6.2%) ni Medicare (1.45%) — tu carga fiscal total real será mayor.",
    "Aportar a una cuenta 401(k) o IRA tradicional reduce tu ingreso gravable, lo que puede bajar tu tramo marginal aplicable.",
    "El tramo marginal es el que importa para decisiones como horas extra o bonos — no tu tasa efectiva promedio.",
  ],

  commonMistakes: [
    { mistake: "Confundir el tramo marginal con la tasa que se paga sobre todo el ingreso", fix: "Solo la porción de ingreso dentro de cada tramo se grava a esa tasa — tu tasa efectiva promedio es siempre menor." },
    { mistake: "Olvidar que esta calculadora no incluye impuestos estatales ni de nómina", fix: "Tu carga fiscal total real incluye Seguro Social, Medicare y posiblemente impuesto estatal, no reflejados aquí." },
    { mistake: "Detallar deducciones sin verificar si superan la deducción estándar", fix: "Con la deducción estándar de 2026 en niveles altos, la mayoría de los contribuyentes sale mejor sin detallar." },
    { mistake: "No recalcular tras un cambio significativo de ingreso", fix: "Un aumento de sueldo, bono o cambio de estado civil puede mover tu ingreso a otro tramo marginal — recalcula cada año." },
  ],

  faq: [
    { q: "¿Qué es la tasa efectiva de impuesto?", a: "Es el porcentaje real de tu ingreso bruto que pagas en impuesto federal, calculado dividiendo tu impuesto total entre tu ingreso bruto — normalmente menor que tu tramo marginal." },
    { q: "¿Cuál es la diferencia entre tasa efectiva y tramo marginal?", a: "El tramo marginal es la tasa que pagas sobre tu último dólar de ingreso; la tasa efectiva es el promedio de impuesto sobre todo tu ingreso, y siempre es menor o igual al marginal." },
    { q: "¿Cuáles son los tramos de impuesto federal para 2026?", a: "Los tramos federales de 2026 son 10%, 12%, 22%, 24%, 32%, 35% y 37%, con los mismos umbrales que en años anteriores ajustados por inflación." },
    { q: "¿Cuál es la deducción estándar para 2026?", a: "Para 2026 es $16,100 para solteros y casados declarando por separado, $32,200 para casados declarando conjuntamente, y $24,150 para cabeza de familia." },
    { q: "¿Ganar más dinero significa que pago más impuesto sobre todo mi ingreso?", a: "No, solo la porción de ingreso dentro de cada tramo superior se grava a esa tasa más alta — el resto de tu ingreso sigue gravado en los tramos inferiores." },
    { q: "¿Debería usar la deducción estándar o detallar mis deducciones?", a: "Depende de si tus deducciones detalladas (hipoteca, donaciones, gastos médicos, etc.) superan la deducción estándar; con los montos de 2026, la mayoría sale mejor con la estándar." },
    { q: "¿Esta calculadora incluye impuestos estatales?", a: "No, solo calcula el impuesto federal sobre la renta; los impuestos estatales varían según dónde vivas y deben calcularse por separado." },
    { q: "¿Cómo puedo reducir mi tasa efectiva de impuesto?", a: "Aportar a cuentas con ventajas fiscales como 401(k) o IRA tradicional, maximizar deducciones legítimas, o aprovechar créditos fiscales disponibles reduce tu ingreso gravable o tu impuesto adeudado." },
  ],

  relatedCalculators: ["Calculadora de Salario Neto", "Calculadora de 401(k)", "Calculadora de EITC", "Calculadora de Retención de Impuestos"],

  youMayLike: pickYouMayLike("effective-tax-rate-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Tasa Efectiva de Impuestos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};