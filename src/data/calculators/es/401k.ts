import { pickYouMayLike } from "../../calculator-pool";

export const fourOhOneKCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de 401(k) — Proyección de Ahorros para la Jubilación",
    metaDescription: "Calculadora 401(k) gratis con aporte del empleador. Proyecta tu saldo de jubilación según tu salario, tasa de aporte, match y retorno esperado. Actualizada con los límites del IRS 2026.",
    canonicalSlug: "/es/finance/401k-calculator",
    ogTitle: "Calculadora de 401(k) — Proyecta tu Saldo de Jubilación",
    ogDescription: "Mira tu saldo proyectado de 401(k) al jubilarte, incluyendo el match del empleador y el crecimiento compuesto.",
    twitterTitle: "Calculadora de 401(k) Gratis",
    twitterDescription: "Proyecta tu saldo de 401(k) al jubilarte, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de 401(k) proyecta tu saldo de jubilación a partir de tus ahorros actuales, salario, tasa de aporte, match del empleador y retorno de inversión esperado — para que veas hoy si vas bien encaminado y cuánto vale realmente el match.",
  },

  about: {
    text: `Un 401(k) es un plan de retiro patrocinado por el empleador en Estados Unidos que te permite aportar un porcentaje de cada cheque antes de impuestos, muchas veces con un match del empleador añadido. Esta calculadora proyecta tu saldo al jubilarte, componiendo año tras año tus aportes, el match del empleador y el crecimiento de la inversión.

También muestra las tres partes por separado: lo que tú aportas, lo que tu empleador añade gratis, y lo que aporta el crecimiento compuesto — porque el crecimiento suele ser el mayor motor del saldo final, no los aportes en sí.

Para 2026, el límite de aporte del empleado según el IRS es $24,500 (menores de 50 años), $32,500 (50 años o más), y $35,750 (60-63 años) bajo el catch-up mejorado de SECURE 2.0. El límite combinado empleado + empleador es $72,000 ($80,000 a los 50+, $83,250 entre 60-63).

Limitaciones: esta calculadora asume una tasa de aporte constante y un retorno promedio fijo — no modela la volatilidad del mercado, los topes del límite de aporte, los períodos de vesting, comisiones ni impuestos al retirar.`,
  },

  formula: {
    formula: "Saldoₙ = (Saldoₙ₋₁ + Aporte del Empleado + Match del Empleador) × (1 + Tasa de Retorno)",
    variables: [
      { symbol: "Aporte del Empleado", meaning: "Salario anual × tu % de aporte" },
      { symbol: "Match del Empleador", meaning: "Salario × mín(tu %, % límite del match) × % de match del empleador" },
      { symbol: "Tasa de Retorno", meaning: "Retorno anual esperado de la inversión" },
    ],
    explanation: "Cada año, tu aporte y el match del empleador se suman al saldo, el salario crece según tu tasa de aumento esperada, y el saldo completo se compone al retorno asumido — repetido hasta la edad de jubilación.",
    interpretation: "Por ejemplo, comenzando con $25,000 y un salario de $75,000, con 8% de aporte, 50% de match hasta el 6%, 3% de crecimiento salarial y 7% de retorno durante 30 años, se proyecta a aproximadamente $850,000, con el crecimiento representando la mayor parte de ese total.",
  },

  steps: [
    "Ingresa tu edad actual y tu edad objetivo de jubilación.",
    "Ingresa tu saldo actual de 401(k).",
    "Ingresa tu salario anual.",
    "Ingresa tu tasa de aporte como porcentaje del salario.",
    "Ingresa el porcentaje de match de tu empleador y el porcentaje de salario en el que está topado.",
    "Ingresa el crecimiento salarial anual esperado y el retorno de inversión esperado.",
    "Haz clic en Calcular.",
    "Revisa tu saldo proyectado, aportes, match y crecimiento.",
  ],

  examples: [
    { inputs: "Edad 30→65, Saldo: $25,000, Salario: $75,000, Aporte: 8%, Match: 50% hasta 6%, Crecimiento: 3%, Retorno: 7%", result: "Saldo Proyectado: ~$850,000", explanation: "Un ahorrador típico de mitad de carrera que aporta por encima del umbral del match." },
    { inputs: "Edad 25→65, Saldo: $0, Salario: $55,000, Aporte: 6%, Match: 100% hasta 3%, Crecimiento: 3%, Retorno: 7%", result: "Saldo Proyectado: ~$540,000", explanation: "Empezar temprano con un aporte modesto igual se compone de forma significativa en 40 años." },
    { inputs: "Edad 45→65, Saldo: $150,000, Salario: $100,000, Aporte: 12%, Match: 50% hasta 6%, Crecimiento: 2%, Retorno: 6%", result: "Saldo Proyectado: ~$680,000", explanation: "Un comienzo más tardío con una tasa de aporte más alta para ponerse al día." },
  ],

  practicalUses: [
    "Verificar si tus aportes actuales van encaminados para la jubilación",
    "Ver exactamente cuánto dinero gratis suma el match del empleador con el tiempo",
    "Comparar resultados con distintas tasas de aporte antes de ajustar tu nómina",
    "Planear una edad de jubilación según un saldo objetivo",
    "Entender cuánto del saldo final proviene del crecimiento versus de los aportes",
    "Probar el impacto de un aumento o bono en las proyecciones a largo plazo",
    "Revisar tu progreso cada año junto a un plan de jubilación más amplio",
  ],

  expertTips: [
    "Aporta siempre al menos lo suficiente para obtener el match completo del empleador — es un retorno inmediato del 50-100% antes de cualquier crecimiento del mercado.",
    "Pequeños aumentos en la tasa de aporte se componen de forma significativa a lo largo de décadas; incluso 1-2% más puede sumar decenas de miles al jubilarte.",
    "Empezar antes importa más que aportar más después — el tiempo en el mercado es la palanca más grande en esta fórmula.",
    "Revisa tu tasa de aporte cada vez que recibas un aumento; subirla junto con tu ingreso mantiene estable tu tasa de ahorro.",
    "Los límites de catch-up de 2026 ($8,000 a los 50+, $11,250 entre 60-63) valen la pena si vas atrasado en tus ahorros más adelante en tu carrera.",
    "Esta proyección no considera la volatilidad del mercado — trata el resultado como un promedio a largo plazo, no una garantía.",
  ],

  commonMistakes: [
    { mistake: "Aportar menos del umbral del match del empleador", fix: "Aporta al menos hasta el límite del match — cualquier cifra menor renuncia permanentemente a dinero gratis del empleador." },
    { mistake: "Asumir que solo los aportes construyen el saldo", fix: "El crecimiento compuesto suele ser el componente más grande en una carrera larga — revisa la cifra de crecimiento en tus resultados." },
    { mistake: "Ignorar los límites de aporte del IRS para 2026", fix: "Mantén tus tasas de aporte dentro de los límites anuales de $24,500 (menores de 50), $32,500 (50+) o $35,750 (60-63)." },
    { mistake: "Usar un retorno esperado poco realista", fix: "Los promedios históricos del mercado bursátil se modelan comúnmente entre 6-8% antes de inflación; evita inflar proyecciones con tasas demasiado optimistas." },
    { mistake: "No actualizar el saldo tras un cambio de trabajo", fix: "Actualiza tu saldo actual y salario cada vez que cambies de empleo para mantener las proyecciones precisas." },
  ],

  faq: [
    { q: "¿Qué es un 401(k) y cómo funciona?", a: "Es un plan de retiro patrocinado por el empleador que te permite aportar un porcentaje de cada cheque, generalmente antes de impuestos, que tu empleador puede igualar parcialmente, y el dinero crece con impuestos diferidos hasta que lo retiras." },
    { q: "¿Cuánto debería aportar a mi 401(k)?", a: "La mayoría de los asesores sugieren aportar al menos lo suficiente para obtener el match completo del empleador, y luego avanzar hacia el 10-15% del ingreso (incluyendo ese match) conforme avanza tu carrera." },
    { q: "¿Qué es el match del empleador en un 401(k)?", a: "Es dinero extra que tu empleador añade a tu cuenta según tus propios aportes, comúnmente estructurado como 50% de lo que aportas hasta el 6% de tu salario." },
    { q: "¿Cuál es el límite de aporte al 401(k) para 2026?", a: "El límite del IRS para empleados es $24,500 para menores de 50 años, $32,500 para 50 años o más, y $35,750 para 60-63 años bajo el catch-up mejorado de SECURE 2.0." },
    { q: "¿Cuál es la diferencia entre un Roth 401(k) y un 401(k) tradicional?", a: "Los aportes al 401(k) tradicional son antes de impuestos y reducen tu ingreso gravable ahora, con retiros gravados en la jubilación; los aportes al Roth 401(k) son después de impuestos, con retiros calificados libres de impuestos en la jubilación." },
    { q: "¿Qué pasa con mi 401(k) si dejo mi trabajo?", a: "Normalmente puedes dejarlo en el plan de tu antiguo empleador, transferirlo (rollover) al 401(k) de tu nuevo empleador, transferirlo a una IRA, o retirarlo en efectivo, aunque retirarlo antes de los 59½ suele generar impuestos y una multa." },
    { q: "¿Puedo retirar dinero de mi 401(k) antes de tiempo?", a: "Sí, pero los retiros antes de los 59½ generalmente generan impuesto sobre la renta ordinario más una multa del 10% por retiro anticipado, con excepciones limitadas como dificultad económica o ciertos gastos médicos." },
    { q: "¿Qué es el vesting en un 401(k)?", a: "El vesting determina cuánto de los aportes de tu empleador realmente te pertenece; tus propios aportes siempre son 100% tuyos, pero el match del empleador puede adquirirse gradualmente a lo largo de varios años." },
    { q: "¿Puedo tener más de un 401(k)?", a: "Sí, especialmente después de cambiar de trabajo, pero tu aporte anual total en todos los planes sigue limitado por el tope de aportes electivos del IRS." },
    { q: "¿Un 401(k) es antes o después de impuestos?", a: "Un 401(k) tradicional usa aportes antes de impuestos; un Roth 401(k), donde esté disponible, usa aportes después de impuestos — muchos planes te permiten elegir o dividir entre ambos." },
    { q: "¿Qué pasa si no aporto lo suficiente para obtener el match completo?", a: "Pierdes permanentemente la parte no igualada del aporte de tu empleador — no se añade retroactivamente después, así que es efectivamente ingreso perdido." },
    { q: "¿A qué edad puedo retirar de un 401(k) sin multa?", a: "Generalmente a los 59½, aunque la 'regla de los 55' puede permitir retiros sin multa desde los 55 si dejas ese empleador específico en o después del año en que cumples 55." },
    { q: "¿Qué son las distribuciones mínimas requeridas (RMD)?", a: "Son retiros anuales obligatorios de cuentas 401(k) tradicionales a partir de los 73 años, calculados con las tablas de expectativa de vida del IRS; no hacer una puede generar una multa significativa." },
    { q: "¿Cómo se grava mi 401(k) cuando me jubilo?", a: "Los retiros del 401(k) tradicional se gravan como ingreso ordinario en el año en que se retiran; los retiros calificados del Roth 401(k), incluyendo el crecimiento, están libres de impuestos porque los aportes ya fueron gravados." },
  ],

  relatedCalculators: ["Calculadora de Jubilación", "Calculadora Roth IRA", "Calculadora IRA Tradicional", "Calculadora de Ingreso de Jubilación"],

  youMayLike: pickYouMayLike("401k-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de 401(k)",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};