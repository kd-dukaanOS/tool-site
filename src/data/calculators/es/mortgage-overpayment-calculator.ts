// src/data/calculators/es/mortgage-overpayment-calculator.ts
// NOTE: real slug is "mortgage-overpayment-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const mortgageOverpaymentCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Pago Anticipado de Hipoteca 2026",
    metaDescription: "Descubre cuántos años y cuánto interés ahorras con pagos extra a tu hipoteca. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/mortgage-overpayment-calculator",
    ogTitle: "Calculadora de Pago Anticipado de Hipoteca",
    ogDescription: "Descubre cuánto ahorras pagando extra cada mes en tu hipoteca.",
    twitterTitle: "Calculadora de Pago Extra Hipotecario",
    twitterDescription: "Calcula cuánto tiempo e interés ahorras con pagos extra.",
  },
  hero: {
    text: "La Calculadora de Pago Anticipado de Hipoteca muestra cuánto tiempo y cuánto interés ahorras al agregar un pago mensual adicional fijo a tu hipoteca actual.",
  },
  about: {
    text: `Pagar un monto extra cada mes sobre tu hipoteca reduce directamente el capital pendiente, lo que acorta el plazo restante del préstamo y disminuye el interés total que pagarás a lo largo de la vida del préstamo.

Esta calculadora recibe el saldo actual de tu préstamo, la tasa de interés, los meses restantes y un pago extra mensual, y simula mes a mes cómo ese pago adicional acelera el pago total y reduce el interés acumulado.

Limitaciones: la calculadora asume que el pago extra se mantiene constante durante todo el período restante y que la tasa de interés no cambia; no considera penalizaciones por pago anticipado que algunos préstamos podrían tener.`,
  },
  formula: {
    formula: "Interés Ahorrado = Interés Original − Interés con Pago Extra",
    variables: [
      { symbol: "Pago Extra Mensual", meaning: "Monto adicional fijo que se aplica cada mes por encima del pago estándar" },
      { symbol: "Tiempo Ahorrado", meaning: "Diferencia entre el plazo restante original y el nuevo plazo con el pago extra aplicado" },
    ],
    explanation: "Se simula el pago mensual mes a mes, aplicando el pago estándar más el extra directamente al capital pendiente, hasta que el saldo llega a cero; esto reduce tanto el tiempo total de pago como el interés acumulado comparado con el escenario sin pago extra.",
    interpretation: "Por ejemplo, con un saldo de $250,000 al 6% de interés y 300 meses restantes, agregar $200 extra al mes puede reducir el plazo en varios años y ahorrar miles de dólares en interés.",
  },
  steps: [
    "Ingresa el saldo actual de tu préstamo hipotecario.",
    "Ingresa la tasa de interés anual.",
    "Ingresa los meses restantes de tu préstamo.",
    "Ingresa el pago extra mensual que planeas agregar.",
    "Haz clic en Calcular para ver el nuevo tiempo de pago, tiempo ahorrado e interés ahorrado.",
  ],
  examples: [
    { inputs: "Saldo: $250,000, Tasa: 6%, Meses Restantes: 300, Extra: $200/mes", result: "Reduce el plazo en varios años y ahorra miles en interés", explanation: "Un pago extra moderado puede tener un impacto significativo en préstamos a largo plazo." },
    { inputs: "Saldo: $150,000, Tasa: 5.5%, Meses Restantes: 180, Extra: $100/mes", result: "Ahorro de interés proporcionalmente menor por el plazo más corto", explanation: "En préstamos con menos tiempo restante, el impacto relativo del pago extra es menor." },
    { inputs: "Saldo: $300,000, Tasa: 7%, Meses Restantes: 320, Extra: $0", result: "Sin pago extra, no hay tiempo ni interés ahorrado", explanation: "Sin un pago adicional, el préstamo sigue su cronograma original sin cambios." },
  ],
  practicalUses: [
    "Decidir si vale la pena destinar un ingreso extra a pagar más rápido tu hipoteca",
    "Comparar el ahorro de interés entre distintos montos de pago extra",
    "Planear cuántos años antes podrías liquidar tu hipoteca con pagos adicionales",
    "Evaluar si conviene más pagar extra la hipoteca o invertir ese dinero en otro lugar",
    "Establecer una meta realista de fecha para quedar libre de deuda hipotecaria",
  ],
  expertTips: [
    "Incluso pagos extra pequeños y constantes pueden ahorrar años de plazo e importantes cantidades de interés en préstamos a 30 años.",
    "Verifica con tu prestamista que no exista una penalización por pago anticipado antes de comprometerte con esta estrategia.",
    "Aplicar el pago extra directamente al capital (no como pago adicional del mes siguiente) es clave para maximizar el ahorro de interés.",
    "Compara el ahorro de interés de pagar extra la hipoteca contra el rendimiento esperado de invertir ese mismo dinero, para decidir qué opción conviene más en tu caso.",
  ],
  commonMistakes: [
    { mistake: "Asumir que cualquier pago extra se aplica automáticamente al capital", fix: "Confirma con tu prestamista que el pago adicional se destine a reducir el capital, no a adelantar el siguiente pago mensual." },
    { mistake: "No verificar si existe penalización por pago anticipado", fix: "Algunos préstamos hipotecarios cobran una penalización por liquidar el saldo antes de tiempo; revisa tu contrato antes de hacer pagos extra grandes." },
    { mistake: "Subestimar el impacto de pagos extra pequeños a largo plazo", fix: "Incluso $50-100 extra al mes pueden ahorrar años de plazo e interés significativo en un préstamo a 30 años." },
    { mistake: "No considerar alternativas de inversión con mejor rendimiento", fix: "Si el rendimiento esperado de una inversión supera tu tasa hipotecaria, podría convenir más invertir en lugar de pagar extra la hipoteca." },
  ],
  faq: [
    { q: "¿Cómo afecta un pago extra mensual a mi hipoteca?", a: "El pago extra se aplica directamente al capital pendiente, reduciendo el saldo más rápido de lo previsto, lo que acorta el plazo total y disminuye el interés total pagado." },
    { q: "¿Cuánto tiempo puedo ahorrar pagando $200 extra al mes en mi hipoteca?", a: "Depende de tu saldo, tasa de interés y plazo restante; esta calculadora te muestra el ahorro de tiempo exacto para tu situación específica." },
    { q: "¿Hay penalización por pagar mi hipoteca antes de tiempo?", a: "Algunos préstamos hipotecarios incluyen una cláusula de penalización por pago anticipado; verifica tu contrato de préstamo específico antes de hacer pagos extra significativos." },
    { q: "¿Es mejor pagar extra la hipoteca o invertir ese dinero?", a: "Depende de tu tasa hipotecaria comparada con el rendimiento esperado de la inversión; si la inversión rinde más que tu tasa hipotecaria, podría convenir más invertir." },
    { q: "¿Cómo se calcula el interés ahorrado con pagos extra?", a: "Se simula el pago mes a mes con y sin el pago extra, y se compara el interés total acumulado en ambos escenarios hasta liquidar el préstamo." },
    { q: "¿Debo avisar a mi banco si hago un pago extra en mi hipoteca?", a: "Es recomendable confirmar con tu banco que el pago adicional se aplique al capital y no se guarde como un pago adelantado del siguiente mes." },
    { q: "¿Un pago extra único tiene el mismo efecto que pagos extra mensuales constantes?", a: "Un pago extra único reduce el capital de una sola vez, pero pagos extra constantes cada mes generan un ahorro acumulativo mayor a largo plazo." },
    { q: "¿Cuánto interés ahorro exactamente pagando extra mi hipoteca?", a: "El ahorro exacto depende de tu saldo, tasa y plazo restante; ingresa tus datos en esta calculadora para ver el monto preciso ahorrado en tu caso." },
    { q: "¿Pagar extra la hipoteca afecta mi puntaje crediticio?", a: "Pagar extra tu hipoteca generalmente no afecta negativamente tu puntaje crediticio; de hecho, reducir tu deuda puede tener un efecto positivo a largo plazo." },
    { q: "¿Qué pasa si dejo de hacer el pago extra después de algunos meses?", a: "El préstamo simplemente continúa con el cronograma restante basado en el nuevo saldo reducido; no hay penalización por dejar de hacer pagos extra." },
    { q: "¿Cómo afecta el pago extra a mi plazo si mi hipoteca tiene tasa variable?", a: "Esta calculadora asume tasa fija; con una tasa variable, el efecto del pago extra puede variar si la tasa cambia durante el período restante." },
    { q: "¿Vale la pena hacer un pago extra grande de una sola vez o es mejor distribuirlo mensualmente?", a: "Ambas estrategias reducen el capital y ahorran interés; un pago único genera ahorro inmediato, mientras que pagos mensuales constantes generan ahorro progresivo y sostenido." },
    { q: "¿Cómo sé si mi hipoteca permite pagos extra sin restricciones?", a: "Revisa los términos de tu contrato de préstamo o contacta directamente a tu prestamista para confirmar si existen límites o penalizaciones por pagos adicionales." },
    { q: "¿Cuál es la diferencia entre pagar extra la hipoteca y refinanciarla?", a: "Pagar extra reduce el capital sin cambiar los términos del préstamo original; refinanciar reemplaza el préstamo completo por uno nuevo, generalmente con una tasa distinta." },
  ],
  relatedCalculators: ["Calculadora de Refinanciamiento Hipotecario", "Calculadora de Hipoteca", "Calculadora de Amortización de Préstamo", "Calculadora de Pago de Deudas"],
  youMayLike: pickYouMayLike("mortgage-overpayment-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Pago Anticipado de Hipoteca",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};