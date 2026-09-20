// src/data/calculators/es/overtime-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const overtimeCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Horas Extra 2026",
    metaDescription: "Calcula tu pago total incluyendo horas extra según tu tarifa por hora y multiplicador. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/overtime-calculator",
    ogTitle: "Calculadora de Horas Extra",
    ogDescription: "Descubre cuánto ganas con horas extra al instante.",
    twitterTitle: "Calculadora de Horas Extra 2026",
    twitterDescription: "Calcula tu pago de horas extra al instante.",
  },
  hero: {
    text: "La Calculadora de Horas Extra suma tu pago regular y tu pago de horas extra según tu tarifa por hora, horas trabajadas y el multiplicador de horas extra aplicable, mostrando tu pago total y tu tarifa efectiva de horas extra.",
  },
  about: {
    text: `Las horas extra generalmente se pagan a una tarifa mayor que las horas regulares, comúnmente 1.5 veces (tiempo y medio) o 2 veces (tiempo doble) la tarifa normal, dependiendo de las leyes laborales locales o el acuerdo con tu empleador.

Esta calculadora combina tu pago regular (tarifa por hora × horas regulares) con tu pago de horas extra (tarifa por hora × multiplicador × horas extra) para mostrarte tu pago total y la tarifa efectiva que ganas por cada hora extra trabajada.

Limitaciones: esta calculadora no aplica automáticamente reglas legales específicas de horas extra por país o estado; verifica siempre la legislación laboral aplicable a tu situación.`,
  },
  formula: {
    formula: "Pago de Horas Extra = Tarifa por Hora × Multiplicador × Horas Extra",
    variables: [
      { symbol: "Pago Regular", meaning: "Tarifa por hora multiplicada por las horas regulares trabajadas" },
      { symbol: "Multiplicador de Horas Extra", meaning: "El factor por el cual se multiplica tu tarifa regular en horas extra (comúnmente 1.5x o 2x)" },
      { symbol: "Tarifa de Horas Extra", meaning: "Tu tarifa por hora multiplicada por el multiplicador de horas extra" },
    ],
    explanation: "Se calcula el pago regular multiplicando la tarifa por hora por las horas regulares, y el pago de horas extra multiplicando la tarifa por hora, el multiplicador y las horas extra trabajadas; ambos se suman para obtener el pago total.",
    interpretation: "Por ejemplo, con una tarifa de $20/hora, 40 horas regulares y 5 horas extra a 1.5x, el pago regular es $800 y el pago de horas extra es $150, dando un total de $950.",
  },
  steps: [
    "Ingresa tu tarifa regular por hora.",
    "Ingresa tus horas regulares trabajadas.",
    "Ingresa tus horas extra trabajadas.",
    "Ingresa el multiplicador de horas extra (1.5x, 2x, u otro acordado).",
    "Haz clic en Calcular para ver tu pago total, pago regular, pago de horas extra y tarifa efectiva.",
  ],
  examples: [
    { inputs: "Tarifa: $20/hora, Horas Regulares: 40, Horas Extra: 5, Multiplicador: 1.5x", result: "Pago Total: $950", explanation: "Tiempo y medio, la tarifa de horas extra más común en muchos países." },
    { inputs: "Tarifa: $25/hora, Horas Regulares: 40, Horas Extra: 10, Multiplicador: 2x", result: "Pago Total: $1,500", explanation: "Tiempo doble, común para trabajo en días festivos o fines de semana." },
    { inputs: "Tarifa: $15/hora, Horas Regulares: 35, Horas Extra: 3, Multiplicador: 1.5x", result: "Pago Total: $592.50", explanation: "Un trabajador de medio tiempo con algunas horas extra ocasionales." },
  ],
  practicalUses: [
    "Verificar que tu pago de horas extra en el recibo de nómina sea correcto",
    "Calcular cuánto ganarás adicionalmente antes de aceptar trabajar horas extra",
    "Comparar el pago total entre distintos multiplicadores de horas extra ofrecidos",
    "Planear tu presupuesto mensual incluyendo ingresos variables por horas extra",
    "Negociar condiciones de horas extra conociendo el impacto real en tu pago",
  ],
  expertTips: [
    "El multiplicador de tiempo y medio (1.5x) es el más común en muchos países para horas extra entre semana; verifica las reglas específicas de tu país o estado.",
    "Algunas jurisdicciones exigen tiempo doble (2x) para trabajo en días festivos o después de cierto número de horas extra acumuladas.",
    "Recuerda que este cálculo es sobre el pago bruto; el pago neto real dependerá de las deducciones fiscales aplicables.",
    "Si trabajas horas extra regularmente, considera si negociar un salario fijo más alto podría ser más ventajoso a largo plazo.",
  ],
  commonMistakes: [
    { mistake: "Usar la tarifa regular para calcular las horas extra", fix: "Las horas extra deben multiplicarse por el factor correspondiente (1.5x, 2x, etc.), no calcularse a la tarifa regular." },
    { mistake: "No verificar el multiplicador correcto según tu jurisdicción o acuerdo laboral", fix: "El multiplicador de horas extra puede variar según el país, estado, o convenio colectivo aplicable a tu empleo." },
    { mistake: "Confundir el pago bruto de horas extra con el pago neto real", fix: "El resultado de esta calculadora es el pago bruto; los impuestos y deducciones reducirán el monto neto que recibes." },
  ],
  faq: [
    { q: "¿Cómo se calcula el pago de horas extra?", a: "Se multiplica tu tarifa regular por hora por el multiplicador de horas extra (comúnmente 1.5x o 2x) y por el número de horas extra trabajadas." },
    { q: "¿Qué significa tiempo y medio (1.5x) en horas extra?", a: "Significa que ganas 1.5 veces tu tarifa regular por cada hora extra trabajada; es el multiplicador más común en muchos países." },
    { q: "¿Qué significa tiempo doble (2x) en horas extra?", a: "Significa que ganas el doble de tu tarifa regular por hora; comúnmente se aplica en días festivos o después de cierto umbral de horas extra." },
    { q: "¿Cuántas horas se consideran horas extra?", a: "Generalmente las horas trabajadas más allá de 40 horas semanales se consideran horas extra, aunque las reglas exactas varían según el país o convenio laboral." },
    { q: "¿Cómo calculo mi pago total con horas extra incluidas?", a: "Suma tu pago regular (tarifa × horas regulares) con tu pago de horas extra (tarifa × multiplicador × horas extra) para obtener el pago total." },
    { q: "¿Este cálculo es antes o después de impuestos?", a: "Es el pago bruto antes de impuestos y deducciones; tu pago neto real será menor según las retenciones aplicables." },
    { q: "¿El multiplicador de horas extra es el mismo en todos los países?", a: "No, varía significativamente; algunos países exigen 1.5x, otros 2x, y algunos no tienen requisitos legales estándar de horas extra." },
    { q: "¿Cómo verifico si mi empleador me pagó correctamente las horas extra?", a: "Usa esta calculadora con tu tarifa por hora, horas trabajadas y multiplicador acordado, y compara el resultado con tu recibo de nómina." },
    { q: "¿Las horas extra en fin de semana se pagan diferente que entre semana?", a: "Depende de tu jurisdicción y acuerdo laboral; algunos empleadores aplican un multiplicador mayor para fines de semana o días festivos." },
    { q: "¿Cómo afecta trabajar horas extra a mi ingreso anual?", a: "Las horas extra regulares pueden aumentar significativamente tu ingreso anual, aunque también pueden variar mes a mes según la carga de trabajo." },
    { q: "¿Puedo usar esta calculadora para negociar mis horas extra?", a: "Sí, te permite comparar rápidamente cuánto ganarías con distintos multiplicadores o cantidades de horas extra antes de aceptar un acuerdo." },
    { q: "¿Qué es la tarifa efectiva de horas extra?", a: "Es tu tarifa por hora regular multiplicada por el multiplicador de horas extra, mostrando exactamente cuánto ganas por cada hora extra trabajada." },
  ],
  relatedCalculators: ["Calculadora de Salario por Hora", "Calculadora de Sueldo Neto", "Calculadora de Comisión", "Calculadora de Aumento de Sueldo"],
  youMayLike: pickYouMayLike("overtime-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Horas Extra",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};