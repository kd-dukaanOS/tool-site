// src/data/calculators/es/qr-code-generator.ts
// NOTE: category assumed "generators-calculators" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const qrCodeGeneratorContent = {
  meta: {
    seoTitle: "Generador de Código QR Gratis 2026",
    metaDescription: "Genera códigos QR desde texto, URL o correo con tamaño y colores personalizados. Gratis y online.",
    canonicalSlug: "/es/generators-calculators/qr-code-generator",
    ogTitle: "Generador de Código QR",
    ogDescription: "Crea un código QR escaneable desde cualquier texto o URL al instante.",
    twitterTitle: "Generador de Código QR Gratis",
    twitterDescription: "Genera y descarga un código QR personalizado al instante.",
  },
  hero: {
    text: "El Generador de Código QR crea un código QR escaneable a partir de cualquier texto, URL o correo electrónico, con tamaño, colores y nivel de corrección de errores personalizables.",
  },
  about: {
    text: `Un código QR (Quick Response) es un tipo de código de barras bidimensional que puede almacenar texto, enlaces web, información de contacto y más, siendo escaneado fácilmente con la cámara de cualquier smartphone.

Esta herramienta genera un código QR a partir del texto o URL que ingreses, permitiéndote ajustar el tamaño en píxeles, el nivel de corrección de errores, y los colores de primer plano y fondo, para luego descargarlo como imagen PNG.

Limitaciones: los códigos QR con mucho texto (cerca del límite de 2000 caracteres) generan patrones más densos que pueden ser más difíciles de escanear con cámaras de baja calidad; para URLs largas, considera usar un acortador de enlaces.`,
  },
  formula: {
    formula: "Código QR = Codificación(Texto) + Nivel de Corrección de Errores",
    variables: [
      { symbol: "Nivel de Corrección de Errores", meaning: "L (7%), M (15%), Q (25%), H (30%) — porcentaje del código que puede dañarse y aún ser legible" },
      { symbol: "Densidad del Módulo", meaning: "Aumenta con la cantidad de texto codificado y el nivel de corrección de errores elegido" },
    ],
    explanation: "El texto o URL se codifica en un patrón de módulos blancos y negros siguiendo el estándar QR, incorporando datos redundantes según el nivel de corrección de errores elegido, lo que permite que el código siga siendo escaneable incluso si una parte se daña o se cubre (por ejemplo, con un logo).",
    interpretation: "Por ejemplo, un nivel de corrección Alto (H) permite que hasta un 30% del código QR esté dañado u oculto y aún así se pueda escanear correctamente.",
  },
  steps: [
    "Ingresa el texto, URL o correo electrónico que quieres codificar.",
    "Ajusta el tamaño en píxeles según donde usarás el código.",
    "Selecciona el nivel de corrección de errores deseado.",
    "Opcionalmente, personaliza los colores de primer plano y fondo.",
    "Haz clic en Generar y descarga el código QR como PNG.",
  ],
  examples: [
    { inputs: "Texto: https://toomanytoolz.com, Tamaño: 300px, ECC: Medio", result: "Código QR escaneable que redirige al sitio web", explanation: "El uso más común: generar un QR para un enlace web." },
    { inputs: "Texto: correo de contacto, Tamaño: 250px, ECC: Alto", result: "Código QR con alta tolerancia a daños o superposición de logo", explanation: "Un nivel de corrección alto es útil cuando planeas agregar un logo encima del código." },
    { inputs: "Texto: mensaje corto, Colores personalizados", result: "Código QR con colores de marca personalizados", explanation: "Personalizar colores ayuda a que el QR combine con la identidad visual de tu marca." },
  ],
  practicalUses: [
    "Generar un código QR para compartir el enlace de tu sitio web o redes sociales",
    "Crear códigos QR para menús digitales de restaurantes",
    "Compartir información de contacto o WiFi mediante un código QR escaneable",
    "Agregar códigos QR a materiales impresos como tarjetas de presentación o volantes",
    "Generar códigos QR con colores de marca para campañas de marketing",
  ],
  expertTips: [
    "Usa un nivel de corrección de errores alto (H) si planeas colocar un logo encima del código QR, ya que esto reduce el riesgo de que el código deje de ser escaneable.",
    "Para impresión física, genera el código QR en un tamaño mayor al que planeas usar finalmente, para mantener buena calidad de escaneo.",
    "Mantén suficiente contraste entre el color de primer plano y el de fondo; colores muy similares dificultan que las cámaras lean el código correctamente.",
    "Para URLs muy largas, considera usar un acortador de enlaces antes de generar el QR, ya que reduce la densidad del patrón y facilita el escaneo.",
  ],
  commonMistakes: [
    { mistake: "Usar colores con poco contraste entre primer plano y fondo", fix: "Mantén un contraste fuerte (idealmente oscuro sobre claro) para asegurar que las cámaras puedan leer el código correctamente." },
    { mistake: "Generar un código QR demasiado pequeño para impresión física", fix: "Aumenta el tamaño en píxeles si el código se imprimirá, para mantener buena legibilidad al escanear desde cierta distancia." },
    { mistake: "No probar el código QR antes de imprimirlo o distribuirlo", fix: "Siempre escanea el código generado con tu propio teléfono para confirmar que funciona correctamente antes de usarlo ampliamente." },
    { mistake: "Usar URLs extremadamente largas sin acortarlas", fix: "Un acortador de enlaces reduce la longitud del texto codificado, generando un patrón QR menos denso y más fácil de escanear." },
  ],
  faq: [
    { q: "¿Qué es un código QR y cómo funciona?", a: "Es un código de barras bidimensional que almacena información (texto, URLs, contactos) en un patrón de módulos que puede escanearse rápidamente con la cámara de un smartphone." },
    { q: "¿Es gratis generar un código QR con esta herramienta?", a: "Sí, esta herramienta es completamente gratuita y no requiere registro para generar y descargar tu código QR." },
    { q: "¿Los códigos QR generados aquí caducan o dejan de funcionar?", a: "No, si el texto codificado es estático (como un texto fijo), el código QR funcionará indefinidamente; si codificas una URL, seguirá funcionando mientras esa URL exista." },
    { q: "¿Qué es el nivel de corrección de errores en un código QR?", a: "Es el porcentaje del código que puede dañarse o cubrirse (por ejemplo, con un logo) y aún así seguir siendo escaneable; va desde 7% (Bajo) hasta 30% (Alto)." },
    { q: "¿Puedo agregar un logo a mi código QR?", a: "Esta herramienta no agrega logos automáticamente, pero puedes usar un nivel de corrección de errores alto (H) y luego superponer un logo manualmente en un editor de imágenes." },
    { q: "¿Cuál es el límite de texto que puedo codificar en un código QR?", a: "Esta herramienta permite hasta 2000 caracteres, aunque textos muy largos generan patrones más densos que pueden ser más difíciles de escanear." },
    { q: "¿Qué tamaño debo usar para un código QR que se imprimirá?", a: "Para impresión física, usa un tamaño mayor (300px o más) y considera la distancia de escaneo esperada; a mayor distancia, mayor tamaño necesitas." },
    { q: "¿Puedo personalizar los colores de mi código QR?", a: "Sí, puedes elegir el color de primer plano y de fondo, aunque se recomienda mantener buen contraste entre ambos para asegurar la legibilidad." },
    { q: "¿Los códigos QR funcionan sin conexión a internet?", a: "El escaneo del código en sí no requiere internet, pero si el contenido codificado es una URL, necesitarás conexión para acceder a esa página web." },
    { q: "¿Qué formato de archivo se descarga al generar un código QR?", a: "Esta herramienta genera el código QR como imagen PNG, un formato ampliamente compatible para impresión y uso digital." },
    { q: "¿Puedo generar un código QR para compartir mi WiFi?", a: "Sí, puedes codificar el texto con el formato específico de configuración WiFi (SSID y contraseña) si tu aplicación de escaneo lo soporta." },
    { q: "¿Es seguro usar códigos QR generados por terceros?", a: "Generalmente sí, pero siempre verifica el enlace antes de hacer clic después de escanear un QR de fuente desconocida, ya que pueden redirigir a sitios no deseados." },
    { q: "¿Cuál nivel de corrección de errores debo elegir para uso general?", a: "El nivel Medio (M, 15%) es un buen balance general para la mayoría de usos; usa Alto (H) solo si planeas agregar un logo o esperas que el código pueda dañarse." },
    { q: "¿Puedo generar un código QR para una tarjeta de contacto (vCard)?", a: "Sí, si ingresas el texto en el formato vCard estándar, muchos lectores de QR reconocerán automáticamente la información de contacto para guardarla." },
  ],
  relatedCalculators: ["Generador de Contraseñas", "Acortador de URL", "Generador de Códigos de Barras", "Convertidor de Texto a Voz"],
  youMayLike: pickYouMayLike("qr-code-generator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Generador de Código QR",
    h2: ["Acerca de", "Estructura", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};