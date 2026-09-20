// src/data/calculators/es/debt-avalanche-calculator.ts
// NOTE: real slug is "debt-avalanche-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const debtAvalancheCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Avalancha de Deudas 2026",
    metaDescription: "Calcula cuánto tiempo tardarás en pagar tus deudas pagando primero la de mayor interés. Gratis y sin registro.",
    canonicalSlug: "/es/finance/debt-avalanche-calculator",
    ogTitle: "Calculadora de Avalancha de Deudas",
    ogDescription: "Paga tus deudas más rápido y con menos interés usando el método avalancha.",
    twitterTitle: "Calculadora Método Avalancha",
    twitterDescription: "Descubre cuánto interés puedes ahorrar pagando primero la deuda más cara.",
  },
  hero: {
    text: "La Calculadora de Avalancha de Deudas ordena tus deudas de mayor a menor tasa de interés y te muestra en cuánto tiempo quedarás libre de deudas pagando el mínimo en todas, excepto en la de mayor interés.",
  },
  about: {
    text: `El método avalancha es una estrategia para salir de deudas que prioriza pagar primero la deuda con la tasa de interés más alta, mientras se paga el mínimo en las demás, minimizando así el interés total pagado.

Esta calculadora recibe el saldo, pago mínimo y tasa de interés de cada una de tus deudas, junto con un pago extra mensual opcional, y calcula el orden de pago, el tiempo total para quedar libre de deudas y el interés total pagado.

Limitaciones: la calculadora asume que las tasas de interés y los pagos mínimos se mantienen constantes durante todo el período; no considera cambios de tasa variable ni cargos adicionales por mora.`,
  },
  formula: {
    formula: "Orden de Pago = Deudas ordenadas de mayor a menor Tasa de Interés",
    variables: [
      { symbol: "Pago Extra", meaning: "Monto adicional mensual que se destina a la deuda con mayor interés una vez pagados los mínimos" },
      { symbol: "Interés Total", meaning: "Suma del interés pagado en todas las deudas hasta liquidarlas por completo" },
    ],
    explanation: "Se pagan los montos mínimos en todas las deudas, y cualquier pago extra se destina completamente a la deuda con la tasa de interés más alta; al liquidarla, ese pago se redirige a la siguiente deuda con mayor interés, y así sucesivamente.",
    interpretation: "Por ejemplo, con 3 deudas y $150 de pago extra mensual, la calculadora muestra en qué orden se liquidarán y cuánto interés total pagarás en comparación con solo pagar los mínimos.",
  },
  steps: [
    "Agrega cada una de tus deudas con su saldo, pago mínimo y tasa de interés.",
    "Ingresa un pago extra mensual opcional para acelerar el pago.",
    "Haz clic en Calcular.",
    "Revisa el tiempo estimado para quedar libre de deudas, el interés total y el orden de pago.",
  ],
  examples: [
    { inputs: "Deuda 1: $5,000 al 22%, Deuda 2: $2,000 al 15%, Extra: $100/mes", result: "Libre de deudas en 2 años, 1 mes", explanation: "La tarjeta de crédito con mayor interés (22%) se paga primero." },
    { inputs: "3 deudas con tasas de 10%, 18% y 25%, sin pago extra", result: "Orden: deuda al 25%, luego 18%, luego 10%", explanation: "Sin pago extra, el ahorro en interés es menor pero el orden de prioridad se mantiene." },
    { inputs: "Deuda única: $10,000 al 20%, Extra: $200/mes", result: "Interés total reducido significativamente frente al pago mínimo", explanation: "Con una sola deuda, el método avalancha simplemente acelera el pago con el extra mensual." },
  ],
  practicalUses: [
    "Planear la estrategia más económica para salir de deudas de tarjetas de crédito",
    "Comparar cuánto interés ahorras pagando extra cada mes",
    "Decidir en qué orden liquidar múltiples préstamos o tarjetas",
    "Establecer una meta realista de fecha para quedar libre de deudas",
    "Evaluar el impacto de aumentar el pago extra mensual en el tiempo total",
  ],
  expertTips: [
    "El método avalancha minimiza el interés total pagado, pero el método bola de nieve (pagar primero la deuda más pequeña) puede ser más motivador psicológicamente aunque cueste algo más de interés.",
    "Cualquier pago extra, por pequeño que sea, reduce significativamente el tiempo total y el interés pagado a largo plazo.",
    "Evita adquirir nueva deuda mientras sigues este plan, ya que eso alarga el tiempo estimado de pago.",
    "Revisa si puedes transferir el saldo de tu deuda con mayor interés a una tarjeta con tasa promocional del 0% para acelerar aún más el proceso.",
  ],
  commonMistakes: [
    { mistake: "Pagar solo el mínimo en todas las deudas sin destinar extra a ninguna", fix: "Destina cualquier pago adicional siempre a la deuda con la tasa de interés más alta para maximizar el ahorro." },
    { mistake: "Cambiar de estrategia a mitad de camino", fix: "Mantén el orden de pago avalancha consistente; cambiar de método reduce la eficiencia del ahorro en interés." },
    { mistake: "No incluir todas las deudas en el cálculo", fix: "Incluye préstamos personales, tarjetas de crédito y cualquier otra deuda con interés para obtener un plan realista." },
    { mistake: "Ignorar el pago mínimo de las demás deudas mientras se ataca la principal", fix: "Siempre debes seguir pagando el mínimo de todas las demás deudas para evitar mora y cargos adicionales." },
  ],
  faq: [
    { q: "¿Qué es el método avalancha para pagar deudas?", a: "Es una estrategia que prioriza pagar primero la deuda con la tasa de interés más alta mientras se paga el mínimo en las demás, minimizando el interés total." },
    { q: "¿Cuál es la diferencia entre el método avalancha y el método bola de nieve?", a: "El método avalancha prioriza la tasa de interés más alta para ahorrar más dinero; el método bola de nieve prioriza el saldo más pequeño para generar motivación psicológica." },
    { q: "¿Cuánto interés puedo ahorrar con el método avalancha?", a: "Depende de tus tasas de interés y pago extra mensual; esta calculadora muestra el interés total exacto para tu situación." },
    { q: "¿Necesito un pago extra para usar el método avalancha?", a: "No es obligatorio, pero cualquier pago adicional acelera considerablemente el tiempo para quedar libre de deudas." },
    { q: "¿El método avalancha funciona con préstamos personales y tarjetas de crédito juntos?", a: "Sí, puedes incluir cualquier tipo de deuda con tasa de interés fija en el cálculo, sin importar el tipo de crédito." },
    { q: "¿Qué pasa si no puedo pagar el mínimo de todas mis deudas?", a: "Esta calculadora asume que puedes cubrir todos los pagos mínimos; si no es tu caso, considera hablar con tus acreedores antes de aplicar esta estrategia." },
    { q: "¿Cómo se calcula el orden de pago en el método avalancha?", a: "Las deudas se ordenan de mayor a menor tasa de interés, y el pago extra se destina siempre a la de mayor tasa hasta liquidarla." },
    { q: "¿El método avalancha es mejor que la consolidación de deudas?", a: "Depende de tu situación: la avalancha no requiere un préstamo nuevo, mientras que la consolidación puede simplificar pagos si consigues una tasa más baja." },
  ],
  relatedCalculators: ["Calculadora de Consolidación de Deudas", "Calculadora de Pago de Deudas", "Calculadora de Bola de Nieve de Deudas", "Calculadora de Tarjeta de Crédito"],
  youMayLike: pickYouMayLike("debt-avalanche-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Avalancha de Deudas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};
