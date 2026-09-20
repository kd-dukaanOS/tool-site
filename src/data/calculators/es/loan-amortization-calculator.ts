// src/data/calculators/es/loan-amortization-calculator.ts
// NOTE: real slug is "loan-amortization-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const loanAmortizationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Amortización de Préstamo 2026",
    metaDescription: "Calcula tu pago mensual, interés total y calendario de amortización año por año. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/loan-amortization-calculator",
    ogTitle: "Calculadora de Amortización de Préstamo",
    ogDescription: "Descubre tu pago mensual y el calendario completo de tu préstamo.",
    twitterTitle: "Calculadora de Amortización",
    twitterDescription: "Calcula el pago mensual y el interés total de tu préstamo al instante.",
  },
  hero: {
    text: "La Calculadora de Amortización de Préstamo calcula tu pago mensual, el interés total y muestra el calendario de amortización año por año, incluyendo el efecto de pagos extra opcionales.",
  },
  about: {
    text: `La amortización de un préstamo es el proceso de pagarlo gradualmente mediante pagos periódicos que cubren tanto interés como capital, hasta liquidar el saldo por completo.

Esta calculadora usa el monto del préstamo, la tasa de interés anual y el plazo en años para calcular el pago mensual fijo mediante la fórmula estándar de amortización a tasa fija, y genera un calendario año por año mostrando cuánto capital e interés se paga cada período.

Limitaciones: la calculadora asume una tasa de interés fija durante todo el plazo; no incluye seguros, comisiones de apertura ni impuestos que algunos préstamos hipotecarios agregan al pago mensual.`,
  },
  formula: {
    formula: "Pago Mensual = P × [r(1+r)^n] / [(1+r)^n − 1]",
    variables: [
      { symbol: "P", meaning: "Monto del préstamo (principal)" },
      { symbol: "r", meaning: "Tasa de interés mensual (tasa anual dividida entre 12)" },
      { symbol: "n", meaning: "Número total de pagos (años del préstamo multiplicados por 12)" },
    ],
    explanation: "Se aplica la fórmula estándar de amortización de préstamos a tasa fija, que calcula un pago mensual constante que cubre tanto el interés generado como una porción del capital, de modo que el saldo llegue exactamente a cero al final del plazo.",
    interpretation: "Por ejemplo, un préstamo de $200,000 al 6% anual a 30 años tiene un pago mensual aproximado de $1,199, del cual una parte creciente cada mes corresponde a capital.",
  },
  steps: [
    "Ingresa el monto del préstamo.",
    "Ingresa la tasa de interés anual.",
    "Ingresa el plazo del préstamo en años.",
    "Opcionalmente, ingresa un pago mensual extra para acelerar el pago.",
    "Haz clic en Calcular para ver el pago mensual, interés total y calendario de amortización.",
  ],
  examples: [
    { inputs: "Préstamo: $200,000, Tasa: 6%, Plazo: 30 años", result: "Pago mensual: $1,199.10", explanation: "Un préstamo hipotecario típico a tasa fija a 30 años." },
    { inputs: "Préstamo: $20,000, Tasa: 8%, Plazo: 5 años", result: "Pago mensual: $405.53", explanation: "Un préstamo de auto a plazo más corto con tasa más alta." },
    { inputs: "Préstamo: $200,000, Tasa: 6%, Plazo: 30 años, Extra: $200/mes", result: "Se paga varios años antes y se ahorra interés significativo", explanation: "El pago extra reduce directamente el capital pendiente, acortando el plazo real." },
  ],
  practicalUses: [
    "Calcular el pago mensual de una hipoteca antes de solicitarla",
    "Comparar el interés total entre distintos plazos de préstamo",
    "Ver cuánto interés se ahorra al hacer pagos extra mensuales",
    "Planear el presupuesto familiar considerando un préstamo de auto o personal",
    "Entender cuánto del pago mensual va a capital vs interés en cada año",
  ],
  expertTips: [
    "Al inicio de un préstamo, la mayor parte del pago mensual va a interés; con el tiempo, la proporción destinada a capital aumenta.",
    "Un pago extra mensual reduce directamente el capital, lo que acelera el plazo real del préstamo más de lo que parece a simple vista.",
    "Comparar dos préstamos con la misma tasa pero distinto plazo: el plazo más corto tiene pago mensual más alto pero interés total mucho menor.",
    "Revisa siempre si tu préstamo permite pagos extra sin penalización antes de aplicar esta estrategia en la vida real.",
  ],
  commonMistakes: [
    { mistake: "Comparar préstamos solo por el pago mensual sin ver el interés total", fix: "Un plazo más largo baja el pago mensual pero puede duplicar o triplicar el interés total pagado." },
    { mistake: "Olvidar que la tasa de interés debe convertirse a mensual para el cálculo", fix: "Divide la tasa anual entre 12 para obtener la tasa mensual usada en la fórmula de amortización." },
    { mistake: "No considerar comisiones de apertura o seguros adicionales", fix: "Esta calculadora muestra el pago de capital e interés; suma por separado cualquier comisión o seguro obligatorio del préstamo." },
    { mistake: "Pensar que un pago extra pequeño no genera diferencia real", fix: "Incluso pagos extra modestos pueden reducir el plazo en años y ahorrar miles en interés a largo plazo." },
  ],
  faq: [
    { q: "¿Cómo se calcula el pago mensual de un préstamo?", a: "Se usa la fórmula de amortización a tasa fija, que considera el monto del préstamo, la tasa de interés mensual y el número total de pagos." },
    { q: "¿Qué es la amortización de un préstamo?", a: "Es el proceso de pagar un préstamo gradualmente mediante pagos periódicos que cubren interés y capital hasta liquidar el saldo completo." },
    { q: "¿Cómo afecta un pago extra mensual al plazo de mi préstamo?", a: "El pago extra reduce directamente el capital pendiente, lo que acorta el plazo total y reduce el interés total pagado." },
    { q: "¿Por qué al inicio del préstamo pago más interés que capital?", a: "Porque el interés se calcula sobre el saldo pendiente, que es más alto al inicio; a medida que el capital disminuye, el interés mensual también baja." },
    { q: "¿Cuál es la diferencia entre tasa de interés y TAE (tasa anual equivalente)?", a: "La tasa de interés nominal no incluye comisiones adicionales; la TAE sí las incluye, mostrando el costo real anual del préstamo." },
    { q: "¿Cómo calcular el interés total que pagaré en todo el préstamo?", a: "Se suma cada pago de interés mensual del calendario de amortización completo, o se resta el capital original del total pagado." },
    { q: "¿Qué plazo de préstamo me conviene más, 15 o 30 años?", a: "Un plazo de 15 años tiene pagos mensuales más altos pero interés total mucho menor; un plazo de 30 años reduce el pago mensual pero aumenta el costo total del préstamo." },
    { q: "¿Puedo pagar mi préstamo antes de tiempo sin penalización?", a: "Depende del contrato de tu préstamo; algunos permiten pagos anticipados sin costo, mientras que otros cobran una penalización, así que revisa las condiciones específicas." },
    { q: "¿Cómo funciona el calendario de amortización año por año?", a: "Muestra, para cada año del préstamo, cuánto se pagó de capital, cuánto de interés y cuál es el saldo pendiente al final de ese año." },
    { q: "¿Qué pasa si mi tasa de interés es variable en lugar de fija?", a: "Esta calculadora asume tasa fija; con tasa variable, el pago mensual y el calendario de amortización cambiarían cada vez que la tasa se ajuste." },
    { q: "¿Cuánto interés ahorro pagando $100 extra al mes?", a: "Depende del monto, tasa y plazo de tu préstamo; ingresa el valor en el campo de pago extra de esta calculadora para ver el ahorro exacto en tu caso." },
    { q: "¿Cómo se calcula la amortización de un préstamo de auto?", a: "Se aplica la misma fórmula de amortización a tasa fija, generalmente con plazos más cortos (3 a 7 años) y tasas distintas a las hipotecas." },
    { q: "¿El seguro hipotecario está incluido en esta calculadora?", a: "No, esta calculadora solo calcula capital e interés; seguros, impuestos prediales y comisiones deben sumarse por separado a tu presupuesto mensual." },
    { q: "¿Cómo saber cuánto capital he pagado hasta cierto año de mi préstamo?", a: "Revisa el calendario de amortización año por año; la columna de 'Capital Pagado' te muestra el monto acumulado destinado a capital en ese período." },
  ],
  relatedCalculators: ["Calculadora de Préstamo Personal", "Calculadora de Hipoteca", "Calculadora de Pago de Deudas", "Calculadora de Refinanciamiento"],
  youMayLike: pickYouMayLike("loan-amortization-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Amortización de Préstamo",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};