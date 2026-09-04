// src/data/calculators/es/business-days-calculator.ts
export const businessDaysCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Días Hábiles - Cuenta Días Laborables Gratis",
    metaDescription: "Calcula el número de días hábiles entre dos fechas, excluyendo fines de semana y días festivos. Calculadora de días hábiles gratis en línea.",
    canonicalSlug: "/es/date-time/business-days-calculator",
    ogTitle: "Calculadora de Días Hábiles - Cuenta Días Laborables",
    ogDescription: "Encuentra el número exacto de días laborables entre dos fechas, excluyendo fines de semana y festivos.",
    twitterTitle: "Calculadora de Días Hábiles Gratis",
    twitterDescription: "Cuenta los días hábiles entre dos fechas al instante.",
  },

  hero: {
    text: "La Calculadora de Días Hábiles cuenta el número exacto de días laborables entre dos fechas, excluyendo automáticamente los fines de semana y cualquier día festivo que especifiques. Ingresa una fecha de inicio y una de fin para obtener un desglose instantáneo. Útil para plazos de proyectos, nómina y estimaciones de envío.",
  },

  about: {
    text: `La Calculadora de Días Hábiles cuenta los días laborables entre dos fechas, excluyendo fines de semana (y opcionalmente festivos) para dar un conteo preciso del tiempo de trabajo real.

Es útil para estimar plazos de proyectos, calcular ventanas de entrega, planear ciclos de nómina y fijar expectativas realistas de tiempo de respuesta para servicios.

La herramienta también muestra el total de días de calendario, los días de fin de semana excluidos y cuántos festivos especificados cayeron dentro del rango.

Limitaciones: los días festivos deben ingresarse manualmente, ya que la herramienta no conoce automáticamente los calendarios de festivos regionales o nacionales.

Usa esta herramienta cada vez que los días de calendario no sean la métrica correcta y necesites conteos reales de días laborables.`,
  },

  formula: {
    formula: "Días Hábiles = Días Totales de Calendario − Días de Fin de Semana − Días Festivos (dentro de días de semana)",
    variables: [
      { symbol: "Días Totales de Calendario", meaning: "Todos los días entre la fecha de inicio y fin, inclusive" },
      { symbol: "Días de Fin de Semana", meaning: "Sábados y domingos dentro del rango" },
      { symbol: "Días Festivos", meaning: "Festivos ingresados manualmente que caen dentro del rango" },
    ],
    explanation: "La calculadora recorre cada día del rango, verifica si es fin de semana o festivo indicado, y cuenta los días restantes como días hábiles.",
    interpretation: "Por ejemplo, de lunes al viernes siguiente (5 días de calendario) sin festivos, los 5 días cuentan como hábiles ya que no hay fin de semana de por medio.",
  },

  steps: [
    "Ingresa la fecha de inicio.",
    "Ingresa la fecha de fin.",
    "Elige si quieres excluir los fines de semana.",
    "Agrega las fechas festivas a excluir, si aplica.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta los días totales de calendario, días hábiles y los conteos de fines de semana/festivos excluidos.",
  ],

  examples: [
    { inputs: "Inicio: lun 3 ago 2026, Fin: vie 7 ago 2026, excluir fines de semana: sí, sin festivos", result: "5 días hábiles de 5 días totales", explanation: "Una semana laboral completa de lunes a viernes sin solapamiento de fin de semana." },
    { inputs: "Inicio: lun 3 ago 2026, Fin: lun 17 ago 2026, excluir fines de semana: sí, sin festivos", result: "11 días hábiles de 15 días totales", explanation: "Dos fines de semana completos excluidos de un lapso de dos semanas." },
    { inputs: "Inicio: 1 ene 2027, Fin: 10 ene 2027, excluir fines de semana: sí, festivo: 1 ene 2027", result: "6 días hábiles de 10 días totales", explanation: "El festivo de Año Nuevo y dos días de fin de semana excluidos." },
    { inputs: "Inicio: 1 ago 2026, Fin: 31 ago 2026, excluir fines de semana: sí, sin festivos", result: "21 días hábiles de 31 días totales", explanation: "Cálculo de un mes completo excluyendo todos los fines de semana." },
  ],

  practicalUses: [
    "Estimar plazos de entrega realistas para proyectos",
    "Calcular ventanas de envío o procesamiento de pedidos",
    "Fijar calendarios de procesamiento de nómina",
    "Determinar la duración de contratos o periodos de aviso",
    "Planear vacaciones de empleados excluyendo fines de semana",
    "Estimar tiempos de respuesta de préstamos o trámites de visa",
    "Programar flujos de aprobación de varios pasos",
    "Calcular días laborables facturables para contratos freelance",
  ],

  expertTips: [
    "Siempre agrega los festivos oficiales manualmente, ya que varían según el país y la región.",
    "Para equipos internacionales, considera calcular por separado según el calendario de festivos de cada país.",
    "Usa días hábiles en lugar de días de calendario al cotizar tiempos de respuesta de servicios.",
    "Verifica si tu industria cuenta los medios días cerca de festivos como días hábiles completos.",
    "Para nómina, confirma si tu organización trata los festivos opcionales de forma diferente.",
    "El conteo de días hábiles cambia según el día de la semana de inicio — un inicio en viernes se comporta distinto a uno en lunes.",
    "Combínalo con una calculadora de diferencia de fechas cuando necesites tanto días de calendario como días hábiles.",
  ],

  commonMistakes: [
    { mistake: "Olvidar agregar los festivos oficiales regionales", fix: "Lista manualmente todos los festivos relevantes para obtener resultados precisos — la herramienta no los detecta automáticamente." },
    { mistake: "Suponer que el sábado siempre es día laboral", fix: "Confirma la semana laboral de tu organización — algunos negocios trabajan 6 días, no 5." },
    { mistake: "Contar la fecha de inicio dos veces", fix: "La calculadora cuenta las fechas de inicio y fin de forma inclusiva; verifica que esto coincida con tu caso de uso." },
    { mistake: "Ignorar las diferencias de zona horaria para equipos globales", fix: "Estandariza una sola referencia de zona horaria al calcular entre países." },
    { mistake: "Usar días de calendario cuando un contrato especifica días hábiles", fix: "Revisa siempre el lenguaje del contrato con cuidado — ambos pueden diferir significativamente para los plazos." },
  ],

  faq: [
    { q: "¿Qué son los días hábiles?", a: "Los días hábiles suelen ser de lunes a viernes, excluyendo fines de semana y festivos oficiales, y representan los días laborables estándar." },
    { q: "¿Cómo se calculan los días hábiles entre dos fechas?", a: "Se cuentan todos los días de calendario entre las fechas y luego se restan los fines de semana y cualquier festivo dentro del rango." },
    { q: "¿Esta calculadora considera los festivos oficiales?", a: "Sí, pero debes agregar manualmente las fechas festivas, ya que la herramienta no conoce automáticamente el calendario de festivos de cada región." },
    { q: "¿Los sábados cuentan como días hábiles?", a: "Por defecto, los sábados y domingos se excluyen como fin de semana, pero puedes ajustarlo si tu negocio opera seis días a la semana." },
    { q: "¿Por qué es importante el conteo de días hábiles para los plazos?", a: "Los contratos, envíos y plazos legales suelen especificarse en días hábiles, así que contar solo días de calendario podría llevar a incumplir plazos." },
    { q: "¿Puedo calcular días hábiles entre distintos meses?", a: "Sí, la calculadora funciona con cualquier rango de fechas que abarque varios meses o años." },
    { q: "¿La calculadora incluye la fecha de inicio y de fin?", a: "Sí, tanto la fecha de inicio como la de fin se incluyen en el cálculo, salvo que caigan en fin de semana o festivo." },
    { q: "¿Cuál es la diferencia entre días hábiles y días laborables?", a: "Los términos suelen usarse indistintamente para referirse a los días de semana excluyendo fines de semana y festivos." },
    { q: "¿En qué se diferencian los festivos de los fines de semana en esta calculadora?", a: "Los fines de semana se detectan automáticamente por día de la semana, mientras que los festivos deben agregarse manualmente ya que varían según la ubicación y el año." },
    { q: "¿Esta herramienta se puede usar para cálculos de fechas internacionales?", a: "Sí, pero debes ajustar manualmente las listas de festivos según el país o región relevante para obtener resultados precisos." },
    { q: "¿Cuántos días hábiles tiene un mes típico?", a: "La mayoría de los meses del calendario tienen entre 20 y 23 días hábiles, ya que aproximadamente 4-5 fines de semana (8-10 días) caen dentro de un mes de 28-31 días." },
    { q: "¿Cómo agrego 10 días hábiles a una fecha?", a: "A partir de tu fecha, cuenta hacia adelante saltando sábados y domingos (y cualquier festivo) hasta contar 10 días de semana válidos — esta calculadora hace ese conteo automáticamente cuando defines una fecha de inicio y el número de días requerido." },
    { q: "¿Esta calculadora funciona para semanas laborales de seis días?", a: "Sí, si tu negocio opera seis días a la semana, desactiva la exclusión de fines de semana o ajusta qué días cuentan como fin de semana para que coincida con tu horario real." },
    { q: "¿Cuál es la diferencia entre días hábiles y días bancarios?", a: "Los términos suelen usarse indistintamente, aunque 'días bancarios' a veces excluye específicamente festivos bancarios que pueden diferir de los festivos oficiales generales." },
    { q: "¿Por qué algunos contratos especifican días hábiles en lugar de días de calendario?", a: "Los días hábiles dan un plazo más predecible para tareas que solo ocurren en horario laboral, como procesamiento, envíos o aprobaciones, evitando que los fines de semana y festivos distorsionen los plazos." },
  ],

  relatedCalculators: [
    "Date Difference Calculator",
    "Age Calculator",
    "Working Hours Calculator",
    "Countdown Timer",
    "Days Until Calculator",
    "Loan EMI Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Días Hábiles",
    h2: ["Acerca de", "Fórmula", "Cómo Usar", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};