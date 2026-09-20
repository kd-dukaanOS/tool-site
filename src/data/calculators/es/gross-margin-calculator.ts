// src/data/calculators/es/gross-margin-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const grossMarginCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Margen Bruto 2026",
    metaDescription: "Calcula tu ganancia bruta y porcentaje de margen bruto a partir de ingresos y costo de bienes vendidos (COGS). Gratis e instantáneo.",
    canonicalSlug: "/es/finance/gross-margin-calculator",
    ogTitle: "Calculadora de Margen Bruto",
    ogDescription: "Descubre tu ganancia bruta y porcentaje de margen bruto al instante.",
    twitterTitle: "Calculadora de Margen Bruto 2026",
    twitterDescription: "Calcula tu margen bruto al instante.",
  },
  hero: {
    text: "La Calculadora de Margen Bruto muestra tu ganancia bruta y tu porcentaje de margen bruto a partir de tus ingresos y el costo de bienes vendidos (COGS).",
  },
  about: {
    text: `El margen bruto es una de las métricas de rentabilidad más básicas y usadas en cualquier negocio, ya que muestra qué porcentaje de tus ingresos queda después de cubrir el costo directo de producir o adquirir lo que vendes.

Esta calculadora resta el COGS de tus ingresos para obtener la ganancia bruta, y divide ese resultado entre los ingresos para mostrar el porcentaje de margen bruto.

Limitaciones: el margen bruto no incluye gastos operativos, administrativos o de marketing — solo refleja la rentabilidad directa de la venta antes de esos costos adicionales.`,
  },
  formula: {
    formula: "Margen Bruto (%) = (Ingresos − COGS) / Ingresos × 100",
    variables: [
      { symbol: "COGS", meaning: "Costo de Bienes Vendidos — el costo directo de producir o adquirir lo que vendiste" },
      { symbol: "Ganancia Bruta", meaning: "Ingresos menos el costo de bienes vendidos" },
    ],
    explanation: "Se resta el COGS de los ingresos para obtener la ganancia bruta en dólares, y luego se divide esa ganancia entre los ingresos totales para obtener el porcentaje de margen bruto.",
    interpretation: "Por ejemplo, con ingresos de $10,000 y un COGS de $6,000, la ganancia bruta es de $4,000, lo que equivale a un margen bruto del 40%.",
  },
  steps: [
    "Ingresa tus ingresos totales por ventas.",
    "Ingresa el costo de bienes vendidos (COGS).",
    "Haz clic en Calcular.",
    "Revisa tu ganancia bruta en dólares y tu porcentaje de margen bruto.",
  ],
  examples: [
    { inputs: "Ingresos: $10,000, COGS: $6,000", result: "Ganancia Bruta: $4,000 | Margen Bruto: 40%", explanation: "Un negocio de retail típico con margen bruto moderado." },
    { inputs: "Ingresos: $50,000, COGS: $15,000", result: "Ganancia Bruta: $35,000 | Margen Bruto: 70%", explanation: "Un negocio de servicios o software con costos directos bajos y margen bruto alto." },
    { inputs: "Ingresos: $20,000, COGS: $18,000", result: "Ganancia Bruta: $2,000 | Margen Bruto: 10%", explanation: "Un negocio con margen bruto muy ajustado, común en industrias de alta competencia de precios." },
  ],
  practicalUses: [
    "Evaluar la rentabilidad básica de un producto o línea de negocio",
    "Comparar el margen bruto entre distintos productos para priorizar cuáles promover",
    "Establecer precios de venta que garanticen un margen bruto objetivo",
    "Presentar métricas de rentabilidad a inversionistas o socios",
    "Detectar si el costo de producción está subiendo más rápido que los precios de venta",
  ],
  expertTips: [
    "Un margen bruto saludable varía mucho por industria — software y servicios suelen tener márgenes de 60-90%, mientras que retail físico puede rondar el 20-50%.",
    "Compara tu margen bruto en el tiempo para detectar si tus costos de producción están erosionando tu rentabilidad.",
    "El margen bruto es distinto al margen neto — este último también resta gastos operativos, impuestos e intereses.",
    "Usa el margen bruto para decidir qué productos o servicios promover más activamente en tu negocio.",
  ],
  commonMistakes: [
    { mistake: "Confundir margen bruto con margen neto", fix: "El margen bruto solo resta el COGS; el margen neto también resta gastos operativos, impuestos e intereses." },
    { mistake: "No incluir todos los costos directos en el COGS", fix: "Asegúrate de incluir materiales, mano de obra directa y otros costos directamente atribuibles a producir lo vendido." },
    { mistake: "Comparar el margen bruto entre industrias distintas sin contexto", fix: "El margen bruto saludable varía mucho según la industria; compara siempre dentro del mismo sector." },
  ],
  faq: [
    { q: "¿Cómo se calcula el margen bruto?", a: "Se resta el costo de bienes vendidos (COGS) de los ingresos para obtener la ganancia bruta, y se divide esa ganancia entre los ingresos para obtener el porcentaje." },
    { q: "¿Qué es un buen margen bruto?", a: "Depende de la industria; software y servicios suelen tener 60-90%, mientras que retail físico puede estar entre 20-50%." },
    { q: "¿Qué diferencia hay entre margen bruto y margen neto?", a: "El margen bruto solo resta el costo directo de producción (COGS); el margen neto también resta gastos operativos, impuestos e intereses." },
    { q: "¿Qué se incluye en el costo de bienes vendidos (COGS)?", a: "Incluye materiales directos, mano de obra directa de producción y otros costos directamente atribuibles a crear el producto o servicio vendido." },
    { q: "¿El margen bruto incluye gastos de marketing o administrativos?", a: "No, esos gastos se restan más adelante para calcular el margen operativo o el margen neto, no el margen bruto." },
    { q: "¿Cómo puedo mejorar mi margen bruto?", a: "Aumentando tus precios de venta, reduciendo el costo de producción, o negociando mejores condiciones con proveedores." },
    { q: "¿Por qué mi margen bruto está bajando con el tiempo?", a: "Puede deberse a un aumento en el costo de materiales o mano de obra sin un ajuste correspondiente en los precios de venta." },
    { q: "¿El margen bruto es lo mismo que la ganancia bruta?", a: "No, la ganancia bruta es un monto en dólares (ingresos menos COGS), mientras que el margen bruto es ese monto expresado como porcentaje de los ingresos." },
    { q: "¿Qué industrias suelen tener el margen bruto más alto?", a: "Software, servicios digitales y consultoría suelen tener márgenes brutos muy altos debido a sus bajos costos directos de producción." },
    { q: "¿Cómo uso el margen bruto para fijar precios?", a: "Divide tu costo de bienes vendidos entre (1 − margen bruto objetivo) para calcular el precio de venta necesario para alcanzar ese margen." },
    { q: "¿Esta calculadora sirve para un negocio de servicios sin inventario físico?", a: "Sí, siempre que puedas identificar los costos directos asociados a entregar el servicio como tu COGS." },
    { q: "¿El margen bruto puede ser negativo?", a: "Sí, si el costo de bienes vendidos supera a los ingresos, lo que indica que estás vendiendo por debajo de tu costo directo de producción." },
  ],
  relatedCalculators: ["Calculadora de Margen de Utilidad", "Calculadora de Margen de Ganancia Neta", "Calculadora de Punto de Equilibrio", "Calculadora de Markup"],
  youMayLike: pickYouMayLike("gross-margin-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Margen Bruto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};