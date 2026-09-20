// src/data/calculators/es/tfsa-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const tfsaCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de TFSA 2026 — Margen de Aportación y Crecimiento",
    metaDescription: "Calcula tu margen de aportación TFSA disponible y proyecta el crecimiento libre de impuestos de tu cuenta. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/tfsa-calculator",
    ogTitle: "Calculadora de TFSA",
    ogDescription: "Descubre tu margen de aportación TFSA y crecimiento proyectado libre de impuestos.",
    twitterTitle: "Calculadora de TFSA 2026",
    twitterDescription: "Calcula tu margen TFSA al instante.",
  },
  hero: {
    text: "La Calculadora de TFSA calcula tu margen de aportación total y disponible desde tu año de elegibilidad, detecta posibles penalizaciones por exceso de aportación, y proyecta el crecimiento libre de impuestos de una nueva aportación.",
  },
  about: {
    text: `El TFSA (Tax-Free Savings Account) es una cuenta de ahorro canadiense donde el crecimiento y los retiros están completamente libres de impuestos, con un límite de aportación anual que se acumula desde que te vuelves elegible (a partir de 2009, si tenías 18 años o más).

Esta calculadora suma tu margen de aportación acumulado según tu año de elegibilidad, resta lo que ya has aportado y sumado el margen recuperado por retiros del año anterior, para mostrarte tu margen disponible actual, y proyecta el crecimiento libre de impuestos de una nueva aportación planeada.

Limitaciones: esta calculadora usa los límites anuales oficiales conocidos; si el gobierno ajusta los límites futuros por inflación, deberás verificar las cifras más recientes de la Agencia de Ingresos de Canadá (CRA).`,
  },
  formula: {
    formula: "Margen Total = Suma de Límites Anuales desde el Año de Elegibilidad − Total Aportado + Retiros del Año Anterior",
    variables: [
      { symbol: "Margen Disponible", meaning: "Margen total acumulado menos lo que ya has aportado, más cualquier margen recuperado por retiros" },
      { symbol: "Impuesto de Penalización", meaning: "1% mensual sobre el monto de exceso de aportación, si aportas más de tu margen disponible" },
    ],
    explanation: "Se suman todos los límites anuales de TFSA desde el año en que te volviste elegible hasta el año fiscal actual, se resta el total aportado a la fecha, y se suma cualquier margen recuperado por retiros realizados el año anterior, para obtener el margen disponible.",
    interpretation: "Por ejemplo, si fuiste elegible desde 2009 y nunca has contribuido, tu margen total acumulado hasta 2026 sería de aproximadamente $109,000, disponible en su totalidad.",
  },
  steps: [
    "Ingresa el año en que te volviste elegible para el TFSA y el año fiscal actual.",
    "Ingresa el total que has aportado hasta la fecha y cualquier retiro realizado este año.",
    "Ingresa tu nueva aportación planeada, el rendimiento esperado y los años de crecimiento.",
    "Haz clic en Calcular para ver tu margen disponible, margen total y saldo proyectado.",
  ],
  examples: [
    { inputs: "Elegible desde: 2009, Año Actual: 2026, Total Aportado: $50,000", result: "Margen Disponible: ~$59,000", explanation: "Un contribuyente elegible desde el inicio del programa con aportaciones parciales." },
    { inputs: "Elegible desde: 2015, Año Actual: 2026, Total Aportado: $30,000", result: "Margen Disponible: ~$45,500", explanation: "Un contribuyente que se volvió elegible más tarde con menor margen acumulado total." },
    { inputs: "Elegible desde: 2009, Año Actual: 2026, Total Aportado: $109,000, Retiros: $10,000", result: "Margen Disponible: ~$10,000", explanation: "Un contribuyente que maximizó su margen pero recuperó espacio gracias a un retiro del año anterior." },
  ],
  practicalUses: [
    "Verificar cuánto margen de aportación TFSA tienes disponible este año",
    "Evitar penalizaciones por exceso de aportación planeando tus depósitos con anticipación",
    "Proyectar el crecimiento libre de impuestos de una nueva aportación",
    "Planear la recuperación de margen después de un retiro",
    "Comparar el TFSA con otras opciones de ahorro como el RRSP",
  ],
  expertTips: [
    "El margen retirado de un TFSA se recupera automáticamente el 1 de enero del año siguiente, no inmediatamente después del retiro.",
    "El límite de TFSA no depende de tu ingreso, a diferencia del RRSP, por lo que todos los canadienses elegibles tienen el mismo límite anual.",
    "Contribuir en exceso genera una multa del 1% mensual sobre el monto excedente hasta que se retire o se use el margen del año siguiente.",
    "El TFSA es ideal para metas de ahorro flexibles, ya que puedes retirar sin penalización fiscal en cualquier momento.",
  ],
  commonMistakes: [
    { mistake: "Asumir que el margen retirado se recupera inmediatamente", fix: "El margen retirado se suma de nuevo a tu límite disponible a partir del 1 de enero del año siguiente, no de inmediato." },
    { mistake: "No verificar tu margen disponible antes de una gran aportación", fix: "Consulta tu Cuenta Mi Cuenta CRA o usa esta calculadora antes de hacer aportaciones grandes para evitar penalizaciones." },
    { mistake: "Confundir el límite de TFSA con el de RRSP", fix: "El TFSA tiene un límite fijo anual igual para todos, mientras que el RRSP depende de un porcentaje de tu ingreso ganado." },
  ],
  faq: [
    { q: "¿Cómo se calcula mi margen de aportación TFSA?", a: "Se suman todos los límites anuales de TFSA desde tu año de elegibilidad hasta el año actual, se resta lo ya aportado, y se suma cualquier margen recuperado por retiros del año anterior." },
    { q: "¿Cuál es el límite de aportación TFSA para 2026?", a: "El límite anual para 2026 es $7,000; si has sido elegible desde 2009 y nunca has contribuido, tu límite acumulado total es de aproximadamente $109,000." },
    { q: "¿Qué pasa si retiro dinero de mi TFSA?", a: "El monto retirado se suma de nuevo a tu límite de contribución disponible a partir del 1 de enero del año siguiente al retiro." },
    { q: "¿Qué pasa si aporto más de mi margen disponible?", a: "Se genera una multa del 1% mensual sobre el monto de exceso de aportación hasta que se retire o se use el margen del año siguiente." },
    { q: "¿El límite de TFSA depende de mi ingreso?", a: "No, a diferencia del RRSP, el límite de aportación TFSA es el mismo para todos los canadienses elegibles, sin importar el nivel de ingreso." },
    { q: "¿A qué edad puedo empezar a contribuir a un TFSA?", a: "Debes tener al menos 18 años (o 19 en algunas provincias) y ser residente canadiense con un número de seguro social válido." },
    { q: "¿Los retiros del TFSA están gravados?", a: "No, tanto el crecimiento como los retiros de un TFSA están completamente libres de impuestos, a diferencia de un RRSP." },
    { q: "¿Cuál es la diferencia entre TFSA y RRSP?", a: "El TFSA no da deducción fiscal al contribuir pero los retiros son libres de impuestos; el RRSP reduce tu ingreso gravable al contribuir pero los retiros se gravan como ingreso." },
    { q: "¿Puedo tener múltiples cuentas TFSA?", a: "Sí, pero tu límite total de aportación se aplica a la suma de todas tus cuentas TFSA combinadas, no por cuenta individual." },
    { q: "¿Cómo verifico mi margen TFSA oficial con la CRA?", a: "Puedes consultar tu límite exacto de aportación TFSA a través de tu cuenta Mi Cuenta CRA en línea." },
    { q: "¿El TFSA es una buena opción si tengo un ingreso bajo actualmente?", a: "Sí, ya que no obtienes deducción fiscal inmediata con el RRSP si tu ingreso es bajo, el TFSA puede ser más ventajoso al no dar deducción pero tampoco gravar los retiros." },
    { q: "¿Qué pasa si no uso todo mi margen de aportación un año?", a: "El margen no utilizado se acumula indefinidamente y se suma a tu límite disponible en años futuros, sin fecha de expiración." },
  ],
  relatedCalculators: ["Calculadora RRSP", "Calculadora de Jubilación de Canadá", "Calculadora de Interés Compuesto", "Calculadora de Sueldo Neto Canadá"],
  youMayLike: pickYouMayLike("tfsa-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de TFSA",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};