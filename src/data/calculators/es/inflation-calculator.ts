// src/data/calculators/es/inflation-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const inflationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Inflación 2026 — Poder Adquisitivo",
    metaDescription: "Calcula cómo la inflación reduce tu poder adquisitivo con el tiempo y cuánto necesitarás en el futuro para mantener el mismo valor.",
    canonicalSlug: "/es/finance/inflation-calculator",
    ogTitle: "Calculadora de Inflación",
    ogDescription: "Descubre cuánto pierde tu dinero de poder adquisitivo con la inflación.",
    twitterTitle: "Calculadora de Inflación 2026",
    twitterDescription: "Calcula el impacto de la inflación en tu dinero al instante.",
  },
  hero: {
    text: "La Calculadora de Inflación muestra dos caras de la inflación: cuánto necesitarás en el futuro para comprar lo mismo que hoy, y cuánto valdrá realmente tu dinero actual después de varios años de inflación.",
  },
  about: {
    text: `La inflación reduce el poder adquisitivo del dinero con el tiempo: la misma cantidad de dinero compra menos bienes y servicios a medida que los precios suben.

Esta calculadora usa tu monto actual, un período de años y una tasa de inflación anual para mostrarte dos resultados complementarios: el valor futuro que necesitarías para mantener el mismo poder de compra, y cuánto valdrá en términos reales tu monto actual después de ese período.

Limitaciones: asume una tasa de inflación constante durante todo el período; la inflación real varía año a año y puede diferir significativamente de un promedio fijo.`,
  },
  formula: {
    formula: "Valor Futuro Necesario = Monto × (1 + Tasa de Inflación)^Años",
    variables: [
      { symbol: "Poder Adquisitivo Restante", meaning: "Monto actual dividido entre (1 + tasa de inflación)^años, mostrando su valor real futuro" },
      { symbol: "Poder Adquisitivo Perdido", meaning: "Porcentaje del valor original que se pierde debido a la inflación acumulada durante el período" },
    ],
    explanation: "El valor futuro necesario aumenta el monto actual por la inflación acumulada para mantener el mismo poder de compra; el poder adquisitivo restante hace el cálculo inverso, mostrando cuánto valdría hoy tu monto actual en el futuro.",
    interpretation: "Por ejemplo, $100,000 con una inflación del 6% anual durante 10 años necesitarían convertirse en aproximadamente $179,000 para mantener el mismo poder de compra, o alternativamente, esos $100,000 actuales valdrían solo cerca de $55,800 en términos reales dentro de 10 años.",
  },
  steps: [
    "Ingresa el monto actual que deseas proyectar.",
    "Ingresa el período de tiempo en años.",
    "Ingresa la tasa de inflación anual esperada.",
    "Haz clic en Calcular para ver el valor futuro necesario y el poder adquisitivo perdido.",
  ],
  examples: [
    { inputs: "Monto: $100,000, Años: 10, Inflación: 6%", result: "Valor Futuro Necesario: ~$179,000 | Poder Perdido: ~44%", explanation: "Un escenario típico de inflación moderada a largo plazo." },
    { inputs: "Monto: $50,000, Años: 5, Inflación: 4%", result: "Valor Futuro Necesario: ~$60,800 | Poder Perdido: ~18%", explanation: "Un período más corto con una tasa de inflación más baja." },
    { inputs: "Monto: $200,000, Años: 20, Inflación: 5%", result: "Valor Futuro Necesario: ~$530,700 | Poder Perdido: ~62%", explanation: "A largo plazo, incluso una inflación moderada erosiona significativamente el poder adquisitivo." },
  ],
  practicalUses: [
    "Entender cuánto necesitarás ahorrar para mantener tu poder adquisitivo actual en la jubilación",
    "Ajustar metas financieras a largo plazo considerando el efecto de la inflación",
    "Explicar por qué el dinero guardado sin invertir pierde valor con el tiempo",
    "Comparar el costo de vida futuro estimado de una meta financiera",
    "Evaluar si el rendimiento de una inversión supera la inflación esperada",
  ],
  expertTips: [
    "Para saber si una inversión realmente te hace ganar poder adquisitivo, compara su rendimiento contra la tasa de inflación, no solo contra cero.",
    "Al planear la jubilación, siempre proyecta tus gastos futuros ajustados por inflación, no en dólares de hoy.",
    "Las tasas de inflación varían por país y por período; usa el promedio histórico de largo plazo de tu país como referencia razonable.",
    "El dinero en efectivo o cuentas de bajo rendimiento pierde poder adquisitivo constantemente frente a la inflación.",
  ],
  commonMistakes: [
    { mistake: "Planear metas financieras futuras sin ajustar por inflación", fix: "Usa el valor futuro necesario de esta calculadora, no el monto en dólares de hoy, al planear metas a largo plazo." },
    { mistake: "Asumir que la inflación siempre será la misma que el año pasado", fix: "Usa un promedio histórico de largo plazo como referencia razonable, no la tasa de un solo año reciente." },
    { mistake: "Ignorar el efecto de la inflación en ahorros sin invertir", fix: "El dinero guardado sin generar rendimiento pierde poder adquisitivo constantemente frente a la inflación." },
  ],
  faq: [
    { q: "¿Cómo se calcula el impacto de la inflación en mi dinero?", a: "Se aplica la fórmula de crecimiento compuesto usando la tasa de inflación anual sobre el monto actual durante el número de años ingresado." },
    { q: "¿Qué es el poder adquisitivo?", a: "Es la cantidad de bienes y servicios que puedes comprar con una cantidad determinada de dinero; la inflación reduce el poder adquisitivo con el tiempo." },
    { q: "¿Cuánto necesitaré en el futuro para comprar lo mismo que hoy?", a: "Depende de la tasa de inflación y el número de años; esta calculadora te muestra el valor futuro exacto necesario para mantener el mismo poder de compra." },
    { q: "¿Qué tasa de inflación debo usar en esta calculadora?", a: "Usa el promedio histórico de largo plazo de tu país, disponible generalmente en el banco central o instituto de estadísticas nacional." },
    { q: "¿Cómo afecta la inflación a mis ahorros en efectivo?", a: "El dinero en efectivo pierde poder adquisitivo constantemente si no genera un rendimiento que supere la tasa de inflación." },
    { q: "¿Qué significa 'poder adquisitivo perdido' en los resultados?", a: "Es el porcentaje del valor original que tu dinero pierde en términos reales debido a la inflación acumulada durante el período ingresado." },
    { q: "¿La inflación afecta igual a todos los productos?", a: "No, distintas categorías de bienes y servicios pueden tener tasas de inflación diferentes a la tasa general; esta calculadora usa una tasa promedio única." },
    { q: "¿Cómo puedo proteger mi dinero de la inflación?", a: "Invertir en activos que históricamente superan la inflación (acciones, bienes raíces, bonos indexados) es una estrategia común, aunque conlleva riesgos distintos." },
    { q: "¿Esta calculadora sirve para planear mi jubilación?", a: "Sí, es útil para entender cuánto necesitarás ajustado por inflación al momento de jubilarte, en lugar de usar cifras de gasto actuales sin ajuste." },
    { q: "¿Qué diferencia hay entre inflación y pérdida de poder adquisitivo?", a: "La inflación es el aumento porcentual de precios; la pérdida de poder adquisitivo es el efecto resultante sobre lo que tu dinero puede comprar." },
    { q: "¿Un período de 100 años es realista para esta calculadora?", a: "No, esta calculadora limita el período a menos de 100 años, ya que proyecciones más largas pierden todo sentido práctico debido a la incertidumbre acumulada." },
    { q: "¿Cómo se relaciona la inflación con las tasas de interés de ahorro?", a: "Si la tasa de interés de tu cuenta de ahorro es menor que la inflación, tu dinero pierde poder adquisitivo real aunque el saldo nominal crezca." },
  ],
  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de Valor Futuro", "Calculadora Coast FIRE", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("inflation-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Inflación",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};