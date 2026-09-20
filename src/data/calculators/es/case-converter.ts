// src/data/calculators/es/case-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const caseConverterCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Mayúsculas y Minúsculas Online Gratis 2026",
    metaDescription: "Convierte texto a MAYÚSCULAS, minúsculas, Título, camelCase, snake_case y más. Herramienta gratis, sin límites, resultados instantáneos.",
    canonicalSlug: "/es/text-tools/case-converter",
    ogTitle: "Convertidor de Mayúsculas y Minúsculas",
    ogDescription: "Cambia el formato de tu texto en un clic: mayúsculas, minúsculas, título, oración, camelCase, snake_case y kebab-case.",
    twitterTitle: "Convertidor de Mayúsculas/Minúsculas Gratis",
    twitterDescription: "Convierte texto entre 8 formatos distintos al instante.",
  },

  hero: {
    text: "El Convertidor de Mayúsculas y Minúsculas cambia el formato de cualquier texto entre MAYÚSCULAS, minúsculas, Título, Oración, camelCase, PascalCase, snake_case y kebab-case en un solo clic, sin instalar nada.",
  },

  about: {
    text: `Esta herramienta toma el texto que pegues y lo transforma al formato que necesites, ya sea para redactar títulos, limpiar datos, o preparar nombres de variables para programar.

Es útil tanto para tareas de escritura cotidianas (títulos, encabezados, redes sociales) como para tareas técnicas (nombres de variables en camelCase o snake_case, constantes en MAYÚSCULAS).

Limitaciones: la conversión de "Título" y "Oración" usa reglas generales de capitalización en español y puede no ajustarse perfectamente a nombres propios, siglas o casos especiales.`,
  },

  formula: {
    formula: "texto → función de transformación → texto convertido",
    variables: [
      { symbol: "Tipo de Formato", meaning: "El formato de salida elegido: mayúsculas, minúsculas, título, oración, camelCase, PascalCase, snake_case o kebab-case" },
      { symbol: "Texto de Entrada", meaning: "El texto original que quieres convertir" },
    ],
    explanation: "Cada carácter o palabra se procesa según reglas simples (mayúscula/minúscula por posición, separadores por guion o guion bajo, capitalización por palabra) para producir el resultado en el formato elegido.",
    interpretation: "Por ejemplo, el texto 'hola mundo' se convierte a 'HOLA MUNDO' en mayúsculas, 'Hola Mundo' en Título, 'holaMundo' en camelCase y 'hola_mundo' en snake_case.",
  },

  steps: [
    "Pega o escribe el texto que quieres convertir.",
    "Selecciona el tipo de formato deseado (mayúsculas, minúsculas, título, oración, camelCase, PascalCase, snake_case o kebab-case).",
    "Haz clic en Calcular para ver el resultado.",
    "Copia el texto convertido con el botón Copiar.",
  ],

  examples: [
    { inputs: "Texto: 'hola mundo desde canadá', Formato: MAYÚSCULAS", result: "HOLA MUNDO DESDE CANADÁ", explanation: "Útil para títulos o encabezados que necesitan destacar." },
    { inputs: "Texto: 'Nombre De Variable', Formato: camelCase", result: "nombreDeVariable", explanation: "Formato estándar para variables en JavaScript y otros lenguajes." },
    { inputs: "Texto: 'reporte final del mes', Formato: Título", result: "Reporte Final Del Mes", explanation: "Ideal para títulos de documentos o publicaciones." },
  ],

  practicalUses: [
    "Convertir nombres de variables entre camelCase, PascalCase y snake_case al programar",
    "Preparar títulos y encabezados con formato correcto para blogs o redes sociales",
    "Estandarizar texto copiado de otra fuente con formato inconsistente",
    "Generar constantes en MAYÚSCULAS para código",
    "Limpiar listas de nombres o datos exportados de una hoja de cálculo",
    "Crear slugs en kebab-case para URLs",
  ],

  expertTips: [
    "Usa snake_case para nombres de variables en Python y kebab-case para URLs amigables en SEO.",
    "El formato Título capitaliza cada palabra; el formato Oración solo la primera letra — úsalos según el contexto (encabezado vs. párrafo).",
    "Si trabajas con nombres propios o siglas, revisa el resultado manualmente ya que la conversión automática no distingue casos especiales.",
    "PascalCase es el estándar para nombres de clases y componentes en la mayoría de los lenguajes orientados a objetos.",
    "Combina esta herramienta con un contador de caracteres si necesitas respetar un límite de longitud tras convertir.",
  ],

  commonMistakes: [
    { mistake: "Usar camelCase para constantes en lugar de MAYÚSCULAS", fix: "Las constantes suelen escribirse en MAYÚSCULAS_CON_GUION_BAJO en la mayoría de las convenciones de código." },
    { mistake: "Confundir Título con Oración al redactar encabezados", fix: "Usa Título para encabezados principales y Oración para texto de párrafo o subtítulos." },
    { mistake: "No revisar acentos y eñes tras la conversión", fix: "Verifica manualmente que las letras con tilde y la ñ se mantengan correctas en el resultado." },
    { mistake: "Mezclar snake_case y camelCase en el mismo proyecto de código", fix: "Mantén una sola convención de nombres por lenguaje o proyecto para evitar errores." },
  ],

  faq: [
    { q: "¿Cómo convierto texto a mayúsculas online gratis?", a: "Pega tu texto en el campo de entrada, selecciona 'MAYÚSCULAS' como formato y haz clic en Calcular; el resultado aparece listo para copiar." },
    { q: "¿Qué es camelCase y cuándo se usa?", a: "camelCase escribe la primera palabra en minúscula y capitaliza el inicio de cada palabra siguiente sin espacios (ej. nombreDeVariable); se usa principalmente para variables en JavaScript." },
    { q: "¿Qué diferencia hay entre PascalCase y camelCase?", a: "PascalCase capitaliza también la primera palabra (NombreDeVariable), mientras que camelCase la deja en minúscula; PascalCase se usa comúnmente para nombres de clases y componentes." },
    { q: "¿Qué es snake_case?", a: "snake_case separa las palabras con guion bajo y las escribe en minúscula (nombre_de_variable); es común en Python y en nombres de columnas de bases de datos." },
    { q: "¿Qué es kebab-case y para qué sirve?", a: "kebab-case separa las palabras con un guion medio (nombre-de-variable); se usa frecuentemente en URLs y nombres de archivo para SEO." },
    { q: "¿Esta herramienta funciona con texto en español con tildes y ñ?", a: "Sí, procesa correctamente letras acentuadas y la ñ en la mayoría de los formatos, aunque se recomienda revisar el resultado en casos especiales." },
    { q: "¿Puedo convertir párrafos largos de texto?", a: "Sí, no hay un límite estricto de longitud, aunque para textos muy extensos el procesamiento puede tardar un poco más." },
    { q: "¿Cómo pongo la primera letra de cada oración en mayúscula?", a: "Selecciona el formato 'Oración', que capitaliza solo la primera letra de cada frase y deja el resto en minúscula." },
    { q: "¿Esta herramienta guarda o almacena mi texto?", a: "No, el texto se procesa localmente en tu navegador y no se guarda ni se envía a ningún servidor." },
    { q: "¿Puedo usar esta herramienta para nombres de archivos?", a: "Sí, kebab-case y snake_case son ideales para nombrar archivos sin espacios ni caracteres especiales." },
    { q: "¿Cómo convierto un título a formato de título correctamente?", a: "Usa la opción 'Título', que capitaliza la primera letra de cada palabra automáticamente." },
    { q: "¿Esta herramienta es gratuita?", a: "Sí, el convertidor de mayúsculas y minúsculas es completamente gratuito y no requiere registro." },
    { q: "¿Funciona en el celular?", a: "Sí, la herramienta es responsiva y funciona en cualquier navegador de escritorio o móvil." },
    { q: "¿Qué formato debo usar para variables en Python?", a: "Python recomienda snake_case para variables y funciones, y PascalCase para nombres de clases." },
  ],

  relatedCalculators: ["Contador de Palabras y Caracteres", "Generador de Lorem Ipsum", "Codificador/Decodificador Base64", "Formateador de JSON"],

  youMayLike: pickYouMayLike("case-converter"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Convertidor de Mayúsculas y Minúsculas",
    h2: ["Acerca de", "Cómo Funciona", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};