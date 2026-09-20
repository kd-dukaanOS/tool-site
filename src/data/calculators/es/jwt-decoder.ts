// src/data/calculators/es/jwt-decoder.ts
// NOTE: real slug is "jwt-decoder" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const jwtDecoderContent = {
  meta: {
    seoTitle: "Decodificador de JWT Online Gratis 2026",
    metaDescription: "Decodifica tokens JWT y visualiza header, payload y expiración al instante. 100% en tu navegador, sin subir datos.",
    canonicalSlug: "/es/developer-tools/jwt-decoder",
    ogTitle: "Decodificador JWT",
    ogDescription: "Decodifica y analiza JSON Web Tokens de forma instantánea y segura.",
    twitterTitle: "Decodificador de Tokens JWT",
    twitterDescription: "Pega tu token JWT y ve el header, payload y expiración al instante.",
  },
  hero: {
    text: "El Decodificador de JWT te permite pegar cualquier JSON Web Token y ver instantáneamente su header, payload, algoritmo y estado de expiración, todo procesado localmente en tu navegador.",
  },
  about: {
    text: `Un JWT (JSON Web Token) es un token compacto usado principalmente para autenticación: tras iniciar sesión, un servidor emite un JWT que el cliente envía en cada solicitud posterior para demostrar su identidad.

Esta herramienta decodifica las tres partes de un JWT (header, payload y firma) y muestra el contenido en JSON legible, además de indicar si el token está expirado según su campo "exp".

Limitaciones: esta herramienta solo decodifica, no verifica la firma criptográfica del token; un JWT decodificado nunca debe tratarse como prueba de autenticidad sin la verificación correspondiente en el backend.`,
  },
  formula: {
    formula: "JWT = Base64Url(Header) + \".\" + Base64Url(Payload) + \".\" + Firma",
    variables: [
      { symbol: "Header", meaning: "Contiene el algoritmo de firma (ej. HS256) y el tipo de token" },
      { symbol: "Payload", meaning: "Contiene los 'claims' o datos, como el ID de usuario y la fecha de expiración (exp)" },
    ],
    explanation: "El token se separa por puntos en sus tres partes, y las dos primeras (header y payload) se decodifican de Base64Url a JSON legible; la firma no se decodifica porque su función es criptográfica, no informativa.",
    interpretation: "Por ejemplo, un payload con \"exp\": 1735689600 indica la fecha exacta en que el token deja de ser válido, en formato de tiempo Unix.",
  },
  steps: [
    "Copia tu token JWT completo (las tres partes separadas por puntos).",
    "Pégalo en el campo de entrada.",
    "La herramienta decodifica automáticamente el header y el payload.",
    "Revisa el algoritmo, fecha de emisión, fecha de expiración y estado del token.",
  ],
  examples: [
    { inputs: "Token con exp en el pasado", result: "Estado: Expirado", explanation: "El campo exp del payload ya pasó respecto a la hora actual." },
    { inputs: "Token con algoritmo HS256", result: "Algoritmo: HS256", explanation: "Firma simétrica común en autenticación con Node.js o Express." },
    { inputs: "Token sin campo exp", result: "Expira: N/A", explanation: "Algunos tokens no incluyen expiración y se consideran válidos indefinidamente hasta ser revocados." },
  ],
  practicalUses: [
    "Depurar un flujo de autenticación mientras desarrollas una API",
    "Inspeccionar qué claims (datos) contiene un token emitido por un servicio externo",
    "Verificar rápidamente si un token ya expiró sin escribir código",
    "Confirmar qué algoritmo de firma usa un JWT antes de implementarlo",
    "Enseñar o aprender la estructura interna de un JSON Web Token",
  ],
  expertTips: [
    "Nunca compartas un JWT de producción real en herramientas online; aunque esta funciona 100% en tu navegador, es buena práctica usar tokens de prueba.",
    "Un token decodificado no es un token verificado: la validación real de la firma debe hacerse siempre en el servidor con la clave secreta correspondiente.",
    "El campo 'iat' (issued at) indica cuándo se creó el token, mientras que 'exp' indica cuándo expira; ambos están en formato de tiempo Unix.",
    "Si tu token usa el algoritmo 'none', trátalo con precaución: significa que no tiene firma criptográfica y es fácilmente falsificable.",
  ],
  commonMistakes: [
    { mistake: "Confundir decodificar con verificar un JWT", fix: "Decodificar solo muestra el contenido; verificar la firma requiere la clave secreta y debe hacerse en el backend." },
    { mistake: "Pegar un token incompleto o con espacios extra", fix: "Asegúrate de copiar el token completo, incluyendo las tres partes separadas por puntos, sin espacios." },
    { mistake: "Confiar en los datos de un JWT sin verificar su firma", fix: "Cualquier dato del payload puede ser modificado si el token no ha sido verificado criptográficamente." },
    { mistake: "No revisar el estado de expiración antes de depurar un error de autenticación", fix: "Revisa siempre el campo 'exp' primero; muchos errores de autenticación se deben a tokens expirados." },
  ],
  faq: [
    { q: "¿Qué es un token JWT?", a: "Un JSON Web Token (JWT) es un token compacto usado comúnmente para autenticación; tras iniciar sesión, el servidor lo emite y el cliente lo envía en cada solicitud para demostrar su identidad." },
    { q: "¿Este decodificador JWT verifica si el token es válido?", a: "No, esta herramienta solo decodifica el header y payload; no verifica la firma criptográfica, que debe validarse en el servidor." },
    { q: "¿Cómo saber si mi token JWT ya expiró?", a: "Revisa el campo 'exp' del payload; si esa fecha ya pasó respecto a la hora actual, el token está expirado, y esta herramienta lo indica automáticamente." },
    { q: "¿Es seguro pegar mi JWT en esta herramienta?", a: "Sí, todo el proceso ocurre localmente en tu navegador; el token nunca se envía a ningún servidor." },
    { q: "¿Qué significa el campo 'iat' en un JWT?", a: "'iat' significa 'issued at' (emitido en) e indica la fecha y hora exacta en que el token fue creado, en formato de tiempo Unix." },
    { q: "¿Qué algoritmos de firma usan los JWT?", a: "Los más comunes son HS256 (simétrico, con clave secreta compartida) y RS256 (asimétrico, con par de claves pública y privada)." },
    { q: "¿Por qué las tres partes de un JWT están separadas por puntos?", a: "El punto separa el header, el payload y la firma, que son las tres secciones codificadas en Base64Url que componen el token completo." },
    { q: "¿Puedo modificar un JWT decodificado y que siga siendo válido?", a: "No, si modificas el payload sin volver a firmarlo con la clave secreta correcta, el servidor rechazará el token al verificar la firma." },
    { q: "¿Qué diferencia hay entre JWT y una sesión tradicional?", a: "El JWT almacena la información del usuario en el propio token (sin estado en el servidor), mientras que las sesiones tradicionales guardan esos datos en el servidor y solo envían un ID." },
    { q: "¿Cómo se usa un JWT en una petición HTTP?", a: "Normalmente se envía en el encabezado 'Authorization' con el formato 'Bearer <token>' en cada solicitud a la API." },
    { q: "¿Qué pasa si un JWT no tiene el campo 'exp'?", a: "Significa que el token no tiene fecha de expiración definida y se considera válido hasta que sea revocado manualmente por el servidor." },
    { q: "¿Cómo puedo generar un JWT para pruebas?", a: "Puedes usar librerías como jsonwebtoken en Node.js o generadores online específicos; este decodificador solo lee tokens existentes, no los crea." },
    { q: "¿Los JWT son seguros contra ataques?", a: "Son seguros si se firman correctamente con un algoritmo fuerte y una clave secreta protegida; nunca deben usarse con el algoritmo 'none' en producción." },
    { q: "¿Por qué mi API rechaza un JWT que se ve válido al decodificarlo?", a: "Puede deberse a una firma inválida, expiración, o un 'issuer'/'audience' incorrecto; el decodificado solo muestra el contenido, no confirma que el servidor lo acepte." },
  ],
  relatedCalculators: ["Decodificador de Base64", "Formateador de JSON", "Generador de Hash", "Codificador URL"],
  youMayLike: pickYouMayLike("jwt-decoder"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Decodificador de JWT",
    h2: ["Acerca de", "Estructura", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};