// src/data/calculators/es/canada-retirement.ts
import { pickYouMayLike } from "../../calculator-pool";

export const canadaRetirementCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Jubilación Canadá 2026 — Proyección RRSP y TFSA",
    metaDescription: "Proyecta tu saldo combinado de RRSP y TFSA al jubilarte en Canadá. Calculadora gratis con los topes de contribución de 2026 y crecimiento compuesto.",
    canonicalSlug: "/es/finance/canada-retirement",
    ogTitle: "Calculadora de Jubilación de Canadá — RRSP + TFSA",
    ogDescription: "Mira tu saldo proyectado de jubilación combinando RRSP y TFSA con el crecimiento compuesto.",
    twitterTitle: "Calculadora de Jubilación Canadá 2026",
    twitterDescription: "Proyecta tu saldo de jubilación en Canadá, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Jubilación de Canadá proyecta tu saldo combinado de RRSP y TFSA al momento de jubilarte, a partir de tus saldos actuales, contribuciones anuales y el rendimiento esperado — para que veas hoy si vas bien encaminado.",
  },

  about: {
    text: `En Canadá, las dos cuentas principales para ahorrar para la jubilación son el RRSP (Registered Retirement Savings Plan) y el TFSA (Tax-Free Savings Account). El RRSP reduce tu ingreso gravable al contribuir, pero los retiros se gravan como ingreso; el TFSA no da deducción al contribuir, pero el crecimiento y los retiros están completamente libres de impuesto.

Esta calculadora proyecta ambos saldos por separado usando tus ahorros actuales, tus contribuciones anuales (limitadas a los topes de 2026), y el rendimiento de inversión esperado, mostrando también cuánto del saldo final proviene del crecimiento compuesto versus tus propios aportes.

Para 2026, el límite de contribución al RRSP es de $33,810 (o 18% de tu ingreso ganado del año anterior, lo que sea menor), y el límite anual del TFSA es de $7,000, con un tope acumulado de $109,000 para quienes han sido elegibles desde 2009 y nunca han contribuido.

Limitaciones: esta calculadora asume una tasa de aporte y un retorno promedio fijo — no modela la volatilidad del mercado, cambios en los límites de contribución futuros, ni el impacto de retiros anticipados.`,
  },

  formula: {
    formula: "Saldoₙ = (Saldoₙ₋₁ + Contribución Anual) × (1 + Tasa de Retorno)",
    variables: [
      { symbol: "Contribución Anual RRSP/TFSA", meaning: "Tu aporte anual a cada cuenta, limitado a los topes de 2026" },
      { symbol: "Tasa de Retorno", meaning: "Retorno anual esperado de la inversión, aplicado por igual a ambas cuentas" },
    ],
    explanation: "Cada año, tu contribución se suma al saldo de cada cuenta (RRSP y TFSA por separado), y el saldo completo se compone al retorno asumido — repetido hasta tu edad de jubilación, y luego se combinan ambos saldos.",
    interpretation: "Por ejemplo, comenzando con $20,000 en RRSP y $10,000 en TFSA a los 30 años, contribuyendo $8,000 y $7,000 anuales respectivamente con un retorno del 7% hasta los 65 años, se proyecta un saldo combinado de aproximadamente $1,600,000.",
  },

  steps: [
    "Ingresa tu edad actual y tu edad objetivo de jubilación.",
    "Ingresa tu saldo actual de RRSP y de TFSA.",
    "Ingresa tu contribución anual planeada a cada cuenta.",
    "Ingresa el rendimiento de inversión anual esperado.",
    "Haz clic en Calcular.",
    "Revisa tu saldo total proyectado, dividido entre RRSP, TFSA y crecimiento de inversión.",
  ],

  examples: [
    { inputs: "Edad 30→65, RRSP: $20,000, TFSA: $10,000, Aporte RRSP: $8,000, Aporte TFSA: $7,000, Retorno: 7%", result: "Saldo Total Proyectado: ~$1,600,000", explanation: "Un ahorrador de mitad de carrera maximizando ambas cuentas de forma consistente." },
    { inputs: "Edad 25→65, RRSP: $0, TFSA: $0, Aporte RRSP: $5,000, Aporte TFSA: $5,000, Retorno: 7%", result: "Saldo Total Proyectado: ~$2,100,000", explanation: "Empezar desde cero pero temprano permite que el interés compuesto trabaje durante 40 años." },
    { inputs: "Edad 45→65, RRSP: $100,000, TFSA: $50,000, Aporte RRSP: $10,000, Aporte TFSA: $7,000, Retorno: 6%", result: "Saldo Total Proyectado: ~$780,000", explanation: "Un comienzo más tardío con aportes más altos para compensar el tiempo perdido." },
  ],

  practicalUses: [
    "Verificar si tus contribuciones actuales van encaminadas para una jubilación cómoda",
    "Comparar cómo distribuir tus ahorros entre RRSP y TFSA",
    "Planear una edad de jubilación según un saldo objetivo",
    "Entender cuánto del saldo final proviene del crecimiento versus tus propios aportes",
    "Probar el impacto de aumentar tus contribuciones anuales en las proyecciones a largo plazo",
    "Revisar tu progreso cada año junto a un plan de jubilación más amplio",
  ],

  expertTips: [
    "El RRSP conviene más cuando tu tasa de impuesto actual es alta y esperas una tasa menor al retirarte; el TFSA conviene para flexibilidad libre de impuesto en cualquier momento.",
    "El límite del TFSA no depende de tu ingreso — es el mismo para todos los canadienses elegibles cada año.",
    "Empezar antes importa más que aportar más después — el tiempo en el mercado es la palanca más grande en esta fórmula.",
    "Si retiras dinero de tu TFSA, ese espacio se recupera automáticamente al año siguiente, a diferencia del RRSP.",
    "Esta proyección no considera la volatilidad del mercado — trata el resultado como un promedio a largo plazo, no una garantía.",
  ],

  commonMistakes: [
    { mistake: "Contribuir más del límite anual de RRSP o TFSA", fix: "Verifica tu espacio disponible en tu cuenta de Mi Cuenta CRA antes de contribuir; el exceso genera una multa mensual del 1%." },
    { mistake: "Asumir que solo las contribuciones construyen el saldo", fix: "El crecimiento compuesto suele ser el componente más grande en un horizonte largo — revisa la cifra de crecimiento en tus resultados." },
    { mistake: "No aprovechar el espacio de TFSA recuperado tras un retiro", fix: "El espacio retirado de un TFSA se suma de nuevo a tu límite el 1 de enero del año siguiente — no lo pierdas de vista." },
    { mistake: "Ignorar la diferencia fiscal entre RRSP y TFSA al planear retiros", fix: "Los retiros de RRSP se gravan como ingreso; los de TFSA están libres de impuesto — planea tu estrategia de retiro con eso en mente." },
    { mistake: "Usar un retorno esperado poco realista", fix: "Los promedios históricos del mercado bursátil se modelan comúnmente entre 6-8% antes de inflación; evita inflar proyecciones con tasas demasiado optimistas." },
  ],

  faq: [
    { q: "¿Cuál es la diferencia entre RRSP y TFSA?", a: "El RRSP reduce tu ingreso gravable al contribuir pero grava los retiros como ingreso; el TFSA no da deducción al contribuir pero el crecimiento y los retiros están libres de impuesto." },
    { q: "¿Cuál es el límite de contribución al RRSP en 2026?", a: "El límite para 2026 es $33,810, o el 18% de tu ingreso ganado en 2025, lo que sea menor, más cualquier espacio no usado de años anteriores." },
    { q: "¿Cuál es el límite de contribución al TFSA en 2026?", a: "El límite anual para 2026 es $7,000; si has sido elegible desde 2009 y nunca has contribuido, tu límite acumulado total es de $109,000." },
    { q: "¿Debería priorizar mi RRSP o mi TFSA?", a: "Generalmente el RRSP conviene más si tu tasa de impuesto actual es alta y esperas retirarte con una tasa menor; el TFSA conviene para flexibilidad y si tu ingreso actual es bajo." },
    { q: "¿Qué pasa si retiro dinero de mi TFSA?", a: "El monto retirado se suma de nuevo a tu límite de contribución a partir del 1 de enero del año siguiente, sin penalización." },
    { q: "¿Qué pasa si retiro dinero de mi RRSP antes de jubilarme?", a: "El monto retirado se grava como ingreso en el año del retiro y generalmente no puedes recuperar ese espacio de contribución, salvo excepciones como el Plan de Compra de Vivienda." },
    { q: "¿A qué edad debo empezar a ahorrar para mi jubilación en Canadá?", a: "Mientras más temprano mejor, ya que el crecimiento compuesto tiene más tiempo para trabajar; incluso aportes modestos desde los 20 o 30 años se acumulan significativamente." },
    { q: "¿Cuánto debería tener ahorrado para jubilarme cómodamente en Canadá?", a: "Depende de tu estilo de vida deseado, pero muchos asesores sugieren apuntar a un saldo que reemplace 70-80% de tu ingreso pre-jubilación combinando RRSP, TFSA y pensiones como CPP." },
    { q: "¿El RRSP y el TFSA reemplazan al CPP?", a: "No, son cuentas de ahorro personal que complementan al CPP (la pensión pública), no lo sustituyen." },
    { q: "¿Puedo tener tanto RRSP como TFSA al mismo tiempo?", a: "Sí, la mayoría de los canadienses usa ambas cuentas juntas para maximizar sus beneficios fiscales complementarios." },
    { q: "¿Qué pasa si contribuyo más del límite permitido?", a: "El exceso de contribución genera una multa del 1% mensual sobre el monto excedente hasta que se retire o se use el espacio del año siguiente." },
    { q: "¿Cómo afecta el rendimiento esperado a mi proyección de jubilación?", a: "Un rendimiento más alto acelera significativamente el crecimiento compuesto a largo plazo, pero también conlleva más riesgo; usa una cifra realista basada en tu perfil de inversión." },
  ],

  relatedCalculators: ["Calculadora de CPP", "Calculadora de Impuesto sobre la Renta Canadá", "Calculadora de EI", "Calculadora de 401(k)"],

  youMayLike: pickYouMayLike("canada-retirement"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Jubilación de Canadá",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};