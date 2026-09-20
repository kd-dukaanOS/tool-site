// src/data/calculators/es/hourly-to-salary-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const hourlyToSalaryCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Salario por Hora a Anual 2026",
    metaDescription: "Convierte tu tarifa por hora en salario semanal, mensual y anual según tus horas trabajadas. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/hourly-to-salary-calculator",
    ogTitle: "Calculadora de Salario por Hora",
    ogDescription: "Convierte tu pago por hora en salario semanal, mensual y anual.",
    twitterTitle: "Calculadora de Salario por Hora 2026",
    twitterDescription: "Convierte tu tarifa por hora a salario anual al instante.",
  },
  hero: {
    text: "La Calculadora de Salario por Hora convierte tu tarifa por hora en salario semanal, mensual y anual, según las horas que trabajas por semana y las semanas que trabajas por año.",
  },
  about: {
    text: `Muchos trabajadores cobran por hora, pero necesitan comparar su ingreso con puestos que ofrecen un salario anual fijo, o simplemente quieren saber cuánto ganan al mes o al año.

Esta calculadora multiplica tu tarifa por hora por las horas que trabajas cada semana, y ese resultado por las semanas que trabajas al año, mostrando tu salario semanal, mensual y anual estimado.

Limitaciones: esta calculadora asume un horario constante todas las semanas; no ajusta automáticamente por horas extra, bonos, o semanas con menos horas por vacaciones no pagadas salvo que las ingreses manualmente en "semanas por año".`,
  },
  formula: {
    formula: "Salario Anual = Tarifa por Hora × Horas por Semana × Semanas por Año",
    variables: [
      { symbol: "Salario Semanal", meaning: "Tarifa por hora multiplicada por las horas trabajadas en la semana" },
      { symbol: "Salario Mensual", meaning: "Salario anual dividido entre 12 meses" },
    ],
    explanation: "Se multiplica la tarifa por hora por las horas trabajadas por semana para obtener el salario semanal, y ese resultado se multiplica por las semanas trabajadas al año para obtener el salario anual; el salario mensual se calcula dividiendo el anual entre 12.",
    interpretation: "Por ejemplo, con una tarifa de $25 por hora, 40 horas semanales y 52 semanas al año, el salario anual sería de $52,000.",
  },
  steps: [
    "Ingresa tu tarifa por hora.",
    "Ingresa las horas que trabajas por semana.",
    "Ingresa las semanas que trabajas por año (52 si no tomas tiempo libre no pagado).",
    "Haz clic en Calcular para ver tu salario semanal, mensual y anual.",
  ],
  examples: [
    { inputs: "Tarifa: $25/hora, Horas: 40/semana, Semanas: 52", result: "Salario Anual: $52,000", explanation: "Un trabajador de tiempo completo estándar sin tiempo libre no pagado." },
    { inputs: "Tarifa: $18/hora, Horas: 30/semana, Semanas: 50", result: "Salario Anual: $27,000", explanation: "Un trabajador de medio tiempo con dos semanas de vacaciones no pagadas al año." },
    { inputs: "Tarifa: $40/hora, Horas: 40/semana, Semanas: 52", result: "Salario Anual: $83,200", explanation: "Un profesional independiente o contratista con tarifa por hora más alta." },
  ],
  practicalUses: [
    "Comparar una oferta de trabajo por hora contra un puesto con salario anual fijo",
    "Calcular tu ingreso mensual aproximado para hacer un presupuesto",
    "Negociar tu tarifa por hora sabiendo el equivalente en salario anual deseado",
    "Estimar tu ingreso si cambias de horas de tiempo completo a medio tiempo",
    "Verificar si una tarifa por hora ofrecida cumple con tu meta de ingreso anual",
  ],
  expertTips: [
    "Si tomas tiempo libre no pagado, usa un número menor a 52 en 'semanas por año' para una estimación más realista de tu ingreso anual.",
    "Recuerda que este cálculo es antes de impuestos; tu ingreso neto (take-home) será menor según tu tasa de impuesto aplicable.",
    "Si trabajas horas extra regularmente, calcula ese ingreso por separado ya que suele pagarse a una tarifa mayor (comúnmente 1.5x).",
    "Compara siempre el salario anual equivalente al evaluar ofertas de trabajo por hora versus puestos asalariados con beneficios distintos.",
  ],
  commonMistakes: [
    { mistake: "Asumir 52 semanas de trabajo sin considerar tiempo libre no pagado", fix: "Ajusta el número de semanas por año si tomas vacaciones no pagadas o trabajas de forma estacional." },
    { mistake: "Olvidar que el resultado es el salario bruto, no el neto", fix: "El salario calculado es antes de impuestos y deducciones; tu pago neto real será menor." },
    { mistake: "No incluir horas extra en el cálculo cuando aplica regularmente", fix: "Si trabajas horas extra de forma consistente, calcula ese ingreso adicional por separado a su tarifa correspondiente." },
  ],
  faq: [
    { q: "¿Cómo convierto mi tarifa por hora a salario anual?", a: "Multiplica tu tarifa por hora por las horas que trabajas a la semana, y ese resultado por las semanas que trabajas al año." },
    { q: "¿Cuánto es $25 por hora al año?", a: "Trabajando 40 horas por semana durante 52 semanas, $25 por hora equivale a un salario anual de $52,000." },
    { q: "¿Este cálculo es antes o después de impuestos?", a: "Es el salario bruto (antes de impuestos); tu pago neto real dependerá de las deducciones fiscales aplicables a tu situación." },
    { q: "¿Cómo calculo mi salario mensual a partir de mi tarifa por hora?", a: "Calcula primero tu salario anual multiplicando tarifa por hora, horas semanales y semanas al año, y luego divide ese total entre 12." },
    { q: "¿Qué pasa si trabajo menos de 52 semanas al año?", a: "Ajusta el campo 'semanas por año' al número real que trabajas, considerando vacaciones no pagadas o trabajo estacional." },
    { q: "¿Debo incluir las horas extra en este cálculo?", a: "Esta calculadora asume un horario fijo; si trabajas horas extra regularmente, calcula ese ingreso adicional por separado, ya que suele pagarse a una tarifa mayor." },
    { q: "¿Cómo comparo una oferta de trabajo por hora con una de salario fijo?", a: "Convierte la tarifa por hora a su equivalente de salario anual usando esta calculadora y compáralo directamente con el salario anual ofrecido." },
    { q: "¿Cuál es el salario anual de un trabajo de medio tiempo?", a: "Depende de tu tarifa por hora y horas semanales; ingresa tus horas reales (por ejemplo 20-30 por semana) en esta calculadora para obtener el estimado." },
    { q: "¿Esta calculadora considera bonos o comisiones?", a: "No, esta calculadora solo convierte tu tarifa por hora base; los bonos o comisiones deben sumarse por separado a tu ingreso total." },
    { q: "¿Cuántas horas se consideran tiempo completo?", a: "Generalmente 40 horas por semana se consideran tiempo completo en la mayoría de los países, aunque puede variar según la industria o el país." },
    { q: "¿Cómo afecta trabajar 4 días a la semana a mi salario anual?", a: "Si trabajas menos horas totales por semana (por ejemplo 32 en lugar de 40), tu salario anual será proporcionalmente menor, a menos que tu tarifa por hora aumente para compensarlo." },
  ],
  relatedCalculators: ["Calculadora de Salario a Por Hora", "Calculadora de Sueldo Neto", "Calculadora de Aumento de Sueldo", "Calculadora de Comisión"],
  youMayLike: pickYouMayLike("hourly-to-salary-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Salario por Hora",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};