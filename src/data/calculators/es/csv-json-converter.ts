// src/data/calculators/es/csv-json-converter.ts
// NOTE: real slug in tools_sorted.js is "csv-json-converter" (category "developer-tools"), not "csv-json"
import { pickYouMayLike } from "../../calculator-pool";

export const csvJsonConverterContent = {
  meta: {
    seoTitle: "Convertidor de CSV a JSON y JSON a CSV Online Gratis",
    metaDescription: "Convierte datos CSV a JSON o JSON a CSV al instante, directamente en tu navegador. Gratis, sin límite de filas ni registro.",
    canonicalSlug: "/es/developer-tools/csv-json-converter",
    ogTitle: "Convertidor de CSV a JSON",
    ogDescription: "Convierte entre CSV y JSON al instante, sin subir archivos a ningún servidor.",
    twitterTitle: "Convertidor CSV ↔ JSON Gratis",
    twitterDescription: "Convierte datos CSV y JSON al instante.",
  },
  hero: {
    text: "El Convertidor CSV / JSON transforma datos CSV en un arreglo JSON de objetos, o un arreglo JSON de vuelta en filas CSV, al instante y directamente en tu navegador.",
  },
  about: {
    text: `CSV y JSON son dos formatos comunes para mover datos estructurados entre herramientas. CSV es un formato plano compatible con Excel y Google Sheets, mientras que JSON es el formato estándar que esperan las APIs web y las aplicaciones JavaScript.

Esta herramienta convierte en ambas direcciones: pega un CSV con fila de encabezados para obtener un arreglo JSON de objetos, o pega un arreglo JSON para obtener filas CSV listas para abrir en una hoja de cálculo.

Limitaciones: la dirección CSV a JSON espera que la primera fila sean encabezados de columna; la dirección JSON a CSV espera un arreglo no vacío de objetos con una estructura consistente. Esta herramienta usa separación simple por comas, por lo que valores con comas sin comillas pueden no convertirse correctamente.`,
  },
  formula: {
    formula: "CSV (filas y columnas) ↔ JSON (arreglo de objetos)",
    variables: [
      { symbol: "Encabezados CSV", meaning: "La primera fila del CSV, que se convierte en las claves (propiedades) de cada objeto JSON" },
      { symbol: "Arreglo JSON", meaning: "Una lista de objetos con la misma estructura de claves, usada para generar las filas y columnas del CSV" },
    ],
    explanation: "En la conversión CSV a JSON, cada fila después de los encabezados se convierte en un objeto donde las claves son los encabezados y los valores son las celdas correspondientes; en JSON a CSV, se invierte el proceso.",
    interpretation: "Por ejemplo, un CSV con encabezados 'nombre,edad' y una fila 'Ana,30' se convierte en el objeto JSON {\"nombre\":\"Ana\",\"edad\":\"30\"}.",
  },
  steps: [
    "Selecciona el modo: CSV a JSON o JSON a CSV.",
    "Pega tus datos en el campo de entrada.",
    "Haz clic en Calcular.",
    "Copia el resultado convertido con el botón Copiar.",
  ],
  examples: [
    { inputs: "CSV: 'nombre,edad\\nAna,30\\nLuis,25', Modo: CSV a JSON", result: '[{"nombre":"Ana","edad":"30"},{"nombre":"Luis","edad":"25"}]', explanation: "Un CSV simple de dos columnas convertido a un arreglo JSON de objetos." },
    { inputs: 'JSON: \'[{"nombre":"Ana","edad":"30"}]\', Modo: JSON a CSV', result: "nombre,edad\\nAna,30", explanation: "Un arreglo JSON convertido de vuelta a formato CSV con encabezados." },
  ],
  practicalUses: [
    "Importar datos exportados de una hoja de cálculo hacia una aplicación web o base de datos",
    "Convertir la respuesta de una API en JSON a un archivo CSV para abrir en Excel",
    "Preparar datos para una API que solo acepta formato JSON",
    "Revisar y filtrar rápidamente datos de una API en formato de tabla",
  ],
  expertTips: [
    "Asegúrate de que tu CSV tenga una fila de encabezados válida antes de convertir, ya que se usará como nombres de propiedad en el JSON.",
    "Para JSON a CSV, verifica que todos los objetos del arreglo tengan las mismas claves para evitar columnas faltantes.",
    "Si tus valores CSV contienen comas, considera usar comillas alrededor de esos valores para una conversión más precisa.",
    "Para archivos muy grandes o CSV complejos con comillas anidadas, una herramienta de línea de comandos dedicada puede ser más robusta.",
  ],
  commonMistakes: [
    { mistake: "Pegar un CSV sin fila de encabezados", fix: "Agrega una primera fila con los nombres de columna antes de convertir a JSON." },
    { mistake: "Usar un JSON que no es un arreglo de objetos", fix: "La conversión JSON a CSV requiere un arreglo como [{...}, {...}], no un objeto único ni un arreglo de valores simples." },
    { mistake: "Tener objetos JSON con estructuras distintas", fix: "Asegúrate de que todos los objetos del arreglo JSON tengan las mismas claves para obtener columnas CSV consistentes." },
  ],
  faq: [
    { q: "¿Cómo convierto un CSV a JSON en línea?", a: "Selecciona el modo 'CSV a JSON', pega tu CSV con fila de encabezados, y haz clic en Calcular para obtener el arreglo JSON." },
    { q: "¿Necesito encabezados en mi archivo CSV?", a: "Sí, esta herramienta espera que la primera fila de tu CSV sean encabezados de columna, que se convertirán en las propiedades del JSON." },
    { q: "¿Por qué falla la conversión de JSON a CSV?", a: "Generalmente porque el JSON no es un arreglo válido de objetos, o los objetos tienen estructuras de claves inconsistentes entre sí." },
    { q: "¿Esta herramienta puede manejar comas dentro de los valores CSV?", a: "Usa separación simple por comas, por lo que valores con comas sin comillas pueden no convertirse correctamente; para CSV complejos, usa un parser dedicado." },
    { q: "¿Hay un límite de filas para convertir?", a: "No hay un límite estricto de filas, ya que todo el procesamiento ocurre localmente en tu navegador." },
    { q: "¿Mis datos se suben a algún servidor?", a: "No, la conversión ocurre completamente en tu navegador; tus datos nunca se envían a un servidor externo." },
    { q: "¿Puedo convertir un JSON anidado a CSV?", a: "Esta herramienta funciona mejor con estructuras JSON planas (sin objetos anidados); un JSON con objetos dentro de objetos puede no convertirse correctamente a columnas." },
    { q: "¿Qué pasa si mi CSV tiene columnas vacías?", a: "Las celdas vacías se convertirán en valores de cadena vacía en el JSON resultante para esa propiedad." },
    { q: "¿Esta herramienta es gratuita y sin registro?", a: "Sí, el convertidor CSV/JSON es completamente gratuito y no requiere crear una cuenta." },
    { q: "¿Puedo usar esta herramienta para preparar datos para una API?", a: "Sí, es un uso común: conviertes datos de una hoja de cálculo a JSON para enviarlos a una API que espera ese formato." },
    { q: "¿Qué formato debo usar para importar datos a una base de datos?", a: "Depende de la base de datos; muchas aceptan CSV para importación masiva, mientras que otras (especialmente NoSQL) prefieren JSON." },
    { q: "¿Funciona esta herramienta en el celular?", a: "Sí, es completamente responsiva y funciona en cualquier navegador de escritorio o móvil." },
  ],
  relatedCalculators: ["Formateador de JSON", "Convertidor de Base64", "Convertidor de Mayúsculas y Minúsculas", "Contador de Palabras y Caracteres"],
  youMayLike: pickYouMayLike("csv-json-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor CSV / JSON",
    h2: ["Acerca de", "Cómo Funciona", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};