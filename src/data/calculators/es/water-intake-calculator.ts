// src/data/calculators/es/water-intake-calculator.ts
// NOTE: category assumed "health" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const waterIntakeCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Ingesta de Agua Diaria 2026",
    metaDescription: "Calcula cuánta agua debes tomar al día según tu peso, actividad y clima. Gratis e instantáneo.",
    canonicalSlug: "/es/health/water-intake-calculator",
    ogTitle: "Calculadora de Ingesta de Agua",
    ogDescription: "Descubre cuánta agua necesitas tomar cada día.",
    twitterTitle: "Calculadora de Hidratación Diaria",
    twitterDescription: "Calcula tu ingesta de agua diaria recomendada al instante.",
  },
  hero: {
    text: "La Calculadora de Ingesta de Agua calcula tu consumo diario recomendado de agua en litros y en vasos equivalentes, según tu peso, nivel de actividad física y si vives en un clima cálido o húmedo.",
  },
  about: {
    text: `La cantidad de agua que necesitas diariamente depende de varios factores, principalmente tu peso corporal, tu nivel de actividad física, y las condiciones climáticas donde vives, ya que el calor y la humedad aumentan la pérdida de líquidos por sudoración.

Esta calculadora recibe tu peso en kilogramos, tu nivel de actividad física (sedentario, ligero, moderado o muy activo), y si vives en un clima cálido o húmedo, y calcula tu ingesta diaria recomendada de agua en litros, junto con el número equivalente de vasos de 250ml.

Limitaciones: esta calculadora ofrece una estimación general basada en fórmulas comunes de hidratación; necesidades individuales pueden variar según condiciones médicas específicas, por lo que siempre consulta con un profesional de salud para casos particulares.`,
  },
  formula: {
    formula: "Ingesta de Agua (litros) = Peso (kg) × Factor Base, ajustado por Actividad y Clima",
    variables: [
      { symbol: "Factor Base", meaning: "Generalmente 30-35 ml de agua por kilogramo de peso corporal" },
      { symbol: "Ajuste por Actividad/Clima", meaning: "Se agrega agua adicional según el nivel de actividad física y si el clima es cálido o húmedo" },
    ],
    explanation: "Se multiplica el peso corporal por un factor base de mililitros por kilogramo, y luego se ajusta el resultado sumando agua adicional según el nivel de actividad física (más actividad requiere más hidratación) y si vives en un clima cálido o húmedo (que aumenta la pérdida de líquidos por sudoración).",
    interpretation: "Por ejemplo, una persona de 65 kg con actividad moderada necesitaría aproximadamente 2.3 litros de agua al día, equivalente a unos 9 vasos de 250ml.",
  },
  steps: [
    "Ingresa tu peso corporal en kilogramos.",
    "Selecciona tu nivel de actividad física.",
    "Marca la casilla si vives en un clima cálido o húmedo.",
    "Haz clic en Calcular para ver tu ingesta diaria recomendada de agua en litros y vasos.",
  ],
  examples: [
    { inputs: "Peso: 65 kg, Actividad: Moderada, Clima normal", result: "Ingesta diaria: aproximadamente 2.3 litros (9 vasos)", explanation: "Un cálculo típico para una persona con actividad física regular." },
    { inputs: "Peso: 80 kg, Actividad: Muy Activo, Clima cálido/húmedo", result: "Ingesta diaria mayor por el ajuste de actividad y clima", explanation: "Personas muy activas en climas cálidos necesitan más agua para compensar la pérdida por sudoración." },
    { inputs: "Peso: 55 kg, Actividad: Sedentario, Clima normal", result: "Ingesta diaria más baja, cercana al mínimo recomendado", explanation: "Personas sedentarias en clima templado tienen necesidades de hidratación menores." },
  ],
  practicalUses: [
    "Establecer una meta diaria de hidratación personalizada según tu peso",
    "Ajustar tu consumo de agua al aumentar tu actividad física o hacer ejercicio",
    "Planear tu hidratación al viajar a un clima más cálido o húmedo",
    "Ayudar a mantener un hábito saludable de consumo de agua diario",
    "Complementar tu rutina de fitness con una meta de hidratación adecuada",
  ],
  expertTips: [
    "El agua de alimentos (frutas, verduras, sopas) también contribuye a tu hidratación total diaria, no solo el agua que bebes directamente.",
    "Distribuir tu consumo de agua a lo largo del día generalmente es mejor que beber grandes cantidades de una sola vez.",
    "El color de la orina es un indicador práctico de hidratación: un amarillo pálido generalmente indica buena hidratación, mientras que un amarillo oscuro sugiere que necesitas tomar más agua.",
    "Si haces ejercicio intenso o vives en un clima muy cálido, considera aumentar tu ingesta más allá de la recomendación base para compensar la sudoración adicional.",
  ],
  commonMistakes: [
    { mistake: "Ignorar el ajuste por actividad física al calcular la ingesta diaria", fix: "Si haces ejercicio regularmente, tu necesidad de agua es mayor que la de una persona sedentaria del mismo peso." },
    { mistake: "No considerar el clima al establecer una meta de hidratación", fix: "Climas cálidos o húmedos aumentan la pérdida de líquidos por sudoración, por lo que necesitas ajustar tu ingesta hacia arriba en esas condiciones." },
    { mistake: "Beber toda el agua diaria de una sola vez en lugar de distribuirla", fix: "Distribuir tu consumo de agua a lo largo del día generalmente favorece mejor la hidratación que grandes cantidades esporádicas." },
    { mistake: "Asumir que todas las bebidas cuentan igual que el agua pura", fix: "Bebidas con cafeína o alcohol pueden tener un efecto diurético leve; el agua pura sigue siendo la mejor fuente de hidratación diaria." },
  ],
  faq: [
    { q: "¿Cuánta agua debo tomar al día según mi peso?", a: "Una guía común es 30-35 ml de agua por kilogramo de peso corporal, ajustado según tu nivel de actividad física y las condiciones climáticas donde vives." },
    { q: "¿Cómo afecta el ejercicio a mi necesidad de agua diaria?", a: "El ejercicio aumenta la pérdida de líquidos por sudoración, por lo que las personas más activas necesitan consumir más agua que las personas sedentarias del mismo peso." },
    { q: "¿Vivir en un clima cálido aumenta cuánta agua necesito?", a: "Sí, los climas cálidos o húmedos aumentan la sudoración y la pérdida de líquidos corporales, por lo que se recomienda aumentar la ingesta de agua en esas condiciones." },
    { q: "¿Cuántos vasos de agua equivalen a la ingesta diaria recomendada?", a: "Depende del volumen total en litros calculado según tu peso y actividad; generalmente cada vaso se considera de 250ml para hacer la conversión." },
    { q: "¿El café y el té cuentan como parte de mi ingesta de agua diaria?", a: "Contribuyen parcialmente a tu hidratación total, aunque su contenido de cafeína puede tener un leve efecto diurético; el agua pura sigue siendo la fuente de hidratación más recomendada." },
    { q: "¿Es malo tomar demasiada agua?", a: "Sí, consumir cantidades excesivas de agua en poco tiempo puede diluir peligrosamente los electrolitos en tu cuerpo (hiponatremia); sigue las recomendaciones generales y consulta a un médico si tienes dudas." },
    { q: "¿Cómo sé si estoy bien hidratado?", a: "El color de tu orina es un indicador práctico: un amarillo pálido generalmente indica buena hidratación, mientras que un color amarillo oscuro sugiere que necesitas tomar más agua." },
    { q: "¿Las frutas y verduras cuentan para mi ingesta diaria de agua?", a: "Sí, muchos alimentos como frutas y verduras tienen alto contenido de agua y contribuyen a tu hidratación total diaria, además del agua que bebes directamente." },
    { q: "¿Necesito más agua si estoy embarazada o amamantando?", a: "Generalmente sí, las necesidades de hidratación aumentan durante el embarazo y la lactancia; consulta con tu médico para una recomendación personalizada en tu caso." },
    { q: "¿Cómo cambia mi necesidad de agua si soy sedentario vs muy activo?", a: "Una persona muy activa generalmente necesita significativamente más agua que una persona sedentaria del mismo peso, debido a la pérdida adicional de líquidos por sudoración durante el ejercicio." },
    { q: "¿Debo tomar agua incluso si no siento sed?", a: "Sí, la sed no siempre es un indicador temprano y preciso de deshidratación; mantener un consumo regular de agua durante el día ayuda a prevenir la deshidratación antes de que aparezca la sed." },
    { q: "¿Cómo afecta el alcohol a mi hidratación diaria?", a: "El alcohol tiene un efecto diurético que puede aumentar la pérdida de líquidos, por lo que se recomienda aumentar el consumo de agua al consumir bebidas alcohólicas." },
    { q: "¿Cuál es la diferencia entre la recomendación general y mis necesidades específicas?", a: "Esta calculadora ofrece una estimación general basada en peso, actividad y clima; condiciones médicas específicas pueden requerir ajustes personalizados que solo un profesional de salud puede recomendar." },
    { q: "¿Debo beber más agua en invierno aunque no sienta tanto calor?", a: "Sí, aunque sudes menos visiblemente, el cuerpo sigue perdiendo líquidos por respiración y otros procesos; mantener una hidratación adecuada es importante durante todo el año." },
  ],
  relatedCalculators: ["Calculadora de IMC", "Calculadora de Calorías (TDEE)", "Calculadora de Macros", "Calculadora de Sudoración"],
  youMayLike: pickYouMayLike("water-intake-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Ingesta de Agua",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};