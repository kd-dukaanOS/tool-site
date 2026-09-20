// src/data/calculators/es/fd-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const fdCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Depósito Fijo (FD) — Vencimiento e Interés",
    metaDescription: "Calcula el valor de vencimiento de tu Depósito Fijo (FD), el interés total ganado y el TDS estimado. Calculadora gratis con interés compuesto.",
    canonicalSlug: "/es/finance/fd-calculator",
    ogTitle: "Calculadora de Depósito Fijo (FD)",
    ogDescription: "Descubre cuánto valdrá tu Depósito Fijo al vencimiento, incluyendo TDS estimado.",
    twitterTitle: "Calculadora de FD Gratis",
    twitterDescription: "Calcula el vencimiento de tu Depósito Fijo, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Depósito Fijo (FD) calcula el valor de vencimiento de tu depósito usando interés compuesto, además de una estimación del TDS aplicable — para que sepas exactamente cuánto recibirás al final del plazo.",
  },

  about: {
    text: `Un Depósito Fijo (FD) es un instrumento de ahorro donde depositas una suma de dinero por un plazo fijo a una tasa de interés determinada, común en bancos de India y otros países. A diferencia de una cuenta de ahorro regular, el FD ofrece una tasa de interés generalmente más alta a cambio de mantener el dinero bloqueado durante el plazo elegido.

Esta calculadora usa el monto de tu depósito, la tasa de interés anual, el plazo en años y la frecuencia de capitalización (comúnmente trimestral en la mayoría de los FD indios) para calcular el valor de vencimiento, el interés total ganado, y una estimación del TDS (impuesto retenido en la fuente).

Según las reglas fiscales generales de India, se aplica un TDS del 10% cuando el interés anualizado de tus depósitos fijos supera ₹40,000. Esta es solo una estimación — el TDS real depende de tu estado PAN, si presentaste el Formulario 15G/15H, y tu ingreso imponible total.`,
  },

  formula: {
    formula: "Valor de Vencimiento = P × (1 + R/N)^(N × T)",
    variables: [
      { symbol: "P", meaning: "Monto principal del depósito" },
      { symbol: "R", meaning: "Tasa de interés anual (como decimal)" },
      { symbol: "N", meaning: "Frecuencia de capitalización por año (comúnmente 4, trimestral)" },
      { symbol: "T", meaning: "Plazo del depósito en años" },
    ],
    explanation: "El interés compuesto se calcula capitalizando el monto del depósito según la frecuencia elegida (comúnmente trimestral) durante todo el plazo, generando un valor de vencimiento mayor que el interés simple.",
    interpretation: "Por ejemplo, un depósito de ₹100,000 al 7.5% anual con capitalización trimestral durante 5 años crece a aproximadamente ₹145,000 al vencimiento, con ₹45,000 de interés ganado.",
  },

  steps: [
    "Ingresa el monto de tu depósito.",
    "Ingresa la tasa de interés anual ofrecida por el banco.",
    "Ingresa el plazo del depósito en años.",
    "Ingresa la frecuencia de capitalización (generalmente 4 para trimestral).",
    "Haz clic en Calcular.",
    "Revisa el valor de vencimiento, el interés total, el rendimiento anual efectivo y el TDS estimado.",
  ],

  examples: [
    { inputs: "Depósito: ₹100,000, Tasa: 7.5%, Plazo: 5 años, Capitalización: Trimestral", result: "Vencimiento: ~₹145,000", explanation: "Un FD típico a mediano plazo con capitalización trimestral estándar." },
    { inputs: "Depósito: ₹500,000, Tasa: 6.8%, Plazo: 3 años, Capitalización: Trimestral", result: "Vencimiento: ~₹613,000", explanation: "Un depósito mayor donde el TDS probablemente aplique al superar el umbral de interés anual." },
    { inputs: "Depósito: ₹50,000, Tasa: 7%, Plazo: 1 año, Capitalización: Trimestral", result: "Vencimiento: ~₹53,590", explanation: "Un depósito a corto plazo con interés modesto, probablemente por debajo del umbral de TDS." },
  ],

  practicalUses: [
    "Comparar el rendimiento de distintos FD antes de invertir",
    "Estimar cuánto TDS se deducirá de tu interés anual",
    "Planear el plazo ideal según tus necesidades de liquidez",
    "Comparar el rendimiento anual efectivo entre distintas frecuencias de capitalización",
    "Verificar si tu interés anual superará el umbral de exención de TDS",
  ],

  expertTips: [
    "Si tu ingreso total está por debajo del umbral imponible, presenta el Formulario 15G (o 15H si eres mayor de 60 años) para evitar la deducción de TDS.",
    "Dividir un depósito grande en varios FD más pequeños en distintos bancos puede ayudar a mantener el interés de cada uno bajo el umbral de TDS.",
    "Una capitalización más frecuente (trimestral en vez de anual) genera un rendimiento ligeramente mayor con la misma tasa nominal.",
    "Compara el rendimiento anual efectivo, no solo la tasa nominal, al elegir entre ofertas de distintos bancos.",
    "Considera FD con opción de retiro parcial si crees que podrías necesitar liquidez antes del vencimiento.",
  ],

  commonMistakes: [
    { mistake: "Olvidar que el TDS se calcula sobre el interés anualizado, no solo el pagado", fix: "El banco puede aplicar TDS cada año fiscal, incluso si el interés no se paga hasta el vencimiento." },
    { mistake: "No presentar el Formulario 15G/15H cuando corresponde", fix: "Si tu ingreso está bajo el umbral imponible, presenta este formulario para evitar deducción de TDS." },
    { mistake: "Comparar solo la tasa nominal entre bancos", fix: "Compara el rendimiento anual efectivo, que refleja el efecto real de la frecuencia de capitalización." },
    { mistake: "Romper un FD antes de tiempo sin considerar la penalización", fix: "El retiro anticipado generalmente conlleva una penalización en la tasa de interés — verifica los términos antes de invertir." },
  ],

  faq: [
    { q: "¿Qué es un Depósito Fijo (FD)?", a: "Es un instrumento de ahorro donde depositas una suma de dinero por un plazo fijo a una tasa de interés determinada, generalmente más alta que una cuenta de ahorro regular." },
    { q: "¿Cómo se calcula el valor de vencimiento de un FD?", a: "Se calcula usando interés compuesto sobre el monto depositado, la tasa de interés anual, el plazo y la frecuencia de capitalización elegida." },
    { q: "¿Qué es el TDS en un Depósito Fijo?", a: "Es el impuesto retenido en la fuente que el banco deduce automáticamente cuando el interés anualizado de tus FD supera el umbral establecido (₹40,000 según las reglas generales de India)." },
    { q: "¿Cómo evito que me descuenten TDS de mi FD?", a: "Si tu ingreso total está por debajo del umbral imponible, puedes presentar el Formulario 15G (o 15H si tienes 60 años o más) ante el banco." },
    { q: "¿Cuál es la diferencia entre interés simple e interés compuesto en un FD?", a: "El interés compuesto capitaliza el interés ganado periódicamente (comúnmente trimestral), generando un rendimiento mayor que el interés simple calculado solo sobre el capital original." },
    { q: "¿Puedo retirar mi FD antes del vencimiento?", a: "Sí, la mayoría de los bancos permiten el retiro anticipado, pero generalmente aplican una penalización reduciendo la tasa de interés efectiva." },
    { q: "¿Con qué frecuencia se capitaliza el interés en un FD?", a: "La mayoría de los FD en India capitalizan trimestralmente, aunque algunos bancos ofrecen capitalización mensual o anual según el producto." },
    { q: "¿Es mejor un FD con capitalización trimestral o anual?", a: "Con la misma tasa nominal, una capitalización más frecuente (trimestral) genera un rendimiento anual efectivo ligeramente mayor que la capitalización anual." },
  ],

  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de RD (Depósito Recurrente)", "Calculadora de SIP", "Calculadora de Impuesto sobre la Renta"],

  youMayLike: pickYouMayLike("fd-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Depósito Fijo (FD)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};