// src/data/calculators/es/gst-hst-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const gstHstCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de GST/HST Canadá 2026 (Todas las Provincias)",
    metaDescription: "Calcula el GST o HST para cualquier provincia canadiense, agregando o quitando el impuesto de un monto. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/gst-hst-calculator",
    ogTitle: "Calculadora de GST/HST",
    ogDescription: "Calcula el impuesto de ventas canadiense para cualquier provincia al instante.",
    twitterTitle: "Calculadora de GST/HST 2026",
    twitterDescription: "Calcula el GST o HST de Canadá al instante.",
  },
  hero: {
    text: "La Calculadora de GST/HST aplica la tasa correcta de impuesto para cualquier provincia o territorio de Canadá, ya sea agregando el impuesto a un monto o calculando hacia atrás desde un total con impuesto incluido.",
  },
  about: {
    text: `En Canadá, el GST (Impuesto sobre Bienes y Servicios) es un impuesto federal del 5% que aplica en todo el país; algunas provincias lo combinan con su impuesto provincial en un único HST (Impuesto Armonizado sobre Ventas) que puede llegar al 13-15%.

Esta calculadora aplica automáticamente la tasa correcta según la provincia o territorio que selecciones, permitiéndote agregar el impuesto a un monto antes de impuestos o quitarlo de un total que ya incluye impuesto.

Limitaciones: las tasas de impuesto pueden cambiar por decisión gubernamental; verifica siempre la tasa vigente en el sitio de la Agencia de Ingresos de Canadá (CRA) para transacciones importantes.`,
  },
  formula: {
    formula: "Monto del Impuesto = Monto Antes de Impuestos × Tasa de GST/HST",
    variables: [
      { symbol: "GST", meaning: "Impuesto federal del 5% sobre Bienes y Servicios, aplicado en todas las provincias" },
      { symbol: "HST", meaning: "Impuesto Armonizado que combina el GST federal con el impuesto provincial en una sola tasa" },
    ],
    explanation: "Si agregas impuesto, se multiplica el monto ingresado por la tasa de la provincia seleccionada; si quitas impuesto, se divide el total entre (1 + tasa) para obtener el monto antes de impuestos.",
    interpretation: "Por ejemplo, $100 en Ontario (13% HST) resultan en $13 de impuesto y un total de $113; en Alberta (5% GST) el mismo monto resulta en $5 de impuesto y $105 en total.",
  },
  steps: [
    "Ingresa el monto que quieres calcular.",
    "Selecciona la provincia o territorio.",
    "Elige si quieres agregar impuesto al monto o quitarlo de un total con impuesto incluido.",
    "Haz clic en Calcular para ver el monto antes de impuestos, el impuesto y el total.",
  ],
  examples: [
    { inputs: "Monto: $100, Provincia: Ontario (13% HST), Modo: Agregar", result: "Impuesto: $13 | Total: $113", explanation: "Ontario usa HST combinado del 13%." },
    { inputs: "Monto: $100, Provincia: Alberta (5% GST), Modo: Agregar", result: "Impuesto: $5 | Total: $105", explanation: "Alberta solo cobra el GST federal, sin impuesto provincial de ventas." },
    { inputs: "Monto: $113, Provincia: Ontario (13% HST), Modo: Quitar", result: "Monto Antes de Impuestos: $100 | Impuesto: $13", explanation: "Calcular hacia atrás desde un recibo que ya incluye HST." },
  ],
  practicalUses: [
    "Calcular el precio final de un producto o servicio incluyendo GST/HST",
    "Verificar si un recibo o factura aplicó correctamente el impuesto de tu provincia",
    "Calcular el monto antes de impuestos a partir de un total con impuesto incluido, para fines de contabilidad",
    "Comparar el costo real de una compra entre provincias con distintas tasas",
    "Preparar facturas o cotizaciones para clientes en distintas provincias canadienses",
  ],
  expertTips: [
    "Cinco provincias y territorios (Alberta, BC, Manitoba, Saskatchewan, Territorios del Noroeste, Nunavut, Yukon, Quebec) solo cobran el GST federal del 5%, sin impuesto provincial armonizado.",
    "Ontario, Nueva Escocia, New Brunswick, Terranova y Labrador, y la Isla del Príncipe Eduardo usan HST combinado, con tasas entre 13% y 15%.",
    "Si eres pequeño proveedor con ingresos bajos, es posible que no estés obligado a cobrar GST/HST — verifica el umbral vigente con la CRA.",
    "Al facturar a clientes en otra provincia, generalmente aplica la tasa de la provincia donde se entrega el bien o servicio, no la tuya.",
  ],
  commonMistakes: [
    { mistake: "Usar la tasa de tu provincia para una venta en otra provincia", fix: "El GST/HST generalmente se aplica según la provincia donde se entrega el bien o servicio, no donde está tu negocio." },
    { mistake: "Confundir el modo 'agregar' con 'quitar' impuesto", fix: "Usa 'agregar' cuando el monto no incluye impuesto aún, y 'quitar' cuando el monto ya incluye el impuesto y quieres saber el monto original." },
    { mistake: "Asumir que todas las provincias cobran la misma tasa", fix: "Las tasas varían entre 5% (solo GST) y 15% (HST), dependiendo de la provincia o territorio seleccionado." },
  ],
  faq: [
    { q: "¿Qué es el GST en Canadá?", a: "El GST (Impuesto sobre Bienes y Servicios) es un impuesto federal del 5% que se aplica en todas las provincias y territorios de Canadá." },
    { q: "¿Qué es el HST y en qué provincias aplica?", a: "El HST es un impuesto armonizado que combina el GST federal con el impuesto provincial; aplica en Ontario, Nueva Escocia, New Brunswick, Terranova y Labrador, y la Isla del Príncipe Eduardo." },
    { q: "¿Cuál es la tasa de HST en Ontario?", a: "Ontario aplica una tasa de HST del 13%, que combina el 5% de GST federal con el 8% de impuesto provincial." },
    { q: "¿Qué provincias solo cobran GST sin impuesto provincial?", a: "Alberta, Columbia Británica, Manitoba, Saskatchewan, Quebec, y los territorios (Yukon, Territorios del Noroeste, Nunavut) solo cobran el GST federal del 5% (BC, Manitoba, Saskatchewan y Quebec cobran además su propio impuesto provincial de ventas por separado)." },
    { q: "¿Cómo calculo el GST/HST a partir de un total con impuesto incluido?", a: "Selecciona el modo 'quitar impuesto' e ingresa el total; la calculadora dividirá el monto para mostrarte el valor antes de impuestos y el impuesto aplicado." },
    { q: "¿Debo cobrar GST/HST si soy un negocio pequeño?", a: "Depende de tus ingresos anuales; existe un umbral de pequeño proveedor por debajo del cual no estás obligado a registrarte y cobrar GST/HST, verifica el monto vigente con la CRA." },
    { q: "¿Qué tasa de impuesto debo usar al vender a otra provincia?", a: "Generalmente se aplica la tasa de la provincia donde se entrega el bien o se presta el servicio, no la de tu ubicación." },
    { q: "¿El GST y el HST son deducibles como crédito fiscal para negocios?", a: "Sí, los negocios registrados pueden generalmente reclamar créditos de insumo fiscal por el GST/HST pagado en sus compras relacionadas con el negocio." },
    { q: "¿Cuál es la tasa de HST más alta en Canadá?", a: "Nueva Escocia tiene una de las tasas de HST más altas, cercana al 14-15% según el año fiscal." },
    { q: "¿Cómo sé qué tasa aplica a mi provincia?", a: "Selecciona tu provincia en esta calculadora y automáticamente se aplicará la tasa correcta de GST o HST vigente." },
    { q: "¿El GST/HST aplica a todos los productos y servicios?", a: "La mayoría de bienes y servicios están gravados, pero existen exenciones y tasa cero para ciertos productos básicos como alimentos no procesados." },
    { q: "¿Qué diferencia hay entre GST/HST y PST?", a: "El PST (Impuesto Provincial de Ventas) es un impuesto separado que cobran algunas provincias además del GST federal, mientras que el HST combina ambos en una sola tasa." },
  ],
  relatedCalculators: ["Calculadora de Impuesto sobre Ventas", "Calculadora de Sueldo Neto Canadá", "Calculadora de Jubilación de Canadá", "Calculadora de CPP"],
  youMayLike: pickYouMayLike("gst-hst-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de GST/HST",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};