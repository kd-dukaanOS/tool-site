// src/data/calculators/es/investment-return-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const investmentReturnCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Retorno de Inversión (CAGR) 2026",
    metaDescription: "Calcula tu retorno anualizado real (CAGR) y ganancia total, incluyendo aportes mensuales. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/investment-return-calculator",
    ogTitle: "Calculadora de Retorno de Inversión",
    ogDescription: "Descubre tu retorno anualizado real considerando aportes periódicos.",
    twitterTitle: "Calculadora de Retorno de Inversión 2026",
    twitterDescription: "Calcula tu CAGR real al instante.",
  },
  hero: {
    text: "La Calculadora de Retorno de Inversión calcula tu ganancia total y tu retorno anualizado real (equivalente a CAGR), conciliando tu inversión inicial, tus aportes mensuales y tu saldo final.",
  },
  about: {
    text: `Muchas personas calculan mal su retorno de inversión al comparar solo el saldo inicial contra el final, sin considerar los aportes que hicieron durante el camino, lo que infla o distorsiona el resultado.

Esta calculadora resuelve tu retorno anualizado real tomando en cuenta tu inversión inicial, tus aportes mensuales regulares, el número de años invertido y tu saldo final, dándote la forma correcta de comparar el rendimiento entre distintas inversiones.

Limitaciones: asume aportes mensuales constantes durante todo el período; si tus aportes variaron significativamente año a año, el retorno anualizado calculado será una aproximación.`,
  },
  formula: {
    formula: "Retorno Anualizado = Tasa que iguala (Inversión Inicial + Aportes Compuestos) al Valor Final",
    variables: [
      { symbol: "Ganancia Total", meaning: "Valor final menos el total aportado (inversión inicial más todos los aportes mensuales)" },
      { symbol: "Retorno Total %", meaning: "Ganancia total dividida entre el total aportado, expresado en porcentaje" },
      { symbol: "Retorno Anualizado (CAGR)", meaning: "La tasa de crecimiento anual constante que, aplicada a los aportes reales, produce el valor final observado" },
    ],
    explanation: "A diferencia de un CAGR simple (que solo compara inicio y fin), esta calculadora resuelve la tasa de retorno considerando que los aportes mensuales entraron en distintos momentos, dándote una tasa anualizada que refleja verdaderamente tu rendimiento.",
    interpretation: "Por ejemplo, con $10,000 iniciales, $200 mensuales durante 10 años y un valor final de $60,000, el retorno anualizado real sería significativamente distinto de simplemente comparar $10,000 contra $60,000 sin considerar los aportes.",
  },
  steps: [
    "Ingresa tu inversión inicial.",
    "Ingresa tu aporte mensual (si aplicó durante el período).",
    "Ingresa el número de años que estuvo invertido el dinero.",
    "Ingresa el valor final de tu inversión.",
    "Haz clic en Calcular para ver tu ganancia total, retorno total % y retorno anualizado real.",
  ],
  examples: [
    { inputs: "Inversión Inicial: $10,000, Aporte Mensual: $200, Años: 10, Valor Final: $60,000", result: "Retorno Anualizado: ~9.5%", explanation: "Un inversionista que combina una suma inicial con aportes regulares durante una década." },
    { inputs: "Inversión Inicial: $50,000, Aporte Mensual: $0, Años: 5, Valor Final: $75,000", result: "Retorno Anualizado: ~8.4%", explanation: "Una inversión de suma única sin aportes adicionales durante 5 años." },
    { inputs: "Inversión Inicial: $0, Aporte Mensual: $500, Años: 15, Valor Final: $150,000", result: "Retorno Anualizado: ~5.8%", explanation: "Un ahorrador que empezó desde cero con aportes mensuales constantes." },
  ],
  practicalUses: [
    "Calcular el rendimiento real de tu portafolio considerando todos tus aportes",
    "Comparar el desempeño real de distintas cuentas de inversión de forma justa",
    "Verificar si una inversión superó realmente la inflación o un índice de referencia",
    "Reportar el rendimiento correcto de una inversión a un asesor financiero o socio",
    "Evaluar si vale la pena seguir aportando a una inversión según su rendimiento histórico",
  ],
  expertTips: [
    "Nunca compares solo el saldo inicial contra el final si hiciste aportes en el camino — eso infla artificialmente el retorno percibido.",
    "El retorno anualizado (CAGR) es la métrica correcta para comparar el desempeño de distintas inversiones con distintos horizontes de tiempo.",
    "Si tus aportes fueron irregulares, el resultado de esta calculadora es una aproximación basada en un aporte mensual constante equivalente.",
    "Compara siempre tu retorno anualizado contra la inflación del mismo período para saber si realmente ganaste poder adquisitivo.",
  ],
  commonMistakes: [
    { mistake: "Calcular el retorno comparando solo inicio y fin sin considerar aportes", fix: "Incluye siempre tus aportes mensuales en el cálculo para obtener un retorno anualizado real y no inflado." },
    { mistake: "Confundir retorno total con retorno anualizado", fix: "El retorno total es la ganancia acumulada en todo el período; el retorno anualizado es la tasa de crecimiento equivalente por año." },
    { mistake: "Comparar inversiones con distintos horizontes de tiempo usando solo el retorno total", fix: "Usa siempre el retorno anualizado (CAGR) para comparar inversiones con diferente duración de manera justa." },
  ],
  faq: [
    { q: "¿Cómo se calcula el retorno de una inversión con aportes mensuales?", a: "Se concilia la inversión inicial, los aportes mensuales realizados durante el período y el valor final para resolver la tasa de retorno anualizada real." },
    { q: "¿Qué es el retorno anualizado (CAGR)?", a: "Es la tasa de crecimiento anual constante que, aplicada consistentemente, produciría el mismo resultado final observado en tu inversión." },
    { q: "¿Por qué mi retorno calculado manualmente es distinto al de esta calculadora?", a: "Si calculaste comparando solo el saldo inicial y final sin considerar tus aportes mensuales, el resultado estará distorsionado; esta calculadora los incluye correctamente." },
    { q: "¿Qué diferencia hay entre ganancia total y retorno anualizado?", a: "La ganancia total es el monto en dólares que ganaste sobre lo aportado; el retorno anualizado es esa ganancia expresada como una tasa de crecimiento anual equivalente." },
    { q: "¿Esta calculadora funciona si no hice aportes mensuales?", a: "Sí, puedes dejar el aporte mensual en cero para calcular el retorno de una inversión de suma única sin aportes adicionales." },
    { q: "¿Cómo sé si mi inversión tuvo un buen retorno anualizado?", a: "Compara tu retorno anualizado contra promedios históricos del mercado (generalmente 6-10% para acciones a largo plazo) y contra la inflación del mismo período." },
    { q: "¿Esta calculadora considera comisiones o impuestos?", a: "No, calcula el retorno bruto basado en los montos que ingreses; las comisiones e impuestos deben considerarse por separado si quieres un retorno neto real." },
    { q: "¿Qué pasa si mis aportes mensuales variaron durante el período?", a: "Esta calculadora asume un aporte mensual constante; si tus aportes variaron mucho, el resultado será una aproximación basada en un aporte promedio equivalente." },
    { q: "¿Cómo comparo el retorno de dos inversiones con distinta duración?", a: "Usa siempre el retorno anualizado (CAGR) de cada una, ya que normaliza el rendimiento a una base anual comparable independientemente del horizonte de tiempo." },
    { q: "¿El retorno anualizado incluye el efecto del interés compuesto?", a: "Sí, el CAGR ya refleja el efecto compuesto del crecimiento a lo largo de todo el período de inversión." },
    { q: "¿Por qué es importante distinguir entre retorno total y anualizado al invertir a largo plazo?", a: "Un retorno total alto en un período muy largo puede corresponder a un retorno anualizado modesto; el anualizado te dice la verdadera tasa de crecimiento por año." },
  ],
  relatedCalculators: ["Calculadora de CAGR", "Calculadora de Interés Compuesto", "Calculadora de Valor Futuro", "Calculadora de ROI"],
  youMayLike: pickYouMayLike("investment-return-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Retorno de Inversión",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};