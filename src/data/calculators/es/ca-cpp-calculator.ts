import { pickYouMayLike } from "../../calculator-pool";

export const caCppCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de CPP Canadá 2026 — Cuánto Pago de Pensión (RPC)",
    metaDescription: "Calcula cuánto te descuentan de CPP (RPC) en Canadá según tu sueldo. Calculadora gratis con la tasa de 2026, la exención básica y el tope de ingresos pensionables (YMPE) del CRA.",
    canonicalSlug: "/es/finance/ca-cpp-calculator",
    ogTitle: "Calculadora de CPP (Pensión de Canadá) — Cuánto Se Descuenta de tu Sueldo",
    ogDescription: "Descubre cuánto pagas tú y cuánto paga tu empleador de CPP este año, con el tope máximo de 2026.",
    twitterTitle: "Calculadora de CPP Canadá 2026",
    twitterDescription: "Calcula tu descuento de CPP (RPC) por sueldo, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de CPP te muestra cuánto se descuenta de tu sueldo para el Plan de Pensiones de Canadá (CPP / RPC), incluyendo la parte que paga tu empleador — para que entiendas tu recibo de pago y sepas si ya llegaste al tope anual.",
  },

  about: {
    text: `El CPP (Canada Pension Plan), conocido en francés como RPC, es el plan de pensión público de Canadá al que casi todos los trabajadores con empleo o trabajo por cuenta propia deben contribuir. Se descuenta automáticamente de cada cheque de pago y tu empleador aporta una cantidad igual.

Esta calculadora estima cuánto te corresponde pagar en un año según tu ingreso bruto anual, aplicando la exención básica y el tope de ingresos pensionables (YMPE) del CRA para 2026.

Para 2026, la exención básica es de $3,500 (no se paga CPP sobre los primeros $3,500 de ingreso), la tasa de aporte es de 5.95% para empleado y empleador por separado, y el máximo de ingresos pensionables (YMPE) es de $74,600. Esto da una contribución máxima de $4,230.45 por parte del empleado (y otro tanto del empleador).

Limitaciones: esta calculadora no incluye la contribución adicional CPP2 (que aplica a ingresos entre $74,600 y $85,000 desde 2024), no considera trabajadores por cuenta propia que pagan ambas partes, ni situaciones con más de un empleador. Verifica siempre las cifras oficiales en el sitio del CRA.`,
  },

  formula: {
    formula: "Contribución CPP = mín(Ingreso Bruto − Exención Básica, YMPE − Exención Básica) × Tasa de Aporte",
    variables: [
      { symbol: "Exención Básica", meaning: "$3,500 — no se paga CPP sobre esta parte del ingreso" },
      { symbol: "YMPE", meaning: "Máximo de Ingresos Pensionables — $74,600 para 2026" },
      { symbol: "Tasa de Aporte", meaning: "5.95% para el empleado, igualado por el empleador" },
    ],
    explanation: "Se resta la exención básica de $3,500 al ingreso bruto anual, el resultado se limita al YMPE de $74,600, y a esa cifra se le aplica la tasa de 5.95% tanto para el empleado como para el empleador.",
    interpretation: "Por ejemplo, con un ingreso bruto de $60,000, los ingresos pensionables son $60,000 − $3,500 = $56,500, y la contribución es 5.95% × $56,500 = $3,361.75, igualada por tu empleador.",
  },

  steps: [
    "Ingresa tu ingreso bruto anual en dólares canadienses (CAD).",
    "Haz clic en Calcular.",
    "Revisa tus ingresos pensionables después de la exención básica.",
    "Revisa cuánto aportas tú y cuánto aporta tu empleador.",
    "Revisa la contribución total combinada de CPP.",
  ],

  examples: [
    { inputs: "Ingreso Bruto: $45,000", result: "Contribución del Empleado: ~$2,466.75", explanation: "Un trabajador con salario promedio, por debajo del tope del YMPE." },
    { inputs: "Ingreso Bruto: $74,600 o más", result: "Contribución del Empleado: $4,230.45 (máximo)", explanation: "Cualquier ingreso igual o mayor al YMPE llega al tope máximo de 2026." },
    { inputs: "Ingreso Bruto: $30,000", result: "Contribución del Empleado: ~$1,576.75", explanation: "Ingreso más bajo, con menos impacto de la exención básica proporcionalmente." },
  ],

  practicalUses: [
    "Entender por qué se descuenta cierta cantidad de CPP en tu recibo de pago",
    "Verificar si ya alcanzaste el tope máximo de CPP en el año",
    "Comparar cuánto pagarías con un aumento de sueldo",
    "Planear tu presupuesto mensual conociendo tu descuento neto",
    "Estimar tu contribución si tienes más de un trabajo (cada empleador aplica la exención por separado)",
    "Prepararte antes de declarar impuestos, ya que el exceso de aporte se puede recuperar",
  ],

  expertTips: [
    "Si trabajas para más de un empleador en el mismo año, cada uno aplica la exención básica de $3,500 por separado, así que podrías pagar de más en total y recuperarlo al declarar impuestos.",
    "Una vez que alcanzas la contribución máxima anual ($4,230.45 en 2026), tu empleador debe dejar de descontarte CPP el resto del año.",
    "Esta calculadora no incluye el CPP2, que se aplica automáticamente si tu ingreso supera el YMPE de $74,600.",
    "Si eres trabajador por cuenta propia, pagas ambas partes (empleado y empleador), lo que duplica la tasa efectiva a 11.90%.",
    "Revisa tu Estado de Cuenta de Contribuciones en tu cuenta de Mi Service Canada para confirmar que tus aportes están siendo registrados correctamente.",
  ],

  commonMistakes: [
    { mistake: "Pensar que el CPP se descuenta desde el primer dólar ganado", fix: "Los primeros $3,500 de ingreso anual están exentos; el CPP solo se aplica sobre lo que ganas por encima de esa cifra." },
    { mistake: "No notar que ya llegaste al tope máximo anual", fix: "Revisa tus recibos de pago cerca de fin de año — una vez alcanzado el máximo, no deberían seguir descontándote CPP." },
    { mistake: "Confundir CPP con impuesto sobre la renta", fix: "El CPP es una contribución separada para tu pensión futura, distinta del impuesto federal y provincial." },
    { mistake: "No declarar el exceso de aporte al tener varios empleos", fix: "Si trabajaste para más de un empleador y superaste el máximo combinado, reclama el reembolso en tu declaración de impuestos." },
    { mistake: "Ignorar el CPP2 si tu ingreso supera el YMPE", fix: "Si ganas más de $74,600, revisa también la contribución adicional CPP2 aparte de esta calculadora." },
  ],

  faq: [
    { q: "¿Qué es el CPP en Canadá?", a: "El CPP (Canada Pension Plan, o RPC en francés) es el plan de pensión público al que casi todos los trabajadores canadienses contribuyen durante su vida laboral, para recibir un ingreso de jubilación más adelante." },
    { q: "¿Cuánto CPP me descuentan de mi sueldo en 2026?", a: "En 2026 se descuenta el 5.95% de tu ingreso, después de restar la exención básica de $3,500, hasta un máximo de $4,230.45 al año." },
    { q: "¿Todos tienen que pagar CPP?", a: "Sí, prácticamente todos los trabajadores empleados y por cuenta propia de 18 años o más fuera de Quebec deben contribuir al CPP (en Quebec existe el QPP, un plan equivalente)." },
    { q: "¿Cuál es el máximo de CPP que puedo pagar en 2026?", a: "El máximo para el empleado en 2026 es $4,230.45, igualado por el empleador; para trabajadores por cuenta propia el máximo combinado es $8,460.90." },
    { q: "¿Qué es la exención básica del CPP?", a: "Es la parte de tu ingreso anual, $3,500, sobre la cual no se calcula ninguna contribución de CPP." },
    { q: "¿Qué es el YMPE?", a: "El YMPE (Year's Maximum Pensionable Earnings) es el tope de ingresos sobre el que se calcula el CPP regular; para 2026 es $74,600." },
    { q: "¿Qué pasa si trabajo para dos empleadores?", a: "Cada empleador aplica la exención y el tope por separado, así que podrías terminar pagando más del máximo anual entre ambos trabajos, y el exceso se te reembolsa al declarar tus impuestos." },
    { q: "¿El CPP es lo mismo que el impuesto sobre la renta?", a: "No, el CPP es una contribución independiente destinada a tu pensión futura, mientras que el impuesto sobre la renta financia los servicios del gobierno." },
    { q: "¿Qué es el CPP2?", a: "Es una contribución adicional introducida en 2024 que aplica solo a ingresos entre el YMPE ($74,600) y el YAMPE ($85,000 en 2026), con una tasa del 4%." },
    { q: "¿Cuánto CPP paga un trabajador independiente (self-employed)?", a: "Los trabajadores por cuenta propia pagan tanto la parte del empleado como la del empleador, con una tasa combinada de 11.90% en 2026." },
    { q: "¿A qué edad puedo empezar a recibir mi pensión de CPP?", a: "Puedes empezar a recibirla a partir de los 60 años con una reducción, a los 65 años al monto estándar, o retrasarla hasta los 70 años para recibir un monto mayor." },
    { q: "¿Puedo recuperar el CPP que pagué de más?", a: "Sí, si contribuiste de más porque tuviste varios empleadores en el año, el exceso se acredita o reembolsa cuando presentas tu declaración de impuestos." },
  ],

  relatedCalculators: ["Calculadora de Salario Neto en Canadá", "Calculadora de EI (Seguro de Empleo)", "Calculadora de Impuesto sobre la Renta Canadá", "Calculadora de Jubilación"],

  youMayLike: pickYouMayLike("ca-cpp-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de CPP (Pensión de Canadá)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};