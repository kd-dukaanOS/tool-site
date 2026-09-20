// src/data/calculators/es/ca-ei-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const caEiCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de EI Canadá 2026 — Seguro de Empleo, Cuánto Pago",
    metaDescription: "Calcula cuánto se descuenta de tu sueldo para el Seguro de Empleo (EI) en Canadá. Calculadora gratis con la tasa de 2026 y el tope máximo de ingresos asegurables del CRA.",
    canonicalSlug: "/es/finance/ca-ei-calculator",
    ogTitle: "Calculadora de EI (Seguro de Empleo) — Cuánto Se Descuenta de tu Sueldo",
    ogDescription: "Descubre cuánto pagas tú y cuánto paga tu empleador de EI este año, con el tope máximo de 2026.",
    twitterTitle: "Calculadora de EI Canadá 2026",
    twitterDescription: "Calcula tu descuento de Seguro de Empleo (EI) por sueldo, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de EI te muestra cuánto se descuenta de tu sueldo para el Seguro de Empleo de Canadá (Employment Insurance), incluyendo la parte que paga tu empleador — para que entiendas tu recibo de pago y sepas si ya llegaste al tope anual.",
  },

  about: {
    text: `El EI (Employment Insurance), o Seguro de Empleo, es el programa federal de Canadá que da apoyo económico temporal a trabajadores que pierden su empleo, o que toman licencia por maternidad, paternidad, enfermedad o cuidado de familiares. Se descuenta automáticamente de cada cheque de pago.

Esta calculadora estima cuánto te corresponde pagar en un año según tu ingreso bruto anual, aplicando la tasa y el tope de ingresos asegurables (MIE) de 2026.

Para 2026, la tasa de aporte del empleado es de 1.63% sobre los ingresos asegurables, con un máximo de ingresos asegurables (MIE) de $68,900, lo que da una prima máxima de $1,123.07 para el empleado. El empleador paga 1.4 veces esa tasa (2.28%), hasta un máximo de $1,572.30.

Limitaciones: esta calculadora no cubre la tasa especial de Quebec (que usa el QPIP con una tasa reducida de 1.30%), no aplica a trabajadores por cuenta propia que no se han inscrito voluntariamente al programa, y no considera situaciones con más de un empleador. Verifica siempre las cifras oficiales en el sitio del Gobierno de Canadá.`,
  },

  formula: {
    formula: "Prima de EI = mín(Ingreso Bruto, MIE) × Tasa de Aporte",
    variables: [
      { symbol: "MIE", meaning: "Máximo de Ingresos Asegurables — $68,900 para 2026" },
      { symbol: "Tasa de Aporte", meaning: "1.63% para el empleado, 2.28% para el empleador (1.4×)" },
    ],
    explanation: "El ingreso bruto anual se limita al MIE de $68,900, y a esa cifra se le aplica la tasa de 1.63% para el empleado y 2.28% para el empleador.",
    interpretation: "Por ejemplo, con un ingreso bruto de $50,000, la prima del empleado es 1.63% × $50,000 = $815.00, y el empleador paga 2.28% × $50,000 = $1,140.00.",
  },

  steps: [
    "Ingresa tu ingreso bruto anual en dólares canadienses (CAD).",
    "Haz clic en Calcular.",
    "Revisa tus ingresos asegurables (limitados al MIE de 2026).",
    "Revisa cuánto aportas tú y cuánto aporta tu empleador.",
    "Revisa la prima total combinada de EI.",
  ],

  examples: [
    { inputs: "Ingreso Bruto: $40,000", result: "Prima del Empleado: $652.00", explanation: "Un trabajador con salario promedio, por debajo del tope del MIE." },
    { inputs: "Ingreso Bruto: $68,900 o más", result: "Prima del Empleado: $1,123.07 (máximo)", explanation: "Cualquier ingreso igual o mayor al MIE llega al tope máximo de 2026." },
    { inputs: "Ingreso Bruto: $25,000", result: "Prima del Empleado: $407.50", explanation: "Ingreso más bajo, con una prima proporcionalmente menor." },
  ],

  practicalUses: [
    "Entender por qué se descuenta cierta cantidad de EI en tu recibo de pago",
    "Verificar si ya alcanzaste el tope máximo de EI en el año",
    "Estimar tu elegibilidad y aportes antes de solicitar un permiso de maternidad o paternidad",
    "Comparar cuánto pagarías con un aumento de sueldo",
    "Planear tu presupuesto mensual conociendo tu descuento neto",
    "Prepararte antes de declarar impuestos, ya que el exceso de aporte se puede recuperar",
  ],

  expertTips: [
    "Si trabajas para más de un empleador en el mismo año, cada uno aplica el tope por separado, así que podrías pagar de más en total y recuperarlo al declarar impuestos.",
    "Una vez que alcanzas la prima máxima anual ($1,123.07 en 2026), tu empleador debe dejar de descontarte EI el resto del año.",
    "Los residentes de Quebec pagan una tasa reducida (1.30%) porque la provincia administra su propio plan parental (QPIP); esta calculadora no cubre esa tasa.",
    "Los trabajadores por cuenta propia no pagan EI automáticamente, pero pueden inscribirse voluntariamente para acceder a beneficios especiales como licencia por enfermedad o cuidado familiar.",
    "Revisa tus recibos de pago con frecuencia si trabajas horas extra o recibes bonos, ya que estos también cuentan como ingresos asegurables.",
  ],

  commonMistakes: [
    { mistake: "Confundir el EI con el impuesto sobre la renta", fix: "El EI es una prima de seguro separada, distinta del impuesto federal y provincial." },
    { mistake: "No notar que ya llegaste al tope máximo anual", fix: "Revisa tus recibos de pago cerca de fin de año — una vez alcanzado el máximo, no deberían seguir descontándote EI." },
    { mistake: "No declarar el exceso de aporte al tener varios empleos", fix: "Si trabajaste para más de un empleador y superaste el máximo combinado, reclama el reembolso en tu declaración de impuestos." },
    { mistake: "Asumir que la tasa de Quebec es la misma que en el resto de Canadá", fix: "Quebec usa una tasa reducida de 1.30% por su plan parental propio (QPIP); esta calculadora usa la tasa federal general." },
    { mistake: "Pensar que los trabajadores por cuenta propia pagan EI automáticamente", fix: "Deben inscribirse voluntariamente al programa para pagar y acceder a beneficios especiales." },
  ],

  faq: [
    { q: "¿Qué es el EI en Canadá?", a: "El EI (Employment Insurance) es el Seguro de Empleo federal que da apoyo económico temporal a quienes pierden su trabajo o toman ciertos tipos de licencia, como maternidad, paternidad o enfermedad." },
    { q: "¿Cuánto EI me descuentan de mi sueldo en 2026?", a: "En 2026 se descuenta el 1.63% de tu ingreso asegurable, hasta un máximo de $1,123.07 al año." },
    { q: "¿Cuál es el máximo de ingresos asegurables (MIE) para EI en 2026?", a: "El MIE para 2026 es $68,900; no se pagan primas de EI sobre ingresos por encima de esa cifra." },
    { q: "¿Cuánto paga el empleador de EI por cada empleado?", a: "El empleador paga 1.4 veces la tasa del empleado, es decir 2.28% en 2026, hasta un máximo de $1,572.30 por empleado." },
    { q: "¿Qué pasa si trabajo para dos empleadores?", a: "Cada empleador aplica el tope por separado, así que podrías terminar pagando más del máximo anual entre ambos trabajos, y el exceso se te reembolsa al declarar tus impuestos." },
    { q: "¿Los trabajadores por cuenta propia pagan EI?", a: "No de forma automática, pero pueden inscribirse voluntariamente al programa para acceder a beneficios especiales como licencia por enfermedad, maternidad o cuidado familiar." },
    { q: "¿Por qué Quebec tiene una tasa de EI diferente?", a: "Quebec administra su propio plan parental (QPIP), por lo que sus residentes pagan una tasa reducida de EI (1.30% en 2026) ya que la licencia de maternidad y paternidad se cubre por separado." },
    { q: "¿Puedo recuperar el EI que pagué de más?", a: "Sí, si contribuiste de más porque tuviste varios empleadores en el año, el exceso se acredita o reembolsa cuando presentas tu declaración de impuestos." },
    { q: "¿Cuánto tiempo puedo recibir beneficios de EI si pierdo mi trabajo?", a: "La duración depende de tus horas trabajadas y la tasa de desempleo regional, generalmente entre 14 y 45 semanas de beneficios regulares." },
    { q: "¿El EI es lo mismo que el CPP?", a: "No, el EI es un seguro contra la pérdida temporal de empleo, mientras que el CPP es un plan de pensión para tu jubilación; ambos se descuentan por separado de tu sueldo." },
  ],

  relatedCalculators: ["Calculadora de CPP", "Calculadora de Salario Neto en Canadá", "Calculadora de Impuesto sobre la Renta Canadá", "Calculadora de Jubilación"],

  youMayLike: pickYouMayLike("ca-ei-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de EI (Seguro de Empleo)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};