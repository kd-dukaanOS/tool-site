// src/data/calculators/es/tax-refund-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const taxRefundCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Reembolso de Impuestos 2026 (EE.UU.)",
    metaDescription: "Calcula tu reembolso de impuestos federal estimado o el monto que adeudas, según tu ingreso, retenciones y créditos. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/tax-refund-calculator",
    ogTitle: "Calculadora de Reembolso de Impuestos",
    ogDescription: "Descubre si recibirás un reembolso o deberás pagar impuestos este año.",
    twitterTitle: "Calculadora de Reembolso de Impuestos 2026",
    twitterDescription: "Calcula tu reembolso o monto adeudado al instante.",
  },
  hero: {
    text: "La Calculadora de Reembolso de Impuestos estima si recibirás un reembolso o deberás pagar impuestos adicionales, comparando tu obligación fiscal calculada contra la retención y los pagos estimados que ya realizaste durante el año.",
  },
  about: {
    text: `Al final del año fiscal, tu obligación fiscal real se compara con lo que ya pagaste a través de retenciones de nómina y pagos estimados; si pagaste de más, recibes un reembolso, y si pagaste de menos, debes la diferencia al IRS.

Esta calculadora suma tu ingreso bruto y otros ingresos, resta ajustes y deducciones (estándar o detalladas) para obtener tu ingreso gravable, aplica los tramos de impuesto según tu estado civil tributario, resta créditos fiscales, y compara el resultado contra tu retención y pagos estimados.

Limitaciones: esta calculadora ofrece una estimación general; no incluye créditos fiscales específicos no ingresados manualmente, ni situaciones fiscales complejas como ingresos de trabajo independiente con impuestos de autoempleo.`,
  },
  formula: {
    formula: "Reembolso/Adeudado = (Retención + Pagos Estimados) − Obligación Fiscal",
    variables: [
      { symbol: "Ingreso Gravable", meaning: "Ingreso bruto más otros ingresos, menos ajustes y deducciones" },
      { symbol: "Obligación Fiscal", meaning: "Impuesto calculado sobre el ingreso gravable según los tramos del IRS, menos créditos fiscales" },
      { symbol: "Tasa Impositiva Efectiva", meaning: "Obligación fiscal dividida entre el ingreso bruto total, expresada en porcentaje" },
    ],
    explanation: "Se calcula el ingreso gravable restando ajustes y deducciones del ingreso total, se aplica la tabla de tramos de impuesto correspondiente al estado civil tributario para obtener la obligación fiscal, y se compara ese monto contra lo ya pagado (retención más pagos estimados) para determinar si hay reembolso o saldo adeudado.",
    interpretation: "Por ejemplo, con un ingreso bruto de $70,000, retención de $9,500 y una obligación fiscal calculada de $8,200, recibirías un reembolso estimado de $1,300.",
  },
  steps: [
    "Selecciona tu estado civil tributario e ingresa tu ingreso bruto anual.",
    "Ingresa otros ingresos y ajustes si aplican.",
    "Ingresa tus deducciones detalladas (déjalo en 0 si usarás la deducción estándar) y créditos fiscales.",
    "Ingresa el impuesto federal retenido y los pagos estimados realizados durante el año.",
    "Haz clic en Calcular para ver tu reembolso o monto adeudado estimado.",
  ],
  examples: [
    { inputs: "Ingreso Bruto: $70,000, Soltero, Retención: $9,500", result: "Reembolso Estimado: ~$1,300", explanation: "Un contribuyente que retuvo ligeramente más de lo necesario durante el año." },
    { inputs: "Ingreso Bruto: $95,000, Casado Conjunto, Retención: $7,000", result: "Monto Adeudado Estimado: ~$800", explanation: "Un contribuyente cuya retención no cubrió completamente su obligación fiscal." },
    { inputs: "Ingreso Bruto: $50,000, Cabeza de Familia, Retención: $6,500, Créditos: $2,000", result: "Reembolso Estimado: ~$2,900", explanation: "Créditos fiscales adicionales que aumentan significativamente el reembolso." },
  ],
  practicalUses: [
    "Estimar tu reembolso o monto adeudado antes de presentar tu declaración de impuestos",
    "Ajustar tu retención durante el año si notas que debes o te reembolsan demasiado",
    "Planear tu presupuesto sabiendo si recibirás un reembolso importante",
    "Comparar el impacto de distintos niveles de deducciones o créditos fiscales",
    "Verificar si tu empleador está reteniendo el monto correcto de impuestos",
  ],
  expertTips: [
    "Un reembolso grande significa que prestaste dinero sin intereses al gobierno durante el año — considera ajustar tu W-4 para tener más dinero disponible mes a mes.",
    "Si consistentemente debes impuestos, aumenta tu retención o haz pagos estimados trimestrales para evitar posibles multas.",
    "Los créditos fiscales reducen tu obligación fiscal dólar por dólar, mientras que las deducciones solo reducen tu ingreso gravable — ambos importan pero de forma distinta.",
    "Revisa tu situación fiscal después de eventos importantes de vida (matrimonio, hijos, cambio de trabajo) ya que pueden cambiar significativamente tu resultado.",
  ],
  commonMistakes: [
    { mistake: "Confundir deducciones con créditos fiscales", fix: "Las deducciones reducen tu ingreso gravable; los créditos reducen directamente el impuesto que debes — tienen impactos distintos en tu resultado." },
    { mistake: "Olvidar incluir pagos estimados trimestrales si los hiciste", fix: "Si trabajas por cuenta propia o tienes ingresos adicionales, incluye tus pagos estimados trimestrales para un cálculo preciso." },
    { mistake: "Asumir que un reembolso grande siempre es positivo", fix: "Un reembolso grande significa que tuviste menos dinero disponible durante el año; considera ajustar tu retención para optimizar tu flujo de efectivo mensual." },
  ],
  faq: [
    { q: "¿Cómo se calcula mi reembolso de impuestos?", a: "Se compara tu obligación fiscal calculada (basada en tu ingreso gravable y tramos del IRS) contra el total de impuestos ya retenidos y pagos estimados realizados durante el año." },
    { q: "¿Por qué debo impuestos en lugar de recibir un reembolso?", a: "Significa que tu retención y pagos estimados durante el año fueron menores que tu obligación fiscal real calculada al final del año." },
    { q: "¿Qué es el ingreso gravable?", a: "Es tu ingreso bruto más otros ingresos, menos ajustes y deducciones (estándar o detalladas), sobre el cual se calcula el impuesto." },
    { q: "¿Cuál es la diferencia entre deducción estándar y detallada?", a: "La deducción estándar es un monto fijo según tu estado civil tributario; la detallada suma gastos específicos deducibles, y usas la que sea mayor para reducir más tu ingreso gravable." },
    { q: "¿Cómo afectan los créditos fiscales a mi reembolso?", a: "Los créditos fiscales reducen directamente tu obligación fiscal dólar por dólar, aumentando tu reembolso o reduciendo el monto que debes." },
    { q: "¿Qué es la tasa impositiva efectiva?", a: "Es tu obligación fiscal total dividida entre tu ingreso bruto, expresada en porcentaje — representa la tasa promedio real que pagas, distinta de tu tramo marginal." },
    { q: "¿Cómo puedo aumentar mi reembolso de impuestos?", a: "Aumentando tu retención, aprovechando créditos fiscales disponibles, o maximizando deducciones detalladas si superan la deducción estándar." },
    { q: "¿Esta calculadora incluye impuestos estatales?", a: "No, esta calculadora solo estima el impuesto federal; los impuestos estatales varían según el estado y deben calcularse por separado." },
    { q: "¿Qué pasa si tengo múltiples trabajos durante el año?", a: "Debes sumar todos tus ingresos de todos los empleos y verificar que la retención combinada sea suficiente para tu obligación fiscal total." },
    { q: "¿Cómo sé si debo ajustar mi retención?", a: "Si consistentemente recibes reembolsos muy grandes o debes montos significativos, considera actualizar tu formulario W-4 con tu empleador." },
    { q: "¿Esta calculadora sirve para trabajadores independientes?", a: "Es una estimación general; los trabajadores independientes también deben considerar el impuesto de autoempleo, que esta calculadora no incluye directamente." },
    { q: "¿Cuándo debo presentar mi declaración de impuestos?", a: "La fecha límite estándar en Estados Unidos es el 15 de abril, salvo que caiga en fin de semana o feriado, en cuyo caso se extiende al siguiente día hábil." },
    { q: "¿Los resultados de esta calculadora son exactos?", a: "Son una estimación basada en la información que ingresas; tu declaración real puede variar según créditos, deducciones adicionales y reglas fiscales específicas de tu situación." },
  ],
  relatedCalculators: ["Calculadora de Retención de Impuestos (W-4)", "Calculadora de Impuesto sobre la Renta", "Calculadora del Crédito Tributario por Hijos", "Calculadora de Ganancias de Capital"],
  youMayLike: pickYouMayLike("tax-refund-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Reembolso de Impuestos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};