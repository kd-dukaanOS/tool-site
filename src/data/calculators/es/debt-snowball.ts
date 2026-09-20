// src/data/calculators/es/debt-snowball.ts
import { pickYouMayLike } from "../../calculator-pool";

export const debtSnowballCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Bola de Nieve — Plan para Pagar tus Deudas",
    metaDescription: "Calcula cuánto tiempo tardarás en salir de deudas usando el método bola de nieve. Calculadora gratis con orden de pago, interés total y cronograma.",
    canonicalSlug: "/es/finance/debt-snowball",
    ogTitle: "Calculadora de Bola de Nieve — Sal de Deudas Más Rápido",
    ogDescription: "Descubre en cuánto tiempo puedes quedar libre de deudas pagando primero las de menor saldo.",
    twitterTitle: "Calculadora de Bola de Nieve",
    twitterDescription: "Calcula tu plan para salir de deudas, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Bola de Nieve te muestra en cuánto tiempo puedes salir de todas tus deudas pagando primero la de menor saldo, y cuánto interés pagarás en total — para que tengas un plan claro y motivador.",
  },

  about: {
    text: `El método bola de nieve es una estrategia para pagar deudas donde ordenas todas tus deudas de menor a mayor saldo, pagas el mínimo en todas excepto la más pequeña, y destinas cualquier dinero extra a esa deuda hasta liquidarla. Luego pasas ese pago completo a la siguiente deuda más pequeña, y así sucesivamente — como una bola de nieve que crece al rodar.

Esta calculadora usa tus deudas, sus saldos, pagos mínimos y tasas de interés, junto con cualquier pago extra mensual que puedas aportar, para proyectar exactamente cuánto tiempo tomará quedar libre de deudas y en qué orden se pagará cada una.

La ventaja del método bola de nieve no es matemática (el método avalancha, que prioriza la tasa de interés más alta, suele ahorrar más dinero), sino psicológica: liquidar deudas pequeñas rápido genera impulso y motivación para seguir el plan hasta el final.`,
  },

  formula: {
    formula: "Orden de Pago = Deudas ordenadas de Menor a Mayor Saldo",
    variables: [
      { symbol: "Pago Extra", meaning: "Dinero adicional que aportas cada mes, sumado a los pagos mínimos" },
      { symbol: "Bola de Nieve", meaning: "El pago total de una deuda liquidada se suma al pago mínimo de la siguiente" },
    ],
    explanation: "Cada mes se pagan los mínimos de todas las deudas, más el pago extra dirigido a la deuda de menor saldo; al liquidarse esa deuda, su pago completo se redirige a la siguiente más pequeña.",
    interpretation: "Por ejemplo, con tres deudas de $500, $3,000 y $8,000 y un pago extra de $200 mensuales, la deuda de $500 se liquida en pocos meses, acelerando el ataque a las siguientes dos.",
  },

  steps: [
    "Agrega cada una de tus deudas con su nombre, saldo, pago mínimo y tasa de interés.",
    "Ingresa cuánto dinero extra puedes destinar cada mes, además de los pagos mínimos.",
    "Haz clic en Calcular.",
    "Revisa en cuánto tiempo quedarás libre de deudas y el interés total que pagarás.",
    "Revisa el orden en que se liquidará cada deuda y cuándo.",
  ],

  examples: [
    { inputs: "3 deudas: $800 (18%), $4,000 (22%), $12,000 (7%), Pago Extra: $250/mes", result: "Libre de Deudas En: ~3 años 4 meses", explanation: "La deuda pequeña de $800 se liquida primero, acelerando el ataque a las siguientes." },
    { inputs: "2 deudas: $2,000 (20%), $15,000 (6%), Pago Extra: $100/mes", result: "Libre de Deudas En: ~4 años 8 meses", explanation: "Un pago extra modesto sigue acortando el cronograma comparado con pagar solo mínimos." },
    { inputs: "4 deudas pequeñas y medianas, Pago Extra: $400/mes", result: "Libre de Deudas En: ~2 años", explanation: "Un pago extra alto combinado con varias deudas pequeñas acelera mucho el proceso." },
  ],

  practicalUses: [
    "Crear un plan claro y ordenado para salir de todas tus deudas",
    "Ver el impacto real de aumentar tu pago mensual extra",
    "Mantenerte motivado viendo cuándo se liquidará cada deuda",
    "Comparar tu cronograma actual contra pagar solo los mínimos",
    "Decidir cuánto reservar cada mes para acelerar tu salida de deudas",
  ],

  expertTips: [
    "Si tu prioridad es ahorrar el máximo de interés posible, considera el método avalancha (pagar primero la deuda con mayor tasa de interés) en lugar de la bola de nieve.",
    "La bola de nieve funciona mejor si necesitas motivación constante — ver deudas desaparecer rápido genera impulso psicológico.",
    "Cualquier pago extra, aunque sea pequeño, acorta significativamente tu cronograma total gracias al efecto compuesto de menos intereses acumulados.",
    "Evita adquirir nuevas deudas mientras ejecutas tu plan — cada deuda nueva reinicia el cálculo.",
    "Revisa tu plan cada vez que liquides una deuda para mantenerte enfocado en la siguiente.",
  ],

  commonMistakes: [
    { mistake: "Pagar solo los mínimos sin destinar nada extra", fix: "Incluso $50-100 extra al mes acelera notablemente tu fecha de libertad financiera." },
    { mistake: "Cambiar de estrategia a mitad de camino", fix: "Mantén el mismo método (bola de nieve o avalancha) de forma consistente para maximizar sus beneficios." },
    { mistake: "No redirigir el pago completo a la siguiente deuda tras liquidar una", fix: "El poder del método está en sumar el pago liberado al ataque de la siguiente deuda — no lo gastes en otra cosa." },
    { mistake: "Ignorar la tasa de interés al elegir el método", fix: "Si tienes una deuda con tasa muy alta, considera si el método avalancha te ahorraría más dinero en intereses." },
    { mistake: "No actualizar el plan si adquieres una deuda nueva", fix: "Recalcula tu cronograma cada vez que cambien tus saldos para mantener el plan realista." },
  ],

  faq: [
    { q: "¿Qué es el método bola de nieve para pagar deudas?", a: "Es una estrategia donde pagas primero la deuda con el saldo más pequeño mientras mantienes los pagos mínimos en las demás, y luego rediriges ese pago a la siguiente deuda más pequeña." },
    { q: "¿Cuál es la diferencia entre el método bola de nieve y el método avalancha?", a: "La bola de nieve prioriza la deuda con menor saldo; el método avalancha prioriza la deuda con mayor tasa de interés, que suele ahorrar más dinero pero motiva menos a corto plazo." },
    { q: "¿El método bola de nieve me hace pagar más intereses?", a: "Generalmente sí, un poco más que el método avalancha, pero muchas personas logran mantenerse en el plan gracias al impulso psicológico de liquidar deudas rápido." },
    { q: "¿Cuánto dinero extra debería destinar cada mes a mis deudas?", a: "Cualquier cantidad ayuda, pero mientras más destines por encima de los mínimos, más rápido saldrás de deudas y menos interés pagarás en total." },
    { q: "¿Debo incluir mi hipoteca en el plan de bola de nieve?", a: "Normalmente no; el método se enfoca en deudas de consumo como tarjetas de crédito, préstamos personales y de auto, que suelen tener tasas más altas." },
    { q: "¿Qué pasa si no puedo pagar los mínimos de todas mis deudas?", a: "Si no puedes cubrir los pagos mínimos, considera hablar con tus acreedores o buscar asesoría de crédito antes de intentar un plan de pago acelerado." },
    { q: "¿Cuánto tiempo toma salir de deudas con el método bola de nieve?", a: "Depende de tus saldos totales, tasas de interés y cuánto dinero extra destines cada mes; esta calculadora te da una estimación personalizada." },
    { q: "¿Puedo cambiar de método a mitad de mi plan?", a: "Sí, pero es más efectivo elegir un método y mantenerlo consistente, ya que cambiar constantemente puede confundir tu estrategia de pago." },
    { q: "¿El método bola de nieve funciona con deudas de tarjetas de crédito?", a: "Sí, es especialmente popular para tarjetas de crédito y préstamos personales, donde los saldos suelen ser más manejables que una hipoteca." },
    { q: "¿Qué pasa si liquido una deuda antes de lo esperado?", a: "Excelente — redirige inmediatamente ese pago completo a la siguiente deuda más pequeña de tu lista para acelerar aún más tu plan." },
  ],

  relatedCalculators: ["Calculadora de Deuda a Ingresos", "Calculadora de Presupuesto", "Calculadora de Tarjeta de Crédito", "Calculadora de Ahorro"],

  youMayLike: pickYouMayLike("debt-snowball"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Bola de Nieve",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};