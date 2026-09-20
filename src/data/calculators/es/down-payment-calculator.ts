// src/data/calculators/es/down-payment-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const downPaymentCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Pago Inicial — Cuánto Necesito para Comprar Casa",
    metaDescription: "Calcula tu pago inicial, monto del préstamo y efectivo necesario al cierre para comprar una casa. Calculadora gratis con costos de cierre y PMI.",
    canonicalSlug: "/es/finance/down-payment-calculator",
    ogTitle: "Calculadora de Pago Inicial para Comprar Casa",
    ogDescription: "Descubre cuánto necesitas ahorrar de pago inicial y efectivo total al cierre.",
    twitterTitle: "Calculadora de Pago Inicial Gratis",
    twitterDescription: "Calcula tu pago inicial y efectivo al cierre, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Pago Inicial te muestra exactamente cuánto necesitas ahorrar para el pago inicial, el monto de tu préstamo resultante, y el efectivo total necesario al cierre — incluyendo costos de cierre y si necesitarás pagar PMI.",
  },

  about: {
    text: `El pago inicial (down payment) es el porcentaje del precio de la vivienda que pagas de tu propio bolsillo al comprar una casa; el resto se financia con una hipoteca. El monto de tu pago inicial afecta directamente el tamaño de tu préstamo, tu pago mensual, y si necesitarás pagar Seguro Hipotecario Privado (PMI).

Esta calculadora toma el precio de la vivienda, tu porcentaje de pago inicial, la tasa hipotecaria y el plazo del préstamo, junto con costos adicionales como impuesto predial, seguro de vivienda, costos de cierre y tasa de PMI, para darte una imagen completa de cuánto efectivo necesitarás el día del cierre y cuál será tu pago mensual total.

En Estados Unidos, generalmente se requiere PMI si tu pago inicial es menor al 20% del precio de la vivienda; una vez que alcanzas el 20% de capital en tu propiedad, normalmente puedes solicitar que se elimine el PMI.`,
  },

  formula: {
    formula: "Efectivo al Cierre = Pago Inicial + Costos de Cierre",
    variables: [
      { symbol: "Pago Inicial", meaning: "Precio de la Vivienda × Porcentaje de Pago Inicial" },
      { symbol: "Monto del Préstamo", meaning: "Precio de la Vivienda − Pago Inicial" },
      { symbol: "PMI", meaning: "Se aplica si el pago inicial es menor al 20% del precio de la vivienda" },
    ],
    explanation: "El pago inicial se calcula como un porcentaje del precio de la vivienda; el resto se convierte en tu monto de préstamo. Los costos de cierre se suman al pago inicial para dar el efectivo total necesario, y si tu pago inicial es menor al 20%, se añade un costo mensual de PMI a tu pago total.",
    interpretation: "Por ejemplo, con una casa de $400,000, un 10% de pago inicial ($40,000), 3% de costos de cierre ($12,000) y PMI del 0.5% anual, necesitarás $52,000 en efectivo al cierre, y tu pago mensual incluirá PMI hasta alcanzar el 20% de capital.",
  },

  steps: [
    "Ingresa el precio de la vivienda.",
    "Ingresa tu porcentaje de pago inicial planeado.",
    "Ingresa la tasa hipotecaria y el plazo del préstamo.",
    "Ingresa el impuesto predial anual, seguro de vivienda y costos de cierre estimados.",
    "Ingresa la tasa de PMI si tu pago inicial es menor al 20%.",
    "Haz clic en Calcular.",
    "Revisa tu pago inicial, monto del préstamo, efectivo necesario al cierre y pago mensual total.",
  ],

  examples: [
    { inputs: "Precio: $400,000, Pago Inicial: 10%, Costos de Cierre: 3%", result: "Pago Inicial: $40,000, Efectivo al Cierre: ~$52,000", explanation: "Un comprador con pago inicial moderado que necesita pagar PMI." },
    { inputs: "Precio: $300,000, Pago Inicial: 20%, Costos de Cierre: 2.5%", result: "Pago Inicial: $60,000, Efectivo al Cierre: ~$67,500", explanation: "Alcanzar el 20% de pago inicial elimina el requisito de PMI." },
    { inputs: "Precio: $250,000, Pago Inicial: 5%, Costos de Cierre: 3%", result: "Pago Inicial: $12,500, Efectivo al Cierre: ~$20,000", explanation: "Un pago inicial bajo típico de compradores primerizos, con PMI incluido en el pago mensual." },
  ],

  practicalUses: [
    "Planear cuánto necesitas ahorrar antes de comprar una casa",
    "Comparar el efectivo requerido con distintos porcentajes de pago inicial",
    "Ver si alcanzar el 20% de pago inicial te ahorraría el costo de PMI",
    "Estimar tu pago mensual total incluyendo impuesto predial y seguro",
    "Establecer una meta de ahorro realista antes de solicitar una hipoteca",
  ],

  expertTips: [
    "Alcanzar un pago inicial del 20% elimina el requisito de PMI, lo que puede ahorrarte cientos de dólares al mes.",
    "Los costos de cierre generalmente representan entre 2% y 5% del precio de la vivienda — no los olvides al calcular cuánto efectivo necesitas.",
    "Algunos programas para compradores primerizos permiten pagos iniciales tan bajos como 3-3.5%, pero normalmente requieren PMI.",
    "Una vez que tu capital en la propiedad alcanza el 20%, puedes solicitar formalmente que se elimine el PMI de tu pago mensual.",
    "Compara ofertas de varios prestamistas, ya que la tasa hipotecaria y los costos de cierre pueden variar significativamente entre ellos.",
  ],

  commonMistakes: [
    { mistake: "Olvidar presupuestar los costos de cierre además del pago inicial", fix: "Los costos de cierre pueden sumar miles de dólares adicionales — inclúyelos siempre en tu plan de ahorro." },
    { mistake: "No considerar el PMI al calcular el pago mensual real", fix: "Si tu pago inicial es menor al 20%, el PMI se suma a tu pago mensual hasta que alcances suficiente capital en la propiedad." },
    { mistake: "Pensar que siempre se necesita un 20% de pago inicial", fix: "Muchos programas de préstamo aceptan pagos iniciales de 3-10%, aunque esto generalmente implica pagar PMI." },
    { mistake: "No incluir impuesto predial y seguro en el presupuesto mensual", fix: "Estos costos suelen incluirse en tu pago mensual total (a través de una cuenta de depósito en garantía) y afectan cuánto préstamo puedes calificar." },
  ],

  faq: [
    { q: "¿Cuánto pago inicial necesito para comprar una casa?", a: "Depende del tipo de préstamo, pero comúnmente varía entre 3% y 20% del precio de la vivienda; un 20% elimina el requisito de PMI." },
    { q: "¿Qué es el PMI y cuándo se necesita?", a: "El PMI (Private Mortgage Insurance) es un seguro que protege al prestamista, generalmente requerido cuando el pago inicial es menor al 20% del precio de la vivienda." },
    { q: "¿Cómo se calculan los costos de cierre?", a: "Los costos de cierre suelen representar entre 2% y 5% del precio de la vivienda, e incluyen honorarios de originación, tasación, seguro de título y otros cargos administrativos." },
    { q: "¿Puedo comprar una casa con menos del 20% de pago inicial?", a: "Sí, muchos programas de préstamo aceptan pagos iniciales tan bajos como 3-3.5%, pero generalmente requieren pagar PMI hasta alcanzar suficiente capital." },
    { q: "¿Cómo elimino el PMI de mi pago mensual?", a: "Una vez que tu capital en la propiedad alcanza el 20% del valor original o actual de la vivienda, puedes solicitar formalmente a tu prestamista que elimine el PMI." },
    { q: "¿Qué se incluye en el efectivo necesario al cierre?", a: "Generalmente incluye tu pago inicial más los costos de cierre; algunos compradores también reservan fondos adicionales para reparaciones o gastos de mudanza." },
    { q: "¿Un pago inicial más grande siempre es mejor?", a: "No necesariamente para todos — un pago inicial mayor reduce tu pago mensual y elimina el PMI, pero también inmoviliza más efectivo que podrías usar para otras metas financieras." },
    { q: "¿Cómo afecta mi pago inicial a la tasa hipotecaria?", a: "Un pago inicial mayor generalmente reduce el riesgo percibido por el prestamista, lo que a veces puede resultar en una tasa hipotecaria ligeramente mejor." },
  ],

  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Deuda a Ingresos", "Calculadora de Asequibilidad de Vivienda", "Calculadora de Fondo de Emergencia"],

  youMayLike: pickYouMayLike("down-payment-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Pago Inicial",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};