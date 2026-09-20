// src/data/calculators/es/slug-generator.ts
// NOTE: real slug is "slug-generator" (tools_sorted.js), category "text-tools"
import { pickYouMayLike } from "../../calculator-pool";

export const slugGeneratorContent = {
  meta: {
    seoTitle: "Generador de Slugs para URL Gratis 2026",
    metaDescription: "Convierte cualquier texto o título en un slug de URL limpio y optimizado para SEO. Gratis e instantáneo.",
    canonicalSlug: "/es/text-tools/slug-generator",
    ogTitle: "Generador de Slugs",
    ogDescription: "Convierte texto en un slug de URL amigable para SEO al instante.",
    twitterTitle: "Generador de Slugs SEO",
    twitterDescription: "Convierte cualquier título en un slug de URL limpio al instante.",
  },
  hero: {
    text: "El Generador de Slugs convierte cualquier texto o título en un slug de URL limpio, en minúsculas y optimizado para SEO, con separador personalizado y opción de eliminar palabras vacías.",
  },
  about: {
    text: `Un slug es la parte de una URL que identifica una página de forma legible, como "guia-de-marketing-digital" en lugar de un ID numérico, y un buen slug mejora tanto la experiencia del usuario como el posicionamiento SEO de la página.

Esta herramienta convierte cualquier título o texto en un slug limpio, eliminando caracteres especiales, tildes y espacios, reemplazándolos por el separador elegido (guion o guion bajo), con la opción de convertir todo a minúsculas y eliminar palabras vacías como "el", "la" o "y".

Limitaciones: esta herramienta genera el slug basándose en reglas generales de formato de URL; algunos sistemas de gestión de contenido (CMS) pueden tener reglas adicionales específicas sobre caracteres permitidos o longitud máxima.`,
  },
  formula: {
    formula: "Slug = Minúsculas(Texto) → Quitar Tildes → Reemplazar Espacios por Separador → Quitar Caracteres Especiales",
    variables: [
      { symbol: "Separador", meaning: "Carácter usado para unir palabras en el slug, generalmente guion (-) o guion bajo (_)" },
      { symbol: "Longitud Máxima", meaning: "Límite de caracteres del slug final, útil para mantener URLs cortas y legibles" },
    ],
    explanation: "El texto se convierte a minúsculas, se eliminan tildes y caracteres especiales, los espacios se reemplazan por el separador elegido, y opcionalmente se eliminan palabras vacías comunes; el resultado se recorta a la longitud máxima especificada si es necesario.",
    interpretation: "Por ejemplo, el título 'Los 10 Mejores Consejos de Productividad para 2026' se convierte en el slug 'los-10-mejores-consejos-productividad-2026' al eliminar palabras vacías como 'de' y 'para'.",
  },
  steps: [
    "Escribe o pega el texto o título que quieres convertir.",
    "Selecciona el separador: guion o guion bajo.",
    "Ajusta la longitud máxima si lo necesitas.",
    "Activa o desactiva las opciones de minúsculas y eliminación de palabras vacías.",
    "Haz clic en Generar y copia el slug resultante.",
  ],
  examples: [
    { inputs: "Texto: 'Los 10 Mejores Consejos de Productividad para 2026'", result: "los-10-mejores-consejos-productividad-2026", explanation: "Un título de blog típico convertido en un slug SEO-friendly con palabras vacías eliminadas." },
    { inputs: "Texto: 'Cómo Aprender Español Rápido', Separador: guion bajo", result: "como_aprender_espanol_rapido", explanation: "El mismo proceso pero usando guion bajo como separador en lugar de guion." },
    { inputs: "Texto: '¡Oferta Especial! 50% de Descuento', Longitud Máxima: 30", result: "oferta-especial-50-descuento", explanation: "Los signos de exclamación y símbolos especiales se eliminan, y el slug se recorta a la longitud máxima indicada." },
  ],
  practicalUses: [
    "Generar slugs SEO-friendly para artículos de blog o páginas de un sitio web",
    "Crear URLs limpias para productos en una tienda online",
    "Convertir títulos de documentos en nombres de archivo válidos para URLs",
    "Estandarizar el formato de slugs en un CMS o sistema de gestión de contenido",
    "Generar identificadores legibles para categorías o etiquetas en un sitio web",
  ],
  expertTips: [
    "Los slugs cortos y descriptivos generalmente funcionan mejor para SEO que URLs largas y genéricas; usa la opción de longitud máxima para mantenerlos concisos.",
    "Eliminar palabras vacías (como 'el', 'la', 'de', 'para') hace que el slug sea más corto sin perder las palabras clave importantes para SEO.",
    "Usa guiones (-) en lugar de guiones bajos (_) para slugs de URL, ya que Google y otros motores de búsqueda interpretan mejor los guiones como separadores de palabras.",
    "Evita cambiar los slugs de páginas ya publicadas y posicionadas, ya que esto puede afectar temporalmente tu SEO; configura redirecciones si es necesario cambiarlos.",
  ],
  commonMistakes: [
    { mistake: "Usar guiones bajos en lugar de guiones para SEO", fix: "Los motores de búsqueda como Google interpretan mejor los guiones (-) como separadores de palabras que los guiones bajos (_)." },
    { mistake: "Dejar el slug demasiado largo y difícil de leer", fix: "Usa la opción de longitud máxima y elimina palabras vacías para mantener el slug corto y descriptivo." },
    { mistake: "Cambiar slugs de páginas ya indexadas sin configurar redirecciones", fix: "Si necesitas cambiar el slug de una página existente, configura una redirección 301 para no perder el posicionamiento SEO acumulado." },
    { mistake: "Incluir caracteres especiales o tildes en el slug manualmente", fix: "Usa esta herramienta para eliminar automáticamente tildes y caracteres especiales, evitando problemas de codificación en la URL." },
  ],
  faq: [
    { q: "¿Qué es un slug en una URL?", a: "Es la parte de una URL que identifica una página de forma legible y descriptiva, como 'guia-de-marketing-digital', en lugar de un ID numérico o código sin sentido." },
    { q: "¿Por qué es importante tener un buen slug para SEO?", a: "Un slug claro y descriptivo ayuda a los motores de búsqueda a entender el contenido de la página y mejora la experiencia del usuario al mostrar una URL legible." },
    { q: "¿Debo usar guiones o guiones bajos en mis slugs?", a: "Se recomienda usar guiones (-), ya que Google y otros motores de búsqueda los interpretan mejor como separadores entre palabras, a diferencia de los guiones bajos." },
    { q: "¿Cómo elimino tildes y caracteres especiales de un slug?", a: "Esta herramienta lo hace automáticamente, convirtiendo letras con tildes a su versión sin tilde y eliminando símbolos que no son válidos en una URL." },
    { q: "¿Qué son las 'palabras vacías' (stopwords) en un slug?", a: "Son palabras comunes como 'el', 'la', 'de', 'para' que no aportan valor SEO significativo y pueden eliminarse para hacer el slug más corto y enfocado en palabras clave." },
    { q: "¿Cuál es la longitud ideal para un slug de URL?", a: "Generalmente se recomienda mantener los slugs entre 3 y 5 palabras clave relevantes, evitando URLs excesivamente largas que sean difíciles de leer o compartir." },
    { q: "¿Puedo cambiar el slug de una página ya publicada sin afectar el SEO?", a: "Es posible, pero se recomienda configurar una redirección 301 desde la URL antigua a la nueva para conservar el posicionamiento SEO acumulado." },
    { q: "¿Este generador de slugs funciona con texto en español con tildes y ñ?", a: "Sí, la herramienta convierte automáticamente caracteres especiales del español (como tildes y la letra ñ) a su equivalente compatible con URLs." },
    { q: "¿Debo incluir números en mi slug?", a: "Sí, si son relevantes para el contenido (como un año o una lista numerada), los números pueden incluirse sin problema y suelen ser útiles para el SEO." },
    { q: "¿Cómo afecta la longitud del slug al SEO de mi página?", a: "Slugs más cortos y descriptivos generalmente son preferidos por los motores de búsqueda y son más fáciles de compartir y recordar para los usuarios." },
    { q: "¿Puedo usar mayúsculas en mi slug de URL?", a: "Técnicamente es posible, pero se recomienda usar siempre minúsculas, ya que algunas configuraciones de servidor tratan las URLs como sensibles a mayúsculas y minúsculas, lo que puede causar problemas de duplicación." },
    { q: "¿Este generador de slugs sirve para nombres de archivo también?", a: "Sí, el mismo formato limpio y sin caracteres especiales que genera esta herramienta es útil tanto para slugs de URL como para nombres de archivo compatibles con la mayoría de sistemas." },
    { q: "¿Qué pasa si mi texto tiene emojis o símbolos raros?", a: "La herramienta elimina automáticamente emojis y símbolos no compatibles con URLs, dejando solo las palabras y números válidos en el slug generado." },
    { q: "¿Cómo uso esta herramienta para generar slugs de productos en una tienda online?", a: "Ingresa el nombre del producto como texto, y la herramienta generará un slug limpio ideal para la URL de la página de ese producto en tu tienda." },
  ],
  relatedCalculators: ["Generador de Lorem Ipsum", "Convertidor de Case de Texto", "Contador de Palabras", "Codificador URL"],
  youMayLike: pickYouMayLike("slug-generator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Generador de Slugs",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};