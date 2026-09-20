// src/data/calculators/es/ltv-calculator.ts
// NOTE: real slug is "ltv-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const ltvCalculatorContent = {
  meta: {
    seoTitle: "Calculadora LTV (Préstamo-Valor) 2026",
    metaDescription: "Calcula tu ratio préstamo-valor (LTV), capital de vivienda y si necesitas PMI. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/ltv-calculator",
    ogTitle: "Calculadora LTV",
    ogDescription: "Calcula tu ratio préstamo-valor y capital de vivienda al instante.",
    twitterTitle: "Calculadora de Ratio LTV",
    twitterDescription: "Descubre tu LTV, capital de vivienda y estado del PMI.",
  },
  hero: {
    text: "La Calculadora LTV calcula tu ratio préstamo-valor (Loan-to-Value), el capital acumulado en tu vivienda y si es probable que necesites pagar seguro hipotecario privado (PMI).",
  },
  about: {
    text: `El ratio préstamo-valor (LTV) compara el saldo de tu préstamo hipotecario contra el valor actual de tu vivienda, y es uno de los factores clave que los bancos usan para aprobar refinanciamientos, líneas de crédito y determinar si necesitas seguro hipotecario.

Esta calculadora recibe el valor de tu vivienda, el saldo actual de tu préstamo principal y, opcionalmente, una segunda hipoteca o HELOC, para calcular tu LTV, LTV combinado (CLTV), tu capital de vivienda y si probablemente necesites PMI.

Limitaciones: en Estados Unidos, el umbral típico para eliminar el PMI es 80% de LTV, pero las reglas exactas varían según el prestamista y el tipo de préstamo; consulta siempre con tu banco para confirmar tu caso específico.`,
  },
  formula: {
    formula: "LTV = (Saldo del Préstamo / Valor de la Vivienda) × 100",
    variables: [
      { symbol: "LTV Combinado (CLTV)", meaning: "Suma de todos los préstamos (primera hipoteca + segunda hipoteca/HELOC) dividida entre el valor de la vivienda" },
      { symbol: "Capital de Vivienda", meaning: "Valor de la vivienda menos el saldo total de los préstamos" },
    ],
    explanation: "Se divide el saldo del préstamo entre el valor actual de la vivienda para obtener el porcentaje de LTV; si existe una segunda hipoteca o HELOC, se suma al saldo principal para calcular el LTV combinado.",
    interpretation: "Por ejemplo, con una vivienda de $400,000 y un préstamo de $280,000, el LTV es de 70%, lo que generalmente está por debajo del umbral que requiere PMI.",
  },
  steps: [
    "Ingresa el valor actual de tu vivienda.",
    "Ingresa el saldo actual de tu préstamo principal.",
    "Opcionalmente, ingresa el saldo de una segunda hipoteca o HELOC.",
    "Haz clic en Calcular.",
    "Revisa tu LTV, LTV combinado, capital de vivienda y estado del PMI.",
  ],
  examples: [
    { inputs: "Valor: $400,000, Préstamo: $280,000", result: "LTV: 70%, sin PMI probable", explanation: "Un LTV por debajo del 80% generalmente elimina la necesidad de PMI." },
    { inputs: "Valor: $300,000, Préstamo: $270,000", result: "LTV: 90%, PMI probable", explanation: "Un LTV alto (poco enganche) suele requerir seguro hipotecario privado." },
    { inputs: "Valor: $500,000, Préstamo: $350,000, HELOC: $50,000", result: "LTV: 70%, CLTV: 80%", explanation: "El LTV combinado incluye la segunda hipoteca o línea de crédito." },
  ],
  practicalUses: [
    "Verificar si calificas para eliminar el PMI de tu hipoteca",
    "Calcular cuánto capital tienes disponible para una línea de crédito (HELOC)",
    "Evaluar si es buen momento para refinanciar tu hipoteca",
    "Estimar tu LTV antes de solicitar un préstamo hipotecario nuevo",
    "Entender cómo una segunda hipoteca afecta tu LTV combinado",
  ],
  expertTips: [
    "En EE.UU., por ley (Homeowners Protection Act), el prestamista debe eliminar automáticamente el PMI cuando el LTV llega al 78% del valor original de la vivienda.",
    "Puedes solicitar la eliminación anticipada del PMI al llegar al 80% de LTV, en lugar de esperar la eliminación automática al 78%.",
    "Un LTV bajo (mucho capital) generalmente te da acceso a mejores tasas de interés en refinanciamientos.",
    "El valor de la vivienda usado para el LTV debe basarse en una tasación reciente, no en el precio de compra original, especialmente si el mercado ha cambiado.",
  ],
  commonMistakes: [
    { mistake: "Usar el precio de compra original en lugar del valor actual de mercado", fix: "Usa una tasación reciente o una estimación actualizada del valor de tu vivienda para un LTV preciso." },
    { mistake: "Olvidar incluir una segunda hipoteca o HELOC en el cálculo", fix: "Si tienes más de un préstamo sobre la propiedad, usa el LTV combinado (CLTV) en lugar del LTV simple." },
    { mistake: "Asumir que el PMI se elimina automáticamente sin verificarlo", fix: "Contacta a tu prestamista para confirmar si el PMI se eliminó al llegar al umbral correspondiente." },
    { mistake: "Confundir el LTV con el porcentaje de enganche pagado", fix: "El LTV mide el saldo pendiente contra el valor actual, no el porcentaje que pagaste inicialmente al comprar." },
  ],
  faq: [
    { q: "¿Qué es el LTV (Loan-to-Value) en una hipoteca?", a: "Es el ratio entre el saldo de tu préstamo hipotecario y el valor actual de tu vivienda, expresado como porcentaje, usado por los bancos para evaluar el riesgo del préstamo." },
    { q: "¿Cómo se calcula el ratio LTV?", a: "Se divide el saldo del préstamo entre el valor de la vivienda y se multiplica por 100 para obtener el porcentaje." },
    { q: "¿Qué es el PMI y cuándo se requiere?", a: "El PMI (seguro hipotecario privado) generalmente se requiere cuando el LTV es superior al 80%, es decir, cuando el enganche fue menor al 20% del valor de la vivienda." },
    { q: "¿Cómo puedo eliminar el PMI de mi hipoteca?", a: "Puedes solicitar su eliminación al llegar al 80% de LTV, o se elimina automáticamente por ley al llegar al 78% del valor original de la vivienda." },
    { q: "¿Qué es el LTV combinado (CLTV)?", a: "Es la suma de todos los préstamos sobre la propiedad (primera hipoteca más una segunda hipoteca o HELOC) dividida entre el valor de la vivienda." },
    { q: "¿Qué LTV necesito para refinanciar mi hipoteca?", a: "Depende del programa de refinanciamiento, pero generalmente un LTV de 80% o menos ofrece las mejores condiciones y evita el PMI." },
    { q: "¿Cómo afecta el LTV a la tasa de interés de mi préstamo?", a: "Un LTV más bajo (más capital, menos riesgo para el prestamista) generalmente califica para tasas de interés más bajas." },
    { q: "¿Puedo obtener una línea de crédito (HELOC) con cualquier LTV?", a: "La mayoría de los prestamistas requieren que el LTV combinado (incluyendo el HELOC) no supere entre 80% y 90%, dependiendo de la entidad." },
    { q: "¿Qué diferencia hay entre LTV y capital de vivienda?", a: "El LTV mide qué porcentaje de tu vivienda debes al banco; el capital de vivienda es el valor de la propiedad menos lo que aún debes." },
    { q: "¿Cómo afecta una caída en el valor de mi vivienda a mi LTV?", a: "Si el valor de la vivienda baja mientras el saldo del préstamo se mantiene igual, tu LTV aumenta, lo que puede reactivar el requisito de PMI." },
    { q: "¿El LTV es diferente para préstamos FHA que para préstamos convencionales?", a: "Sí, los préstamos FHA suelen requerir seguro hipotecario (MIP) independientemente del LTV, mientras que los convencionales generalmente lo eliminan bajo el 80% de LTV." },
    { q: "¿Cómo calculo mi LTV si tengo una segunda hipoteca?", a: "Suma el saldo de ambos préstamos y divide el total entre el valor de la vivienda para obtener el LTV combinado (CLTV)." },
    { q: "¿Qué LTV es considerado bueno o seguro?", a: "Un LTV de 80% o menos generalmente se considera saludable, ya que evita el PMI y suele calificar para mejores tasas de interés." },
    { q: "¿El LTV afecta si puedo cancelar mi seguro hipotecario?", a: "Sí, el LTV es el factor principal que determina cuándo puedes solicitar o recibir automáticamente la cancelación del PMI." },
  ],
  relatedCalculators: ["Calculadora de Amortización de Préstamo", "Calculadora de Hipoteca", "Calculadora de Refinanciamiento", "Calculadora de Capital de Vivienda"],
  youMayLike: pickYouMayLike("ltv-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora LTV (Préstamo-Valor)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};