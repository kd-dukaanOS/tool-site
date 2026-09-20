// src/data/calculators/es/simple-interest-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const simpleInterestCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Interés Simple 2026",
    metaDescription: "Calcula el interés simple ganado o pagado sobre un principal fijo. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/simple-interest-calculator",
    ogTitle: "Calculadora de Interés Simple",
    ogDescription: "Calcula el interés simple de un préstamo o depósito al instante.",
    twitterTitle: "Calculadora de Interés Simple",
    twitterDescription: "Calcula interés simple, monto total e interés mensual al instante.",
  },
  hero: {
    text: "La Calculadora de Interés Simple calcula el interés ganado o pagado sobre un monto principal fijo, además del monto total, interés mensual e interés diario, según la tasa y el plazo.",
  },
  about: {
    text: `El interés simple se calcula únicamente sobre el monto principal original, a diferencia del interés compuesto donde el interés generado se suma al principal y también genera interés adicional con el tiempo.

Esta calculadora recibe el monto principal, la tasa de interés anual y el plazo en años, y calcula el interés total generado, el monto total (principal más interés), y el desglose de interés mensual y diario.

Limitaciones: el interés simple es menos común en productos financieros modernos (la mayoría usa interés compuesto); esta calculadora es útil principalmente para préstamos específicos, bonos, o cálculos educativos que usan interés simple.`,
  },
  formula: {
    formula: "Interés Simple = (P × R × T) / 100",
    variables: [
      { symbol: "P", meaning: "Principal — el monto original invertido o prestado" },
      { symbol: "R, T", meaning: "R es la tasa de interés anual en porcentaje, T es el tiempo en años" },
    ],
    explanation: "Se multiplica el principal por la tasa de interés anual y por el número de años, dividiendo el resultado entre 100 para obtener el interés total generado durante todo el plazo; a diferencia del interés compuesto, este interés no se reinvierte ni genera interés adicional sobre sí mismo.",
    interpretation: "Por ejemplo, con un principal de $100,000, una tasa del 8.5% anual y un plazo de 5 años, el interés simple total es de $42,500, y el monto final es de $142,500.",
  },
  steps: [
    "Ingresa el monto principal.",
    "Ingresa la tasa de interés anual.",
    "Ingresa el plazo en años.",
    "Haz clic en Calcular para ver el interés total, el monto total, y el interés mensual y diario.",
  ],
  examples: [
    { inputs: "Principal: $100,000, Tasa: 8.5%, Plazo: 5 años", result: "Interés Total: $42,500, Monto Total: $142,500", explanation: "Un cálculo estándar de interés simple sobre un préstamo o depósito a mediano plazo." },
    { inputs: "Principal: $10,000, Tasa: 6%, Plazo: 1 año", result: "Interés Total: $600, Monto Total: $10,600", explanation: "Un cálculo simple a corto plazo con una tasa moderada." },
    { inputs: "Principal: $50,000, Tasa: 10%, Plazo: 3 años", result: "Interés Total: $15,000, Monto Total: $65,000", explanation: "A mayor tasa y plazo, mayor es el interés simple acumulado de forma lineal." },
  ],
  practicalUses: [
    "Calcular el interés de préstamos personales o de negocio que usan interés simple",
    "Estimar el rendimiento de un depósito a plazo fijo con interés simple",
    "Ayudar con tareas escolares de matemáticas financieras básicas",
    "Comparar el interés simple contra el interés compuesto para el mismo principal y plazo",
    "Calcular el interés diario o mensual de un préstamo a corto plazo",
  ],
  expertTips: [
    "El interés simple crece de forma lineal (constante cada año), a diferencia del interés compuesto que crece de forma exponencial con el tiempo.",
    "Para plazos cortos o montos pequeños, la diferencia entre interés simple y compuesto es mínima; para plazos largos, el interés compuesto genera significativamente más rendimiento (o costo).",
    "El interés simple es común en algunos bonos, préstamos personales de corto plazo, y ciertos productos financieros tradicionales.",
    "Si estás comparando dos opciones financieras, siempre verifica si usan interés simple o compuesto, ya que esto afecta significativamente el resultado final a largo plazo.",
  ],
  commonMistakes: [
    { mistake: "Confundir interés simple con interés compuesto", fix: "El interés simple se calcula solo sobre el principal original; el interés compuesto se calcula sobre el principal más el interés acumulado previamente." },
    { mistake: "Asumir que todas las cuentas de ahorro usan interés simple", fix: "La mayoría de las cuentas de ahorro e inversión modernas usan interés compuesto, no simple; verifica el tipo de interés de tu producto financiero específico." },
    { mistake: "Calcular el interés simple con una tasa mensual en lugar de anual", fix: "Esta calculadora usa la tasa de interés anual; si tienes una tasa mensual, multiplícala por 12 antes de ingresarla." },
    { mistake: "Ingresar un plazo poco realista para el contexto del cálculo", fix: "Usa un plazo razonable acorde al tipo de préstamo o depósito que estés calculando, generalmente entre unos meses y varios años." },
  ],
  faq: [
    { q: "¿Cómo se calcula el interés simple?", a: "Se usa la fórmula SI = (P × R × T) / 100, donde P es el principal, R es la tasa de interés anual, y T es el tiempo en años." },
    { q: "¿Cuál es la diferencia entre interés simple e interés compuesto?", a: "El interés simple se calcula solo sobre el principal original; el interés compuesto se calcula sobre el principal más el interés acumulado previamente, generando crecimiento exponencial." },
    { q: "¿Cómo calculo el monto total con interés simple?", a: "Se suma el interés total calculado al principal original para obtener el monto total final (Monto Total = Principal + Interés Total)." },
    { q: "¿Qué productos financieros usan interés simple?", a: "Algunos préstamos personales de corto plazo, ciertos bonos y algunos productos financieros tradicionales usan interés simple; la mayoría de cuentas de ahorro modernas usan interés compuesto." },
    { q: "¿Cómo calculo el interés simple mensual a partir de la tasa anual?", a: "Se divide el interés total anual entre 12 para obtener una estimación del interés mensual promedio generado durante el plazo." },
    { q: "¿El interés simple es mejor o peor que el interés compuesto para un inversionista?", a: "Para un inversionista, el interés compuesto generalmente es mejor porque genera mayor rendimiento con el tiempo; para un prestatario, el interés simple suele ser más económico que el compuesto." },
    { q: "¿Cómo afecta el plazo al interés simple total?", a: "El interés simple crece de forma lineal con el tiempo: duplicar el plazo duplica exactamente el interés total generado, manteniendo el principal y la tasa constantes." },
    { q: "¿Puedo usar esta calculadora para un préstamo personal?", a: "Sí, si tu préstamo usa interés simple (verifica los términos con tu prestamista), esta calculadora te mostrará el interés total y el monto final a pagar." },
    { q: "¿Cómo calculo el interés diario con esta fórmula?", a: "Se divide el interés total anual entre 365 (o el número de días del plazo) para obtener una estimación del interés diario promedio." },
    { q: "¿Qué pasa si la tasa de interés es 0%?", a: "Si la tasa es 0%, el interés total generado es cero, y el monto total simplemente es igual al principal original, sin ningún crecimiento." },
    { q: "¿El interés simple se usa en tarjetas de crédito?", a: "No, la mayoría de las tarjetas de crédito usan interés compuesto (generalmente diario o mensual), lo que puede generar un costo significativamente mayor que el interés simple para el mismo saldo." },
    { q: "¿Cómo comparo dos préstamos, uno con interés simple y otro compuesto?", a: "Calcula el monto total final de ambos usando sus respectivas fórmulas; para el mismo principal, tasa y plazo, el interés compuesto generalmente resulta en un monto total mayor que el interés simple." },
    { q: "¿Puedo usar plazos en meses en lugar de años en esta calculadora?", a: "Esta calculadora usa años como unidad de tiempo; para plazos en meses, convierte el número de meses a años (dividiendo entre 12) antes de ingresarlo." },
    { q: "¿Es común el interés simple en bonos gubernamentales?", a: "Algunos bonos usan interés simple para el pago de cupones periódicos, aunque muchos instrumentos financieros modernos utilizan estructuras de interés compuesto o variaciones más complejas." },
  ],
  relatedCalculators: ["Calculadora de Interés Compuesto", "Calculadora de Préstamo Personal", "Calculadora de Depósito Fijo (FD)", "Calculadora de Amortización de Préstamo"],
  youMayLike: pickYouMayLike("simple-interest-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Interés Simple",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};