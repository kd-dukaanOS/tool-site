export const bmiCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de IMC Online — Índice de Masa Corporal Gratis",
    metaDescription: "Calcula tu Índice de Masa Corporal (IMC) a partir de tu peso y estatura. Calculadora de IMC gratis con categoría, rango de peso saludable y análisis.",
    canonicalSlug: "/es/health/bmi-calculator",
    ogTitle: "Calculadora de IMC — Conoce tu Índice de Masa Corporal",
    ogDescription: "Ingresa tu peso y estatura para calcular al instante tu IMC, categoría y rango de peso saludable.",
    twitterTitle: "Calculadora de IMC Gratis",
    twitterDescription: "Calcula tu Índice de Masa Corporal y rango de peso saludable al instante.",
  },
  hero: { text: "La Calculadora de IMC obtiene al instante tu Índice de Masa Corporal a partir de tu peso y estatura. Consigue tu valor de IMC, categoría de peso y rango de peso saludable en segundos. Cualquiera que quiera monitorear su peso y salud puede usar esta herramienta gratuita." },
  about: { text: `La Calculadora de IMC calcula tu Índice de Masa Corporal, una medida de referencia que estima la grasa corporal según el peso y la estatura.

Es útil para dar seguimiento al progreso físico general, entender las categorías de peso, revisar rangos de peso saludable y conversar sobre metas de peso con un profesional de la salud.

La herramienta también muestra tu rango de peso saludable según tu estatura y qué tan lejos estás de él si estás fuera de la categoría normal.

Limitaciones: el IMC no considera la masa muscular, la densidad ósea, la edad ni el sexo, por lo que atletas y personas muy musculosas pueden mostrar un IMC engañosamente alto. Es una herramienta de referencia, no de diagnóstico.

Usa esta herramienta como punto de partida para entender tu estado de peso, no como sustituto de una consulta médica profesional.` },
  formula: {
    formula: "IMC = Peso (kg) ÷ Estatura (m)²",
    variables: [
      { symbol: "Peso", meaning: "Peso corporal en kilogramos" },
      { symbol: "Estatura", meaning: "Estatura en metros (convertida desde cm)" },
    ],
    explanation: "La calculadora divide tu peso en kilogramos entre el cuadrado de tu estatura en metros.",
    interpretation: "Por ejemplo, una persona de 70 kg y 1.75 m tiene un IMC de 70 / (1.75×1.75) = 22.9, que cae en la categoría de peso normal.",
  },
  steps: [
    "Ingresa tu peso en kilogramos.",
    "Ingresa tu estatura en centímetros.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta tu valor de IMC y categoría.",
    "Revisa tu rango de peso saludable según tu estatura.",
    "Lee el análisis sobre qué tan cerca estás del rango saludable.",
    "Copia el resumen con el botón de copiar si lo necesitas.",
  ],
  examples: [
    { inputs: "Peso: 70 kg, Estatura: 175 cm", result: "IMC: 22.9, Peso normal", explanation: "Un IMC dentro del rango saludable de 18.5–24.9." },
    { inputs: "Peso: 95 kg, Estatura: 170 cm", result: "IMC: 32.9, Obesidad", explanation: "Un IMC arriba de 30 cae en la categoría de obesidad." },
    { inputs: "Peso: 48 kg, Estatura: 165 cm", result: "IMC: 17.6, Bajo peso", explanation: "Un IMC menor a 18.5 cae en la categoría de bajo peso." },
    { inputs: "Peso: 82 kg, Estatura: 180 cm", result: "IMC: 25.3, Sobrepeso", explanation: "Justo arriba del rango normal, cayendo en sobrepeso." },
  ],
  practicalUses: [
    "Dar seguimiento al estado general de peso con el tiempo",
    "Fijar metas realistas de pérdida o aumento de peso",
    "Prepararse para una consulta médica o chequeo",
    "Verificar elegibilidad para programas de acondicionamiento o seguros",
    "Monitorear cambios de peso durante un plan de dieta",
    "Comparar el IMC antes y después de un programa de ejercicio",
    "Entender el rango de peso saludable para tu estatura",
    "Detectar posibles riesgos de salud relacionados con el peso",
  ],
  expertTips: [
    "El IMC no distingue músculo de grasa — los atletas pueden mostrar un IMC alto a pesar de tener poca grasa corporal.",
    "Usa el IMC junto con la circunferencia de cintura para una imagen más completa del riesgo de salud.",
    "Da seguimiento a la tendencia del IMC con el tiempo en vez de confiar en una sola medición.",
    "Niños y adolescentes necesitan tablas de IMC específicas por edad y sexo, no la fórmula de adultos.",
    "Consulta a un médico antes de hacer cambios importantes de dieta basados solo en el IMC.",
    "Combina el IMC con el porcentaje de grasa corporal para un seguimiento físico más preciso.",
    "Pésate a la misma hora del día para un seguimiento consistente.",
    "El rango de peso saludable de esta herramienta se basa en los límites estándar de IMC para adultos (18.5–24.9).",
  ],
  commonMistakes: [
    { mistake: "Ingresar la estatura en pies en vez de centímetros", fix: "Convierte pies/pulgadas a centímetros antes de ingresarlos, o usa un selector de unidades si está disponible." },
    { mistake: "Tratar el IMC como una medida directa de grasa corporal", fix: "El IMC es una estimación de referencia; las pruebas de composición corporal dan un porcentaje de grasa más preciso." },
    { mistake: "Ignorar la masa muscular en personas atléticas", fix: "Las personas musculosas pueden mostrar un IMC de 'sobrepeso' a pesar de tener poca grasa — considera el % de grasa corporal en su lugar." },
    { mistake: "Usar categorías de IMC de adultos para niños", fix: "Usa tablas pediátricas de IMC por edad para menores de 18 años." },
    { mistake: "Comparar el IMC entre distintas guías étnicas sin ajuste", fix: "Algunos organismos de salud usan límites de IMC ajustados para ciertas poblaciones — revisa las guías locales." },
  ],
  faq: [
    { q: "¿Cuál es un rango de IMC saludable?", a: "Un IMC entre 18.5 y 24.9 generalmente se considera un rango de peso saludable para la mayoría de los adultos." },
    { q: "¿Cómo se calcula el IMC?", a: "El IMC se calcula dividiendo el peso en kilogramos entre la estatura en metros al cuadrado (kg/m²)." },
    { q: "¿El IMC es preciso para todos?", a: "No, el IMC no considera la masa muscular, la densidad ósea, la edad ni el sexo, por lo que puede ser engañoso para atletas, personas mayores o muy musculosas." },
    { q: "¿Qué significa un IMC de 25?", a: "Un IMC de 25 marca el límite entre las categorías de peso normal y sobrepeso." },
    { q: "¿Se puede usar el IMC en niños?", a: "No, niños y adolescentes necesitan tablas de percentiles de IMC por edad y sexo en vez de la fórmula estándar de adultos." },
    { q: "¿Cuál es la diferencia entre IMC y porcentaje de grasa corporal?", a: "El IMC estima el estado de peso solo con estatura y peso, mientras que el porcentaje de grasa corporal mide directamente la proporción de grasa en tu cuerpo." },
    { q: "¿Un IMC de 18 es demasiado bajo?", a: "Sí, un IMC menor a 18.5 cae en la categoría de bajo peso y puede ameritar una conversación con un profesional de la salud." },
    { q: "¿El IMC es diferente entre hombres y mujeres?", a: "La fórmula y categorías estándar de IMC son iguales para ambos sexos, aunque la composición corporal naturalmente difiere." },
    { q: "¿Puedo usar el IMC para dar seguimiento a mi progreso físico?", a: "Puede mostrar tendencias generales, pero combinarlo con medidas corporales o porcentaje de grasa da una imagen más clara." },
    { q: "¿Por qué mi IMC es alto aunque estoy en forma?", a: "El IMC no diferencia músculo de grasa, así que las personas musculosas o atléticas suelen mostrar un IMC más alto a pesar de tener poca grasa corporal." },
    { q: "¿Qué IMC se considera obesidad?", a: "Un IMC de 30 o más se clasifica como obesidad." },
    { q: "¿Con qué frecuencia debo revisar mi IMC?", a: "Revisarlo cada pocas semanas o meses es suficiente para dar seguimiento a tendencias reales sin obsesionarse con fluctuaciones diarias." },
    { q: "¿Cuál es la fórmula del IMC en unidades imperiales (libras y pulgadas)?", a: "IMC = (Peso en libras ÷ Estatura en pulgadas²) × 703. Esta calculadora hace la conversión automáticamente." },
    { q: "¿El IMC considera el tamaño de cintura o la distribución de grasa?", a: "No, el IMC solo usa el peso y la estatura total. Combinarlo con la circunferencia de cintura o la relación cintura-cadera da una mejor idea de dónde se almacena la grasa." },
    { q: "¿Qué IMC se considera obesidad mórbida?", a: "Un IMC de 40 o más generalmente se clasifica como obesidad severa o mórbida, una categoría asociada a un riesgo de salud significativamente mayor." },
    { q: "¿Existe un estándar de IMC diferente para poblaciones asiáticas?", a: "Sí, algunas organizaciones de salud recomiendan límites de IMC más bajos (por ejemplo, sobrepeso desde alrededor de 23) para poblaciones asiáticas, ya que los riesgos de salud pueden aparecer con valores de IMC más bajos." },
    { q: "¿El embarazo puede afectar las lecturas de IMC?", a: "Sí, el IMC no es una medida confiable durante el embarazo debido al aumento de peso normal por el bebé, la placenta y los líquidos — los médicos usan guías específicas de aumento de peso en el embarazo." },
  ],
  relatedCalculators: ["Calculadora de TMB", "Calculadora de Calorías", "Calculadora de Peso Ideal", "Calculadora de Grasa Corporal", "Calculadora de Edad", "Calculadora de Macronutrientes"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Calculadora de IMC", h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"] },
};