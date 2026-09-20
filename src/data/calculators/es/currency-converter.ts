// src/data/calculators/es/currency-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const currencyConverterCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Moneda en Vivo — Tipo de Cambio Actual",
    metaDescription: "Convierte entre monedas usando el tipo de cambio en vivo. Soporta USD, EUR, INR y más de 150 monedas. Gratis e instantáneo.",
    canonicalSlug: "/es/converters/currency-converter",
    ogTitle: "Convertidor de Moneda",
    ogDescription: "Convierte cualquier monto entre monedas usando el tipo de cambio actual en vivo.",
    twitterTitle: "Convertidor de Moneda en Vivo",
    twitterDescription: "Convierte entre monedas al instante con tasas actualizadas.",
  },
  hero: {
    text: "El Convertidor de Moneda transforma cualquier monto de una moneda a otra usando el tipo de cambio en vivo, mostrando también la tasa inversa.",
  },
  about: {
    text: `El tipo de cambio entre dos monedas fluctúa constantemente según los mercados financieros globales. Esta herramienta consulta una tasa de cambio actualizada en el momento de cada cálculo para darte una conversión precisa.

Ingresa el monto y los códigos de moneda de origen y destino (formato de 3 letras, como USD, EUR o MXN) para obtener el monto convertido, la tasa de cambio actual y su inversa.

Limitaciones: las tasas provienen de un proveedor externo y pueden diferir ligeramente de las tasas que ofrece tu banco o casa de cambio, que suelen incluir un margen adicional.`,
  },
  formula: {
    formula: "Monto Convertido = Monto × Tipo de Cambio",
    variables: [
      { symbol: "Tipo de Cambio", meaning: "Cuántas unidades de la moneda destino equivalen a una unidad de la moneda origen" },
      { symbol: "Tasa Inversa", meaning: "Cuántas unidades de la moneda origen equivalen a una unidad de la moneda destino" },
    ],
    explanation: "El monto ingresado se multiplica por el tipo de cambio actual entre la moneda de origen y la de destino para obtener el monto convertido.",
    interpretation: "Por ejemplo, si 1 USD equivale a 17.20 MXN, convertir 100 USD da como resultado 1,720 MXN.",
  },
  steps: [
    "Ingresa el monto que deseas convertir.",
    "Ingresa el código de la moneda de origen (ej. USD).",
    "Ingresa el código de la moneda de destino (ej. MXN).",
    "Haz clic en Calcular para ver el monto convertido y las tasas.",
  ],
  examples: [
    { inputs: "Monto: 100, De: USD, A: EUR", result: "≈ €92 (según tasa actual)", explanation: "Conversión típica entre dólar estadounidense y euro." },
    { inputs: "Monto: 500, De: EUR, A: INR", result: "≈ ₹45,000 (según tasa actual)", explanation: "Conversión de euros a rupias indias para un envío o compra internacional." },
  ],
  practicalUses: [
    "Calcular cuánto costará una compra internacional en tu moneda local",
    "Verificar el tipo de cambio antes de un viaje al extranjero",
    "Comparar precios de productos o servicios cotizados en distintas monedas",
    "Estimar el valor en tu moneda de un pago o factura internacional",
  ],
  expertTips: [
    "Las casas de cambio y bancos suelen aplicar un margen sobre la tasa de mercado — usa esta herramienta como referencia, no como el precio exacto que pagarás.",
    "Las tasas de cambio pueden variar varias veces al día; recalcula justo antes de una transacción importante.",
    "Para transferencias internacionales grandes, compara la tasa de esta herramienta contra la que ofrece tu banco o proveedor de remesas.",
  ],
  commonMistakes: [
    { mistake: "Asumir que el tipo de cambio de esta herramienta es igual al de tu banco", fix: "Los bancos y casas de cambio suelen aplicar un margen o comisión adicional sobre la tasa de mercado." },
    { mistake: "Usar códigos de moneda incorrectos o inventados", fix: "Usa siempre el código ISO de 3 letras correcto (USD, EUR, MXN, etc.) para evitar errores de conversión." },
    { mistake: "No verificar la fecha/hora de la tasa antes de una decisión financiera importante", fix: "Las tasas de cambio fluctúan constantemente; recalcula justo antes de confirmar una transacción." },
  ],
  faq: [
    { q: "¿Cómo convierto dólares a euros?", a: "Ingresa el monto en dólares, selecciona USD como moneda de origen y EUR como moneda de destino, y haz clic en Calcular." },
    { q: "¿De dónde provienen las tasas de cambio de esta calculadora?", a: "Las tasas se obtienen de un proveedor de datos financieros en tiempo real cada vez que realizas un cálculo." },
    { q: "¿Por qué la tasa de esta herramienta es distinta a la de mi banco?", a: "Los bancos y casas de cambio suelen aplicar un margen adicional sobre la tasa de mercado, además de posibles comisiones." },
    { q: "¿Qué es la tasa inversa en un convertidor de moneda?", a: "Es el tipo de cambio expresado en la dirección opuesta: cuántas unidades de la moneda de origen equivalen a una unidad de la moneda de destino." },
    { q: "¿Cuántas monedas soporta este convertidor?", a: "Soporta más de 150 monedas usando códigos ISO de 3 letras, incluyendo USD, EUR, MXN, INR, GBP y muchas más." },
    { q: "¿Las tasas de cambio se actualizan en tiempo real?", a: "Sí, la tasa se consulta en vivo cada vez que realizas un cálculo, reflejando el mercado del momento." },
    { q: "¿Puedo usar esta calculadora para planear un viaje al extranjero?", a: "Sí, es útil para estimar cuánto necesitarás en la moneda local antes de tu viaje, aunque el tipo de cambio real al cambiar efectivo puede variar." },
    { q: "¿Qué código de moneda debo usar para el peso mexicano?", a: "El código ISO del peso mexicano es MXN." },
    { q: "¿Esta herramienta cobra comisión por la conversión?", a: "No, esta calculadora es solo informativa y gratuita; no realiza transacciones reales ni cobra comisiones." },
    { q: "¿Puedo convertir criptomonedas con esta herramienta?", a: "No, esta calculadora está diseñada para monedas fiat tradicionales (USD, EUR, MXN, etc.), no para criptomonedas." },
    { q: "¿Qué pasa si ingreso un código de moneda inválido?", a: "La herramienta te mostrará un mensaje de error pidiéndote que ingreses un código válido de 3 letras." },
  ],
  relatedCalculators: ["Calculadora de Propina", "Calculadora de Impuesto sobre Ventas", "Convertidor de Unidades", "Calculadora de Interés Compuesto"],
  youMayLike: pickYouMayLike("currency-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Moneda",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};