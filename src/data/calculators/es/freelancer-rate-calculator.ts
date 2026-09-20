// src/data/calculators/es/freelancer-rate-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const freelancerRateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Tarifa por Hora para Freelancers",
    metaDescription: "Calcula cuánto debes cobrar por hora como freelancer para alcanzar tu ingreso deseado, después de gastos del negocio e impuestos. Calculadora gratis.",
    canonicalSlug: "/es/business/freelancer-rate-calculator",
    ogTitle: "Calculadora de Tarifa por Hora para Freelancers",
    ogDescription: "Descubre cuánto cobrar por hora para alcanzar tu meta de ingresos como independiente.",
    twitterTitle: "Calculadora de Tarifa Freelance Gratis",
    twitterDescription: "Calcula tu tarifa por hora ideal como freelancer, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Tarifa por Hora para Freelancers te muestra exactamente cuánto necesitas cobrar a tus clientes para alcanzar tu ingreso anual deseado, después de restar gastos del negocio e impuestos, según tus horas facturables reales.",
  },

  about: {
    text: `Muchos freelancers cobran tarifas basadas en lo que otros cobran o en una cifra arbitraria, sin considerar sus gastos reales, impuestos, ni el hecho de que no todas las horas trabajadas son facturables a un cliente.

Esta calculadora parte de tu ingreso anual deseado (lo que quieres llevarte a casa), le suma tus gastos anuales del negocio (software, equipo, seguros) y ajusta por tu tasa de impuesto estimada, para obtener el ingreso bruto que realmente necesitas generar. Luego divide ese monto entre tus horas facturables reales por semana y semanas trabajadas al año, dándote la tarifa por hora y diaria que necesitas cobrar.

La clave está en usar horas facturables reales, no el total de horas trabajadas — el tiempo dedicado a administración, búsqueda de clientes, formación y otras tareas no facturables debe excluirse del cálculo, ya que no genera ingreso directo.`,
  },

  formula: {
    formula: "Tarifa por Hora = (Ingreso Deseado + Gastos del Negocio) ÷ (1 − Tasa de Impuesto) ÷ Horas Facturables Anuales",
    variables: [
      { symbol: "Ingreso Bruto Necesario", meaning: "(Ingreso Deseado + Gastos) ÷ (1 − Tasa de Impuesto)" },
      { symbol: "Horas Facturables Anuales", meaning: "Horas Facturables por Semana × Semanas Laborables por Año" },
    ],
    explanation: "Se suma el ingreso deseado más los gastos del negocio, se ajusta hacia arriba para cubrir los impuestos, y ese ingreso bruto necesario se divide entre las horas facturables totales del año para obtener la tarifa por hora.",
    interpretation: "Por ejemplo, con un ingreso deseado de $60,000, gastos de $5,000, una tasa de impuesto del 25%, 25 horas facturables por semana y 48 semanas laborables, necesitas cobrar aproximadamente $72/hora.",
  },

  steps: [
    "Ingresa el ingreso anual neto que deseas ganar.",
    "Ingresa tus gastos anuales del negocio (software, equipo, seguros, etc.).",
    "Ingresa cuántas horas realmente facturas a clientes por semana.",
    "Ingresa cuántas semanas trabajas al año, después de restar vacaciones.",
    "Ingresa tu tasa estimada de impuesto (renta + trabajo autónomo).",
    "Haz clic en Calcular.",
    "Revisa tu tarifa por hora, tarifa diaria e ingreso bruto necesario.",
  ],

  examples: [
    { inputs: "Ingreso Deseado: $60,000, Gastos: $5,000, Horas: 25/semana, Semanas: 48, Impuesto: 25%", result: "Tarifa por Hora: ~$72", explanation: "Un freelancer típico con carga de trabajo moderada y gastos de negocio bajos." },
    { inputs: "Ingreso Deseado: $80,000, Gastos: $10,000, Horas: 30/semana, Semanas: 46, Impuesto: 30%", result: "Tarifa por Hora: ~$93", explanation: "Un freelancer con mayor meta de ingreso y más gastos operativos." },
    { inputs: "Ingreso Deseado: $40,000, Gastos: $2,000, Horas: 20/semana, Semanas: 50, Impuesto: 20%", result: "Tarifa por Hora: ~$53", explanation: "Un freelancer a tiempo parcial con pocas horas facturables por semana." },
  ],

  practicalUses: [
    "Establecer una tarifa por hora basada en tus finanzas reales, no en suposiciones",
    "Verificar si tu tarifa actual realmente cubre tus gastos e impuestos",
    "Planear cuántas horas facturables necesitas para alcanzar tu meta de ingreso",
    "Negociar tarifas con clientes con un número respaldado por cálculos reales",
    "Comparar el impacto de trabajar menos horas facturables en tu tarifa necesaria",
    "Ajustar tu tarifa al tomar más tiempo libre o vacaciones",
  ],

  expertTips: [
    "Sé realista con tus horas facturables — la mayoría de los freelancers solo pueden facturar entre 50% y 70% de sus horas totales trabajadas, el resto se va en administración y búsqueda de clientes.",
    "Incluye todos tus gastos del negocio, no solo los obvios: software, equipo, seguros, contabilidad, marketing y espacio de trabajo.",
    "Revisa y ajusta tu tarifa al menos una vez al año, conforme cambien tus gastos, experiencia o demanda de mercado.",
    "Considera cobrar por proyecto en vez de por hora una vez que tengas una tarifa de referencia clara — puede ser más rentable para trabajo eficiente.",
    "No compitas solo por precio; una tarifa calculada correctamente refleja el valor real de sostener tu negocio a largo plazo.",
  ],

  commonMistakes: [
    { mistake: "Usar el total de horas trabajadas en vez de horas facturables", fix: "Solo cuenta las horas que realmente facturas a clientes; excluye tiempo en administración, marketing o formación." },
    { mistake: "Olvidar incluir gastos del negocio en el cálculo", fix: "Software, equipo, seguros y otros costos deben sumarse a tu ingreso deseado antes de calcular la tarifa." },
    { mistake: "No considerar el impuesto sobre trabajo autónomo", fix: "Como freelancer, generalmente pagas una tasa de impuesto más alta que un empleado tradicional — inclúyela en tu cálculo." },
    { mistake: "Fijar la tarifa una vez y nunca revisarla", fix: "Revisa tu tarifa periódicamente conforme cambien tus gastos, experiencia y demanda del mercado." },
    { mistake: "Asumir 52 semanas laborables completas al año", fix: "Resta vacaciones, días festivos y tiempo entre proyectos para obtener una cifra realista de semanas trabajadas." },
  ],

  faq: [
    { q: "¿Cómo calculo mi tarifa por hora como freelancer?", a: "Suma tu ingreso deseado y tus gastos del negocio, ajusta por tu tasa de impuesto, y divide ese total entre tus horas facturables anuales reales." },
    { q: "¿Cuántas horas facturables debo contar por semana?", a: "Generalmente entre 50% y 70% de tus horas totales trabajadas, ya que el resto se dedica a tareas no facturables como administración y búsqueda de clientes." },
    { q: "¿Debo incluir los impuestos al calcular mi tarifa por hora?", a: "Sí, como freelancer o trabajador independiente generalmente pagas una tasa de impuesto más alta que un empleado, así que debes ajustar tu tarifa hacia arriba para cubrirla." },
    { q: "¿Qué gastos del negocio debo incluir en el cálculo?", a: "Incluye software, equipo, seguros, contabilidad, marketing, espacio de trabajo y cualquier otro costo recurrente necesario para operar tu negocio." },
    { q: "¿Cómo afecta el número de semanas trabajadas a mi tarifa?", a: "Menos semanas trabajadas (por vacaciones o tiempo libre) significa que necesitas cobrar más por hora para alcanzar el mismo ingreso anual." },
    { q: "¿Es mejor cobrar por hora o por proyecto como freelancer?", a: "Cobrar por hora es más simple al empezar, pero cobrar por proyecto puede ser más rentable una vez que tengas una tarifa de referencia clara y trabajes de forma eficiente." },
    { q: "¿Cómo sé si mi tarifa actual es suficiente?", a: "Compara tu tarifa actual con la calculada aquí — si es menor, probablemente no estás cubriendo completamente tus gastos, impuestos y meta de ingreso deseada." },
    { q: "¿Debo cobrar la misma tarifa a todos los clientes?", a: "No necesariamente; puedes ajustar tu tarifa según la complejidad del proyecto, la urgencia, o el valor que aportas a cada cliente específico." },
  ],

  relatedCalculators: ["Calculadora de Impuesto sobre Trabajo Autónomo", "Calculadora de Punto de Equilibrio", "Calculadora de Margen de Ganancia", "Calculadora de Presupuesto"],

  youMayLike: pickYouMayLike("freelancer-rate-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Tarifa por Hora para Freelancers",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};