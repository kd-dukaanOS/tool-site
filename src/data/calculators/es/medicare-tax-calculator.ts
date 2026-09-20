// src/data/calculators/es/medicare-tax-calculator.ts
// NOTE: real slug is "medicare-tax-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const medicareTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto Medicare 2026",
    metaDescription: "Calcula tu Impuesto Medicare regular y el Impuesto Medicare Adicional del 0.9% para 2026. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/medicare-tax-calculator",
    ogTitle: "Calculadora de Impuesto Medicare",
    ogDescription: "Calcula tu Impuesto Medicare total según tu salario y estado civil tributario.",
    twitterTitle: "Calculadora de Impuesto Medicare 2026",
    twitterDescription: "Calcula tu Impuesto Medicare regular y adicional al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto Medicare calcula tu Impuesto Medicare regular (1.45% o 2.9%) más el Impuesto Medicare Adicional del 0.9% si tus ingresos superan el umbral del IRS para 2026.",
  },
  about: {
    text: `El Impuesto Medicare es un impuesto federal de nómina en Estados Unidos que financia el programa de salud Medicare, y se aplica tanto a empleados como a trabajadores independientes sobre sus salarios o ingresos netos.

Esta calculadora recibe tu salario anual o ingresos netos, tu estado civil tributario y tu tipo de empleo (empleado o trabajador independiente), y calcula el Impuesto Medicare regular más el Impuesto Medicare Adicional del 0.9% si tus ingresos superan el umbral correspondiente a tu estado civil.

Limitaciones: los umbrales del Impuesto Medicare Adicional no se ajustan por inflación y permanecen fijos según la ley; esta calculadora usa los umbrales vigentes del IRS para 2026, pero no considera otras deducciones o créditos fiscales de tu declaración completa.`,
  },
  formula: {
    formula: "Impuesto Medicare Total = (Salario × Tasa Regular) + (Exceso sobre Umbral × 0.9%)",
    variables: [
      { symbol: "Tasa Regular", meaning: "1.45% para empleados, 2.9% para trabajadores independientes (incluye la parte del empleador)" },
      { symbol: "Umbral", meaning: "$200,000 para soltero/cabeza de familia, $250,000 casados en conjunto, $125,000 casados por separado" },
    ],
    explanation: "Se aplica la tasa regular de Medicare sobre el total del salario o ingreso neto, y adicionalmente se aplica un 0.9% extra sobre la porción de ingresos que supera el umbral correspondiente a tu estado civil tributario.",
    interpretation: "Por ejemplo, un soltero con $220,000 de salario paga 1.45% sobre todo el monto, más 0.9% adicional sobre los $20,000 que exceden el umbral de $200,000.",
  },
  steps: [
    "Ingresa tu salario anual o ingresos netos.",
    "Selecciona tu estado civil tributario.",
    "Selecciona tu tipo de empleo: empleado o trabajador independiente.",
    "Haz clic en Calcular.",
    "Revisa tu Impuesto Medicare total, regular, adicional y tu umbral aplicable.",
  ],
  examples: [
    { inputs: "Salario: $220,000, Soltero, Empleado", result: "Impuesto Medicare Adicional aplicado sobre $20,000", explanation: "El umbral para soltero es $200,000; el exceso paga 0.9% extra." },
    { inputs: "Salario: $180,000, Soltero, Empleado", result: "Solo Impuesto Medicare regular (1.45%)", explanation: "Al no superar el umbral de $200,000, no aplica el impuesto adicional." },
    { inputs: "Ingresos netos: $260,000, Casado en Conjunto, Trabajador Independiente", result: "2.9% regular + 0.9% adicional sobre $10,000", explanation: "El umbral para casados en conjunto es $250,000; el trabajador independiente paga la tasa completa de 2.9%." },
  ],
  practicalUses: [
    "Estimar cuánto Impuesto Medicare pagarás este año como empleado o autónomo",
    "Planear tu declaración de impuestos si tus ingresos superan los umbrales del Impuesto Adicional",
    "Comparar el impuesto Medicare entre empleo tradicional y trabajo independiente",
    "Verificar si tu empleador está reteniendo correctamente el Impuesto Medicare Adicional",
    "Planear ingresos adicionales considerando el impacto fiscal del Impuesto Medicare",
  ],
  expertTips: [
    "El Impuesto Medicare Adicional del 0.9% no tiene un límite máximo de ingresos, a diferencia del Seguro Social; se aplica indefinidamente sobre todo el exceso.",
    "Los umbrales del Impuesto Medicare Adicional se basan en tus ingresos combinados si estás casado y declaras en conjunto, no en el ingreso individual de cada cónyuge.",
    "Los trabajadores independientes pagan la tasa completa de Medicare (2.9%) porque cubren tanto la porción del empleado como la del empleador.",
    "Si tienes múltiples empleadores, cada uno retiene el Impuesto Medicare Adicional solo si tu salario con ese empleador específico supera $200,000, sin considerar tus otros ingresos.",
  ],
  commonMistakes: [
    { mistake: "Asumir que el Impuesto Medicare tiene un tope máximo como el Seguro Social", fix: "El Impuesto Medicare no tiene límite superior; se aplica sobre el 100% de tus ingresos, sin importar cuánto ganes." },
    { mistake: "Olvidar el Impuesto Medicare Adicional al superar el umbral", fix: "Si tus ingresos superan $200,000 (soltero) o $250,000 (casados en conjunto), debes considerar el 0.9% adicional sobre el exceso." },
    { mistake: "Confundir el umbral individual con el umbral combinado al estar casado", fix: "Si declaras en conjunto, el umbral de $250,000 aplica sobre el ingreso combinado de ambos cónyuges, no por separado." },
    { mistake: "No considerar la tasa más alta para trabajadores independientes", fix: "Los autónomos pagan 2.9% en lugar de 1.45%, ya que cubren tanto la parte del empleado como la del empleador." },
  ],
  faq: [
    { q: "¿Qué es el Impuesto Medicare?", a: "Es un impuesto federal de nómina en Estados Unidos que financia el programa de salud Medicare, aplicado sobre los salarios de empleados y los ingresos netos de trabajadores independientes." },
    { q: "¿Cuál es la tasa del Impuesto Medicare regular?", a: "Es 1.45% para empleados (con otro 1.45% pagado por el empleador) y 2.9% total para trabajadores independientes, que cubren ambas partes." },
    { q: "¿Qué es el Impuesto Medicare Adicional?", a: "Es un 0.9% adicional que se aplica sobre los ingresos que superan cierto umbral, dependiendo de tu estado civil tributario." },
    { q: "¿Cuál es el umbral del Impuesto Medicare Adicional para 2026?", a: "El umbral es $200,000 para soltero y cabeza de familia, $250,000 para casados declarando en conjunto, y $125,000 para casados declarando por separado." },
    { q: "¿El Impuesto Medicare tiene un límite máximo de ingresos?", a: "No, a diferencia del Seguro Social, el Impuesto Medicare se aplica sobre el 100% de tus ingresos sin ningún límite superior." },
    { q: "¿Los trabajadores independientes pagan más Impuesto Medicare que los empleados?", a: "Sí, pagan la tasa completa de 2.9% (en lugar de 1.45%) porque cubren tanto la porción del empleado como la del empleador." },
    { q: "¿Cómo afecta mi estado civil tributario al Impuesto Medicare Adicional?", a: "Tu estado civil determina el umbral de ingresos a partir del cual se aplica el 0.9% adicional, siendo más bajo para casados que declaran por separado." },
    { q: "¿Mi empleador retiene automáticamente el Impuesto Medicare Adicional?", a: "Sí, si tu salario con ese empleador específico supera $200,000, están obligados a retener el 0.9% adicional, sin considerar tus otros ingresos." },
    { q: "¿Qué pasa si tengo dos empleos y ninguno supera $200,000 individualmente?", a: "Es posible que debas pagar el Impuesto Medicare Adicional al presentar tu declaración anual si la suma de ambos ingresos supera el umbral, aunque cada empleador no lo haya retenido por separado." },
    { q: "¿El Impuesto Medicare se aplica a ingresos de inversión?", a: "El Impuesto Medicare tradicional no aplica a ingresos de inversión, pero existe un Impuesto Medicare sobre Ingresos Netos de Inversión (NIIT) del 3.8% separado que puede aplicar a ciertos ingresos pasivos." },
    { q: "¿Cómo se calcula el Impuesto Medicare para un trabajador independiente?", a: "Se aplica el 2.9% sobre los ingresos netos del negocio, más el 0.9% adicional si los ingresos superan el umbral correspondiente al estado civil tributario." },
    { q: "¿Puedo deducir el Impuesto Medicare de mis impuestos?", a: "Los trabajadores independientes pueden deducir la mitad de su Impuesto Medicare (equivalente a la porción del 'empleador') como deducción de ingresos ajustados." },
    { q: "¿Los umbrales del Impuesto Medicare Adicional cambian cada año con la inflación?", a: "No, a diferencia de otros umbrales fiscales, los umbrales del Impuesto Medicare Adicional están fijados por ley y no se ajustan automáticamente por inflación." },
    { q: "¿El Impuesto Medicare Adicional aplica igual a empleados y autónomos?", a: "Sí, el 0.9% adicional aplica de la misma forma sobre el exceso de ingresos para ambos tipos de trabajadores, aunque la tasa regular base sea distinta (1.45% vs 2.9%)." },
  ],
  relatedCalculators: ["Calculadora de Seguro Social", "Calculadora de Impuesto sobre la Renta", "Calculadora de Autoempleo", "Calculadora de Retención de Impuestos"],
  youMayLike: pickYouMayLike("medicare-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto Medicare",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};