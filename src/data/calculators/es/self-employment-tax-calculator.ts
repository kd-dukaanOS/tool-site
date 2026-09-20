// src/data/calculators/es/self-employment-tax-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const selfEmploymentTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto por Trabajo Independiente 2026",
    metaDescription: "Calcula tu impuesto de Seguro Social y Medicare sobre ingresos por trabajo independiente. Gratis.",
    canonicalSlug: "/es/finance/self-employment-tax-calculator",
    ogTitle: "Calculadora de Impuesto por Trabajo Independiente",
    ogDescription: "Calcula tu impuesto SE (Seguro Social + Medicare) al instante.",
    twitterTitle: "Calculadora de Impuesto SE (Self-Employment)",
    twitterDescription: "Calcula tu impuesto por trabajo independiente al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto por Trabajo Independiente calcula el impuesto de Seguro Social y Medicare que debes pagar sobre tus ganancias netas de trabajo independiente, además de la mitad deducible que puedes reclamar contra el impuesto sobre la renta.",
  },
  about: {
    text: `El impuesto por trabajo independiente (SE tax) cubre las contribuciones de Seguro Social y Medicare que normalmente un empleador retiene y aporta, pero que los trabajadores independientes deben pagar completamente por su cuenta.

Esta calculadora recibe tus ganancias netas de trabajo independiente, tu estado civil tributario y el año fiscal, y calcula el impuesto de Seguro Social (12.4%), el impuesto de Medicare (2.9% más el 0.9% adicional si aplica), el impuesto total SE, y la mitad deducible que puedes reclamar al calcular tu ingreso ajustado.

Limitaciones: esta calculadora se basa en las tasas y la base salarial del Seguro Social vigentes para 2025 y 2026; no incluye deducciones de negocio que reducirían tus ganancias netas antes de calcular el impuesto SE.`,
  },
  formula: {
    formula: "Impuesto SE = (Ganancias Netas × 92.35%) × (12.4% + 2.9%)",
    variables: [
      { symbol: "92.35%", meaning: "Porcentaje de las ganancias netas sujeto al impuesto SE (ajuste estándar del IRS)" },
      { symbol: "Base Salarial del Seguro Social", meaning: "Monto máximo de ingresos sujeto al 12.4% de Seguro Social; el 2.9% de Medicare no tiene tope" },
    ],
    explanation: "Se multiplican las ganancias netas de trabajo independiente por 92.35% para obtener la base gravable del impuesto SE; luego se aplica el 12.4% de Seguro Social (hasta la base salarial anual) y el 2.9% de Medicare (sin límite), sumando ambos para obtener el impuesto SE total, del cual la mitad es deducible contra el impuesto sobre la renta.",
    interpretation: "Por ejemplo, con $60,000 de ganancias netas, la base gravable del SE tax es de $55,410, resultando en un impuesto SE total significativo, del cual la mitad puede deducirse de tu ingreso gravable.",
  },
  steps: [
    "Ingresa tus ganancias netas por trabajo independiente.",
    "Selecciona tu estado civil tributario.",
    "Selecciona el año fiscal correspondiente.",
    "Haz clic en Calcular para ver tu impuesto SE total, la mitad deducible y el desglose completo.",
  ],
  examples: [
    { inputs: "Ganancias Netas: $60,000, Soltero, Año 2026", result: "Impuesto SE calculado sobre 92.35% de las ganancias, más la mitad deducible", explanation: "Un freelancer típico con ganancias netas moderadas." },
    { inputs: "Ganancias Netas: $150,000, Casado en Conjunto", result: "Impuesto de Seguro Social limitado por la base salarial anual, Medicare sin límite", explanation: "Ingresos altos activan el tope de Seguro Social pero el impuesto de Medicare continúa aplicándose sobre el total." },
    { inputs: "Ganancias Netas: $220,000, Soltero", result: "Impuesto Medicare Adicional del 0.9% aplicado sobre el exceso del umbral", explanation: "Ingresos que superan el umbral de Medicare Adicional generan un componente extra en el cálculo." },
  ],
  practicalUses: [
    "Calcular cuánto impuesto SE debes reservar de tus ingresos como freelancer o autónomo",
    "Planear tus pagos de impuestos trimestrales estimados incluyendo el impuesto SE",
    "Calcular la deducción de la mitad del impuesto SE para reducir tu ingreso gravable",
    "Comparar el impuesto SE de distintos niveles de ingreso de trabajo independiente",
    "Entender el costo fiscal total de trabajar por cuenta propia comparado con ser empleado",
  ],
  expertTips: [
    "El 92.35% aplicado a las ganancias netas es un ajuste estándar del IRS que reconoce que un empleado no paga la porción del empleador sobre su salario completo.",
    "El límite del 12.4% de Seguro Social solo aplica hasta la base salarial anual; el 2.9% de Medicare se aplica sin límite sobre el 100% de la base gravable.",
    "Siempre puedes deducir la mitad de tu impuesto SE al calcular tu ingreso ajustado, lo que reduce tu impuesto federal sobre la renta.",
    "Si tus ganancias por trabajo independiente son altas, verifica si superas el umbral del Impuesto Medicare Adicional del 0.9%, que se suma al cálculo estándar.",
  ],
  commonMistakes: [
    { mistake: "Calcular el impuesto SE sobre el 100% de las ganancias netas en lugar del 92.35%", fix: "El IRS requiere aplicar primero el ajuste del 92.35% antes de calcular las tasas de Seguro Social y Medicare." },
    { mistake: "Olvidar la deducción de la mitad del impuesto SE", fix: "Esta deducción reduce tu ingreso ajustado bruto, disminuyendo tu impuesto federal sobre la renta; no la pases por alto al calcular tu declaración." },
    { mistake: "Asumir que el impuesto de Medicare tiene un límite máximo como el Seguro Social", fix: "El 2.9% de Medicare (más el 0.9% adicional si aplica) se aplica sin límite superior sobre toda la base gravable." },
    { mistake: "No considerar deducciones de negocio antes de calcular las ganancias netas", fix: "Resta primero tus gastos de negocio deducibles de tus ingresos brutos para obtener las ganancias netas correctas usadas en este cálculo." },
  ],
  faq: [
    { q: "¿Qué es el impuesto por trabajo independiente (SE tax)?", a: "Es el impuesto que cubre las contribuciones de Seguro Social y Medicare que los trabajadores independientes deben pagar completamente, ya que no tienen un empleador que aporte la mitad." },
    { q: "¿Cómo se calcula el impuesto SE?", a: "Se multiplican las ganancias netas por 92.35% para obtener la base gravable, y se aplica el 12.4% de Seguro Social (hasta el límite anual) más el 2.9% de Medicare (sin límite) sobre esa base." },
    { q: "¿Por qué se usa el 92.35% en lugar del 100% de las ganancias netas?", a: "Es un ajuste estándar del IRS que reconoce que un empleado tradicional no paga impuestos sobre la porción que su empleador aporta, equilibrando la carga fiscal entre empleados y trabajadores independientes." },
    { q: "¿Puedo deducir parte de mi impuesto SE?", a: "Sí, puedes deducir la mitad de tu impuesto SE total al calcular tu ingreso ajustado bruto, reduciendo así tu impuesto federal sobre la renta." },
    { q: "¿El impuesto de Seguro Social tiene un límite máximo?", a: "Sí, el 12.4% de Seguro Social solo se aplica hasta la base salarial anual establecida por la Administración del Seguro Social; el 2.9% de Medicare no tiene límite." },
    { q: "¿Qué es el Impuesto Medicare Adicional del 0.9%?", a: "Es un impuesto extra que se aplica sobre las ganancias que superan ciertos umbrales de ingreso según tu estado civil tributario, sumándose al 2.9% estándar de Medicare." },
    { q: "¿Quién debe pagar el impuesto por trabajo independiente?", a: "Cualquier persona con ganancias netas de trabajo independiente de $400 o más generalmente debe pagar el impuesto SE sobre esas ganancias." },
    { q: "¿Cómo afecta mi estado civil tributario al impuesto SE?", a: "El estado civil afecta principalmente el umbral del Impuesto Medicare Adicional del 0.9%, que varía según si declaras soltero, casado en conjunto, casado por separado, o cabeza de familia." },
    { q: "¿El impuesto SE es lo mismo que el impuesto federal sobre la renta?", a: "No, son impuestos separados: el SE tax cubre Seguro Social y Medicare, mientras que el impuesto federal sobre la renta se calcula sobre tu ingreso total ajustado según las tablas del IRS." },
    { q: "¿Cómo puedo reducir mi impuesto SE?", a: "Puedes reducir tus ganancias netas gravables maximizando las deducciones de negocio legítimas antes de calcular el impuesto SE sobre el ingreso resultante." },
    { q: "¿Necesito pagar impuesto SE si también tengo un empleo regular?", a: "Sí, el impuesto SE se calcula solo sobre tus ganancias de trabajo independiente, independientemente de si también tienes ingresos de un empleo tradicional con retención." },
    { q: "¿Cómo se relaciona el impuesto SE con los pagos trimestrales estimados?", a: "El impuesto SE forma parte del cálculo de tus pagos trimestrales estimados, junto con el impuesto federal sobre la renta, ya que no tienes retención automática como empleado." },
    { q: "¿Qué pasa si mis ganancias netas de trabajo independiente son menores a $400?", a: "Generalmente no estás obligado a pagar impuesto SE si tus ganancias netas de trabajo independiente son menores a $400 en el año fiscal." },
    { q: "¿Cómo afecta el año fiscal a los límites usados en este cálculo?", a: "La base salarial del Seguro Social y los umbrales del Impuesto Medicare Adicional pueden ajustarse cada año fiscal; esta calculadora usa las cifras vigentes para 2025 y 2026." },
  ],
  relatedCalculators: ["Calculadora de Impuestos Trimestrales Estimados", "Calculadora de Impuesto Medicare", "Calculadora de Impuesto Federal sobre la Renta", "Calculadora de Salario a Hora"],
  youMayLike: pickYouMayLike("self-employment-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto por Trabajo Independiente",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};