// src/data/calculators/es/pregnancy-weight-gain-calculator.ts
// NOTE: category assumed "health" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const pregnancyWeightGainCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Aumento de Peso en el Embarazo 2026",
    metaDescription: "Calcula tu rango recomendado de aumento de peso durante el embarazo según tu IMC. Gratis e instantáneo.",
    canonicalSlug: "/es/health/pregnancy-weight-gain-calculator",
    ogTitle: "Calculadora de Aumento de Peso en el Embarazo",
    ogDescription: "Descubre el rango recomendado de aumento de peso durante tu embarazo.",
    twitterTitle: "Calculadora de Peso en el Embarazo",
    twitterDescription: "Calcula el rango recomendado de aumento de peso en tu embarazo.",
  },
  hero: {
    text: "La Calculadora de Aumento de Peso en el Embarazo estima tu rango recomendado de aumento de peso total y hasta tu semana actual, según tu IMC previo al embarazo y si esperas gemelos.",
  },
  about: {
    text: `El aumento de peso recomendado durante el embarazo varía según el IMC (Índice de Masa Corporal) que tenías antes de quedar embarazada, ya que las guías de salud establecen rangos distintos para personas con bajo peso, peso normal, sobrepeso u obesidad.

Esta calculadora recibe tu peso pre-embarazo, tu altura, tu semana actual de embarazo y si es un embarazo de gemelos, y calcula tu IMC pre-embarazo, tu categoría correspondiente, y el rango recomendado de aumento de peso total y hasta la fecha.

Limitaciones: estas son guías generales basadas en recomendaciones de salud pública; cada embarazo es distinto, y siempre debes seguir las indicaciones específicas de tu médico u obstetra sobre tu aumento de peso.`,
  },
  formula: {
    formula: "IMC Pre-Embarazo = Peso (kg) / Altura² (m)",
    variables: [
      { symbol: "Categoría de IMC", meaning: "Bajo peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidad (30+)" },
      { symbol: "Rango de Aumento Recomendado", meaning: "Varía según la categoría de IMC; las personas con bajo peso tienen un rango recomendado más alto que las con obesidad" },
    ],
    explanation: "Se calcula el IMC pre-embarazo dividiendo el peso en kilogramos entre la altura en metros al cuadrado; según la categoría resultante (bajo peso, normal, sobrepeso u obesidad) y si es un embarazo único o de gemelos, se aplica el rango de aumento de peso recomendado según guías de salud pública.",
    interpretation: "Por ejemplo, una persona con IMC normal (peso normal) antes del embarazo generalmente tiene un rango recomendado de aumento total de 11.5 a 16 kg en un embarazo único.",
  },
  steps: [
    "Ingresa tu peso antes del embarazo en kilogramos.",
    "Ingresa tu altura en centímetros.",
    "Ingresa tu semana actual de embarazo.",
    "Marca la casilla si es un embarazo de gemelos.",
    "Haz clic en Calcular para ver tu IMC, categoría y rango de aumento recomendado.",
  ],
  examples: [
    { inputs: "Peso: 60 kg, Altura: 165 cm, Semana: 20, Embarazo único", result: "IMC: 22 (Peso normal), rango total 11.5-16 kg", explanation: "Un embarazo único con IMC pre-embarazo dentro del rango normal." },
    { inputs: "Peso: 75 kg, Altura: 160 cm, Semana: 15, Embarazo único", result: "IMC: 29.3 (Sobrepeso), rango total recomendado menor", explanation: "Categorías de IMC más altas generalmente tienen rangos de aumento recomendado más bajos." },
    { inputs: "Peso: 55 kg, Altura: 168 cm, Semana: 24, Embarazo de gemelos", result: "Rango de aumento ajustado para embarazo múltiple", explanation: "Los embarazos de gemelos generalmente tienen rangos de aumento de peso recomendado más altos que los embarazos únicos." },
  ],
  practicalUses: [
    "Verificar si tu aumento de peso actual está dentro del rango recomendado para tu categoría de IMC",
    "Planear conversaciones informadas con tu médico sobre tu progreso de peso durante el embarazo",
    "Entender cómo tu IMC pre-embarazo afecta el rango de aumento de peso saludable",
    "Comparar el rango recomendado entre embarazos únicos y de gemelos",
    "Monitorear tu progreso de aumento de peso semana a semana durante el embarazo",
  ],
  expertTips: [
    "El aumento de peso durante el primer trimestre suele ser mínimo (1-2 kg); la mayor parte del aumento ocurre durante el segundo y tercer trimestre.",
    "Las personas con bajo peso antes del embarazo generalmente necesitan un rango de aumento más alto para apoyar un desarrollo fetal saludable.",
    "El aumento de peso recomendado es una guía general; factores individuales de salud pueden requerir ajustes específicos determinados por tu médico.",
    "En embarazos de gemelos, el rango de aumento de peso recomendado es generalmente mayor que en embarazos únicos, incluso dentro de la misma categoría de IMC.",
  ],
  commonMistakes: [
    { mistake: "Comparar tu aumento de peso con el de otras personas sin considerar tu IMC individual", fix: "El rango recomendado depende de tu propia categoría de IMC pre-embarazo, no es un número único para todas las personas." },
    { mistake: "Preocuparse excesivamente por pequeñas variaciones fuera del rango", fix: "Estas son guías generales; consulta con tu médico si tienes dudas específicas sobre tu progreso individual de aumento de peso." },
    { mistake: "Usar el peso actual en lugar del peso pre-embarazo para calcular el IMC base", fix: "El IMC usado para determinar el rango recomendado debe basarse en tu peso antes de quedar embarazada, no en tu peso actual." },
    { mistake: "Aplicar el rango de embarazo único a un embarazo de gemelos", fix: "Asegúrate de marcar correctamente la casilla de embarazo de gemelos, ya que el rango recomendado es distinto para embarazos múltiples." },
  ],
  faq: [
    { q: "¿Cuánto peso debo aumentar durante el embarazo?", a: "Depende de tu IMC pre-embarazo: las personas con peso normal generalmente aumentan entre 11.5 y 16 kg, mientras que quienes tienen bajo peso pueden necesitar un rango mayor, y quienes tienen obesidad un rango menor." },
    { q: "¿Cómo se calcula el IMC pre-embarazo?", a: "Se divide tu peso en kilogramos antes del embarazo entre tu altura en metros al cuadrado (IMC = peso / altura²)." },
    { q: "¿Cuánto peso es normal aumentar por trimestre?", a: "El primer trimestre generalmente involucra un aumento mínimo (1-2 kg), mientras que la mayor parte del aumento total ocurre durante el segundo y tercer trimestre." },
    { q: "¿El rango de aumento de peso es diferente para embarazos de gemelos?", a: "Sí, los embarazos de gemelos generalmente tienen un rango de aumento de peso recomendado más alto que los embarazos únicos, incluso dentro de la misma categoría de IMC." },
    { q: "¿Qué pasa si aumento menos peso del recomendado durante el embarazo?", a: "Un aumento insuficiente puede asociarse con ciertos riesgos para el desarrollo fetal; consulta con tu médico si tu aumento está significativamente por debajo del rango recomendado." },
    { q: "¿Qué pasa si aumento más peso del recomendado durante el embarazo?", a: "Un aumento excesivo puede asociarse con mayores riesgos durante el embarazo y el parto; tu médico puede ayudarte a ajustar tu dieta y actividad física de forma segura." },
    { q: "¿Cómo afecta el sobrepeso pre-embarazo al rango de aumento recomendado?", a: "Las personas con sobrepeso u obesidad antes del embarazo generalmente tienen un rango de aumento de peso recomendado más bajo que las personas con peso normal o bajo peso." },
    { q: "¿Es normal no aumentar peso durante las primeras semanas de embarazo?", a: "Sí, es común que el aumento de peso sea mínimo o incluso nulo durante el primer trimestre, especialmente si hay náuseas matutinas." },
    { q: "¿Debo seguir exactamente el rango recomendado por esta calculadora?", a: "Esta calculadora ofrece una guía general basada en recomendaciones de salud pública; siempre sigue las indicaciones específicas de tu médico u obstetra para tu caso individual." },
    { q: "¿Cómo cambia el rango de aumento de peso si tengo bajo peso antes del embarazo?", a: "Las personas con bajo peso pre-embarazo generalmente tienen el rango de aumento recomendado más alto, ya que necesitan más reservas para apoyar un desarrollo fetal saludable." },
    { q: "¿El aumento de peso recomendado incluye el peso del bebé?", a: "Sí, el rango total recomendado incluye el peso del bebé, la placenta, el líquido amniótico, el aumento de sangre y fluidos, y las reservas de grasa maternal." },
    { q: "¿Cómo puedo monitorear mi aumento de peso semana a semana?", a: "Puedes usar esta calculadora periódicamente actualizando tu semana actual de embarazo para comparar tu progreso contra el rango recomendado hasta ese punto." },
    { q: "¿El aumento de peso recomendado es el mismo para todas las edades?", a: "Las guías generales de IMC aplican ampliamente, pero factores individuales de edad y salud pueden influir en las recomendaciones específicas de tu médico." },
    { q: "¿Qué debo hacer si mi aumento de peso está muy fuera del rango recomendado?", a: "Consulta con tu médico u obstetra, quien puede evaluar tu situación específica y ajustar recomendaciones de dieta y actividad física según sea necesario." },
  ],
  relatedCalculators: ["Calculadora de Fecha de Parto", "Calculadora de IMC", "Calculadora de Calorías en el Embarazo", "Calculadora de Ovulación"],
  youMayLike: pickYouMayLike("pregnancy-weight-gain-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Aumento de Peso en el Embarazo",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};