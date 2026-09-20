// src/data/calculators/es/tax-withholding-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const taxWithholdingCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Retención de Impuestos W-4 2026",
    metaDescription: "Calcula la retención federal estimada de tu cheque de pago según tu W-4, frecuencia de pago y ajustes. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/tax-withholding-calculator",
    ogTitle: "Calculadora de Retención de Impuestos",
    ogDescription: "Descubre cuánto impuesto federal se retiene de cada uno de tus cheques de pago.",
    twitterTitle: "Calculadora de Retención W-4 2026",
    twitterDescription: "Calcula tu retención federal al instante.",
  },
  hero: {
    text: "La Calculadora de Retención de Impuestos estima cuánto impuesto federal se retendrá de cada cheque de pago según tu formulario W-4, estado civil tributario, frecuencia de pago y ajustes adicionales.",
  },
  about: {
    text: `El formulario W-4 que completas con tu empleador determina cuánto impuesto federal se retiene de cada cheque de pago, usando el Método de Porcentaje del IRS aplicado sobre tu salario anualizado.

Esta calculadora aplica ese método considerando tu estado civil tributario, frecuencia de pago, créditos por dependientes, otros ingresos, deducciones adicionales y retención extra voluntaria, para estimar tu retención por período de pago y anual.

Limitaciones: esta es una estimación basada en el Método de Porcentaje simplificado; tu retención real puede variar según el método exacto que use el software de nómina de tu empleador.`,
  },
  formula: {
    formula: "Retención Anual = Impuesto sobre (Salario Anualizado − Ajustes W-4)",
    variables: [
      { symbol: "Salario Anualizado", meaning: "Tu pago bruto por período multiplicado por el número de períodos de pago al año" },
      { symbol: "Retención por Cheque", meaning: "Retención anual dividida entre el número de períodos de pago, más cualquier retención extra voluntaria" },
    ],
    explanation: "Se anualiza tu pago bruto según tu frecuencia de pago, se ajusta por créditos de dependientes, otros ingresos y deducciones del W-4, se aplican los tramos de impuesto federal para obtener la retención anual, y se divide entre el número de períodos de pago para obtener la retención por cheque.",
    interpretation: "Por ejemplo, con un pago bruto quincenal de $2,500 (equivalente a $65,000 anuales) y estado civil soltero, la retención estimada por cheque podría rondar los $350-$400.",
  },
  steps: [
    "Selecciona tu estado civil tributario y frecuencia de pago.",
    "Ingresa tu pago bruto por período.",
    "Indica si tienes múltiples empleos o tu cónyuge trabaja.",
    "Ingresa tus créditos por dependientes, otros ingresos, deducciones y retención extra si aplican.",
    "Haz clic en Calcular para ver tu retención estimada por cheque y anual.",
  ],
  examples: [
    { inputs: "Pago Quincenal: $2,500, Soltero, Sin ajustes adicionales", result: "Retención por Cheque: ~$375", explanation: "Un empleado soltero con pago quincenal estándar y sin ajustes del W-4." },
    { inputs: "Pago Mensual: $6,000, Casado Conjunto, Créditos Dependientes: $4,000/año", result: "Retención por Cheque: ~$650", explanation: "Un empleado casado con dependientes que reducen su retención mensual." },
    { inputs: "Pago Semanal: $1,200, Cabeza de Familia, Retención Extra: $50/cheque", result: "Retención por Cheque: ~$180", explanation: "Un empleado que solicita retención adicional voluntaria por cada cheque." },
  ],
  practicalUses: [
    "Verificar que tu empleador esté reteniendo el monto correcto de impuestos",
    "Ajustar tu W-4 si notas que tu retención es muy alta o muy baja",
    "Planear tu presupuesto mensual sabiendo tu pago neto estimado después de retención",
    "Comparar el impacto de cambiar tu frecuencia de pago o agregar retención extra",
    "Estimar tu retención anual antes de presentar tu declaración de impuestos",
  ],
  expertTips: [
    "Si tienes múltiples empleos o tu cónyuge trabaja, marca esa opción en el W-4 para evitar retener de menos combinadamente.",
    "Agregar retención extra voluntaria por cheque es una forma sencilla de evitar deber impuestos al final del año.",
    "Revisa y actualiza tu W-4 después de eventos de vida importantes como matrimonio, nacimiento de un hijo, o cambio de trabajo.",
    "Una retención muy alta significa que prestas dinero sin intereses al gobierno; ajusta tu W-4 si prefieres más dinero disponible cada período de pago.",
  ],
  commonMistakes: [
    { mistake: "No marcar la casilla de múltiples empleos cuando aplica", fix: "Si tienes más de un empleo o tu cónyuge trabaja, esto afecta el cálculo correcto de tu retención combinada." },
    { mistake: "Olvidar actualizar el W-4 después de un cambio de vida importante", fix: "Matrimonio, hijos, o cambios de ingreso deben reflejarse en un W-4 actualizado para una retención precisa." },
    { mistake: "Confundir la retención por cheque con el impuesto total anual", fix: "La retención por cheque es solo una fracción de tu obligación fiscal anual total, calculada según tu frecuencia de pago." },
  ],
  faq: [
    { q: "¿Cómo se calcula la retención de impuestos de mi cheque de pago?", a: "Se usa el Método de Porcentaje del IRS, que anualiza tu salario según tu frecuencia de pago y aplica los tramos de impuesto federal, ajustado por tu W-4." },
    { q: "¿Qué es el formulario W-4?", a: "Es el formulario que completas con tu empleador para indicar cómo debe calcularse la retención de impuesto federal de tu salario." },
    { q: "¿Cómo afecta la frecuencia de pago a mi retención?", a: "Tu salario se anualiza según la frecuencia (semanal, quincenal, mensual) para calcular la retención anual, que luego se divide entre el número de períodos de pago." },
    { q: "¿Qué pasa si tengo múltiples empleos?", a: "Debes marcar esa opción en tu W-4 para que la retención combinada de todos tus trabajos sea suficiente para tu obligación fiscal total." },
    { q: "¿Cómo reducen los dependientes mi retención?", a: "El crédito por dependientes en tu W-4 reduce el monto de ingreso sujeto a retención, disminuyendo el impuesto retenido de cada cheque." },
    { q: "¿Qué es la retención extra voluntaria?", a: "Es un monto adicional que puedes solicitar que se retenga de cada cheque, útil si quieres evitar deber impuestos al final del año." },
    { q: "¿Por qué mi retención real es distinta a la de esta calculadora?", a: "Esta calculadora usa el Método de Porcentaje simplificado; el software de nómina de tu empleador puede usar variaciones ligeramente distintas del cálculo del IRS." },
    { q: "¿Cómo sé si mi retención actual es suficiente?", a: "Compara tu retención anual estimada con tu obligación fiscal proyectada; si hay una gran diferencia, considera ajustar tu W-4." },
    { q: "¿Debo actualizar mi W-4 cada año?", a: "No es obligatorio si tu situación no cambia, pero se recomienda revisarlo después de cambios importantes como matrimonio, hijos, o cambio de ingreso." },
    { q: "¿Esta calculadora incluye retención de impuestos estatales?", a: "No, esta calculadora solo estima la retención de impuesto federal; los impuestos estatales varían según el estado y se calculan por separado." },
    { q: "¿Qué pasa si mi otro ingreso no tiene retención?", a: "Puedes incluir ese ingreso adicional en el campo correspondiente del W-4 para que se ajuste tu retención principal y cubra la obligación total." },
    { q: "¿Cómo afecta el estado civil tributario a mi retención?", a: "Cada estado civil (soltero, casado conjunto, cabeza de familia) tiene tramos de impuesto distintos, lo que cambia directamente el monto de retención calculado." },
  ],
  relatedCalculators: ["Calculadora de Reembolso de Impuestos", "Calculadora de Sueldo Neto", "Calculadora de Impuesto sobre la Renta", "Calculadora del Crédito Tributario por Hijos"],
  youMayLike: pickYouMayLike("tax-withholding-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Retención de Impuestos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};