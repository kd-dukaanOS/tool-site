// src/data/calculators/es/password-generator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const passwordGeneratorContent = {
  meta: {
    seoTitle: "Generador de Contraseñas Seguras Online Gratis",
    metaDescription: "Genera contraseñas aleatorias y seguras con longitud y reglas personalizadas. Incluye medidor de fortaleza y tiempo de descifrado. Gratis.",
    canonicalSlug: "/es/security-tools/password-generator",
    ogTitle: "Generador de Contraseñas",
    ogDescription: "Genera contraseñas seguras y aleatorias con reglas personalizadas.",
    twitterTitle: "Generador de Contraseñas Seguras",
    twitterDescription: "Genera contraseñas fuertes al instante.",
  },
  hero: {
    text: "El Generador de Contraseñas crea contraseñas aleatorias y seguras usando el generador criptográfico de tu navegador, con longitud y reglas de caracteres personalizables, más un medidor de fortaleza y tiempo estimado de descifrado.",
  },
  about: {
    text: `Una contraseña fuerte es la primera línea de defensa contra accesos no autorizados a tus cuentas; las contraseñas débiles o reutilizadas son una de las causas más comunes de brechas de seguridad.

Esta herramienta genera contraseñas verdaderamente aleatorias usando el generador de números aleatorios criptográficamente seguro del navegador (no un algoritmo predecible), permitiéndote elegir la longitud y qué tipos de caracteres incluir (mayúsculas, minúsculas, números, símbolos).

Limitaciones: la fortaleza real de una contraseña también depende de que no la reutilices en múltiples sitios y de que la almacenes de forma segura, idealmente en un gestor de contraseñas.`,
  },
  formula: {
    formula: "Combinaciones Posibles = (Tamaño del Conjunto de Caracteres)^Longitud",
    variables: [
      { symbol: "Conjunto de Caracteres", meaning: "El total de caracteres únicos disponibles según las opciones marcadas (mayúsculas, minúsculas, números, símbolos)" },
      { symbol: "Tiempo Estimado de Descifrado", meaning: "Una estimación de cuánto tardaría un ataque de fuerza bruta en probar todas las combinaciones posibles" },
    ],
    explanation: "Cuantos más tipos de caracteres incluyas y más larga sea la contraseña, exponencialmente mayor será el número de combinaciones posibles, haciendo un ataque de fuerza bruta mucho más lento.",
    interpretation: "Por ejemplo, una contraseña de 16 caracteres con mayúsculas, minúsculas, números y símbolos puede tardar siglos en descifrarse por fuerza bruta con la tecnología actual.",
  },
  steps: [
    "Elige la longitud deseada de la contraseña.",
    "Selecciona qué tipos de caracteres incluir: mayúsculas, minúsculas, números, símbolos.",
    "Opcionalmente, excluye caracteres ambiguos como I, l, 1, O, 0.",
    "Genera tu contraseña y revisa su fortaleza y tiempo estimado de descifrado.",
    "Copia la contraseña con el botón correspondiente.",
  ],
  examples: [
    { inputs: "Longitud: 16, Mayúsculas, minúsculas, números, símbolos", result: "Fortaleza: Muy Fuerte | Tiempo: Siglos", explanation: "Una contraseña larga con todos los tipos de caracteres es prácticamente imposible de descifrar por fuerza bruta." },
    { inputs: "Longitud: 8, solo minúsculas", result: "Fortaleza: Débil | Tiempo: Segundos a minutos", explanation: "Una contraseña corta con un solo tipo de carácter es vulnerable a ataques rápidos." },
    { inputs: "Longitud: 12, mayúsculas, minúsculas, números", result: "Fortaleza: Fuerte | Tiempo: Años", explanation: "Un balance razonable entre longitud, variedad de caracteres y facilidad de uso." },
  ],
  practicalUses: [
    "Crear contraseñas únicas y seguras para cada una de tus cuentas online",
    "Generar contraseñas para usar con un gestor de contraseñas",
    "Cumplir con requisitos específicos de complejidad de contraseña de un sitio web",
    "Reemplazar contraseñas débiles o reutilizadas después de una brecha de seguridad",
    "Generar claves temporales seguras para compartir accesos de forma puntual",
  ],
  expertTips: [
    "Usa una contraseña distinta para cada cuenta — reutilizar contraseñas significa que una sola brecha compromete todas tus cuentas.",
    "Combina esta herramienta con un gestor de contraseñas para no tener que memorizar decenas de contraseñas complejas.",
    "Una contraseña de 16 caracteres o más con los cuatro tipos de caracteres ofrece seguridad prácticamente a prueba de fuerza bruta con la tecnología actual.",
    "Activa siempre la autenticación de dos factores (2FA) además de usar contraseñas fuertes, como capa adicional de seguridad.",
  ],
  commonMistakes: [
    { mistake: "Usar la misma contraseña en múltiples sitios", fix: "Genera una contraseña única para cada cuenta con esta herramienta y guárdalas en un gestor de contraseñas." },
    { mistake: "Elegir contraseñas cortas por facilidad de memorización", fix: "Usa un gestor de contraseñas para no depender de memorizar contraseñas; así puedes usar longitudes de 16+ caracteres sin problema." },
    { mistake: "Excluir todos los símbolos por miedo a que un sitio no los acepte", fix: "La mayoría de los sitios modernos aceptan símbolos comunes; solo excluye símbolos si el sitio específico lo requiere." },
  ],
  faq: [
    { q: "¿Cómo genero una contraseña segura online?", a: "Elige la longitud deseada, selecciona los tipos de caracteres a incluir (mayúsculas, minúsculas, números, símbolos), y genera tu contraseña con un clic." },
    { q: "¿Qué longitud de contraseña es segura?", a: "Se recomienda un mínimo de 12 caracteres, siendo 16 o más caracteres una opción más robusta contra ataques de fuerza bruta modernos." },
    { q: "¿Esta herramienta guarda las contraseñas que genero?", a: "No, todas las contraseñas se generan y muestran localmente en tu navegador; no se almacenan ni se envían a ningún servidor." },
    { q: "¿Qué significa excluir caracteres ambiguos?", a: "Significa omitir caracteres que pueden confundirse visualmente, como la letra I mayúscula, la l minúscula, el número 1, la O mayúscula y el número 0." },
    { q: "¿Cómo se calcula el tiempo estimado de descifrado?", a: "Se estima según el tamaño del conjunto de caracteres usado y la longitud de la contraseña, calculando cuánto tardaría un ataque de fuerza bruta en probar todas las combinaciones posibles." },
    { q: "¿Debo usar símbolos en mi contraseña?", a: "Sí, incluir símbolos aumenta significativamente el número de combinaciones posibles, haciendo la contraseña más resistente a ataques de fuerza bruta." },
    { q: "¿Es más segura una contraseña larga o una con más tipos de caracteres?", a: "La longitud generalmente tiene mayor impacto en la seguridad que la variedad de caracteres, aunque combinar ambas da el mejor resultado." },
    { q: "¿Esta herramienta genera contraseñas realmente aleatorias?", a: "Sí, usa el generador de números aleatorios criptográficamente seguro del navegador (Web Crypto API), no un algoritmo predecible." },
    { q: "¿Debo memorizar mis contraseñas generadas?", a: "No es necesario ni recomendable memorizarlas todas; se recomienda usar un gestor de contraseñas para almacenarlas de forma segura." },
    { q: "¿Qué es un gestor de contraseñas y por qué debería usar uno?", a: "Es una aplicación que almacena tus contraseñas de forma cifrada, permitiéndote usar contraseñas únicas y complejas para cada cuenta sin tener que memorizarlas." },
    { q: "¿Con qué frecuencia debo cambiar mis contraseñas?", a: "No es necesario cambiarlas periódicamente sin motivo si son suficientemente fuertes y únicas; cámbialas inmediatamente si sospechas una brecha de seguridad." },
    { q: "¿Esta herramienta funciona sin conexión a internet?", a: "La generación ocurre en tu navegador, pero necesitas cargar la página inicialmente; una vez cargada, el proceso de generación no requiere enviar datos a un servidor." },
  ],
  relatedCalculators: ["Formateador JSON", "Convertidor de Base64", "Contador de Palabras y Caracteres", "Convertidor de Mayúsculas y Minúsculas"],
  youMayLike: pickYouMayLike("password-generator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Generador de Contraseñas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};