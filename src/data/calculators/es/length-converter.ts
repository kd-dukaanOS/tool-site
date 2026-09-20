// src/data/calculators/es/length-converter.ts
// NOTE: real slug is "length-converter" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const lengthConverterContent = {
  meta: {
    seoTitle: "Convertidor de Longitud: Metros, Pies, Pulgadas 2026",
    metaDescription: "Convierte entre metros, centímetros, kilómetros, pies, pulgadas, yardas y millas al instante. Gratis y online.",
    canonicalSlug: "/es/converters/length-converter",
    ogTitle: "Convertidor de Longitud",
    ogDescription: "Convierte unidades de longitud como metros, pies y millas en segundos.",
    twitterTitle: "Convertidor de Metros a Pies y más",
    twitterDescription: "Convierte cualquier unidad de longitud al instante, gratis.",
  },
  hero: {
    text: "El Convertidor de Longitud transforma valores entre milímetros, centímetros, metros, kilómetros, pulgadas, pies, yardas y millas al instante, sin necesidad de fórmulas ni tablas.",
  },
  about: {
    text: `Convertir unidades de longitud es necesario constantemente: al leer una receta internacional, comparar medidas de un producto, o entender distancias en un país que usa el sistema imperial en lugar del métrico.

Esta calculadora convierte automáticamente entre las unidades métricas (mm, cm, m, km) y las unidades imperiales o anglosajonas (pulgadas, pies, yardas, millas) más usadas en el mundo.

Limitaciones: los resultados se muestran con la precisión estándar de conversión; para cálculos de ingeniería de alta precisión, verifica los factores de conversión exactos según la norma que estés siguiendo.`,
  },
  formula: {
    formula: "Valor Convertido = Valor de Entrada × (Factor de la Unidad Origen / Factor de la Unidad Destino)",
    variables: [
      { symbol: "Factor de Unidad", meaning: "Equivalencia de cada unidad en metros (ej. 1 pie = 0.3048 metros)" },
      { symbol: "Sistema", meaning: "Métrico (mm, cm, m, km) o Imperial (in, ft, yd, mi)" },
    ],
    explanation: "El valor se convierte primero a metros usando el factor de la unidad de origen, y luego de metros a la unidad de destino dividiendo entre su factor correspondiente.",
    interpretation: "Por ejemplo, 1 metro equivale a 3.28 pies, y 1 milla equivale a 1.609 kilómetros.",
  },
  steps: [
    "Ingresa el valor que quieres convertir.",
    "Selecciona la unidad de origen (por ejemplo, metros).",
    "Selecciona la unidad de destino (por ejemplo, pies).",
    "Haz clic en Calcular para ver el resultado convertido.",
  ],
  examples: [
    { inputs: "Valor: 1, De: m, A: ft", result: "3.28 ft", explanation: "Conversión estándar de metros a pies usada en construcción y diseño." },
    { inputs: "Valor: 5, De: km, A: mi", result: "3.11 mi", explanation: "Útil para convertir distancias de carretera entre sistema métrico e imperial." },
    { inputs: "Valor: 12, De: in, A: cm", result: "30.48 cm", explanation: "Común al convertir medidas de pantallas o muebles importados." },
  ],
  practicalUses: [
    "Convertir la altura de una persona entre pies/pulgadas y centímetros",
    "Comparar distancias de viaje entre kilómetros y millas",
    "Convertir medidas de muebles o electrodomésticos importados",
    "Ayudar con tareas escolares de conversión de unidades",
    "Calcular medidas de construcción o bricolaje entre sistemas métrico e imperial",
  ],
  expertTips: [
    "Recuerda que 1 pulgada equivale exactamente a 2.54 centímetros; es la conversión más usada entre sistemas.",
    "Para distancias largas, usa kilómetros o millas en lugar de metros o pies para evitar cifras difíciles de leer.",
    "Estados Unidos, Reino Unido (parcialmente) y algunos otros países usan el sistema imperial; el resto del mundo usa el sistema métrico.",
    "Al convertir la altura de una persona, recuerda que 1 pie tiene 12 pulgadas, por lo que 5'10\" no es lo mismo que 5.10 pies.",
  ],
  commonMistakes: [
    { mistake: "Confundir pies y pulgadas al leer una altura en formato imperial", fix: "Recuerda que la notación 5'10\" significa 5 pies y 10 pulgadas, no 5.10 pies." },
    { mistake: "Redondear demasiado en conversiones de precisión", fix: "Para medidas de construcción o ingeniería, usa el valor exacto en lugar de redondear a números enteros." },
    { mistake: "Asumir que 1 milla es igual a 1 kilómetro", fix: "1 milla equivale a aproximadamente 1.609 kilómetros; son unidades distintas y no deben confundirse." },
    { mistake: "No verificar si una medida está en el sistema métrico o imperial antes de convertir", fix: "Confirma siempre la unidad de origen correcta antes de realizar la conversión para evitar errores." },
  ],
  faq: [
    { q: "¿Cómo convertir metros a pies?", a: "Multiplica el valor en metros por 3.28084 para obtener el equivalente en pies." },
    { q: "¿Cuántos centímetros tiene una pulgada?", a: "Una pulgada equivale exactamente a 2.54 centímetros." },
    { q: "¿Cómo convertir kilómetros a millas?", a: "Multiplica el valor en kilómetros por 0.621371 para obtener el equivalente en millas." },
    { q: "¿Cuántos pies tiene un metro?", a: "Un metro equivale aproximadamente a 3.28 pies." },
    { q: "¿Cuál es la diferencia entre el sistema métrico y el sistema imperial?", a: "El sistema métrico usa metros, centímetros y kilómetros; el sistema imperial usa pulgadas, pies, yardas y millas, y es usado principalmente en Estados Unidos." },
    { q: "¿Cómo convertir mi altura de pies y pulgadas a centímetros?", a: "Convierte los pies a pulgadas (multiplicando por 12), suma las pulgadas restantes, y multiplica el total por 2.54 para obtener centímetros." },
    { q: "¿Cuántas yardas tiene una milla?", a: "Una milla equivale a 1,760 yardas." },
    { q: "¿Cómo convertir pulgadas a centímetros rápidamente?", a: "Multiplica el número de pulgadas por 2.54 para obtener el resultado exacto en centímetros." },
    { q: "¿Cuántos metros tiene un kilómetro?", a: "Un kilómetro equivale a 1,000 metros." },
    { q: "¿Cuál es la longitud de una milla en metros?", a: "Una milla equivale aproximadamente a 1,609.34 metros." },
    { q: "¿Cómo se convierte de pies a metros?", a: "Multiplica el valor en pies por 0.3048 para obtener el equivalente en metros." },
    { q: "¿Qué países usan el sistema imperial en lugar del métrico?", a: "Estados Unidos es el principal país que usa el sistema imperial de forma generalizada; otros países como Reino Unido y Liberia lo usan parcialmente." },
    { q: "¿Cuántas pulgadas tiene un pie?", a: "Un pie equivale exactamente a 12 pulgadas." },
    { q: "¿Cómo convertir una distancia de carrera de millas a kilómetros?", a: "Multiplica la distancia en millas por 1.60934 para obtener el equivalente en kilómetros, útil para carreras como maratones (26.2 millas = 42.195 km)." },
  ],
  relatedCalculators: ["Convertidor de Peso", "Convertidor de Temperatura", "Convertidor de Área", "Convertidor de Velocidad"],
  youMayLike: pickYouMayLike("length-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Longitud",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};