// src/data/calculators/es/uk-pension-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const ukPensionCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Pensión Reino Unido 2026",
    metaDescription: "Proyecta tu fondo de pensión del Reino Unido incluyendo alivio fiscal y contribuciones del empleador. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/uk-pension-calculator",
    ogTitle: "Calculadora de Pensión Reino Unido",
    ogDescription: "Descubre cuánto tendrás en tu fondo de pensión al jubilarte.",
    twitterTitle: "Calculadora de Pensión UK 2026",
    twitterDescription: "Calcula tu fondo de pensión al instante.",
  },
  hero: {
    text: "La Calculadora de Pensión del Reino Unido proyecta tu fondo de pensión combinando tus contribuciones, el alivio fiscal automático de tasa básica y las contribuciones de tu empleador, capitalizado hasta tu edad de jubilación.",
  },
  about: {
    text: `Las pensiones laborales en el Reino Unido combinan tus propias contribuciones, las de tu empleador, y un alivio fiscal automático del gobierno (generalmente a la tasa básica del 20%) que aumenta el valor de tus aportes.

Esta calculadora suma tu contribución como empleado, la contribución de tu empleador, y el alivio fiscal correspondiente, capitalizando el total al rendimiento esperado durante los años que faltan hasta tu edad de jubilación.

Limitaciones: esta calculadora asume una tasa de rendimiento constante y no modela el límite anual de aportación con alivio fiscal (Annual Allowance) ni el límite de por vida; verifica esos límites con HMRC si tus contribuciones son elevadas.`,
  },
  formula: {
    formula: "Fondo Proyectado = (Fondo Actual + Contribuciones Anuales Compuestas) × (1 + Retorno)^Años",
    variables: [
      { symbol: "Alivio Fiscal", meaning: "El gobierno agrega automáticamente el equivalente a la tasa básica de impuesto (20%) sobre tu contribución personal" },
      { symbol: "Contribución del Empleador", meaning: "El porcentaje de tu salario que tu empleador aporta adicionalmente a tu pensión" },
    ],
    explanation: "Se calculan las contribuciones anuales combinadas (tuyas más alivio fiscal, más las del empleador) y se suman al fondo actual, capitalizando el total al rendimiento esperado durante los años restantes hasta la jubilación.",
    interpretation: "Por ejemplo, con un salario de £35,000, aportando el 5% (con alivio fiscal) y el empleador aportando 3%, durante 35 años a un retorno del 6%, el fondo proyectado puede superar las £300,000.",
  },
  steps: [
    "Ingresa tu edad actual, edad de jubilación y fondo de pensión actual.",
    "Ingresa tu salario anual y los porcentajes de contribución tuyo y de tu empleador.",
    "Ingresa el retorno anual esperado.",
    "Haz clic en Calcular para ver tu fondo proyectado, contribuciones, aportes del empleador y alivio fiscal agregado.",
  ],
  examples: [
    { inputs: "Edad: 30→65, Fondo Actual: £10,000, Salario: £35,000, Empleado: 5%, Empleador: 3%, Retorno: 6%", result: "Fondo Proyectado: ~£320,000", explanation: "Un trabajador de mediana edad con contribuciones estándar durante 35 años." },
    { inputs: "Edad: 25→68, Fondo Actual: £0, Salario: £28,000, Empleado: 8%, Empleador: 3%, Retorno: 7%", result: "Fondo Proyectado: ~£450,000", explanation: "Un trabajador joven que empieza a ahorrar temprano con un porcentaje de contribución alto." },
    { inputs: "Edad: 45→65, Fondo Actual: £80,000, Salario: £50,000, Empleado: 5%, Empleador: 4%, Retorno: 5%", result: "Fondo Proyectado: ~£280,000", explanation: "Un ahorrador de mitad de carrera con un fondo existente sustancial." },
  ],
  practicalUses: [
    "Verificar si tus contribuciones actuales van encaminadas para una jubilación cómoda",
    "Comparar el impacto de aumentar tu porcentaje de contribución personal",
    "Entender cuánto valor agrega el alivio fiscal automático a tus aportes",
    "Evaluar ofertas de trabajo comparando los porcentajes de contribución del empleador",
    "Planear a qué edad podrías jubilarte según tu proyección actual",
  ],
  expertTips: [
    "El alivio fiscal automático significa que cada £80 que aportas se convierte en £100 en tu pensión si pagas la tasa básica de impuesto — es dinero gratis del gobierno.",
    "Muchos empleadores igualan o superan tu contribución hasta cierto porcentaje — aporta al menos lo suficiente para maximizar esa contribución del empleador.",
    "Existe un límite anual de aportación con alivio fiscal (Annual Allowance); verifica el monto vigente con HMRC si contribuyes cantidades elevadas.",
    "Revisa tu proyección de pensión periódicamente y ajusta tus contribuciones si no vas encaminado a tu meta de jubilación.",
  ],
  commonMistakes: [
    { mistake: "No aportar lo suficiente para maximizar la contribución del empleador", fix: "Verifica el porcentaje de contribución equivalente que ofrece tu empleador y aporta al menos esa cantidad para no dejar dinero sobre la mesa." },
    { mistake: "Olvidar incluir el alivio fiscal en tu proyección", fix: "El alivio fiscal aumenta automáticamente el valor de tu contribución personal; esta calculadora ya lo incluye en el resultado." },
    { mistake: "Usar una tasa de rendimiento poco realista", fix: "Usa una tasa conservadora (5-7%) basada en promedios históricos en lugar de rendimientos excepcionales de años específicos." },
  ],
  faq: [
    { q: "¿Cómo funciona el alivio fiscal en las pensiones del Reino Unido?", a: "El gobierno agrega automáticamente el equivalente a tu tasa de impuesto (generalmente 20% para contribuyentes de tasa básica) sobre tu contribución personal a la pensión." },
    { q: "¿Cuánto debería contribuir a mi pensión en el Reino Unido?", a: "Muchos expertos sugieren un mínimo del 12-15% combinado entre tu contribución y la del empleador, aunque depende de tu edad y meta de jubilación." },
    { q: "¿A qué edad puedo acceder a mi pensión privada?", a: "Generalmente a partir de los 55 años, aumentando a 57 años a partir de 2028, según las reglas actuales del Reino Unido." },
    { q: "¿Qué es la Contribución Mínima de Auto-Inscripción (Auto-Enrolment)?", a: "Es el mínimo legal combinado de contribución (empleado más empleador) que los empleadores del Reino Unido deben ofrecer a empleados elegibles, actualmente 8% del salario calificado." },
    { q: "¿Cómo afecta el alivio fiscal a contribuyentes de tasa alta?", a: "Los contribuyentes de tasa alta o adicional pueden reclamar alivio fiscal adicional a través de su declaración de autoevaluación, más allá del 20% automático." },
    { q: "¿Qué es el Límite Anual de Aportación (Annual Allowance)?", a: "Es el monto máximo que puedes aportar a tu pensión cada año fiscal recibiendo alivio fiscal; superar este límite puede generar un cargo fiscal adicional." },
    { q: "¿Mi empleador está obligado a contribuir a mi pensión?", a: "Sí, bajo las reglas de auto-inscripción del Reino Unido, los empleadores deben contribuir al menos el 3% del salario calificado para empleados elegibles." },
    { q: "¿Qué pasa si cambio de trabajo con una pensión existente?", a: "Generalmente puedes transferir tu pensión existente a un nuevo esquema o mantenerla separada; consulta con un asesor financiero para la mejor opción según tu situación." },
    { q: "¿El rendimiento de mi pensión está garantizado?", a: "No, la mayoría de las pensiones de contribución definida invierten en fondos cuyo rendimiento varía según el mercado; esta calculadora usa una tasa esperada, no garantizada." },
    { q: "¿Cómo puedo aumentar mi fondo de pensión proyectado?", a: "Aumentando tu porcentaje de contribución personal, empezando a ahorrar antes, o verificando si tu empleador iguala contribuciones adicionales." },
    { q: "¿Esta calculadora considera el Límite de Por Vida (Lifetime Allowance)?", a: "No, esta calculadora no modela límites de por vida; verifica las reglas vigentes con HMRC si tu fondo proyectado es muy elevado." },
  ],
  relatedCalculators: ["Calculadora de Impuesto sobre la Renta Reino Unido", "Calculadora de Seguro Nacional", "Calculadora de Interés Compuesto", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("uk-pension-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Pensión del Reino Unido",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};