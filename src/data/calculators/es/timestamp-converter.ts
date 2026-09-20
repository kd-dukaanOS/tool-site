// src/data/calculators/es/timestamp-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const timestampConverterContent = {
  meta: {
    seoTitle: "Convertidor de Marca de Tiempo Unix Online Gratis",
    metaDescription: "Convierte marcas de tiempo Unix a fechas legibles, o fechas a Unix, con formatos ISO 8601, UTC y hora local. Gratis.",
    canonicalSlug: "/es/converters/timestamp-converter",
    ogTitle: "Convertidor de Marca de Tiempo",
    ogDescription: "Convierte entre marcas de tiempo Unix y fechas legibles al instante.",
    twitterTitle: "Convertidor de Timestamp Unix",
    twitterDescription: "Convierte marcas de tiempo Unix al instante.",
  },
  hero: {
    text: "El Convertidor de Marca de Tiempo transforma marcas de tiempo Unix en fechas legibles, o fechas en marcas de tiempo Unix, mostrando también formatos ISO 8601, UTC, hora local y tiempo relativo.",
  },
  about: {
    text: `Una marca de tiempo Unix (Unix timestamp) es el número de segundos transcurridos desde el 1 de enero de 1970 (época Unix), ampliamente usado en bases de datos, APIs y sistemas de programación para representar fechas de forma compacta.

Esta herramienta acepta tanto marcas de tiempo Unix (en segundos o milisegundos) como fechas en formato legible, y convierte automáticamente entre ambos, mostrando también el formato ISO 8601, la hora UTC, la hora local y el tiempo relativo (por ejemplo, "hace 3 horas").

Limitaciones: para fechas anteriores a 1970 o posteriores al año 2038 en sistemas de 32 bits, algunos sistemas antiguos pueden tener limitaciones de representación que esta herramienta no reproduce.`,
  },
  formula: {
    formula: "Marca de Tiempo Unix = Segundos Transcurridos desde el 1 de enero de 1970 (UTC)",
    variables: [
      { symbol: "Unix (segundos)", meaning: "El estándar más común, usado en la mayoría de las bases de datos y APIs" },
      { symbol: "Unix (milisegundos)", meaning: "Usado por JavaScript y algunos sistemas que requieren mayor precisión" },
      { symbol: "Tiempo Relativo", meaning: "Expresa la fecha en relación al momento actual, como 'hace 2 días' o 'en 3 horas'" },
    ],
    explanation: "Se calcula la diferencia en segundos entre la fecha ingresada y la época Unix (1 de enero de 1970), o viceversa, si se ingresa una marca de tiempo numérica se convierte directamente a fecha.",
    interpretation: "Por ejemplo, la marca de tiempo Unix 1735689600 corresponde a la fecha 1 de enero de 2025 a las 00:00:00 UTC.",
  },
  steps: [
    "Ingresa una marca de tiempo Unix (en segundos) o una fecha en formato legible.",
    "También puedes hacer clic en 'Usar Ahora' para usar la fecha y hora actuales.",
    "Haz clic en Calcular.",
    "Revisa los resultados en Unix (segundos y milisegundos), ISO 8601, UTC, hora local y tiempo relativo.",
  ],
  examples: [
    { inputs: "Entrada: 1735689600", result: "Fecha: 1 de enero de 2025, 00:00:00 UTC", explanation: "Una marca de tiempo Unix convertida a fecha legible." },
    { inputs: "Entrada: 2026-06-15", result: "Unix: 1781740800", explanation: "Una fecha en formato ISO convertida a su marca de tiempo Unix equivalente." },
    { inputs: "Usar Ahora", result: "Marca de tiempo actual en todos los formatos", explanation: "Útil para obtener rápidamente el timestamp del momento presente." },
  ],
  practicalUses: [
    "Depurar registros de bases de datos o APIs que almacenan fechas como marcas de tiempo Unix",
    "Convertir timestamps de logs de servidor a fechas legibles para análisis",
    "Verificar la fecha de expiración de un token JWT o cookie",
    "Programar tareas o eventos que requieren un valor Unix timestamp específico",
    "Calcular cuánto tiempo ha pasado o falta para una fecha específica en formato relativo",
  ],
  expertTips: [
    "La mayoría de las APIs web usan Unix timestamp en segundos, pero JavaScript internamente usa milisegundos — verifica cuál necesitas antes de usar el valor.",
    "El formato ISO 8601 es el estándar recomendado para intercambiar fechas entre sistemas, ya que es legible e inequívoco respecto a la zona horaria.",
    "Ten cuidado con la diferencia entre UTC y tu hora local al depurar problemas relacionados con fechas en sistemas distribuidos.",
    "El campo 'tiempo relativo' es útil para mostrar fechas de forma amigable al usuario, como en redes sociales ('hace 5 minutos').",
  ],
  commonMistakes: [
    { mistake: "Confundir Unix en segundos con Unix en milisegundos", fix: "Verifica si tu sistema espera segundos (10 dígitos aprox.) o milisegundos (13 dígitos aprox.) antes de usar el valor." },
    { mistake: "No considerar la zona horaria al interpretar un timestamp", fix: "Una marca de tiempo Unix siempre representa UTC; conviértela a tu zona horaria local para interpretarla correctamente en contexto." },
    { mistake: "Asumir que todas las fechas anteriores a 1970 son válidas", fix: "Aunque técnicamente es posible representar fechas negativas en Unix, algunos sistemas antiguos no las soportan correctamente." },
  ],
  faq: [
    { q: "¿Qué es una marca de tiempo Unix?", a: "Es el número de segundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC, ampliamente usado en programación para representar fechas." },
    { q: "¿Cómo convierto un Unix timestamp a fecha legible?", a: "Ingresa el número de la marca de tiempo en el campo de entrada y haz clic en Calcular; verás la fecha correspondiente en varios formatos." },
    { q: "¿Cuál es la diferencia entre Unix en segundos y milisegundos?", a: "Unix en segundos es el estándar tradicional (10 dígitos aproximadamente); JavaScript y algunos sistemas modernos usan milisegundos (13 dígitos aproximadamente) para mayor precisión." },
    { q: "¿Qué es el formato ISO 8601?", a: "Es un estándar internacional para representar fechas y horas de forma inequívoca, como '2026-01-01T00:00:00Z', ampliamente usado en APIs y bases de datos." },
    { q: "¿Cómo convierto una fecha a Unix timestamp?", a: "Ingresa la fecha en formato legible (como 2026-01-01) en el campo de entrada, y la calculadora te mostrará su equivalente en Unix timestamp." },
    { q: "¿Qué significa el tiempo relativo en los resultados?", a: "Muestra cuánto tiempo ha pasado o falta respecto al momento actual, como 'hace 3 horas' o 'en 2 días', facilitando la interpretación rápida de una fecha." },
    { q: "¿Esta herramienta funciona con fechas anteriores a 1970?", a: "Técnicamente sí, usando marcas de tiempo negativas, aunque algunos sistemas antiguos pueden no soportar correctamente fechas anteriores a la época Unix." },
    { q: "¿Qué es el problema del año 2038?", a: "Es una limitación de sistemas que almacenan Unix timestamp como enteros de 32 bits con signo, que se desbordará el 19 de enero de 2038; sistemas modernos de 64 bits no tienen este problema." },
    { q: "¿Por qué necesito convertir entre UTC y hora local?", a: "Las marcas de tiempo Unix siempre representan UTC; convertir a tu hora local te permite interpretar correctamente la fecha en tu contexto geográfico." },
    { q: "¿Esta herramienta guarda las fechas que ingreso?", a: "No, toda la conversión ocurre localmente en tu navegador; no se envían datos a ningún servidor externo." },
    { q: "¿Puedo usar esta herramienta para verificar la expiración de un token JWT?", a: "Sí, si el token incluye un campo de expiración en formato Unix timestamp, puedes pegarlo aquí para ver la fecha exacta de expiración." },
  ],
  relatedCalculators: ["Calculadora de Zona Horaria", "Calculadora de Diferencia de Fechas", "Calculadora de Cuenta Regresiva", "Formateador JSON"],
  youMayLike: pickYouMayLike("timestamp-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Marca de Tiempo",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};