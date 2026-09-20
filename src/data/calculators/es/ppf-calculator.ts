// src/data/calculators/es/ppf-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const ppfCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de PPF (Fondo Público de Previsión) 2026",
    metaDescription: "Calcula el valor de vencimiento de tu PPF en India según tu inversión anual y tasa de interés. Gratis.",
    canonicalSlug: "/es/finance/ppf-calculator",
    ogTitle: "Calculadora de PPF",
    ogDescription: "Calcula el valor de vencimiento de tu Fondo Público de Previsión.",
    twitterTitle: "Calculadora PPF India",
    twitterDescription: "Calcula tu valor de vencimiento de PPF al instante.",
  },
  hero: {
    text: "La Calculadora de PPF calcula el valor de vencimiento de tu Fondo Público de Previsión (Public Provident Fund) en India, según tu inversión anual, tasa de interés y plazo, incluyendo un cronograma de crecimiento año por año.",
  },
  about: {
    text: `El PPF (Public Provident Fund) es un esquema de ahorro respaldado por el gobierno de India, muy popular por su seguridad, beneficios fiscales y tasa de interés competitiva, con un bloqueo obligatorio de 15 años.

Esta calculadora recibe tu inversión anual (hasta el máximo permitido de ₹1,50,000), la tasa de interés vigente y el plazo en años, y calcula el valor de vencimiento, el total invertido, el interés total ganado y un cronograma de crecimiento año por año.

Limitaciones: la calculadora asume que el depósito de cada año se realiza al inicio del año y que la tasa de interés se mantiene constante durante todo el plazo; en la práctica, el gobierno revisa la tasa de PPF trimestralmente.`,
  },
  formula: {
    formula: "Saldo Final = (Saldo Inicial + Inversión Anual) × (1 + Tasa de Interés)",
    variables: [
      { symbol: "Inversión Anual Máxima", meaning: "₹1,50,000 por año fiscal, según las reglas actuales del PPF" },
      { symbol: "Bloqueo Mínimo", meaning: "15 años, ampliable en bloques de 5 años después del vencimiento inicial" },
    ],
    explanation: "Cada año, el depósito se suma al saldo acumulado al inicio del año, y ese total genera interés compuesto anualmente a la tasa vigente; este proceso se repite año tras año hasta completar el plazo, acumulando tanto el capital invertido como el interés generado.",
    interpretation: "Por ejemplo, invirtiendo ₹1,50,000 anuales durante 15 años a una tasa del 7.1%, el valor de vencimiento supera significativamente el total invertido gracias al interés compuesto acumulado.",
  },
  steps: [
    "Ingresa tu inversión anual (hasta ₹1,50,000).",
    "Ingresa la tasa de interés vigente del PPF.",
    "Ingresa el plazo en años (mínimo 15 años).",
    "Haz clic en Calcular.",
    "Revisa el valor de vencimiento, el total invertido, el interés ganado y el cronograma año por año.",
  ],
  examples: [
    { inputs: "Inversión Anual: ₹1,50,000, Tasa: 7.1%, Plazo: 15 años", result: "Valor de vencimiento significativamente mayor al total invertido", explanation: "El escenario máximo permitido por las reglas del PPF a plazo mínimo." },
    { inputs: "Inversión Anual: ₹50,000, Tasa: 7.1%, Plazo: 15 años", result: "Valor de vencimiento proporcionalmente menor", explanation: "Una inversión anual más modesta genera un valor de vencimiento menor, pero sigue beneficiándose del interés compuesto." },
    { inputs: "Inversión Anual: ₹1,00,000, Tasa: 7.1%, Plazo: 20 años", result: "Mayor valor de vencimiento por el plazo extendido", explanation: "Extender el plazo más allá del mínimo de 15 años (en bloques de 5) aumenta considerablemente el valor final." },
  ],
  practicalUses: [
    "Planear tu ahorro a largo plazo usando el esquema PPF respaldado por el gobierno indio",
    "Estimar cuánto tendrás acumulado al vencimiento según distintos montos de inversión anual",
    "Comparar el PPF contra otras opciones de ahorro o inversión disponibles en India",
    "Planear tu jubilación considerando el PPF como parte de tu estrategia financiera",
    "Visualizar el crecimiento año por año de tu inversión en PPF",
  ],
  expertTips: [
    "Depositar tu inversión anual completa al inicio del año fiscal (antes del 5 de abril) maximiza el interés ganado, ya que el interés se calcula sobre el saldo mínimo entre el 5º y el último día de cada mes.",
    "El PPF ofrece beneficios fiscales bajo la Sección 80C, además de que el interés ganado y el monto de vencimiento generalmente están exentos de impuestos.",
    "Después del bloqueo inicial de 15 años, puedes extender tu cuenta PPF en bloques de 5 años, con o sin nuevas contribuciones.",
    "La tasa de interés del PPF se revisa trimestralmente por el gobierno; verifica siempre la tasa vigente antes de hacer proyecciones a largo plazo.",
  ],
  commonMistakes: [
    { mistake: "Depositar la inversión anual al final del año fiscal en lugar de al inicio", fix: "Deposita antes del 5 de abril para maximizar el interés ganado durante todo el año fiscal." },
    { mistake: "Exceder el límite máximo de inversión anual de ₹1,50,000", fix: "Cualquier monto que exceda el límite no genera interés adicional y puede ser devuelto sin intereses según las reglas del PPF." },
    { mistake: "Asumir que la tasa de interés se mantendrá fija durante todo el plazo", fix: "La tasa de PPF se revisa trimestralmente por el gobierno; usa la tasa vigente actual como estimación, sabiendo que puede cambiar." },
    { mistake: "Olvidar que el PPF tiene un bloqueo obligatorio de 15 años", fix: "Planea tu liquidez considerando que el capital estará inmovilizado durante al menos 15 años, con retiros parciales limitados permitidos desde el año 7." },
  ],
  faq: [
    { q: "¿Qué es el PPF (Public Provident Fund) en India?", a: "Es un esquema de ahorro a largo plazo respaldado por el gobierno de India, con beneficios fiscales, tasa de interés competitiva y un bloqueo obligatorio de 15 años." },
    { q: "¿Cuál es la inversión máxima anual permitida en el PPF?", a: "El límite máximo de inversión anual en una cuenta PPF es de ₹1,50,000 por año fiscal." },
    { q: "¿Cómo se calcula el interés en una cuenta PPF?", a: "El interés se calcula mensualmente sobre el saldo mínimo entre el 5º día y el último día de cada mes, y se capitaliza anualmente al final del año fiscal." },
    { q: "¿Cuál es el plazo mínimo de bloqueo del PPF?", a: "El plazo mínimo de bloqueo es de 15 años; después de este período, la cuenta puede extenderse en bloques de 5 años." },
    { q: "¿El PPF tiene beneficios fiscales?", a: "Sí, las contribuciones al PPF califican para deducción bajo la Sección 80C, y tanto el interés ganado como el monto de vencimiento generalmente están exentos de impuestos." },
    { q: "¿Puedo retirar dinero de mi PPF antes de los 15 años?", a: "Se permiten retiros parciales limitados a partir del séptimo año de la cuenta, sujetos a las reglas específicas del esquema." },
    { q: "¿Cuándo es el mejor momento del año para depositar en mi PPF?", a: "Depositar antes del 5 de abril (inicio del año fiscal) maximiza el interés ganado, ya que el cálculo se basa en el saldo mínimo mensual." },
    { q: "¿Qué pasa si no deposito el monto completo permitido cada año?", a: "Puedes depositar cualquier monto entre el mínimo requerido (generalmente ₹500) y el máximo de ₹1,50,000; el interés se calcula proporcionalmente sobre lo depositado." },
    { q: "¿Puedo extender mi cuenta PPF después de los 15 años?", a: "Sí, puedes extenderla en bloques de 5 años, con la opción de seguir contribuyendo o mantenerla sin nuevos depósitos." },
    { q: "¿Cómo cambia la tasa de interés del PPF con el tiempo?", a: "El gobierno de India revisa y ajusta la tasa de interés del PPF trimestralmente, por lo que puede variar durante el plazo de tu inversión." },
    { q: "¿El PPF es una buena opción comparado con otros instrumentos de ahorro en India?", a: "El PPF es considerado una opción segura de bajo riesgo con beneficios fiscales, aunque su rendimiento puede ser menor comparado con inversiones de renta variable a largo plazo." },
    { q: "¿Puedo tener más de una cuenta PPF?", a: "No, un individuo solo puede tener una cuenta PPF activa a su nombre, aunque puede abrir una cuenta adicional en nombre de un hijo menor." },
    { q: "¿Qué pasa si extiendo mi PPF sin hacer nuevas contribuciones?", a: "Puedes optar por extender la cuenta sin contribuciones adicionales, y el saldo existente seguirá generando interés durante el período extendido." },
    { q: "¿El valor de vencimiento del PPF está garantizado?", a: "El PPF es respaldado por el gobierno de India, lo que lo hace de muy bajo riesgo, aunque la tasa de interés puede variar trimestralmente según las políticas gubernamentales." },
  ],
  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de EPF", "Calculadora de SIP", "Calculadora de Depósito Fijo (FD)"],
  youMayLike: pickYouMayLike("ppf-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de PPF",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};