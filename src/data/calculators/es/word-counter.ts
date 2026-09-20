// src/data/calculators/es/word-counter.ts
// NOTE: category assumed "text-tools" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const wordCounterContent = {
  meta: {
    seoTitle: "Contador de Palabras y Caracteres Online 2026",
    metaDescription: "Cuenta palabras, caracteres, oraciones y párrafos, con tiempo de lectura estimado. Gratis y en vivo.",
    canonicalSlug: "/es/text-tools/word-counter",
    ogTitle: "Contador de Palabras",
    ogDescription: "Cuenta palabras, caracteres y tiempo de lectura al instante.",
    twitterTitle: "Contador de Palabras Online",
    twitterDescription: "Cuenta palabras y caracteres de tu texto en vivo.",
  },
  hero: {
    text: "El Contador de Palabras cuenta palabras, caracteres, oraciones y párrafos de tu texto en tiempo real, además de estimar el tiempo de lectura y de habla.",
  },
  about: {
    text: `Conocer la longitud exacta de un texto es esencial para escritores, estudiantes, y creadores de contenido que deben cumplir límites de palabras o caracteres, o que quieren estimar cuánto tiempo tomará leer o presentar su contenido.

Esta herramienta analiza tu texto en tiempo real mientras escribes o pegas contenido, mostrando el conteo de palabras, caracteres (con y sin espacios), oraciones, párrafos, la longitud promedio de palabra, y el tiempo estimado de lectura y de habla.

Limitaciones: el tiempo de lectura y habla se calcula usando velocidades promedio estándar (generalmente 200-250 palabras por minuto para lectura); tu velocidad real puede variar según la complejidad del texto y tu nivel de lectura.`,
  },
  formula: {
    formula: "Tiempo de Lectura (min) = Total de Palabras / Velocidad de Lectura Promedio (palabras/min)",
    variables: [
      { symbol: "Velocidad de Lectura", meaning: "Generalmente 200-250 palabras por minuto para un lector promedio en silencio" },
      { symbol: "Velocidad de Habla", meaning: "Generalmente 130-150 palabras por minuto para una presentación oral promedio" },
    ],
    explanation: "El texto se analiza contando palabras (separadas por espacios), caracteres, oraciones (delimitadas por puntos, signos de interrogación o exclamación) y párrafos (separados por saltos de línea); el tiempo de lectura y habla se estima dividiendo el total de palabras entre la velocidad promedio correspondiente.",
    interpretation: "Por ejemplo, un texto de 500 palabras tomaría aproximadamente 2-2.5 minutos en leerse en silencio, y alrededor de 3.5-4 minutos en presentarse hablando en voz alta.",
  },
  steps: [
    "Escribe o pega tu texto en el campo de entrada.",
    "El conteo se actualiza automáticamente mientras escribes.",
    "Revisa el número de palabras, caracteres, oraciones y párrafos.",
    "Consulta el tiempo estimado de lectura y de habla para tu texto.",
  ],
  examples: [
    { inputs: "Texto de 500 palabras", result: "Tiempo de lectura: ~2-2.5 min, Tiempo de habla: ~3.5-4 min", explanation: "Un artículo de blog corto o una publicación de redes sociales extendida." },
    { inputs: "Texto de 1,500 palabras, 8 párrafos", result: "Tiempo de lectura: ~6-7.5 min", explanation: "Un artículo de blog de longitud media, típico para contenido SEO." },
    { inputs: "Texto de 100 palabras, límite de 280 caracteres", result: "Verificación rápida si cumple el límite de una red social", explanation: "Útil para verificar límites de caracteres antes de publicar en plataformas como X (Twitter)." },
  ],
  practicalUses: [
    "Verificar si un artículo o ensayo cumple con un límite de palabras requerido",
    "Estimar cuánto tiempo tomará leer un artículo de blog o presentar un discurso",
    "Contar caracteres para cumplir límites de plataformas de redes sociales",
    "Analizar la longitud y estructura de un texto antes de publicarlo",
    "Ayudar a estudiantes a cumplir requisitos de longitud en tareas y ensayos",
  ],
  expertTips: [
    "La velocidad de lectura promedio de 200-250 palabras por minuto es para lectura silenciosa; textos técnicos o complejos generalmente se leen más lento.",
    "Al preparar un discurso o presentación, usa el tiempo de habla estimado (más lento que la lectura) para calcular cuánto durará realmente tu presentación.",
    "Para contenido SEO, muchos expertos recomiendan artículos de al menos 1,000-1,500 palabras para cubrir un tema con suficiente profundidad.",
    "El conteo de caracteres sin espacios es útil para plataformas o sistemas que cuentan caracteres de esa forma específica, como algunos límites de bases de datos.",
  ],
  commonMistakes: [
    { mistake: "Asumir que todos usan la misma velocidad de lectura", fix: "La velocidad de lectura varía según la persona y complejidad del texto; usa el tiempo estimado como una guía general, no un valor exacto." },
    { mistake: "Confundir el conteo de caracteres con y sin espacios", fix: "Verifica cuál tipo de conteo requiere la plataforma o tarea específica (algunas cuentan espacios, otras no) antes de comparar contra un límite." },
    { mistake: "No revisar el conteo de párrafos al estructurar contenido largo", fix: "Dividir el texto en párrafos más cortos generalmente mejora la legibilidad, especialmente para contenido web." },
    { mistake: "Usar el tiempo de lectura silenciosa para calcular la duración de un discurso", fix: "Usa el tiempo de habla estimado (generalmente más lento) en lugar del tiempo de lectura al preparar una presentación oral." },
  ],
  faq: [
    { q: "¿Cómo se cuenta el número de palabras en un texto?", a: "Se cuentan las secuencias de caracteres separadas por espacios en blanco; esta herramienta lo hace automáticamente y en tiempo real mientras escribes." },
    { q: "¿Cuál es la diferencia entre caracteres con y sin espacios?", a: "El conteo con espacios incluye todos los espacios en blanco del texto; el conteo sin espacios solo cuenta los caracteres visibles, excluyendo los espacios entre palabras." },
    { q: "¿Cómo se calcula el tiempo estimado de lectura?", a: "Se divide el número total de palabras entre una velocidad de lectura promedio (generalmente 200-250 palabras por minuto) para obtener el tiempo estimado en minutos." },
    { q: "¿Cómo se calcula el tiempo estimado de habla?", a: "Se divide el número total de palabras entre una velocidad de habla promedio (generalmente 130-150 palabras por minuto), más lenta que la lectura silenciosa." },
    { q: "¿Cómo se cuentan las oraciones en un texto?", a: "Se identifican las oraciones delimitadas por signos de puntuación final como puntos, signos de interrogación o de exclamación." },
    { q: "¿Cómo se cuentan los párrafos en un texto?", a: "Se identifican los párrafos separados por saltos de línea o líneas en blanco dentro del texto ingresado." },
    { q: "¿Cuántas palabras debe tener un artículo de blog para buen SEO?", a: "Muchos expertos recomiendan al menos 1,000-1,500 palabras para cubrir un tema con suficiente profundidad, aunque la calidad del contenido importa más que la cantidad exacta." },
    { q: "¿Este contador de palabras funciona en tiempo real mientras escribo?", a: "Sí, el conteo de palabras, caracteres, oraciones y párrafos se actualiza automáticamente conforme escribes o pegas texto en el campo." },
    { q: "¿Qué es la 'longitud media de palabra' que muestra esta herramienta?", a: "Es el número promedio de caracteres por palabra en tu texto, calculado dividiendo el total de caracteres (sin espacios) entre el número total de palabras." },
    { q: "¿Puedo usar esta herramienta para verificar límites de caracteres en redes sociales?", a: "Sí, el conteo de caracteres te ayuda a verificar si tu texto cumple con límites específicos, como los 280 caracteres de X (Twitter) u otras plataformas." },
    { q: "¿El conteo de palabras incluye números y símbolos?", a: "Generalmente sí, cualquier secuencia de caracteres separada por espacios se cuenta como una palabra, incluyendo números y símbolos que formen parte del texto." },
    { q: "¿Cómo puedo usar el tiempo de lectura estimado para mi blog?", a: "Puedes mostrar el tiempo de lectura estimado a tus lectores al inicio de tu artículo, ayudándoles a decidir si tienen tiempo para leerlo en ese momento." },
    { q: "¿Esta herramienta guarda o envía mi texto a algún servidor?", a: "No, todo el análisis se realiza localmente en tu navegador; tu texto no se envía ni se guarda en ningún servidor externo." },
    { q: "¿Cuál es una buena longitud de discurso para una presentación de 5 minutos?", a: "Usando una velocidad de habla promedio de 130-150 palabras por minuto, una presentación de 5 minutos requeriría aproximadamente 650-750 palabras." },
  ],
  relatedCalculators: ["Generador de Lorem Ipsum", "Convertidor de Case de Texto", "Formateador de JSON", "Comparador de Texto (Diff)"],
  youMayLike: pickYouMayLike("word-counter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Contador de Palabras",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};