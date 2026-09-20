// src/data/calculators/es/commission-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const commissionCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Comisión de Ventas 2026",
    metaDescription: "Calcula tu comisión ganada, ganancias totales y tasa efectiva a partir de tus ventas y salario base. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/commission-calculator",
    ogTitle: "Calculadora de Comisión",
    ogDescription: "Calcula cuánto ganas en comisión sobre tus ventas, con o sin salario base.",
    twitterTitle: "Calculadora de Comisión de Ventas",
    twitterDescription: "Calcula tu comisión y ganancias totales al instante.",
  },
  hero: {
    text: "La Calculadora de Comisión calcula cuánto ganas por comisión sobre tus ventas, y tus ganancias totales si además recibes un salario base.",
  },
  about: {
    text: `La comisión es un pago basado en un porcentaje de las ventas realizadas, común en roles de ventas, bienes raíces y seguros.

Esta calculadora multiplica tu monto de ventas por la tasa de comisión para obtener la comisión ganada, y si ingresas un salario base opcional, lo suma para mostrar tus ganancias totales y tu tasa efectiva combinada.

Limitaciones: no incluye estructuras de comisión escalonada (tiered) ni deducciones fiscales sobre las ganancias.`,
  },
  formula: {
    formula: "Comisión Ganada = Monto de Ventas × Tasa de Comisión",
    variables: [
      { symbol: "Ganancias Totales", meaning: "Comisión ganada más el salario base, si se proporciona" },
      { symbol: "Tasa Efectiva", meaning: "Ganancias totales divididas entre el monto de ventas, expresado en porcentaje" },
    ],
    explanation: "La comisión se calcula multiplicando el monto de ventas por la tasa de comisión ingresada; si hay salario base, se suma para obtener el total y se recalcula la tasa efectiva sobre el total de ventas.",
    interpretation: "Por ejemplo, con ventas de $100,000 y una tasa del 5%, la comisión ganada es de $5,000; con un salario base de $15,000, las ganancias totales serían $20,000.",
  },
  steps: [
    "Ingresa tu monto de ventas.",
    "Ingresa tu tasa de comisión en porcentaje.",
    "Opcionalmente, ingresa tu salario base.",
    "Haz clic en Calcular para ver tu comisión ganada, ganancias totales y tasa efectiva.",
  ],
  examples: [
    { inputs: "Ventas: $100,000, Tasa: 5%, Sin salario base", result: "Comisión Ganada: $5,000", explanation: "Un vendedor que trabaja solo por comisión." },
    { inputs: "Ventas: $100,000, Tasa: 5%, Salario Base: $15,000", result: "Ganancias Totales: $20,000", explanation: "Un vendedor con salario base más comisión." },
    { inputs: "Ventas: $250,000, Tasa: 3%, Salario Base: $20,000", result: "Ganancias Totales: $27,500", explanation: "Comisión sobre un volumen de ventas mayor con tasa más baja." },
  ],
  practicalUses: [
    "Estimar tu ingreso mensual como vendedor antes de recibir el pago",
    "Comparar ofertas de trabajo con distintas estructuras de comisión",
    "Calcular cuánto necesitas vender para alcanzar una meta de ingreso",
    "Verificar que tu pago de comisión sea correcto",
  ],
  expertTips: [
    "Compara siempre la tasa de comisión junto con el salario base — una tasa más alta sin base puede o no compensar según tu volumen de ventas.",
    "Algunas empresas usan comisión escalonada (mayor tasa después de cierto monto); verifica si esta calculadora simple aplica a tu caso.",
    "Recuerda que la comisión generalmente está sujeta a impuestos igual que el salario regular.",
  ],
  commonMistakes: [
    { mistake: "Olvidar sumar el salario base a la comisión", fix: "Si tienes salario base, inclúyelo para ver tus ganancias totales reales, no solo la comisión." },
    { mistake: "Confundir la tasa de comisión con el porcentaje de ganancia neta", fix: "La tasa de comisión se aplica sobre el monto total de ventas, no sobre la utilidad del producto vendido." },
  ],
  faq: [
    { q: "¿Cómo se calcula la comisión de ventas?", a: "Se multiplica el monto total de ventas por la tasa de comisión acordada, expresada en porcentaje." },
    { q: "¿Qué es la tasa efectiva en esta calculadora?", a: "Es el porcentaje que representan tus ganancias totales (comisión más salario base) sobre el monto total de ventas." },
    { q: "¿La comisión se calcula antes o después de impuestos?", a: "Esta calculadora muestra la comisión bruta; los impuestos se descuentan por separado según tu situación fiscal." },
    { q: "¿Puedo calcular comisión sin salario base?", a: "Sí, deja el campo de salario base vacío y la calculadora mostrará solo la comisión ganada sobre las ventas." },
    { q: "¿Qué es una estructura de comisión escalonada?", a: "Es un esquema donde la tasa de comisión aumenta a medida que superas ciertos umbrales de ventas; esta calculadora usa una tasa fija simple." },
    { q: "¿Cómo afecta el salario base a mi tasa efectiva?", a: "El salario base aumenta tus ganancias totales sin depender de las ventas, lo que sube tu tasa efectiva combinada sobre el monto vendido." },
    { q: "¿Esta calculadora sirve para bienes raíces?", a: "Sí, puedes usarla para estimar la comisión sobre el precio de venta de una propiedad usando la tasa acordada con tu agencia." },
    { q: "¿Qué tasa de comisión es común en ventas?", a: "Varía mucho por industria, desde 1-3% en bienes raíces de alto valor hasta 10-20% en ventas directas o retail." },
    { q: "¿Puedo usar esta calculadora para comisión de seguros?", a: "Sí, siempre que la comisión se calcule como un porcentaje simple sobre el monto de la póliza o venta." },
    { q: "¿Qué pasa si mi comisión tiene un tope máximo?", a: "Esta calculadora no aplica topes automáticamente; deberás verificar manualmente si tu comisión calculada supera el límite de tu empresa." },
    { q: "¿Esta herramienta es gratuita?", a: "Sí, la calculadora de comisión es completamente gratuita y no requiere registro." },
  ],
  relatedCalculators: ["Calculadora de Salario a Por Hora", "Calculadora de Bono", "Calculadora de Aumento de Sueldo", "Calculadora de Tasa por Hora Freelance"],
  youMayLike: pickYouMayLike("commission-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Comisión de Ventas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};