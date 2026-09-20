// src/data/calculators/es/debt-payoff-calculator.ts
// NOTE: real slug is "debt-payoff-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const debtPayoffCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Pago de Deudas: Bola de Nieve vs Avalancha 2026",
    metaDescription: "Compara el método bola de nieve y avalancha en todas tus deudas. Calcula tiempo de pago e interés total gratis.",
    canonicalSlug: "/es/finance/debt-payoff-calculator",
    ogTitle: "Calculadora de Pago de Deudas",
    ogDescription: "Compara bola de nieve vs avalancha y descubre cuál te conviene más.",
    twitterTitle: "Calculadora Bola de Nieve vs Avalancha",
    twitterDescription: "Compara ambos métodos de pago de deudas al instante.",
  },
  hero: {
    text: "La Calculadora de Pago de Deudas compara el método bola de nieve y el método avalancha en todas tus deudas a la vez, mostrándote tiempo de pago, interés total y cuál estrategia te conviene más.",
  },
  about: {
    text: `Elegir cómo pagar varias deudas al mismo tiempo (tarjetas de crédito, préstamos personales) puede ser confuso: existen dos estrategias populares, bola de nieve y avalancha, y cada una tiene ventajas distintas.

Esta calculadora simula mes a mes el pago de hasta 3 deudas con su saldo, TAE y pago mínimo, aplicando tu pago extra mensual según la estrategia elegida (bola de nieve o avalancha), y te muestra el tiempo total, el interés pagado y el orden en que se liquidan.

Limitaciones: asume tasas de interés fijas durante todo el período y no incluye comisiones por mora ni cambios en el pago mínimo con el tiempo; para más de 3 deudas, agrúpalas o usa el promedio ponderado.`,
  },
  formula: {
    formula: "Bola de Nieve = ordenar por menor Saldo | Avalancha = ordenar por mayor TAE",
    variables: [
      { symbol: "Pago Extra", meaning: "Monto mensual adicional a los pagos mínimos, dirigido a la deuda prioritaria" },
      { symbol: "Diferencia de Método", meaning: "Diferencia en interés total pagado entre bola de nieve y avalancha" },
    ],
    explanation: "En ambos métodos se pagan los mínimos de todas las deudas; el pago extra se destina a la deuda con menor saldo (bola de nieve) o mayor TAE (avalancha) hasta liquidarla, y luego ese pago se traslada a la siguiente deuda según el mismo criterio.",
    interpretation: "Por ejemplo, con 3 deudas y $200 extra al mes, la avalancha suele pagar menos interés total, mientras que la bola de nieve liquida la primera deuda más rápido, lo cual puede ser más motivador.",
  },
  steps: [
    "Ingresa el saldo, TAE y pago mínimo de cada deuda (hasta 3).",
    "Ingresa tu pago extra mensual disponible.",
    "Selecciona la estrategia: avalancha o bola de nieve.",
    "Haz clic en Calcular.",
    "Revisa el tiempo de pago, interés total y el orden en que se liquidan las deudas.",
  ],
  examples: [
    { inputs: "Deuda 1: $3,000 al 22%, Deuda 2: $8,000 al 9%, Extra: $200, Estrategia: Avalancha", result: "Interés total menor, deuda 1 se paga primero", explanation: "La avalancha prioriza la TAE más alta (22%) para minimizar interés." },
    { inputs: "Mismos datos, Estrategia: Bola de Nieve", result: "Deuda 1 (menor saldo) se paga primero, interés total ligeramente mayor", explanation: "La bola de nieve prioriza el saldo más pequeño para generar motivación." },
    { inputs: "3 deudas activas, Extra: $0", result: "Ambos métodos tardan lo mismo sin pago extra", explanation: "Sin pago extra, la diferencia entre métodos depende solo de los mínimos y TAE de cada deuda." },
  ],
  practicalUses: [
    "Comparar bola de nieve vs avalancha con tus propias deudas reales",
    "Calcular cuánto interés total pagarás según la estrategia elegida",
    "Ver en qué mes se liquida cada deuda con tu pago extra actual",
    "Decidir si priorizar ahorro de interés (avalancha) o motivación rápida (bola de nieve)",
    "Simular el efecto de aumentar tu pago extra mensual en el tiempo total",
  ],
  expertTips: [
    "Si tu prioridad es ahorrar el máximo de interés, elige avalancha; si necesitas motivación viendo deudas desaparecer rápido, elige bola de nieve.",
    "La diferencia en interés entre ambos métodos suele ser pequeña si tus TAE son parecidas entre deudas; en ese caso, la bola de nieve no cuesta casi nada extra.",
    "Aumentar el pago extra mensual reduce el tiempo total mucho más rápido que cambiar de estrategia.",
    "Revisa el resultado 'Diferencia de Método' para saber exactamente cuánto te cuesta o ahorra elegir bola de nieve sobre avalancha.",
  ],
  commonMistakes: [
    { mistake: "Elegir bola de nieve sin revisar cuánto interés extra cuesta", fix: "Compara el resultado de 'Diferencia de Método' entre ambas estrategias antes de decidir." },
    { mistake: "No incluir todas las deudas activas en la simulación", fix: "Agrega todas tus deudas con saldo mayor a cero para obtener un resultado real." },
    { mistake: "Dejar el pago extra en cero cuando sí tienes margen disponible", fix: "Cualquier pago extra, aunque sea pequeño, reduce notablemente el tiempo total de pago." },
    { mistake: "Cambiar de estrategia constantemente a mitad del proceso", fix: "Mantén la estrategia elegida hasta el final para obtener los resultados de tiempo e interés estimados." },
  ],
  faq: [
    { q: "¿Cuál es la diferencia entre bola de nieve y avalancha para pagar deudas?", a: "La bola de nieve prioriza pagar primero la deuda con menor saldo para generar motivación; la avalancha prioriza la deuda con mayor TAE para minimizar el interés total pagado." },
    { q: "¿Qué método de pago de deudas ahorra más dinero?", a: "El método avalancha generalmente ahorra más interés total porque ataca primero la deuda con la tasa más alta." },
    { q: "¿Qué método de pago de deudas es más rápido psicológicamente?", a: "La bola de nieve suele sentirse más rápida porque liquida deudas pequeñas primero, generando motivación visible más pronto." },
    { q: "¿Cómo se calcula el tiempo para pagar todas mis deudas?", a: "Se simula mes a mes el pago de cada deuda aplicando los mínimos y el pago extra según la estrategia elegida, hasta que todos los saldos llegan a cero." },
    { q: "¿Necesito un pago extra para usar esta calculadora?", a: "No es obligatorio, pero sin pago extra el tiempo de pago depende solo de los mínimos y la diferencia entre estrategias será mínima." },
    { q: "¿Puedo comparar más de 3 deudas en esta calculadora?", a: "Esta calculadora admite hasta 3 deudas; para más, puedes agrupar deudas similares o usar la tasa promedio ponderada." },
    { q: "¿Qué es la TAE en el contexto de pago de deudas?", a: "La TAE (Tasa Anual Equivalente) es el costo anual del crédito expresado en porcentaje, e incluye el interés que pagas por mantener el saldo." },
    { q: "¿Cómo afecta el pago mínimo al tiempo total de pago?", a: "Pagar solo el mínimo extiende significativamente el tiempo total y aumenta el interés pagado; cualquier extra reduce ambos." },
    { q: "¿Cuál método debo elegir si tengo tarjetas de crédito con TAE similares?", a: "Si las TAE son parecidas, la diferencia en interés entre bola de nieve y avalancha es mínima, así que puedes elegir bola de nieve por la motivación." },
    { q: "¿El método bola de nieve realmente funciona para salir de deudas?", a: "Sí, numerosos estudios de comportamiento financiero muestran que ver deudas pequeñas desaparecer rápido ayuda a mantener la disciplina de pago a largo plazo." },
    { q: "¿Cómo saber cuánto interés total pagaré con cada estrategia?", a: "Esta calculadora muestra el interés total exacto para avalancha y para bola de nieve, además de la diferencia entre ambas." },
    { q: "¿Qué pasa si liquido una deuda antes de tiempo?", a: "El pago mínimo de la deuda liquidada se redirige automáticamente a la siguiente deuda en el orden de la estrategia elegida." },
    { q: "¿Esta calculadora sirve para préstamos personales además de tarjetas de crédito?", a: "Sí, puedes usarla con cualquier tipo de deuda con saldo, TAE y pago mínimo, sin importar si es tarjeta de crédito o préstamo personal." },
    { q: "¿Cuál es mejor, pago de deudas o consolidación de deudas?", a: "El pago de deudas (bola de nieve o avalancha) no requiere un préstamo nuevo; la consolidación simplifica todo en un solo pago con una tasa nueva. Depende de si consigues una tasa de consolidación más baja que tu TAE promedio." },
  ],
  relatedCalculators: ["Calculadora de Avalancha de Deudas", "Calculadora de Consolidación de Deudas", "Calculadora de Bola de Nieve de Deudas", "Calculadora de Tarjeta de Crédito"],
  youMayLike: pickYouMayLike("debt-payoff-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Pago de Deudas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};