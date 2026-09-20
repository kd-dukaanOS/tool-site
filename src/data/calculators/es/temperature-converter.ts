// src/data/calculators/es/temperature-converter.ts
import { pickYouMayLike } from "../../calculator-pool";

export const temperatureConverterContent = {
  meta: {
    seoTitle: "Convertidor de Temperatura: Celsius, Fahrenheit y Kelvin",
    metaDescription: "Convierte temperaturas entre Celsius, Fahrenheit y Kelvin al instante. Gratis, sin límites, sin registro.",
    canonicalSlug: "/es/converters/temperature-converter",
    ogTitle: "Convertidor de Temperatura",
    ogDescription: "Convierte entre Celsius, Fahrenheit y Kelvin al instante.",
    twitterTitle: "Convertidor de Temperatura Gratis",
    twitterDescription: "Convierte temperaturas al instante.",
  },
  hero: {
    text: "El Convertidor de Temperatura transforma cualquier valor entre Celsius, Fahrenheit y Kelvin al instante.",
  },
  about: {
    text: `Celsius, Fahrenheit y Kelvin son las tres escalas de temperatura más usadas en el mundo: Celsius es el estándar en la mayoría de los países, Fahrenheit se usa principalmente en Estados Unidos, y Kelvin es la escala científica usada en física y química.

Esta herramienta convierte cualquier valor entre estas tres escalas usando las fórmulas de conversión estándar, ideal para viajes internacionales, cocina, ciencia o cualquier situación donde necesites cambiar de escala rápidamente.

Limitaciones: Kelvin no admite valores negativos, ya que 0K representa el cero absoluto, la temperatura más baja teóricamente posible.`,
  },
  formula: {
    formula: "°F = (°C × 9/5) + 32",
    variables: [
      { symbol: "Celsius a Kelvin", meaning: "K = °C + 273.15" },
      { symbol: "Fahrenheit a Celsius", meaning: "°C = (°F − 32) × 5/9" },
    ],
    explanation: "Cada escala tiene un punto de referencia distinto para el cero: Celsius usa el punto de congelación del agua (0°C), Fahrenheit usa una escala histórica distinta, y Kelvin usa el cero absoluto — las fórmulas de conversión ajustan entre estos puntos de referencia.",
    interpretation: "Por ejemplo, 0°C (punto de congelación del agua) equivale a 32°F y 273.15K; 100°C (punto de ebullición del agua) equivale a 212°F y 373.15K.",
  },
  steps: [
    "Ingresa el valor de temperatura que deseas convertir.",
    "Selecciona la escala de origen: Celsius, Fahrenheit o Kelvin.",
    "Selecciona la escala de destino.",
    "Haz clic en Calcular para ver el valor convertido.",
  ],
  examples: [
    { inputs: "0°C a Fahrenheit", result: "32°F", explanation: "El punto de congelación del agua en Celsius equivale a 32°F." },
    { inputs: "100°C a Kelvin", result: "373.15K", explanation: "El punto de ebullición del agua en Celsius convertido a la escala Kelvin." },
    { inputs: "98.6°F a Celsius", result: "37°C", explanation: "La temperatura corporal humana normal en Fahrenheit convertida a Celsius." },
  ],
  practicalUses: [
    "Convertir el pronóstico del clima al viajar entre países que usan escalas distintas",
    "Convertir temperaturas de recetas de cocina internacionales",
    "Realizar cálculos científicos que requieren la escala Kelvin",
    "Verificar la temperatura corporal reportada en una escala distinta a la que usas normalmente",
    "Ayudar con tareas escolares de física o química que involucran conversión de temperatura",
  ],
  expertTips: [
    "Estados Unidos es uno de los pocos países que usa Fahrenheit como escala principal; la mayoría del mundo usa Celsius.",
    "La escala Kelvin no usa el símbolo de grado (°) y siempre comienza en 0 (cero absoluto), sin valores negativos posibles.",
    "Para conversiones rápidas mentales de Celsius a Fahrenheit, una aproximación común es duplicar el valor en Celsius y sumar 30.",
    "En ciencia, Kelvin es la unidad estándar del Sistema Internacional para temperatura termodinámica.",
  ],
  commonMistakes: [
    { mistake: "Confundir la fórmula de conversión entre Celsius y Fahrenheit", fix: "Recuerda que la fórmula correcta es °F = (°C × 9/5) + 32, no simplemente multiplicar o sumar un número fijo." },
    { mistake: "Ingresar valores negativos en Kelvin", fix: "Kelvin no admite valores negativos, ya que 0K es el cero absoluto, la temperatura más baja físicamente posible." },
    { mistake: "Asumir que 0° significa lo mismo en las tres escalas", fix: "0°C es el punto de congelación del agua, 0°F es un punto de referencia histórico distinto, y 0K es el cero absoluto — todos representan temperaturas muy diferentes." },
  ],
  faq: [
    { q: "¿Cómo convierto Celsius a Fahrenheit?", a: "Multiplica el valor en Celsius por 9/5 y suma 32; por ejemplo, 20°C equivale a (20 × 9/5) + 32 = 68°F." },
    { q: "¿Cómo convierto Fahrenheit a Celsius?", a: "Resta 32 al valor en Fahrenheit y multiplica el resultado por 5/9; por ejemplo, 68°F equivale a (68-32) × 5/9 = 20°C." },
    { q: "¿Cómo convierto Celsius a Kelvin?", a: "Suma 273.15 al valor en Celsius; por ejemplo, 25°C equivale a 298.15K." },
    { q: "¿Por qué Kelvin no tiene valores negativos?", a: "Porque 0K representa el cero absoluto, la temperatura teóricamente más baja posible, donde toda actividad molecular térmica cesa." },
    { q: "¿Qué país usa Fahrenheit como escala principal?", a: "Estados Unidos es uno de los pocos países que usa Fahrenheit como escala principal para el clima y uso cotidiano; la mayoría del mundo usa Celsius." },
    { q: "¿Cuál es la temperatura corporal normal en Celsius y Fahrenheit?", a: "La temperatura corporal normal es aproximadamente 37°C, equivalente a 98.6°F." },
    { q: "¿A qué temperatura hierve el agua en cada escala?", a: "El agua hierve a 100°C, 212°F y 373.15K a nivel del mar." },
    { q: "¿A qué temperatura se congela el agua en cada escala?", a: "El agua se congela a 0°C, 32°F y 273.15K." },
    { q: "¿Por qué se usa Kelvin en ciencia en lugar de Celsius?", a: "Kelvin es la unidad del Sistema Internacional para temperatura termodinámica y no tiene valores negativos, lo que simplifica cálculos científicos y físicos." },
    { q: "¿Existe una forma rápida de convertir Celsius a Fahrenheit mentalmente?", a: "Una aproximación común es duplicar el valor en Celsius y sumar 30, aunque no es exacta, es útil para estimaciones rápidas." },
    { q: "¿Esta calculadora funciona con decimales?", a: "Sí, puedes ingresar valores decimales para obtener conversiones más precisas entre las tres escalas de temperatura." },
  ],
  relatedCalculators: ["Convertidor de Unidades de Longitud", "Convertidor de Peso", "Convertidor de Presión", "Convertidor de Velocidad"],
  youMayLike: pickYouMayLike("temperature-converter"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Convertidor de Temperatura",
    h2: ["Acerca de", "Fórmula", "Cómo Usarlo", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Herramientas Relacionadas"],
  },
};