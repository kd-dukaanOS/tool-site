// src/data/calculators/es/sales-tax-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const salesTaxCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Impuesto de Venta 2026",
    metaDescription: "Calcula el monto neto, impuesto y bruto de una compra al instante. Gratis y sin registro.",
    canonicalSlug: "/es/finance/sales-tax-calculator",
    ogTitle: "Calculadora de Impuesto de Venta",
    ogDescription: "Calcula el impuesto de venta de cualquier compra al instante.",
    twitterTitle: "Calculadora de Impuesto de Venta (IVA)",
    twitterDescription: "Calcula el monto con y sin impuesto al instante.",
  },
  hero: {
    text: "La Calculadora de Impuesto de Venta calcula el monto neto, el monto del impuesto y el monto bruto total de una compra, ya sea que el monto ingresado incluya el impuesto o no.",
  },
  about: {
    text: `El impuesto de venta (o IVA en muchos países hispanohablantes) es un porcentaje adicional que se aplica al precio de un producto o servicio, y calcular correctamente el monto con y sin impuesto es esencial para negocios y consumidores.

Esta calculadora recibe un monto y una tasa de impuesto, junto con una opción para indicar si el monto ya incluye el impuesto, y calcula automáticamente el monto neto (sin impuesto), el monto del impuesto, y el monto bruto (total a pagar).

Limitaciones: esta calculadora aplica un cálculo de impuesto simple sobre un solo monto; no considera exenciones fiscales, tasas diferenciadas por categoría de producto, ni impuestos compuestos que algunos países aplican.`,
  },
  formula: {
    formula: "Monto Bruto = Monto Neto × (1 + Tasa de Impuesto / 100)",
    variables: [
      { symbol: "Monto Neto", meaning: "El precio antes de aplicar el impuesto" },
      { symbol: "Monto Bruto", meaning: "El precio final después de aplicar el impuesto (lo que realmente se paga)" },
    ],
    explanation: "Si el monto ingresado no incluye impuesto, se multiplica por (1 + tasa/100) para obtener el monto bruto; si el monto ya incluye impuesto, se divide entre (1 + tasa/100) para obtener el monto neto, y la diferencia entre ambos es el monto del impuesto.",
    interpretation: "Por ejemplo, con un monto de $1,000 (sin impuesto incluido) y una tasa del 18%, el monto del impuesto es de $180, y el monto bruto total a pagar es de $1,180.",
  },
  steps: [
    "Ingresa el monto de la compra.",
    "Ingresa la tasa de impuesto aplicable.",
    "Marca la casilla si el monto ya incluye el impuesto.",
    "Haz clic en Calcular para ver el monto neto, el impuesto y el monto bruto.",
  ],
  examples: [
    { inputs: "Monto: $1,000, Tasa: 18%, Sin impuesto incluido", result: "Monto Neto: $1,000, Impuesto: $180, Monto Bruto: $1,180", explanation: "El caso más común: calcular el impuesto que se agregará a un precio base." },
    { inputs: "Monto: $1,180, Tasa: 18%, Impuesto incluido", result: "Monto Neto: $1,000, Impuesto: $180, Monto Bruto: $1,180", explanation: "Cuando el monto ya incluye impuesto, se calcula hacia atrás para separar el neto del impuesto." },
    { inputs: "Monto: $500, Tasa: 8%, Sin impuesto incluido", result: "Monto Neto: $500, Impuesto: $40, Monto Bruto: $540", explanation: "Una tasa de impuesto más baja, común en algunas jurisdicciones de EE.UU." },
  ],
  practicalUses: [
    "Calcular el precio final de una compra incluyendo el impuesto de venta",
    "Verificar si el precio de un producto ya incluye impuesto o no",
    "Ayudar a negocios a calcular el monto neto de sus ventas para efectos contables",
    "Comparar precios entre productos con distintas tasas de impuesto",
    "Calcular cuánto impuesto pagaste en una compra específica para tus registros",
  ],
  expertTips: [
    "En muchos países, el precio mostrado al consumidor ya incluye el impuesto (como el IVA en gran parte de Latinoamérica y Europa); usa la casilla de 'impuesto incluido' en esos casos.",
    "En Estados Unidos, el sales tax generalmente se agrega al momento de pagar, no está incluido en el precio mostrado; en ese caso, deja la casilla sin marcar.",
    "Las tasas de impuesto de venta varían significativamente por estado, provincia o país; verifica siempre la tasa exacta aplicable a tu ubicación y tipo de producto.",
    "Para negocios, llevar un registro separado del monto neto y el impuesto cobrado es esencial para la contabilidad y las declaraciones fiscales.",
  ],
  commonMistakes: [
    { mistake: "No marcar correctamente si el monto ya incluye impuesto o no", fix: "Verifica si el precio que tienes ya incluye el impuesto antes de calcular, ya que el resultado cambia significativamente según esta opción." },
    { mistake: "Usar una tasa de impuesto genérica sin verificar la tasa local exacta", fix: "Las tasas de impuesto de venta varían por región; confirma la tasa exacta aplicable a tu ubicación y categoría de producto." },
    { mistake: "Confundir el monto neto con el monto bruto al reportar ventas", fix: "El monto neto es el precio sin impuesto; el monto bruto es el total pagado por el cliente, incluyendo el impuesto. Son cifras distintas para efectos contables." },
    { mistake: "Aplicar la tasa de impuesto dos veces sobre el mismo monto", fix: "Si el monto ya incluye impuesto, no vuelvas a aplicar la tasa como si fuera un monto neto; usa la casilla correspondiente para el cálculo correcto." },
  ],
  faq: [
    { q: "¿Cómo se calcula el impuesto de venta sobre un monto?", a: "Se multiplica el monto neto por la tasa de impuesto dividida entre 100 para obtener el monto del impuesto, y se suma al monto neto para obtener el monto bruto total." },
    { q: "¿Cómo calculo el monto sin impuesto si el precio ya lo incluye?", a: "Se divide el monto bruto entre (1 + tasa de impuesto/100) para obtener el monto neto sin impuesto." },
    { q: "¿Cuál es la diferencia entre monto neto y monto bruto?", a: "El monto neto es el precio antes de aplicar el impuesto; el monto bruto es el precio final total, incluyendo el impuesto, que es lo que realmente se paga." },
    { q: "¿El impuesto de venta es lo mismo que el IVA?", a: "Son conceptos similares mecánicamente, aunque el IVA (Impuesto al Valor Agregado) es común en muchos países hispanohablantes y europeos, mientras que 'sales tax' es el término usado en Estados Unidos." },
    { q: "¿Cómo sé si un precio ya incluye el impuesto o no?", a: "Depende del país y comercio: en muchos lugares con IVA, el precio mostrado ya lo incluye; en Estados Unidos, el sales tax generalmente se agrega al pagar, no está incluido en el precio exhibido." },
    { q: "¿Cómo calculo el impuesto de venta de una factura?", a: "Si conoces el monto neto y la tasa de impuesto, multiplica el neto por la tasa para obtener el impuesto; si solo tienes el monto bruto, usa el cálculo inverso para separar el impuesto del neto." },
    { q: "¿Las tasas de impuesto de venta son iguales en todos los estados de EE.UU.?", a: "No, las tasas de sales tax varían significativamente por estado, condado e incluso ciudad dentro de Estados Unidos, y algunos estados no tienen impuesto de venta estatal." },
    { q: "¿Cómo afecta el impuesto de venta a mi negocio si vendo productos?", a: "Debes calcular, cobrar y generalmente remitir el impuesto de venta a la autoridad fiscal correspondiente, manteniendo registros separados del monto neto y el impuesto cobrado." },
    { q: "¿Puedo usar esta calculadora para calcular el IVA de mi país?", a: "Sí, esta calculadora funciona con cualquier tasa de impuesto de venta o IVA que ingreses, sin importar el país o la denominación específica del impuesto." },
    { q: "¿Qué pasa si mi tasa de impuesto tiene decimales, como 7.25%?", a: "Puedes ingresar tasas con decimales sin problema; la calculadora aplicará el porcentaje exacto que ingreses al cálculo." },
    { q: "¿Cómo calculo el precio final de un producto con impuesto incluido?", a: "Multiplica el precio sin impuesto por (1 + tasa de impuesto/100) para obtener el precio final total que el cliente pagará." },
    { q: "¿El impuesto de venta se aplica a todos los productos por igual?", a: "No siempre; algunos países y regiones aplican tasas diferenciadas o exenciones para ciertas categorías de productos, como alimentos básicos o medicinas." },
    { q: "¿Cómo separo el impuesto de mis ventas totales para mi contabilidad?", a: "Usa el modo de 'impuesto incluido' en esta calculadora sobre tus ventas totales brutas para obtener el monto neto y el impuesto cobrado por separado." },
    { q: "¿Qué diferencia hay entre impuesto de venta y impuesto sobre la renta?", a: "El impuesto de venta se aplica al comprar productos o servicios y se paga en el momento de la transacción; el impuesto sobre la renta se aplica a los ingresos ganados durante un período fiscal." },
  ],
  relatedCalculators: ["Calculadora de Margen de Ganancia", "Calculadora de Propina", "Calculadora de Descuento", "Calculadora de Impuesto Federal sobre la Renta"],
  youMayLike: pickYouMayLike("sales-tax-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Impuesto de Venta",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};