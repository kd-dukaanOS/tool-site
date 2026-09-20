// src/data/calculators/es/uk-student-loan-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ukStudentLoanCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Préstamo Estudiantil Reino Unido 2026/27",
    metaDescription: "Calcula tu pago mensual de préstamo estudiantil del Reino Unido según tu plan (1, 2, 4, 5 o posgrado). Gratis e instantáneo.",
    canonicalSlug: "/es/finance/uk-student-loan-calculator",
    ogTitle: "Calculadora de Préstamo Estudiantil",
    ogDescription: "Descubre cuánto pagarás mensualmente de tu préstamo estudiantil del Reino Unido.",
    twitterTitle: "Calculadora Préstamo Estudiantil UK 2026/27",
    twitterDescription: "Calcula tu pago de préstamo estudiantil al instante.",
  },
  hero: {
    text: "La Calculadora de Préstamo Estudiantil del Reino Unido calcula tu pago mensual y anual como un porcentaje de tu ingreso por encima del umbral correspondiente a tu plan (1, 2, 4, 5 o posgrado).",
  },
  about: {
    text: `Los préstamos estudiantiles del Reino Unido se pagan automáticamente vía nómina como un porcentaje de tu ingreso que supera un umbral específico, el cual varía según el plan de préstamo que tengas (determinado por cuándo y dónde estudiaste).

Esta calculadora aplica el umbral y la tasa de pago correspondiente a tu plan seleccionado sobre tu salario anual, mostrando tu pago mensual, anual, el umbral aplicable y la tasa de pago.

Limitaciones: esta calculadora no incluye intereses acumulados sobre el saldo del préstamo, ni considera ingresos de trabajo independiente, que se calculan de forma distinta a través de la declaración de autoevaluación.`,
  },
  formula: {
    formula: "Pago Anual = (Ingreso − Umbral del Plan) × Tasa de Pago",
    variables: [
      { symbol: "Umbral del Plan", meaning: "El ingreso mínimo anual a partir del cual comienzas a pagar tu préstamo, distinto para cada plan" },
      { symbol: "Tasa de Pago", meaning: "El porcentaje aplicado al ingreso por encima del umbral, generalmente 9% (o 6% adicional para préstamos de posgrado)" },
    ],
    explanation: "Se resta el umbral correspondiente a tu plan de tu salario anual, y el excedente se multiplica por la tasa de pago (generalmente 9%) para obtener tu pago anual; ese monto se divide entre 12 para obtener tu pago mensual.",
    interpretation: "Por ejemplo, con un salario de £35,000 en Plan 2 (umbral aproximado de £28,470), el excedente de £6,530 se gravaría al 9%, resultando en un pago anual de aproximadamente £588.",
  },
  steps: [
    "Ingresa tu salario anual bruto.",
    "Selecciona tu plan de préstamo estudiantil (Plan 1, 2, 4, 5 o Posgrado).",
    "Haz clic en Calcular para ver tu pago mensual, anual, umbral y tasa de pago.",
  ],
  examples: [
    { inputs: "Salario: £35,000, Plan 2", result: "Pago Mensual: ~£49", explanation: "Un graduado con ingreso moderado en Plan 2, el plan más común para estudiantes en Inglaterra/Gales entre 2012-2023." },
    { inputs: "Salario: £25,000, Plan 1", result: "Pago Mensual: bajo o £0 según el umbral vigente", explanation: "El Plan 1 tiene un umbral generalmente más bajo, pero un ingreso de £25,000 puede estar cerca del umbral." },
    { inputs: "Salario: £45,000, Plan 2 + Posgrado", result: "Pago Mensual combinado más alto", explanation: "Quienes tienen tanto un préstamo de pregrado como de posgrado pagan ambos simultáneamente sobre sus respectivos umbrales." },
  ],
  practicalUses: [
    "Estimar cuánto se deducirá de tu salario cada mes por tu préstamo estudiantil",
    "Comparar el impacto de distintos planes de préstamo en tu pago neto",
    "Planear tu presupuesto mensual considerando esta deducción automática",
    "Verificar que tu empleador esté deduciendo el monto correcto de tu nómina",
    "Entender cuánto tiempo podría tomar pagar tu préstamo según tu ingreso actual",
  ],
  expertTips: [
    "Tu plan de préstamo depende de cuándo y dónde estudiaste — verifica tu plan exacto en tu cuenta del Student Loans Company si no estás seguro.",
    "Los préstamos estudiantiles del Reino Unido generalmente se cancelan después de un número determinado de años (25-40 según el plan), independientemente del saldo restante.",
    "Si tienes tanto un préstamo de pregrado como de posgrado, ambos se pagan simultáneamente sobre sus umbrales respectivos, aumentando tu deducción total.",
    "El pago se calcula sobre el ingreso, no sobre el saldo del préstamo, por lo que aumentar tu salario aumenta directamente tu pago mensual.",
  ],
  commonMistakes: [
    { mistake: "No saber en qué plan de préstamo estudiantil estás", fix: "Verifica tu plan exacto en tu cuenta del Student Loans Company (SLC), ya que determina el umbral y la tasa aplicable a tu caso." },
    { mistake: "Confundir el pago mensual con el interés acumulado en el préstamo", fix: "El pago mensual reduce tu saldo, pero el préstamo también acumula interés por separado, que esta calculadora no incluye." },
    { mistake: "Olvidar que un préstamo de posgrado se paga por separado del de pregrado", fix: "Si tienes ambos tipos de préstamo, se calculan y suman independientemente, cada uno con su propio umbral." },
  ],
  faq: [
    { q: "¿Cómo se calcula el pago de mi préstamo estudiantil del Reino Unido?", a: "Se resta el umbral correspondiente a tu plan de tu salario anual, y el excedente se multiplica por la tasa de pago (generalmente 9%) para obtener el pago anual." },
    { q: "¿Cuál es la diferencia entre Plan 1, Plan 2, Plan 4 y Plan 5?", a: "Cada plan corresponde a un período y región de estudio distinto, con umbrales de ingreso diferentes a partir de los cuales comienzas a pagar." },
    { q: "¿Cómo sé en qué plan de préstamo estudiantil estoy?", a: "Puedes verificarlo en tu cuenta del Student Loans Company (SLC), que indica el plan exacto asignado según cuándo y dónde estudiaste." },
    { q: "¿Qué es el Plan 4 de préstamo estudiantil?", a: "Es el plan aplicable a estudiantes que estudiaron en Escocia, con su propio umbral de ingreso distinto a los planes de Inglaterra y Gales." },
    { q: "¿Los préstamos de posgrado se pagan diferente a los de pregrado?", a: "Sí, tienen su propio umbral y tasa de pago (generalmente 6%), y se pagan simultáneamente si también tienes un préstamo de pregrado activo." },
    { q: "¿Mi préstamo estudiantil se cancela algún día?", a: "Sí, los préstamos estudiantiles del Reino Unido se cancelan después de un número determinado de años (generalmente entre 25 y 40 según el plan), independientemente del saldo restante." },
    { q: "¿El pago del préstamo estudiantil se deduce automáticamente de mi salario?", a: "Sí, se deduce automáticamente vía nómina (PAYE) por tu empleador, similar al Impuesto sobre la Renta y el Seguro Nacional." },
    { q: "¿Qué pasa si mi ingreso está por debajo del umbral de mi plan?", a: "No pagas nada ese mes o año, ya que el pago solo se calcula sobre el ingreso que supera el umbral de tu plan específico." },
    { q: "¿Puedo pagar mi préstamo estudiantil más rápido voluntariamente?", a: "Sí, puedes hacer pagos adicionales voluntarios directamente al Student Loans Company, aunque para muchos graduados no es matemáticamente ventajoso debido a la cancelación automática." },
    { q: "¿Los trabajadores independientes pagan el préstamo estudiantil igual?", a: "No exactamente; los autónomos calculan y pagan su préstamo estudiantil a través de su declaración de autoevaluación anual, no vía nómina automática." },
    { q: "¿Esta calculadora incluye el interés acumulado en mi préstamo?", a: "No, esta calculadora solo estima tu pago mensual/anual basado en tu ingreso; el interés acumulado sobre el saldo total se calcula por separado." },
  ],
  relatedCalculators: ["Calculadora de Sueldo Neto Reino Unido", "Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Seguro Nacional", "Calculadora de Pensión Reino Unido"],
  youMayLike: pickYouMayLike("uk-student-loan-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Préstamo Estudiantil del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};