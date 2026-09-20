// src/data/calculators/es/weight-calculator.ts
// NOTE: category assumed "converters" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const weightCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Peso: Kg, Libras, Onzas 2026",
    metaDescription: "Convierte entre miligramos, gramos, kilogramos, toneladas, onzas y libras al instante. Gratis.",
    canonicalSlug: "/es/converters/weight-calculator",
    ogTitle: "Convertidor de Peso",
    ogDescription: "Convierte unidades de peso como kg, libras y onzas en segundos.",
    twitterTitle: "Convertidor de Kilos a Libras y más",
    twitterDescription: "Convierte cualquier unidad de peso al instante, gratis.",
  },
  hero: {
    text: "El Convertidor de Peso transforma valores entre miligramos, gramos, kilogramos, toneladas, onzas y libras al instante, sin necesidad de fórmulas ni tablas.",
  },
  about: {
    text: `Convertir unidades de peso es necesario constantemente: al leer una receta internacional, comparar el peso de un producto, o entender tu peso corporal en un país que usa el sistema imperial en lugar del métrico.

Esta calculadora convierte automáticamente entre las unidades métricas (miligramos, gramos, kilogramos, toneladas) y las unidades imperiales o anglosajonas (onzas, libras) más usadas en el mundo.

Limitaciones: los resultados se muestran con la precisión estándar de conversión; para aplicaciones de precisión científica o de laboratorio, verifica los factores de conversión exactos según la norma que estés siguiendo.`,
  },
  formula: {
    formula: "Valor Convertido = Valor de Entrada × (Factor de la Unidad Origen / Factor de la Unidad Destino)",
    variables: [
      { symbol: "Factor de Unidad", meaning: "Equivalencia de cada unidad en gramos (ej. 1 libra = 453.592 gramos)" },
      { symbol: "Sistema", meaning: "Métrico (mg, g, kg, tonelada) o Imperial/Anglosajón (onza, libra)" },
    ],
    explanation: "El valor se convierte primero a gramos usando el factor de la unidad de origen, y luego de gramos a la unidad de destino dividiendo entre su factor correspondiente.",
    interpretation: "Por ejemplo, 1 kilogramo equivale aproximadamente a 2.205 libras, y 1 libra equivale a 16 onzas.",
  },
  steps: [
    "Ingresa el valor que quieres convertir.",
    "Selecciona la unidad de origen (por ejemplo, kilogramos).",
    "Selecciona la unidad de destino (por ejemplo, libras).",
    "Haz clic en Calcular para ver el resultado convertido.",
  ],
  examples: [
    { inputs: "Valor: 1, De: kg, A: lb", result: "2.205 libras", explanation: "Conversión estándar de kilogramos a libras, común al hablar de peso corporal." },
    { inputs: "Valor: 500, De: g, A: oz", result: "17.64 onzas", explanation: "Útil al convertir el peso de ingredientes en recetas de cocina." },
    { inputs: "Valor: 1, De: tonne, A: kg", result: "1,000 kilogramos", explanation: "Una tonelada métrica equivale exactamente a 1,000 kilogramos." },
  ],
  practicalUses: [
    "Convertir tu peso corporal entre kilogramos y libras",
    "Convertir medidas de ingredientes en recetas de cocina internacionales",
    "Calcular el peso de envíos o paquetes entre sistemas métrico e imperial",
    "Ayudar con tareas escolares de conversión de unidades",
    "Comparar el peso de productos importados etiquetados en distinto sistema",
  ],
  expertTips: [
    "Recuerda que 1 kilogramo equivale a aproximadamente 2.20462 libras; para una conversión rápida mental, puedes multiplicar por 2.2 como aproximación.",
    "Una libra tiene 16 onzas; no confundas la onza de peso con la onza líquida (fluid ounce), que mide volumen, no masa.",
    "Estados Unidos usa principalmente libras y onzas para peso corporal y cocina, mientras que la mayoría del resto del mundo usa el sistema métrico (kg, g).",
    "Para pesos muy grandes (como carga o envíos), usa toneladas en lugar de kilogramos para evitar cifras difíciles de leer.",
  ],
  commonMistakes: [
    { mistake: "Confundir onza de peso con onza líquida (volumen)", fix: "La onza de peso mide masa; la onza líquida (fluid ounce) mide volumen. Son unidades completamente distintas que no deben confundirse." },
    { mistake: "Redondear demasiado al convertir pesos de precisión (como en cocina o laboratorio)", fix: "Para recetas de repostería o mediciones científicas, usa el valor exacto en lugar de redondear a números enteros." },
    { mistake: "Asumir que una tonelada métrica es igual a una tonelada corta estadounidense", fix: "Una tonelada métrica equivale a 1,000 kg, mientras que una tonelada corta (usada en EE.UU.) equivale a aproximadamente 907 kg; son medidas distintas." },
    { mistake: "No verificar si un peso está en el sistema métrico o imperial antes de convertir", fix: "Confirma siempre la unidad de origen correcta antes de realizar la conversión para evitar errores significativos." },
  ],
  faq: [
    { q: "¿Cómo convertir kilogramos a libras?", a: "Multiplica el valor en kilogramos por 2.20462 para obtener el equivalente en libras." },
    { q: "¿Cuántas libras tiene un kilogramo?", a: "Un kilogramo equivale aproximadamente a 2.20462 libras." },
    { q: "¿Cuántas onzas tiene una libra?", a: "Una libra equivale exactamente a 16 onzas." },
    { q: "¿Cómo convertir gramos a onzas?", a: "Divide el valor en gramos entre 28.3495 para obtener el equivalente en onzas." },
    { q: "¿Cuál es la diferencia entre onza de peso y onza líquida?", a: "La onza de peso mide masa (aproximadamente 28.35 gramos); la onza líquida mide volumen (aproximadamente 29.57 mililitros). Son unidades de magnitudes distintas." },
    { q: "¿Cuántos gramos tiene un kilogramo?", a: "Un kilogramo equivale a 1,000 gramos." },
    { q: "¿Qué es una tonelada métrica y cuántos kilogramos tiene?", a: "Una tonelada métrica equivale exactamente a 1,000 kilogramos, y es la unidad estándar usada internacionalmente para pesos grandes." },
    { q: "¿Cómo convierto mi peso corporal de kilogramos a libras?", a: "Multiplica tu peso en kilogramos por 2.20462 para obtener el equivalente en libras, la unidad comúnmente usada en Estados Unidos." },
    { q: "¿Cuántos miligramos tiene un gramo?", a: "Un gramo equivale a 1,000 miligramos." },
    { q: "¿Cuál es la diferencia entre tonelada métrica y tonelada corta estadounidense?", a: "La tonelada métrica equivale a 1,000 kg, mientras que la tonelada corta (usada en EE.UU.) equivale a aproximadamente 907 kg; son unidades distintas que no deben confundirse." },
    { q: "¿Cómo convierto libras a kilogramos?", a: "Divide el valor en libras entre 2.20462 para obtener el equivalente en kilogramos." },
    { q: "¿Qué países usan libras y onzas en lugar de kilogramos?", a: "Estados Unidos es el principal país que usa libras y onzas de forma generalizada para peso corporal y cocina; la mayoría del resto del mundo usa el sistema métrico." },
    { q: "¿Cómo convierto el peso de una receta de onzas a gramos?", a: "Multiplica el valor en onzas por 28.3495 para obtener el equivalente en gramos, útil al seguir recetas internacionales." },
  ],
  relatedCalculators: ["Convertidor de Longitud", "Convertidor de Volumen", "Convertidor de Temperatura", "Calculadora de IMC"],
  youMayLike: pickYouMayLike("weight-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Peso",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};