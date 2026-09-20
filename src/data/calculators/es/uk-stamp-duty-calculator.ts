// src/data/calculators/es/uk-stamp-duty-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ukStampDutyCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto de Timbre (SDLT) Reino Unido 2026",
    metaDescription: "Calcula el Impuesto de Timbre (SDLT) sobre tu compra de propiedad en el Reino Unido, según tu tipo de comprador. Gratis.",
    canonicalSlug: "/es/finance/uk-stamp-duty-calculator",
    ogTitle: "Calculadora de Impuesto de Timbre",
    ogDescription: "Calcula el SDLT que pagarás al comprar una propiedad en el Reino Unido.",
    twitterTitle: "Calculadora SDLT Reino Unido 2026",
    twitterDescription: "Calcula tu impuesto de timbre al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto de Timbre (SDLT) del Reino Unido aplica progresivamente los tramos actuales a tu precio de compra, ajustando por el alivio de comprador primerizo o el recargo del 5% para propiedades adicionales.",
  },
  about: {
    text: `El Impuesto de Timbre sobre Transmisiones de Tierra (SDLT) es un impuesto que se paga al comprar una propiedad en Inglaterra e Irlanda del Norte, calculado progresivamente según tramos de precio, con reglas especiales para compradores primerizos y propiedades adicionales.

Esta calculadora aplica los tramos SDLT vigentes a tu precio de compra, ajustando el cálculo según seas un comprador estándar, un comprador primerizo (con alivio fiscal), o si estás comprando una propiedad adicional (con un recargo del 5%).

Limitaciones: esta calculadora aplica a Inglaterra e Irlanda del Norte; Escocia tiene su propio Impuesto de Transacciones de Tierra y Edificios (LBTT), y Gales tiene el Impuesto de Transacciones de Tierra (LTT), ambos con tramos distintos.`,
  },
  formula: {
    formula: "SDLT = Suma Progresiva de (Tramo de Precio × Tasa del Tramo)",
    variables: [
      { symbol: "Alivio de Comprador Primerizo", meaning: "Reduce o elimina el SDLT en los tramos iniciales de precio para compradores que nunca han sido propietarios" },
      { symbol: "Recargo del 5%", meaning: "Se suma a cada tramo si estás comprando una propiedad adicional (segunda vivienda o inversión de alquiler)" },
    ],
    explanation: "El precio de compra se divide en tramos, y cada tramo se grava a su tasa correspondiente, sumando todos los tramos para obtener el impuesto total; el tipo de comprador (primerizo, estándar, adicional) ajusta las tasas o el alivio aplicado en cada tramo.",
    interpretation: "Por ejemplo, una propiedad de £350,000 comprada por un comprador estándar generaría un SDLT calculado progresivamente sobre los tramos aplicables, mientras que el mismo precio para un comprador primerizo tendría un SDLT menor o nulo en los tramos iniciales.",
  },
  steps: [
    "Ingresa el precio de compra de la propiedad.",
    "Selecciona tu tipo de comprador: estándar, primerizo, o propiedad adicional.",
    "Haz clic en Calcular para ver el impuesto de timbre adeudado, la tasa efectiva y el costo total.",
  ],
  examples: [
    { inputs: "Precio: £350,000, Tipo: Estándar", result: "SDLT: calculado según tramos progresivos estándar", explanation: "Un comprador típico de vivienda que no es primerizo ni compra una propiedad adicional." },
    { inputs: "Precio: £350,000, Tipo: Comprador Primerizo", result: "SDLT: reducido gracias al alivio de comprador primerizo", explanation: "Los compradores primerizos reciben alivio en los tramos iniciales de precio." },
    { inputs: "Precio: £350,000, Tipo: Propiedad Adicional", result: "SDLT: significativamente mayor por el recargo del 5%", explanation: "Comprar una segunda vivienda o propiedad de inversión añade un recargo del 5% sobre cada tramo." },
  ],
  practicalUses: [
    "Calcular el costo total de comprar una propiedad, incluyendo el SDLT",
    "Comparar el impacto fiscal de comprar como primerizo versus como comprador estándar",
    "Evaluar el costo adicional de comprar una segunda vivienda o propiedad de inversión",
    "Presupuestar el efectivo total necesario para completar una compra de propiedad",
    "Verificar el SDLT antes de hacer una oferta formal por una propiedad",
  ],
  expertTips: [
    "Los compradores primerizos pueden calificar para alivio de SDLT en propiedades hasta cierto valor — verifica el umbral vigente antes de comprar.",
    "El recargo del 5% para propiedades adicionales aplica incluso si es tu única propiedad en el Reino Unido pero ya posees una propiedad en otro país.",
    "El SDLT se paga generalmente dentro de los 14 días posteriores a la finalización de la compra — tu abogado o transportista (conveyancer) normalmente lo gestiona.",
    "Escocia y Gales tienen sus propios impuestos de transmisión (LBTT y LTT respectivamente) con tramos distintos al SDLT inglés.",
  ],
  commonMistakes: [
    { mistake: "Asumir que el alivio de comprador primerizo aplica sin límite de precio", fix: "El alivio de comprador primerizo generalmente tiene un límite máximo de valor de propiedad — verifica el umbral vigente." },
    { mistake: "Olvidar el recargo del 5% al comprar una segunda propiedad", fix: "Comprar una propiedad adicional (incluso si es tu única propiedad en el Reino Unido) puede generar el recargo del 5% si ya posees otra propiedad en cualquier lugar." },
    { mistake: "Usar esta calculadora para una propiedad en Escocia o Gales", fix: "Escocia usa el LBTT y Gales usa el LTT, con tramos y tasas distintas al SDLT inglés que usa esta calculadora." },
  ],
  faq: [
    { q: "¿Qué es el Impuesto de Timbre (SDLT) en el Reino Unido?", a: "Es un impuesto que se paga al comprar una propiedad en Inglaterra e Irlanda del Norte, calculado progresivamente según tramos de precio de compra." },
    { q: "¿Cómo se calcula el SDLT?", a: "El precio de compra se divide en tramos, y cada tramo se grava a una tasa progresiva creciente, sumando el impuesto de cada tramo para obtener el total." },
    { q: "¿Los compradores primerizos pagan menos SDLT?", a: "Sí, los compradores primerizos generalmente reciben alivio en los tramos iniciales de precio, reduciendo o eliminando el SDLT hasta cierto umbral de valor de propiedad." },
    { q: "¿Qué es el recargo del 5% en el SDLT?", a: "Es un cargo adicional que se aplica a cada tramo del SDLT cuando compras una propiedad adicional, como una segunda vivienda o una propiedad de inversión para alquilar." },
    { q: "¿Cuándo debo pagar el SDLT?", a: "Generalmente dentro de los 14 días posteriores a la finalización (completion) de la compra de la propiedad; tu abogado o conveyancer normalmente lo gestiona." },
    { q: "¿Escocia y Gales usan el mismo SDLT que Inglaterra?", a: "No, Escocia usa el Impuesto de Transacciones de Tierra y Edificios (LBTT) y Gales usa el Impuesto de Transacciones de Tierra (LTT), ambos con tramos distintos al SDLT inglés." },
    { q: "¿Qué pasa si compro una propiedad adicional pero vendo mi vivienda anterior poco después?", a: "Puedes calificar para un reembolso del recargo del 5% si vendes tu vivienda anterior dentro de un plazo determinado después de la nueva compra." },
    { q: "¿El SDLT aplica a propiedades comerciales?", a: "Sí, aunque con tramos y tasas distintas a las propiedades residenciales; esta calculadora está enfocada en compras residenciales." },
    { q: "¿Cómo afecta el SDLT al costo total de comprar una casa?", a: "El SDLT se suma al precio de compra y otros costos como honorarios legales y de inspección, formando el costo total real de la transacción." },
    { q: "¿Puedo evitar pagar el recargo del 5% si es mi primera propiedad en el Reino Unido?", a: "El recargo puede aplicar incluso en tu primera propiedad en el Reino Unido si ya posees una propiedad en cualquier otro país del mundo." },
    { q: "¿Cuál es el umbral de precio para el alivio de comprador primerizo?", a: "El umbral varía y puede cambiar en actualizaciones presupuestarias del gobierno; verifica la cifra vigente en el sitio oficial de HMRC antes de tu compra." },
  ],
  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Costos de Cierre", "Calculadora de Pago Inicial"],
  youMayLike: pickYouMayLike("uk-stamp-duty-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto de Timbre del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};