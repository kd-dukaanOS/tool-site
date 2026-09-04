export const base64CalculatorContent = {
  meta: {
    seoTitle: "Codificador y Decodificador Base64 Online Gratis",
    metaDescription: "Codifica texto a Base64 o decodifica Base64 a texto al instante. Convertidor Base64 online gratis, funciona directo en tu navegador.",
    canonicalSlug: "/es/converters/base64-tool",
    ogTitle: "Codificador / Decodificador Base64 Online",
    ogDescription: "Codifica o decodifica texto en Base64 al instante, gratis y sin instalar nada.",
    twitterTitle: "Base64 Online Gratis",
    twitterDescription: "Codifica o decodifica Base64 al instante.",
  },

  hero: {
    text: "El Codificador y Decodificador Base64 convierte texto a formato Base64 o decodifica cadenas Base64 de vuelta a texto legible al instante. Cambia entre modo codificar y decodificar para obtener resultados inmediatos. Útil para desarrolladores que trabajan con URIs de datos, APIs y codificación de archivos.",
  },

  about: {
    text: `Esta herramienta convierte texto a formato Base64 o decodifica cadenas Base64 de vuelta a su texto original, todo directamente en tu navegador.

Es útil para incrustar imágenes pequeñas como URIs de datos, codificar credenciales para autenticación HTTP básica, depurar payloads de APIs, y trabajar con la codificación de archivos adjuntos en correos electrónicos.

La herramienta maneja correctamente texto Unicode, así que caracteres especiales y emojis se codifican y decodifican sin corromperse.

Limitaciones: funciona con Base64 basado en texto; para codificar archivos binarios reales como imágenes, un codificador de archivos dedicado es más apropiado.

Usa esta herramienta para tareas rápidas de codificación o decodificación Base64 durante el desarrollo.`,
  },

  formula: {
    formula: "Base64 codifica datos binarios usando 64 caracteres ASCII imprimibles (A-Z, a-z, 0-9, +, /)",
    variables: [
      { symbol: "Entrada", meaning: "Texto original o cadena Base64" },
    ],
    explanation: "La codificación convierte cada grupo de 3 bytes en 4 caracteres Base64; la decodificación revierte este proceso a los bytes originales.",
    interpretation: "Por ejemplo, el texto 'Hola' se codifica como 'SG9sYQ==' en Base64.",
  },

  steps: [
    "Selecciona el modo Codificar o Decodificar.",
    "Ingresa tu texto o cadena Base64.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta el resultado convertido.",
    "Copia el resultado con el botón de copiar.",
  ],

  examples: [
    { inputs: "Codificar: 'Hola Mundo'", result: "SG9sYSBNdW5kbw==", explanation: "Codificación básica de texto a Base64." },
    { inputs: "Decodificar: 'SG9sYSBNdW5kbw=='", result: "Hola Mundo", explanation: "Decodificación básica de Base64 a texto." },
    { inputs: "Codificar: 'usuario:clave'", result: "dXN1YXJpbzpjbGF2ZQ==", explanation: "Caso de uso común para encabezados de autenticación básica." },
  ],

  practicalUses: [
    "Codificar credenciales para encabezados de Autenticación Básica HTTP",
    "Incrustar imágenes pequeñas como URIs de datos en CSS o HTML",
    "Depurar tokens JWT o payloads de APIs",
    "Codificar datos binarios para transmisión segura en formatos de texto",
    "Decodificar contenido Base64 encontrado en correos o archivos de configuración",
    "Preparar datos para almacenarlos en campos de solo texto",
  ],

  expertTips: [
    "La codificación Base64 aumenta el tamaño de los datos en aproximadamente un 33% respecto al original.",
    "Base64 no es encriptación — es solo un esquema de codificación, fácilmente reversible por cualquiera.",
    "Las URLs usan una variante modificada de Base64 (URL-safe) que reemplaza + y / por - y _.",
    "Siempre valida la entrada Base64 antes de decodificar, ya que las cadenas mal formadas causarán errores.",
    "Base64 se usa comúnmente en tokens JWT, URIs de datos y archivos adjuntos de correo (MIME).",
  ],

  commonMistakes: [
    { mistake: "Asumir que Base64 brinda seguridad o encriptación", fix: "Base64 es solo codificación, no encriptación — nunca lo uses para proteger datos sensibles." },
    { mistake: "Usar Base64 estándar en URLs sin ajustarlo", fix: "Usa variantes URL-safe de Base64 cuando la cadena codificada deba ir en una URL." },
    { mistake: "Intentar decodificar un Base64 inválido o truncado", fix: "Asegúrate de que la cadena Base64 esté completa y correctamente rellenada con caracteres '=' antes de decodificar." },
  ],

  faq: [
    { q: "¿Qué es la codificación Base64?", a: "Base64 es un esquema de codificación que convierte datos binarios o de texto en una cadena de 64 caracteres ASCII imprimibles, comúnmente usado para transmitir datos de forma segura en formatos basados en texto." },
    { q: "¿Base64 es encriptación?", a: "No, Base64 no es encriptación — es simplemente un formato de codificación que cualquiera puede decodificar sin una clave, así que nunca debe usarse para proteger datos sensibles." },
    { q: "¿Por qué el resultado de Base64 termina con signos '='?", a: "Los caracteres '=' son relleno agregado cuando la longitud de entrada no es múltiplo de 3 bytes, asegurando la alineación correcta al decodificar." },
    { q: "¿Para qué se usa comúnmente Base64?", a: "Se usa comúnmente para incrustar imágenes en HTML/CSS, codificar archivos adjuntos de correo, tokens JWT y encabezados de autenticación HTTP básica." },
    { q: "¿Base64 puede codificar cualquier tipo de dato?", a: "Sí, Base64 puede codificar cualquier dato binario, incluyendo imágenes y archivos, aunque esta herramienta está diseñada para codificación y decodificación basada en texto." },
    { q: "¿Por qué Base64 hace que los datos sean más grandes?", a: "La codificación Base64 aumenta el tamaño en aproximadamente un 33%, ya que representa cada 3 bytes de datos originales usando 4 caracteres codificados." },
    { q: "¿Cuál es la diferencia entre Base64 y Base64 URL-safe?", a: "El Base64 estándar usa los caracteres + y /, que tienen un significado especial en las URLs. El Base64 URL-safe los reemplaza por - y _ para que la cadena pueda usarse directamente en una URL o nombre de archivo sin necesidad de escaparla." },
    { q: "¿Por qué me da error al decodificar mi cadena Base64?", a: "Esto usualmente significa que la cadena está incompleta, se copió con espacios en blanco extra o saltos de línea, o le falta el relleno con '='. Asegúrate de haber copiado la cadena completa y sin modificar." },
    { q: "¿Puedo decodificar Base64 que contiene emojis o caracteres especiales?", a: "Sí, esta herramienta maneja correctamente texto Unicode, así que emojis, letras acentuadas y escrituras no latinas se codifican y decodifican sin corromperse." },
    { q: "¿Base64 es lo mismo que el hashing?", a: "No. El hashing (como SHA-256) es unidireccional y no se puede revertir, mientras que Base64 es totalmente reversible — cualquiera puede decodificarlo de vuelta al texto original al instante." },
    { q: "¿Cómo codifico una imagen en Base64?", a: "Esta herramienta codifica entradas de texto. Para imágenes, normalmente convertirías el archivo de imagen a una cadena de bytes primero y luego la codificarías — una herramienta dedicada de imagen a Base64 se encarga de esa conversión." },
    { q: "¿Por qué se usa Base64 en los tokens JWT?", a: "Los JWT usan Base64 (específicamente Base64URL) para representar de forma segura los datos binarios del encabezado y payload JSON como texto compacto y compatible con URLs, no para asegurar o encriptar el contenido." },
  ],

  relatedCalculators: ["Formateador JSON", "Generador de Hash", "Decodificador JWT", "Codificador de URL"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Codificador y Decodificador Base64",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};