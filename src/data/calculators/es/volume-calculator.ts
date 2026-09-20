// src/data/calculators/es/volume-calculator.ts
// NOTE: category assumed "converters" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const volumeCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Volumen: Litros, Galones, Onzas 2026",
    metaDescription: "Convierte entre mililitros, litros, galones, tazas y más unidades de volumen al instante. Gratis.",
    canonicalSlug: "/es/converters/volume-calculator",
    ogTitle: "Convertidor de Volumen",
    ogDescription: "Convierte unidades de volumen como litros, galones y tazas en segundos.",
    twitterTitle: "Convertidor de Litros a Galones y más",
    twitterDescription: "Convierte cualquier unidad de volumen al instante, gratis.",
  },
  hero: {
    text: "El Convertidor de Volumen transforma valores entre mililitros, litros, metros cúbicos, galones, cuartos, pintas, tazas y onzas líquidas al instante, sin necesidad de fórmulas ni tablas.",
  },
  about: {
    text: `Convertir unidades de volumen es necesario constantemente: al seguir una receta internacional, comparar el tamaño de un envase, o entender medidas de líquidos en un país que usa el sistema imperial en lugar del métrico.

Esta calculadora convierte automáticamente entre las unidades métricas (mililitros, litros, metros cúbicos) y las unidades imperiales o anglosajonas (galones, cuartos, pintas, tazas, onzas líquidas) más usadas en el mundo.

Limitaciones: los resultados se muestran con la precisión estándar de conversión; para recetas de precisión o aplicaciones científicas, verifica los factores de conversión exactos según la norma que estés siguiendo.`,
  },
  formula: {
    formula: "Valor Convertido = Valor de Entrada × (Factor de la Unidad Origen / Factor de la Unidad Destino)",
    variables: [
      { symbol: "Factor de Unidad", meaning: "Equivalencia de cada unidad en mililitros (ej. 1 galón estadounidense = 3,785.41 ml)" },
      { symbol: "Sistema", meaning: "Métrico (ml, l, m³) o Imperial/Anglosajón (galón, cuarto, pinta, taza, onza líquida)" },
    ],
    explanation: "El valor se convierte primero a mililitros usando el factor de la unidad de origen, y luego de mililitros a la unidad de destino dividiendo entre su factor correspondiente.",
    interpretation: "Por ejemplo, 1 litro equivale aproximadamente a 0.264 galones estadounidenses, y 1 taza equivale a aproximadamente 236.6 mililitros.",
  },
  steps: [
    "Ingresa el valor que quieres convertir.",
    "Selecciona la unidad de origen (por ejemplo, litros).",
    "Selecciona la unidad de destino (por ejemplo, galones).",
    "Haz clic en Calcular para ver el resultado convertido.",
  ],
  examples: [
    { inputs: "Valor: 1, De: l, A: gallon", result: "0.264 galones", explanation: "Conversión estándar de litros a galones estadounidenses." },
    { inputs: "Valor: 2, De: cup, A: ml", result: "473.2 ml", explanation: "Útil al seguir recetas de cocina internacionales que usan tazas." },
    { inputs: "Valor: 1, De: gallon, A: l", result: "3.785 litros", explanation: "Común al convertir capacidad de tanques de combustible o envases." },
  ],
  practicalUses: [
    "Convertir medidas de recetas de cocina entre sistema métrico e imperial",
    "Calcular la capacidad de envases, tanques o recipientes importados",
    "Convertir el volumen de combustible entre litros y galones",
    "Ayudar con tareas escolares de conversión de unidades",
    "Comparar el tamaño de productos líquidos entre distintos países",
  ],
  expertTips: [
    "Ten cuidado: el galón estadounidense (3.785 litros) es distinto al galón imperial británico (4.546 litros); verifica cuál aplica a tu contexto.",
    "En recetas de cocina, una 'taza' estadounidense equivale a 236.6 ml, mientras que una taza métrica (común en Australia) equivale a 250 ml.",
    "Para convertir onzas líquidas (volumen) no confundas con onzas de peso; son unidades completamente distintas que miden magnitudes diferentes.",
    "Al comparar capacidad de envases importados, verifica siempre si la etiqueta usa mililitros/litros o unidades imperiales antes de comparar tamaños.",
  ],
  commonMistakes: [
    { mistake: "Confundir el galón estadounidense con el galón imperial británico", fix: "Verifica cuál sistema aplica: el galón de EE.UU. equivale a 3.785 litros, mientras que el galón imperial (Reino Unido) equivale a 4.546 litros." },
    { mistake: "Confundir onzas líquidas (volumen) con onzas de peso", fix: "Las onzas líquidas miden volumen; las onzas regulares miden peso o masa. Son unidades completamente distintas que no deben confundirse." },
    { mistake: "Usar la taza estadounidense y la taza métrica indistintamente", fix: "La taza de EE.UU. equivale a 236.6 ml, mientras que la taza métrica (usada en algunos países) equivale a 250 ml; verifica cuál aplica a tu receta." },
    { mistake: "Redondear demasiado en conversiones de recetas de precisión", fix: "Para repostería y recetas que requieren precisión, usa el valor exacto en lugar de redondear a números enteros." },
  ],
  faq: [
    { q: "¿Cómo convertir litros a galones?", a: "Multiplica el valor en litros por 0.264172 para obtener el equivalente en galones estadounidenses." },
    { q: "¿Cuántos mililitros tiene una taza?", a: "Una taza estadounidense equivale a aproximadamente 236.6 mililitros; una taza métrica (usada en algunos países) equivale a 250 mililitros." },
    { q: "¿Cuál es la diferencia entre galón estadounidense y galón imperial?", a: "El galón estadounidense equivale a 3.785 litros, mientras que el galón imperial británico equivale a 4.546 litros; son medidas distintas." },
    { q: "¿Cuántas onzas líquidas tiene una taza?", a: "Una taza estadounidense equivale a 8 onzas líquidas (fluid ounces)." },
    { q: "¿Cómo convertir onzas líquidas a mililitros?", a: "Multiplica el valor en onzas líquidas por 29.5735 para obtener el equivalente en mililitros." },
    { q: "¿Cuántos litros tiene un galón?", a: "Un galón estadounidense equivale aproximadamente a 3.785 litros." },
    { q: "¿Cuál es la diferencia entre una pinta y un cuarto?", a: "Un cuarto (quart) equivale a 2 pintas; a su vez, un galón equivale a 4 cuartos u 8 pintas en el sistema estadounidense." },
    { q: "¿Cómo convierto mililitros a onzas líquidas?", a: "Divide el valor en mililitros entre 29.5735 para obtener el equivalente en onzas líquidas." },
    { q: "¿Qué es un metro cúbico y cuándo se usa como unidad de volumen?", a: "Un metro cúbico es la unidad de volumen del Sistema Internacional, usada comúnmente para medir grandes volúmenes como agua, gas o materiales de construcción; equivale a 1,000 litros." },
    { q: "¿Cómo convierto una receta de tazas estadounidenses a mililitros?", a: "Multiplica el número de tazas por 236.6 para obtener el equivalente aproximado en mililitros." },
    { q: "¿Cuántos litros tiene un metro cúbico?", a: "Un metro cúbico equivale exactamente a 1,000 litros." },
    { q: "¿Es lo mismo una onza líquida que una onza de peso?", a: "No, la onza líquida mide volumen, mientras que la onza regular mide peso o masa; son unidades de magnitudes distintas que no deben confundirse." },
    { q: "¿Cómo convierto galones a litros para calcular combustible?", a: "Multiplica el valor en galones por 3.78541 para obtener el equivalente en litros, útil al comparar precios o consumo de combustible entre países." },
    { q: "¿Cuántas tazas tiene un litro?", a: "Un litro equivale aproximadamente a 4.23 tazas estadounidenses." },
  ],
  relatedCalculators: ["Convertidor de Peso", "Convertidor de Longitud", "Convertidor de Temperatura", "Convertidor de Área"],
  youMayLike: pickYouMayLike("volume-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Volumen",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};