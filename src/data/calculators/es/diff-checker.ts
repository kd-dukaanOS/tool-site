// src/data/calculators/es/diff-checker.ts
import { pickYouMayLike } from "../../calculator-pool";

export const diffCheckerContent = {
  meta: {
    seoTitle: "Comparador de Diferencias de Texto — Diff Checker en Español",
    metaDescription: "Compara dos textos línea por línea y encuentra las diferencias al instante. Herramienta gratis con líneas agregadas, eliminadas y puntaje de similitud.",
    canonicalSlug: "/es/text/diff-checker",
    ogTitle: "Comparador de Diferencias de Texto",
    ogDescription: "Encuentra qué cambió entre dos versiones de un texto, línea por línea.",
    twitterTitle: "Comparador de Texto Gratis",
    twitterDescription: "Compara dos textos y encuentra las diferencias, gratis e instantáneo.",
  },

  hero: {
    text: "El Comparador de Diferencias de Texto compara dos bloques de texto línea por línea y resalta exactamente qué se agregó, qué se eliminó y qué quedó igual — con un puntaje de similitud general.",
  },

  about: {
    text: `Comparar dos versiones de un texto manualmente es lento y propenso a errores, especialmente en documentos largos, código o contratos. Esta herramienta hace la comparación automáticamente, resaltando cada línea según si fue agregada, eliminada o quedó sin cambios.

Pega tu texto original en el primer campo y la versión modificada en el segundo. La herramienta compara ambos y te muestra un resultado visual claro, además de estadísticas: cuántas líneas se agregaron, cuántas se eliminaron y qué tan similares son los dos textos en general.

Es útil para revisar cambios en documentos, comparar versiones de contratos, verificar ediciones de artículos, o detectar diferencias entre fragmentos de código.`,
  },

  formula: {
    formula: "Similitud (%) = (Líneas Sin Cambios ÷ Total de Líneas Únicas) × 100",
    variables: [
      { symbol: "Líneas Agregadas", meaning: "Líneas presentes en el texto modificado pero no en el original" },
      { symbol: "Líneas Eliminadas", meaning: "Líneas presentes en el original pero no en el texto modificado" },
      { symbol: "Líneas Sin Cambios", meaning: "Líneas idénticas presentes en ambos textos" },
    ],
    explanation: "El comparador alinea ambos textos línea por línea, identifica cuáles coinciden, cuáles fueron eliminadas y cuáles son nuevas, y calcula un porcentaje de similitud general basado en esas coincidencias.",
    interpretation: "Por ejemplo, si comparas dos versiones de un párrafo de 10 líneas donde solo 2 cambiaron, verás 8 líneas sin cambios, 2 eliminadas, 2 agregadas y una similitud de aproximadamente 80%.",
  },

  steps: [
    "Pega el texto original en el primer campo.",
    "Pega el texto modificado en el segundo campo.",
    "Haz clic en Comparar.",
    "Revisa las líneas agregadas, eliminadas y sin cambios resaltadas.",
    "Revisa el puntaje de similitud general entre ambos textos.",
  ],

  examples: [
    { inputs: "Dos versiones de un párrafo con 3 líneas cambiadas de 15 totales", result: "Similitud: ~80%", explanation: "Cambios menores en un documento mayormente similar." },
    { inputs: "Dos versiones de código con una función reescrita completamente", result: "Similitud: ~40-50%", explanation: "Un cambio estructural grande reduce significativamente la similitud." },
    { inputs: "Dos textos casi idénticos con solo una corrección de ortografía", result: "Similitud: ~98%", explanation: "Un cambio mínimo en un texto por lo demás idéntico." },
  ],

  practicalUses: [
    "Revisar qué cambió entre dos versiones de un documento o contrato",
    "Comparar ediciones de un artículo antes y después de una revisión",
    "Detectar diferencias entre dos fragmentos de código",
    "Verificar que una traducción no alteró partes del texto original sin querer",
    "Auditar cambios en políticas, términos de servicio o texto legal",
    "Comparar respuestas o borradores de texto generados por diferentes fuentes",
  ],

  expertTips: [
    "Para comparar documentos largos, divide el texto en secciones más pequeñas para identificar más fácilmente dónde ocurrieron los cambios principales.",
    "El puntaje de similitud es una guía general — revisa siempre las líneas resaltadas específicas para entender el contexto real de los cambios.",
    "Esta herramienta compara línea por línea, así que reformatear un párrafo (aunque el contenido sea igual) puede mostrarse como muchos cambios.",
    "Útil para revisar pull requests o cambios de código antes de aprobarlos, comparando versiones anteriores y nuevas de un archivo.",
    "Combina esta herramienta con una revisión manual para cambios críticos como contratos legales o documentos oficiales.",
  ],

  commonMistakes: [
    { mistake: "Comparar textos con formato muy diferente y esperar alta similitud", fix: "Espacios extra, saltos de línea distintos o reformateo pueden mostrarse como cambios aunque el contenido sea el mismo." },
    { mistake: "No revisar las líneas específicas y confiar solo en el porcentaje de similitud", fix: "El porcentaje es una guía general — siempre revisa qué líneas específicas cambiaron para entender el contexto." },
    { mistake: "Pegar textos incompletos o cortados", fix: "Asegúrate de pegar el texto completo en ambos campos para una comparación precisa." },
    { mistake: "Usar esta herramienta para comparar imágenes o archivos binarios", fix: "Esta herramienta solo compara texto plano, no imágenes, PDFs escaneados ni otros formatos binarios." },
  ],

  faq: [
    { q: "¿Cómo comparar dos textos y ver las diferencias?", a: "Pega el texto original en el primer campo y el texto modificado en el segundo, luego haz clic en Comparar para ver las líneas agregadas, eliminadas y sin cambios." },
    { q: "¿Qué es un diff checker?", a: "Es una herramienta que compara dos versiones de un texto y resalta exactamente qué líneas se agregaron, eliminaron o permanecieron iguales." },
    { q: "¿Cómo se calcula el puntaje de similitud entre dos textos?", a: "Se calcula como el porcentaje de líneas que son idénticas entre ambos textos, comparado con el total de líneas únicas en los dos documentos." },
    { q: "¿Puedo comparar código con esta herramienta?", a: "Sí, esta herramienta compara cualquier tipo de texto plano línea por línea, incluido código fuente." },
    { q: "¿Esta herramienta guarda o almacena mi texto?", a: "No, la comparación se realiza directamente en tu navegador; el texto no se envía ni se guarda en ningún servidor." },
    { q: "¿Cómo comparar dos versiones de un contrato o documento legal?", a: "Pega ambas versiones del documento en los campos correspondientes para ver exactamente qué cláusulas o líneas cambiaron entre versiones." },
    { q: "¿Por qué mi comparación muestra muchos cambios si el texto es casi igual?", a: "Diferencias en espacios, saltos de línea o formato pueden hacer que líneas con el mismo contenido se marquen como distintas; revisa el formato de ambos textos." },
    { q: "¿Cuál es la diferencia entre líneas agregadas y eliminadas?", a: "Las líneas agregadas están presentes solo en el texto modificado; las líneas eliminadas estaban en el texto original pero ya no aparecen en el modificado." },
  ],

  relatedCalculators: ["Contador de Palabras", "Generador de UUID", "Formateador de JSON", "Comparador de Archivos"],

  youMayLike: pickYouMayLike("diff-checker"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Comparador de Diferencias de Texto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};