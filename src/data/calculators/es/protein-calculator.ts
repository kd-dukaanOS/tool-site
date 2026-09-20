// src/data/calculators/es/protein-calculator.ts
// NOTE: category assumed "health" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const proteinCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Proteína Diaria 2026",
    metaDescription: "Calcula cuánta proteína necesitas al día según tu peso y objetivo. Gratis e instantáneo.",
    canonicalSlug: "/es/health/protein-calculator",
    ogTitle: "Calculadora de Proteína",
    ogDescription: "Descubre cuánta proteína necesitas al día según tu objetivo.",
    twitterTitle: "Calculadora de Proteína Diaria",
    twitterDescription: "Calcula tu ingesta de proteína recomendada al instante.",
  },
  hero: {
    text: "La Calculadora de Proteína calcula tu ingesta diaria recomendada de proteína en gramos, según tu peso corporal y tu objetivo: mantenimiento, ganancia muscular, pérdida de grasa o rendimiento atlético.",
  },
  about: {
    text: `La cantidad de proteína que necesitas diariamente varía significativamente según tu peso corporal, nivel de actividad física y objetivo específico, ya sea mantener tu peso, ganar músculo, perder grasa o rendir como atleta de alto nivel.

Esta calculadora recibe tu peso en kilogramos y tu objetivo seleccionado, y calcula tu ingesta de proteína diaria recomendada en gramos, junto con un rango diario y las calorías que aporta esa cantidad de proteína.

Limitaciones: esta calculadora ofrece estimaciones generales basadas en recomendaciones de nutrición deportiva; necesidades individuales pueden variar según condiciones de salud específicas, por lo que se recomienda consultar con un nutricionista para casos particulares.`,
  },
  formula: {
    formula: "Proteína Diaria (g) = Peso Corporal (kg) × Factor según Objetivo",
    variables: [
      { symbol: "Factor de Mantenimiento", meaning: "Generalmente 0.8-1.2 g de proteína por kg de peso corporal" },
      { symbol: "Factor de Ganancia Muscular/Atleta", meaning: "Generalmente 1.6-2.2 g de proteína por kg de peso corporal" },
    ],
    explanation: "Se multiplica tu peso corporal en kilogramos por un factor de gramos de proteína por kilogramo, que varía según tu objetivo: menor para sedentarios o mantenimiento general, y mayor para ganancia muscular, pérdida de grasa preservando músculo, o rendimiento atlético.",
    interpretation: "Por ejemplo, una persona de 70 kg con objetivo de ganancia muscular (factor de 1.8 g/kg) necesitaría aproximadamente 126 gramos de proteína al día.",
  },
  steps: [
    "Ingresa tu peso corporal en kilogramos.",
    "Selecciona tu objetivo: sedentario, mantenimiento, ganancia muscular, pérdida de grasa o atleta.",
    "Haz clic en Calcular.",
    "Revisa tu proteína recomendada, el rango diario y las calorías que aporta.",
  ],
  examples: [
    { inputs: "Peso: 70 kg, Objetivo: Ganancia Muscular", result: "Proteína recomendada: aproximadamente 126 g/día", explanation: "Un objetivo de ganancia muscular requiere mayor ingesta de proteína que el mantenimiento general." },
    { inputs: "Peso: 60 kg, Objetivo: Mantenimiento General", result: "Proteína recomendada: aproximadamente 60-72 g/día", explanation: "El mantenimiento general requiere un factor de proteína moderado." },
    { inputs: "Peso: 80 kg, Objetivo: Atleta / Alto Rendimiento", result: "Proteína recomendada: aproximadamente 144-176 g/día", explanation: "Los atletas de alto rendimiento generalmente necesitan la mayor ingesta de proteína entre todos los objetivos." },
  ],
  practicalUses: [
    "Planear tu dieta diaria para alcanzar tus objetivos de fitness",
    "Ajustar tu ingesta de proteína al cambiar de objetivo (por ejemplo, de pérdida de grasa a ganancia muscular)",
    "Ayudar a distribuir tus comidas para cumplir con tu meta diaria de proteína",
    "Comparar tu ingesta actual de proteína contra la recomendación según tu peso y objetivo",
    "Complementar el uso de una calculadora de macros con un enfoque específico en proteína",
  ],
  expertTips: [
    "Distribuir tu ingesta de proteína a lo largo del día (en varias comidas) suele ser más efectivo para la síntesis muscular que consumirla toda en una sola comida.",
    "Durante la pérdida de grasa, mantener una ingesta alta de proteína ayuda a preservar la masa muscular mientras estás en déficit calórico.",
    "Las necesidades de proteína generalmente se calculan sobre el peso corporal total, aunque en personas con sobrepeso significativo, algunos expertos recomiendan usar el peso corporal magro estimado.",
    "Recalcula tu ingesta de proteína si tu peso corporal cambia significativamente o si cambias tu objetivo de entrenamiento.",
  ],
  commonMistakes: [
    { mistake: "Usar el mismo factor de proteína para todos los objetivos", fix: "Ajusta el factor según tu objetivo específico: sedentario, mantenimiento, ganancia muscular, pérdida de grasa o rendimiento atlético requieren cantidades distintas." },
    { mistake: "Consumir toda la proteína diaria en una sola comida", fix: "Distribuye tu ingesta de proteína en varias comidas a lo largo del día para optimizar la síntesis muscular." },
    { mistake: "Subestimar la necesidad de proteína durante una dieta de pérdida de peso", fix: "Mantener una ingesta alta de proteína durante un déficit calórico ayuda a preservar masa muscular mientras pierdes grasa." },
    { mistake: "No ajustar la ingesta de proteína al cambiar de peso corporal", fix: "Recalcula tu necesidad de proteína periódicamente, especialmente si tu peso cambia de forma significativa." },
  ],
  faq: [
    { q: "¿Cuánta proteína necesito al día según mi peso?", a: "Depende de tu objetivo: para mantenimiento general se recomienda 0.8-1.2 g por kg de peso corporal, mientras que para ganancia muscular o rendimiento atlético se recomienda 1.6-2.2 g por kg." },
    { q: "¿Cuánta proteína necesito para ganar masa muscular?", a: "Generalmente se recomienda entre 1.6 y 2.2 gramos de proteína por kilogramo de peso corporal para apoyar el crecimiento muscular junto con entrenamiento de fuerza." },
    { q: "¿Es malo consumir demasiada proteína?", a: "Para la mayoría de personas sanas, un consumo moderadamente alto de proteína no es perjudicial, aunque cantidades extremadamente altas de forma sostenida deben consultarse con un profesional de salud." },
    { q: "¿Debo distribuir mi ingesta de proteína en varias comidas?", a: "Sí, distribuir la proteína en 3-5 comidas a lo largo del día generalmente favorece mejor la síntesis muscular que consumirla toda de una vez." },
    { q: "¿Cuánta proteína necesito si estoy en déficit calórico para perder grasa?", a: "Se recomienda mantener o incluso aumentar ligeramente la ingesta de proteína (1.6-2.2 g/kg) durante un déficit calórico para preservar la masa muscular mientras pierdes grasa." },
    { q: "¿Los vegetarianos necesitan más proteína que los que comen carne?", a: "No necesariamente más cantidad, pero deben prestar atención a combinar distintas fuentes vegetales de proteína para obtener todos los aminoácidos esenciales." },
    { q: "¿Cuál es la diferencia entre proteína animal y vegetal para este cálculo?", a: "Esta calculadora estima la cantidad total de gramos de proteína necesarios, sin importar la fuente; sin embargo, la calidad y perfil de aminoácidos puede variar entre fuentes animales y vegetales." },
    { q: "¿Cuántas calorías aporta la proteína que consumo?", a: "Cada gramo de proteína aporta aproximadamente 4 calorías; esta calculadora incluye ese cálculo basado en tu ingesta recomendada de proteína." },
    { q: "¿Necesito más proteína si soy sedentario?", a: "No, las personas sedentarias generalmente requieren menos proteína (0.8 g/kg aproximadamente) comparado con personas activas o que entrenan regularmente." },
    { q: "¿Cómo cambia mi necesidad de proteína si soy atleta de alto rendimiento?", a: "Los atletas de alto rendimiento generalmente necesitan la mayor cantidad de proteína entre todos los objetivos, hasta 2.2 g/kg o más, debido al desgaste y recuperación muscular intensivos." },
    { q: "¿Puedo obtener toda mi proteína diaria de suplementos?", a: "Aunque los suplementos como el suero de leche (whey) pueden ayudar a alcanzar tu meta, se recomienda priorizar fuentes de alimentos enteros siempre que sea posible." },
    { q: "¿Cómo afecta la edad a mis necesidades de proteína?", a: "Algunos estudios sugieren que las personas mayores pueden beneficiarse de una ingesta de proteína ligeramente mayor para contrarrestar la pérdida natural de masa muscular relacionada con la edad." },
    { q: "¿Esta calculadora considera mi nivel de actividad física además de mi objetivo?", a: "El objetivo seleccionado ya incorpora implícitamente el nivel de actividad esperado (por ejemplo, sedentario vs atleta), ajustando el factor de proteína correspondiente." },
    { q: "¿Qué pasa si mi ingesta actual de proteína está muy por debajo de lo recomendado?", a: "Puedes aumentar gradualmente tu consumo incorporando más fuentes de proteína en tus comidas; un cambio brusco generalmente no es necesario ni recomendado." },
  ],
  relatedCalculators: ["Calculadora de Macros", "Calculadora de Calorías (TDEE)", "Calculadora de IMC", "Calculadora de Grasa Corporal"],
  youMayLike: pickYouMayLike("protein-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Proteína",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};