// src/data/calculators/es/markdown-previewer.ts
// NOTE: real slug is "markdown-previewer" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const markdownPreviewerContent = {
  meta: {
    seoTitle: "Visor de Markdown Online Gratis 2026",
    metaDescription: "Escribe Markdown y visualiza el HTML renderizado en vivo. Conteo de palabras, encabezados, enlaces e imágenes.",
    canonicalSlug: "/es/text-tools/markdown-previewer",
    ogTitle: "Visor de Markdown",
    ogDescription: "Previsualiza tu Markdown como HTML renderizado al instante.",
    twitterTitle: "Visor de Markdown en Vivo",
    twitterDescription: "Escribe Markdown y ve el resultado renderizado al instante.",
  },
  hero: {
    text: "El Visor de Markdown renderiza tu texto en Markdown como HTML formateado en vivo, mientras escribes, mostrando también el conteo de palabras, encabezados, enlaces e imágenes.",
  },
  about: {
    text: `Markdown es una forma ligera de dar formato a texto usando caracteres simples en lugar de un editor de texto enriquecido: dos asteriscos para **negrita**, un símbolo de almohadilla para un encabezado, un guion para un elemento de lista, y se ha convertido en la sintaxis estándar para archivos README, issues de GitHub, páginas de Notion y blogs.

Esta herramienta renderiza tu Markdown en HTML formateado en tiempo real, lado a lado mientras escribes, para que veas exactamente cómo se verán los encabezados, negritas, cursivas, código en línea, enlaces y listas antes de pegar el Markdown en GitHub, un generador de sitio estático o un CMS.

Limitaciones: esta herramienta soporta la sintaxis estándar de Markdown; algunas extensiones específicas de plataformas (como tablas de GitHub Flavored Markdown avanzadas) podrían renderizarse de forma distinta al destino final.`,
  },
  formula: {
    formula: "HTML Renderizado = Parser de Markdown(Texto de Entrada)",
    variables: [
      { symbol: "Encabezados", meaning: "Líneas que comienzan con uno o más símbolos # se convierten en etiquetas <h1> a <h6>" },
      { symbol: "Enlaces e Imágenes", meaning: "La sintaxis [texto](url) y ![alt](url) se convierte en etiquetas <a> e <img>" },
    ],
    explanation: "El texto en Markdown se analiza línea por línea, identificando patrones como encabezados, listas, énfasis, enlaces e imágenes, y se convierte en las etiquetas HTML equivalentes que el navegador renderiza visualmente.",
    interpretation: "Por ejemplo, escribir '## Título' se convierte en un encabezado <h2>, y '[Google](https://google.com)' se convierte en un enlace clickeable con el texto 'Google'.",
  },
  steps: [
    "Escribe o pega tu texto en Markdown en el panel de entrada.",
    "Observa la vista previa renderizada actualizarse automáticamente.",
    "Revisa el conteo de palabras, encabezados, enlaces e imágenes.",
    "Copia el HTML generado con el botón correspondiente.",
  ],
  examples: [
    { inputs: "# Título Principal", result: "Se renderiza como un encabezado <h1>", explanation: "Los símbolos # definen el nivel de encabezado según su cantidad." },
    { inputs: "**texto en negrita**", result: "Se renderiza como <strong>texto en negrita</strong>", explanation: "Los dobles asteriscos crean texto en negrita." },
    { inputs: "[Visita TooManyToolz](https://toomanytoolz.com)", result: "Se renderiza como un enlace clickeable", explanation: "La sintaxis de corchetes y paréntesis crea un hipervínculo." },
  ],
  practicalUses: [
    "Escribir y previsualizar un archivo README antes de subirlo a GitHub",
    "Redactar la descripción de un issue o pull request con formato correcto",
    "Previsualizar una entrada de blog escrita en Markdown antes de publicarla",
    "Aprender la sintaxis básica de Markdown de forma interactiva",
    "Detectar errores de formato, como un asterisco sin cerrar o una lista mal indentada",
  ],
  expertTips: [
    "Usa doble espacio o una línea en blanco entre párrafos para asegurar que Markdown los separe correctamente.",
    "Los encabezados con # deben tener un espacio después del símbolo para renderizarse correctamente (# Título, no #Título).",
    "Para código en línea, usa un solo backtick (`código`); para bloques de código, usa tres backticks seguidos.",
    "Revisa siempre la vista previa antes de publicar en GitHub o un CMS, ya que pequeños errores de sintaxis pueden romper el formato visual.",
  ],
  commonMistakes: [
    { mistake: "Olvidar el espacio después del símbolo # en un encabezado", fix: "Escribe '# Título' con espacio, no '#Título', para que se renderice correctamente como encabezado." },
    { mistake: "No dejar línea en blanco entre párrafos", fix: "Markdown necesita una línea vacía entre bloques de texto para separarlos como párrafos distintos." },
    { mistake: "Usar comillas curvas o caracteres especiales que rompen la sintaxis", fix: "Usa comillas y asteriscos estándar de teclado en lugar de caracteres tipográficos especiales." },
    { mistake: "Confundir la sintaxis de enlaces e imágenes", fix: "Los enlaces usan [texto](url) y las imágenes usan ![texto alternativo](url), con el signo de exclamación al inicio." },
  ],
  faq: [
    { q: "¿Qué es Markdown y para qué se usa?", a: "Markdown es una sintaxis ligera para dar formato a texto usando caracteres simples; se usa comúnmente en archivos README, issues de GitHub, blogs y documentación técnica." },
    { q: "¿Cómo hago un encabezado en Markdown?", a: "Usa uno o más símbolos # al inicio de la línea, seguido de un espacio; por ejemplo, '## Subtítulo' crea un encabezado de nivel 2." },
    { q: "¿Cómo pongo texto en negrita en Markdown?", a: "Envuelve el texto con dos asteriscos o dos guiones bajos, así: **negrita** o __negrita__." },
    { q: "¿Cómo se crea un enlace en Markdown?", a: "Usa la sintaxis [texto del enlace](URL), por ejemplo: [TooManyToolz](https://toomanytoolz.com)." },
    { q: "¿Cómo se inserta una imagen en Markdown?", a: "Usa la sintaxis ![texto alternativo](URL de la imagen), con el signo de exclamación antes de los corchetes." },
    { q: "¿Cómo se hace una lista en Markdown?", a: "Para listas con viñetas, usa un guion o asterisco al inicio de cada línea; para listas numeradas, usa números seguidos de un punto." },
    { q: "¿Cómo se escribe código en Markdown?", a: "Para código en línea, envuelve el texto con un backtick (`código`); para bloques de código, usa tres backticks seguidos en líneas separadas." },
    { q: "¿Este visor de Markdown funciona con GitHub Flavored Markdown?", a: "Soporta la sintaxis estándar de Markdown; algunas extensiones avanzadas específicas de GitHub podrían renderizarse ligeramente distinto en la plataforma final." },
    { q: "¿Puedo copiar el HTML generado a mi sitio web?", a: "Sí, usa el botón de copiar para obtener el HTML renderizado y pegarlo directamente en tu sitio web o CMS." },
    { q: "¿Por qué mi lista en Markdown no se ve bien formateada?", a: "Asegúrate de dejar una línea en blanco antes de iniciar la lista y de usar indentación consistente para sublistas." },
    { q: "¿Cómo hago una cita en Markdown?", a: "Usa el símbolo > al inicio de la línea para crear una cita en bloque (blockquote)." },
    { q: "¿Puedo usar esta herramienta para escribir un README de GitHub?", a: "Sí, es ideal para redactar y previsualizar un README.md antes de subirlo a tu repositorio, verificando que el formato se vea correcto." },
    { q: "¿Qué diferencia hay entre un encabezado H1 y H2 en Markdown?", a: "Un solo # crea un encabezado H1 (el más grande), mientras que ## crea un H2, y así sucesivamente hasta H6 con seis símbolos #." },
    { q: "¿Se guarda mi texto Markdown en algún servidor?", a: "No, todo el procesamiento ocurre en tu navegador; tu texto no se sube ni se guarda en ningún servidor externo." },
  ],
  relatedCalculators: ["Formateador de JSON", "Convertidor de HTML a Markdown", "Contador de Palabras", "Comparador de Texto (Diff)"],
  youMayLike: pickYouMayLike("markdown-previewer"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Visor de Markdown",
    h2: ["Acerca de", "Sintaxis", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};