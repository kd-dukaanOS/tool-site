// src/data/calculators/es/uk-take-home-pay-calculator.ts
// NOTE: real slug is "uk-take-home-pay-calculator" (tools_sorted.js), not "uk-take-home-pay"
import { pickYouMayLike } from "../../calculator-pool";

export const ukTakeHomePayCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Salario Neto Reino Unido 2026/27",
    metaDescription: "Calcula tu salario neto del Reino Unido después del Impuesto sobre la Renta y el Seguro Nacional. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/uk-take-home-pay-calculator",
    ogTitle: "Calculadora de Salario Neto Reino Unido",
    ogDescription: "Descubre cuánto recibirás realmente después de impuestos en el Reino Unido.",
    twitterTitle: "Calculadora Salario Neto UK 2026/27",
    twitterDescription: "Calcula tu salario neto del Reino Unido al instante.",
  },
  hero: {
    text: "La Calculadora de Salario Neto del Reino Unido estima cuánto recibes realmente después de descontar el Impuesto sobre la Renta y el Seguro Nacional, usando las tasas de Inglaterra, Gales e Irlanda del Norte.",
  },
  about: {
    text: `Tu salario bruto en el Reino Unido se reduce por dos deducciones principales: el Impuesto sobre la Renta (Income Tax) y el Seguro Nacional (National Insurance), ambos calculados según tramos progresivos sobre tu ingreso.

Esta calculadora aplica los tramos de Impuesto sobre la Renta y las tasas de Seguro Nacional vigentes para Inglaterra, Gales e Irlanda del Norte a tu salario bruto anual, mostrando tu pago neto anual, mensual y semanal, junto con el total de deducciones.

Limitaciones: los resultados son estimaciones basadas en tramos fiscales estándar; no incluyen contribuciones a pensión, préstamos estudiantiles, beneficios en especie, ni la reducción de la Asignación Personal por encima de £100,000.`,
  },
  formula: {
    formula: "Salario Neto = Salario Bruto − Impuesto sobre la Renta − Seguro Nacional",
    variables: [
      { symbol: "Impuesto sobre la Renta", meaning: "Calculado aplicando los tramos progresivos de Inglaterra/Gales/NI después de la Asignación Personal" },
      { symbol: "Seguro Nacional", meaning: "Contribución obligatoria calculada sobre los ingresos que superan el umbral primario" },
    ],
    explanation: "El salario bruto anual se somete a los tramos de Impuesto sobre la Renta y a las tasas de Seguro Nacional, y se restan ambos montos del salario bruto para obtener el salario neto anual, que luego se divide para obtener los montos mensual y semanal.",
    interpretation: "Por ejemplo, un salario bruto de £35,000 puede resultar en un salario neto aproximado de £28,000-£29,000 anuales, dependiendo de los tramos vigentes del año fiscal.",
  },
  steps: [
    "Ingresa tu salario bruto anual en libras esterlinas.",
    "Haz clic en Calcular.",
    "Revisa tu pago neto anual, mensual y semanal, junto con el total de deducciones.",
  ],
  examples: [
    { inputs: "Salario Bruto: £30,000", result: "Salario Neto Anual: ~£24,500", explanation: "Un trabajador de tiempo completo con ingreso promedio en el Reino Unido." },
    { inputs: "Salario Bruto: £50,000", result: "Salario Neto Anual: ~£38,000", explanation: "Un salario que entra parcialmente en el tramo de tasa alta del Impuesto sobre la Renta." },
    { inputs: "Salario Bruto: £22,000", result: "Salario Neto Anual: ~£19,500", explanation: "Un ingreso de nivel inicial con deducciones relativamente bajas." },
  ],
  practicalUses: [
    "Comparar tu salario neto real antes de aceptar una oferta de trabajo",
    "Planear tu presupuesto mensual con base en tu pago neto real, no el bruto",
    "Entender cuánto se destina a Impuesto sobre la Renta y Seguro Nacional cada año",
    "Estimar tu pago semanal para organizar gastos recurrentes",
    "Verificar que tu nómina esté calculando correctamente tus deducciones",
  ],
  expertTips: [
    "El Seguro Nacional tiene un umbral primario distinto al de la Asignación Personal del Impuesto sobre la Renta — ambos se calculan de forma independiente.",
    "Contribuir a una pensión mediante sacrificio salarial reduce tu salario gravable, potencialmente aumentando tu salario neto efectivo.",
    "Si tienes un préstamo estudiantil activo, esa deducción adicional no está incluida en esta calculadora — súmala usando la Calculadora de Préstamo Estudiantil.",
    "Revisa siempre tu recibo de pago (payslip) real, ya que puede incluir beneficios en especie o deducciones adicionales no reflejadas aquí.",
  ],
  commonMistakes: [
    { mistake: "Comparar ofertas de trabajo usando solo el salario bruto", fix: "Compara siempre el salario neto estimado, ya que las deducciones pueden variar según tu situación fiscal específica." },
    { mistake: "Olvidar que el préstamo estudiantil es una deducción adicional", fix: "Si tienes un préstamo estudiantil activo, esa deducción se suma aparte del Impuesto sobre la Renta y el Seguro Nacional." },
    { mistake: "No considerar la reducción de la Asignación Personal en ingresos altos", fix: "Si ganas más de £100,000, tu Asignación Personal se reduce gradualmente, lo que esta calculadora no modela automáticamente." },
  ],
  faq: [
    { q: "¿Cómo se calcula el salario neto en el Reino Unido?", a: "Se restan el Impuesto sobre la Renta y el Seguro Nacional del salario bruto anual, usando los tramos y tasas vigentes para Inglaterra, Gales e Irlanda del Norte." },
    { q: "¿Cuál es la diferencia entre salario bruto y salario neto?", a: "El salario bruto es el total antes de deducciones; el salario neto es lo que realmente recibes después de Impuesto sobre la Renta y Seguro Nacional." },
    { q: "¿Cuánto es el salario neto de £35,000 en el Reino Unido?", a: "Aproximadamente £28,000-£29,000 anuales después de Impuesto sobre la Renta y Seguro Nacional, según los tramos vigentes del año fiscal." },
    { q: "¿Esta calculadora incluye préstamos estudiantiles?", a: "No, esta calculadora solo incluye Impuesto sobre la Renta y Seguro Nacional; usa la Calculadora de Préstamo Estudiantil por separado para esa deducción adicional." },
    { q: "¿El Seguro Nacional se calcula igual que el Impuesto sobre la Renta?", a: "No, tienen umbrales y tasas distintos; el Seguro Nacional se calcula sobre un umbral primario diferente a la Asignación Personal del Impuesto sobre la Renta." },
    { q: "¿Cómo afecta contribuir a una pensión a mi salario neto?", a: "Las contribuciones mediante sacrificio salarial reducen tu ingreso gravable, lo que puede disminuir el Impuesto sobre la Renta y el Seguro Nacional retenidos." },
    { q: "¿Esta calculadora aplica a Escocia?", a: "No exactamente; Escocia tiene tramos de Impuesto sobre la Renta distintos, por lo que el resultado puede no ser preciso para residentes escoceses." },
    { q: "¿Qué pasa si gano más de £100,000 al año?", a: "Tu Asignación Personal se reduce gradualmente por encima de £100,000, lo que esta calculadora no modela automáticamente; tu salario neto real puede ser ligeramente menor." },
    { q: "¿Por qué mi salario neto real es distinto al de esta calculadora?", a: "Los resultados son estimaciones; tu nómina real puede incluir préstamos estudiantiles, contribuciones a pensión, o beneficios en especie que cambian el monto exacto." },
    { q: "¿Cómo calculo mi pago semanal a partir del salario anual?", a: "Divide tu salario neto anual entre 52 (número de semanas en un año) para obtener el estimado de tu pago semanal." },
  ],
  relatedCalculators: ["Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Seguro Nacional", "Calculadora de Préstamo Estudiantil", "Calculadora de Pensión Reino Unido"],
  youMayLike: pickYouMayLike("uk-take-home-pay-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Salario Neto del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};