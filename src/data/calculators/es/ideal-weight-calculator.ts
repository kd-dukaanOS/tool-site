// src/data/calculators/es/ideal-weight-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const idealWeightCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Peso Ideal 2026 (Fórmula Devine)",
    metaDescription: "Calcula tu peso ideal y rango de peso saludable según tu altura y género. Gratis e instantáneo.",
    canonicalSlug: "/es/health/ideal-weight-calculator",
    ogTitle: "Calculadora de Peso Ideal",
    ogDescription: "Descubre tu peso ideal y rango de peso saludable según tu altura.",
    twitterTitle: "Calculadora de Peso Ideal 2026",
    twitterDescription: "Calcula tu peso ideal al instante.",
  },
  hero: {
    text: "La Calculadora de Peso Ideal estima tu peso ideal usando la fórmula Devine según tu altura y género, junto con un rango de peso saludable basado en el IMC.",
  },
  about: {
    text: `El peso ideal es una estimación general de un peso corporal saludable basada principalmente en tu altura, usando fórmulas desarrolladas para fines médicos como el cálculo de dosis de medicamentos.

Esta calculadora usa la fórmula Devine, una de las más utilizadas clínicamente, para estimar tu peso ideal según tu género y altura, y complementa el resultado con un rango de peso saludable basado en un Índice de Masa Corporal (IMC) de 18.5 a 24.9.

Limitaciones: estas fórmulas no consideran la composición corporal (masa muscular versus grasa), la estructura ósea, ni otros factores individuales; una persona muy musculosa puede tener un peso "ideal" según esta fórmula que no refleja su verdadera condición de salud.`,
  },
  formula: {
    formula: "Peso Ideal (Hombres) = 50 kg + 2.3 kg × (altura en pulgadas − 60)",
    variables: [
      { symbol: "Fórmula Devine (Mujeres)", meaning: "45.5 kg + 2.3 kg × (altura en pulgadas − 60)" },
      { symbol: "Rango de Peso Saludable", meaning: "Rango de peso correspondiente a un IMC entre 18.5 y 24.9 para tu altura" },
    ],
    explanation: "La fórmula Devine calcula un peso base de referencia (50 kg para hombres, 45.5 kg para mujeres) y suma 2.3 kg por cada pulgada de altura por encima de 60 pulgadas (152.4 cm).",
    interpretation: "Por ejemplo, un hombre de 175 cm (aproximadamente 69 pulgadas) tendría un peso ideal estimado de alrededor de 70.7 kg según la fórmula Devine.",
  },
  steps: [
    "Selecciona tu género.",
    "Ingresa tu altura en centímetros.",
    "Haz clic en Calcular.",
    "Revisa tu peso ideal estimado y tu rango de peso saludable según el IMC.",
  ],
  examples: [
    { inputs: "Género: Masculino, Altura: 175 cm", result: "Peso Ideal: ~70.7 kg", explanation: "Estimación según la fórmula Devine para un hombre de estatura promedio." },
    { inputs: "Género: Femenino, Altura: 165 cm", result: "Peso Ideal: ~57.1 kg", explanation: "Estimación según la fórmula Devine para una mujer de estatura promedio." },
    { inputs: "Género: Masculino, Altura: 180 cm", result: "Peso Ideal: ~75.3 kg", explanation: "Estimación para una estatura ligeramente por encima del promedio." },
  ],
  practicalUses: [
    "Tener una referencia general de peso saludable según tu altura",
    "Complementar una conversación con un profesional de salud sobre tus metas de peso",
    "Comparar tu peso actual contra un rango saludable estimado",
    "Establecer una meta de peso realista como punto de partida para un plan de fitness",
  ],
  expertTips: [
    "El peso ideal calculado aquí es una referencia general, no un diagnóstico médico; consulta a un profesional de salud para una evaluación personalizada.",
    "Las personas con mayor masa muscular (como atletas) pueden pesar más que su 'peso ideal' calculado sin tener exceso de grasa corporal.",
    "Usa el rango de peso saludable (basado en IMC) junto con el peso ideal específico para tener una visión más completa.",
    "El peso ideal no considera la edad, por lo que puede no ser igualmente aplicable a personas mayores con diferente composición corporal.",
  ],
  commonMistakes: [
    { mistake: "Tratar el peso ideal calculado como un objetivo médico estricto", fix: "Estas fórmulas son estimaciones generales; consulta a un profesional de salud para una meta de peso personalizada." },
    { mistake: "Ignorar la composición corporal al interpretar el resultado", fix: "Una persona musculosa puede pesar más que su 'peso ideal' sin tener exceso de grasa corporal — el peso solo no cuenta toda la historia." },
    { mistake: "Usar el peso ideal en lugar del rango saludable para juzgar tu salud", fix: "El rango de peso saludable (basado en IMC) es generalmente más útil que un solo número de peso ideal." },
  ],
  faq: [
    { q: "¿Cómo se calcula el peso ideal?", a: "Se usa la fórmula Devine, que parte de un peso base según el género (50 kg hombres, 45.5 kg mujeres) y suma 2.3 kg por cada pulgada de altura sobre 60 pulgadas." },
    { q: "¿Qué es la fórmula Devine?", a: "Es una de las fórmulas más usadas clínicamente para estimar el peso ideal según la altura y el género, originalmente desarrollada para calcular dosis de medicamentos." },
    { q: "¿El peso ideal es lo mismo para hombres y mujeres de la misma altura?", a: "No, la fórmula Devine usa un peso base distinto para cada género (50 kg para hombres, 45.5 kg para mujeres) antes de ajustar por altura." },
    { q: "¿Qué es el rango de peso saludable según el IMC?", a: "Es el rango de peso correspondiente a un Índice de Masa Corporal entre 18.5 y 24.9 para tu altura específica, considerado normal según estándares médicos generales." },
    { q: "¿Esta calculadora considera la masa muscular?", a: "No, la fórmula Devine solo usa altura y género; no distingue entre masa muscular y grasa corporal en su cálculo." },
    { q: "¿Debo preocuparme si mi peso actual no coincide con mi peso ideal calculado?", a: "No necesariamente; estas fórmulas son estimaciones generales y no consideran composición corporal, edad, ni condiciones de salud individuales." },
    { q: "¿Cuál es la diferencia entre peso ideal y peso saludable?", a: "El peso ideal es un número específico según una fórmula; el rango de peso saludable es un intervalo más amplio basado en el IMC, generalmente más representativo de la salud general." },
    { q: "¿Existen otras fórmulas para calcular el peso ideal?", a: "Sí, existen otras como la fórmula de Robinson, Miller o Hamwi, que dan resultados ligeramente distintos pero siguen un enfoque similar basado en altura y género." },
    { q: "¿Esta calculadora sirve para niños?", a: "No, la fórmula Devine y el rango de IMC están diseñados para adultos; los niños requieren tablas de crecimiento específicas por edad." },
    { q: "¿El peso ideal cambia con la edad?", a: "La fórmula Devine no ajusta por edad, aunque en la práctica clínica la composición corporal y las metas de peso pueden variar según la etapa de vida." },
    { q: "¿Debo usar esta calculadora para decidir cuánto peso perder o ganar?", a: "Puede servir como referencia inicial, pero es recomendable consultar a un profesional de salud para una meta de peso personalizada y segura." },
  ],
  relatedCalculators: ["Calculadora de IMC", "Calculadora de Grasa Corporal", "Calculadora de Calorías Diarias (TDEE)", "Calculadora de Zonas de Frecuencia Cardíaca"],
  youMayLike: pickYouMayLike("ideal-weight-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Peso Ideal",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};