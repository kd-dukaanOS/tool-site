// src/data/calculators/es/heart-rate-zone-calculator.ts
// NOTE: real slug is "heart-rate-zone-calculator" (category "health"), widget file is heartrate-calculator per your JSON
import { pickYouMayLike } from "../../calculator-pool";

export const heartRateZoneCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Zonas de Frecuencia Cardíaca 2026",
    metaDescription: "Calcula tu frecuencia cardíaca máxima y tus zonas de entrenamiento (quema de grasa, cardio, máximo) según tu edad. Gratis.",
    canonicalSlug: "/es/health/heart-rate-zone-calculator",
    ogTitle: "Calculadora de Zonas de Frecuencia Cardíaca",
    ogDescription: "Descubre tus zonas de entrenamiento ideales según tu frecuencia cardíaca máxima.",
    twitterTitle: "Calculadora de Zonas Cardíacas 2026",
    twitterDescription: "Calcula tus zonas de entrenamiento al instante.",
  },
  hero: {
    text: "La Calculadora de Zonas de Frecuencia Cardíaca estima tu frecuencia cardíaca máxima según tu edad y calcula tus zonas de entrenamiento: calentamiento, quema de grasa, cardio, intenso y máximo.",
  },
  about: {
    text: `Las zonas de frecuencia cardíaca son rangos de pulsaciones por minuto (ppm) que corresponden a distintos niveles de intensidad de ejercicio, cada uno con beneficios específicos para tu condición física.

Esta calculadora usa la fórmula estándar (220 menos tu edad) para estimar tu frecuencia cardíaca máxima, y calcula cinco zonas de entrenamiento como porcentajes de esa frecuencia máxima.

Limitaciones: la fórmula 220 menos edad es una estimación general con variación individual considerable; los atletas y personas con condiciones cardíacas deben consultar a un profesional para una evaluación más precisa.`,
  },
  formula: {
    formula: "Frecuencia Cardíaca Máxima = 220 − Edad",
    variables: [
      { symbol: "Zona de Calentamiento", meaning: "50-60% de la frecuencia cardíaca máxima, ideal para calentar antes del ejercicio" },
      { symbol: "Zona de Quema de Grasa", meaning: "60-70% de la frecuencia cardíaca máxima, óptima para quemar grasa como combustible" },
      { symbol: "Zona de Cardio", meaning: "70-80% de la frecuencia cardíaca máxima, mejora la resistencia cardiovascular" },
      { symbol: "Zona Intensa y Máxima", meaning: "80-100% de la frecuencia cardíaca máxima, usada en entrenamiento de alta intensidad" },
    ],
    explanation: "Se resta tu edad de 220 para estimar tu frecuencia cardíaca máxima, y luego se calculan los rangos de cada zona multiplicando esa frecuencia máxima por los porcentajes correspondientes.",
    interpretation: "Por ejemplo, a los 30 años tu frecuencia cardíaca máxima estimada es de 190 ppm, por lo que tu zona de quema de grasa (60-70%) sería aproximadamente 114-133 ppm.",
  },
  steps: [
    "Ingresa tu edad.",
    "Haz clic en Calcular.",
    "Revisa tu frecuencia cardíaca máxima y tus cinco zonas de entrenamiento.",
  ],
  examples: [
    { inputs: "Edad: 30", result: "Frecuencia Máxima: 190 ppm | Quema de Grasa: 114-133 ppm", explanation: "Un adulto joven con zonas de entrenamiento típicas." },
    { inputs: "Edad: 45", result: "Frecuencia Máxima: 175 ppm | Cardio: 123-140 ppm", explanation: "Un adulto de mediana edad con frecuencia máxima algo menor." },
    { inputs: "Edad: 60", result: "Frecuencia Máxima: 160 ppm | Calentamiento: 80-96 ppm", explanation: "Un adulto mayor con zonas ajustadas a una frecuencia máxima más baja." },
  ],
  practicalUses: [
    "Planear entrenamientos de cardio con la intensidad correcta según tu objetivo",
    "Enfocar sesiones de ejercicio en la zona de quema de grasa para pérdida de peso",
    "Evitar sobreentrenamiento manteniéndote dentro de zonas seguras",
    "Usar un monitor de frecuencia cardíaca junto con estas zonas para entrenar con más precisión",
    "Ajustar la intensidad de tu rutina de ejercicio a medida que mejora tu condición física",
  ],
  expertTips: [
    "La zona de quema de grasa no significa necesariamente más calorías totales quemadas; entrenar en cardio o intenso puede quemar más calorías en total aunque menos porcentaje venga de grasa.",
    "Si usas un reloj o monitor de frecuencia cardíaca, compara sus lecturas con estas zonas para ajustar la intensidad de tu entrenamiento en tiempo real.",
    "La fórmula 220 menos edad es una aproximación general; existen fórmulas más precisas (como Karvonen) que consideran tu frecuencia cardíaca en reposo.",
    "Consulta a un médico antes de iniciar entrenamiento de alta intensidad si tienes alguna condición cardíaca preexistente.",
  ],
  commonMistakes: [
    { mistake: "Entrenar siempre en la misma zona de intensidad", fix: "Varía entre zonas (cardio, quema de grasa, intenso) según tu objetivo específico de entrenamiento del día." },
    { mistake: "Asumir que la fórmula 220 menos edad es exacta para todos", fix: "Es una estimación general; la frecuencia cardíaca máxima real varía según la condición física individual." },
    { mistake: "Ignorar señales de sobreesfuerzo al entrenar en zonas altas", fix: "Si te sientes mareado o con dolor en el pecho en zonas intensas, detente y consulta a un profesional de salud." },
  ],
  faq: [
    { q: "¿Cómo se calcula la frecuencia cardíaca máxima?", a: "La fórmula más común es 220 menos tu edad, aunque existen fórmulas más precisas que consideran otros factores individuales." },
    { q: "¿Qué es la zona de quema de grasa?", a: "Es el rango de 60-70% de tu frecuencia cardíaca máxima, donde el cuerpo usa proporcionalmente más grasa como fuente de energía durante el ejercicio." },
    { q: "¿Cuál es la mejor zona para perder peso?", a: "Aunque la zona de quema de grasa usa más grasa proporcionalmente, entrenar en zonas de cardio más altas puede quemar más calorías totales, lo cual también ayuda a perder peso." },
    { q: "¿Qué es la zona de cardio en el entrenamiento de frecuencia cardíaca?", a: "Es el rango de 70-80% de tu frecuencia cardíaca máxima, ideal para mejorar la resistencia cardiovascular y la capacidad pulmonar." },
    { q: "¿Es seguro entrenar en la zona máxima (90-100%)?", a: "Es una zona de alta intensidad reservada generalmente para atletas entrenados por cortos períodos; personas con condiciones cardíacas deben evitarla sin supervisión médica." },
    { q: "¿La fórmula 220 menos edad es precisa para todos?", a: "Es una estimación general con variación individual considerable; algunas personas pueden tener una frecuencia máxima real distinta a la calculada." },
    { q: "¿Cómo uso un monitor de frecuencia cardíaca con estas zonas?", a: "Compara la lectura de tu monitor durante el ejercicio con los rangos de zona calculados para ajustar la intensidad de tu entrenamiento en tiempo real." },
    { q: "¿Cuál es la diferencia entre la zona de calentamiento y la zona de quema de grasa?", a: "La zona de calentamiento (50-60%) es de menor intensidad, usada para preparar el cuerpo; la zona de quema de grasa (60-70%) es un poco más intensa y óptima para el uso de grasa como energía." },
    { q: "¿Debo entrenar siempre en la misma zona de frecuencia cardíaca?", a: "No, se recomienda variar entre zonas según el objetivo del entrenamiento: resistencia, quema de grasa, o mejora del rendimiento cardiovascular." },
    { q: "¿Esta calculadora considera mi condición física actual?", a: "No, solo usa tu edad para estimar la frecuencia cardíaca máxima mediante la fórmula estándar; no ajusta por nivel de condición física individual." },
    { q: "¿Qué zona debo usar para entrenamiento de alta intensidad (HIIT)?", a: "El entrenamiento HIIT típicamente alterna entre la zona intensa (80-90%) y períodos de recuperación en zonas más bajas." },
    { q: "¿Debo consultar a un médico antes de usar estas zonas de entrenamiento?", a: "Sí, especialmente si tienes alguna condición cardíaca, presión arterial alta, u otra condición de salud preexistente, antes de entrenar en zonas de alta intensidad." },
  ],
  relatedCalculators: ["Calculadora de IMC", "Calculadora de Calorías Quemadas", "Calculadora de Ritmo de Carrera", "Calculadora de Ingesta de Agua"],
  youMayLike: pickYouMayLike("heart-rate-zone-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Zonas de Frecuencia Cardíaca",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};