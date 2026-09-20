// src/data/calculators/es/uk-dividend-tax-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ukDividendTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto sobre Dividendos Reino Unido 2026/27",
    metaDescription: "Calcula el impuesto sobre tus dividendos del Reino Unido con la asignación de £500 y tasas actuales. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/uk-dividend-tax-calculator",
    ogTitle: "Calculadora de Impuesto sobre Dividendos",
    ogDescription: "Calcula tu impuesto sobre dividendos del Reino Unido al instante.",
    twitterTitle: "Calculadora Impuesto Dividendos UK 2026/27",
    twitterDescription: "Calcula tu impuesto sobre dividendos al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto sobre Dividendos del Reino Unido suma tus dividendos a tus otros ingresos, aplica tu Asignación Personal y la asignación de dividendos de £500, y calcula el impuesto según los tramos básico, alto y adicional del año fiscal seleccionado.",
  },
  about: {
    text: `En el Reino Unido, los ingresos por dividendos se gravan a tasas distintas de las del salario, apilándose sobre tu otro ingreso imponible después de aplicar tu Asignación Personal y una asignación de dividendos libre de impuestos de £500.

Esta calculadora suma tus dividendos a tu otro ingreso imponible, aplica tu Asignación Personal (que se reduce gradualmente si tu ingreso supera £100,000), resta la asignación de dividendos de £500, y calcula el impuesto según las tasas correspondientes al año fiscal seleccionado (2024/25, 2025/26 o 2026/27).

Limitaciones: esta calculadora no incluye dividendos recibidos dentro de cuentas ISA o pensiones, que generalmente están libres de impuestos independientemente del monto.`,
  },
  formula: {
    formula: "Impuesto sobre Dividendos = Tasa Aplicable × (Dividendos − Asignación de £500)",
    variables: [
      { symbol: "Asignación Personal", meaning: "El monto de ingreso libre de impuestos, que se reduce gradualmente para ingresos superiores a £100,000" },
      { symbol: "Asignación de Dividendos", meaning: "Los primeros £500 de ingresos por dividendos están libres de impuesto, sin importar tu tramo fiscal" },
    ],
    explanation: "Los dividendos se apilan encima de tu otro ingreso imponible; la porción que cae en cada tramo (básico, alto, adicional) se grava a la tasa correspondiente de dividendos de ese tramo, después de restar la asignación de dividendos de £500.",
    interpretation: "Por ejemplo, con £12,570 de otro ingreso y £20,000 de dividendos, después de la Asignación Personal y la asignación de dividendos, la mayor parte de los dividendos se gravaría a la tasa básica de dividendos.",
  },
  steps: [
    "Selecciona el año fiscal correspondiente.",
    "Ingresa tu otro ingreso imponible (salario, pensión, etc.).",
    "Ingresa tu ingreso por dividendos.",
    "Haz clic en Calcular para ver tu impuesto total, dividendo neto y tasa efectiva.",
  ],
  examples: [
    { inputs: "Año Fiscal: 2026/27, Otro Ingreso: £12,570, Dividendos: £20,000", result: "Impuesto sobre Dividendos: estimado según tramo básico", explanation: "Un inversionista con ingreso base cubierto por la Asignación Personal y dividendos significativos." },
    { inputs: "Año Fiscal: 2026/27, Otro Ingreso: £50,000, Dividendos: £15,000", result: "Impuesto sobre Dividendos: mezcla de tramo básico y alto", explanation: "Un contribuyente con ingreso más alto donde parte de los dividendos caen en el tramo de tasa alta." },
    { inputs: "Año Fiscal: 2026/27, Otro Ingreso: £0, Dividendos: £13,000", result: "Impuesto sobre Dividendos: £0 o mínimo", explanation: "Con poco otro ingreso, la Asignación Personal cubre gran parte de los dividendos." },
  ],
  practicalUses: [
    "Estimar el impuesto antes de recibir un pago de dividendos de tu empresa",
    "Planear la extracción de dividendos de una empresa propia de forma fiscalmente eficiente",
    "Comparar el impacto fiscal de recibir ingresos como salario versus dividendos",
    "Verificar cuánto de tu asignación de dividendos de £500 has utilizado",
    "Planear la declaración de autoevaluación anual con una estimación previa",
  ],
  expertTips: [
    "Los directores de empresas pequeñas en el Reino Unido suelen combinar un salario bajo con dividendos para optimizar su carga fiscal total.",
    "La asignación de dividendos de £500 aplica sin importar tu tramo fiscal, pero no se puede trasladar a años futuros si no la usas.",
    "Los dividendos dentro de una cuenta ISA están completamente libres de impuestos, sin importar el monto — considera maximizar tu ISA antes de otras inversiones.",
    "Tu Asignación Personal se reduce £1 por cada £2 de ingreso total por encima de £100,000, lo que puede aumentar significativamente tu impuesto efectivo en ese rango.",
  ],
  commonMistakes: [
    { mistake: "Olvidar que la Asignación Personal se reduce por encima de £100,000", fix: "Si tu ingreso total supera £100,000, tu Asignación Personal se reduce gradualmente, aumentando el monto de dividendos sujeto a impuesto." },
    { mistake: "Confundir la asignación de dividendos con la Asignación Personal", fix: "Son dos beneficios distintos: la Asignación Personal aplica a todo tu ingreso, mientras que la asignación de dividendos de £500 aplica específicamente a ese tipo de ingreso." },
    { mistake: "No considerar dividendos recibidos dentro de un ISA como exentos", fix: "Los dividendos dentro de una cuenta ISA están libres de impuesto y no deben incluirse en este cálculo." },
  ],
  faq: [
    { q: "¿Cómo se calcula el impuesto sobre dividendos en el Reino Unido?", a: "Se suman los dividendos a tu otro ingreso imponible, se aplica tu Asignación Personal y la asignación de dividendos de £500, y el resto se grava según los tramos de tasa correspondientes." },
    { q: "¿Cuál es la asignación de dividendos libre de impuestos para 2026/27?", a: "La asignación de dividendos es de £500 por persona para el año fiscal 2026/27, aplicable sin importar tu tramo fiscal." },
    { q: "¿Cuáles son las tasas de impuesto sobre dividendos en el Reino Unido?", a: "Las tasas varían según tu tramo fiscal: básico, alto y adicional, siendo generalmente más bajas que las tasas de impuesto sobre la renta ordinaria." },
    { q: "¿Los dividendos en un ISA están sujetos a impuesto?", a: "No, los dividendos recibidos dentro de una cuenta ISA están completamente libres de impuesto, sin importar el monto." },
    { q: "¿Cómo afecta mi Asignación Personal al impuesto sobre dividendos?", a: "Tu Asignación Personal cubre primero tu otro ingreso; si sobra espacio, también puede cubrir parte de tus dividendos antes de que se graven." },
    { q: "¿Por qué mi Asignación Personal se reduce si gano más de £100,000?", a: "El HMRC reduce tu Asignación Personal en £1 por cada £2 de ingreso total por encima de £100,000, hasta eliminarla completamente en ingresos muy altos." },
    { q: "¿Los directores de empresas pagan impuesto sobre dividendos de forma diferente?", a: "No, pagan las mismas tasas que cualquier accionista, pero muchos combinan un salario bajo con dividendos para optimizar su carga fiscal total de forma legal." },
    { q: "¿Puedo trasladar mi asignación de dividendos no utilizada al año siguiente?", a: "No, la asignación de dividendos de £500 no se puede trasladar; si no la usas en el año fiscal correspondiente, se pierde." },
    { q: "¿Cómo declaro mis dividendos en mi declaración de impuestos?", a: "Los dividendos por encima de la asignación libre de impuestos deben declararse en tu declaración de autoevaluación anual ante HMRC." },
    { q: "¿El impuesto sobre dividendos cambia entre años fiscales?", a: "Sí, las tasas y asignaciones pueden ajustarse cada año fiscal; esta calculadora permite seleccionar entre 2024/25, 2025/26 y 2026/27." },
    { q: "¿Qué diferencia hay entre impuesto sobre dividendos y sobre salario?", a: "Los dividendos generalmente se gravan a tasas más bajas que el salario, pero se pagan de las ganancias después de impuesto corporativo de la empresa." },
    { q: "¿Esta calculadora considera dividendos extranjeros?", a: "Está diseñada para dividendos del Reino Unido; los dividendos extranjeros pueden tener reglas fiscales adicionales que esta calculadora no cubre." },
    { q: "¿Debo pagar impuesto sobre dividendos si mi único ingreso son dividendos?", a: "Tu Asignación Personal y la asignación de dividendos cubrirán una parte; el resto se gravará según los tramos de tasa de dividendos correspondientes." },
  ],
  relatedCalculators: ["Calculadora de Ganancias de Capital Reino Unido", "Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Pensión Reino Unido", "Calculadora de Timbre (Stamp Duty)"],
  youMayLike: pickYouMayLike("uk-dividend-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto sobre Dividendos del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};