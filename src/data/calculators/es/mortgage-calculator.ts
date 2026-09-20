// src/data/calculators/es/mortgage-calculator.ts
// NOTE: real slug is "mortgage-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const mortgageCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Hipoteca: Pago Mensual 2026",
    metaDescription: "Calcula tu pago mensual de hipoteca incluyendo impuesto predial, seguro, PMI y HOA. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/mortgage-calculator",
    ogTitle: "Calculadora de Hipoteca",
    ogDescription: "Calcula tu pago mensual completo de hipoteca al instante.",
    twitterTitle: "Calculadora de Hipoteca 2026",
    twitterDescription: "Calcula tu pago mensual de hipoteca completo, gratis.",
  },
  hero: {
    text: "La Calculadora de Hipoteca calcula tu pago mensual completo, incluyendo capital, interés, impuesto predial, seguro de vivienda, PMI y cuota de HOA, a partir del precio de la vivienda y las condiciones del préstamo.",
  },
  about: {
    text: `El pago mensual real de una hipoteca es más que solo capital e interés: generalmente incluye impuesto predial, seguro de vivienda, y en algunos casos seguro hipotecario privado (PMI) y cuotas de asociación de propietarios (HOA).

Esta calculadora recibe el precio de la vivienda, el pago inicial, el plazo del préstamo, la tasa de interés y los costos adicionales (impuesto predial, seguro, PMI, HOA) para mostrar tu pago mensual total desglosado por componente.

Limitaciones: los cálculos asumen una tasa de interés fija durante todo el plazo; el PMI se estima automáticamente solo cuando el LTV supera el 80%, siguiendo la práctica estándar de la industria en EE.UU.`,
  },
  formula: {
    formula: "Pago Mensual Total = Capital+Interés + Impuesto Predial/12 + Seguro/12 + PMI/12 + HOA",
    variables: [
      { symbol: "Capital + Interés", meaning: "Pago mensual fijo calculado con la fórmula estándar de amortización sobre el monto del préstamo" },
      { symbol: "PMI", meaning: "Seguro hipotecario privado, aplicado solo cuando el préstamo supera el 80% del valor de la vivienda (LTV)" },
    ],
    explanation: "Se calcula primero el pago mensual de capital e interés usando la fórmula estándar de amortización sobre el monto del préstamo (precio menos enganche), y luego se suman las porciones mensuales de impuesto predial, seguro de vivienda, PMI (si aplica) y HOA para obtener el pago total.",
    interpretation: "Por ejemplo, una vivienda de $400,000 con $80,000 de enganche (80% LTV) generalmente evita el PMI, mientras que un enganche menor al 20% lo activa automáticamente.",
  },
  steps: [
    "Ingresa el precio de la vivienda.",
    "Ingresa el pago inicial (enganche).",
    "Ingresa el plazo del préstamo en años y la tasa de interés anual.",
    "Opcionalmente, ingresa impuesto predial anual, seguro de vivienda, PMI y cuota de HOA.",
    "Haz clic en Calcular para ver el desglose completo de tu pago mensual.",
  ],
  examples: [
    { inputs: "Precio: $400,000, Enganche: $80,000, Tasa: 6.5%, Plazo: 30 años", result: "Pago mensual de capital+interés aproximado de $2,023", explanation: "Con 20% de enganche, generalmente no se requiere PMI." },
    { inputs: "Precio: $300,000, Enganche: $15,000 (5%), Tasa: 6.5%, Plazo: 30 años", result: "Se activa PMI automáticamente por LTV superior al 80%", explanation: "Un enganche bajo activa el PMI hasta alcanzar 80% de LTV." },
    { inputs: "Precio: $350,000, Enganche: $70,000, HOA: $150/mes, Impuesto: 1.2%/año", result: "Pago total incluye capital, interés, impuesto predial y HOA", explanation: "El pago mensual total suma todos los componentes de vivienda, no solo capital e interés." },
  ],
  practicalUses: [
    "Estimar tu pago mensual real antes de solicitar una hipoteca",
    "Comparar el pago mensual entre distintos precios de vivienda o tasas de interés",
    "Ver cómo el impuesto predial y el seguro afectan tu presupuesto mensual total",
    "Determinar si necesitarás pagar PMI según tu enganche disponible",
    "Comparar el costo mensual de comunidades con y sin cuota de HOA",
  ],
  expertTips: [
    "Un enganche del 20% o más generalmente elimina la necesidad de PMI, ahorrándote un costo mensual adicional.",
    "El impuesto predial varía significativamente según la ubicación; verifica la tasa específica de tu condado o municipio antes de calcular.",
    "Las cuotas de HOA pueden variar de $0 a varios cientos de dólares mensuales dependiendo de las amenidades de la comunidad; siempre pregúntalas antes de comprar.",
    "Compara el pago mensual total (no solo capital e interés) al decidir entre distintas propiedades, ya que impuesto, seguro y HOA pueden variar mucho entre ellas.",
  ],
  commonMistakes: [
    { mistake: "Comparar propiedades solo por el precio sin considerar impuesto predial y HOA", fix: "Incluye siempre estos costos adicionales, ya que pueden representar cientos de dólares extra al mes." },
    { mistake: "Olvidar que un enganche menor al 20% probablemente requiere PMI", fix: "Si tu enganche es menor al 20% del precio de la vivienda, incluye una estimación de PMI en tu presupuesto mensual." },
    { mistake: "Subestimar el seguro de vivienda al comparar hipotecas", fix: "El seguro de vivienda es obligatorio en la mayoría de los préstamos hipotecarios y debe incluirse en tu pago mensual estimado." },
    { mistake: "No verificar si la tasa de interés cotizada es fija o variable", fix: "Esta calculadora asume tasa fija; si tu préstamo es de tasa ajustable, tu pago puede cambiar con el tiempo." },
  ],
  faq: [
    { q: "¿Cómo se calcula el pago mensual de una hipoteca?", a: "Se usa la fórmula estándar de amortización sobre el monto del préstamo (precio menos enganche), y se suman las porciones mensuales de impuesto predial, seguro de vivienda, PMI y HOA si aplican." },
    { q: "¿Qué incluye el pago mensual total de una hipoteca?", a: "Generalmente incluye capital, interés, impuesto predial, seguro de vivienda, y en algunos casos PMI (seguro hipotecario privado) y cuota de HOA." },
    { q: "¿Cuándo tengo que pagar PMI en mi hipoteca?", a: "El PMI generalmente se requiere cuando tu enganche es menor al 20% del precio de la vivienda, es decir, cuando el préstamo supera el 80% de LTV." },
    { q: "¿Cuánto enganche necesito para no pagar PMI?", a: "Necesitas un enganche de al menos 20% del precio de la vivienda para evitar el PMI en la mayoría de los préstamos convencionales." },
    { q: "¿Cómo afecta el plazo del préstamo (15 vs 30 años) a mi pago mensual?", a: "Un plazo de 15 años tiene un pago mensual más alto pero menos interés total pagado; un plazo de 30 años reduce el pago mensual pero aumenta el costo total del préstamo." },
    { q: "¿El impuesto predial se paga junto con la hipoteca?", a: "Sí, generalmente el prestamista incluye una porción mensual del impuesto predial anual en tu pago hipotecario a través de una cuenta de depósito (escrow)." },
    { q: "¿Qué es la cuota de HOA y siempre debo pagarla?", a: "La cuota de HOA (Homeowners Association) es un pago mensual para comunidades con amenidades compartidas; solo aplica si la propiedad pertenece a una asociación de propietarios." },
    { q: "¿Cómo afecta la tasa de interés a mi pago mensual de hipoteca?", a: "Una tasa de interés más alta aumenta significativamente el pago mensual de capital e interés, incluso con el mismo monto de préstamo." },
    { q: "¿Puedo eliminar el PMI de mi hipoteca después de contratarla?", a: "Sí, generalmente puedes solicitar la eliminación del PMI una vez que tu saldo llegue al 80% del valor original de la vivienda, o se elimina automáticamente al 78%." },
    { q: "¿Esta calculadora incluye el seguro de vivienda obligatorio?", a: "Sí, puedes ingresar tu estimación de seguro de vivienda anual y la calculadora la incluye en el desglose de tu pago mensual total." },
    { q: "¿Cómo sé cuánto impuesto predial pagaré en mi área?", a: "El impuesto predial varía por condado o municipio; consulta la tasa efectiva de tu localidad o revisa registros de propiedades similares en tu zona." },
    { q: "¿Qué pasa si mi tasa de interés es variable en lugar de fija?", a: "Esta calculadora asume una tasa fija; con una tasa variable (ARM), tu pago mensual cambiaría periódicamente según las condiciones del mercado." },
    { q: "¿Cómo puedo reducir mi pago mensual de hipoteca?", a: "Puedes aumentar tu enganche para evitar PMI, elegir un plazo más largo, o buscar una tasa de interés más baja negociando con distintos prestamistas." },
    { q: "¿El monto del préstamo es lo mismo que el precio de la vivienda?", a: "No, el monto del préstamo es el precio de la vivienda menos tu pago inicial (enganche); es la cantidad que realmente financias con el prestamista." },
  ],
  relatedCalculators: ["Calculadora de Amortización de Préstamo", "Calculadora de Capacidad Hipotecaria", "Calculadora LTV", "Calculadora de Refinanciamiento Hipotecario"],
  youMayLike: pickYouMayLike("mortgage-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Hipoteca",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};