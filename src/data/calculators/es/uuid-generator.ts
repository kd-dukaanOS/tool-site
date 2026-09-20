// src/data/calculators/es/uuid-generator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const uuidGeneratorContent = {
  meta: {
    seoTitle: "Generador de UUID Online Gratis (v4 Aleatorio)",
    metaDescription: "Genera identificadores UUID v4 aleatorios en masa, con formato personalizable. Gratis, sin límites, sin registro.",
    canonicalSlug: "/es/security-tools/uuid-generator",
    ogTitle: "Generador de UUID",
    ogDescription: "Genera UUIDs v4 aleatorios al instante, en masa.",
    twitterTitle: "Generador de UUID Gratis",
    twitterDescription: "Genera identificadores UUID al instante.",
  },
  hero: {
    text: "El Generador de UUID crea identificadores únicos universales (UUID) v4 aleatorios en masa, usando el generador criptográfico nativo de tu navegador, con formato personalizable.",
  },
  about: {
    text: `Un UUID (Identificador Único Universal) es una cadena de 128 bits usada para identificar de forma única registros, objetos o entidades sin necesidad de un servidor central que coordine la asignación de IDs, ampliamente usado en bases de datos y sistemas distribuidos.

Esta herramienta genera UUIDs versión 4 (completamente aleatorios) usando la función crypto.randomUUID() nativa de tu navegador, permitiéndote generar múltiples IDs a la vez, con o sin guiones, y en mayúsculas o minúsculas.

Limitaciones: esta herramienta solo genera UUID v4 (aleatorio) y UUID nulo; no genera otras versiones como v1 (basado en tiempo) o v5 (basado en hash de nombre).`,
  },
  formula: {
    formula: "UUID v4 = 122 bits aleatorios + 6 bits de versión/variante fijos",
    variables: [
      { symbol: "UUID v4", meaning: "Un identificador generado completamente al azar, con una probabilidad de colisión prácticamente nula" },
      { symbol: "UUID Nulo", meaning: "Un UUID especial compuesto completamente por ceros (00000000-0000-0000-0000-000000000000), usado como valor placeholder" },
    ],
    explanation: "Un UUID v4 se genera usando 122 bits de aleatoriedad criptográficamente segura, con 6 bits fijos que indican la versión (4) y la variante, formateados en el patrón estándar de 8-4-4-4-12 caracteres hexadecimales.",
    interpretation: "Por ejemplo, un UUID v4 típico se ve como '550e8400-e29b-41d4-a716-446655440000', donde la probabilidad de generar dos UUIDs idénticos es astronómicamente baja.",
  },
  steps: [
    "Ingresa cuántos UUIDs deseas generar (hasta 1000 a la vez).",
    "Selecciona la versión: v4 (aleatorio) o UUID nulo.",
    "Elige si quieres incluir guiones y si prefieres mayúsculas.",
    "Haz clic en Generar.",
    "Copia todos los UUIDs generados con el botón Copiar.",
  ],
  examples: [
    { inputs: "Cantidad: 5, Versión: v4, Con guiones", result: "5 UUIDs únicos en formato estándar", explanation: "Generación típica para pruebas o desarrollo de software." },
    { inputs: "Cantidad: 100, Versión: v4, Sin guiones, Mayúsculas", result: "100 UUIDs compactos en mayúsculas", explanation: "Generación masiva con formato personalizado para importación a una base de datos." },
    { inputs: "Cantidad: 1, Versión: UUID Nulo", result: "00000000-0000-0000-0000-000000000000", explanation: "Un UUID nulo usado como valor placeholder o de prueba." },
  ],
  practicalUses: [
    "Generar identificadores únicos para registros de una base de datos durante el desarrollo",
    "Crear IDs de sesión o de transacción únicos para pruebas de software",
    "Generar claves primarias distribuidas sin depender de un contador centralizado",
    "Crear datos de prueba (mock data) con identificadores realistas para una aplicación",
    "Generar tokens temporales únicos para pruebas de API",
  ],
  expertTips: [
    "Los UUID v4 tienen una probabilidad de colisión tan baja que se consideran prácticamente únicos para fines prácticos, incluso generando miles de millones.",
    "Usa el formato sin guiones si tu base de datos o sistema espera una cadena hexadecimal compacta de 32 caracteres.",
    "El UUID nulo (todos ceros) se usa comúnmente como valor por defecto o placeholder quiere indicar 'sin valor asignado aún'.",
    "Para sistemas que requieren orden cronológico en los IDs, considera UUID v7 o v1 en lugar de v4, aunque esta herramienta actualmente solo soporta v4 y nulo.",
  ],
  commonMistakes: [
    { mistake: "Usar UUID v4 cuando se necesita orden cronológico", fix: "UUID v4 es completamente aleatorio y no mantiene orden temporal; si necesitas eso, considera UUID v1 o v7 en su lugar." },
    { mistake: "Generar más UUIDs de los necesarios sin gestión adecuada", fix: "Genera solo la cantidad que realmente necesitas para tu caso de uso, especialmente en generación masiva." },
    { mistake: "Confundir UUID nulo con un UUID real generado aleatoriamente", fix: "El UUID nulo (todos ceros) es un valor especial reservado, no un identificador único generado — no lo uses como ID real de un registro." },
  ],
  faq: [
    { q: "¿Qué es un UUID?", a: "Es un Identificador Único Universal, una cadena de 128 bits usada para identificar de forma única registros u objetos sin necesidad de coordinación centralizada." },
    { q: "¿Qué es un UUID v4?", a: "Es la versión más común de UUID, generada completamente al azar usando un generador de números aleatorios criptográficamente seguro." },
    { q: "¿Qué tan probable es que dos UUID v4 sean iguales?", a: "La probabilidad de colisión es astronómicamente baja — se necesitarían generar miles de millones de UUIDs para tener una probabilidad significativa de colisión." },
    { q: "¿Puedo generar múltiples UUIDs a la vez?", a: "Sí, esta herramienta permite generar hasta 1000 UUIDs simultáneamente en una sola operación." },
    { q: "¿Qué es un UUID nulo?", a: "Es un UUID especial compuesto completamente por ceros (00000000-0000-0000-0000-000000000000), usado típicamente como valor placeholder o por defecto." },
    { q: "¿Debo incluir los guiones en mis UUIDs?", a: "Depende de tu sistema; el formato estándar incluye guiones, pero algunas bases de datos o APIs esperan el formato compacto sin guiones de 32 caracteres." },
    { q: "¿Los UUID generados aquí son seguros para usar en producción?", a: "Sí, se generan usando crypto.randomUUID(), la función criptográficamente segura nativa del navegador, adecuada para uso en producción." },
    { q: "¿Esta herramienta guarda los UUIDs que genero?", a: "No, todos los UUIDs se generan localmente en tu navegador; no se almacenan ni se envían a ningún servidor externo." },
    { q: "¿Cuál es la diferencia entre UUID v4 y otras versiones como v1?", a: "UUID v1 se basa en la marca de tiempo y la dirección de red, mientras que v4 es completamente aleatorio; esta herramienta actualmente solo soporta v4 y UUID nulo." },
    { q: "¿Puedo usar UUID en mayúsculas?", a: "Sí, esta herramienta permite generar los UUIDs en mayúsculas o minúsculas según tu preferencia o los requisitos de tu sistema." },
    { q: "¿Para qué se usan los UUID en bases de datos?", a: "Se usan comúnmente como claves primarias quesirven identificar registros de forma única sin depender de un contador secuencial centralizado, útil en sistemas distribuidos." },
  ],
  relatedCalculators: ["Generador de Contraseñas", "Convertidor de Base64", "Formateador JSON", "Convertidor de Bases Numéricas"],
  youMayLike: pickYouMayLike("uuid-generator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Generador de UUID",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};