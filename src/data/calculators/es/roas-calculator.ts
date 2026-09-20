// src/data/calculators/es/roas-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const roasCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de ROAS — Retorno de la Inversión Publicitaria",
    metaDescription: "Calcula tu ROAS (Retorno de la Inversión Publicitaria) y la ganancia de tu campaña a partir de ingresos y gasto publicitario. Calculadora gratis.",
    canonicalSlug: "/es/business/roas-calculator",
    ogTitle: "Calculadora de ROAS",
    ogDescription: "Descubre el retorno de tu inversión publicitaria y la ganancia de tu campaña.",
    twitterTitle: "Calculadora de ROAS Gratis",
    twitterDescription: "Calcula tu ROAS al instante, gratis.",
  },

  hero: {
    text: "La Calculadora de ROAS calcula tu Retorno de la Inversión Publicitaria (Return on Ad Spend) y la ganancia generada por tu campaña, a partir de los ingresos obtenidos y el gasto publicitario invertido.",
  },

  about: {
    text: `El ROAS (Return on Ad Spend) es una métrica clave en marketing digital que mide cuántos ingresos genera cada dólar invertido en publicidad. Es una de las métricas más usadas para evaluar la eficiencia de campañas en plataformas como Google Ads, Meta Ads o TikTok Ads.

Esta calculadora toma los ingresos generados por tu campaña publicitaria y el gasto total invertido, para calcular tu ROAS como múltiplo (por ejemplo, 5x significa que generaste $5 por cada $1 gastado), tu retorno como porcentaje, y la ganancia neta de la campaña.

A diferencia del ROI (que considera todos los costos del negocio), el ROAS se enfoca específicamente en la eficiencia del gasto publicitario, lo que lo hace especialmente útil para optimizar campañas en tiempo real.`,
  },

  formula: {
    formula: "ROAS = Ingresos por Anuncios ÷ Gasto Publicitario",
    variables: [
      { symbol: "Retorno %", meaning: "(ROAS − 1) × 100" },
      { symbol: "Ganancia", meaning: "Ingresos por Anuncios − Gasto Publicitario" },
    ],
    explanation: "Se divide el ingreso total generado por la campaña entre el gasto publicitario total, dando el ROAS como un múltiplo; restando el gasto de los ingresos se obtiene la ganancia neta de la campaña.",
    interpretation: "Por ejemplo, con $5,000 en ingresos y $1,000 en gasto publicitario, el ROAS es 5x (500% de retorno), con una ganancia de $4,000 antes de otros costos del negocio.",
  },

  steps: [
    "Ingresa los ingresos generados por tu campaña publicitaria.",
    "Ingresa el gasto total invertido en la campaña.",
    "Haz clic en Calcular.",
    "Revisa tu ROAS, el porcentaje de retorno y la ganancia de la campaña.",
  ],

  examples: [
    { inputs: "Ingresos: $5,000, Gasto: $1,000", result: "ROAS: 5.00x, Ganancia: $4,000", explanation: "Un ROAS sólido, generando $5 por cada $1 invertido en publicidad." },
    { inputs: "Ingresos: $2,500, Gasto: $2,000", result: "ROAS: 1.25x, Ganancia: $500", explanation: "Un ROAS positivo pero ajustado, apenas cubriendo el gasto con margen limitado." },
    { inputs: "Ingresos: $800, Gasto: $1,000", result: "ROAS: 0.80x, Ganancia: -$200", explanation: "Un ROAS por debajo de 1x significa que la campaña perdió dinero." },
  ],

  practicalUses: [
    "Evaluar la eficiencia de una campaña publicitaria específica",
    "Comparar el ROAS entre distintas plataformas o campañas",
    "Decidir si escalar, pausar o ajustar el presupuesto de una campaña",
    "Reportar resultados de marketing a clientes o al equipo interno",
    "Establecer un ROAS mínimo objetivo antes de lanzar nuevas campañas",
  ],

  expertTips: [
    "Un ROAS de 4x se considera comúnmente un buen punto de referencia general, pero el objetivo real depende de tu margen de ganancia — un negocio con margen bajo necesita un ROAS más alto para ser rentable.",
    "El ROAS no incluye otros costos del negocio (producción, envío, personal) — para una imagen completa de rentabilidad, complementa con el cálculo de ROI.",
    "Compara el ROAS de distintas campañas o canales para identificar dónde reasignar presupuesto de forma más eficiente.",
    "Un ROAS alto en una campaña pequeña no siempre significa que escalarla mantendrá el mismo rendimiento — monitorea el ROAS conforme aumentes el presupuesto.",
  ],

  commonMistakes: [
    { mistake: "Confundir ROAS con ROI", fix: "El ROAS solo considera ingresos versus gasto publicitario; el ROI considera todos los costos del negocio para calcular la rentabilidad real." },
    { mistake: "Asumir que un ROAS positivo siempre significa ganancia real", fix: "Un ROAS de 2x puede no ser rentable si tu margen de ganancia es bajo y otros costos del negocio consumen esa diferencia." },
    { mistake: "No considerar el margen de ganancia al establecer un ROAS objetivo", fix: "Calcula el ROAS mínimo necesario según tu margen específico, no uses un número genérico para todos los negocios." },
    { mistake: "Evaluar el ROAS de forma aislada sin ver el panorama completo", fix: "Combina el ROAS con otras métricas como costo por adquisición y valor de vida del cliente para decisiones más informadas." },
  ],

  faq: [
    { q: "¿Qué es el ROAS?", a: "ROAS (Return on Ad Spend) es una métrica que mide cuántos ingresos genera cada dólar invertido en publicidad, calculada dividiendo los ingresos entre el gasto publicitario." },
    { q: "¿Cómo se calcula el ROAS?", a: "Se divide el ingreso total generado por la campaña entre el gasto publicitario total, expresado como un múltiplo (por ejemplo, 5x)." },
    { q: "¿Cuál es un buen ROAS?", a: "Un ROAS de 4x se considera comúnmente un buen punto de referencia general, pero el ROAS mínimo necesario para ser rentable depende de tu margen de ganancia específico." },
    { q: "¿Cuál es la diferencia entre ROAS y ROI?", a: "El ROAS solo compara ingresos publicitarios contra el gasto en anuncios; el ROI considera todos los costos del negocio (producción, envío, personal) para calcular la rentabilidad real total." },
    { q: "¿Qué significa un ROAS de 1x?", a: "Significa que generaste exactamente lo mismo que gastaste en publicidad — el punto de equilibrio, sin ganancia ni pérdida en el gasto publicitario en sí." },
    { q: "¿Un ROAS bajo siempre significa una mala campaña?", a: "No necesariamente — depende de tu margen de ganancia y objetivos; algunas campañas de reconocimiento de marca aceptan un ROAS más bajo a cambio de otros beneficios." },
    { q: "¿Cómo mejoro mi ROAS?", a: "Puedes mejorar la segmentación de audiencia, optimizar las creatividades publicitarias, ajustar pujas, o mejorar la página de destino para aumentar la tasa de conversión." },
    { q: "¿El ROAS incluye impuestos o costos de producto?", a: "No, el ROAS solo considera ingresos brutos versus gasto publicitario; no resta el costo de los productos vendidos, impuestos u otros gastos operativos." },
  ],

  relatedCalculators: ["Calculadora de ROI", "Calculadora de Margen de Ganancia", "Calculadora de Tasa de Abandono", "Calculadora de Punto de Equilibrio"],

  youMayLike: pickYouMayLike("roas-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de ROAS",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};