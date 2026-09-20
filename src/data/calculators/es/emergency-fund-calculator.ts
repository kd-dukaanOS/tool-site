// src/data/calculators/es/emergency-fund-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const emergencyFundCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Fondo de Emergencia — Cuánto Debo Ahorrar",
    metaDescription: "Calcula cuánto necesitas en tu fondo de emergencia según tus gastos mensuales, tu progreso actual y cuánto tiempo te tomará alcanzar tu meta.",
    canonicalSlug: "/es/finance/emergency-fund-calculator",
    ogTitle: "Calculadora de Fondo de Emergencia",
    ogDescription: "Descubre tu meta de ahorro de emergencia y cuánto tiempo tomará alcanzarla.",
    twitterTitle: "Calculadora de Fondo de Emergencia Gratis",
    twitterDescription: "Calcula tu meta de fondo de emergencia, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Fondo de Emergencia te muestra cuánto dinero necesitas ahorrar según tus gastos esenciales mensuales, tu progreso actual, y cuánto tiempo te tomará alcanzar tu meta de seguridad financiera.",
  },

  about: {
    text: `Un fondo de emergencia es dinero reservado específicamente para cubrir gastos inesperados o la pérdida de ingresos — como la pérdida de empleo, una emergencia médica o una reparación urgente — sin necesidad de recurrir a deuda.

Esta calculadora usa tus gastos mensuales esenciales (vivienda, comida, servicios, transporte) y un período de cobertura objetivo, comúnmente entre 3 y 6 meses, para calcular tu meta total de ahorro. Luego, usando tus ahorros actuales y tu capacidad de ahorro mensual, proyecta cuánto tiempo te tomará alcanzar esa meta.

La mayoría de los asesores financieros recomienda 3 meses de gastos como mínimo para personas con ingreso estable y doble fuente de ingreso en el hogar, y 6 meses o más para trabajadores independientes, familias con un solo ingreso, o quienes tienen ingresos variables.`,
  },

  formula: {
    formula: "Monto Objetivo = Gastos Mensuales Esenciales × Meses Objetivo de Cobertura",
    variables: [
      { symbol: "Progreso Actual", meaning: "(Ahorros Actuales ÷ Monto Objetivo) × 100" },
      { symbol: "Tiempo para la Meta", meaning: "(Monto Objetivo − Ahorros Actuales) ÷ Capacidad de Ahorro Mensual" },
    ],
    explanation: "Se multiplican tus gastos mensuales esenciales por el número de meses de cobertura deseado para obtener tu meta total; luego se compara con tus ahorros actuales para calcular tu progreso y, usando tu capacidad de ahorro mensual, cuánto tiempo falta para alcanzarla.",
    interpretation: "Por ejemplo, con gastos de $3,000/mes, una meta de 6 meses ($18,000), ahorros actuales de $5,000 y capacidad de ahorro de $300/mes, tu progreso es 28% y te tomará aproximadamente 43 meses alcanzar la meta completa.",
  },

  steps: [
    "Ingresa tus gastos mensuales esenciales (vivienda, comida, servicios, transporte).",
    "Ingresa tus ahorros de emergencia actuales.",
    "Ingresa cuántos meses de cobertura quieres como meta (comúnmente 3-6).",
    "Ingresa cuánto puedes ahorrar cada mes hacia tu fondo de emergencia.",
    "Haz clic en Calcular.",
    "Revisa tu monto objetivo, progreso actual, cuánto falta por ahorrar y el tiempo estimado para alcanzar tu meta.",
  ],

  examples: [
    { inputs: "Gastos: $3,000/mes, Meta: 6 meses, Ahorros: $5,000, Capacidad: $300/mes", result: "Meta: $18,000, Progreso: 28%, Tiempo: ~43 meses", explanation: "Un plan de ahorro constante a largo plazo hacia una meta de 6 meses de cobertura." },
    { inputs: "Gastos: $2,000/mes, Meta: 3 meses, Ahorros: $4,000, Capacidad: $200/mes", result: "Meta: $6,000, Progreso: 67%, Tiempo: ~10 meses", explanation: "Una meta más modesta ya casi alcanzada, con poco tiempo restante." },
    { inputs: "Gastos: $4,500/mes, Meta: 6 meses, Ahorros: $0, Capacidad: $500/mes", result: "Meta: $27,000, Progreso: 0%, Tiempo: 54 meses", explanation: "Empezar desde cero requiere un plan de ahorro sostenido a largo plazo." },
  ],

  practicalUses: [
    "Definir cuánto necesitas realmente en tu fondo de emergencia",
    "Ver tu progreso actual hacia esa meta de forma clara",
    "Planear cuánto ahorrar cada mes para alcanzar tu meta en un plazo razonable",
    "Decidir si 3 o 6 meses de cobertura es más apropiado para tu situación",
    "Motivarte viendo el tiempo restante para lograr seguridad financiera",
  ],

  expertTips: [
    "Si tienes ingreso variable, eres trabajador independiente, o eres el único proveedor del hogar, apunta a 6 meses o más de cobertura en lugar de 3.",
    "Guarda tu fondo de emergencia en una cuenta de fácil acceso pero separada de tu cuenta corriente diaria, para evitar gastarlo por accidente.",
    "Empieza con una meta más pequeña y alcanzable (por ejemplo, $1,000) si estás empezando desde cero, antes de apuntar al monto completo.",
    "Automatiza una transferencia mensual fija hacia tu fondo de emergencia para hacer el ahorro consistente sin esfuerzo activo.",
    "Revisa y ajusta tu meta cada vez que tus gastos mensuales cambien significativamente.",
  ],

  commonMistakes: [
    { mistake: "No tener ningún fondo de emergencia antes de invertir agresivamente", fix: "Prioriza al menos 1-3 meses de gastos guardados antes de destinar dinero extra a inversiones de mayor riesgo." },
    { mistake: "Guardar el fondo de emergencia en inversiones volátiles", fix: "Mantén tu fondo en efectivo o cuentas de ahorro líquidas, no en acciones u otros activos que puedan perder valor cuando más lo necesites." },
    { mistake: "Usar el fondo de emergencia para gastos no urgentes", fix: "Reserva este dinero exclusivamente para verdaderas emergencias — pérdida de empleo, salud, reparaciones urgentes — no para compras planeadas." },
    { mistake: "Subestimar tus gastos mensuales esenciales reales", fix: "Incluye todos los gastos fijos necesarios (vivienda, comida, servicios, transporte, seguros), no solo los más obvios." },
    { mistake: "No reponer el fondo después de usarlo", fix: "Si usas parte de tu fondo de emergencia, prioriza reponerlo antes de otras metas de ahorro no esenciales." },
  ],

  faq: [
    { q: "¿Cuánto dinero debo tener en mi fondo de emergencia?", a: "Generalmente se recomienda entre 3 y 6 meses de gastos esenciales, dependiendo de la estabilidad de tu ingreso y tu situación familiar." },
    { q: "¿Dónde debo guardar mi fondo de emergencia?", a: "En una cuenta de ahorro líquida y de fácil acceso, separada de tu cuenta corriente diaria, para que esté disponible rápidamente sin arriesgar el capital." },
    { q: "¿Debo tener 3 o 6 meses de gastos ahorrados?", a: "3 meses puede ser suficiente si tienes ingreso estable y doble fuente en el hogar; 6 meses o más es más prudente si eres trabajador independiente o tienes ingreso variable." },
    { q: "¿El fondo de emergencia incluye todos mis gastos o solo los esenciales?", a: "Solo debe cubrir gastos esenciales como vivienda, comida, servicios y transporte — no gastos discrecionales como entretenimiento o suscripciones." },
    { q: "¿Cuánto tiempo debería tomarme construir mi fondo de emergencia?", a: "Depende de cuánto puedas ahorrar cada mes; un plan realista puede tomar entre 1 y 4 años dependiendo de tu capacidad de ahorro y el tamaño de tu meta." },
    { q: "¿Puedo invertir mi fondo de emergencia para que rinda más?", a: "No se recomienda invertirlo en activos volátiles; considera cuentas de ahorro de alto rendimiento que mantengan el dinero líquido y protegido." },
    { q: "¿Cuándo debo usar mi fondo de emergencia?", a: "Solo para verdaderas emergencias: pérdida de empleo, gastos médicos inesperados, reparaciones urgentes de vivienda o vehículo — no para gastos planeados." },
    { q: "¿Qué pasa si no tengo capacidad de ahorro mensual todavía?", a: "Empieza con lo que puedas, aunque sea una cantidad pequeña; cualquier ahorro consistente, por modesto que sea, te acerca gradualmente a tu meta." },
  ],

  relatedCalculators: ["Calculadora de Presupuesto", "Calculadora de Bola de Nieve", "Calculadora de Ahorro", "Calculadora de Deuda a Ingresos"],

  youMayLike: pickYouMayLike("emergency-fund-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Fondo de Emergencia",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};