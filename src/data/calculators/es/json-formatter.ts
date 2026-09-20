// src/data/calculators/es/json-formatter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const jsonFormatterContent = {
  meta: {
    seoTitle: "Formateador y Validador de JSON Online Gratis",
    metaDescription: "Formatea, minifica y valida JSON al instante. Ve estadísticas de claves, profundidad y tamaño. Gratis, sin límites, sin registro.",
    canonicalSlug: "/es/developer-tools/json-formatter",
    ogTitle: "Formateador JSON",
    ogDescription: "Formatea, minifica y valida JSON al instante en tu navegador.",
    twitterTitle: "Formateador JSON Gratis",
    twitterDescription: "Formatea y valida JSON al instante.",
  },
  hero: {
    text: "El Formateador JSON convierte JSON compactado en un formato legible con indentación, lo minifica para producción, y valida su sintaxis, mostrando estadísticas de claves, profundidad y tamaño.",
  },
  about: {
    text: `JSON (JavaScript Object Notation) es el formato estándar para intercambiar datos entre aplicaciones web y APIs, pero cuando llega compactado en una sola línea es difícil de leer o depurar.

Esta herramienta formatea tu JSON con indentación clara para facilitar su lectura, o lo minifica eliminando espacios innecesarios para reducir su tamaño en producción, validando la sintaxis en ambos casos y mostrando estadísticas útiles como número de claves, profundidad de anidación y tamaño en bytes.

Limitaciones: solo valida sintaxis JSON estándar; no admite JSON5, JSONC (con comentarios), ni otras variantes extendidas del formato.`,
  },
  formula: {
    formula: "JSON compactado ↔ JSON indentado (formateo estructural, sin cambiar los datos)",
    variables: [
      { symbol: "Profundidad", meaning: "El nivel máximo de anidación de objetos o arreglos dentro del JSON" },
      { symbol: "Claves", meaning: "El número total de propiedades (keys) presentes en todo el documento JSON" },
    ],
    explanation: "El formateo no cambia los datos del JSON, solo agrega o quita espacios, saltos de línea e indentación para hacerlo más legible (formatear) o más compacto (minificar), validando la sintaxis en el proceso.",
    interpretation: "Por ejemplo, un JSON como {\"a\":1,\"b\":{\"c\":2}} tiene 3 claves totales y una profundidad de 2 niveles de anidación.",
  },
  steps: [
    "Pega tu JSON en el campo de entrada.",
    "Haz clic en Formatear para indentarlo, o en Minificar para compactarlo.",
    "Revisa el resultado junto con las estadísticas de claves, profundidad y tamaño.",
    "Copia el resultado con el botón Copiar.",
  ],
  examples: [
    { inputs: '{"name":"Ana","age":30}', result: '{\n  "name": "Ana",\n  "age": 30\n}', explanation: "JSON compactado convertido a formato legible con indentación." },
    { inputs: '{\n  "name": "Ana",\n  "age": 30\n}', result: '{"name":"Ana","age":30}', explanation: "El mismo JSON minificado para reducir su tamaño en producción." },
  ],
  practicalUses: [
    "Leer y depurar respuestas de API que llegan compactadas en una sola línea",
    "Minificar archivos de configuración JSON antes de desplegarlos a producción",
    "Validar que un JSON tenga sintaxis correcta antes de usarlo en tu código",
    "Revisar la estructura y profundidad de un JSON complejo antes de trabajar con él",
    "Preparar ejemplos de JSON legibles para documentación técnica",
  ],
  expertTips: [
    "Minifica siempre los archivos JSON de configuración o datos antes de desplegarlos a producción para reducir el tamaño de transferencia.",
    "Usa el formateo con indentación durante el desarrollo y depuración, y la minificación solo para el build final.",
    "Si tu JSON tiene muchos niveles de anidación (profundidad alta), considera si la estructura de datos podría simplificarse.",
    "Valida siempre tu JSON antes de enviarlo a una API, ya que un error de sintaxis simple (como una coma extra) puede causar fallos difíciles de depurar.",
  ],
  commonMistakes: [
    { mistake: "Dejar comas finales (trailing commas) en el JSON", fix: "El JSON estándar no permite comas después del último elemento de un objeto o arreglo; esta herramienta marcará ese error." },
    { mistake: "Usar comillas simples en lugar de comillas dobles", fix: "JSON requiere comillas dobles para claves y valores de texto; las comillas simples causarán un error de validación." },
    { mistake: "Confundir JSON con JavaScript object literal", fix: "JSON es más estricto que un objeto de JavaScript: no permite comentarios, funciones, ni claves sin comillas." },
  ],
  faq: [
    { q: "¿Cómo formateo JSON en línea gratis?", a: "Pega tu JSON en el campo de entrada y haz clic en Formatear para obtener una versión indentada y legible al instante." },
    { q: "¿Qué diferencia hay entre formatear y minificar JSON?", a: "Formatear agrega indentación y saltos de línea para hacerlo legible; minificar elimina todos los espacios innecesarios para reducir su tamaño." },
    { q: "¿Por qué mi JSON muestra un error de validación?", a: "Generalmente se debe a comas finales, comillas simples, claves sin comillas, o llaves/corchetes sin cerrar correctamente." },
    { q: "¿Esta herramienta valida la sintaxis de mi JSON?", a: "Sí, valida automáticamente la sintaxis y muestra un mensaje de error específico si el JSON no es válido." },
    { q: "¿Qué es la profundidad en las estadísticas del JSON?", a: "Es el número máximo de niveles de anidación (objetos dentro de objetos, o arreglos dentro de arreglos) presentes en tu JSON." },
    { q: "¿Por qué debo minificar mi JSON antes de producción?", a: "Minificar reduce el tamaño del archivo al eliminar espacios innecesarios, lo que disminuye el tiempo de transferencia en aplicaciones web." },
    { q: "¿Esta herramienta admite JSON con comentarios (JSONC)?", a: "No, esta herramienta valida JSON estándar; JSONC y otras variantes con comentarios no son compatibles con el parser JSON nativo." },
    { q: "¿Mis datos se suben a un servidor al usar esta herramienta?", a: "No, todo el procesamiento ocurre localmente en tu navegador; tus datos JSON nunca se envían a un servidor externo." },
    { q: "¿Hay un límite de tamaño para el JSON que puedo formatear?", a: "No hay un límite estricto, aunque archivos JSON extremadamente grandes pueden tardar un poco más en procesarse en el navegador." },
    { q: "¿Cómo cuento el número de claves en mi JSON?", a: "Esta herramienta lo calcula automáticamente y lo muestra en las estadísticas junto con la profundidad y el tamaño del documento." },
    { q: "¿Puedo usar esta herramienta para validar la respuesta de una API?", a: "Sí, pega la respuesta JSON de tu API para formatearla, leerla más fácilmente, y confirmar que tiene sintaxis válida." },
    { q: "¿Esta herramienta funciona en el celular?", a: "Sí, es completamente responsiva y funciona en cualquier navegador de escritorio o móvil." },
  ],
  relatedCalculators: ["Convertidor CSV / JSON", "Convertidor de Base64", "Convertidor de Mayúsculas y Minúsculas", "Contador de Palabras y Caracteres"],
  youMayLike: pickYouMayLike("json-formatter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Formateador JSON",
    h2: ["Acerca de", "Cómo Funciona", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};