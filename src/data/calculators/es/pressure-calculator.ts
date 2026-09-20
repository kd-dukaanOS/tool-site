// src/data/calculators/es/pressure-calculator.ts
// NOTE: category assumed "converters" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const pressureCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Presión: Bar, PSI, Pascal, Atmósfera 2026",
    metaDescription: "Convierte entre Pascal, kilopascal, bar, atmósfera, PSI y mmHg al instante. Gratis y online.",
    canonicalSlug: "/es/converters/pressure-calculator",
    ogTitle: "Convertidor de Presión",
    ogDescription: "Convierte unidades de presión como bar, PSI y pascal en segundos.",
    twitterTitle: "Convertidor de PSI a Bar y más",
    twitterDescription: "Convierte cualquier unidad de presión al instante.",
  },
  hero: {
    text: "El Convertidor de Presión transforma valores entre Pascal, kilopascal, bar, atmósfera, PSI y mmHg al instante, sin necesidad de fórmulas ni tablas.",
  },
  about: {
    text: `La presión se mide en distintas unidades según el contexto: PSI es común en llantas de automóviles en países que usan el sistema imperial, bar es estándar en Europa, y Pascal es la unidad del Sistema Internacional usada en ciencia e ingeniería.

Esta calculadora convierte automáticamente entre las unidades de presión más usadas (Pascal, kilopascal, bar, atmósfera, PSI y mmHg), útil para mecánicos, técnicos, estudiantes de física y cualquiera que necesite interpretar especificaciones técnicas.

Limitaciones: los factores de conversión usados son los estándar científicos; para aplicaciones de ingeniería de alta precisión, verifica los valores exactos según la norma específica que estés siguiendo.`,
  },
  formula: {
    formula: "Valor Convertido = Valor de Entrada × (Factor de la Unidad Origen / Factor de la Unidad Destino)",
    variables: [
      { symbol: "Pascal (Pa)", meaning: "Unidad base de presión del Sistema Internacional" },
      { symbol: "Factor de Conversión", meaning: "Equivalencia de cada unidad en Pascal (ej. 1 bar = 100,000 Pa)" },
    ],
    explanation: "El valor se convierte primero a Pascal usando el factor de la unidad de origen, y luego de Pascal a la unidad de destino dividiendo entre su factor correspondiente.",
    interpretation: "Por ejemplo, 1 bar equivale aproximadamente a 14.5 PSI, y 1 atmósfera equivale a aproximadamente 101.325 kilopascal.",
  },
  steps: [
    "Ingresa el valor que quieres convertir.",
    "Selecciona la unidad de origen (por ejemplo, bar).",
    "Selecciona la unidad de destino (por ejemplo, PSI).",
    "Haz clic en Calcular para ver el resultado convertido.",
  ],
  examples: [
    { inputs: "Valor: 1, De: bar, A: psi", result: "14.5 PSI", explanation: "Conversión común al inflar llantas de automóvil entre especificaciones europeas y americanas." },
    { inputs: "Valor: 1, De: atm, A: kpa", result: "101.325 kPa", explanation: "Conversión estándar usada en física y química para presión atmosférica." },
    { inputs: "Valor: 760, De: mmhg, A: atm", result: "1 atm", explanation: "760 mmHg es la definición clásica de una atmósfera estándar." },
  ],
  practicalUses: [
    "Convertir la presión de llantas de automóvil entre PSI y bar",
    "Interpretar especificaciones técnicas de equipos industriales o de laboratorio",
    "Ayudar con tareas escolares de física sobre presión atmosférica",
    "Convertir lecturas de manómetros entre distintas unidades",
    "Verificar especificaciones de presión en manuales de equipos importados",
  ],
  expertTips: [
    "La mayoría de los vehículos en EE.UU. usan PSI para la presión de llantas, mientras que en Europa se usa bar; 1 bar equivale aproximadamente a 14.5 PSI.",
    "mmHg (milímetros de mercurio) se usa comúnmente en medicina para medir la presión arterial, aunque también aplica a presión atmosférica.",
    "1 atmósfera estándar (atm) se define exactamente como 101,325 Pascal, un valor de referencia usado ampliamente en ciencia.",
    "Para equipos de precisión industrial, siempre verifica si la especificación usa presión manométrica (relativa) o presión absoluta antes de convertir.",
  ],
  commonMistakes: [
    { mistake: "Confundir presión manométrica con presión absoluta", fix: "La presión manométrica se mide relativa a la atmósfera; la presión absoluta incluye la presión atmosférica. Verifica cuál usa tu equipo antes de convertir." },
    { mistake: "Redondear demasiado en conversiones de precisión industrial", fix: "Para aplicaciones técnicas, usa el valor exacto en lugar de redondear a números enteros." },
    { mistake: "Asumir que 1 bar es igual a 1 atmósfera", fix: "Son valores cercanos pero distintos: 1 atm equivale a 1.01325 bar, una pequeña diferencia que puede importar en cálculos precisos." },
    { mistake: "No verificar la unidad esperada al leer un manómetro importado", fix: "Equipos fabricados en distintos países pueden usar diferentes unidades de presión; confirma la unidad antes de interpretar la lectura." },
  ],
  faq: [
    { q: "¿Cómo convertir PSI a bar?", a: "Divide el valor en PSI entre 14.5038 para obtener el equivalente en bar." },
    { q: "¿Cuántos PSI tiene 1 bar?", a: "1 bar equivale aproximadamente a 14.5 PSI." },
    { q: "¿Qué es una atmósfera estándar (atm) en Pascal?", a: "1 atmósfera estándar equivale exactamente a 101,325 Pascal (101.325 kilopascal)." },
    { q: "¿Cuál es la diferencia entre presión manométrica y presión absoluta?", a: "La presión manométrica se mide relativa a la presión atmosférica (puede ser cero en condiciones normales), mientras que la presión absoluta incluye la presión atmosférica en su valor total." },
    { q: "¿Por qué se usa mmHg para medir la presión arterial?", a: "Es una convención médica histórica basada en el desplazamiento de mercurio en un manómetro; sigue siendo el estándar para reportar presión arterial en la mayoría de países." },
    { q: "¿Qué unidad de presión usan las llantas de auto en Europa vs Estados Unidos?", a: "En Europa se usa comúnmente bar, mientras que en Estados Unidos se usa PSI (libras por pulgada cuadrada) para especificar la presión de llantas." },
    { q: "¿Cómo convertir kilopascal a PSI?", a: "Multiplica el valor en kilopascal por 0.145038 para obtener el equivalente en PSI." },
    { q: "¿Cuál es la presión atmosférica estándar en PSI?", a: "La presión atmosférica estándar es de aproximadamente 14.7 PSI al nivel del mar." },
    { q: "¿Qué es el Pascal como unidad de presión?", a: "El Pascal (Pa) es la unidad de presión del Sistema Internacional de Unidades, definida como un Newton por metro cuadrado." },
    { q: "¿Cómo convertir mmHg a atmósferas?", a: "Divide el valor en mmHg entre 760 para obtener el equivalente en atmósferas, ya que 760 mmHg equivale exactamente a 1 atm." },
    { q: "¿Qué presión de llantas es correcta, en PSI o en bar?", a: "Depende del manual de tu vehículo; ambas unidades son válidas, solo asegúrate de usar la conversión correcta si tu manómetro muestra una unidad distinta a la especificada." },
    { q: "¿Cuántos Pascal tiene 1 bar?", a: "1 bar equivale exactamente a 100,000 Pascal (100 kilopascal)." },
    { q: "¿Esta calculadora sirve para presión de gases en laboratorio?", a: "Sí, es útil para convertir entre las unidades comunes en química y física, aunque para trabajos de precisión científica siempre verifica los factores de conversión exactos requeridos." },
    { q: "¿Cuál es la unidad de presión más usada en ingeniería industrial?", a: "Depende de la región y la industria; kilopascal y bar son comunes en Europa y aplicaciones internacionales, mientras que PSI predomina en Estados Unidos." },
  ],
  relatedCalculators: ["Convertidor de Temperatura", "Convertidor de Longitud", "Convertidor de Peso", "Convertidor de Velocidad"],
  youMayLike: pickYouMayLike("pressure-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Presión",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};