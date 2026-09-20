// src/data/calculators/es/quarterly-estimated-tax-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const quarterlyEstimatedTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuestos Trimestrales Estimados 2026",
    metaDescription: "Calcula tu pago trimestral de impuestos estimados para trabajadores independientes en EE.UU. Gratis.",
    canonicalSlug: "/es/finance/quarterly-estimated-tax-calculator",
    ogTitle: "Calculadora de Impuestos Trimestrales",
    ogDescription: "Calcula cuánto debes pagar de impuestos estimados cada trimestre.",
    twitterTitle: "Calculadora de Pago Trimestral de Impuestos",
    twitterDescription: "Calcula tu pago trimestral de impuestos estimados al instante.",
  },
  hero: {
    text: "La Calculadora de Impuestos Trimestrales Estimados calcula cuánto debes pagar cada trimestre al IRS si trabajas por cuenta propia o tienes ingresos sin retención automática de impuestos.",
  },
  about: {
    text: `Si trabajas por cuenta propia, eres freelancer, o tienes ingresos adicionales sin retención de impuestos, el IRS generalmente requiere que pagues impuestos estimados trimestralmente en lugar de esperar a la declaración anual.

Esta calculadora recibe tu ingreso por trabajo independiente, otros ingresos, tu estado civil tributario, el año fiscal y tu método de deducción (estándar o detallada), y calcula tu impuesto por trabajo independiente, tu impuesto federal sobre la renta, el impuesto anual total y el pago trimestral correspondiente (dividido entre 4).

Limitaciones: esta calculadora ofrece una estimación basada en las tablas fiscales federales; no incluye impuestos estatales, créditos fiscales específicos, ni situaciones fiscales complejas como ingresos de inversión o múltiples negocios.`,
  },
  formula: {
    formula: "Pago Trimestral = (Impuesto por Trabajo Independiente + Impuesto Federal sobre la Renta) / 4",
    variables: [
      { symbol: "Impuesto por Trabajo Independiente", meaning: "15.3% aproximado sobre el ingreso neto de trabajo independiente (Seguro Social + Medicare)" },
      { symbol: "Deducción Mitad de SE", meaning: "La mitad del impuesto por trabajo independiente es deducible al calcular el ingreso ajustado" },
    ],
    explanation: "Se calcula el impuesto por trabajo independiente sobre tus ganancias netas de negocio propio, se resta la mitad deducible de ese impuesto de tu ingreso total para obtener el ingreso ajustado, se calcula el impuesto federal sobre la renta sobre ese ingreso ajustado, y la suma de ambos impuestos se divide entre 4 para obtener tu pago trimestral estimado.",
    interpretation: "Por ejemplo, con $80,000 de ingreso por trabajo independiente, el impuesto anual total combinado (SE + federal) dividido entre 4 te da el monto que debes pagar cada trimestre al IRS.",
  },
  steps: [
    "Ingresa tu ingreso por trabajo independiente del año.",
    "Ingresa cualquier otro ingreso adicional (sin retención de impuestos).",
    "Selecciona tu estado civil tributario y el año fiscal.",
    "Elige entre deducción estándar o detallada (e ingresa el monto si aplica).",
    "Haz clic en Calcular para ver tu pago trimestral estimado y el desglose completo.",
  ],
  examples: [
    { inputs: "Ingreso Independiente: $80,000, Soltero, Deducción Estándar", result: "Pago trimestral estimado calculado sobre impuesto SE + federal combinado", explanation: "Un freelancer o autónomo típico con ingreso independiente como única fuente." },
    { inputs: "Ingreso Independiente: $40,000, Otro Ingreso: $20,000, Casado en Conjunto", result: "Impuesto federal calculado sobre el ingreso combinado ajustado", explanation: "Combinar ingreso independiente con otro ingreso (como un empleo parcial) afecta el cálculo total." },
    { inputs: "Ingreso Independiente: $100,000, Deducción Detallada: $15,000", result: "Impuesto federal reducido por la deducción detallada mayor a la estándar", explanation: "Usar deducción detallada puede reducir el impuesto federal si supera el monto de la deducción estándar." },
  ],
  practicalUses: [
    "Calcular cuánto debes reservar cada trimestre si trabajas por cuenta propia o eres freelancer",
    "Evitar penalizaciones del IRS por pago insuficiente de impuestos estimados",
    "Planear tu flujo de efectivo trimestral considerando tus obligaciones fiscales",
    "Comparar el impacto de usar deducción estándar vs detallada en tu pago trimestral",
    "Estimar tu carga fiscal total antes de presentar tu declaración anual",
  ],
  expertTips: [
    "El IRS generalmente requiere pagos trimestrales de impuestos estimados si esperas deber $1,000 o más al presentar tu declaración anual.",
    "Las fechas límite trimestrales típicas son mediados de abril, junio, septiembre y enero del año siguiente; verifica las fechas exactas de cada año fiscal.",
    "Puedes deducir la mitad de tu impuesto por trabajo independiente al calcular tu ingreso ajustado, lo cual reduce tu impuesto federal sobre la renta.",
    "Si tus ingresos varían mucho trimestre a trimestre, considera recalcular tu pago estimado cada trimestre en lugar de usar un monto fijo basado en una proyección anual.",
  ],
  commonMistakes: [
    { mistake: "No pagar impuestos estimados trimestrales al trabajar por cuenta propia", fix: "El IRS puede aplicar penalizaciones por pago insuficiente; calcula y paga trimestralmente si esperas deber $1,000 o más al año." },
    { mistake: "Olvidar la deducción de la mitad del impuesto por trabajo independiente", fix: "Esta deducción reduce tu ingreso ajustado antes de calcular el impuesto federal, disminuyendo tu carga fiscal total." },
    { mistake: "Confundir el impuesto por trabajo independiente con el impuesto federal sobre la renta", fix: "Son impuestos separados: el SE tax cubre Seguro Social y Medicare, mientras que el impuesto federal se calcula sobre el ingreso ajustado según las tablas del IRS." },
    { mistake: "Usar un ingreso proyectado desactualizado durante todo el año", fix: "Si tus ingresos cambian significativamente, recalcula tu pago trimestral estimado en lugar de mantener el mismo monto todo el año." },
  ],
  faq: [
    { q: "¿Quién debe pagar impuestos trimestrales estimados en Estados Unidos?", a: "Generalmente las personas que trabajan por cuenta propia, freelancers, o cualquiera con ingresos sin retención automática de impuestos que espere deber $1,000 o más al presentar su declaración anual." },
    { q: "¿Cómo se calcula el impuesto por trabajo independiente (SE tax)?", a: "Se aplica una tasa aproximada del 15.3% sobre el ingreso neto de trabajo independiente, cubriendo las contribuciones de Seguro Social y Medicare." },
    { q: "¿Cuándo son las fechas límite de los pagos trimestrales de impuestos?", a: "Generalmente son a mediados de abril, junio, septiembre y enero del año siguiente, aunque las fechas exactas pueden variar ligeramente cada año fiscal." },
    { q: "¿Qué pasa si no pago mis impuestos estimados trimestralmente?", a: "El IRS puede aplicar una penalización por pago insuficiente, incluso si pagas el monto total correcto al presentar tu declaración anual." },
    { q: "¿Puedo deducir parte de mi impuesto por trabajo independiente?", a: "Sí, puedes deducir la mitad de tu impuesto por trabajo independiente al calcular tu ingreso ajustado, lo que reduce tu impuesto federal sobre la renta." },
    { q: "¿Cómo afecta mi estado civil tributario al cálculo de impuestos trimestrales?", a: "Tu estado civil (soltero, casado en conjunto, etc.) determina las tasas de impuesto federal aplicables y el monto de tu deducción estándar." },
    { q: "¿Debo usar deducción estándar o detallada para el cálculo de impuestos trimestrales?", a: "Usa la que sea mayor entre ambas: si tus gastos deducibles detallados superan el monto de la deducción estándar, usar la detallada reduce más tu impuesto." },
    { q: "¿Cómo combino ingreso por trabajo independiente con otros ingresos en el cálculo?", a: "Se suman ambos ingresos para el impuesto federal, pero solo el ingreso por trabajo independiente está sujeto al impuesto SE (Seguro Social y Medicare)." },
    { q: "¿Qué es la tasa efectiva de impuesto en este cálculo?", a: "Es el impuesto anual total (SE + federal) dividido entre tu ingreso bruto total, expresado como porcentaje, mostrando tu carga fiscal real promedio." },
    { q: "¿Los freelancers y contratistas independientes pagan el mismo impuesto SE?", a: "Sí, cualquier persona con ingreso neto de trabajo independiente de $400 o más generalmente debe pagar el impuesto por trabajo independiente sobre esas ganancias." },
    { q: "¿Puedo ajustar mi pago trimestral si mis ingresos cambian durante el año?", a: "Sí, se recomienda recalcular tu pago estimado cada trimestre si tus ingresos varían significativamente, para evitar pagar de más o de menos." },
    { q: "¿Qué pasa si pago de más en mis impuestos trimestrales estimados?", a: "El exceso pagado se aplicará como crédito o se reembolsará al presentar tu declaración anual de impuestos." },
    { q: "¿Los impuestos estatales están incluidos en esta calculadora?", a: "No, esta calculadora solo calcula impuestos federales (SE tax e impuesto federal sobre la renta); los impuestos estatales deben calcularse por separado según tu estado." },
    { q: "¿Cómo sé si mi negocio califica para pagar impuestos trimestrales estimados?", a: "Si eres autónomo, freelancer, o recibes ingresos sin retención (como 1099) y esperas deber $1,000 o más en impuestos anuales, generalmente debes hacer pagos trimestrales." },
  ],
  relatedCalculators: ["Calculadora de Impuesto por Trabajo Independiente", "Calculadora de Impuesto Federal sobre la Renta", "Calculadora de Impuesto Medicare", "Calculadora de Retención de Impuestos"],
  youMayLike: pickYouMayLike("quarterly-estimated-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuestos Trimestrales Estimados",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};