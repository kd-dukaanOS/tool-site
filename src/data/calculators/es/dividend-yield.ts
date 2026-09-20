// src/data/calculators/es/dividend-yield.ts
import { pickYouMayLike } from "../../calculator-pool";

export const dividendYieldCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Rendimiento de Dividendos — Yield e Ingreso Anual",
    metaDescription: "Calcula el rendimiento de dividendos de una acción, tu ingreso anual y mensual proyectado, y el rendimiento sobre costo según tu precio de compra.",
    canonicalSlug: "/es/finance/dividend-yield",
    ogTitle: "Calculadora de Rendimiento de Dividendos",
    ogDescription: "Descubre el yield de una acción y cuánto ingreso pasivo generarán tus dividendos.",
    twitterTitle: "Calculadora de Dividendos Gratis",
    twitterDescription: "Calcula el rendimiento de dividendos de tus acciones, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Rendimiento de Dividendos te muestra el yield actual de una acción, tu ingreso anual y mensual proyectado por dividendos, y tu rendimiento sobre costo si ya eres accionista — para que evalúes inversiones generadoras de ingreso.",
  },

  about: {
    text: `El rendimiento de dividendos (dividend yield) es el porcentaje que representa el dividendo anual por acción en relación al precio actual de la acción. Es una de las métricas más usadas por inversionistas que buscan ingreso pasivo a través de acciones que pagan dividendos.

Esta calculadora toma el precio actual de la acción, el dividendo anual por acción y el número de acciones que posees (o planeas comprar) para calcular tu yield, tu ingreso anual y mensual estimado, y opcionalmente tu "rendimiento sobre costo" (yield on cost) si ingresas tu precio de compra original — una métrica clave para inversionistas de largo plazo, ya que muestra el rendimiento real sobre lo que pagaste, no sobre el precio actual del mercado.

Limitaciones: esta calculadora asume que el dividendo anual se mantiene constante; no proyecta crecimiento futuro de dividendos ni considera impuestos sobre el ingreso por dividendos, que varían según tu país y tipo de cuenta de inversión.`,
  },

  formula: {
    formula: "Rendimiento de Dividendos = (Dividendo Anual por Acción ÷ Precio Actual de la Acción) × 100",
    variables: [
      { symbol: "Ingreso Anual por Dividendos", meaning: "Dividendo Anual por Acción × Número de Acciones" },
      { symbol: "Rendimiento sobre Costo", meaning: "Dividendo Anual por Acción ÷ Tu Precio de Compra Original × 100" },
    ],
    explanation: "El rendimiento de dividendos se calcula dividiendo el dividendo anual por acción entre el precio actual de mercado; el rendimiento sobre costo usa en cambio tu precio de compra original, mostrando tu rendimiento real como inversionista.",
    interpretation: "Por ejemplo, con una acción a $50, un dividendo anual de $2.00 y 100 acciones, el rendimiento de dividendos es 4%, generando $200 anuales ($16.67 mensuales); si compraste a $40, tu rendimiento sobre costo es 5%.",
  },

  steps: [
    "Ingresa el precio actual de la acción.",
    "Ingresa el dividendo anual por acción.",
    "Ingresa el número de acciones que posees o planeas comprar.",
    "Opcionalmente, ingresa tu precio de compra original para ver tu rendimiento sobre costo.",
    "Haz clic en Calcular.",
    "Revisa tu rendimiento de dividendos, ingreso anual, mensual y rendimiento sobre costo.",
  ],

  examples: [
    { inputs: "Precio: $50, Dividendo Anual: $2.00, Acciones: 100", result: "Rendimiento: 4%, Ingreso Anual: $200", explanation: "Un yield moderado, típico de acciones de valor establecidas." },
    { inputs: "Precio: $150, Dividendo Anual: $1.50, Acciones: 50", result: "Rendimiento: 1%, Ingreso Anual: $75", explanation: "Un yield bajo, común en acciones de crecimiento que reinvierten ganancias en vez de pagar dividendos altos." },
    { inputs: "Precio: $30, Dividendo Anual: $2.10, Acciones: 200, Compra: $20", result: "Rendimiento: 7%, Rendimiento sobre Costo: 10.5%", explanation: "Un inversionista de largo plazo que compró barato ve un rendimiento sobre costo mucho mayor al yield actual." },
  ],

  practicalUses: [
    "Comparar el yield de distintas acciones antes de invertir para generar ingreso pasivo",
    "Calcular cuánto ingreso mensual generarían tus dividendos actuales",
    "Ver tu rendimiento real sobre costo si compraste hace tiempo y el precio ha subido",
    "Planear cuántas acciones necesitas para alcanzar una meta de ingreso pasivo mensual",
    "Evaluar si una acción con yield muy alto podría ser una señal de alerta (yield trap)",
  ],

  expertTips: [
    "Un yield inusualmente alto (por ejemplo, más del 8-10%) puede ser señal de que el precio de la acción cayó por problemas del negocio, no necesariamente una buena oportunidad — investiga antes de invertir.",
    "El rendimiento sobre costo es más relevante que el yield actual para inversionistas que ya poseen la acción hace tiempo.",
    "Muchas empresas aumentan su dividendo anualmente; revisa el historial de crecimiento de dividendos, no solo el yield actual.",
    "Diversifica entre varias acciones que pagan dividendos en vez de concentrar tu ingreso pasivo en una sola empresa.",
    "Considera el yield después de impuestos si tus dividendos no están en una cuenta con ventajas fiscales.",
  ],

  commonMistakes: [
    { mistake: "Elegir una acción solo por tener el yield más alto", fix: "Un yield extremadamente alto puede indicar riesgo financiero de la empresa; evalúa la salud del negocio, no solo el número." },
    { mistake: "Confundir rendimiento de dividendos con rendimiento total de la inversión", fix: "El yield solo mide el ingreso por dividendos, no la ganancia o pérdida por cambios en el precio de la acción." },
    { mistake: "Asumir que el dividendo se mantendrá constante para siempre", fix: "Las empresas pueden reducir o eliminar dividendos si atraviesan dificultades financieras — no des por sentado el ingreso futuro." },
    { mistake: "Ignorar el rendimiento sobre costo al evaluar inversiones antiguas", fix: "Si compraste hace años a un precio bajo, tu rendimiento real puede ser mucho mayor al yield actual del mercado." },
  ],

  faq: [
    { q: "¿Qué es el rendimiento de dividendos (dividend yield)?", a: "Es el porcentaje que representa el dividendo anual por acción en relación al precio actual de la acción, usado para medir cuánto ingreso genera una inversión en relación a su precio." },
    { q: "¿Cómo se calcula el rendimiento de dividendos?", a: "Se divide el dividendo anual por acción entre el precio actual de la acción, y se multiplica por 100 para obtener el porcentaje." },
    { q: "¿Qué es un buen rendimiento de dividendos?", a: "Generalmente entre 2% y 6% se considera un rango saludable; yields mucho más altos pueden señalar riesgo, y yields muy bajos son comunes en acciones de crecimiento." },
    { q: "¿Cuál es la diferencia entre rendimiento de dividendos y rendimiento sobre costo?", a: "El rendimiento de dividendos usa el precio actual de mercado; el rendimiento sobre costo usa tu precio de compra original, mostrando tu rendimiento real como inversionista." },
    { q: "¿Por qué algunas acciones tienen un yield muy alto?", a: "Puede deberse a un dividendo generoso y sostenible, o a que el precio de la acción cayó por problemas financieros de la empresa — investiga la causa antes de invertir." },
    { q: "¿Los dividendos se pagan siempre en efectivo?", a: "La mayoría se pagan en efectivo, pero algunas empresas ofrecen dividendos en acciones (stock dividends) como alternativa o complemento." },
    { q: "¿Con qué frecuencia se pagan los dividendos?", a: "La mayoría de las empresas estadounidenses pagan trimestralmente, aunque algunas pagan mensual, semestral o anualmente." },
    { q: "¿Los dividendos generan impuestos?", a: "Sí, generalmente los dividendos están sujetos a impuestos, aunque la tasa exacta depende de si son dividendos calificados y de tu país y tipo de cuenta de inversión." },
    { q: "¿Puedo vivir de los dividendos de mis inversiones?", a: "Es posible con una cartera suficientemente grande generando yield estable, pero requiere un capital significativo y diversificación para ser sostenible a largo plazo." },
  ],

  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de Jubilación", "Calculadora de Rendimiento de Inversión", "Calculadora de CAGR"],

  youMayLike: pickYouMayLike("dividend-yield"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Rendimiento de Dividendos",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};