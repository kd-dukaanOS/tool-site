// src/data/calculators/es/vat-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const vatCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de IVA (Impuesto al Valor Agregado) 2026",
    metaDescription: "Calcula el monto neto, IVA y bruto de una compra al instante. Gratis y sin registro.",
    canonicalSlug: "/es/finance/vat-calculator",
    ogTitle: "Calculadora de IVA",
    ogDescription: "Calcula el IVA de cualquier compra al instante.",
    twitterTitle: "Calculadora de IVA Online",
    twitterDescription: "Calcula el monto con y sin IVA al instante.",
  },
  hero: {
    text: "La Calculadora de IVA calcula el monto neto, el monto del IVA y el monto bruto total de una compra, ya sea que el monto ingresado incluya el IVA o no.",
  },
  about: {
    text: `El IVA (Impuesto al Valor Agregado) es un impuesto al consumo aplicado en la mayoría de los países del mundo, incluyendo gran parte de Europa y Latinoamérica, y calcular correctamente el monto con y sin IVA es esencial tanto para negocios como para consumidores.

Esta calculadora recibe un monto y una tasa de IVA, junto con una opción para indicar si el monto ya incluye el impuesto, y calcula automáticamente el monto neto (sin IVA), el monto del IVA, y el monto bruto (total a pagar).

Limitaciones: esta calculadora aplica un cálculo de IVA simple sobre un solo monto; no considera tasas reducidas para categorías específicas de productos, ni regímenes especiales de IVA que algunos países aplican.`,
  },
  formula: {
    formula: "Monto Bruto = Monto Neto × (1 + Tasa de IVA / 100)",
    variables: [
      { symbol: "Monto Neto", meaning: "El precio antes de aplicar el IVA" },
      { symbol: "Monto Bruto", meaning: "El precio final después de aplicar el IVA (lo que realmente se paga)" },
    ],
    explanation: "Si el monto ingresado no incluye IVA, se multiplica por (1 + tasa/100) para obtener el monto bruto; si el monto ya incluye IVA, se divide entre (1 + tasa/100) para obtener el monto neto, y la diferencia entre ambos es el monto del IVA.",
    interpretation: "Por ejemplo, con un monto de $1,000 (sin IVA incluido) y una tasa del 21%, el monto del IVA es de $210, y el monto bruto total a pagar es de $1,210.",
  },
  steps: [
    "Ingresa el monto de la compra.",
    "Ingresa la tasa de IVA aplicable.",
    "Marca la casilla si el monto ya incluye el IVA.",
    "Haz clic en Calcular para ver el monto neto, el IVA y el monto bruto.",
  ],
  examples: [
    { inputs: "Monto: $1,000, Tasa: 21%, Sin IVA incluido", result: "Monto Neto: $1,000, IVA: $210, Monto Bruto: $1,210", explanation: "El caso más común: calcular el IVA que se agregará a un precio base, tasa típica en varios países de Europa." },
    { inputs: "Monto: $1,210, Tasa: 21%, IVA incluido", result: "Monto Neto: $1,000, IVA: $210, Monto Bruto: $1,210", explanation: "Cuando el monto ya incluye IVA, se calcula hacia atrás para separar el neto del impuesto." },
    { inputs: "Monto: $500, Tasa: 16%, Sin IVA incluido", result: "Monto Neto: $500, IVA: $80, Monto Bruto: $580", explanation: "Una tasa de IVA del 16%, común en países como México." },
  ],
  practicalUses: [
    "Calcular el precio final de una compra incluyendo el IVA",
    "Verificar si el precio de un producto ya incluye IVA o no",
    "Ayudar a negocios a calcular el monto neto de sus ventas para efectos contables y declaraciones fiscales",
    "Comparar precios entre productos con distintas tasas de IVA",
    "Calcular cuánto IVA pagaste en una compra específica para tus registros o reembolsos",
  ],
  expertTips: [
    "En la mayoría de los países con IVA, el precio mostrado al consumidor ya incluye el impuesto; usa la casilla de 'IVA incluido' en esos casos.",
    "Las tasas de IVA varían significativamente por país: España tiene 21%, México 16%, Argentina 21%, y algunos países aplican tasas reducidas para alimentos o medicinas.",
    "Para negocios, llevar un registro separado del monto neto y el IVA cobrado es esencial para las declaraciones fiscales periódicas.",
    "Si viajas internacionalmente, algunos países ofrecen reembolso de IVA a turistas para ciertas compras; verifica los requisitos específicos de cada país.",
  ],
  commonMistakes: [
    { mistake: "No marcar correctamente si el monto ya incluye IVA o no", fix: "Verifica si el precio que tienes ya incluye el IVA antes de calcular, ya que el resultado cambia significativamente según esta opción." },
    { mistake: "Usar una tasa de IVA genérica sin verificar la tasa local exacta", fix: "Las tasas de IVA varían por país y a veces por categoría de producto; confirma la tasa exacta aplicable a tu situación." },
    { mistake: "Confundir el monto neto con el monto bruto al reportar ventas", fix: "El monto neto es el precio sin IVA; el monto bruto es el total pagado por el cliente, incluyendo el IVA. Son cifras distintas para efectos contables." },
    { mistake: "Aplicar la tasa de IVA dos veces sobre el mismo monto", fix: "Si el monto ya incluye IVA, no vuelvas a aplicar la tasa como si fuera un monto neto; usa la casilla correspondiente para el cálculo correcto." },
  ],
  faq: [
    { q: "¿Cómo se calcula el IVA sobre un monto?", a: "Se multiplica el monto neto por la tasa de IVA dividida entre 100 para obtener el monto del IVA, y se suma al monto neto para obtener el monto bruto total." },
    { q: "¿Cómo calculo el monto sin IVA si el precio ya lo incluye?", a: "Se divide el monto bruto entre (1 + tasa de IVA/100) para obtener el monto neto sin IVA." },
    { q: "¿Cuál es la diferencia entre monto neto y monto bruto?", a: "El monto neto es el precio antes de aplicar el IVA; el monto bruto es el precio final total, incluyendo el IVA, que es lo que realmente se paga." },
    { q: "¿Qué tasa de IVA se usa en España?", a: "La tasa general de IVA en España es del 21%, aunque existen tasas reducidas del 10% y 4% para ciertos productos y servicios." },
    { q: "¿Qué tasa de IVA se usa en México?", a: "La tasa general de IVA en México es del 16%, con una tasa reducida del 8% en la región fronteriza en algunos casos." },
    { q: "¿Cómo sé si un precio ya incluye el IVA o no?", a: "Depende del país y comercio: en la mayoría de países con IVA, el precio mostrado al consumidor final ya lo incluye, pero en transacciones B2B a veces se muestra el precio sin IVA." },
    { q: "¿Cómo calculo el IVA de una factura?", a: "Si conoces el monto neto y la tasa de IVA, multiplica el neto por la tasa para obtener el IVA; si solo tienes el monto bruto, usa el cálculo inverso para separar el IVA del neto." },
    { q: "¿Las tasas de IVA son iguales en todos los países?", a: "No, cada país establece su propia tasa de IVA; además, muchos países aplican tasas reducidas o exenciones para categorías específicas como alimentos básicos, medicinas o libros." },
    { q: "¿Cómo afecta el IVA a mi negocio si vendo productos o servicios?", a: "Debes calcular, cobrar y generalmente remitir el IVA a la autoridad fiscal correspondiente, manteniendo registros separados del monto neto y el IVA cobrado para tus declaraciones." },
    { q: "¿Puedo usar esta calculadora para el IVA de cualquier país?", a: "Sí, esta calculadora funciona con cualquier tasa de IVA que ingreses, sin importar el país, siempre que conozcas la tasa aplicable a tu transacción." },
    { q: "¿Qué pasa si mi tasa de IVA tiene decimales, como 7.5%?", a: "Puedes ingresar tasas con decimales sin problema; la calculadora aplicará el porcentaje exacto que ingreses al cálculo." },
    { q: "¿Cómo calculo el precio final de un producto con IVA incluido?", a: "Multiplica el precio sin IVA por (1 + tasa de IVA/100) para obtener el precio final total que el cliente pagará." },
    { q: "¿El IVA se aplica a todos los productos por igual?", a: "No siempre; muchos países aplican tasas reducidas o exenciones para ciertas categorías de productos, como alimentos básicos, medicinas o libros." },
    { q: "¿Puedo recuperar el IVA pagado como turista extranjero?", a: "Algunos países ofrecen programas de reembolso de IVA para turistas en ciertas compras; verifica los requisitos específicos (monto mínimo, documentación) del país que visitas." },
  ],
  relatedCalculators: ["Calculadora de Impuesto de Venta", "Calculadora de Margen de Ganancia", "Calculadora de Descuento", "Calculadora de Propina"],
  youMayLike: pickYouMayLike("vat-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de IVA",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};