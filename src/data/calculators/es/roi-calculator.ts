// src/data/calculators/es/roi-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const roiCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de ROI — Retorno de la Inversión",
    metaDescription: "Calcula tu ROI (Retorno de la Inversión), ganancia neta y ROI anualizado a partir de tu monto invertido y valor actual. Calculadora gratis e instantánea.",
    canonicalSlug: "/es/finance/roi-calculator",
    ogTitle: "Calculadora de ROI — Retorno de la Inversión",
    ogDescription: "Descubre tu ganancia neta y porcentaje de retorno de cualquier inversión.",
    twitterTitle: "Calculadora de ROI Gratis",
    twitterDescription: "Calcula tu retorno de inversión al instante, gratis.",
  },

  hero: {
    text: "La Calculadora de ROI calcula tu ganancia neta, tu porcentaje de retorno de inversión (ROI) y, si ingresas un período de tiempo, tu ROI anualizado — a partir de cuánto invertiste y cuánto vale tu inversión hoy.",
  },

  about: {
    text: `El ROI (Return on Investment), o Retorno de la Inversión, es una de las métricas más usadas para evaluar la rentabilidad de cualquier inversión — desde acciones y bienes raíces hasta un negocio propio o una campaña de marketing.

Esta calculadora toma el monto que invertiste originalmente y el valor actual de esa inversión, para calcular tu ganancia neta en dinero y tu ROI como porcentaje. Si además ingresas el período de tiempo que ha durado la inversión, también calcula tu ROI anualizado — el retorno promedio por año, lo que permite comparar inversiones de distinta duración de forma justa.

El ROI anualizado es especialmente útil porque un ROI total del 50% en 5 años no es lo mismo que un ROI del 50% en 1 año — el retorno anualizado revela cuál inversión realmente creció más rápido.`,
  },

  formula: {
    formula: "ROI = ((Valor Actual − Monto Invertido) ÷ Monto Invertido) × 100",
    variables: [
      { symbol: "Ganancia Neta", meaning: "Valor Actual − Monto Invertido" },
      { symbol: "ROI Anualizado", meaning: "((Valor Actual ÷ Monto Invertido)^(1/Años) − 1) × 100" },
    ],
    explanation: "El ROI simple compara la ganancia o pérdida total contra el monto invertido; el ROI anualizado ajusta ese retorno total según el número de años, dando el equivalente de crecimiento compuesto anual.",
    interpretation: "Por ejemplo, con una inversión de $50,000 que hoy vale $75,000 en 3 años, la ganancia neta es $25,000, el ROI total es 50%, y el ROI anualizado es aproximadamente 14.5% por año.",
  },

  steps: [
    "Ingresa el monto que invertiste originalmente.",
    "Ingresa el valor actual de tu inversión.",
    "Opcionalmente, ingresa el período de tiempo en años para calcular el ROI anualizado.",
    "Haz clic en Calcular.",
    "Revisa tu ganancia neta, tu ROI total y tu ROI anualizado.",
  ],

  examples: [
    { inputs: "Invertido: $50,000, Valor Actual: $75,000, Años: 3", result: "Ganancia Neta: $25,000, ROI: 50%, ROI Anualizado: ~14.5%", explanation: "Una inversión sólida a mediano plazo con buen retorno compuesto anual." },
    { inputs: "Invertido: $10,000, Valor Actual: $12,000", result: "Ganancia Neta: $2,000, ROI: 20%", explanation: "Sin período de tiempo, solo se calcula el ROI total, no el anualizado." },
    { inputs: "Invertido: $20,000, Valor Actual: $18,000, Años: 2", result: "Ganancia Neta: -$2,000, ROI: -10%, ROI Anualizado: ~-5.1%", explanation: "Una inversión con pérdida, mostrando ROI y ROI anualizado negativos." },
  ],

  practicalUses: [
    "Evaluar la rentabilidad de una inversión en acciones, bienes raíces o negocio propio",
    "Comparar el rendimiento de distintas inversiones con duraciones diferentes usando el ROI anualizado",
    "Verificar si una inversión superó a otras alternativas disponibles",
    "Reportar el desempeño de una inversión de forma clara y estandarizada",
    "Decidir si mantener, vender o aumentar una inversión según su retorno actual",
  ],

  expertTips: [
    "Siempre compara el ROI anualizado, no solo el ROI total, al evaluar inversiones de distinta duración — un ROI mayor en más tiempo puede en realidad ser menos eficiente.",
    "El ROI no considera el riesgo de la inversión — dos inversiones con el mismo ROI pueden tener niveles de riesgo muy diferentes.",
    "Si tu inversión generó ingresos adicionales durante el período (dividendos, rentas), inclúyelos en el valor actual para un cálculo de ROI más preciso.",
    "El ROI anualizado asume un crecimiento compuesto constante, lo cual es una simplificación — el crecimiento real rara vez es perfectamente uniforme año a año.",
  ],

  commonMistakes: [
    { mistake: "Comparar el ROI total de inversiones con duraciones distintas", fix: "Usa el ROI anualizado para comparar de forma justa inversiones que duraron diferentes períodos de tiempo." },
    { mistake: "Olvidar incluir ingresos adicionales generados durante la inversión", fix: "Si recibiste dividendos, rentas u otros ingresos, súmalos al valor actual para reflejar el retorno real total." },
    { mistake: "No considerar el riesgo al comparar inversiones con ROI similar", fix: "Un ROI alto con mucho riesgo no siempre es preferible a un ROI moderado con bajo riesgo — evalúa ambos factores." },
    { mistake: "Confundir ROI con ROAS", fix: "El ROI considera el costo total de una inversión; el ROAS (Return on Ad Spend) se enfoca específicamente en gasto publicitario versus ingresos generados." },
  ],

  faq: [
    { q: "¿Qué es el ROI?", a: "ROI (Return on Investment) es una métrica que mide la rentabilidad de una inversión, calculada como la ganancia o pérdida dividida entre el monto invertido, expresada como porcentaje." },
    { q: "¿Cómo se calcula el ROI?", a: "Se resta el monto invertido del valor actual para obtener la ganancia neta, luego se divide esa ganancia entre el monto invertido y se multiplica por 100." },
    { q: "¿Qué es el ROI anualizado?", a: "Es el retorno promedio por año de una inversión, calculado ajustando el ROI total según el número de años que ha durado la inversión, permitiendo comparar inversiones de distinta duración." },
    { q: "¿Por qué es importante el ROI anualizado si ya tengo el ROI total?", a: "Porque un ROI total del 50% en 5 años representa un crecimiento mucho más lento que un ROI del 50% en 1 año — el ROI anualizado revela la verdadera velocidad de crecimiento." },
    { q: "¿Qué es un buen ROI?", a: "Depende del tipo de inversión y el riesgo asumido; en general, superar el retorno promedio del mercado bursátil (históricamente 7-10% anual) se considera un buen resultado para inversiones de riesgo similar." },
    { q: "¿El ROI incluye impuestos sobre la ganancia?", a: "No, el ROI calculado aquí es antes de impuestos; el retorno neto real después de impuestos sobre ganancias de capital será menor." },
    { q: "¿Cómo calculo el ROI si mi inversión generó ingresos adicionales como dividendos?", a: "Suma esos ingresos adicionales al valor actual de tu inversión antes de calcular el ROI, para reflejar el retorno total real obtenido." },
    { q: "¿Cuál es la diferencia entre ROI y ROAS?", a: "El ROI mide la rentabilidad general de cualquier inversión considerando su costo total; el ROAS se enfoca específicamente en ingresos generados por publicidad versus el gasto publicitario." },
    { q: "¿Puedo tener un ROI negativo?", a: "Sí, un ROI negativo significa que el valor actual de tu inversión es menor al monto que invertiste originalmente, indicando una pérdida." },
    { q: "¿Es necesario ingresar el período de tiempo para calcular el ROI?", a: "No, el ROI total se calcula sin necesidad del período de tiempo; el campo de años es opcional y solo se usa para calcular el ROI anualizado." },
  ],

  relatedCalculators: ["Calculadora de ROAS", "Calculadora de CAGR", "Calculadora de Interés Compuesto", "Calculadora de Punto de Equilibrio"],

  youMayLike: pickYouMayLike("roi-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de ROI",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};