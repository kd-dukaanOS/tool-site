// src/data/calculators/es/color-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const colorConverterCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Colores HEX, RGB y HSL Online Gratis",
    metaDescription: "Convierte colores entre HEX, RGB y HSL al instante. Ve el código y la muestra de color en tiempo real. Gratis, sin registro.",
    canonicalSlug: "/es/converters/color-converter",
    ogTitle: "Convertidor de Colores",
    ogDescription: "Convierte entre HEX, RGB y HSL al instante con vista previa del color.",
    twitterTitle: "Convertidor de Colores HEX/RGB/HSL",
    twitterDescription: "Convierte colores entre formatos al instante.",
  },
  hero: {
    text: "El Convertidor de Colores transforma cualquier color entre los formatos HEX, RGB y HSL al instante, mostrando también una vista previa visual del color.",
  },
  about: {
    text: `HEX, RGB y HSL son tres formas distintas de escribir el mismo color. HEX (como #4F46E5) es compacto y muy usado en CSS y guías de marca; RGB expresa el color como intensidad de rojo, verde y azul (0-255), similar a como lo renderizan las pantallas; HSL (tono, saturación, luminosidad) es el más intuitivo para ajustar un color aclarándolo, oscureciéndolo o desaturándolo.

Esta herramienta toma un valor HEX o RGB y calcula automáticamente sus equivalentes en los otros dos formatos, junto con una muestra visual del color.

Limitaciones: no admite formatos con canal alfa (RGBA/HSLA) ni nombres de color por palabra (como "red" o "azul").`,
  },
  formula: {
    formula: "HEX ↔ RGB ↔ HSL (conversión matemática entre espacios de color)",
    variables: [
      { symbol: "RGB", meaning: "Valores de rojo, verde y azul entre 0 y 255" },
      { symbol: "HSL", meaning: "Tono (0-360°), saturación y luminosidad, ambos en porcentaje" },
    ],
    explanation: "El valor HEX se descompone en sus tres componentes RGB, y a partir de esos valores se calculan el tono, la saturación y la luminosidad usando las fórmulas estándar de conversión de espacio de color.",
    interpretation: "Por ejemplo, el HEX #FF0000 equivale a RGB(255,0,0) y a HSL(0°, 100%, 50%) — un rojo puro.",
  },
  steps: [
    "Selecciona el formato de entrada: HEX o RGB.",
    "Ingresa el valor del color (ej. #ff0000 o 255,0,0).",
    "Haz clic en Calcular.",
    "Revisa los valores equivalentes en HEX, RGB y HSL, junto con la muestra visual.",
  ],
  examples: [
    { inputs: "HEX: #4F46E5", result: "RGB: 79,70,229 | HSL: 244°,74%,59%", explanation: "Un azul-morado común en interfaces modernas." },
    { inputs: "RGB: 255,165,0", result: "HEX: #FFA500 | HSL: 39°,100%,50%", explanation: "Un naranja vibrante." },
  ],
  practicalUses: [
    "Convertir un color muestreado de una imagen o sitio web al formato que necesita tu CSS",
    "Ajustar la luminosidad de un color usando HSL sin recalcular los valores RGB manualmente",
    "Verificar el código HEX exacto de un color de marca",
    "Traducir paletas de diseño entre herramientas que usan formatos distintos",
  ],
  expertTips: [
    "HSL es el formato más fácil para crear variaciones de un mismo color (más claro/oscuro) ajustando solo la luminosidad.",
    "La mayoría de los navegadores y editores de CSS aceptan los tres formatos indistintamente.",
    "Si sampleas un color con las DevTools del navegador, normalmente obtienes RGB — usa esta herramienta para pasarlo a HEX si tu guía de marca lo requiere.",
  ],
  commonMistakes: [
    { mistake: "Confundir el orden de los valores RGB", fix: "El orden siempre es rojo, verde, azul — verifica que no estés invirtiendo los canales." },
    { mistake: "Usar un HEX de 3 dígitos sin expandirlo", fix: "Esta herramienta espera HEX de 6 dígitos; expande abreviaciones como #f00 a #ff0000 antes de convertir." },
  ],
  faq: [
    { q: "¿Cómo convierto un código HEX a RGB?", a: "Ingresa el valor HEX (ej. #ff0000), selecciona el formato de entrada HEX y haz clic en Calcular para ver el RGB equivalente." },
    { q: "¿Qué es HSL y cómo se interpreta?", a: "HSL significa tono, saturación y luminosidad; el tono es un ángulo de 0 a 360°, y saturación/luminosidad se expresan en porcentaje." },
    { q: "¿Cuál es la diferencia entre HEX y RGB?", a: "HEX es una representación en base 16 de los mismos tres valores de color que usa RGB en base 10; ambos representan el mismo color." },
    { q: "¿Puedo convertir RGB a HEX?", a: "Sí, selecciona RGB como formato de entrada, ingresa los valores separados por comas (ej. 255,0,0) y obtendrás el HEX equivalente." },
    { q: "¿Esta herramienta admite transparencia (alfa)?", a: "No, actualmente solo convierte colores sólidos en HEX, RGB y HSL sin canal alfa." },
    { q: "¿Qué formato de color debo usar en CSS?", a: "Los tres son válidos en CSS moderno; HSL suele preferirse cuando necesitas ajustar fácilmente la luminosidad o saturación de un color." },
    { q: "¿Cómo sé el HSL de un color de marca si solo tengo el HEX?", a: "Ingresa el HEX en esta calculadora y el HSL equivalente se calcula automáticamente." },
    { q: "¿Esta herramienta guarda los colores que ingreso?", a: "No, todo el cálculo se realiza localmente en tu navegador sin enviar datos a ningún servidor." },
    { q: "¿Qué significa el símbolo # antes de un código de color?", a: "El símbolo # indica que el valor siguiente es un código de color en formato hexadecimal." },
    { q: "¿Los valores RGB pueden ser mayores a 255?", a: "No, cada canal (rojo, verde, azul) tiene un rango válido de 0 a 255." },
    { q: "¿Cómo obtengo un color más claro usando HSL?", a: "Aumenta el valor de luminosidad en HSL manteniendo el tono y la saturación iguales para aclarar el color." },
    { q: "¿Esta herramienta funciona en dispositivos móviles?", a: "Sí, es completamente responsiva y funciona en cualquier navegador de escritorio o móvil." },
  ],
  relatedCalculators: ["Convertidor de Base64", "Formateador de JSON", "Generador de Contraseñas", "Contador de Caracteres"],
  youMayLike: pickYouMayLike("color-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Colores",
    h2: ["Acerca de", "Cómo Funciona", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};