// src/data/calculators/es/nps-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const npsCalculatorContent = {
  meta: {
    seoTitle: "Calculadora NPS 2026 — Capital de Jubilación y Pensión",
    metaDescription: "Calcula tu capital de jubilación NPS, retiro de suma global y pensión mensual estimada. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/nps-calculator",
    ogTitle: "Calculadora NPS",
    ogDescription: "Descubre tu capital de jubilación y pensión mensual estimada con NPS.",
    twitterTitle: "Calculadora NPS 2026",
    twitterDescription: "Calcula tu pensión NPS al instante.",
  },
  hero: {
    text: "La Calculadora NPS proyecta tu capital total al jubilarte, tu retiro de suma global disponible, y tu pensión mensual estimada según tu aportación mensual, rendimiento esperado y tasa de anualidad.",
  },
  about: {
    text: `El NPS (National Pension System) es un esquema de pensión de contribución voluntaria en India, donde aportas periódicamente hasta tu jubilación y luego una porción del capital acumulado se convierte en una pensión mensual.

Esta calculadora proyecta tu capital total al momento de la jubilación según tu aportación mensual, años restantes y rendimiento esperado, y luego calcula cuánto puedes retirar como suma global y cuánto se destina obligatoriamente a comprar una anualidad que genera tu pensión mensual.

Limitaciones: las reglas del NPS exigen destinar un mínimo del 40% del capital a la compra de anualidad; esta calculadora usa una tasa de anualidad fija que ingreses, la cual puede variar según el proveedor de anualidad al momento real de jubilarte.`,
  },
  formula: {
    formula: "Capital al Vencimiento = Aportación Mensual × [(1+i)^n − 1] / i × (1+i)",
    variables: [
      { symbol: "Retiro de Suma Global", meaning: "Porcentaje del capital que puedes retirar directamente, hasta el 60% según reglas del NPS" },
      { symbol: "Capital de Anualidad", meaning: "Porción del capital (mínimo 40%) destinada obligatoriamente a comprar una anualidad" },
      { symbol: "Pensión Mensual", meaning: "Capital de anualidad multiplicado por la tasa de anualidad anual, dividido entre 12" },
    ],
    explanation: "Se proyecta el capital acumulado con aportaciones mensuales compuestas al rendimiento esperado hasta la edad de jubilación; luego ese capital se divide entre retiro de suma global y capital de anualidad según el porcentaje elegido (mínimo 40% a anualidad), y la anualidad genera la pensión mensual.",
    interpretation: "Por ejemplo, con una aportación mensual de ₹5,000 durante 25 años a un rendimiento del 10%, el capital acumulado puede superar ₹66 lakh, generando una pensión mensual considerable según la tasa de anualidad elegida.",
  },
  steps: [
    "Ingresa tu aportación mensual al NPS.",
    "Ingresa la tasa de rendimiento esperada anual.",
    "Ingresa los años restantes hasta tu jubilación.",
    "Ingresa el porcentaje de compra de anualidad (mínimo 40%).",
    "Ingresa la tasa de anualidad esperada.",
    "Haz clic en Calcular para ver tu capital total, retiro de suma global y pensión mensual.",
  ],
  examples: [
    { inputs: "Aportación: ₹5,000/mes, Rendimiento: 10%, Años: 25, Anualidad: 40%, Tasa Anualidad: 6%", result: "Capital: ~₹66 lakh | Pensión Mensual: ~₹13,200", explanation: "Un contribuyente de mediana edad con aportación moderada durante 25 años." },
    { inputs: "Aportación: ₹10,000/mes, Rendimiento: 9%, Años: 30, Anualidad: 50%, Tasa Anualidad: 6.5%", result: "Capital: ~₹1.83 crore | Pensión Mensual: ~₹49,600", explanation: "Un contribuyente que empieza joven con un horizonte de 30 años." },
    { inputs: "Aportación: ₹2,000/mes, Rendimiento: 8%, Años: 15, Anualidad: 40%, Tasa Anualidad: 6%", result: "Capital: ~₹6.9 lakh | Pensión Mensual: ~₹1,380", explanation: "Un contribuyente que empieza tarde con un horizonte más corto." },
  ],
  practicalUses: [
    "Planear cuánto necesitas aportar mensualmente al NPS para una pensión objetivo",
    "Comparar el impacto de aumentar tu porcentaje de anualidad en tu pensión mensual",
    "Estimar tu capital disponible como suma global al jubilarte",
    "Evaluar el efecto de distintos rendimientos esperados en tu proyección de jubilación",
    "Complementar tu planeación de jubilación junto con otras cuentas como EPF o inversiones personales",
  ],
  expertTips: [
    "El NPS exige un mínimo del 40% del capital para comprar anualidad; puedes elegir un porcentaje mayor si deseas una pensión mensual más alta.",
    "Las tasas de anualidad son generalmente más bajas que los rendimientos de acumulación, por lo que un capital mayor en anualidad no siempre significa mejor retorno global.",
    "El NPS ofrece beneficios fiscales adicionales en India bajo la Sección 80CCD, que vale la pena verificar con un asesor fiscal.",
    "Diversifica tu planeación de jubilación combinando NPS con otras opciones como EPF, PPF o inversiones personales.",
  ],
  commonMistakes: [
    { mistake: "Asumir que puedes retirar el 100% del capital como suma global", fix: "Las reglas del NPS exigen destinar un mínimo del 40% del capital a la compra obligatoria de anualidad." },
    { mistake: "Usar una tasa de anualidad idéntica a la tasa de rendimiento de acumulación", fix: "Las tasas de anualidad suelen ser más bajas y conservadoras que los rendimientos esperados durante la fase de acumulación." },
    { mistake: "No considerar el efecto de aumentar la aportación mensual con el tiempo", fix: "Aumentar tu aportación mensual periódicamente (según tu ingreso) puede mejorar significativamente tu capital final proyectado." },
  ],
  faq: [
    { q: "¿Qué es el NPS (National Pension System)?", a: "Es un esquema de pensión de contribución voluntaria en India donde aportas periódicamente hasta la jubilación, y una parte del capital se convierte en pensión mensual." },
    { q: "¿Cómo se calcula el capital acumulado en el NPS?", a: "Se proyecta tu aportación mensual compuesta al rendimiento esperado durante los años restantes hasta tu edad de jubilación." },
    { q: "¿Cuánto puedo retirar como suma global del NPS?", a: "Puedes retirar hasta el 60% del capital acumulado como suma global; el resto (mínimo 40%) debe destinarse a la compra de una anualidad." },
    { q: "¿Qué es la anualidad en el NPS?", a: "Es un producto financiero que convierte una porción de tu capital NPS en una pensión mensual garantizada durante tu jubilación." },
    { q: "¿Cuál es el porcentaje mínimo de anualidad obligatorio en el NPS?", a: "Las reglas del NPS exigen destinar un mínimo del 40% del capital acumulado a la compra de anualidad." },
    { q: "¿Cómo se calcula la pensión mensual del NPS?", a: "Se multiplica el capital destinado a anualidad por la tasa de anualidad anual, y ese resultado se divide entre 12 para obtener la pensión mensual." },
    { q: "¿Qué rendimiento esperado debo usar para proyectar mi NPS?", a: "El NPS invierte en una combinación de acciones, bonos y deuda gubernamental; un rendimiento entre 8% y 10% anual es un supuesto razonable a largo plazo." },
    { q: "¿El NPS tiene beneficios fiscales en India?", a: "Sí, las contribuciones al NPS califican para beneficios fiscales adicionales bajo la Sección 80CCD del Impuesto sobre la Renta indio." },
    { q: "¿Puedo aumentar mi aportación mensual al NPS con el tiempo?", a: "Sí, y se recomienda hacerlo a medida que aumenta tu ingreso, ya que mejora significativamente tu capital final proyectado." },
    { q: "¿A qué edad puedo empezar a retirar del NPS?", a: "Generalmente puedes acceder a los beneficios del NPS a partir de los 60 años, aunque existen reglas de retiro anticipado en ciertos casos." },
    { q: "¿Qué pasa si elijo un porcentaje de anualidad mayor al mínimo?", a: "Un porcentaje mayor de anualidad reduce tu suma global disponible, pero aumenta el capital destinado a generar tu pensión mensual." },
    { q: "¿Las tasas de anualidad son fijas de por vida?", a: "Depende del proveedor de anualidad y el tipo de plan elegido; algunas anualidades ofrecen tasas fijas, otras con ajuste por inflación." },
    { q: "¿El NPS reemplaza otras formas de ahorro para la jubilación?", a: "No, generalmente se recomienda combinarlo con otras opciones como EPF, PPF o inversiones personales para una jubilación más diversificada." },
  ],
  relatedCalculators: ["Calculadora de PPF", "Calculadora de EPF", "Calculadora de Jubilación", "Calculadora de SIP"],
  youMayLike: pickYouMayLike("nps-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora NPS",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};