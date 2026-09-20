// src/data/calculators/es/energy-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const energyCalculatorContent = {
  meta: {
    seoTitle: "Convertidor de Energía — Julios, Calorías, kWh y BTU",
    metaDescription: "Convierte unidades de energía entre julios, kilojulios, calorías, kilocalorías, vatios-hora, kilovatios-hora y BTU al instante, gratis.",
    canonicalSlug: "/es/conversion/energy-calculator",
    ogTitle: "Convertidor de Unidades de Energía",
    ogDescription: "Convierte entre julios, calorías, kWh y BTU en segundos.",
    twitterTitle: "Convertidor de Energía Gratis",
    twitterDescription: "Convierte unidades de energía al instante, gratis.",
  },

  hero: {
    text: "El Convertidor de Energía transforma valores entre julios, kilojulios, calorías, kilocalorías, vatios-hora, kilovatios-hora y BTU al instante — útil para física, nutrición, electricidad y estudios de ingeniería.",
  },

  about: {
    text: `La energía se mide en distintas unidades según el contexto: julios y kilojulios son estándares en física, calorías y kilocalorías se usan en nutrición, vatios-hora y kilovatios-hora son comunes en electricidad y facturas de luz, y BTU se usa frecuentemente en climatización y calefacción en países que usan el sistema imperial.

Esta herramienta convierte automáticamente entre todas estas unidades usando el julio como unidad base, para que puedas pasar de una medida a otra sin hacer cálculos manuales ni buscar factores de conversión.

Es útil para estudiantes de física o química, para interpretar el contenido calórico de alimentos, para entender tu consumo eléctrico en kWh, o para comparar especificaciones de equipos de climatización medidas en BTU.`,
  },

  formula: {
    formula: "Valor Convertido = (Valor × Factor de la Unidad de Origen) ÷ Factor de la Unidad de Destino",
    variables: [
      { symbol: "Unidad Base", meaning: "El julio (J), la unidad estándar del Sistema Internacional para energía" },
      { symbol: "Factor de Conversión", meaning: "Cuántos julios equivale cada unidad (ej. 1 kcal ≈ 4,184 J)" },
    ],
    explanation: "El valor de origen se convierte primero a julios usando su factor de conversión, y luego ese valor en julios se convierte a la unidad de destino dividiendo entre el factor correspondiente.",
    interpretation: "Por ejemplo, 500 kilocalorías equivalen a aproximadamente 2,092 kilojulios, o a 0.581 kilovatios-hora — útil para comparar el contenido energético de alimentos con el consumo eléctrico.",
  },

  steps: [
    "Ingresa el valor que deseas convertir.",
    "Selecciona la unidad de origen (por ejemplo, kcal).",
    "Selecciona la unidad de destino (por ejemplo, kJ).",
    "Haz clic en Calcular.",
    "Revisa el valor convertido al instante.",
  ],

  examples: [
    { inputs: "500 Kilocalorías → Kilojulios", result: "≈ 2,092 kJ", explanation: "Conversión común al leer etiquetas nutricionales en distintos países." },
    { inputs: "1 Kilovatio-hora → BTU", result: "≈ 3,412 BTU", explanation: "Útil para comparar especificaciones de electrodomésticos o aires acondicionados." },
    { inputs: "1,000 Julios → Calorías", result: "≈ 239 cal", explanation: "Conversión básica entre la unidad del SI y la unidad tradicional de energía térmica." },
  ],

  practicalUses: [
    "Convertir el contenido calórico de alimentos entre calorías y kilojulios",
    "Entender tu consumo eléctrico en kWh y compararlo con otras unidades",
    "Comparar especificaciones de aires acondicionados o calefactores medidas en BTU",
    "Resolver ejercicios de física o química que requieren conversión de energía",
    "Comparar el rendimiento energético de distintos equipos o procesos",
  ],

  expertTips: [
    "En etiquetas nutricionales, muchos países usan kilocalorías (kcal) mientras que otros usan kilojulios (kJ) — esta herramienta facilita comparar ambos.",
    "1 caloría alimentaria (Cal, con mayúscula) en realidad equivale a 1 kilocaloría (1,000 calorías científicas) — ten cuidado con esta distinción común en nutrición.",
    "Los BTU son comunes en especificaciones de aires acondicionados en países que usan el sistema imperial; conviértelos a kWh para comparar eficiencia energética.",
    "Tu factura eléctrica normalmente se mide en kilovatios-hora (kWh), la unidad estándar para consumo de electricidad residencial.",
  ],

  commonMistakes: [
    { mistake: "Confundir caloría alimentaria con caloría científica", fix: "La 'Caloría' en etiquetas de alimentos (con mayúscula) es en realidad una kilocaloría (1,000 calorías científicas)." },
    { mistake: "Mezclar unidades de energía con unidades de potencia", fix: "El vatio (W) mide potencia, no energía; el vatio-hora (Wh) o kilovatio-hora (kWh) sí miden energía acumulada en el tiempo." },
    { mistake: "No verificar si un dato viene en BTU/h en lugar de BTU", fix: "Algunas especificaciones usan BTU por hora (una medida de potencia), que es diferente de una cantidad fija de energía en BTU." },
  ],

  faq: [
    { q: "¿Cómo convierto calorías a kilojulios?", a: "Multiplica las calorías por 4.184 para obtener julios, o usa directamente esta calculadora seleccionando calorías como unidad de origen y kilojulios como destino." },
    { q: "¿Cuántos julios tiene una kilocaloría?", a: "Una kilocaloría equivale a aproximadamente 4,184 julios (4.184 kilojulios)." },
    { q: "¿Cuál es la diferencia entre caloría y Caloría (con mayúscula)?", a: "En nutrición, una 'Caloría' con mayúscula (como aparece en etiquetas de alimentos) es en realidad igual a 1,000 calorías científicas, es decir, una kilocaloría." },
    { q: "¿Cómo convierto kilovatios-hora a BTU?", a: "Multiplica los kilovatios-hora por aproximadamente 3,412 para obtener BTU, o usa esta calculadora seleccionando kWh como origen y BTU como destino." },
    { q: "¿Qué es un BTU?", a: "BTU (British Thermal Unit) es una unidad de energía térmica usada comúnmente en climatización y calefacción, especialmente en países con sistema imperial." },
    { q: "¿Cuántos kWh tiene un julio?", a: "Un kilovatio-hora equivale a 3,600,000 julios (3.6 megajulios), ya que un kWh es la energía consumida por una potencia de 1,000 vatios durante una hora." },
    { q: "¿Cómo sé cuánta energía consume un electrodoméstico?", a: "Revisa su consumo en vatios y el tiempo de uso; multiplicando ambos y convirtiendo a kWh puedes comparar el consumo eléctrico con tu factura de luz." },
    { q: "¿Las calorías de los alimentos y la energía eléctrica se miden igual?", a: "Ambas son formas de energía y pueden convertirse entre sí matemáticamente (calorías a julios o kWh), aunque en la práctica se usan en contextos completamente distintos." },
    { q: "¿Cómo convierto BTU a kilovatios-hora?", a: "Divide los BTU entre aproximadamente 3,412 para obtener el equivalente en kilovatios-hora." },
    { q: "¿Qué unidad de energía se usa en la factura eléctrica?", a: "La mayoría de las compañías eléctricas facturan en kilovatios-hora (kWh), que mide la energía consumida a lo largo del tiempo." },
    { q: "¿Cuántas calorías tiene un vatio-hora?", a: "Un vatio-hora equivale a aproximadamente 860 calorías (0.86 kilocalorías)." },
    { q: "¿Para qué sirve convertir unidades de energía?", a: "Es útil en física, nutrición, ingeniería eléctrica y climatización, donde distintas industrias y países usan unidades de energía diferentes." },
    { q: "¿Cuál es la unidad de energía del Sistema Internacional?", a: "El julio (J) es la unidad estándar de energía en el Sistema Internacional de Unidades, base de todas las demás conversiones en esta calculadora." },
    { q: "¿Cómo convierto julios a calorías?", a: "Divide los julios entre aproximadamente 4.184 para obtener el equivalente en calorías." },
  ],

  relatedCalculators: ["Calculadora de Calorías", "Convertidor de Peso", "Convertidor de Volumen", "Calculadora de Consumo Eléctrico"],

  youMayLike: pickYouMayLike("energy-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Convertidor de Energía",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};