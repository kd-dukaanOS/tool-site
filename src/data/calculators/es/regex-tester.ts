// src/data/calculators/es/regex-tester.ts
import { pickYouMayLike } from "../../calculator-pool";

export const regexTesterContent = {
  meta: {
    seoTitle: "Probador de Expresiones Regulares — Regex Tester en Español",
    metaDescription: "Prueba expresiones regulares (regex) contra texto con resaltado de coincidencias en vivo, soporte de indicadores y detección de grupos de captura.",
    canonicalSlug: "/es/dev/regex-tester",
    ogTitle: "Probador de Expresiones Regulares",
    ogDescription: "Prueba tus patrones regex contra texto en tiempo real.",
    twitterTitle: "Regex Tester Gratis",
    twitterDescription: "Prueba expresiones regulares al instante, gratis.",
  },

  hero: {
    text: "El Probador de Expresiones Regulares te permite escribir un patrón regex y probarlo contra texto de muestra en tiempo real, con resaltado de coincidencias, soporte de indicadores y detección automática de grupos de captura.",
  },

  about: {
    text: `Las expresiones regulares (regex) son patrones usados para buscar, validar o extraer texto según reglas específicas — ampliamente usadas en programación, validación de formularios, procesamiento de texto y búsqueda avanzada.

Esta herramienta te permite escribir tu patrón regex, elegir indicadores (como g para global, i para insensible a mayúsculas, m para multilínea), y probarlo contra un texto de muestra. Muestra todas las coincidencias encontradas, resaltadas visualmente dentro del texto, junto con el número total de coincidencias y los grupos de captura detectados.

Es especialmente útil para desarrolladores que necesitan depurar o construir patrones regex antes de implementarlos en su código, sin tener que ejecutar el código completo cada vez que ajustan el patrón.`,
  },

  formula: {
    formula: "Coincidencia = patrón.test(texto) usando el motor de expresiones regulares de JavaScript",
    variables: [
      { symbol: "Patrón", meaning: "La expresión regular que define qué buscar" },
      { symbol: "Indicadores", meaning: "Modificadores como g (global), i (insensible a mayúsculas), m (multilínea), s (dotall)" },
      { symbol: "Grupos de Captura", meaning: "Partes del patrón entre paréntesis () que capturan texto específico de cada coincidencia" },
    ],
    explanation: "El patrón regex se compila usando el motor de JavaScript con los indicadores seleccionados, y se ejecuta contra el texto de prueba para encontrar todas las coincidencias, resaltándolas y extrayendo cualquier grupo de captura definido.",
    interpretation: "Por ejemplo, el patrón \\d+ con el indicador g encuentra todas las secuencias de dígitos en un texto, mientras que (\\w+)@(\\w+) captura por separado el nombre de usuario y el dominio de una dirección de correo simplificada.",
  },

  steps: [
    "Escribe tu patrón de expresión regular en el campo Patrón.",
    "Ajusta los indicadores según necesites (g, i, m, s).",
    "Pega o escribe el texto que quieres probar.",
    "Haz clic en Probar.",
    "Revisa las coincidencias encontradas, resaltadas en el texto, y los grupos de captura detectados.",
  ],

  examples: [
    { inputs: "Patrón: \\d+, Texto: \"Tengo 3 gatos y 12 perros\"", result: "2 coincidencias: \"3\", \"12\"", explanation: "Encuentra todas las secuencias de números en el texto." },
    { inputs: "Patrón: ^\\w+, Indicador: m, Texto multilínea", result: "Coincide con la primera palabra de cada línea", explanation: "El indicador multilínea (m) hace que ^ coincida al inicio de cada línea, no solo del texto completo." },
    { inputs: "Patrón: (\\w+)@(\\w+\\.\\w+), Texto: \"contacto: ana@ejemplo.com\"", result: "Coincidencia completa + 2 grupos de captura", explanation: "Los paréntesis capturan el nombre de usuario y el dominio por separado." },
  ],

  practicalUses: [
    "Depurar y probar patrones regex antes de usarlos en código",
    "Validar formatos de entrada como correos, teléfonos o códigos postales",
    "Extraer información específica de bloques de texto grandes",
    "Aprender cómo funcionan las expresiones regulares de forma visual e interactiva",
    "Verificar que un patrón captura correctamente los grupos que necesitas",
    "Probar distintos indicadores (global, multilínea, insensible a mayúsculas) sobre el mismo patrón",
  ],

  expertTips: [
    "Usa el indicador 'g' (global) si necesitas encontrar todas las coincidencias en el texto, no solo la primera.",
    "El indicador 'i' hace que el patrón ignore mayúsculas y minúsculas, útil para búsquedas más flexibles.",
    "Los grupos de captura entre paréntesis () son clave para extraer partes específicas de una coincidencia, como el dominio de un correo electrónico.",
    "Prueba tu patrón con casos límite (texto vacío, caracteres especiales, saltos de línea) para asegurarte de que funciona como esperas en todos los escenarios.",
    "Si tu patrón no encuentra ninguna coincidencia, revisa que los caracteres especiales de regex (como . o *) estén escapados correctamente si quieres que se traten literalmente.",
  ],

  commonMistakes: [
    { mistake: "Olvidar escapar caracteres especiales que quieres buscar literalmente", fix: "Usa una barra invertida antes de caracteres como . * + ? para que se traten como texto literal, no como metacaracteres regex." },
    { mistake: "No usar el indicador global cuando se esperan varias coincidencias", fix: "Sin el indicador 'g', el patrón solo encuentra la primera coincidencia en el texto, no todas." },
    { mistake: "Confundir grupos de captura con la coincidencia completa", fix: "La coincidencia completa incluye todo el patrón; los grupos entre paréntesis capturan solo esas partes específicas por separado." },
    { mistake: "Escribir patrones demasiado permisivos o demasiado estrictos", fix: "Prueba tu patrón con varios ejemplos de texto válidos e inválidos para verificar que captura exactamente lo que necesitas." },
  ],

  faq: [
    { q: "¿Qué es una expresión regular (regex)?", a: "Es un patrón de texto usado para buscar, validar o extraer información específica dentro de una cadena de texto, siguiendo reglas y sintaxis definidas." },
    { q: "¿Qué significan los indicadores g, i, m y s en regex?", a: "'g' busca todas las coincidencias (no solo la primera), 'i' ignora mayúsculas y minúsculas, 'm' hace que ^ y $ coincidan por línea en textos multilínea, y 's' permite que el punto (.) coincida también con saltos de línea." },
    { q: "¿Qué son los grupos de captura en una expresión regular?", a: "Son partes del patrón encerradas entre paréntesis () que capturan y extraen por separado esa porción específica de cada coincidencia encontrada." },
    { q: "¿Cómo pruebo si mi expresión regular es válida?", a: "Escribe tu patrón y un texto de prueba en esta herramienta; si el patrón tiene un error de sintaxis, se mostrará un mensaje indicando el problema." },
    { q: "¿Cómo busco un carácter especial literalmente en regex?", a: "Escápalo con una barra invertida antes del carácter, por ejemplo \\. para buscar un punto literal en lugar de que actúe como comodín." },
    { q: "¿Cuál es la diferencia entre * y + en una expresión regular?", a: "* coincide con cero o más repeticiones del elemento anterior, mientras que + requiere al menos una repetición." },
    { q: "¿Por qué mi patrón regex no encuentra ninguna coincidencia?", a: "Verifica que los caracteres especiales estén escapados correctamente si buscas texto literal, y que el indicador adecuado (como 'i' para mayúsculas/minúsculas) esté activado si es necesario." },
    { q: "¿Esta herramienta usa la sintaxis regex de qué lenguaje?", a: "Usa el motor de expresiones regulares nativo de JavaScript, compatible con la mayoría de las sintaxis regex estándar usadas en desarrollo web." },
  ],

  relatedCalculators: ["Comparador de Diferencias", "Contador de Palabras", "Formateador de JSON", "Generador de UUID"],

  youMayLike: pickYouMayLike("regex-tester"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Probador de Expresiones Regulares",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};