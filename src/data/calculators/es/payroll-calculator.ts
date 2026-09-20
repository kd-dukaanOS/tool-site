// src/data/calculators/es/payroll-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const payrollCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Nómina 2026 (Salario Bruto a Neto)",
    metaDescription: "Calcula el salario neto a partir del salario base, HRA, asignaciones, PF e impuesto profesional. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/payroll-calculator",
    ogTitle: "Calculadora de Nómina",
    ogDescription: "Calcula el salario neto de un empleado a partir de su salario bruto y deducciones.",
    twitterTitle: "Calculadora de Nómina 2026",
    twitterDescription: "Calcula el salario neto al instante.",
  },
  hero: {
    text: "La Calculadora de Nómina calcula el salario bruto de un empleado sumando el salario base, HRA y otras asignaciones, y luego resta las deducciones (PF, impuesto profesional, otras) para obtener el salario neto a pagar.",
  },
  about: {
    text: `El proceso de nómina combina distintos componentes salariales (salario base, HRA, asignaciones) para calcular el salario bruto, y luego resta las deducciones obligatorias y voluntarias (Provident Fund, impuesto profesional, otras) para llegar al salario neto que recibe el empleado.

Esta calculadora suma los componentes salariales para obtener el salario bruto, calcula la deducción de PF según el porcentaje indicado, suma todas las deducciones, y resta ese total del salario bruto para mostrar el salario neto final.

Limitaciones: esta calculadora está orientada al formato de nómina usado en India (con componentes como HRA, PF e Impuesto Profesional); no incluye el cálculo automático de impuesto sobre la renta (TDS).`,
  },
  formula: {
    formula: "Salario Neto = Salario Bruto − (Deducción PF + Impuesto Profesional + Otras Deducciones)",
    variables: [
      { symbol: "Salario Bruto", meaning: "Salario base más HRA más otras asignaciones" },
      { symbol: "Deducción PF", meaning: "Porcentaje del salario base destinado obligatoriamente al Fondo de Previsión (Provident Fund)" },
    ],
    explanation: "Se suman los componentes del salario bruto (base, HRA, asignaciones), se calcula la deducción de PF como un porcentaje del salario base, y se suman todas las deducciones (PF, impuesto profesional, otras) para restarlas del salario bruto y obtener el salario neto.",
    interpretation: "Por ejemplo, con un salario base de ₹30,000, HRA de ₹12,000, asignaciones de ₹3,000 y PF del 12%, el salario bruto sería ₹45,000, con una deducción de PF de ₹3,600 más otras deducciones.",
  },
  steps: [
    "Ingresa el salario base, HRA y otras asignaciones.",
    "Ingresa el porcentaje de PF (Fondo de Previsión).",
    "Ingresa el impuesto profesional y otras deducciones.",
    "Haz clic en Calcular para ver el salario bruto, las deducciones totales y el salario neto.",
  ],
  examples: [
    { inputs: "Base: ₹30,000, HRA: ₹12,000, Asignaciones: ₹3,000, PF: 12%, Impuesto Profesional: ₹200", result: "Salario Bruto: ₹45,000 | Salario Neto: ~₹40,700", explanation: "Un empleado de nivel medio con deducciones estándar de PF e impuesto profesional." },
    { inputs: "Base: ₹50,000, HRA: ₹20,000, Asignaciones: ₹5,000, PF: 12%, Impuesto Profesional: ₹200, Otras Deducciones: ₹1,000", result: "Salario Bruto: ₹75,000 | Salario Neto: ~₹67,800", explanation: "Un empleado con salario más alto y deducciones adicionales." },
    { inputs: "Base: ₹20,000, HRA: ₹8,000, Asignaciones: ₹0, PF: 12%, Impuesto Profesional: ₹200", result: "Salario Bruto: ₹28,000 | Salario Neto: ~₹25,400", explanation: "Un empleado de nivel inicial con estructura salarial simple." },
  ],
  practicalUses: [
    "Estimar el salario neto que recibirá un empleado antes de procesar la nómina",
    "Comparar ofertas de trabajo con distintas estructuras de salario bruto",
    "Verificar que las deducciones de PF e impuesto profesional sean correctas",
    "Preparar un presupuesto de nómina para múltiples empleados",
    "Explicar a un empleado cómo se compone su salario neto a partir del bruto",
  ],
  expertTips: [
    "El PF (Provident Fund) generalmente se calcula como un porcentaje fijo del salario base, no del salario bruto total.",
    "El impuesto profesional varía según el estado en India y suele ser un monto fijo mensual, no un porcentaje.",
    "Esta calculadora no incluye el TDS (impuesto sobre la renta retenido); calcúlalo por separado según el tramo fiscal del empleado.",
    "Revisa periódicamente los porcentajes y montos de deducción, ya que pueden cambiar según regulaciones gubernamentales.",
  ],
  commonMistakes: [
    { mistake: "Calcular el PF sobre el salario bruto en lugar del salario base", fix: "El PF generalmente se calcula como un porcentaje del salario base únicamente, no de todos los componentes del salario bruto." },
    { mistake: "Olvidar incluir el impuesto profesional en las deducciones", fix: "El impuesto profesional es una deducción obligatoria en muchos estados de India y debe incluirse en el cálculo del salario neto." },
    { mistake: "Confundir salario bruto con salario neto al comparar ofertas de trabajo", fix: "Compara siempre el salario neto estimado, ya que el salario bruto no refleja lo que realmente recibirás en tu cuenta." },
  ],
  faq: [
    { q: "¿Cómo se calcula el salario neto a partir del salario bruto?", a: "Se suman los componentes del salario bruto (base, HRA, asignaciones) y se restan las deducciones (PF, impuesto profesional, otras) para obtener el salario neto." },
    { q: "¿Qué es el HRA en un recibo de nómina?", a: "HRA significa Subsidio de Alquiler de Vivienda (House Rent Allowance), un componente salarial común en India que puede tener beneficios fiscales." },
    { q: "¿Cómo se calcula la deducción de PF (Provident Fund)?", a: "Generalmente se calcula como un porcentaje fijo (comúnmente 12%) del salario base del empleado, no del salario bruto total." },
    { q: "¿Qué es el impuesto profesional?", a: "Es un impuesto estatal en India, generalmente un monto fijo mensual, que se deduce del salario del empleado según las reglas de cada estado." },
    { q: "¿Esta calculadora incluye el TDS (impuesto sobre la renta)?", a: "No, esta calculadora se enfoca en el salario bruto y deducciones estándar (PF, impuesto profesional); el TDS debe calcularse por separado según el tramo fiscal." },
    { q: "¿Qué diferencia hay entre salario bruto y salario neto?", a: "El salario bruto es la suma de todos los componentes salariales antes de deducciones; el salario neto es lo que realmente recibe el empleado después de restar todas las deducciones." },
    { q: "¿El porcentaje de PF es el mismo para todos los empleados?", a: "Generalmente es un porcentaje estándar (comúnmente 12%) del salario base, aunque puede variar según acuerdos específicos de la empresa o regulaciones." },
    { q: "¿Puedo usar esta calculadora para estructurar un salario nuevo?", a: "Sí, puedes probar distintas combinaciones de salario base, HRA y asignaciones para ver cómo afectan el salario neto final." },
    { q: "¿Qué otras deducciones se pueden incluir en la nómina?", a: "Además de PF e impuesto profesional, pueden incluirse seguros, préstamos de empresa, o contribuciones voluntarias a fondos de ahorro." },
    { q: "¿El impuesto profesional varía según el estado?", a: "Sí, en India cada estado establece sus propias reglas y montos de impuesto profesional, con algunos estados sin este impuesto." },
    { q: "¿Cómo afecta el HRA al cálculo del salario neto?", a: "El HRA se suma al salario bruto como cualquier otro componente, pero puede tener tratamiento fiscal especial que reduce el impuesto sobre la renta del empleado por separado." },
    { q: "¿Esta calculadora sirve para calcular nómina fuera de India?", a: "Está diseñada específicamente para el formato de nómina indio (con HRA, PF e impuesto profesional); otros países usan estructuras y deducciones distintas." },
  ],
  relatedCalculators: ["Calculadora de Salario", "Calculadora NPS", "Calculadora de Impuesto sobre la Renta", "Calculadora de EPF"],
  youMayLike: pickYouMayLike("payroll-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Nómina",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};