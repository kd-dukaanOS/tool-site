// src/data/calculators/es/roth-vs-traditional-ira-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const rothVsTraditionalIraCalculatorContent = {
  meta: {
    seoTitle: "Calculadora Roth vs Traditional IRA 2026",
    metaDescription: "Compara el valor después de impuestos entre una Roth IRA y una Traditional IRA. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/roth-vs-traditional-ira-calculator",
    ogTitle: "Calculadora Roth vs Traditional IRA",
    ogDescription: "Descubre cuál IRA te conviene más según tu situación fiscal.",
    twitterTitle: "Roth IRA vs Traditional IRA",
    twitterDescription: "Compara qué IRA te conviene más al instante.",
  },
  hero: {
    text: "La Calculadora Roth vs Traditional IRA compara el valor después de impuestos en la jubilación entre ambos tipos de cuenta, usando tus tasas de impuesto actuales y futuras esperadas.",
  },
  about: {
    text: `Elegir entre una Roth IRA y una Traditional IRA depende principalmente de si esperas pagar más o menos impuestos en el futuro comparado con tu tasa actual, ya que cada tipo de cuenta grava el dinero en un momento distinto.

Esta calculadora recibe tu año fiscal, estado civil tributario, ingreso bruto ajustado modificado (MAGI), edad, aporte anual, tasas de impuesto actual y futura estimada, tasa de retorno esperada y años para crecer, y compara el valor final después de impuestos de ambas opciones, además de verificar tu elegibilidad para aportar a una Roth IRA.

Limitaciones: esta calculadora asume que las tasas de impuesto que ingreses se mantendrán constantes; en la práctica, las leyes fiscales y tu situación personal pueden cambiar, afectando el resultado real a largo plazo.`,
  },
  formula: {
    formula: "Valor Roth = Valor Futuro del Aporte × (1 − 0) | Valor Traditional = Valor Futuro del Aporte × (1 − Tasa de Impuesto en Jubilación)",
    variables: [
      { symbol: "Tasa de Impuesto Actual", meaning: "Tu tasa marginal de impuesto hoy, aplicada al aportar a una Roth IRA (después de impuestos)" },
      { symbol: "Tasa de Impuesto en Jubilación", meaning: "Tu tasa de impuesto estimada al momento de retirar fondos de una Traditional IRA" },
    ],
    explanation: "Para la Roth IRA, el aporte ya se hizo después de impuestos, por lo que el valor futuro completo (aporte más crecimiento) está libre de impuestos al retirar; para la Traditional IRA, el aporte se hace antes de impuestos, pero el valor futuro completo se grava a la tasa de impuesto en el momento del retiro.",
    interpretation: "Por ejemplo, si esperas estar en una categoría fiscal más baja al jubilarte que ahora, la Traditional IRA generalmente resulta más ventajosa; si esperas pagar más impuestos en el futuro, la Roth IRA suele ser mejor opción.",
  },
  steps: [
    "Selecciona el año fiscal y tu estado civil tributario.",
    "Ingresa tu MAGI (ingreso bruto ajustado modificado) y tu edad.",
    "Ingresa tu aporte anual, tasa de impuesto actual y tasa de impuesto esperada en la jubilación.",
    "Ingresa tu retorno anual esperado y los años hasta la jubilación.",
    "Haz clic en Calcular para ver cuál opción resulta mejor y tu elegibilidad para Roth IRA.",
  ],
  examples: [
    { inputs: "Tasa Actual: 22%, Tasa Jubilación: 12%, Aporte: $7,000/año, 25 años", result: "Traditional IRA resulta mejor opción por la tasa futura más baja", explanation: "Cuando se espera pagar menos impuestos en la jubilación, la deducción actual de la Traditional IRA suele ganar." },
    { inputs: "Tasa Actual: 12%, Tasa Jubilación: 22%, Aporte: $7,000/año, 30 años", result: "Roth IRA resulta mejor opción por la tasa futura más alta", explanation: "Cuando se espera pagar más impuestos en el futuro, pagar impuestos ahora (Roth) resulta más ventajoso." },
    { inputs: "MAGI muy alto, Casado en Conjunto", result: "Elegibilidad Roth reducida o eliminada según el umbral de ingreso", explanation: "Ingresos altos pueden limitar o eliminar la capacidad de aportar directamente a una Roth IRA." },
  ],
  practicalUses: [
    "Decidir entre Roth IRA y Traditional IRA según tu situación fiscal actual y futura esperada",
    "Verificar si tu ingreso te permite aportar directamente a una Roth IRA",
    "Comparar el valor después de impuestos de ambas opciones a largo plazo",
    "Planear tu estrategia de jubilación considerando cambios futuros en tu categoría fiscal",
    "Evaluar el impacto de distintos años de crecimiento en la decisión Roth vs Traditional",
  ],
  expertTips: [
    "Si esperas estar en una categoría fiscal más alta al jubilarte que ahora, la Roth IRA generalmente resulta más ventajosa a largo plazo.",
    "Si esperas estar en una categoría fiscal más baja al jubilarte, la Traditional IRA suele ofrecer mayor beneficio por la deducción fiscal inmediata.",
    "Los límites de ingreso (MAGI) para aportar a una Roth IRA varían según tu estado civil tributario; verifica siempre el umbral vigente para tu situación.",
    "Considera diversificar entre ambos tipos de cuenta si tienes incertidumbre sobre tus tasas de impuesto futuras, para tener flexibilidad fiscal en la jubilación.",
  ],
  commonMistakes: [
    { mistake: "Asumir que la Roth IRA siempre es mejor opción", fix: "La mejor opción depende de si esperas pagar más o menos impuestos en el futuro; compara ambos escenarios con tus tasas específicas antes de decidir." },
    { mistake: "No verificar tu elegibilidad de ingreso para aportar a una Roth IRA", fix: "Verifica tu MAGI contra los límites de ingreso vigentes para tu estado civil tributario antes de planear aportes a una Roth IRA." },
    { mistake: "Usar la misma tasa de impuesto actual y futura sin analizar tu situación real", fix: "Considera factores como cambios de carrera, jubilación, y leyes fiscales futuras al estimar tu tasa de impuesto en la jubilación." },
    { mistake: "Ignorar la opción de diversificar entre ambos tipos de cuenta", fix: "Tener tanto Roth como Traditional IRA puede ofrecer flexibilidad fiscal, permitiendo elegir de cuál retirar según tu situación fiscal en la jubilación." },
  ],
  faq: [
    { q: "¿Cuál es la diferencia principal entre Roth IRA y Traditional IRA?", a: "En una Roth IRA aportas dinero después de impuestos pero los retiros en la jubilación son libres de impuestos; en una Traditional IRA los aportes pueden ser deducibles ahora, pero los retiros se gravan como ingreso en la jubilación." },
    { q: "¿Cómo sé si me conviene más una Roth IRA o una Traditional IRA?", a: "Depende de si esperas pagar más o menos impuestos en la jubilación comparado con tu tasa actual; si esperas pagar más en el futuro, Roth suele convenir más; si esperas pagar menos, Traditional suele ser mejor." },
    { q: "¿Qué es el MAGI y por qué importa para la Roth IRA?", a: "El MAGI (Ingreso Bruto Ajustado Modificado) determina tu elegibilidad para aportar directamente a una Roth IRA; ingresos por encima de ciertos umbrales reducen o eliminan esa capacidad." },
    { q: "¿Puedo aportar a una Roth IRA si mi ingreso es muy alto?", a: "Si tu MAGI supera el límite establecido por el IRS para tu estado civil tributario, tu elegibilidad para aportar directamente se reduce o elimina; existen estrategias alternativas como la 'Roth backdoor'." },
    { q: "¿Los aportes a una Traditional IRA siempre son deducibles de impuestos?", a: "No siempre; la deducibilidad depende de si tú (o tu cónyuge) tienen acceso a un plan de retiro laboral y de tu nivel de ingreso, según las reglas del IRS." },
    { q: "¿Cómo afecta mi edad a la comparación entre Roth y Traditional IRA?", a: "Tu edad determina cuántos años tiene tu inversión para crecer antes de la jubilación, lo cual afecta el valor final proyectado de ambas opciones." },
    { q: "¿Qué pasa si mis tasas de impuesto futuras son inciertas?", a: "En ese caso, muchos expertos recomiendan diversificar entre Roth y Traditional IRA para tener flexibilidad fiscal, sin importar cómo cambien las tasas de impuesto en el futuro." },
    { q: "¿Puedo convertir una Traditional IRA a una Roth IRA?", a: "Sí, esto se conoce como 'conversión Roth', donde pagas impuestos sobre el monto convertido ahora a cambio de crecimiento y retiros libres de impuestos en el futuro." },
    { q: "¿Cuál opción es mejor si estoy empezando mi carrera con un salario bajo?", a: "Generalmente Roth IRA, ya que probablemente estás en una categoría fiscal baja ahora y es probable que ganes más (y pagues más impuestos) en el futuro." },
    { q: "¿Cuál opción es mejor si estoy cerca de mi pico de ingresos antes de jubilarme?", a: "Generalmente Traditional IRA, ya que la deducción fiscal actual es más valiosa cuando estás en una categoría fiscal alta, y podrías pagar menos impuestos al retirar en la jubilación." },
    { q: "¿Ambas cuentas tienen el mismo límite de aporte anual?", a: "Sí, el límite de aporte anual combinado entre Roth y Traditional IRA es el mismo; si aportas a ambas, la suma total no puede exceder ese límite." },
    { q: "¿Las Traditional IRA requieren distribuciones mínimas obligatorias (RMD)?", a: "Sí, a diferencia de las Roth IRA, las Traditional IRA requieren que comiences a retirar un monto mínimo obligatorio a partir de cierta edad establecida por el IRS." },
    { q: "¿Cómo afecta el número de años hasta la jubilación a esta comparación?", a: "A mayor número de años de crecimiento, mayor es el impacto del interés compuesto, lo que puede amplificar la diferencia de valor entre Roth y Traditional según las tasas de impuesto usadas." },
    { q: "¿Puedo cambiar mi decisión entre Roth y Traditional cada año?", a: "Sí, puedes decidir cada año a cuál tipo de cuenta aportar (dentro de los límites combinados), lo que te permite ajustar tu estrategia según cambios en tu situación fiscal." },
  ],
  relatedCalculators: ["Calculadora de Roth IRA", "Calculadora de Traditional IRA", "Calculadora de 401(k)", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("roth-vs-traditional-ira-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora Roth vs Traditional IRA",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};