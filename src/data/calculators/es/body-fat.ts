export const bodyFatCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Grasa Corporal — Método de la Marina de EE.UU.",
    metaDescription: "Calcula tu porcentaje de grasa corporal con el método de la Marina de EE.UU. usando estatura, cuello, cintura y cadera. Gratis y precisa.",
    canonicalSlug: "/es/health/body-fat-calculator",
    ogTitle: "Calculadora de Grasa Corporal — Método de la Marina",
    ogDescription: "Estima tu porcentaje de grasa corporal y su categoría con simples medidas de cinta métrica.",
    twitterTitle: "Calculadora de Grasa Corporal Gratis",
    twitterDescription: "Estima tu porcentaje de grasa corporal con el método de la Marina de EE.UU.",
  },

  hero: {
    text: "La Calculadora de Grasa Corporal estima tu porcentaje de grasa corporal usando el método de circunferencias de la Marina de EE.UU. Ingresa tu estatura, cuello y cintura (más cadera si eres mujer) para obtener una estimación y categoría al instante. Útil para dar seguimiento al progreso físico más allá del peso o el IMC.",
  },

  about: {
    text: `La Calculadora de Grasa Corporal estima el porcentaje de tu cuerpo compuesto por grasa usando el método de circunferencias de la Marina de EE.UU., que se basa en medidas de cuello, cintura y (en mujeres) cadera junto con la estatura.

Es útil para dar seguimiento al progreso físico con más precisión que el peso solo, ya que distingue la grasa de la masa magra. Atletas, personas que van al gimnasio y cualquiera en un proceso de recomposición corporal pueden beneficiarse de monitorear este número con el tiempo.

La herramienta también clasifica tu resultado en categorías como Grasa Esencial, Atlético, En Forma, Promedio u Obesidad.

Limitaciones: los métodos con cinta métrica son estimaciones y menos precisos que un estudio DEXA o el pesaje hidrostático. La técnica de medición afecta significativamente la precisión.

Usa esta herramienta para dar seguimiento a tendencias con el tiempo, en vez de confiar en una sola medición como un número absoluto.`,
  },

  formula: {
    formula: "Hombres: %Grasa = 495/(1.0324 − 0.19077×log10(cintura−cuello) + 0.15456×log10(estatura)) − 450\nMujeres: %Grasa = 495/(1.29579 − 0.35004×log10(cintura+cadera−cuello) + 0.221×log10(estatura)) − 450",
    variables: [
      { symbol: "Cintura", meaning: "Circunferencia de cintura en centímetros" },
      { symbol: "Cuello", meaning: "Circunferencia de cuello en centímetros" },
      { symbol: "Cadera", meaning: "Circunferencia de cadera en centímetros (solo mujeres)" },
      { symbol: "Estatura", meaning: "Estatura en centímetros" },
    ],
    explanation: "El método de la Marina de EE.UU. usa relaciones logarítmicas entre circunferencias corporales y la estatura para estimar el porcentaje de grasa corporal sin plicómetros ni estudios de imagen.",
    interpretation: "Por ejemplo, un hombre con cintura de 90cm, cuello de 38cm y estatura de 178cm obtiene aproximadamente 18% de grasa corporal, en la categoría En Forma.",
  },

  steps: [
    "Selecciona tu sexo.",
    "Ingresa tu estatura en centímetros.",
    "Mide e ingresa tu circunferencia de cuello en centímetros.",
    "Mide e ingresa tu circunferencia de cintura en centímetros.",
    "Si eres mujer, ingresa también tu circunferencia de cadera en centímetros.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta tu porcentaje estimado de grasa corporal y su categoría.",
  ],

  examples: [
    { inputs: "Hombre, estatura 178cm, cuello 38cm, cintura 90cm", result: "Grasa Corporal: 18.2%, En Forma", explanation: "Resultado de composición corporal de un hombre en buena forma." },
    { inputs: "Mujer, estatura 165cm, cuello 32cm, cintura 75cm, cadera 98cm", result: "Grasa Corporal: 27.4%, Promedio", explanation: "Composición corporal estándar de una mujer adulta." },
    { inputs: "Hombre, estatura 180cm, cuello 40cm, cintura 105cm", result: "Grasa Corporal: 26.8%, Obesidad", explanation: "Una relación cintura-cuello mayor indica más grasa corporal." },
    { inputs: "Mujer, estatura 170cm, cuello 30cm, cintura 65cm, cadera 90cm", result: "Grasa Corporal: 20.1%, Atlético", explanation: "Una medida de cintura menor en relación a la estatura indica una composición atlética." },
  ],

  practicalUses: [
    "Dar seguimiento a cambios de composición corporal durante un programa de fitness",
    "Fijar metas realistas de porcentaje de grasa corporal",
    "Comparar el progreso más allá de lo que muestra la báscula",
    "Estimar masa magra vs masa grasa para planes de entrenamiento",
    "Revisar elegibilidad para estándares físicos militares o de fitness",
    "Monitorear el riesgo de salud asociado al exceso de grasa abdominal",
    "Complementar los resultados de IMC con una métrica más consciente de la composición corporal",
    "Motivar metas de recomposición (perder grasa mientras se mantiene el músculo)",
  ],

  expertTips: [
    "Mide a la misma hora del día, idealmente en la mañana, para mayor consistencia.",
    "Usa una cinta métrica flexible sin elasticidad y mantenla ajustada pero no apretada.",
    "Toma la medida de cintura a la altura del ombligo, no en el punto más angosto.",
    "La medida del cuello debe tomarse justo debajo de la laringe.",
    "Da seguimiento a tendencias a lo largo de semanas, no a lecturas individuales, ya que pequeños errores de medición se acumulan.",
    "Combina con el progreso del entrenamiento de fuerza y fotos para una imagen más completa.",
    "La grasa corporal fluctúa naturalmente con la hidratación y la comida — mide con consistencia.",
    "Este método es menos preciso que un estudio DEXA, pero mucho más accesible y gratuito.",
  ],

  commonMistakes: [
    { mistake: "Medir la cintura en el punto más angosto en vez de a la altura del ombligo", fix: "Mide siempre a la altura del ombligo para que el método de la Marina funcione correctamente." },
    { mistake: "Usar una cinta métrica elástica o floja", fix: "Usa una cinta flexible adecuada y mantenla ajustada sin comprimir la piel." },
    { mistake: "Olvidar la medida de cadera en cálculos para mujeres", fix: "La circunferencia de cadera es obligatoria en la fórmula femenina — el resultado será impreciso sin ella." },
    { mistake: "Comparar lecturas individuales en vez de tendencias", fix: "Mide semanal o quincenalmente y observa la línea de tendencia, no un solo número." },
    { mistake: "Esperar precisión de nivel DEXA", fix: "Los métodos con cinta métrica tienen un margen de error de algunos puntos porcentuales — trata los resultados como estimaciones." },
  ],

  faq: [
    { q: "¿Qué tan preciso es el método de grasa corporal de la Marina de EE.UU.?", a: "Es razonablemente preciso para la mayoría de las personas, típicamente dentro de 3-4% de métodos más precisos como el DEXA, aunque la técnica afecta los resultados." },
    { q: "¿Qué medidas necesito para calcular la grasa corporal?", a: "Necesitas estatura, circunferencia de cuello y cintura para hombres, más circunferencia de cadera para mujeres." },
    { q: "¿Cuál es un porcentaje de grasa corporal saludable?", a: "Para hombres, 14-24% se considera típicamente un rango promedio a en forma; para mujeres, 21-31% es típico, aunque los rangos varían según la fuente y los objetivos." },
    { q: "¿Por qué la fórmula es distinta entre hombres y mujeres?", a: "Hombres y mujeres distribuyen la grasa de forma diferente por naturaleza, así que el método de la Marina usa puntos de medición y fórmulas distintas para mayor precisión." },
    { q: "¿Puedo medir mi grasa corporal sin plicómetro?", a: "Sí, el método de cinta métrica de la Marina de EE.UU. no requiere plicómetro, solo una cinta métrica flexible y medidas corporales básicas." },
    { q: "¿Cada cuánto debo volver a revisar mi porcentaje de grasa corporal?", a: "Cada 2-4 semanas generalmente es suficiente para ver tendencias significativas sin obsesionarse con fluctuaciones diarias." },
    { q: "¿Qué significa la categoría 'Grasa Esencial'?", a: "La grasa esencial es el mínimo de grasa corporal necesario para el funcionamiento fisiológico básico, y bajar de este rango puede ser poco saludable." },
    { q: "¿Este método es más preciso que el IMC?", a: "Sí, a diferencia del IMC, considera la composición corporal en vez de solo peso y estatura, lo que lo hace más relevante para el seguimiento físico." },
    { q: "¿El porcentaje de grasa corporal puede ser negativo o extremadamente bajo?", a: "No, los porcentajes saludables de grasa corporal tienen límites inferiores prácticos; resultados muy por debajo del rango de grasa esencial probablemente indican un error de medición." },
    { q: "¿La hidratación afecta las lecturas de grasa corporal?", a: "Sí, la deshidratación o la retención de líquidos pueden afectar ligeramente la medida de cintura y, por lo tanto, el resultado calculado." },
    { q: "¿Cómo se compara el método de la Marina con una báscula de grasa corporal?", a: "Las básculas de bioimpedancia eléctrica estiman la grasa corporal usando señales eléctricas y pueden verse afectadas por el nivel de hidratación, mientras que las medidas con cinta se ven menos afectadas por el balance de agua pero dependen de una técnica precisa y consistente." },
    { q: "¿Qué porcentaje de grasa corporal se considera 'abdomen marcado'?", a: "La definición abdominal suele empezar a notarse alrededor de 10-14% de grasa corporal en hombres y 16-22% en mujeres, aunque la genética influye en dónde exactamente empieza a verse." },
    { q: "¿Puedo usar pulgadas en vez de centímetros para las medidas?", a: "La fórmula requiere centímetros, pero puedes ingresar medidas en pulgadas y convertirlas (pulgadas × 2.54) — algunas calculadoras hacen esta conversión automáticamente." },
    { q: "¿Por qué mi porcentaje de grasa corporal es distinto al de la prueba de plicómetro de mi gimnasio?", a: "Distintos métodos (cinta, plicómetros, bioimpedancia, DEXA) usan diferentes supuestos y tienen distintos márgenes de error, así que los resultados suelen variar unos puntos porcentuales entre métodos." },
    { q: "¿Los atletas deberían usar un método distinto de grasa corporal?", a: "Los atletas con mucha masa muscular y poca grasa a veces obtienen resultados más precisos con estudios DEXA o plicómetros, ya que los métodos basados en circunferencias pueden ser menos precisos en niveles muy bajos de grasa corporal." },
  ],

  relatedCalculators: [
    "Calculadora de IMC",
    "Calculadora de TMB",
    "Calculadora de Peso Ideal",
    "Calculadora de Calorías",
    "Calculadora de Macronutrientes",
    "Calculadora de Cintura-Cadera",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Grasa Corporal",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};