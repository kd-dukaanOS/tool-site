// src/data/calculators/es/uk-income-tax-calculator.ts
// NOTE: real slug is "uk-income-tax-calculator" (tools_sorted.js), not "uk-income-tax"
import { pickYouMayLike } from "../../calculator-pool";

export const ukIncomeTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto sobre la Renta Reino Unido 2026/27",
    metaDescription: "Calcula tu Impuesto sobre la Renta del Reino Unido, tasa efectiva y tasa marginal usando los tramos de Inglaterra/Gales/NI. Gratis.",
    canonicalSlug: "/es/finance/uk-income-tax-calculator",
    ogTitle: "Calculadora de Impuesto sobre la Renta Reino Unido",
    ogDescription: "Descubre cuánto Impuesto sobre la Renta pagarás en el Reino Unido.",
    twitterTitle: "Calculadora Impuesto Renta UK 2026/27",
    twitterDescription: "Calcula tu impuesto sobre la renta del Reino Unido al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto sobre la Renta del Reino Unido estima tu impuesto usando los tramos de Inglaterra, Gales e Irlanda del Norte y la Asignación Personal estándar, mostrando tu tasa efectiva y marginal.",
  },
  about: {
    text: `En el Reino Unido, el Impuesto sobre la Renta se calcula aplicando tramos progresivos a tu ingreso después de restar la Asignación Personal, el monto libre de impuesto que la mayoría de los contribuyentes reciben.

Esta calculadora aplica los tramos de Inglaterra/Gales/Irlanda del Norte (tasa básica, alta y adicional) a tu salario bruto anual después de la Asignación Personal, mostrando el impuesto adeudado, tu ingreso imponible, tu tasa marginal y tu ingreso después de impuestos.

Limitaciones: esta calculadora excluye el Seguro Nacional (usa la Calculadora de Seguro Nacional para eso), no modela la reducción gradual de la Asignación Personal por encima de £100,000, y no aplica a Escocia, que tiene tramos fiscales separados.`,
  },
  formula: {
    formula: "Ingreso Imponible = Ingreso Bruto − Asignación Personal",
    variables: [
      { symbol: "Tasa Marginal", meaning: "La tasa de impuesto que se aplica a la última libra de tu ingreso, correspondiente al tramo más alto que alcanzas" },
      { symbol: "Tasa Efectiva", meaning: "El impuesto total dividido entre tu ingreso bruto, representando tu tasa promedio real de impuesto" },
    ],
    explanation: "Se resta la Asignación Personal de tu ingreso bruto para obtener el ingreso imponible, y se aplican los tramos progresivos de Inglaterra/Gales/NI a ese monto, sumando el impuesto de cada tramo hasta llegar a tu ingreso total.",
    interpretation: "Por ejemplo, con un salario bruto de £40,000, después de la Asignación Personal de £12,570, tu ingreso imponible sería £27,430, gravado principalmente a la tasa básica del 20%.",
  },
  steps: [
    "Ingresa tu salario bruto anual en libras esterlinas.",
    "Haz clic en Calcular.",
    "Revisa tu impuesto adeudado, ingreso imponible, tasa marginal, tasa efectiva e ingreso después de impuestos.",
  ],
  examples: [
    { inputs: "Salario Bruto: £30,000", result: "Impuesto: ~£3,486 | Tasa Efectiva: ~11.6%", explanation: "Un salario dentro del tramo de tasa básica del 20%." },
    { inputs: "Salario Bruto: £60,000", result: "Impuesto: significativamente mayor (mezcla de tramo básico y alto)", explanation: "Un salario que cruza hacia el tramo de tasa alta del 40%." },
    { inputs: "Salario Bruto: £12,000", result: "Impuesto: £0", explanation: "Un ingreso menor a la Asignación Personal de £12,570 no genera impuesto." },
  ],
  practicalUses: [
    "Estimar cuánto Impuesto sobre la Renta pagarás sobre tu salario bruto",
    "Comparar el impacto fiscal de una oferta de trabajo con salario más alto",
    "Calcular tu ingreso neto aproximado antes del Seguro Nacional",
    "Entender tu tasa marginal antes de decidir sobre horas extra o un aumento",
    "Planear contribuciones a pensión que reduzcan tu ingreso imponible",
  ],
  expertTips: [
    "Esta calculadora no incluye el Seguro Nacional; combina el resultado con la Calculadora de Seguro Nacional para tu deducción total.",
    "Si tu ingreso supera £100,000, tu Asignación Personal se reduce gradualmente — esta calculadora no modela ese ajuste, así que tu impuesto real puede ser mayor.",
    "Contribuir a una pensión mediante sacrificio salarial reduce tu ingreso imponible, potencialmente bajándote a un tramo fiscal menor.",
    "Escocia tiene tramos de impuesto sobre la renta distintos; esta calculadora solo aplica a Inglaterra, Gales e Irlanda del Norte.",
  ],
  commonMistakes: [
    { mistake: "Confundir esta calculadora con el cálculo completo de deducciones salariales", fix: "Esta calculadora solo cubre el Impuesto sobre la Renta; suma el Seguro Nacional por separado para tu deducción total." },
    { mistake: "Usar esta calculadora si vives en Escocia", fix: "Escocia tiene sus propios tramos de Impuesto sobre la Renta, distintos a los de Inglaterra/Gales/Irlanda del Norte que usa esta calculadora." },
    { mistake: "No considerar la reducción de la Asignación Personal en ingresos altos", fix: "Si ganas más de £100,000, tu Asignación Personal se reduce £1 por cada £2 de exceso — verifica tu cifra exacta con HMRC." },
  ],
  faq: [
    { q: "¿Cómo se calcula el Impuesto sobre la Renta en el Reino Unido?", a: "Se resta la Asignación Personal de tu ingreso bruto, y el ingreso imponible resultante se grava progresivamente según los tramos de tasa básica, alta y adicional." },
    { q: "¿Cuál es la Asignación Personal para 2026/27?", a: "La Asignación Personal estándar es de £12,570, el monto de ingreso libre de Impuesto sobre la Renta para la mayoría de los contribuyentes." },
    { q: "¿Cuáles son los tramos de Impuesto sobre la Renta en Inglaterra, Gales e Irlanda del Norte?", a: "Los tramos son tasa básica (20%), tasa alta (40%) y tasa adicional (45%), aplicados progresivamente sobre el ingreso imponible." },
    { q: "¿Esta calculadora incluye el Seguro Nacional?", a: "No, esta calculadora solo estima el Impuesto sobre la Renta; usa la Calculadora de Seguro Nacional por separado para esa deducción." },
    { q: "¿Qué es la tasa marginal de impuesto?", a: "Es la tasa que se aplica a la última libra de tu ingreso, correspondiente al tramo más alto que alcanzas según tu salario total." },
    { q: "¿Qué es la tasa efectiva de impuesto?", a: "Es tu impuesto total dividido entre tu ingreso bruto, representando el porcentaje promedio real que pagas, generalmente menor que tu tasa marginal." },
    { q: "¿Esta calculadora aplica a Escocia?", a: "No, Escocia tiene sus propios tramos de Impuesto sobre la Renta separados; esta calculadora usa los tramos de Inglaterra, Gales e Irlanda del Norte." },
    { q: "¿Qué pasa si gano más de £100,000?", a: "Tu Asignación Personal se reduce gradualmente por encima de £100,000; esta calculadora no modela ese ajuste, por lo que tu impuesto real puede ser ligeramente mayor." },
    { q: "¿Cómo puedo reducir mi Impuesto sobre la Renta?", a: "Contribuir a una pensión mediante sacrificio salarial o aprovechar otras exenciones fiscales legales puede reducir tu ingreso imponible." },
    { q: "¿Cuál es la diferencia entre ingreso bruto e ingreso imponible?", a: "El ingreso bruto es tu salario total antes de cualquier deducción; el ingreso imponible es lo que queda después de restar tu Asignación Personal." },
    { q: "¿Esta calculadora sirve para autónomos?", a: "Los tramos de Impuesto sobre la Renta son los mismos, pero los autónomos tienen reglas adicionales de gastos deducibles y Seguro Nacional que esta calculadora no cubre." },
  ],
  relatedCalculators: ["Calculadora de Seguro Nacional", "Calculadora de Pensión Reino Unido", "Calculadora de Impuesto de Timbre", "Calculadora de Ganancias de Capital Reino Unido"],
  youMayLike: pickYouMayLike("uk-income-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto sobre la Renta del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};