// src/data/calculators/es/speed-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const speedCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Velocidad — km/h, mph, m/s y Nudos",
    metaDescription: "Convierte unidades de velocidad entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo al instante, gratis.",
    canonicalSlug: "/es/converters/speed-calculator",
    ogTitle: "Convertidor de Unidades de Velocidad",
    ogDescription: "Convierte entre km/h, mph, m/s y nudos en segundos.",
    twitterTitle: "Convertidor de Velocidad Gratis",
    twitterDescription: "Convierte unidades de velocidad al instante, gratis.",
  },

  hero: {
    text: "El Convertidor de Velocidad transforma valores entre metros por segundo, kilómetros por hora, millas por hora, nudos y pies por segundo al instante — útil para viajes, náutica, aviación, deportes y física.",
  },

  about: {
    text: `La velocidad se mide en distintas unidades según el país y el contexto: km/h es el estándar en la mayoría de los países, mph se usa en Estados Unidos y el Reino Unido, nudos son estándar en navegación marítima y aviación, y m/s es la unidad base del Sistema Internacional usada en física.

Esta herramienta convierte automáticamente entre todas estas unidades, para que puedas pasar de una medida a otra sin hacer cálculos manuales — útil al viajar entre países con distintos sistemas de medición, al interpretar velocidades náuticas o de vuelo, o al resolver problemas de física.

Simplemente ingresa un valor, selecciona la unidad de origen y destino, y obtén la conversión al instante.`,
  },

  formula: {
    formula: "Valor Convertido = (Valor × Factor de la Unidad de Origen) ÷ Factor de la Unidad de Destino",
    variables: [
      { symbol: "Unidad Base", meaning: "El metro por segundo (m/s), unidad estándar del Sistema Internacional para velocidad" },
      { symbol: "Factor de Conversión", meaning: "Cuántos m/s equivale cada unidad (ej. 1 km/h ≈ 0.2778 m/s)" },
    ],
    explanation: "El valor de origen se convierte primero a metros por segundo usando su factor de conversión, y luego ese valor se convierte a la unidad de destino dividiendo entre el factor correspondiente.",
    interpretation: "Por ejemplo, 100 km/h equivalen a aproximadamente 62.14 mph, o a 53.99 nudos — útil para entender límites de velocidad al viajar o para navegación marítima.",
  },

  steps: [
    "Ingresa el valor que deseas convertir.",
    "Selecciona la unidad de origen (por ejemplo, km/h).",
    "Selecciona la unidad de destino (por ejemplo, mph).",
    "Haz clic en Calcular.",
    "Revisa el valor convertido al instante.",
  ],

  examples: [
    { inputs: "100 km/h → mph", result: "≈ 62.14 mph", explanation: "Conversión común al viajar entre países con distintos sistemas de límites de velocidad." },
    { inputs: "20 Nudos → km/h", result: "≈ 37.04 km/h", explanation: "Conversión típica en contexto náutico o de aviación a unidades terrestres comunes." },
    { inputs: "10 m/s → km/h", result: "= 36 km/h", explanation: "Conversión básica entre la unidad del SI y la unidad más usada cotidianamente." },
  ],

  practicalUses: [
    "Convertir límites de velocidad al viajar entre países con distintos sistemas de medición",
    "Interpretar velocidades náuticas (nudos) en unidades terrestres más familiares",
    "Convertir velocidades de viento o vuelo entre distintas unidades de aviación",
    "Resolver ejercicios de física o educación que requieren conversión de velocidad",
    "Comparar especificaciones de velocidad de vehículos entre distintos mercados",
  ],

  expertTips: [
    "Estados Unidos y el Reino Unido usan mph, mientras que la mayoría del resto del mundo usa km/h — ten esto en cuenta al alquilar un auto en el extranjero.",
    "Los nudos son el estándar internacional en navegación marítima y aviación, no equivalentes directos a millas por hora terrestres.",
    "1 nudo equivale aproximadamente a 1.852 km/h, ligeramente más rápido que 1 mph.",
    "Para deportes de velocidad (atletismo, ciclismo), m/s y km/h son las unidades más comúnmente usadas para comparar rendimiento.",
  ],

  commonMistakes: [
    { mistake: "Confundir nudos con millas por hora", fix: "Un nudo equivale a una milla náutica por hora, que es ligeramente más rápida que una milla terrestre por hora (mph) — no son la misma unidad." },
    { mistake: "No convertir límites de velocidad al conducir en el extranjero", fix: "Verifica siempre si los límites de velocidad están en km/h o mph según el país donde conduces, para evitar multas o accidentes." },
    { mistake: "Redondear excesivamente en conversiones que requieren precisión", fix: "Para contextos náuticos o de aviación, usa más decimales en las conversiones donde la precisión importa." },
  ],

  faq: [
    { q: "¿Cómo convierto km/h a mph?", a: "Multiplica los km/h por aproximadamente 0.6214 para obtener el equivalente en millas por hora, o usa directamente esta calculadora." },
    { q: "¿Cuántos km/h tiene un nudo?", a: "Un nudo equivale a aproximadamente 1.852 kilómetros por hora." },
    { q: "¿Qué es un nudo en velocidad?", a: "Es una unidad de velocidad equivalente a una milla náutica por hora, usada estándar en navegación marítima y aviación." },
    { q: "¿Cómo convierto m/s a km/h?", a: "Multiplica los metros por segundo por 3.6 para obtener el equivalente en kilómetros por hora." },
    { q: "¿Estados Unidos usa km/h o mph?", a: "Estados Unidos usa millas por hora (mph) como unidad estándar para límites de velocidad y velocímetros de vehículos." },
    { q: "¿Cuál es la diferencia entre un nudo y una milla por hora?", a: "Un nudo se basa en la milla náutica (1.852 km), que es ligeramente más larga que la milla terrestre (1.609 km) usada para mph, haciendo que un nudo sea un poco más rápido que una mph." },
    { q: "¿Cómo convierto mph a km/h?", a: "Multiplica las millas por hora por aproximadamente 1.609 para obtener el equivalente en kilómetros por hora." },
    { q: "¿Por qué la aviación y navegación usan nudos en vez de km/h o mph?", a: "Los nudos están directamente relacionados con las millas náuticas usadas en cartas de navegación y coordenadas geográficas, facilitando cálculos de distancia y tiempo en rutas marítimas y aéreas." },
  ],

  relatedCalculators: ["Convertidor de Peso", "Convertidor de Volumen", "Convertidor de Energía", "Calculadora de Tiempo y Distancia"],

  youMayLike: pickYouMayLike("speed-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Convertidor de Velocidad",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};