// src/data/calculators/es/number-base-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const numberBaseConverterContent = {
  meta: {
    seoTitle: "Convertidor de Bases Numéricas (Binario, Octal, Decimal, Hex)",
    metaDescription: "Convierte números entre binario, octal, decimal y hexadecimal al instante. Gratis, sin límites, para programadores y estudiantes.",
    canonicalSlug: "/es/developer-tools/number-base-converter",
    ogTitle: "Convertidor de Bases Numéricas",
    ogDescription: "Convierte entre binario, octal, decimal y hexadecimal al instante.",
    twitterTitle: "Convertidor de Bases Numéricas",
    twitterDescription: "Convierte números entre bases al instante.",
  },
  hero: {
    text: "El Convertidor de Bases Numéricas transforma cualquier número entre binario, octal, decimal y hexadecimal al instante, mostrando las cuatro representaciones simultáneamente.",
  },
  about: {
    text: `Los sistemas numéricos binario, octal, decimal y hexadecimal representan el mismo valor usando distintas bases: 2, 8, 10 y 16 respectivamente, y son fundamentales en programación, electrónica digital y ciencias de la computación.

Esta herramienta toma un número en cualquiera de estas cuatro bases y calcula automáticamente su equivalente en las otras tres, útil para depurar código, entender direcciones de memoria, o resolver ejercicios académicos.

Limitaciones: solo admite números enteros positivos; no convierte números decimales con punto flotante ni números negativos.`,
  },
  formula: {
    formula: "Valor Decimal = Σ (dígito × base^posición)",
    variables: [
      { symbol: "Binario (Base 2)", meaning: "Usa solo los dígitos 0 y 1, fundamental en la representación interna de las computadoras" },
      { symbol: "Hexadecimal (Base 16)", meaning: "Usa los dígitos 0-9 y las letras A-F, común para representar colores y direcciones de memoria" },
    ],
    explanation: "Cada dígito del número en su base original se multiplica por esa base elevada a la posición del dígito (de derecha a izquierda, empezando en 0), y se suman los resultados para obtener el valor decimal equivalente, que luego se convierte a las demás bases.",
    interpretation: "Por ejemplo, el número decimal 255 equivale a 11111111 en binario, 377 en octal, y FF en hexadecimal.",
  },
  steps: [
    "Ingresa el número que deseas convertir.",
    "Selecciona la base de origen del número (binario, octal, decimal o hexadecimal).",
    "Haz clic en Calcular.",
    "Revisa el número convertido en las cuatro bases simultáneamente.",
  ],
  examples: [
    { inputs: "Número: 255, Base: Decimal", result: "Binario: 11111111 | Hex: FF", explanation: "Un valor decimal común usado en representación de colores (255 es el máximo de un canal RGB)." },
    { inputs: "Número: 1010, Base: Binario", result: "Decimal: 10 | Hex: A", explanation: "Un número binario simple convertido a sus equivalentes decimal y hexadecimal." },
    { inputs: "Número: 1F, Base: Hexadecimal", result: "Decimal: 31 | Binario: 11111", explanation: "Un valor hexadecimal común en programación convertido a decimal y binario." },
  ],
  practicalUses: [
    "Depurar código que usa direcciones de memoria o valores en hexadecimal",
    "Convertir códigos de color hexadecimal a sus componentes RGB en decimal",
    "Resolver ejercicios académicos de sistemas numéricos y arquitectura de computadoras",
    "Entender permisos de archivos en sistemas Unix/Linux representados en octal",
    "Verificar cálculos manuales de conversión de bases al estudiar programación",
  ],
  expertTips: [
    "El hexadecimal es ampliamente usado en programación porque cada dígito hex representa exactamente 4 bits, facilitando la conversión con binario.",
    "Los permisos de archivos en sistemas Unix/Linux (como chmod 755) usan notación octal, útil conocer para administración de sistemas.",
    "En JavaScript y otros lenguajes, los literales hexadecimales se escriben con el prefijo 0x (por ejemplo, 0xFF).",
    "Practica conversiones manuales ocasionalmente junto con esta herramienta para reforzar tu comprensión de sistemas numéricos en programación.",
  ],
  commonMistakes: [
    { mistake: "Confundir la base de origen al ingresar el número", fix: "Verifica que hayas seleccionado la base correcta correspondiente al número que estás ingresando." },
    { mistake: "Usar dígitos inválidos para la base seleccionada", fix: "Por ejemplo, el binario solo permite 0 y 1; el octal solo permite 0-7 — dígitos fuera de ese rango generarán un error." },
    { mistake: "Intentar convertir números negativos o decimales con punto", fix: "Esta herramienta solo admite números enteros positivos; los negativos y decimales requieren un manejo especial no cubierto aquí." },
  ],
  faq: [
    { q: "¿Cómo convierto un número decimal a binario?", a: "Ingresa el número, selecciona Decimal como base de origen y haz clic en Calcular; el resultado en binario aparecerá junto con octal y hexadecimal." },
    { q: "¿Qué es el sistema hexadecimal y para qué se usa?", a: "Es un sistema numérico en base 16 que usa dígitos 0-9 y letras A-F; se usa comúnmente en programación para representar colores, direcciones de memoria y valores compactos." },
    { q: "¿Cómo convierto hexadecimal a decimal?", a: "Ingresa el valor hexadecimal, selecciona Hexadecimal como base de origen, y obtendrás automáticamente el equivalente decimal, binario y octal." },
    { q: "¿Qué es el sistema octal y dónde se usa?", a: "Es un sistema numérico en base 8, históricamente usado en computación y actualmente común en permisos de archivos de sistemas Unix/Linux." },
    { q: "¿Por qué las computadoras usan el sistema binario?", a: "Porque los circuitos digitales representan naturalmente dos estados (encendido/apagado), que corresponden directamente a los dígitos 0 y 1 del sistema binario." },
    { q: "¿Cómo convierto un color hexadecimal a RGB decimal?", a: "Ingresa el valor hexadecimal del color (sin el símbolo #) y selecciona Hexadecimal como base; el resultado decimal corresponde a los valores RGB." },
    { q: "¿Esta herramienta admite números negativos?", a: "No, esta calculadora solo admite números enteros positivos en las cuatro bases soportadas." },
    { q: "¿Qué dígitos son válidos en el sistema binario?", a: "Solo los dígitos 0 y 1 son válidos en el sistema binario (base 2)." },
    { q: "¿Qué dígitos son válidos en el sistema octal?", a: "Los dígitos válidos en el sistema octal (base 8) van del 0 al 7." },
    { q: "¿Cómo se relacionan el binario y el hexadecimal?", a: "Cada dígito hexadecimal representa exactamente 4 dígitos binarios, lo que hace que la conversión entre ambos sea especialmente directa y común en programación." },
    { q: "¿Esta herramienta funciona con números muy grandes?", a: "Sí, puede procesar números grandes, aunque la precisión depende de los límites numéricos estándar de JavaScript en el navegador." },
    { q: "¿Puedo usar esta calculadora para tareas escolares de sistemas numéricos?", a: "Sí, es una herramienta útil para verificar conversiones manuales al estudiar sistemas numéricos en cursos de programación o ciencias de la computación." },
  ],
  relatedCalculators: ["Calculadora de MCD", "Convertidor de Base64", "Formateador JSON", "Convertidor de Colores"],
  youMayLike: pickYouMayLike("number-base-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Bases Numéricas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};