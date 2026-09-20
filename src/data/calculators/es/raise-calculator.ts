// src/data/calculators/es/raise-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const raiseCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Aumento Salarial — Nuevo Salario e Incremento",
    metaDescription: "Calcula tu nuevo salario y el monto del aumento a partir de tu salario actual y el porcentaje de aumento. Calculadora gratis e instantánea.",
    canonicalSlug: "/es/finance/raise-calculator",
    ogTitle: "Calculadora de Aumento Salarial",
    ogDescription: "Descubre tu nuevo salario y cuánto aumentará tu pago mensual.",
    twitterTitle: "Calculadora de Aumento Salarial Gratis",
    twitterDescription: "Calcula tu nuevo salario tras un aumento, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Aumento Salarial te muestra tu nuevo salario, el monto exacto del aumento y cuánto representa en tu pago mensual — a partir de tu salario actual y el porcentaje de aumento.",
  },

  about: {
    text: `Ya sea que estés negociando un aumento, esperando confirmación de tu empleador, o simplemente quieras entender el impacto real de un porcentaje de aumento en tu bolsillo, esta calculadora convierte ese porcentaje en cifras concretas.

Ingresa tu salario anual actual y el porcentaje de aumento (recibido o solicitado) para ver de inmediato tu nuevo salario anual, el monto exacto que representa el aumento, y cómo se traduce en un incremento mensual en tu pago.

Es útil tanto para verificar que un aumento anunciado por tu empleador coincide con el porcentaje comunicado, como para calcular qué porcentaje pedir si tienes una cifra objetivo de salario en mente.`,
  },

  formula: {
    formula: "Nuevo Salario = Salario Actual × (1 + Porcentaje de Aumento / 100)",
    variables: [
      { symbol: "Monto del Aumento", meaning: "Nuevo Salario − Salario Actual" },
      { symbol: "Incremento Mensual", meaning: "Monto del Aumento ÷ 12" },
    ],
    explanation: "El porcentaje de aumento se aplica sobre tu salario actual para obtener el nuevo salario; la diferencia entre ambos es el monto del aumento, que dividido entre 12 da el incremento mensual en tu pago.",
    interpretation: "Por ejemplo, con un salario actual de $60,000 y un aumento del 5%, tu nuevo salario sería $63,000, un aumento de $3,000 al año, o $250 adicionales cada mes.",
  },

  steps: [
    "Ingresa tu salario anual actual.",
    "Ingresa el porcentaje de aumento que recibirás o solicitarás.",
    "Haz clic en Calcular.",
    "Revisa tu nuevo salario, el monto del aumento y el incremento mensual.",
  ],

  examples: [
    { inputs: "Salario Actual: $60,000, Aumento: 5%", result: "Nuevo Salario: $63,000, Aumento: $3,000/año", explanation: "Un aumento estándar anual típico en muchas empresas." },
    { inputs: "Salario Actual: $45,000, Aumento: 10%", result: "Nuevo Salario: $49,500, Aumento: $4,500/año", explanation: "Un aumento significativo, común tras una promoción." },
    { inputs: "Salario Actual: $80,000, Aumento: 3%", result: "Nuevo Salario: $82,400, Aumento: $2,400/año", explanation: "Un aumento modesto alineado con la inflación." },
  ],

  practicalUses: [
    "Verificar que un aumento anunciado coincide con el porcentaje comunicado",
    "Calcular qué porcentaje solicitar para alcanzar un salario objetivo",
    "Entender el impacto real de un aumento en tu pago mensual",
    "Comparar ofertas de aumento entre distintos escenarios de negociación",
    "Planear tu presupuesto con el incremento mensual esperado",
  ],

  expertTips: [
    "Un aumento del 3-5% suele estar alineado con ajustes anuales por costo de vida; aumentos mayores generalmente reflejan una promoción o cambio de responsabilidades.",
    "Recuerda que el incremento mensual mostrado es sobre el salario bruto — tu incremento neto después de impuestos será menor.",
    "Si estás negociando, calcula el porcentaje exacto necesario para alcanzar tu cifra objetivo antes de la conversación.",
    "Compara tu aumento porcentual con la inflación del período para saber si realmente representa una mejora en tu poder adquisitivo.",
  ],

  commonMistakes: [
    { mistake: "Confundir el monto del aumento con el nuevo salario total", fix: "El monto del aumento es solo la diferencia; tu nuevo salario total incluye tu salario anterior más ese incremento." },
    { mistake: "Olvidar que el cálculo es sobre salario bruto", fix: "Tu incremento neto en el pago será menor debido a impuestos y otras deducciones sobre el monto adicional." },
    { mistake: "No comparar el aumento porcentual con la inflación", fix: "Un aumento del 2% en un año con 4% de inflación representa en realidad una pérdida de poder adquisitivo." },
  ],

  faq: [
    { q: "¿Cómo calculo mi nuevo salario después de un aumento?", a: "Multiplica tu salario actual por (1 + el porcentaje de aumento dividido entre 100) para obtener tu nuevo salario anual." },
    { q: "¿Cómo sé cuánto representa mi aumento en mi pago mensual?", a: "Divide el monto total del aumento anual entre 12 para obtener el incremento mensual aproximado en tu pago bruto." },
    { q: "¿Qué porcentaje de aumento salarial es normal?", a: "Los aumentos anuales estándar suelen estar entre 3% y 5%, aunque aumentos por promoción o cambio de rol pueden ser considerablemente mayores." },
    { q: "¿El aumento calculado es sobre mi salario bruto o neto?", a: "Es sobre tu salario bruto; el incremento que verás realmente en tu pago neto será menor debido a impuestos y otras deducciones." },
    { q: "¿Cómo calculo qué porcentaje pedir para llegar a mi salario objetivo?", a: "Divide tu salario objetivo entre tu salario actual, resta 1, y multiplica por 100 para obtener el porcentaje de aumento necesario." },
    { q: "¿Un aumento del 5% es bueno?", a: "Depende del contexto: si está por encima de la inflación anual, representa una mejora real en tu poder adquisitivo; si está por debajo, tu salario real puede estar disminuyendo." },
  ],

  relatedCalculators: ["Calculadora de Salario Neto", "Calculadora de Tasa Efectiva de Impuestos", "Calculadora de Presupuesto", "Calculadora de Inflación"],

  youMayLike: pickYouMayLike("raise-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Aumento Salarial",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};