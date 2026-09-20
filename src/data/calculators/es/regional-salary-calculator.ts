// src/data/calculators/es/regional-salary-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const regionalSalaryCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Salario — Convertir Pago por Hora, Mes y Año",
    metaDescription: "Convierte tu pago entre tarifa por hora, diario, semanal, quincenal, mensual y anual al instante. Calculadora gratis de conversión de salario.",
    canonicalSlug: "/es/finance/regional-salary-calculator",
    ogTitle: "Calculadora de Salario — Conversión Completa",
    ogDescription: "Convierte tu salario entre hora, semana, mes y año en segundos.",
    twitterTitle: "Calculadora de Salario Gratis",
    twitterDescription: "Convierte tu pago entre distintos períodos, gratis e instantáneo.",
  },

  hero: {
    text: "La Calculadora de Salario convierte tu pago entre tarifa por hora, diario, semanal, quincenal, mensual y anual — para que sepas exactamente cuánto ganas en cualquier período, a partir de tu salario anual o tu tarifa por hora.",
  },

  about: {
    text: `Comparar ofertas de trabajo o entender tu propio salario puede ser confuso cuando una oferta se expresa por hora y otra de forma anual. Esta calculadora convierte automáticamente entre ambos formatos y todos los períodos intermedios.

Ingresa tu salario anual o tu tarifa por hora, junto con tus horas trabajadas por semana y semanas trabajadas al año (por defecto 40 y 52), y la calculadora te muestra el desglose completo: por hora, diario, semanal, quincenal, mensual y anual.

Esta calculadora muestra montos brutos (antes de impuestos). Para calcular tu pago neto después de impuestos, usa la Calculadora de Salario Neto específica de tu país.`,
  },

  formula: {
    formula: "Salario Anual = Tarifa por Hora × Horas por Semana × Semanas por Año",
    variables: [
      { symbol: "Diario", meaning: "Semanal ÷ 5 (días laborables típicos)" },
      { symbol: "Quincenal", meaning: "Semanal × 2" },
      { symbol: "Mensual", meaning: "Anual ÷ 12" },
    ],
    explanation: "A partir de tu tarifa por hora o salario anual, se calculan todos los demás períodos usando tus horas por semana y semanas por año como base de conversión.",
    interpretation: "Por ejemplo, una tarifa de $25/hora con 40 horas por semana y 52 semanas al año equivale a $1,000 semanales, $4,333 mensuales, y $52,000 anuales.",
  },

  steps: [
    "Selecciona si estás ingresando un salario anual o una tarifa por hora.",
    "Ingresa el monto correspondiente.",
    "Ajusta las horas por semana si es diferente a 40 (opcional).",
    "Ajusta las semanas por año si es diferente a 52 (opcional).",
    "Haz clic en Calcular.",
    "Revisa el desglose completo: por hora, diario, semanal, quincenal, mensual y anual.",
  ],

  examples: [
    { inputs: "Tarifa por Hora: $25, Horas/Semana: 40, Semanas/Año: 52", result: "Anual: $52,000, Mensual: $4,333", explanation: "Conversión estándar de tarifa por hora a salario anual con jornada completa típica." },
    { inputs: "Salario Anual: $75,000, Horas/Semana: 40", result: "Por Hora: ~$36.06", explanation: "Conversión inversa de salario anual a tarifa por hora equivalente." },
    { inputs: "Tarifa por Hora: $18, Horas/Semana: 30, Semanas/Año: 50", result: "Anual: $27,000", explanation: "Un trabajo de medio tiempo con menos horas y semanas trabajadas al año." },
  ],

  practicalUses: [
    "Comparar una oferta de trabajo por hora con una oferta de salario anual",
    "Entender cuánto ganas realmente por semana o por mes",
    "Negociar tu salario conociendo el equivalente exacto en otro período",
    "Calcular tu pago si trabajas medio tiempo o con horas reducidas",
    "Verificar si una tarifa por hora ofrecida es competitiva frente a un salario anual",
  ],

  expertTips: [
    "Si comparas ofertas de trabajo, siempre convierte ambas al mismo período (por ejemplo, anual) antes de decidir cuál es mejor.",
    "Recuerda que estas cifras son brutas (antes de impuestos) — tu pago neto real será menor.",
    "Si trabajas horas extra regularmente, ajusta tus horas por semana para obtener una cifra anual más precisa.",
    "52 semanas por año asume trabajo continuo todo el año; ajusta esta cifra si tomas vacaciones sin goce de sueldo.",
  ],

  commonMistakes: [
    { mistake: "Comparar una tarifa por hora directamente con un salario anual sin convertir", fix: "Siempre convierte ambas cifras al mismo período antes de comparar ofertas de trabajo." },
    { mistake: "Asumir 52 semanas trabajadas cuando hay vacaciones sin goce de sueldo", fix: "Ajusta las semanas por año si tu empleo no cubre las 52 semanas completas del año." },
    { mistake: "Confundir cifras brutas con el pago neto real", fix: "Estas conversiones son sobre salario bruto; usa una calculadora de salario neto para ver tu pago después de impuestos." },
    { mistake: "No ajustar las horas por semana para un trabajo de medio tiempo", fix: "El valor por defecto es 40 horas — cámbialo si tu jornada es distinta para obtener cifras precisas." },
  ],

  faq: [
    { q: "¿Cómo convierto mi salario anual a tarifa por hora?", a: "Divide tu salario anual entre el número de horas trabajadas al año (horas por semana × semanas por año) para obtener tu tarifa equivalente por hora." },
    { q: "¿Cómo convierto mi tarifa por hora a salario anual?", a: "Multiplica tu tarifa por hora por las horas que trabajas por semana y luego por las semanas que trabajas al año." },
    { q: "¿Cuántas horas se consideran un trabajo de tiempo completo?", a: "Generalmente 40 horas por semana se considera tiempo completo, aunque esto puede variar según el país y el empleador." },
    { q: "¿Cómo calculo mi pago quincenal a partir de mi salario anual?", a: "Divide tu salario anual entre 26 (el número de períodos quincenales en un año) para obtener tu pago quincenal bruto." },
    { q: "¿Cuál es la diferencia entre pago quincenal y pago bimensual?", a: "El pago quincenal ocurre cada dos semanas (26 veces al año), mientras que el bimensual ocurre dos veces al mes (24 veces al año) — no son lo mismo." },
    { q: "¿Estas cifras son antes o después de impuestos?", a: "Todas las cifras mostradas son brutas, es decir, antes de impuestos y otras deducciones; tu pago neto real será menor." },
    { q: "¿Cómo calculo mi salario mensual a partir de mi salario anual?", a: "Divide tu salario anual entre 12 para obtener tu salario mensual bruto promedio." },
    { q: "¿Qué pasa si trabajo menos de 52 semanas al año?", a: "Ajusta el campo de semanas por año a tu situación real (por ejemplo, si tomas varias semanas de vacaciones sin goce de sueldo) para obtener una cifra anual más precisa." },
    { q: "¿Cómo sé si una oferta de trabajo por hora es mejor que una anual?", a: "Convierte ambas ofertas al mismo período (por ejemplo, anual) usando tus horas y semanas reales de trabajo, y compara las cifras resultantes directamente." },
    { q: "¿Cómo calculo mi pago diario a partir de mi salario semanal?", a: "Divide tu salario semanal entre el número de días laborables por semana, generalmente 5." },
    { q: "¿Las horas extra se incluyen en esta conversión?", a: "No automáticamente — si trabajas horas extra regularmente, ajusta el campo de horas por semana para reflejar tu promedio real de horas trabajadas." },
    { q: "¿Cómo afecta el número de semanas trabajadas a mi salario anual equivalente?", a: "Menos semanas trabajadas (por ejemplo, trabajo estacional) reduce tu salario anual equivalente proporcionalmente, incluso con la misma tarifa por hora." },
    { q: "¿Puedo usar esta calculadora para un trabajo de medio tiempo?", a: "Sí, simplemente ajusta las horas por semana a tu jornada real (por ejemplo, 20 horas) para obtener conversiones precisas para tu situación." },
    { q: "¿Dónde veo mi salario neto después de impuestos?", a: "Esta calculadora solo convierte cifras brutas entre períodos; usa la Calculadora de Salario Neto específica de tu país para ver tu pago después de impuestos." },
  ],

  relatedCalculators: ["Calculadora de Salario Neto", "Calculadora de Aumento Salarial", "Calculadora de Tarifa Freelance", "Calculadora de Tasa Efectiva de Impuestos"],

  youMayLike: pickYouMayLike("regional-salary-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Salario",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};