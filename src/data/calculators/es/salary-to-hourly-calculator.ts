// src/data/calculators/es/salary-to-hourly-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const salaryToHourlyCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Salario Anual a Tarifa por Hora 2026",
    metaDescription: "Convierte tu salario anual en tarifa por hora, diaria, semanal y mensual. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/salary-to-hourly-calculator",
    ogTitle: "Calculadora de Salario a Hora",
    ogDescription: "Convierte tu salario anual en tarifa por hora al instante.",
    twitterTitle: "Calculadora de Salario a Tarifa por Hora",
    twitterDescription: "Convierte tu salario anual en tarifa horaria, diaria y más.",
  },
  hero: {
    text: "La Calculadora de Salario a Hora convierte tu salario anual en una tarifa por hora, diaria, semanal y mensual, según tus horas trabajadas por semana y semanas trabajadas por año.",
  },
  about: {
    text: `Conocer tu tarifa por hora equivalente a tu salario anual es útil para comparar ofertas de trabajo, negociar contratos freelance, o simplemente entender cuánto ganas realmente por cada hora trabajada.

Esta calculadora recibe tu salario anual, las horas que trabajas por semana y las semanas que trabajas por año, y calcula automáticamente tu tarifa equivalente por hora, día, semana y mes.

Limitaciones: esta calculadora asume un salario bruto (antes de impuestos) y no considera beneficios adicionales como seguro médico, bonos o tiempo libre pagado, que también forman parte de tu compensación total.`,
  },
  formula: {
    formula: "Tarifa por Hora = Salario Anual / (Horas por Semana × Semanas por Año)",
    variables: [
      { symbol: "Horas por Semana", meaning: "Número típico de horas que trabajas cada semana (comúnmente 40)" },
      { symbol: "Semanas por Año", meaning: "Número de semanas trabajadas al año (52 si no tomas tiempo libre no pagado)" },
    ],
    explanation: "Se divide el salario anual entre el total de horas trabajadas al año (horas por semana multiplicadas por semanas por año) para obtener la tarifa por hora; a partir de esa tarifa, se derivan las tarifas diaria, semanal y mensual multiplicando por las horas u horas equivalentes correspondientes.",
    interpretation: "Por ejemplo, un salario anual de $52,000 con 40 horas por semana y 52 semanas al año equivale a una tarifa de $25 por hora.",
  },
  steps: [
    "Ingresa tu salario anual antes de impuestos.",
    "Ingresa tus horas trabajadas por semana.",
    "Ingresa tus semanas trabajadas por año (52 si trabajas todo el año).",
    "Haz clic en Calcular para ver tu tarifa por hora, día, semana y mes.",
  ],
  examples: [
    { inputs: "Salario: $52,000, Horas/Semana: 40, Semanas/Año: 52", result: "Tarifa por Hora: $25", explanation: "Un cálculo estándar para un empleo de tiempo completo típico." },
    { inputs: "Salario: $80,000, Horas/Semana: 40, Semanas/Año: 50", result: "Tarifa por Hora: $40", explanation: "Restar 2 semanas de vacaciones no pagadas aumenta ligeramente la tarifa por hora equivalente." },
    { inputs: "Salario: $45,000, Horas/Semana: 30, Semanas/Año: 52", result: "Tarifa por Hora: aproximadamente $28.85", explanation: "Un puesto de medio tiempo con menos horas semanales tiene una tarifa por hora más alta para el mismo salario." },
  ],
  practicalUses: [
    "Comparar una oferta de salario anual contra un trabajo freelance o por hora",
    "Negociar tu tarifa como contratista independiente basándote en un salario equivalente",
    "Entender cuánto ganas realmente por hora en tu empleo actual",
    "Comparar ofertas de trabajo con distintos horarios o semanas laborales",
    "Calcular tu tarifa diaria para facturar proyectos de corta duración",
  ],
  expertTips: [
    "Al comparar un salario de empleado con una tarifa de freelancer, recuerda que los freelancers generalmente deben cubrir sus propios beneficios e impuestos adicionales.",
    "Si tomas vacaciones no pagadas, reduce tus 'semanas por año' en el cálculo para obtener una tarifa por hora más precisa de lo que realmente ganas trabajando.",
    "Esta calculadora usa salario bruto; tu tarifa neta por hora (después de impuestos) será menor al resultado mostrado.",
    "Para negociar contratos freelance, considera agregar un margen adicional sobre tu tarifa calculada para cubrir beneficios que ya no recibes como empleado.",
  ],
  commonMistakes: [
    { mistake: "Usar 52 semanas cuando en realidad tomas vacaciones no pagadas", fix: "Resta las semanas de vacaciones no pagadas de tu cálculo de 'semanas por año' para obtener una tarifa por hora más precisa." },
    { mistake: "Comparar directamente un salario bruto con una tarifa freelance sin ajustar por beneficios", fix: "Los freelancers deben cubrir sus propios beneficios e impuestos, por lo que una tarifa freelance equivalente generalmente debe ser mayor que la tarifa por hora de un empleado." },
    { mistake: "Olvidar que el resultado es un salario bruto, no neto", fix: "Recuerda que esta tarifa por hora es antes de impuestos; tu ingreso real disponible después de impuestos será menor." },
    { mistake: "Usar un número de horas por semana poco realista", fix: "Usa tus horas típicas reales trabajadas, no solo las horas 'oficiales' de tu contrato, para un cálculo más preciso." },
  ],
  faq: [
    { q: "¿Cómo convierto mi salario anual a una tarifa por hora?", a: "Divide tu salario anual entre el total de horas trabajadas al año (horas por semana multiplicadas por semanas trabajadas por año)." },
    { q: "¿Cuánto es $52,000 al año por hora?", a: "Con 40 horas por semana y 52 semanas al año, $52,000 anuales equivalen a $25 por hora." },
    { q: "¿Cómo calculo mi tarifa diaria a partir de mi salario anual?", a: "Multiplica tu tarifa por hora por el número de horas que trabajas en un día típico (comúnmente 8 horas)." },
    { q: "¿Esta calculadora muestra mi salario bruto o neto por hora?", a: "Muestra tu tarifa bruta (antes de impuestos); tu ingreso neto real por hora será menor una vez aplicados los impuestos correspondientes." },
    { q: "¿Cómo ajusto el cálculo si tomo vacaciones no pagadas?", a: "Reduce el número de 'semanas por año' en el cálculo para reflejar solo las semanas que realmente trabajas y recibes pago." },
    { q: "¿Cómo comparo un salario anual con una tarifa freelance por hora?", a: "Convierte el salario anual a tarifa por hora con esta calculadora, y luego considera que los freelancers generalmente necesitan una tarifa mayor para cubrir beneficios e impuestos adicionales." },
    { q: "¿Cuánto es un salario de $80,000 al año por hora?", a: "Con 40 horas por semana y 52 semanas al año, $80,000 anuales equivalen aproximadamente a $38.46 por hora." },
    { q: "¿Cómo calculo mi tarifa mensual a partir de mi salario anual?", a: "Divide tu salario anual entre 12 para obtener una tarifa mensual promedio, o usa el resultado de esta calculadora que ya incluye ese cálculo." },
    { q: "¿Qué pasa si trabajo menos de 40 horas por semana?", a: "Ingresa tus horas reales trabajadas por semana; con menos horas, tu tarifa por hora equivalente será mayor para el mismo salario anual." },
    { q: "¿Esta calculadora considera bonos o beneficios adicionales?", a: "No, esta calculadora solo convierte el salario base anual; bonos, seguro médico y otros beneficios deben considerarse por separado en tu compensación total." },
    { q: "¿Cómo negocio mi tarifa como contratista independiente usando esta calculadora?", a: "Calcula la tarifa por hora equivalente a tu salario deseado, y luego agrega un margen adicional para cubrir impuestos de autoempleo y beneficios que ya no recibirías como contratista." },
    { q: "¿Cuál es la diferencia entre 50 y 52 semanas trabajadas al año?", a: "Usar 50 semanas (asumiendo 2 semanas de vacaciones no pagadas) da una tarifa por hora ligeramente más alta que usar 52 semanas, ya que el mismo salario se divide entre menos horas trabajadas." },
    { q: "¿Cómo calculo mi tarifa semanal a partir de mi salario anual?", a: "Divide tu salario anual entre el número de semanas que trabajas al año, o usa directamente el resultado de tarifa semanal de esta calculadora." },
    { q: "¿Es útil esta calculadora para comparar ofertas de trabajo con distintos horarios?", a: "Sí, convertir cada oferta a una tarifa por hora equivalente te permite comparar de forma justa trabajos con distintas horas semanales o semanas laborales al año." },
  ],
  relatedCalculators: ["Calculadora de Salario Neto", "Calculadora de Horas Extra", "Calculadora de Impuesto Federal sobre la Renta", "Calculadora de Presupuesto"],
  youMayLike: pickYouMayLike("salary-to-hourly-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Salario a Hora",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};