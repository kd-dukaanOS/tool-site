// src/data/calculators/es/uk-capital-gains-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ukCapitalGainsCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto sobre Ganancias de Capital Reino Unido 2026/27",
    metaDescription: "Calcula el CGT del Reino Unido sobre tu ganancia de capital usando la exención anual y las tasas de 18% y 24%. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/uk-capital-gains-calculator",
    ogTitle: "Calculadora de Ganancias de Capital Reino Unido",
    ogDescription: "Calcula tu impuesto sobre ganancias de capital del Reino Unido al instante.",
    twitterTitle: "Calculadora CGT Reino Unido 2026/27",
    twitterDescription: "Calcula tu CGT del Reino Unido al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto sobre Ganancias de Capital del Reino Unido aplica la exención anual de £3,000 a tu ganancia y divide el monto imponible restante entre las tasas del 18% y 24% según tu ingreso y tramo de tasa básica disponible.",
  },
  about: {
    text: `En el Reino Unido, el Impuesto sobre Ganancias de Capital (CGT) se aplica cuando vendes un activo (acciones, propiedades que no son tu vivienda principal, etc.) por más de lo que pagaste, después de aplicar la exención anual libre de impuestos.

Esta calculadora resta la exención anual de £3,000 a tu ganancia total, y divide el monto imponible restante entre las tasas del 18% (dentro de tu tramo de tasa básica) y 24% (por encima de ese tramo), según tus otros ingresos y tu Asignación Personal.

Limitaciones: las tasas de CGT sobre bienes raíces residenciales pueden diferir de las aplicadas a otros activos; verifica siempre las tasas específicas vigentes en HMRC para tu tipo de activo.`,
  },
  formula: {
    formula: "Ganancia Imponible = Ganancia Total − £3,000 (Exención Anual)",
    variables: [
      { symbol: "Tramo de Tasa Básica", meaning: "El espacio restante en tu tramo de tasa básica de impuesto sobre la renta, disponible para gravar la ganancia al 18%" },
      { symbol: "Tasa Alta (24%)", meaning: "Se aplica a la porción de la ganancia imponible que excede tu tramo de tasa básica disponible" },
    ],
    explanation: "Se resta la exención anual de £3,000 de tu ganancia total para obtener la ganancia imponible; luego, según tus otros ingresos y tu Asignación Personal, se determina cuánto de esa ganancia cae dentro del tramo de tasa básica (18%) y cuánto excede ese tramo (24%).",
    interpretation: "Por ejemplo, con una ganancia de £12,600 y otros ingresos de £20,000, después de la exención de £3,000 la ganancia imponible sería £9,600, gravada probablemente en su totalidad al 18% si aún hay espacio en el tramo básico.",
  },
  steps: [
    "Ingresa tu ganancia de capital total del año fiscal.",
    "Ingresa tus otros ingresos imponibles (salario, pensión, etc.).",
    "Ingresa tu Asignación Personal (generalmente £12,570).",
    "Haz clic en Calcular para ver tu impuesto total adeudado, ganancia imponible y desglose por tasa.",
  ],
  examples: [
    { inputs: "Ganancia: £12,600, Otros Ingresos: £20,000, Asignación: £12,570", result: "Impuesto Total: ~£1,728 (todo al 18%)", explanation: "Un contribuyente con ingreso moderado cuya ganancia cae completamente dentro del tramo básico." },
    { inputs: "Ganancia: £50,000, Otros Ingresos: £60,000, Asignación: £12,570", result: "Impuesto Total: significativamente mayor (mezcla de 18% y 24%)", explanation: "Un contribuyente con ingresos altos donde parte de la ganancia se grava a la tasa del 24%." },
    { inputs: "Ganancia: £2,000, Otros Ingresos: £15,000, Asignación: £12,570", result: "Impuesto Total: £0", explanation: "Una ganancia menor a la exención anual de £3,000 no genera impuesto." },
  ],
  practicalUses: [
    "Estimar el impuesto antes de vender acciones o una propiedad de inversión en el Reino Unido",
    "Planear la mejor fecha de venta para aprovechar la exención anual de £3,000",
    "Comparar el impacto fiscal de vender un activo en un año fiscal versus otro",
    "Entender cuánto de tu ganancia caerá en la tasa del 18% versus el 24%",
    "Calcular la ganancia neta real después de impuestos antes de reinvertir",
  ],
  expertTips: [
    "La exención anual de £3,000 se pierde si no la usas ese año fiscal — no se puede trasladar a años futuros.",
    "Si estás cerca del límite entre las tasas del 18% y 24%, considera dividir la venta de un activo entre dos años fiscales distintos.",
    "Las parejas casadas o en unión civil pueden transferir activos entre sí sin generar CGT, permitiendo usar ambas exenciones anuales.",
    "Las tasas de CGT sobre propiedades residenciales (que no sean tu vivienda principal) pueden ser distintas a las de otros activos — verifica las tasas específicas de HMRC.",
  ],
  commonMistakes: [
    { mistake: "Olvidar aplicar la exención anual antes de calcular el impuesto", fix: "Siempre resta primero la exención anual de £3,000 de tu ganancia total antes de aplicar las tasas de CGT." },
    { mistake: "Asumir que toda la ganancia se grava a la misma tasa", fix: "La ganancia imponible se divide entre las tasas del 18% y 24% según tu tramo de tasa básica disponible, no una tasa única fija." },
    { mistake: "No considerar transferir activos entre cónyuges para optimizar exenciones", fix: "Transferir activos a tu pareja antes de vender puede permitir usar dos exenciones anuales de £3,000 en lugar de una." },
  ],
  faq: [
    { q: "¿Cómo se calcula el Impuesto sobre Ganancias de Capital en el Reino Unido?", a: "Se resta la exención anual de £3,000 de tu ganancia total, y el monto imponible restante se grava al 18% o 24% según tu tramo de tasa básica disponible." },
    { q: "¿Cuál es la exención anual de CGT en el Reino Unido para 2026/27?", a: "La exención anual libre de impuestos es de £3,000 por persona para el año fiscal 2026/27." },
    { q: "¿Cuáles son las tasas de CGT en el Reino Unido?", a: "Las tasas son 18% para ganancias dentro de tu tramo de tasa básica y 24% para ganancias que exceden ese tramo, según tu ingreso total." },
    { q: "¿Qué pasa si mi ganancia es menor a la exención anual?", a: "Si tu ganancia total es menor a £3,000, no debes pagar Impuesto sobre Ganancias de Capital ese año fiscal." },
    { q: "¿Puedo trasladar la exención anual no utilizada al año siguiente?", a: "No, la exención anual de CGT no se puede trasladar; si no la usas en el año fiscal correspondiente, se pierde." },
    { q: "¿Cómo afecta mi Asignación Personal al cálculo del CGT?", a: "Tu Asignación Personal y otros ingresos determinan cuánto espacio queda en tu tramo de tasa básica, afectando cuánta ganancia se grava al 18% versus al 24%." },
    { q: "¿Las parejas casadas pueden compartir la exención de CGT?", a: "Pueden transferir activos entre sí sin generar CGT antes de la venta, permitiendo que cada uno use su propia exención anual de £3,000." },
    { q: "¿El CGT sobre propiedades residenciales es diferente al de otros activos?", a: "Sí, las propiedades residenciales que no son tu vivienda principal pueden tener tasas de CGT distintas; verifica las tasas específicas vigentes en HMRC." },
    { q: "¿Debo pagar CGT al vender mi vivienda principal?", a: "Generalmente no, gracias al alivio de Residencia Principal (Private Residence Relief), aunque existen excepciones según el uso de la propiedad." },
    { q: "¿Cómo puedo reducir mi Impuesto sobre Ganancias de Capital?", a: "Usando tu exención anual completa cada año, compensando ganancias con pérdidas de otras inversiones, o transfiriendo activos entre cónyuges antes de vender." },
    { q: "¿Esta calculadora aplica a criptomonedas?", a: "El HMRC generalmente trata las criptomonedas como activos sujetos a CGT; esta calculadora puede usarse como estimación general para ese tipo de ganancia." },
    { q: "¿Cuándo debo declarar y pagar mi CGT en el Reino Unido?", a: "Depende del tipo de activo; para propiedades residenciales generalmente tienes 60 días desde la venta, mientras que otros activos se declaran en tu declaración anual de autoevaluación." },
  ],
  relatedCalculators: ["Calculadora de Impuesto sobre Dividendos Reino Unido", "Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Pensión Reino Unido", "Calculadora de Ganancias de Capital Canadá"],
  youMayLike: pickYouMayLike("uk-capital-gains-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto sobre Ganancias de Capital del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};