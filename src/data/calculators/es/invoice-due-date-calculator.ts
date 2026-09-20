// src/data/calculators/es/invoice-due-date-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const invoiceDueDateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Fecha de Vencimiento de Factura 2026",
    metaDescription: "Calcula la fecha de vencimiento de una factura según la fecha de emisión y el plazo de pago (Net 30, Net 60, etc). Gratis e instantáneo.",
    canonicalSlug: "/es/finance/invoice-due-date-calculator",
    ogTitle: "Calculadora de Fecha de Vencimiento de Factura",
    ogDescription: "Calcula cuándo vence una factura y cuántos días quedan para pagarla.",
    twitterTitle: "Calculadora de Vencimiento de Factura",
    twitterDescription: "Calcula la fecha de vencimiento de tu factura al instante.",
  },
  hero: {
    text: "La Calculadora de Fecha de Vencimiento de Factura suma el plazo de pago acordado a la fecha de emisión, mostrando la fecha exacta de vencimiento y si la factura está vencida, próxima a vencer o en curso.",
  },
  about: {
    text: `Las facturas comerciales suelen incluir un plazo de pago expresado en días desde la fecha de emisión, como "Net 30" (30 días) o "Net 60" (60 días), que indica cuándo debe pagarse la factura.

Esta calculadora suma el número de días del plazo de pago a la fecha de la factura para determinar la fecha exacta de vencimiento, y compara esa fecha con hoy para mostrarte si la factura está vencida, vence pronto, o sigue en curso.

Limitaciones: esta calculadora no considera días festivos ni fines de semana como excepciones; calcula días calendario simples, que es la práctica estándar en la mayoría de los términos de pago comerciales.`,
  },
  formula: {
    formula: "Fecha de Vencimiento = Fecha de Factura + Plazo de Pago (días)",
    variables: [
      { symbol: "Días Restantes", meaning: "Número de días entre hoy y la fecha de vencimiento" },
      { symbol: "Estado", meaning: "Vencida (si ya pasó la fecha), vence pronto (próxima a vencer), o en curso (con tiempo suficiente)" },
    ],
    explanation: "Se suman los días del plazo de pago a la fecha de emisión de la factura para obtener la fecha de vencimiento; luego se compara esa fecha con la fecha actual para determinar cuántos días quedan o si ya está vencida.",
    interpretation: "Por ejemplo, una factura emitida el 1 de septiembre con términos Net 30 vence el 1 de octubre; si hoy es 20 de septiembre, quedarían 11 días restantes.",
  },
  steps: [
    "Ingresa la fecha de emisión de la factura.",
    "Ingresa el plazo de pago en días (por ejemplo, 30 para Net 30).",
    "Haz clic en Calcular.",
    "Revisa la fecha de vencimiento y el estado actual de la factura.",
  ],
  examples: [
    { inputs: "Fecha de Factura: 1 de septiembre, Plazo: 30 días", result: "Vencimiento: 1 de octubre", explanation: "Un término de pago Net 30 estándar en facturación comercial." },
    { inputs: "Fecha de Factura: 15 de agosto, Plazo: 60 días", result: "Vencimiento: 14 de octubre", explanation: "Un término Net 60, común en acuerdos con clientes grandes o corporativos." },
    { inputs: "Fecha de Factura: 5 de agosto, Plazo: 15 días", result: "Vencimiento: 20 de agosto (probablemente vencida)", explanation: "Un plazo corto que puede ya haber vencido según la fecha actual." },
  ],
  practicalUses: [
    "Hacer seguimiento de cuándo vencen las facturas emitidas a tus clientes",
    "Priorizar el cobro de facturas próximas a vencer o ya vencidas",
    "Calcular la fecha de vencimiento antes de emitir una nueva factura con términos específicos",
    "Planear tu flujo de caja según las fechas de cobro esperadas",
    "Comunicar claramente a un cliente cuándo vence su pago",
  ],
  expertTips: [
    "Los términos Net 30 y Net 60 son estándar en muchas industrias, pero puedes usar cualquier número de días según lo acordado con tu cliente.",
    "Haz seguimiento proactivo de facturas que estén por vencer (5-7 días antes) para reducir el riesgo de pagos atrasados.",
    "Considera ofrecer descuentos por pronto pago (como 2/10 Net 30) para incentivar pagos más rápidos.",
    "Lleva un registro centralizado de fechas de vencimiento si manejas muchas facturas simultáneamente, para no perder seguimiento.",
  ],
  commonMistakes: [
    { mistake: "Confundir la fecha de emisión con la fecha de vencimiento", fix: "La fecha de vencimiento siempre es la fecha de emisión más el plazo de pago en días, no la fecha de emisión misma." },
    { mistake: "No hacer seguimiento de facturas próximas a vencer", fix: "Revisa regularmente el estado de tus facturas para contactar a los clientes antes de que la factura esté vencida." },
    { mistake: "Asumir que 'Net 30' significa 30 días hábiles", fix: "Los términos de pago como Net 30 generalmente se cuentan en días calendario, no días hábiles, salvo que se especifique lo contrario." },
  ],
  faq: [
    { q: "¿Cómo se calcula la fecha de vencimiento de una factura?", a: "Se suma el número de días del plazo de pago (por ejemplo, 30 para Net 30) a la fecha de emisión de la factura." },
    { q: "¿Qué significa Net 30 en una factura?", a: "Significa que el pago debe realizarse dentro de los 30 días calendario siguientes a la fecha de emisión de la factura." },
    { q: "¿Net 30 incluye fines de semana y días festivos?", a: "Generalmente sí, los términos de pago como Net 30 se cuentan en días calendario, no en días hábiles, salvo que se indique lo contrario." },
    { q: "¿Qué diferencia hay entre Net 30, Net 60 y Net 90?", a: "Son distintos plazos de pago expresados en días desde la fecha de factura: 30, 60 o 90 días respectivamente, siendo Net 30 el más común en muchas industrias." },
    { q: "¿Cómo sé si una factura está vencida?", a: "Una factura está vencida si la fecha actual es posterior a la fecha de vencimiento calculada (fecha de factura más el plazo de pago)." },
    { q: "¿Qué es un descuento por pronto pago como 2/10 Net 30?", a: "Significa que el cliente puede obtener un 2% de descuento si paga dentro de los primeros 10 días, o pagar el monto completo dentro de 30 días." },
    { q: "¿Esta calculadora funciona para cualquier plazo de pago personalizado?", a: "Sí, puedes ingresar cualquier número de días como plazo de pago, no solo los términos estándar como Net 30 o Net 60." },
    { q: "¿Qué debo hacer si una factura está próxima a vencer?", a: "Es recomendable contactar al cliente unos días antes del vencimiento como recordatorio amistoso para asegurar el pago a tiempo." },
    { q: "¿Cómo afecta la fecha de vencimiento a mi flujo de caja?", a: "Conocer las fechas de vencimiento de tus facturas por cobrar te ayuda a proyectar con mayor precisión cuándo recibirás el efectivo esperado." },
    { q: "¿Qué pasa si la fecha de vencimiento cae en fin de semana?", a: "Generalmente la fecha de vencimiento se mantiene igual (día calendario); algunas empresas extienden el plazo al siguiente día hábil por política interna, pero no es un estándar universal." },
    { q: "¿Esta calculadora es útil para facturas internacionales?", a: "Sí, siempre que conozcas la fecha de emisión y el plazo de pago acordado, funciona independientemente del país o moneda de la factura." },
  ],
  relatedCalculators: ["Calculadora de Días Laborables", "Calculadora de Diferencia de Fechas", "Calculadora de Flujo de Caja", "Calculadora de Cuenta Regresiva"],
  youMayLike: pickYouMayLike("invoice-due-date-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Fecha de Vencimiento de Factura",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};