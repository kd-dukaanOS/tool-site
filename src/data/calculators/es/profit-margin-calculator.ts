// src/data/calculators/es/profit-margin-calculator.ts
// NOTE: category assumed "business" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const profitMarginCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Margen de Ganancia 2026",
    metaDescription: "Calcula tu ganancia y porcentaje de margen a partir de ingresos y costo. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/profit-margin-calculator",
    ogTitle: "Calculadora de Margen de Ganancia",
    ogDescription: "Calcula tu ganancia y margen de ganancia porcentual al instante.",
    twitterTitle: "Calculadora de Margen de Ganancia",
    twitterDescription: "Calcula tu ganancia y % de margen a partir de ingresos y costo.",
  },
  hero: {
    text: "La Calculadora de Margen de Ganancia calcula tu ganancia en dinero y tu porcentaje de margen de ganancia a partir de tus ingresos totales y el costo de los bienes vendidos.",
  },
  about: {
    text: `El margen de ganancia es una de las métricas financieras más importantes para cualquier negocio, ya que mide qué porcentaje de tus ingresos totales se convierte en ganancia real después de cubrir los costos.

Esta calculadora recibe tus ingresos totales y el costo total de los bienes vendidos, y calcula automáticamente tu ganancia en dinero y tu margen de ganancia expresado como porcentaje de los ingresos.

Limitaciones: esta calculadora considera únicamente el costo de bienes vendidos (COGS); no incluye gastos operativos generales, impuestos ni otros costos indirectos del negocio.`,
  },
  formula: {
    formula: "Margen de Ganancia % = (Ganancia / Ingresos) × 100",
    variables: [
      { symbol: "Ganancia", meaning: "Ingresos totales menos el costo de los bienes vendidos" },
      { symbol: "Margen de Ganancia", meaning: "La ganancia expresada como porcentaje de los ingresos totales, no del costo" },
    ],
    explanation: "Se resta el costo total a los ingresos totales para obtener la ganancia; luego, esa ganancia se divide entre los ingresos totales y se multiplica por 100 para obtener el porcentaje de margen de ganancia.",
    interpretation: "Por ejemplo, con $1,000 de ingresos y $600 de costo, la ganancia es de $400, y el margen de ganancia es del 40% de los ingresos.",
  },
  steps: [
    "Ingresa tus ingresos totales.",
    "Ingresa el costo total de los bienes vendidos.",
    "Haz clic en Calcular.",
    "Revisa tu ganancia en dinero y tu porcentaje de margen de ganancia.",
  ],
  examples: [
    { inputs: "Ingresos: $1,000, Costo: $600", result: "Ganancia: $400, Margen: 40%", explanation: "Un ejemplo básico de margen de ganancia sobre ventas totales." },
    { inputs: "Ingresos: $5,000, Costo: $4,500", result: "Ganancia: $500, Margen: 10%", explanation: "Un margen de ganancia bajo, común en negocios de alto volumen y bajo margen unitario." },
    { inputs: "Ingresos: $2,000, Costo: $2,000", result: "Ganancia: $0, Margen: 0%", explanation: "Cuando el costo iguala a los ingresos, no hay ganancia ni pérdida (punto de equilibrio)." },
  ],
  practicalUses: [
    "Evaluar la rentabilidad general de tu negocio o línea de productos",
    "Comparar el margen de ganancia entre distintos productos o servicios",
    "Fijar precios que aseguren un margen de ganancia objetivo",
    "Monitorear cómo cambios en costos afectan tu rentabilidad general",
    "Presentar métricas de rentabilidad a inversionistas o socios de negocio",
  ],
  expertTips: [
    "El margen de ganancia se calcula sobre los ingresos, no sobre el costo, lo que lo diferencia del markup (margen sobre costo).",
    "Un margen de ganancia saludable varía mucho por industria: negocios de retail suelen tener márgenes más bajos que negocios de servicios o software.",
    "Monitorea tu margen de ganancia regularmente, ya que pequeños cambios en costos de proveedores pueden afectar significativamente tu rentabilidad general.",
    "Recuerda que esta calculadora considera solo el costo de bienes vendidos; tu rentabilidad neta real también depende de gastos operativos e impuestos.",
  ],
  commonMistakes: [
    { mistake: "Confundir margen de ganancia con markup", fix: "El margen se calcula sobre los ingresos (precio de venta); el markup se calcula sobre el costo. Son porcentajes distintos para la misma transacción." },
    { mistake: "No considerar gastos operativos al evaluar rentabilidad total", fix: "El margen de ganancia bruto solo considera el costo de bienes vendidos; la rentabilidad neta real también resta gastos operativos, impuestos y otros costos." },
    { mistake: "Comparar márgenes de ganancia entre industrias muy distintas", fix: "Los márgenes saludables varían mucho por sector; compara tu margen contra el promedio de tu propia industria, no contra negocios de otro tipo." },
    { mistake: "Ignorar el margen de ganancia al fijar precios de nuevos productos", fix: "Usa el margen de ganancia objetivo para calcular hacia atrás el precio de venta necesario dado un costo específico." },
  ],
  faq: [
    { q: "¿Cómo se calcula el margen de ganancia?", a: "Se resta el costo a los ingresos totales para obtener la ganancia, y esa ganancia se divide entre los ingresos totales, multiplicando por 100 para obtener el porcentaje." },
    { q: "¿Cuál es la diferencia entre margen de ganancia y markup?", a: "El margen de ganancia se calcula sobre los ingresos (precio de venta); el markup se calcula sobre el costo del producto. Ambos miden rentabilidad pero desde bases distintas." },
    { q: "¿Qué es un buen margen de ganancia para mi negocio?", a: "Depende de la industria; negocios de retail suelen tener márgenes entre 20-50%, mientras que negocios de servicios o software pueden superar el 70-80%." },
    { q: "¿El margen de ganancia bruto es lo mismo que la ganancia neta?", a: "No, el margen de ganancia bruto solo considera el costo de bienes vendidos; la ganancia neta también resta gastos operativos, impuestos y otros costos indirectos." },
    { q: "¿Cómo puedo mejorar mi margen de ganancia?", a: "Puedes aumentar precios, reducir costos de producción o adquisición, mejorar la eficiencia operativa, o enfocarte en productos con mayor margen." },
    { q: "¿Qué pasa si mi margen de ganancia es negativo?", a: "Un margen negativo significa que tu costo supera tus ingresos, lo que indica que estás vendiendo con pérdida en esa transacción o período." },
    { q: "¿Cómo se calcula el margen de ganancia neto vs el margen bruto?", a: "El margen bruto solo resta el costo de bienes vendidos de los ingresos; el margen neto resta también todos los gastos operativos, impuestos e intereses." },
    { q: "¿Debo usar el margen de ganancia bruto o neto para evaluar mi negocio?", a: "Ambos son útiles: el margen bruto muestra la rentabilidad directa de tus productos, mientras que el margen neto refleja la rentabilidad real después de todos los gastos." },
    { q: "¿Cómo afecta el volumen de ventas al margen de ganancia?", a: "El margen de ganancia porcentual no depende directamente del volumen, pero negocios de alto volumen a menudo operan con márgenes más bajos compensados por mayor cantidad de ventas." },
    { q: "¿Puedo tener un margen de ganancia diferente para cada producto?", a: "Sí, es común y recomendable calcular el margen de ganancia por producto o línea de productos para identificar cuáles son más rentables." },
    { q: "¿Cómo se relaciona el margen de ganancia con el precio de venta?", a: "Si conoces tu costo y el margen de ganancia objetivo, puedes calcular hacia atrás el precio de venta necesario para alcanzar ese margen deseado." },
    { q: "¿El margen de ganancia incluye impuestos?", a: "No, esta calculadora considera únicamente ingresos y costo de bienes vendidos; los impuestos y otros gastos deben considerarse por separado para calcular la rentabilidad neta real." },
    { q: "¿Cómo comparo mi margen de ganancia con la competencia?", a: "Investiga los márgenes promedio de tu industria específica, ya que comparar contra negocios de sectores muy distintos puede llevar a conclusiones equivocadas." },
    { q: "¿Qué margen de ganancia necesito para que mi negocio sea sostenible?", a: "Depende de tus gastos operativos fijos y variables; necesitas que tu margen bruto sea suficiente para cubrir esos gastos y aún generar una ganancia neta positiva." },
  ],
  relatedCalculators: ["Calculadora de Margen (Markup)", "Calculadora de Punto de Equilibrio", "Calculadora de CAC", "Calculadora de ROI"],
  youMayLike: pickYouMayLike("profit-margin-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Margen de Ganancia",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};