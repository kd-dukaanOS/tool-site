// src/data/calculators/es/tax-bracket-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const taxBracketCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Tramos Impositivos 2026 — Tasa Marginal y Efectiva",
    metaDescription: "Calcula tu impuesto federal total, tasa marginal y tasa efectiva usando los tramos del IRS 2026, con desglose completo por tramo impositivo.",
    canonicalSlug: "/es/finance/tax-bracket-calculator",
    ogTitle: "Calculadora de Tramos Impositivos",
    ogDescription: "Descubre tu tasa marginal y efectiva de impuesto federal con desglose por tramo.",
    twitterTitle: "Calculadora de Tramos de Impuesto 2026",
    twitterDescription: "Calcula tu impuesto federal por tramos, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Tramos Impositivos calcula tu impuesto federal total, tu tasa marginal y tu tasa efectiva usando los tramos oficiales del IRS para 2026, mostrándote además un desglose detallado de cuánto se grava en cada tramo.",
  },

  about: {
    text: `Estados Unidos usa un sistema de impuesto progresivo, donde tu ingreso se divide en tramos y cada tramo se grava a una tasa distinta — no todo tu ingreso se grava a la tasa más alta que alcanzas.

Esta calculadora toma tu ingreso gravable y tu estado civil tributario (soltero, casado declarando conjuntamente, o cabeza de familia) para calcular tu impuesto federal total según los tramos de 2026, tu tasa marginal (la tasa del tramo más alto que alcanzas), y tu tasa efectiva (el promedio real de impuesto sobre todo tu ingreso).

Además, muestra un desglose línea por línea de cuánto impuesto corresponde a cada tramo específico, ayudándote a visualizar exactamente cómo se distribuye tu carga fiscal a través del sistema progresivo.`,
  },

  formula: {
    formula: "Impuesto Total = Σ(Porción de Ingreso en Cada Tramo × Tasa del Tramo)",
    variables: [
      { symbol: "Tasa Marginal", meaning: "La tasa del tramo más alto que alcanza tu ingreso gravable" },
      { symbol: "Tasa Efectiva", meaning: "(Impuesto Total ÷ Ingreso Gravable) × 100 — tu tasa promedio real" },
    ],
    explanation: "Tu ingreso gravable se distribuye entre los tramos de 2026 según su estado civil, cada porción se grava a la tasa correspondiente de ese tramo, y la suma de todas esas porciones da tu impuesto total; dividiendo ese total entre tu ingreso se obtiene tu tasa efectiva.",
    interpretation: "Por ejemplo, con un ingreso gravable de $80,000 (soltero), una parte se grava al 10%, otra al 12%, y otra al 22% (tu tasa marginal), resultando en un impuesto total con una tasa efectiva considerablemente menor al 22%.",
  },

  steps: [
    "Selecciona tu estado civil tributario.",
    "Ingresa tu ingreso gravable.",
    "Haz clic en Calcular.",
    "Revisa tu impuesto total, tasa marginal, tasa efectiva, e ingreso gravable.",
    "Revisa el desglose detallado de impuesto por cada tramo.",
  ],

  examples: [
    { inputs: "Ingreso Gravable: $80,000, Soltero", result: "Impuesto Total: ~$12,600, Tasa Marginal: 22%, Tasa Efectiva: ~15.8%", explanation: "La tasa efectiva es notablemente menor a la tasa marginal gracias al sistema progresivo." },
    { inputs: "Ingreso Gravable: $150,000, Casado Conjunto", result: "Impuesto Total: ~$21,500, Tasa Marginal: 22%, Tasa Efectiva: ~14.3%", explanation: "Una pareja con ingreso combinado moderado, mayormente en el segundo y tercer tramo." },
    { inputs: "Ingreso Gravable: $300,000, Cabeza de Familia", result: "Impuesto Total: ~$71,000, Tasa Marginal: 35%, Tasa Efectiva: ~23.7%", explanation: "Un ingreso alto alcanza un tramo marginal alto, pero la tasa efectiva sigue siendo considerablemente menor." },
  ],

  practicalUses: [
    "Entender exactamente cuánto impuesto federal pagarás sobre tu ingreso gravable",
    "Ver la diferencia entre tu tasa marginal y tu tasa efectiva real",
    "Visualizar cómo se distribuye tu impuesto entre los distintos tramos",
    "Planear aportes a cuentas de jubilación sabiendo tu tramo marginal actual",
    "Comparar el impacto fiscal entre distintos niveles de ingreso o estados civiles",
  ],

  expertTips: [
    "Tu tasa marginal es la que importa para decisiones como horas extra, bonos, o aportes a cuentas de jubilación — no tu tasa efectiva promedio.",
    "La tasa efectiva siempre es menor o igual a la tasa marginal, ya que solo la porción superior de tu ingreso se grava al tramo más alto.",
    "Este cálculo usa el ingreso gravable (después de deducciones), no tu ingreso bruto — asegúrate de restar tus deducciones antes de ingresar la cifra.",
    "Aportar a una cuenta 401(k) o IRA tradicional reduce tu ingreso gravable, lo que puede bajarte a un tramo marginal menor en casos límite.",
  ],

  commonMistakes: [
    { mistake: "Pensar que todo el ingreso se grava a la tasa marginal más alta", fix: "Solo la porción de ingreso dentro de cada tramo se grava a esa tasa — el sistema es progresivo, no uniforme." },
    { mistake: "Confundir ingreso bruto con ingreso gravable", fix: "El ingreso gravable es tu ingreso bruto menos deducciones (estándar o detalladas) — usa esa cifra, no tu salario bruto total." },
    { mistake: "Confundir tasa marginal con tasa efectiva al comparar escenarios", fix: "La tasa marginal es sobre tu último dólar ganado; la tasa efectiva es tu promedio real de impuesto sobre todo el ingreso." },
    { mistake: "No considerar impuestos estatales además del federal", fix: "Esta calculadora solo cubre el impuesto federal; los impuestos estatales varían según dónde vivas y deben calcularse por separado." },
  ],

  faq: [
    { q: "¿Cómo funcionan los tramos de impuesto en Estados Unidos?", a: "El sistema es progresivo: tu ingreso gravable se divide en tramos, y cada porción se grava a la tasa correspondiente de ese tramo, no todo tu ingreso a la tasa más alta." },
    { q: "¿Cuál es la diferencia entre tasa marginal y tasa efectiva?", a: "La tasa marginal es lo que pagas sobre tu último dólar de ingreso; la tasa efectiva es el promedio real de impuesto sobre todo tu ingreso gravable, y siempre es menor o igual a la marginal." },
    { q: "¿Ganar más dinero significa pagar más impuesto sobre todo mi ingreso?", a: "No, solo la porción de ingreso dentro de cada tramo superior se grava a esa tasa más alta — el resto de tu ingreso sigue gravado en los tramos inferiores como antes." },
    { q: "¿Cuáles son los tramos de impuesto federal para 2026?", a: "Los tramos federales de 2026 son 10%, 12%, 22%, 24%, 32%, 35% y 37%, aplicados según tu ingreso gravable y estado civil tributario." },
    { q: "¿Qué es el ingreso gravable?", a: "Es tu ingreso bruto menos deducciones (estándar o detalladas); es la cifra que realmente se usa para calcular tu impuesto sobre la renta, no tu salario bruto total." },
    { q: "¿Cómo afecta mi estado civil tributario a mis tramos de impuesto?", a: "Los umbrales de cada tramo son distintos según seas soltero, casado declarando conjuntamente, o cabeza de familia — el mismo ingreso puede caer en tramos diferentes según tu estado civil." },
    { q: "¿Por qué mi tasa efectiva es mucho menor que mi tramo marginal?", a: "Porque solo la porción superior de tu ingreso se grava a tu tramo marginal más alto; el resto se grava en tramos inferiores con tasas menores, reduciendo tu promedio real." },
    { q: "¿Esta calculadora incluye impuestos estatales?", a: "No, solo calcula el impuesto federal sobre la renta; los impuestos estatales varían según tu estado de residencia y deben calcularse por separado." },
  ],

  relatedCalculators: ["Calculadora de Tasa Efectiva de Impuestos", "Calculadora de EITC", "Calculadora de Salario Neto", "Calculadora de 401(k)"],

  youMayLike: pickYouMayLike("tax-bracket-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Tramos Impositivos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};