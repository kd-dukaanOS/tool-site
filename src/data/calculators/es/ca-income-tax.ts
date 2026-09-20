// src/data/calculators/es/ca-income-tax.ts
import { pickYouMayLike } from "../../calculator-pool";

export const caIncomeTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto sobre la Renta Canadá 2026 — Ontario, Alberta, BC",
    metaDescription: "Calcula tu impuesto federal y provincial en Canadá para Ontario, Alberta y Columbia Británica. Calculadora gratis con las tasas de 2026 y tu tasa marginal combinada.",
    canonicalSlug: "/es/finance/ca-income-tax",
    ogTitle: "Calculadora de Impuesto sobre la Renta de Canadá — Federal + Provincial",
    ogDescription: "Descubre cuánto impuesto pagas en Canadá y cuánto te queda después de impuestos, según tu provincia.",
    twitterTitle: "Calculadora de Impuestos Canadá 2026",
    twitterDescription: "Calcula tu impuesto sobre la renta en Canadá, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Impuesto sobre la Renta de Canadá estima cuánto pagas de impuesto federal y provincial según tu ingreso bruto anual y tu provincia — para que sepas tu tasa marginal combinada y cuánto te queda realmente en el bolsillo.",
  },

  about: {
    text: `En Canadá pagas dos impuestos sobre la renta separados: uno federal, que aplica a todo el país por igual, y uno provincial, que varía según dónde vivas. Ambos usan un sistema progresivo, donde cada tramo de tu ingreso se grava a una tasa distinta.

Esta calculadora estima tu impuesto federal y provincial combinado para Ontario, Alberta y Columbia Británica, aplicando el Monto Personal Básico (Basic Personal Amount) como crédito no reembolsable, y muestra tu tasa marginal combinada — la tasa que pagarías sobre tu próximo dólar de ingreso.

Para 2026, la tasa federal más baja es 14% sobre los primeros $58,523 de ingreso, subiendo hasta 33% para ingresos superiores a $258,482. El Monto Personal Básico federal es de $16,452, lo que hace que ese primer tramo de ingreso esté efectivamente libre de impuesto federal.

Limitaciones: esta calculadora no incluye CPP ni EI — usa la Calculadora de Sueldo Neto de Canadá para un desglose completo de tu cheque de pago. Tampoco incluye créditos adicionales como el de cónyuge, hijos o donaciones. Verifica siempre las cifras actuales del CRA.`,
  },

  formula: {
    formula: "Impuesto = Σ(Tramo de Ingreso × Tasa) − Crédito del Monto Personal Básico",
    variables: [
      { symbol: "Tramos de Ingreso", meaning: "Porciones de tu ingreso gravadas a distintas tasas federales y provinciales" },
      { symbol: "Monto Personal Básico", meaning: "Ingreso que reduce tu impuesto mediante un crédito no reembolsable" },
      { symbol: "Tasa Marginal", meaning: "La tasa combinada (federal + provincial) que pagarías sobre tu próximo dólar" },
    ],
    explanation: "Tu ingreso se divide en tramos según las tablas federal y provincial; cada tramo se grava a su propia tasa, y luego se resta el crédito del Monto Personal Básico tanto federal como provincial para llegar al impuesto total.",
    interpretation: "Por ejemplo, con un ingreso bruto de $70,000 en Ontario, una parte se grava al 14-20.5% federal y otra parte a las tasas de Ontario, resultando en un impuesto combinado estimado y una tasa marginal combinada de aproximadamente 29-30%.",
  },

  steps: [
    "Ingresa tu ingreso bruto anual en dólares canadienses (CAD).",
    "Selecciona tu provincia: Ontario, Alberta o Columbia Británica.",
    "Haz clic en Calcular.",
    "Revisa tu impuesto federal, impuesto provincial y tasa marginal combinada.",
    "Revisa tu ingreso después de impuestos estimado.",
  ],

  examples: [
    { inputs: "Ingreso Bruto: $60,000, Provincia: Ontario", result: "Impuesto Total Estimado: ~$11,500", explanation: "Un trabajador con salario promedio, mayormente en el segundo tramo federal." },
    { inputs: "Ingreso Bruto: $100,000, Provincia: Alberta", result: "Impuesto Total Estimado: ~$22,000", explanation: "Alberta tiene una de las tasas provinciales más bajas de Canadá." },
    { inputs: "Ingreso Bruto: $45,000, Provincia: British Columbia", result: "Impuesto Total Estimado: ~$7,200", explanation: "Ingreso más bajo, con la mayor parte gravada en el primer tramo." },
  ],

  practicalUses: [
    "Entender cuánto impuesto sobre la renta pagarás este año antes de declarar",
    "Comparar el impacto de mudarte entre Ontario, Alberta y Columbia Británica",
    "Estimar tu ingreso neto disponible para planear tu presupuesto",
    "Ver cuánto impuesto adicional pagarías por un aumento de sueldo (tasa marginal)",
    "Planear aportes a RRSP sabiendo tu tramo impositivo actual",
    "Verificar aproximadamente si tus retenciones en nómina son razonables",
  ],

  expertTips: [
    "Tu tasa marginal es la que importa para decisiones como aportar a un RRSP o aceptar horas extra, no tu tasa promedio.",
    "Aportar a un RRSP reduce tu ingreso gravable dólar por dólar, lo que puede bajarte a un tramo impositivo menor.",
    "El Monto Personal Básico se aplica tanto a nivel federal como provincial, así que revisa ambos créditos por separado.",
    "Esta calculadora no incluye CPP ni EI; para ver tu sueldo neto real después de todas las deducciones, usa la Calculadora de Sueldo Neto de Canadá.",
    "Alberta suele tener la tasa provincial combinada más baja entre las tres provincias cubiertas aquí.",
  ],

  commonMistakes: [
    { mistake: "Confundir la tasa marginal con la tasa promedio de impuesto", fix: "Tu tasa marginal solo aplica a tu último dólar ganado; tu tasa promedio (efectiva) es normalmente más baja." },
    { mistake: "Pensar que todo tu ingreso se grava a la tasa más alta", fix: "El sistema es progresivo — solo la porción de ingreso dentro de cada tramo se grava a esa tasa." },
    { mistake: "Olvidar que esta calculadora no incluye CPP ni EI", fix: "Usa la Calculadora de Sueldo Neto de Canadá si necesitas ver tu cheque de pago completo." },
    { mistake: "No considerar el impacto de mudarte de provincia", fix: "Las tasas provinciales varían bastante; compara antes de tomar decisiones basadas solo en el salario bruto." },
    { mistake: "Ignorar créditos adicionales que podrían reducir tu impuesto", fix: "Créditos por cónyuge, hijos, donaciones o gastos médicos pueden reducir tu impuesto real más allá de esta estimación." },
  ],

  faq: [
    { q: "¿Cómo funciona el impuesto sobre la renta en Canadá?", a: "Pagas impuesto federal sobre todo tu ingreso gravable según las tablas nacionales, y además impuesto provincial según tu provincia de residencia al 31 de diciembre." },
    { q: "¿Cuáles son las tasas federales de impuesto para 2026?", a: "Para 2026, las tasas federales son 14% hasta $58,523, 20.5% hasta $117,045, 26% hasta $181,440, 29% hasta $258,482, y 33% sobre ese monto." },
    { q: "¿Qué es el Monto Personal Básico (Basic Personal Amount)?", a: "Es un crédito no reembolsable que hace que una porción de tu ingreso, hasta $16,452 a nivel federal en 2026, esté efectivamente libre de impuesto." },
    { q: "¿Cuál es la diferencia entre tasa marginal y tasa efectiva?", a: "La tasa marginal es lo que pagas sobre tu próximo dólar de ingreso; la tasa efectiva es el promedio de impuesto sobre todo tu ingreso, y suele ser más baja." },
    { q: "¿Qué provincia tiene menos impuestos, Ontario, Alberta o BC?", a: "Alberta generalmente tiene la tasa provincial combinada más baja de las tres, aunque la diferencia exacta depende de tu nivel de ingreso." },
    { q: "¿Esta calculadora incluye CPP y EI?", a: "No, esta calculadora solo cubre impuesto federal y provincial; usa la Calculadora de Sueldo Neto de Canadá para un desglose completo incluyendo CPP y EI." },
    { q: "¿Cómo reduzco mi impuesto sobre la renta legalmente?", a: "Aportar a un RRSP, reclamar créditos por gastos médicos, donaciones, cuidado de hijos o cónyuge dependiente son formas comunes de reducir tu ingreso gravable o tu impuesto adeudado." },
    { q: "¿Mi provincia de residencia se decide por dónde trabajo o dónde vivo?", a: "Se decide por tu provincia de residencia al 31 de diciembre del año fiscal, sin importar si te mudaste durante el año." },
  ],

  relatedCalculators: ["Calculadora de Sueldo Neto en Canadá", "Calculadora de CPP", "Calculadora de EI", "Calculadora de RRSP"],

  youMayLike: pickYouMayLike("ca-income-tax"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Impuesto sobre la Renta de Canadá",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};