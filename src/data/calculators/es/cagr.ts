export const cagrCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de CAGR — Tasa de Crecimiento Anual Compuesta",
    metaDescription: "Calcula el CAGR (Tasa de Crecimiento Anual Compuesta) de tus inversiones. Calculadora de CAGR gratis con rentabilidad absoluta y múltiplo de riqueza.",
    canonicalSlug: "/es/finance/cagr-calculator",
    ogTitle: "Calculadora de CAGR — Tasa de Crecimiento Anual Compuesta",
    ogDescription: "Encuentra la tasa de crecimiento anual compuesta de tu inversión a partir del valor inicial, valor final y período de tiempo.",
    twitterTitle: "Calculadora de CAGR Gratis",
    twitterDescription: "Calcula la tasa de crecimiento anual compuesta al instante.",
  },
  hero: {
    text: "La Calculadora de CAGR encuentra la Tasa de Crecimiento Anual Compuesta de una inversión — el retorno anual suavizado durante un período. Ingresa el valor inicial, el valor final y los años para ver al instante el CAGR, la rentabilidad absoluta y el múltiplo de riqueza. Esencial para inversionistas que comparan retornos entre distintos activos.",
  },
  about: {
    text: `La Calculadora de CAGR calcula la Tasa de Crecimiento Anual Compuesta, una medida estandarizada de la tasa de crecimiento anual de una inversión asumiendo que las ganancias se reinvierten cada año.

Es útil para comparar el desempeño de fondos mutuos, acciones, bienes raíces o el crecimiento de ingresos de un negocio de forma equivalente, ya que suaviza la volatilidad año a año en una sola tasa consistente.

La herramienta también muestra la rentabilidad absoluta, el crecimiento total en valor, y el múltiplo de riqueza (cuántas veces creció tu dinero).

Limitaciones: el CAGR asume un crecimiento suave y constante, y no refleja la volatilidad real año a año, que puede ser significativa en acciones.

Usa esta herramienta para comparar opciones de inversión de forma justa, especialmente entre distintos períodos de tiempo.`,
  },
  formula: {
    formula: "CAGR = [(Valor Final ÷ Valor Inicial)^(1/Años) − 1] × 100",
    variables: [
      { symbol: "Valor Inicial", meaning: "El monto de inversión inicial" },
      { symbol: "Valor Final", meaning: "El valor final de la inversión" },
      { symbol: "Años", meaning: "Número de años que se mantuvo la inversión" },
    ],
    explanation: "El CAGR calcula la tasa anual constante que haría crecer tu valor inicial hasta el valor final durante el período dado, considerando el interés compuesto.",
    interpretation: "Por ejemplo, $100,000 que crecen a $200,000 en 5 años dan un CAGR de aproximadamente 14.87% anual.",
  },
  steps: [
    "Ingresa el valor de la inversión inicial.",
    "Ingresa el valor final de la inversión.",
    "Ingresa el número de años que mantuviste la inversión.",
    "Haz clic en Calcular.",
    "Consulta el porcentaje de CAGR.",
    "Revisa la rentabilidad absoluta y el crecimiento total en valor.",
    "Consulta el múltiplo de riqueza que muestra cuántas veces creció tu dinero.",
  ],
  examples: [
    { inputs: "Inicial: $100,000, Final: $200,000, Años: 5", result: "CAGR: 14.87%, Múltiplo de Riqueza: 2x", explanation: "La inversión se duplicó en 5 años." },
    { inputs: "Inicial: $50,000, Final: $150,000, Años: 10", result: "CAGR: 11.61%, Múltiplo de Riqueza: 3x", explanation: "Triplicación a largo plazo del valor de la inversión." },
    { inputs: "Inicial: $100,000, Final: $180,000, Años: 3", result: "CAGR: 21.64%, Múltiplo de Riqueza: 1.8x", explanation: "Tasa de crecimiento fuerte a corto plazo." },
    { inputs: "Inicial: $200,000, Final: $250,000, Años: 2", result: "CAGR: 11.80%, Múltiplo de Riqueza: 1.25x", explanation: "Crecimiento modesto a corto plazo." },
  ],
  practicalUses: [
    "Comparar el desempeño de fondos mutuos entre distintos períodos",
    "Evaluar la tasa de crecimiento de una inversión en acciones",
    "Comparar la plusvalía de bienes raíces con otras clases de activos",
    "Evaluar el crecimiento de ingresos de un negocio año tras año",
    "Comparar varias opciones de inversión en igualdad de condiciones",
    "Proyectar el valor futuro de una inversión usando el CAGR histórico",
    "Evaluar si una inversión superó la inflación",
    "Fijar expectativas realistas de retorno a largo plazo",
  ],
  expertTips: [
    "El CAGR suaviza la volatilidad — revisa siempre los retornos reales año por año para evaluar el riesgo también.",
    "Usa el CAGR para comparar inversiones de distinta duración de forma justa.",
    "Un CAGR alto en un período corto puede no ser sostenible a largo plazo.",
    "Combina el CAGR con la desviación estándar para entender el retorno ajustado por riesgo.",
    "El CAGR no considera aportes adicionales durante el período — solo mide el crecimiento de inicio a fin.",
    "Para inversiones periódicas, usa la TIR (XIRR) en vez del CAGR para mayor precisión.",
    "Compara el CAGR contra la inflación para entender el retorno real (ajustado por inflación).",
    "Los períodos más largos generalmente producen cifras de CAGR más estables y significativas.",
  ],
  commonMistakes: [
    { mistake: "Usar el CAGR para inversiones con aportes periódicos", fix: "Usa la TIR (XIRR) en vez del CAGR cuando hay múltiples flujos de efectivo, como aportes periódicos." },
    { mistake: "Asumir que el CAGR refleja los retornos anuales reales", fix: "El CAGR es un promedio suavizado; los retornos reales probablemente variaron significativamente de año a año." },
    { mistake: "Comparar el CAGR entre períodos muy distintos sin contexto", fix: "Considera el riesgo y las condiciones del mercado, no solo el porcentaje, al comparar." },
    { mistake: "Ignorar impuestos y comisiones en el valor final", fix: "Usa valores después de impuestos y comisiones para un CAGR neto realista." },
    { mistake: "Confundir el CAGR con la rentabilidad absoluta", fix: "La rentabilidad absoluta es la ganancia porcentual total; el CAGR es la tasa anualizada — difieren significativamente en períodos de varios años." },
  ],
  faq: [
    { q: "¿Qué es el CAGR?", a: "El CAGR (Tasa de Crecimiento Anual Compuesta) es la tasa de crecimiento promedio anualizada de una inversión durante un período específico, asumiendo que las ganancias se reinvierten cada año." },
    { q: "¿En qué se diferencia el CAGR de la rentabilidad absoluta?", a: "La rentabilidad absoluta es la ganancia porcentual total durante todo el período, mientras que el CAGR expresa ese crecimiento como una tasa anual suavizada, facilitando la comparación entre períodos." },
    { q: "¿Por qué es útil el CAGR para los inversionistas?", a: "Permite comparar de forma justa inversiones con distintos períodos de tenencia y volatilidad, expresando el crecimiento como un solo número anualizado." },
    { q: "¿El CAGR considera la volatilidad del mercado?", a: "No, el CAGR suaviza las fluctuaciones y solo refleja los valores inicial y final, no los altibajos intermedios." },
    { q: "¿Cuál es un buen CAGR para inversiones en bolsa?", a: "Varía según el mercado y el período, pero muchos inversionistas de largo plazo consideran un 12-15% anual como un benchmark razonable en mercados en crecimiento." },
    { q: "¿Puede el CAGR ser negativo?", a: "Sí, si el valor final es menor que el valor inicial, el CAGR será negativo, indicando una pérdida durante el período." },
    { q: "¿Debo usar el CAGR para inversiones periódicas (SIP)?", a: "No, ya que las inversiones periódicas involucran múltiples aportes, la TIR (XIRR) es más apropiada que el CAGR, que asume una sola inversión de una sola vez." },
    { q: "¿Cuántos años de datos necesito para el CAGR?", a: "Solo necesitas el valor inicial, el valor final, y el número de años entre ambos — no necesitas datos de cada año intermedio." },
    { q: "¿Un CAGR más alto siempre es mejor?", a: "Generalmente sí, pero debe evaluarse junto con el riesgo, la volatilidad y si la tasa de crecimiento es sostenible." },
    { q: "¿Se puede usar el CAGR para el crecimiento de ingresos de un negocio?", a: "Sí, las empresas suelen usar el CAGR para expresar tasas consistentes de crecimiento de ingresos o utilidades durante varios años." },
    { q: "¿Cómo calculo el CAGR en Excel o Google Sheets?", a: "Usa la fórmula =(Valor Final/Valor Inicial)^(1/Años)-1, y luego da formato de porcentaje al resultado — esto refleja exactamente lo que calcula esta herramienta." },
    { q: "¿Cuál es un CAGR realista para una cuenta de ahorros o un CDT?", a: "Los depósitos a plazo fijo y las cuentas de ahorro suelen rendir un CAGR de un dígito bajo hasta alrededor del 6-7%, dependiendo de las tasas de interés vigentes, muy por debajo de los mercados bursátiles históricamente." },
    { q: "¿En qué se diferencia el CAGR del retorno anualizado (TIR/XIRR)?", a: "El CAGR asume una sola inversión de una vez mantenida durante todo el período, mientras que la TIR (XIRR) maneja múltiples flujos de efectivo en distintas fechas, como aportes periódicos o retiros escalonados." },
    { q: "¿Puedo usar el CAGR para proyectar el valor futuro de una inversión?", a: "Sí, reorganizando la fórmula a Valor Final = Valor Inicial × (1 + CAGR)^Años, aunque esto asume que la tasa de crecimiento histórica se mantiene sin cambios, lo cual no está garantizado." },
    { q: "¿Qué período de tiempo es ideal para calcular el CAGR?", a: "Los períodos más largos (5-10+ años) generalmente producen cifras de CAGR más significativas ya que suavizan el ruido del mercado a corto plazo; el CAGR en menos de un año puede ser engañoso al anualizarlo." },
  ],
  relatedCalculators: [
    "Calculadora SIP", "Calculadora de Interés Compuesto", "Calculadora de TIR (XIRR)",
    "Calculadora de Interés Simple", "Calculadora de Retorno de Inversión", "Calculadora de Inflación",
  ],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de CAGR",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};