// src/data/calculators/es/lorem-ipsum-generator.ts
// NOTE: real slug is "lorem-ipsum-generator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const loremIpsumGeneratorContent = {
  meta: {
    seoTitle: "Generador de Lorem Ipsum en Español 2026",
    metaDescription: "Genera texto de relleno Lorem Ipsum por párrafos, oraciones o palabras. Gratis, instantáneo y sin límite.",
    canonicalSlug: "/es/generators-calculators/lorem-ipsum-generator",
    ogTitle: "Generador de Lorem Ipsum",
    ogDescription: "Crea texto de relleno para tus diseños y maquetas al instante.",
    twitterTitle: "Generador de Lorem Ipsum",
    twitterDescription: "Genera texto Lorem Ipsum por párrafos, oraciones o palabras.",
  },
  hero: {
    text: "El Generador de Lorem Ipsum crea texto de relleno sin sentido por párrafos, oraciones o palabras, ideal para diseños, wireframes y maquetas antes de tener el contenido final.",
  },
  about: {
    text: `Lorem Ipsum es un texto de relleno intencionalmente sin sentido, derivado de un pasaje de latín clásico, usado por diseñadores y desarrolladores para llenar un diseño antes de que el contenido real esté listo.

Esta herramienta genera texto Lorem Ipsum por párrafos, oraciones o palabras, con la opción de comenzar con el clásico "Lorem ipsum dolor sit amet" para que se vea familiar, hasta un máximo de 500 unidades por generación.

Limitaciones: el texto generado es puramente de relleno y no tiene significado real; no debe usarse como contenido final en un sitio web publicado.`,
  },
  formula: {
    formula: "Texto Generado = Cantidad × Tipo de Unidad (Párrafos, Oraciones o Palabras)",
    variables: [
      { symbol: "Cantidad", meaning: "Número de párrafos, oraciones o palabras a generar" },
      { symbol: "Tipo", meaning: "Unidad de generación seleccionada: párrafos, oraciones o palabras" },
    ],
    explanation: "El generador construye el texto combinando palabras y estructuras del vocabulario clásico de Lorem Ipsum, respetando la cantidad y el tipo de unidad seleccionados por el usuario.",
    interpretation: "Por ejemplo, seleccionar 3 párrafos genera tres bloques de texto de relleno separados, cada uno con varias oraciones de longitud variable.",
  },
  steps: [
    "Selecciona el tipo de generación: párrafos, oraciones o palabras.",
    "Ingresa la cantidad que necesitas (hasta 500).",
    "Opcionalmente, activa la casilla para comenzar con 'Lorem ipsum dolor sit amet'.",
    "Haz clic en Generar.",
    "Copia el texto generado con el botón Copiar.",
  ],
  examples: [
    { inputs: "Tipo: Párrafos, Cantidad: 3", result: "3 párrafos de texto de relleno", explanation: "Ideal para maquetar el cuerpo de un artículo o página web." },
    { inputs: "Tipo: Palabras, Cantidad: 50", result: "50 palabras de texto de relleno", explanation: "Útil para rellenar un campo de texto corto como una descripción de producto." },
    { inputs: "Tipo: Oraciones, Cantidad: 10", result: "10 oraciones de texto de relleno", explanation: "Perfecto para simular un párrafo de longitud media en un wireframe." },
  ],
  practicalUses: [
    "Maquetar un sitio web o wireframe antes de recibir el contenido final del cliente",
    "Probar cómo se ve un diseño con distintas longitudes de texto",
    "Rellenar una plantilla de CMS durante el desarrollo",
    "Crear contenido de prueba para presentaciones de diseño",
    "Rellenar campos de formularios durante pruebas de una aplicación",
  ],
  expertTips: [
    "Usa la opción de 'Comenzar con Lorem ipsum...' cuando quieras que el texto se vea inmediatamente reconocible como relleno.",
    "Genera por palabras cuando necesites rellenar espacios pequeños como botones o etiquetas cortas.",
    "Genera por párrafos cuando estés maquetando el cuerpo principal de un artículo o página de blog.",
    "Recuerda reemplazar todo el texto Lorem Ipsum antes de publicar el sitio, ya que no tiene significado real ni valor SEO.",
  ],
  commonMistakes: [
    { mistake: "Dejar texto Lorem Ipsum en una página publicada por error", fix: "Revisa todo el contenido antes de publicar y reemplaza cualquier texto de relleno restante." },
    { mistake: "Generar solo palabras cuando se necesita evaluar el diseño de párrafos completos", fix: "Usa la opción de párrafos u oraciones para ver mejor cómo fluye el texto en bloques reales de contenido." },
    { mistake: "Usar Lorem Ipsum como contenido SEO real", fix: "El texto Lorem Ipsum no tiene significado ni palabras clave relevantes; nunca debe usarse como contenido final indexable." },
    { mistake: "Generar una cantidad excesiva para pruebas pequeñas", fix: "Ajusta la cantidad al espacio real que estás probando para obtener una vista previa más representativa del diseño final." },
  ],
  faq: [
    { q: "¿Qué es el texto Lorem Ipsum?", a: "Es un texto de relleno sin sentido derivado de un pasaje de latín clásico, usado por diseñadores para llenar un diseño antes de tener el contenido real." },
    { q: "¿Por qué se usa Lorem Ipsum en lugar de texto real?", a: "Porque un texto sin sentido no distrae al evaluar la tipografía, el espaciado y la jerarquía visual de un diseño, a diferencia de oraciones reales y legibles." },
    { q: "¿Puedo generar Lorem Ipsum por palabras en lugar de párrafos?", a: "Sí, esta herramienta permite generar texto por párrafos, oraciones o palabras, según lo que necesites para tu maqueta." },
    { q: "¿Cuál es el origen del texto Lorem Ipsum?", a: "Proviene de un pasaje de 'De Finibus Bonorum et Malorum' de Cicerón, un texto en latín clásico del siglo I a.C. que fue reordenado para crear el relleno tipográfico moderno." },
    { q: "¿Es seguro usar Lorem Ipsum en un sitio web en producción?", a: "No se recomienda; el texto Lorem Ipsum no tiene significado ni aporta valor SEO, por lo que debe reemplazarse siempre por contenido real antes de publicar." },
    { q: "¿Cuántos párrafos de Lorem Ipsum puedo generar a la vez?", a: "Puedes generar hasta 500 párrafos, oraciones o palabras en una sola generación con esta herramienta." },
    { q: "¿Qué significa 'Lorem ipsum dolor sit amet'?", a: "Es la frase inicial tradicional del texto de relleno; en el latín original no tiene una traducción coherente, ya que las palabras fueron alteradas del texto fuente." },
    { q: "¿Existen alternativas al Lorem Ipsum tradicional?", a: "Sí, existen generadores de relleno temáticos (como texto sobre gatos, oficina o comida), pero el Lorem Ipsum clásico sigue siendo el estándar en diseño." },
    { q: "¿Puedo usar Lorem Ipsum para maquetar aplicaciones móviles?", a: "Sí, es igualmente útil para maquetar pantallas de apps móviles, permitiendo evaluar cómo se ve el texto en espacios reducidos." },
    { q: "¿El generador de Lorem Ipsum funciona en español?", a: "El texto generado permanece en su forma tradicional en pseudo-latín; la interfaz de esta herramienta está disponible en español, pero el contenido generado no se traduce." },
    { q: "¿Por qué los diseñadores prefieren Lorem Ipsum sobre texto real en español?", a: "Porque texto real y legible puede distraer al cliente o evaluador, haciendo que se enfoque en las palabras en lugar de la disposición visual del diseño." },
    { q: "¿Puedo copiar el texto generado directamente a mi editor de HTML o CMS?", a: "Sí, usa el botón Copiar para pegar el texto generado directamente en tu HTML, CMS o herramienta de diseño." },
    { q: "¿El Lorem Ipsum afecta el SEO de una página si se deja por error?", a: "Sí, un texto sin palabras clave relevantes ni significado real perjudica el SEO de la página, por lo que debe reemplazarse antes de publicar." },
    { q: "¿Cuál es la diferencia entre generar por oraciones y por párrafos?", a: "Generar por oraciones da fragmentos de texto corridos sin separación; generar por párrafos organiza el texto en bloques separados, ideal para simular la estructura real de un artículo." },
  ],
  relatedCalculators: ["Contador de Palabras", "Generador de Contraseñas", "Formateador de JSON", "Convertidor de Case de Texto"],
  youMayLike: pickYouMayLike("lorem-ipsum-generator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Generador de Lorem Ipsum",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};