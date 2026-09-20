// src/data/calculators/es/timezone-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const timezoneCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Zona Horaria Online Gratis",
    metaDescription: "Convierte una fecha y hora entre cualquier par de zonas horarias, con ajuste automático por horario de verano. Gratis.",
    canonicalSlug: "/es/date-time/timezone-calculator",
    ogTitle: "Calculadora de Zona Horaria",
    ogDescription: "Convierte fecha y hora entre zonas horarias al instante.",
    twitterTitle: "Calculadora de Zona Horaria",
    twitterDescription: "Convierte entre zonas horarias al instante.",
  },
  hero: {
    text: "La Calculadora de Zona Horaria convierte cualquier fecha y hora de una zona horaria a otra, ajustando automáticamente por horario de verano según la fecha específica.",
  },
  about: {
    text: `Coordinar horarios entre zonas horarias distintas puede ser confuso, especialmente cuando el horario de verano cambia el desfase horario en ciertas épocas del año.

Esta herramienta toma una fecha y hora en una zona horaria de origen y la convierte a cualquier otra zona horaria IANA, calculando también la diferencia de horas exacta considerando si el horario de verano está activo en esa fecha específica.

Limitaciones: los cambios de horario de verano dependen de las reglas vigentes en cada país; si un gobierno modifica sus reglas de horario de verano en el futuro, verifica la información actualizada.`,
  },
  formula: {
    formula: "Hora Convertida = Hora Origen + Diferencia de Desfase UTC (ajustada por horario de verano)",
    variables: [
      { symbol: "Diferencia de Horas", meaning: "La diferencia real en horas entre las dos zonas horarias en la fecha específica seleccionada" },
      { symbol: "Horario de Verano (DST)", meaning: "Ajuste estacional que algunos países aplican, cambiando el desfase horario en ciertas épocas del año" },
    ],
    explanation: "Se calcula el desfase UTC de cada zona horaria en la fecha específica ingresada (considerando si el horario de verano está activo), y se aplica la diferencia para convertir la hora de origen a la zona horaria de destino.",
    interpretation: "Por ejemplo, las 15:00 en Nueva York (hora de verano, UTC-4) equivalen a las 20:00 en Londres (hora de verano, UTC+1) — una diferencia de 5 horas.",
  },
  steps: [
    "Selecciona la fecha y hora en la zona horaria de origen.",
    "Selecciona la zona horaria de origen.",
    "Selecciona la zona horaria de destino.",
    "Haz clic en Calcular para ver la hora convertida y la diferencia de horas.",
  ],
  examples: [
    { inputs: "15:00 en America/New_York → Europe/London", result: "20:00 en Londres (diferencia de 5 horas)", explanation: "Conversión típica entre Nueva York y Londres durante horario de verano." },
    { inputs: "09:00 en Asia/Tokyo → America/Los_Angeles", result: "16:00 del día anterior en Los Ángeles", explanation: "Una conversión que cruza la línea de cambio de fecha debido a la gran diferencia horaria." },
    { inputs: "12:00 en UTC → Australia/Sydney", result: "22:00 o 23:00 en Sídney (según horario de verano)", explanation: "Australia usa horario de verano en temporada opuesta al hemisferio norte." },
  ],
  practicalUses: [
    "Programar reuniones internacionales considerando la hora correcta en cada zona horaria",
    "Coordinar eventos en vivo o lanzamientos de productos entre distintos países",
    "Verificar a qué hora local llega un vuelo internacional",
    "Planificar llamadas con equipos remotos distribuidos en distintas zonas horarias",
    "Convertir horarios de streaming o transmisiones en vivo a tu zona horaria local",
  ],
  expertTips: [
    "Siempre verifica si la fecha específica cae dentro del período de horario de verano, ya que la diferencia horaria puede cambiar en distintas épocas del año.",
    "Usa nombres de zona horaria IANA (como America/New_York) en lugar de abreviaciones (como EST) para evitar ambigüedades, ya que esta herramienta las soporta directamente.",
    "Para coordinar reuniones recurrentes, recuerda que la diferencia horaria puede cambiar si una de las zonas horarias cambia de horario de verano y la otra no.",
    "Al viajar, calcula tu hora de llegada convirtiendo la hora de salida a la zona horaria de destino antes del vuelo.",
  ],
  commonMistakes: [
    { mistake: "No considerar el horario de verano al calcular la diferencia horaria", fix: "La diferencia horaria entre dos zonas puede cambiar según la época del año si una o ambas observan horario de verano." },
    { mistake: "Usar abreviaciones de zona horaria ambiguas", fix: "Usa nombres de zona horaria IANA completos (como Europe/Madrid) en lugar de abreviaciones que pueden significar cosas distintas en diferentes países." },
    { mistake: "Olvidar que la fecha puede cambiar al convertir entre zonas horarias muy distantes", fix: "Verifica siempre la fecha resultante, no solo la hora, especialmente en conversiones entre zonas horarias con gran diferencia horaria." },
  ],
  faq: [
    { q: "¿Cómo convierto una hora entre dos zonas horarias?", a: "Selecciona la fecha y hora de origen, elige la zona horaria de origen y destino, y haz clic en Calcular para ver la hora convertida." },
    { q: "¿Esta calculadora considera el horario de verano?", a: "Sí, la conversión ajusta automáticamente según si el horario de verano está activo en la fecha específica seleccionada para cada zona horaria." },
    { q: "¿Qué es una zona horaria IANA?", a: "Es el estándar de nombres de zona horaria (como America/New_York o Europe/Madrid) usado en la mayoría de los sistemas informáticos para evitar ambigüedades." },
    { q: "¿Por qué la diferencia horaria entre dos ciudades cambia según la fecha?", a: "Porque una o ambas zonas horarias pueden observar horario de verano en ciertas épocas del año, cambiando temporalmente su desfase respecto a UTC." },
    { q: "¿Cómo sé la hora de llegada de un vuelo internacional?", a: "Convierte la hora de salida más la duración del vuelo a la zona horaria de destino, o si conoces la hora de llegada local, verifica que sea correcta con esta calculadora." },
    { q: "¿Qué es UTC y por qué es importante?", a: "UTC (Tiempo Universal Coordinado) es el estándar de referencia global del que se derivan todas las zonas horarias, sin ajuste por horario de verano." },
    { q: "¿Esta calculadora funciona para reuniones recurrentes?", a: "Puedes usarla para verificar la hora correcta en cada ocasión, pero ten en cuenta que la diferencia horaria puede cambiar si las zonas involucradas cambian de horario de verano en fechas distintas." },
    { q: "¿Qué países no observan horario de verano?", a: "Muchos países cerca del ecuador, así como algunos como Japón, China e India, no observan horario de verano y mantienen el mismo desfase todo el año." },
    { q: "¿Cómo afecta el horario de verano a las reuniones internacionales?", a: "Si los participantes están en zonas horarias con horario de verano en fechas de cambio distintas, la diferencia horaria entre ellos puede variar temporalmente unas semanas al año." },
    { q: "¿Esta herramienta soporta todas las zonas horarias del mundo?", a: "Sí, admite cualquier zona horaria IANA estándar, cubriendo prácticamente todos los países y regiones del mundo." },
  ],
  relatedCalculators: ["Convertidor de Marca de Tiempo", "Calculadora de Duración de Tiempo", "Calculadora de Cuenta Regresiva", "Calculadora de Días Laborables"],
  youMayLike: pickYouMayLike("timezone-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Zona Horaria",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};