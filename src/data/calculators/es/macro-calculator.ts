// src/data/calculators/es/macro-calculator.ts
// NOTE: real slug is "macro-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const macroCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Macros: Proteína, Carbos y Grasa 2026",
    metaDescription: "Calcula tus macros diarios (proteína, carbohidratos, grasa) según tu objetivo. Gratis e instantáneo.",
    canonicalSlug: "/es/health/macro-calculator",
    ogTitle: "Calculadora de Macros",
    ogDescription: "Descubre tus calorías y macros diarios según tu peso, altura y objetivo.",
    twitterTitle: "Calculadora de Macronutrientes",
    twitterDescription: "Calcula tus macros diarios al instante, gratis.",
  },
  hero: {
    text: "La Calculadora de Macros calcula tus calorías diarias y la distribución de proteína, carbohidratos y grasa según tu género, edad, altura, peso, nivel de actividad y objetivo.",
  },
  about: {
    text: `Los macronutrientes (proteína, carbohidratos y grasa) son los tres tipos de nutrientes que aportan energía al cuerpo, y su distribución ideal varía según tu objetivo: perder peso, mantenerlo o ganar masa muscular.

Esta calculadora usa tus datos personales y nivel de actividad para estimar tu gasto calórico diario total (TDEE), y luego distribuye esas calorías en gramos de proteína, carbohidratos y grasa según tu objetivo seleccionado.

Limitaciones: los resultados son estimaciones basadas en fórmulas estándar de nutrición; no sustituyen la evaluación de un nutricionista, especialmente si tienes condiciones médicas o necesidades dietéticas específicas.`,
  },
  formula: {
    formula: "Calorías Diarias = TMB × Factor de Actividad, ajustado según el Objetivo",
    variables: [
      { symbol: "TMB", meaning: "Tasa Metabólica Basal — calorías que tu cuerpo quema en reposo" },
      { symbol: "Factor de Actividad", meaning: "Multiplicador según qué tan activo eres (de 1.2 sedentario a 1.9 muy activo)" },
    ],
    explanation: "Se calcula primero la Tasa Metabólica Basal (TMB) usando género, edad, altura y peso, luego se multiplica por el factor de actividad para obtener el gasto calórico total, y finalmente se ajusta según el objetivo (déficit para perder peso, superávit para ganar).",
    interpretation: "Por ejemplo, una persona con TMB de 1,500 kcal y actividad moderada (factor 1.55) necesita aproximadamente 2,325 kcal diarias para mantener su peso.",
  },
  steps: [
    "Selecciona tu género.",
    "Ingresa tu edad, altura y peso.",
    "Selecciona tu nivel de actividad física.",
    "Selecciona tu objetivo: perder, mantener o ganar peso.",
    "Haz clic en Calcular para ver tus calorías y macros diarios.",
  ],
  examples: [
    { inputs: "Mujer, 28 años, 170 cm, 65 kg, actividad moderada, mantener peso", result: "~2,100 kcal, con proteína, carbohidratos y grasa distribuidos", explanation: "Un cálculo típico de mantenimiento para una persona con actividad física regular." },
    { inputs: "Hombre, 35 años, 180 cm, 85 kg, actividad activa, perder peso", result: "Déficit calórico calculado con mayor proteína relativa", explanation: "Para pérdida de peso, se reduce el total calórico manteniendo la proteína alta para preservar músculo." },
    { inputs: "Hombre, 22 años, 175 cm, 70 kg, sedentario, ganar peso", result: "Superávit calórico con más carbohidratos", explanation: "Para ganar peso, se aumenta el total calórico, generalmente con más carbohidratos para apoyar el entrenamiento." },
  ],
  practicalUses: [
    "Planear tu dieta diaria según tu objetivo de peso",
    "Ajustar tu ingesta de proteína para ganar o mantener masa muscular",
    "Calcular cuántas calorías necesitas para un déficit calórico saludable",
    "Ayudar a planear comidas balanceadas con la app de conteo de macros que uses",
    "Ajustar tu dieta al cambiar tu nivel de actividad física",
  ],
  expertTips: [
    "Un déficit calórico moderado (300-500 kcal por debajo de mantenimiento) es más sostenible a largo plazo que déficits extremos.",
    "Prioriza la proteína (generalmente 1.6-2.2 g por kg de peso corporal) si tu objetivo incluye ganar o preservar masa muscular.",
    "Ajusta tu nivel de actividad con honestidad: sobreestimar la actividad física es un error común que lleva a comer de más.",
    "Recalcula tus macros cada pocas semanas o al perder/ganar peso significativo, ya que tus necesidades calóricas cambian con tu peso corporal.",
  ],
  commonMistakes: [
    { mistake: "Sobreestimar el nivel de actividad física diaria", fix: "Sé realista: 'moderado' es entrenar 3-5 días a la semana, no simplemente caminar ocasionalmente." },
    { mistake: "Reducir las calorías demasiado agresivamente para perder peso rápido", fix: "Un déficit moderado preserva más masa muscular y es más fácil de mantener a largo plazo." },
    { mistake: "Ignorar la proteína al enfocarse solo en calorías totales", fix: "La proteína suficiente ayuda a preservar músculo durante la pérdida de peso y favorece la saciedad." },
    { mistake: "No ajustar los macros al cambiar de objetivo (por ejemplo, de perder a mantener)", fix: "Recalcula tus macros cada vez que cambies de objetivo o tu peso cambie significativamente." },
  ],
  faq: [
    { q: "¿Cómo se calculan los macros diarios?", a: "Se calcula primero tu Tasa Metabólica Basal (TMB), se ajusta según tu nivel de actividad para obtener el gasto calórico total, y luego se distribuye en gramos de proteína, carbohidratos y grasa según tu objetivo." },
    { q: "¿Cuántos gramos de proteína necesito al día?", a: "Generalmente se recomienda entre 1.6 y 2.2 gramos de proteína por kilogramo de peso corporal, especialmente si entrenas fuerza o buscas ganar/preservar músculo." },
    { q: "¿Cuál es la diferencia entre TMB y TDEE?", a: "La TMB es la energía que tu cuerpo quema en reposo; el TDEE (gasto calórico diario total) incluye además la energía que gastas por actividad física y digestión." },
    { q: "¿Cuántas calorías debo comer para perder peso?", a: "Generalmente se recomienda un déficit de 300 a 500 calorías por debajo de tu gasto calórico de mantenimiento para una pérdida de peso sostenible." },
    { q: "¿Cómo calculo mis macros para ganar masa muscular?", a: "Necesitas un ligero superávit calórico (200-300 kcal sobre mantenimiento) junto con suficiente proteína (1.6-2.2 g/kg) para apoyar el crecimiento muscular." },
    { q: "¿Qué distribución de macros es mejor para bajar de peso?", a: "No hay una única distribución perfecta, pero mantener la proteína alta mientras se reduce moderadamente carbohidratos o grasa suele ser efectivo y sostenible." },
    { q: "¿Cómo afecta mi nivel de actividad física al cálculo de macros?", a: "A mayor actividad física, mayor es tu gasto calórico total (TDEE), lo que aumenta las calorías y macros diarios que necesitas." },
    { q: "¿Debo contar macros o solo calorías?", a: "Contar macros da más control sobre la composición corporal (músculo vs grasa), mientras que solo contar calorías es más simple pero menos preciso para objetivos específicos." },
    { q: "¿Cuántos carbohidratos necesito si entreno fuerza?", a: "Depende de tu nivel de actividad y objetivo, pero los carbohidratos son la principal fuente de energía para entrenamientos intensos, por lo que suelen representar 40-50% de las calorías totales." },
    { q: "¿Es seguro seguir una dieta baja en grasa según esta calculadora?", a: "Esta calculadora distribuye macros según fórmulas estándar; para dietas especializadas (baja en grasa, cetogénica, etc.) consulta con un nutricionista para ajustar las proporciones a tus necesidades." },
    { q: "¿Cómo cambian mis macros si soy mujer vs hombre?", a: "La fórmula de TMB considera el género porque los hombres generalmente tienen mayor masa muscular, lo que resulta en un metabolismo basal más alto en promedio." },
    { q: "¿Debo recalcular mis macros después de perder peso?", a: "Sí, tus necesidades calóricas disminuyen a medida que pierdes peso, por lo que se recomienda recalcular cada 5-10 kg de cambio o cada pocas semanas." },
    { q: "¿Qué pasa si no cumplo exactamente mis macros todos los días?", a: "La consistencia general a lo largo de la semana importa más que la precisión exacta diaria; pequeñas variaciones no afectan significativamente tu progreso." },
    { q: "¿Esta calculadora sirve para dietas vegetarianas o veganas?", a: "Sí, los gramos de macros calculados aplican sin importar la fuente de alimentos; solo debes elegir fuentes vegetales de proteína, carbohidratos y grasa para cumplir tus objetivos." },
  ],
  relatedCalculators: ["Calculadora de Calorías (TDEE)", "Calculadora de IMC", "Calculadora de Peso Ideal", "Calculadora de Grasa Corporal"],
  youMayLike: pickYouMayLike("macro-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Macros",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};