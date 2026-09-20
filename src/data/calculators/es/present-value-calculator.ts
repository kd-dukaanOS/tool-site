// src/data/calculators/es/present-value-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const presentValueCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Valor Presente 2026",
    metaDescription: "Calcula cuánto vale hoy una suma de dinero futura según tu tasa de descuento. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/present-value-calculator",
    ogTitle: "Calculadora de Valor Presente",
    ogDescription: "Descubre el valor actual de una cantidad de dinero futura.",
    twitterTitle: "Calculadora de Valor Presente (VP)",
    twitterDescription: "Calcula el valor presente de una suma futura al instante.",
  },
  hero: {
    text: "La Calculadora de Valor Presente descuenta una suma de dinero futura a su valor equivalente en el presente, según la tasa de descuento y frecuencia de capitalización que elijas.",
  },
  about: {
    text: `El valor presente (VP) es un concepto financiero fundamental basado en el principio de que el dinero disponible hoy vale más que la misma cantidad de dinero en el futuro, debido a su potencial de generar rendimiento a lo largo del tiempo.

Esta calculadora recibe un monto futuro, el número de años hasta recibirlo, una tasa de descuento y la frecuencia de capitalización, y calcula cuánto vale hoy esa cantidad futura, descontando el efecto del tiempo y la tasa aplicada.

Limitaciones: la calculadora asume una tasa de descuento constante durante todo el período; en la práctica, las tasas de interés y descuento pueden variar, lo que afectaría el cálculo real del valor presente.`,
  },
  formula: {
    formula: "VP = VF / (1 + r/n)^(n×t)",
    variables: [
      { symbol: "VF", meaning: "Valor Futuro — la cantidad de dinero que recibirás en el futuro" },
      { symbol: "r, n, t", meaning: "r es la tasa de descuento anual, n es la frecuencia de capitalización por año, t es el número de años" },
    ],
    explanation: "Se divide el valor futuro entre (1 más la tasa de descuento periódica) elevado al número total de períodos de capitalización, descontando así el efecto del tiempo y la tasa de interés para obtener el valor equivalente en el presente.",
    interpretation: "Por ejemplo, $50,000 a recibir en 10 años con una tasa de descuento del 6% anual (capitalización anual) tienen un valor presente aproximado de $27,920 en dinero de hoy.",
  },
  steps: [
    "Ingresa el valor futuro que esperas recibir.",
    "Ingresa el número de años hasta recibirlo.",
    "Ingresa la tasa de descuento anual.",
    "Selecciona la frecuencia de capitalización (anual, mensual, trimestral o diaria).",
    "Haz clic en Calcular para ver el valor presente, valor futuro y monto de descuento.",
  ],
  examples: [
    { inputs: "Valor Futuro: $50,000, Años: 10, Tasa: 6%, Anual", result: "Valor Presente: aproximadamente $27,920", explanation: "Un cálculo estándar de valor presente con capitalización anual." },
    { inputs: "Valor Futuro: $100,000, Años: 20, Tasa: 8%, Anual", result: "Valor Presente significativamente menor por el plazo más largo y tasa más alta", explanation: "A mayor tasa de descuento y plazo, menor es el valor presente relativo al valor futuro." },
    { inputs: "Valor Futuro: $10,000, Años: 5, Tasa: 4%, Mensual", result: "Valor Presente calculado con capitalización mensual", explanation: "La frecuencia de capitalización más frecuente genera un descuento ligeramente distinto al anual." },
  ],
  practicalUses: [
    "Evaluar si vale la pena aceptar un pago futuro en lugar de un pago inmediato menor",
    "Calcular el valor actual de un pago de liquidación, herencia o premio a recibir en el futuro",
    "Comparar ofertas financieras que involucran pagos en distintos momentos del tiempo",
    "Analizar inversiones y proyectos que generan flujos de efectivo futuros",
    "Entender el concepto de valor del dinero en el tiempo para decisiones financieras",
  ],
  expertTips: [
    "Una tasa de descuento más alta reduce el valor presente de una suma futura, ya que representa un mayor costo de oportunidad del dinero disponible hoy.",
    "La frecuencia de capitalización afecta el resultado: capitalización más frecuente (mensual o diaria) generalmente produce un valor presente ligeramente distinto al anual con la misma tasa nominal.",
    "El valor presente es la base de conceptos financieros más avanzados como el Valor Presente Neto (VPN), usado para evaluar la rentabilidad de proyectos de inversión.",
    "Elegir la tasa de descuento correcta es crucial: generalmente se usa el costo de oportunidad del capital o una tasa libre de riesgo como referencia.",
  ],
  commonMistakes: [
    { mistake: "Usar una tasa de descuento arbitraria sin justificación", fix: "La tasa de descuento debe reflejar tu costo de oportunidad real o el rendimiento esperado de una inversión alternativa comparable." },
    { mistake: "Ignorar la frecuencia de capitalización al comparar distintas ofertas", fix: "Asegúrate de usar la misma frecuencia de capitalización al comparar el valor presente de distintas opciones financieras." },
    { mistake: "Confundir valor presente con valor futuro", fix: "El valor presente descuenta una cantidad futura al presente; el valor futuro proyecta una cantidad presente hacia el futuro. Son cálculos opuestos." },
    { mistake: "No considerar que la tasa de descuento puede cambiar con el tiempo", fix: "Esta calculadora asume una tasa constante; en escenarios reales, las tasas de interés pueden fluctuar, afectando el valor presente real." },
  ],
  faq: [
    { q: "¿Qué es el valor presente en finanzas?", a: "Es el valor actual de una cantidad de dinero que se recibirá en el futuro, descontado según una tasa de interés o descuento que refleja el valor del dinero en el tiempo." },
    { q: "¿Cómo se calcula el valor presente de una suma futura?", a: "Se divide el valor futuro entre (1 más la tasa de descuento periódica) elevado al número total de períodos de capitalización." },
    { q: "¿Por qué el dinero de hoy vale más que el mismo monto en el futuro?", a: "Porque el dinero disponible hoy puede invertirse y generar rendimiento con el tiempo, además de estar sujeto a menos incertidumbre que un pago futuro." },
    { q: "¿Cómo afecta la tasa de descuento al valor presente?", a: "Una tasa de descuento más alta reduce el valor presente calculado, ya que representa un mayor costo de oportunidad del dinero a lo largo del tiempo." },
    { q: "¿Qué diferencia hay entre valor presente y valor futuro?", a: "El valor presente descuenta una cantidad futura a su equivalente actual; el valor futuro proyecta cuánto valdría una cantidad actual en el futuro, aplicando interés compuesto." },
    { q: "¿Cómo elijo la tasa de descuento correcta para mi cálculo?", a: "Generalmente se usa el costo de oportunidad del capital, una tasa de rendimiento esperada de una inversión alternativa, o una tasa libre de riesgo como referencia." },
    { q: "¿El valor presente se usa solo en finanzas corporativas?", a: "No, también se usa en decisiones financieras personales, como evaluar pagos de liquidación, herencias, premios o negociaciones de pagos diferidos." },
    { q: "¿Cómo afecta la frecuencia de capitalización al valor presente?", a: "Una capitalización más frecuente (mensual o diaria) generalmente produce un valor presente ligeramente distinto que la capitalización anual, con la misma tasa nominal anual." },
    { q: "¿Qué es el Valor Presente Neto (VPN) y cómo se relaciona con el valor presente?", a: "El VPN es la suma de los valores presentes de todos los flujos de efectivo de un proyecto (entradas y salidas), usado para evaluar si una inversión es rentable." },
    { q: "¿Puedo usar esta calculadora para evaluar si aceptar un pago inmediato menor en lugar de uno futuro mayor?", a: "Sí, calcula el valor presente del pago futuro y compáralo directamente con el monto del pago inmediato para ver cuál opción tiene mayor valor real hoy." },
    { q: "¿El valor presente considera la inflación?", a: "La tasa de descuento que elijas puede incorporar implícitamente la inflación esperada, aunque esta calculadora no separa ambos efectos automáticamente." },
    { q: "¿Cómo se relaciona el valor presente con las anualidades?", a: "El valor presente de una anualidad es la suma de los valores presentes de una serie de pagos futuros iguales, un concepto relacionado pero con una fórmula distinta a un pago único." },
    { q: "¿Qué pasa si la tasa de descuento es cero?", a: "Si la tasa de descuento es cero, el valor presente es igual al valor futuro, ya que no hay descuento aplicado por el paso del tiempo." },
    { q: "¿Es lo mismo valor presente que valor actual neto?", a: "No exactamente; el valor presente se refiere al valor actual de una cantidad futura, mientras que el valor actual neto (VPN) resta la inversión inicial de la suma de los valores presentes de los flujos futuros." },
  ],
  relatedCalculators: ["Calculadora de Valor Futuro", "Calculadora de Interés Compuesto", "Calculadora de VPN (Valor Presente Neto)", "Calculadora de Anualidades"],
  youMayLike: pickYouMayLike("present-value-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Valor Presente",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};