// src/data/calculators/es/retirement-income-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const retirementIncomeCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Ingreso de Jubilación — Sostenibilidad del Portafolio",
    metaDescription: "Estima tu ingreso mensual y anual sostenible en la jubilación combinando tus ahorros, Seguro Social, pensión y otros ingresos. Calculadora gratis.",
    canonicalSlug: "/es/finance/retirement-income-calculator",
    ogTitle: "Calculadora de Ingreso de Jubilación",
    ogDescription: "Descubre tu ingreso mensual sostenible en la jubilación y cuánto durará tu portafolio.",
    twitterTitle: "Calculadora de Ingreso de Jubilación Gratis",
    twitterDescription: "Estima tu ingreso sostenible de jubilación, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Ingreso de Jubilación estima tu ingreso mensual y anual sostenible combinando una tasa de retiro segura de tus ahorros con Seguro Social, pensión y otros ingresos, y simula cuánto tiempo durará tu portafolio.",
  },

  about: {
    text: `Una vez que llegas a la jubilación, la pregunta cambia de "cuánto ahorrar" a "cuánto puedo retirar de forma segura sin quedarme sin dinero". Esta calculadora combina múltiples fuentes de ingreso para darte una imagen completa de tu situación financiera en el retiro.

Ingresa tus ahorros actuales, la tasa de retiro que planeas usar (comúnmente 4%), tu año de nacimiento, y cualquier ingreso adicional como Seguro Social, pensión u otras fuentes. La calculadora combina todo esto para estimar tu ingreso mensual y anual total disponible, y simula si tu portafolio de ahorros durará todo tu horizonte de jubilación elegido.

También estima la edad a la que comenzarán tus Distribuciones Mínimas Requeridas (RMD), un requisito legal en Estados Unidos que obliga a retirar cierto monto anual de cuentas de jubilación tradicionales a partir de cierta edad.`,
  },

  formula: {
    formula: "Ingreso Anual Total = (Ahorros × Tasa de Retiro) + Seguro Social + Pensión + Otros Ingresos",
    variables: [
      { symbol: "Tasa de Retiro", meaning: "Porcentaje de tus ahorros que retiras cada año (comúnmente 4%)" },
      { symbol: "Panorama del Portafolio", meaning: "Simulación de si tus ahorros duran todo el horizonte de jubilación, ajustado por inflación y retorno esperado" },
    ],
    explanation: "Se calcula el retiro anual de tus ahorros según la tasa elegida, se suma a tus otras fuentes de ingreso fijo, y se simula año a año el saldo restante del portafolio considerando el retorno de inversión, la inflación y los retiros continuos.",
    interpretation: "Por ejemplo, con $1,000,000 en ahorros, una tasa de retiro del 4%, $24,000 de Seguro Social anual, y un horizonte de 30 años, tu ingreso anual total sería de aproximadamente $64,000, con el portafolio proyectado a durar todo el período si los supuestos de retorno se mantienen.",
  },

  steps: [
    "Ingresa tus ahorros actuales de jubilación y tu tasa de retiro deseada.",
    "Ingresa tu año de nacimiento.",
    "Ingresa tu Seguro Social anual esperado, pensión y otros ingresos.",
    "Ingresa tu retorno esperado, tasa de inflación y horizonte de jubilación en años.",
    "Haz clic en Calcular.",
    "Revisa tu ingreso mensual y anual estimado, el inicio de tus RMD, y el panorama de tu portafolio.",
  ],

  examples: [
    { inputs: "Ahorros: $1,000,000, Tasa: 4%, Seguro Social: $24,000/año, Horizonte: 30 años", result: "Ingreso Mensual: ~$5,333, Portafolio: Dura todo el horizonte", explanation: "Un portafolio bien financiado con una tasa de retiro conservadora estándar." },
    { inputs: "Ahorros: $500,000, Tasa: 5%, Seguro Social: $18,000/año, Horizonte: 30 años", result: "Ingreso Mensual: ~$3,583, Portafolio: Podría agotarse antes de tiempo", explanation: "Una tasa de retiro más alta aumenta el riesgo de agotar el portafolio en un horizonte largo." },
    { inputs: "Ahorros: $1,500,000, Tasa: 3.5%, Seguro Social: $30,000/año, Horizonte: 35 años", result: "Ingreso Mensual: ~$6,875, Portafolio: Dura todo el horizonte", explanation: "Una tasa conservadora combinada con un portafolio grande resulta en mayor seguridad a largo plazo." },
  ],

  practicalUses: [
    "Estimar tu ingreso mensual real disponible durante la jubilación",
    "Verificar si tu tasa de retiro elegida es sostenible para tu horizonte de tiempo",
    "Ver el impacto de combinar Seguro Social, pensión y otros ingresos con tus ahorros",
    "Planear cuándo comenzarán tus Distribuciones Mínimas Requeridas (RMD)",
    "Comparar distintas tasas de retiro para encontrar un equilibrio entre ingreso y sostenibilidad",
  ],

  expertTips: [
    "Una tasa de retiro más baja (3-3.5%) ofrece mayor seguridad para horizontes de jubilación muy largos, especialmente si te jubilas antes de la edad tradicional.",
    "Retrasar el inicio del Seguro Social aumenta el beneficio mensual, lo que puede reducir la presión sobre tus ahorros personales.",
    "Las Distribuciones Mínimas Requeridas (RMD) son obligatorias a partir de cierta edad en cuentas de jubilación tradicionales en EE.UU. — planea con anticipación para evitar sorpresas.",
    "Diversificar tus fuentes de ingreso (ahorros, pensión, Seguro Social) reduce tu dependencia de una sola fuente y aumenta la resiliencia de tu plan.",
    "Revisa y ajusta tu tasa de retiro periódicamente según el desempeño real de tu portafolio, en lugar de mantenerla fija indefinidamente.",
  ],

  commonMistakes: [
    { mistake: "Usar una tasa de retiro demasiado alta sin considerar el horizonte de tiempo", fix: "Para horizontes de jubilación muy largos (30+ años), considera una tasa más conservadora que el estándar 4%." },
    { mistake: "Olvidar incluir todas las fuentes de ingreso disponibles", fix: "Incluye Seguro Social, pensiones y cualquier otro ingreso fijo para obtener una imagen completa de tu situación real." },
    { mistake: "No planear para las Distribuciones Mínimas Requeridas (RMD)", fix: "Estas distribuciones obligatorias pueden afectar tu estrategia fiscal y de retiro — planifícalas con anticipación." },
    { mistake: "Ignorar el impacto de la inflación en el poder adquisitivo futuro", fix: "Un ingreso que parece suficiente hoy puede no serlo en 20-30 años sin ajustar por inflación en tu planificación." },
  ],

  faq: [
    { q: "¿Cuánto ingreso mensual puedo esperar en mi jubilación?", a: "Depende de tus ahorros totales, la tasa de retiro que uses, y otras fuentes de ingreso como Seguro Social o pensión — esta calculadora combina todo para darte una estimación personalizada." },
    { q: "¿Qué es una tasa de retiro segura en la jubilación?", a: "La regla del 4% es la guía más conocida, basada en estudios históricos que sugieren que retirar 4% anual de tu portafolio tiene baja probabilidad de agotar tus fondos en 30 años." },
    { q: "¿Qué son las Distribuciones Mínimas Requeridas (RMD)?", a: "Son retiros anuales obligatorios de cuentas de jubilación tradicionales (como 401(k) o IRA tradicional) que comienzan a cierta edad según la ley estadounidense actual." },
    { q: "¿Debería usar una tasa de retiro más baja que 4%?", a: "Si te jubilas antes de la edad tradicional o esperas un horizonte de jubilación muy largo (30+ años), una tasa más conservadora (3-3.5%) ofrece mayor margen de seguridad." },
    { q: "¿Cómo afecta el Seguro Social a mi ingreso total de jubilación?", a: "Se suma directamente a los retiros de tus ahorros personales, reduciendo la presión sobre tu portafolio de inversión y aumentando tu ingreso total disponible." },
    { q: "¿Qué pasa si mi portafolio se agota antes de mi horizonte de jubilación?", a: "Esta calculadora simula ese escenario y te muestra en qué año podría agotarse tu portafolio según tus supuestos actuales, permitiéndote ajustar tu plan a tiempo." },
    { q: "¿Cómo afecta la inflación a mi ingreso de jubilación real?", a: "La inflación reduce el poder adquisitivo de un ingreso fijo con el tiempo; esta calculadora considera la inflación al simular la sostenibilidad de tu portafolio." },
    { q: "¿A qué edad empiezan las Distribuciones Mínimas Requeridas?", a: "La edad depende de la legislación vigente y tu año de nacimiento; consulta las reglas actuales del IRS o un asesor fiscal para tu situación específica." },
    { q: "¿Puedo retirar más del 4% si tengo otras fuentes de ingreso?", a: "Sí, si tienes pensión o Seguro Social robustos, podrías depender menos de tus ahorros personales, permitiendo potencialmente una tasa de retiro ligeramente diferente según tu situación." },
    { q: "¿Qué retorno de inversión debo usar durante la jubilación?", a: "Muchos jubilados usan un retorno más conservador que durante la etapa de acumulación, ya que suelen ajustar su cartera hacia inversiones de menor riesgo al jubilarse." },
  ],

  relatedCalculators: ["Calculadora de Jubilación", "Calculadora de 401(k)", "Calculadora FIRE", "Calculadora de Fondo de Emergencia"],

  youMayLike: pickYouMayLike("retirement-income-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Ingreso de Jubilación",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};