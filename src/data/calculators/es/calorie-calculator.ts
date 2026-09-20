// src/data/calculators/es/calorie-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const calorieCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Calorías — Cuántas Calorías Debo Comer al Día",
    metaDescription: "Calcula cuántas calorías debes comer al día para perder, mantener o ganar peso. Calculadora gratis de TMB y calorías de mantenimiento según tu sexo, edad, estatura, peso y nivel de actividad.",
    canonicalSlug: "/es/health/calorie-calculator",
    ogTitle: "Calculadora de Calorías — Tu TMB y Calorías Diarias",
    ogDescription: "Descubre tu Tasa Metabólica Basal y cuántas calorías necesitas al día según tu objetivo.",
    twitterTitle: "Calculadora de Calorías Gratis",
    twitterDescription: "Calcula tus calorías diarias para bajar, mantener o subir de peso, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Calorías estima tu Tasa Metabólica Basal (TMB) y tus calorías diarias de mantenimiento a partir de tu sexo, edad, estatura, peso y nivel de actividad — para que sepas exactamente cuánto comer según tu objetivo de perder, mantener o ganar peso.",
  },

  about: {
    text: `Tu cuerpo necesita una cierta cantidad de calorías cada día solo para mantener funciones vitales como respirar, la circulación sanguínea y la regulación de temperatura — esto se llama Tasa Metabólica Basal (TMB). A partir de ahí, tu nivel de actividad física determina cuántas calorías adicionales quemas, dando tus calorías de mantenimiento.

Esta calculadora usa la fórmula de Mifflin-St Jeor, una de las más precisas y usadas por nutricionistas, para estimar tu TMB según tu sexo, edad, estatura y peso. Luego aplica un factor de actividad para llegar a tus calorías de mantenimiento diarias, y ajusta ese número según tu objetivo: perder, mantener o ganar peso.

Limitaciones: esta calculadora da una estimación basada en promedios poblacionales — tu metabolismo real puede variar por genética, composición corporal, masa muscular y otros factores. Úsala como punto de partida y ajusta según tus resultados reales durante 2-3 semanas.`,
  },

  formula: {
    formula: "TMB (Mifflin-St Jeor) = (10 × peso en kg) + (6.25 × estatura en cm) − (5 × edad) + s",
    variables: [
      { symbol: "s", meaning: "+5 para hombres, −161 para mujeres" },
      { symbol: "Calorías de Mantenimiento", meaning: "TMB × Factor de Actividad (1.2 a 1.9 según nivel)" },
      { symbol: "Calorías Objetivo", meaning: "Mantenimiento ± 300-500 según el objetivo de perder o ganar peso" },
    ],
    explanation: "Se calcula primero el TMB con la fórmula de Mifflin-St Jeor, luego se multiplica por un factor de actividad para obtener las calorías de mantenimiento, y finalmente se suma o resta un ajuste según el objetivo elegido.",
    interpretation: "Por ejemplo, una mujer de 30 años, 165 cm y 65 kg con actividad moderada tiene un TMB de aproximadamente 1,400 calorías, calorías de mantenimiento de ~2,170, y un objetivo de ~1,670-1,870 calorías si busca perder peso.",
  },

  steps: [
    "Selecciona tu sexo (hombre o mujer).",
    "Ingresa tu edad, estatura en centímetros y peso en kilogramos.",
    "Selecciona tu nivel de actividad física habitual.",
    "Selecciona tu objetivo: perder, mantener o ganar peso.",
    "Haz clic en Calcular.",
    "Revisa tu TMB, calorías de mantenimiento y calorías objetivo.",
  ],

  examples: [
    { inputs: "Mujer, 30 años, 165 cm, 65 kg, Actividad Moderada, Objetivo: Perder Peso", result: "TMB: ~1,400 cal, Mantenimiento: ~2,170 cal, Objetivo: ~1,770 cal", explanation: "Un déficit moderado de 400 calorías para una pérdida de peso sostenible." },
    { inputs: "Hombre, 25 años, 178 cm, 80 kg, Muy Activo, Objetivo: Mantener Peso", result: "TMB: ~1,830 cal, Mantenimiento: ~3,150 cal", explanation: "Un hombre joven con alto nivel de actividad necesita más calorías de mantenimiento." },
    { inputs: "Hombre, 45 años, 172 cm, 70 kg, Sedentario, Objetivo: Ganar Peso", result: "TMB: ~1,530 cal, Mantenimiento: ~1,840 cal, Objetivo: ~2,240 cal", explanation: "Un superávit de 400 calorías para ganar peso de forma gradual." },
  ],

  practicalUses: [
    "Saber cuántas calorías comer al día para bajar de peso de forma sostenible",
    "Planear tu ingesta calórica antes de empezar una dieta o rutina de ejercicio",
    "Ajustar tus calorías si tu objetivo es ganar masa muscular",
    "Entender cuánto realmente quema tu cuerpo en reposo",
    "Comparar tu gasto calórico según distintos niveles de actividad",
    "Recalcular tus necesidades calóricas después de perder o ganar peso",
  ],

  expertTips: [
    "Un déficit de 300-500 calorías diarias es más sostenible a largo plazo que déficits extremos, que suelen llevar a recuperar el peso perdido.",
    "Recalcula tus calorías cada 5-10 kg de cambio de peso, ya que tu TMB cambia junto con tu peso corporal.",
    "El nivel de actividad debe reflejar tu semana típica, no solo los días que haces ejercicio intenso.",
    "Combinar un déficit calórico moderado con entrenamiento de fuerza ayuda a preservar masa muscular mientras pierdes grasa.",
    "Si llevas varias semanas sin ver cambios en tu peso, ajusta tus calorías en incrementos pequeños (100-200 cal) antes de hacer cambios drásticos.",
  ],

  commonMistakes: [
    { mistake: "Elegir un déficit calórico demasiado agresivo", fix: "Mantente en un déficit de 300-500 calorías; déficits mayores suelen ser insostenibles y afectan tu energía y masa muscular." },
    { mistake: "Sobreestimar el nivel de actividad física", fix: "Sé honesto sobre tu semana típica, no sobre tus mejores días de entrenamiento." },
    { mistake: "No recalcular las calorías tras perder o ganar peso significativo", fix: "Tu TMB cambia con tu peso corporal; recalcula cada 5-10 kg de cambio." },
    { mistake: "Ignorar la calidad de los alimentos y enfocarse solo en el número", fix: "Las calorías importan para el peso, pero la calidad nutricional importa para la salud general y la saciedad." },
    { mistake: "Esperar resultados inmediatos", fix: "Los cambios de peso reales toman semanas en reflejarse de forma confiable; evita ajustar tus calorías cada pocos días." },
  ],

  faq: [
    { q: "¿Cómo se calculan las calorías que debo comer al día?", a: "Se calcula primero tu Tasa Metabólica Basal (TMB) según tu sexo, edad, estatura y peso, y luego se multiplica por un factor de actividad física para obtener tus calorías de mantenimiento diarias." },
    { q: "¿Cuántas calorías debo comer para bajar de peso?", a: "Para bajar de peso de forma sostenible, generalmente se recomienda un déficit de 300 a 500 calorías por debajo de tus calorías de mantenimiento diarias." },
    { q: "¿Qué es el TMB (Tasa Metabólica Basal)?", a: "Es la cantidad de calorías que tu cuerpo quema en completo reposo solo para mantener funciones vitales como respirar y la circulación sanguínea." },
    { q: "¿Cuántas calorías necesito para mantener mi peso?", a: "Depende de tu TMB y tu nivel de actividad; esta calculadora lo estima automáticamente combinando ambos factores." },
    { q: "¿Cuántas calorías debo comer para subir de peso?", a: "Para ganar peso de forma saludable, se recomienda un superávit de 300 a 500 calorías por encima de tus calorías de mantenimiento." },
    { q: "¿Cómo saber cuántas calorías necesito según mi edad y peso?", a: "Ingresa tu sexo, edad, estatura, peso y nivel de actividad en la calculadora para obtener una estimación personalizada de tus calorías diarias." },
    { q: "¿Qué nivel de actividad debo elegir si voy al gimnasio 3 veces por semana?", a: "Deberías elegir 'Moderado (3-5 días/semana)', que refleja ejercicio regular varias veces por semana." },
    { q: "¿Es exacta una calculadora de calorías?", a: "Es una buena estimación basada en fórmulas ampliamente usadas, pero tu metabolismo real puede variar; ajusta según tus resultados reales después de 2-3 semanas." },
    { q: "¿Cuántas calorías quemo en reposo?", a: "Esa cifra es tu TMB, la cantidad mínima de calorías que tu cuerpo necesita en reposo total, sin contar actividad física." },
    { q: "¿Cuál es la diferencia entre TMB y calorías de mantenimiento?", a: "El TMB es tu quema calórica en reposo total; las calorías de mantenimiento incluyen además la energía que gastas por tu actividad diaria y ejercicio." },
    { q: "¿Cuántas calorías debo comer si soy mujer y quiero bajar de peso?", a: "Depende de tu edad, estatura, peso y actividad, pero normalmente se recomienda no bajar de 1,200 calorías diarias sin supervisión médica." },
    { q: "¿Perder 1 kg equivale a cuántas calorías?", a: "Aproximadamente se necesita un déficit acumulado de 7,700 calorías para perder 1 kg de grasa corporal." },
    { q: "¿Debo contar las calorías todos los días para bajar de peso?", a: "No es obligatorio, pero conocer tu objetivo calórico diario te ayuda a tomar decisiones más informadas sobre tus comidas." },
    { q: "¿Cambia mi requerimiento de calorías si tengo un trabajo físico?", a: "Sí, si tu trabajo implica esfuerzo físico constante, deberías seleccionar un nivel de actividad más alto para reflejar ese gasto calórico adicional." },
  ],

  relatedCalculators: ["Calculadora de IMC", "Calculadora de Macros", "Calculadora de Agua Diaria", "Calculadora de Grasa Corporal"],

  youMayLike: pickYouMayLike("calorie-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Calorías",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};