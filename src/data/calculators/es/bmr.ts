export const bmrCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de TMB — Tasa Metabólica Basal Online Gratis",
    metaDescription: "Calcula tu Tasa Metabólica Basal (TMB): cuántas calorías quema tu cuerpo en reposo. Calculadora de TMB gratis con la fórmula Mifflin-St Jeor.",
    canonicalSlug: "/es/health/bmr-calculator",
    ogTitle: "Calculadora de TMB — Calorías que Quemas en Reposo",
    ogDescription: "Descubre cuántas calorías quema tu cuerpo en reposo total según tu edad, sexo, estatura y peso.",
    twitterTitle: "Calculadora de TMB Gratis",
    twitterDescription: "Calcula tu Tasa Metabólica Basal al instante.",
  },

  hero: {
    text: "La Calculadora de TMB (Tasa Metabólica Basal) encuentra cuántas calorías quema tu cuerpo en reposo total, solo para mantenerte con vida. Ingresa tu sexo, edad, estatura y peso para obtener una estimación al instante. Útil para cualquiera que planee una dieta, un plan de pérdida de peso o de ganancia muscular.",
  },

  about: {
    text: `La Calculadora de TMB estima cuántas calorías necesita tu cuerpo cada día para mantener funciones vitales básicas como respirar, la circulación y la producción celular estando en reposo.

Es útil como base para armar un presupuesto de calorías, ya sea que quieras bajar de peso, mantenerte o ganar músculo. Combinada con tu nivel de actividad, la TMB ayuda a calcular tu Gasto Energético Total Diario (GET).

La herramienta usa la ecuación de Mifflin-St Jeor, considerada ampliamente una de las fórmulas de TMB más precisas.

Limitaciones: la TMB es una estimación basada en promedios poblacionales y no considera con precisión diferencias metabólicas individuales, masa muscular exacta ni condiciones médicas que afecten el metabolismo.

Usa esta herramienta como punto de partida para planear tus calorías, y ajusta según los resultados reales.`,
  },

  formula: {
    formula: "Hombres: TMB = 10×peso(kg) + 6.25×estatura(cm) − 5×edad + 5\nMujeres: TMB = 10×peso(kg) + 6.25×estatura(cm) − 5×edad − 161",
    variables: [
      { symbol: "Peso", meaning: "Peso corporal en kilogramos" },
      { symbol: "Estatura", meaning: "Estatura en centímetros" },
      { symbol: "Edad", meaning: "Edad en años" },
    ],
    explanation: "La fórmula Mifflin-St Jeor combina peso, estatura y edad con una constante según el sexo para estimar el gasto calórico en reposo.",
    interpretation: "Por ejemplo, un hombre de 30 años, 75kg y 178cm tiene una TMB de aproximadamente 1731 calorías al día en reposo total.",
  },

  steps: [
    "Selecciona tu sexo.",
    "Ingresa tu edad en años.",
    "Ingresa tu estatura en centímetros.",
    "Ingresa tu peso en kilogramos.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta tu TMB en calorías por día.",
    "Usa este número como base para un plan de calorías o dieta.",
  ],

  examples: [
    { inputs: "Hombre, 30 años, 178cm, 75kg", result: "TMB: 1731 calorías/día", explanation: "Cálculo estándar de TMB para un hombre adulto." },
    { inputs: "Mujer, 28 años, 162cm, 58kg", result: "TMB: 1310 calorías/día", explanation: "Cálculo estándar de TMB para una mujer adulta." },
    { inputs: "Hombre, 45 años, 170cm, 90kg", result: "TMB: 1660 calorías/día", explanation: "Un peso mayor aumenta la TMB a pesar de que la edad la reduce." },
    { inputs: "Mujer, 22 años, 155cm, 50kg", result: "TMB: 1223 calorías/día", explanation: "Una edad menor y peso más bajo dan una necesidad calórica en reposo más baja." },
  ],

  practicalUses: [
    "Armar un plan de déficit calórico para bajar de peso",
    "Calcular un superávit calórico para ganar músculo",
    "Fijar una base antes de aplicar un multiplicador de actividad para el GET",
    "Comparar cambios en el metabolismo con el tiempo según el peso",
    "Planear comidas con un nutriólogo o nutricionista",
    "Entender la ingesta mínima de calorías para evitar restricciones excesivas",
    "Ajustar planes de dieta después de una pérdida o ganancia de peso importante",
    "Fijar metas realistas de fitness y nutrición",
  ],

  expertTips: [
    "La TMB no es tu necesidad total de calorías — multiplícala por un factor de actividad para obtener tu GET.",
    "Nunca comas por debajo de tu TMB por periodos prolongados; puede ralentizar el metabolismo y dañar tu salud.",
    "Vuelve a calcular tu TMB cada pocos kilos de cambio de peso para mayor precisión.",
    "El músculo quema más calorías que la grasa, así que el entrenamiento de fuerza puede subir tu TMB con el tiempo.",
    "Mifflin-St Jeor suele ser más precisa que la fórmula más antigua de Harris-Benedict.",
    "Combina la TMB con una app de seguimiento de comidas para manejar con precisión tu déficit calórico.",
    "El sueño y el estrés pueden afectar tu metabolismo real más allá de lo que muestra la fórmula.",
    "Usa la TMB como guía, no como ciencia exacta — hay variación individual.",
  ],

  commonMistakes: [
    { mistake: "Tratar la TMB como la necesidad total de calorías al día", fix: "Multiplica la TMB por un factor de actividad para obtener tu GET, tu necesidad calórica real." },
    { mistake: "Comer por debajo de la TMB para bajar de peso más rápido", fix: "Comer bajo la TMB a largo plazo puede ser contraproducente y dañino; busca un déficit moderado desde tu GET." },
    { mistake: "No actualizar la TMB después de cambios de peso", fix: "Vuelve a calcular cada 5-8kg de cambio de peso para una cifra precisa." },
    { mistake: "Ignorar las diferencias por sexo en la fórmula", fix: "Selecciona siempre el sexo correcto, ya que la constante cambia significativamente." },
    { mistake: "Confundir la TMB con la TMR (Tasa Metabólica en Reposo)", fix: "Son similares, pero la TMR se mide bajo condiciones menos estrictas y suele ser un poco más alta." },
  ],

  faq: [
    { q: "¿Qué es la TMB?", a: "La TMB (Tasa Metabólica Basal) es el número de calorías que tu cuerpo quema en reposo total para mantener funciones básicas como respirar y la circulación." },
    { q: "¿Cuál es la diferencia entre TMB y GET?", a: "La TMB son las calorías quemadas solo en reposo, mientras que el GET (Gasto Energético Total Diario) suma las calorías quemadas por la actividad diaria y el ejercicio a la TMB." },
    { q: "¿Qué fórmula usa esta calculadora?", a: "Esta calculadora usa la ecuación de Mifflin-St Jeor, considerada ampliamente una de las fórmulas de TMB más precisas para la mayoría de los adultos." },
    { q: "¿Debo comer exactamente mis calorías de TMB?", a: "No, comer exactamente tu TMB ignora la actividad diaria; usa tu GET (TMB × factor de actividad) para fijar un objetivo calórico adecuado." },
    { q: "¿La masa muscular afecta la TMB?", a: "Sí, el tejido muscular quema más calorías en reposo que el tejido graso, así que más masa muscular generalmente aumenta la TMB." },
    { q: "¿Qué tan precisa es una calculadora de TMB?", a: "Da una buena estimación basada en promedios poblacionales, pero el metabolismo individual puede variar 5-10% respecto al valor calculado." },
    { q: "¿La edad afecta la TMB?", a: "Sí, la TMB generalmente disminuye con la edad debido a la pérdida gradual de masa muscular y cambios hormonales." },
    { q: "¿Puedo aumentar mi TMB?", a: "Sí, ganar músculo con entrenamiento de fuerza y mantener una ingesta adecuada de proteína puede ayudar a aumentar la TMB con el tiempo." },
    { q: "¿Por qué los hombres tienen en promedio una TMB más alta que las mujeres?", a: "Los hombres generalmente tienen más masa muscular y menos grasa corporal en promedio, lo que eleva el gasto calórico en reposo." },
    { q: "¿La TMB es lo mismo que el metabolismo?", a: "La TMB es un componente importante del metabolismo, pero el metabolismo total también incluye las calorías quemadas por la digestión y la actividad física." },
    { q: "¿Cómo calculo la TMB a mano sin una calculadora?", a: "Usa directamente la fórmula Mifflin-St Jeor: para hombres, 10×peso(kg) + 6.25×estatura(cm) − 5×edad + 5; para mujeres, resta 161 en vez de sumar 5. Una calculadora solo automatiza esta operación." },
    { q: "¿Qué multiplicador de actividad debo usar para convertir la TMB en GET?", a: "Los multiplicadores comunes son 1.2 para sedentario, 1.375 para poca actividad, 1.55 para actividad moderada, 1.725 para muy activo y 1.9 para extremadamente activo." },
    { q: "¿Por qué las calculadoras de TMB dan resultados ligeramente distintos?", a: "Diferentes calculadoras pueden usar fórmulas distintas — Mifflin-St Jeor, Harris-Benedict o Katch-McArdle — cada una ponderando peso, estatura, edad y grasa corporal de forma un poco diferente." },
    { q: "¿La TMB disminuye durante la pérdida de peso?", a: "Sí, a medida que baja el peso corporal, la TMB también suele disminuir, ya que un cuerpo más pequeño necesita menos calorías en reposo — por eso los objetivos calóricos suelen necesitar recalcularse periódicamente." },
    { q: "¿Qué es la fórmula Katch-McArdle y en qué se diferencia?", a: "Katch-McArdle estima la TMB a partir de la masa libre de grasa en vez del peso total, lo que la hace más precisa para personas que conocen su porcentaje de grasa corporal, especialmente atletas con más masa muscular." },
  ],

  relatedCalculators: [
    "Calculadora de Calorías",
    "Calculadora de IMC",
    "Calculadora de Grasa Corporal",
    "Calculadora de Peso Ideal",
    "Calculadora de Macronutrientes",
    "Calculadora de GET",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de TMB",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};