export const timeDurationCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Horas Entre Dos Horas — Diferencia Horaria Online",
    metaDescription: "Calcula cuántas horas y minutos hay entre dos horas al instante. Ideal para turnos, horas trabajadas y horarios que cruzan la medianoche. Gratis y online.",
    canonicalSlug: "/es/date-time/time-duration-calculator",
    ogTitle: "Calculadora de Diferencia de Horas — Cuántas Horas Hay Entre Dos Horas",
    ogDescription: "Descubre al instante la diferencia exacta entre dos horas, incluso si el turno cruza la medianoche.",
    twitterTitle: "Calculadora de Horas Trabajadas Gratis",
    twitterDescription: "Calcula la diferencia entre dos horas en segundos. Perfecta para turnos, nóminas y horarios.",
    keywords: ["calculadora de diferencia de horas", "cuántas horas hay entre dos horas", "calculadora de horas trabajadas", "calculadora de turnos", "diferencia horaria calculadora", "horas entre dos horas"],
  },

  hero: {
    text: "¿Cuántas horas hay entre dos horas? Esta calculadora te da la diferencia exacta en horas y minutos entre una hora de inicio y una de fin, incluso cuando el turno cruza la medianoche. Ideal para calcular horas trabajadas, turnos nocturnos, citas y cualquier horario.",
  },

  about: {
    text: `¿Cuántas horas trabajé? Es una de las dudas más comunes al cerrar un turno o llenar una hoja de horas, y esta calculadora la resuelve al instante: solo ingresa la hora de inicio y la hora de fin.

Es útil para calcular horas de turno, verificar nóminas, medir la duración de reuniones o llamadas, y cronometrar actividades como entrenamientos o recetas de cocina.

La herramienta muestra el resultado en horas y minutos, además del total en minutos, y te avisa cuando el horario cruza la medianoche — algo que suele confundir en los cálculos manuales de turnos nocturnos.

Limitaciones: calcula la diferencia dentro de un ciclo de 24 horas; para diferencias de varios días, usa una calculadora de diferencia de fechas.

Usa esta herramienta cada vez que necesites saber cuántas horas hay entre dos horas sin hacer el cálculo a mano.`,
  },

  formula: {
    formula: "Duración = Hora Final − Hora Inicial (se suman 24h si la hora final es menor)",
    variables: [
      { symbol: "Hora Inicial", meaning: "Hora en formato HH:MM" },
      { symbol: "Hora Final", meaning: "Hora en formato HH:MM" },
    ],
    explanation: "La calculadora convierte ambas horas a minutos desde la medianoche y resta; si el resultado es negativo, suma 24 horas para cubrir el cruce de medianoche.",
    interpretation: "Por ejemplo, de 22:00 a 06:00 el turno cruza la medianoche y da una duración de 8 horas.",
  },

  steps: [
    "Ingresa la hora de inicio.",
    "Ingresa la hora de fin.",
    "Haz clic en Calcular.",
    "Consulta la duración en horas y minutos.",
    "Revisa si el horario cruza la medianoche.",
    "Copia el resultado con el botón de copiar.",
  ],

  examples: [
    { inputs: "09:00 a 17:30", result: "8h 30m", explanation: "Duración típica de una jornada laboral." },
    { inputs: "22:00 a 06:00", result: "8h 0m (cruza la medianoche)", explanation: "Duración de un turno nocturno que cruza la medianoche." },
    { inputs: "13:15 a 13:45", result: "0h 30m", explanation: "Duración corta dentro de la misma hora." },
    { inputs: "23:50 a 00:10", result: "0h 20m (cruza la medianoche)", explanation: "Un lapso muy corto que aun así cruza al día siguiente." },
  ],

  practicalUses: [
    "Calcular las horas de un turno de trabajo",
    "Verificar horas trabajadas para la nómina",
    "Medir la duración de reuniones o llamadas",
    "Cronometrar entrenamientos o recetas de cocina",
    "Calcular horas de turnos nocturnos para el pago",
    "Planear horarios de eventos con precisión",
    "Comprobar los registros de la hoja de horas de un empleado",
    "Calcular el tiempo total de estudio o enfoque en un día",
    "Calcular la duración de un descanso entre dos actividades",
    "Cronometrar segmentos de transmisiones en vivo",
    "Verificar las horas facturadas en un trabajo freelance",
  ],

  expertTips: [
    "Para turnos nocturnos que cruzan la medianoche, la calculadora suma 24 horas automáticamente para dar la duración correcta.",
    "Usa el formato de 24 horas (HH:MM) para evitar ambigüedad al ingresar la hora.",
    "Para diferencias de varios días, usa una calculadora de diferencia de fechas en su lugar.",
    "Revisa bien la conversión AM/PM si tus datos originales usan formato de 12 horas.",
    "Al calcular horas para nómina, redondea siempre de la misma forma (por ejemplo, al cuarto de hora más cercano).",
    "Para turnos recurrentes, guarda una plantilla de las horas de inicio y fin más usadas para agilizar el registro.",
    "El total en minutos es útil al pasar los resultados a una hoja de cálculo o sistema de nómina.",
    "Verifica siempre el aviso de 'cruza la medianoche' cuando un turno abarca dos días calendario, para evitar errores de pago.",
    "En turnos partidos, calcula cada tramo por separado y suma las duraciones al final.",
    "Mantén un formato de hora consistente en todo el equipo para evitar errores de conversión manual.",
  ],

  commonMistakes: [
    { mistake: "Ingresar formato de 12 horas sin convertir AM/PM", fix: "Convierte a formato de 24 horas antes de ingresar los datos, o asegúrate de usar el estilo HH:MM de 24 horas." },
    { mistake: "No considerar el cruce de medianoche", fix: "La herramienta lo maneja automáticamente, pero siempre revisa el aviso de 'cruza la medianoche' para confirmar." },
    { mistake: "Usar esta calculadora para diferencias de varios días", fix: "Para duraciones de más de 24 horas, usa una calculadora de diferencia de fechas." },
    { mistake: "Redondear de forma inconsistente al calcular horas de nómina", fix: "Aplica la misma regla de redondeo (por ejemplo, al cuarto de hora) en todos los registros de horas." },
    { mistake: "Olvidar restar los descansos no pagados", fix: "Resta el tiempo de descanso por separado si tu turno debe excluir la hora de comida o pausas." },
    { mistake: "Confundir la hora de inicio con la de fin", fix: "Verifica cuál hora es la de inicio y cuál la de fin antes de calcular, sobre todo en turnos nocturnos." },
  ],

  faq: [
    { q: "¿Cómo calculo cuántas horas hay entre dos horas?", a: "Convierte ambas horas a minutos desde la medianoche, resta la hora inicial de la final, y si el resultado es negativo, suma 24 horas para cubrir el cruce de medianoche." },
    { q: "¿Esta calculadora funciona para turnos nocturnos?", a: "Sí, si la hora final es menor que la inicial, la calculadora entiende automáticamente que el turno cruza al día siguiente y ajusta el resultado." },
    { q: "¿En qué formato debo ingresar las horas?", a: "Usa el formato de 24 horas HH:MM (por ejemplo, 14:30 para las 2:30 PM) para evitar resultados ambiguos." },
    { q: "¿Puedo calcular la diferencia entre horas de varios días?", a: "No, esta herramienta está pensada para diferencias dentro de un solo día; usa una calculadora de diferencia de fechas para lapsos de varios días." },
    { q: "¿Para qué sirve el total en minutos?", a: "El total en minutos da un solo número útil para sistemas de nómina o cálculos posteriores, más allá del formato de horas y minutos." },
    { q: "¿Cómo calculo mis horas trabajadas descontando la hora de comida?", a: "Calcula primero la duración completa del turno y luego resta el tiempo de descanso por separado para obtener las horas netas trabajadas." },
    { q: "¿La calculadora redondea la duración automáticamente?", a: "No, muestra la duración exacta en horas y minutos; aplica tu propia regla de redondeo si tu política de nómina lo requiere." },
    { q: "¿Qué pasa si la hora de inicio y de fin son iguales?", a: "La duración será de 0 horas 0 minutos, o de 24 horas si se interpreta como un ciclo completo de un día, según el contexto." },
    { q: "¿Puedo usar esto para sumar mis horas trabajadas en toda la semana?", a: "Calcula la duración de cada día por separado con esta herramienta y luego súmalas manualmente o en una hoja de cálculo para obtener el total semanal." },
    { q: "¿Sirve esta calculadora para cronometrar ejercicio o cocina?", a: "Sí, ingresar una hora de inicio y una de fin funciona para cualquier actividad en la que quieras saber cuánto tiempo transcurrió, no solo turnos de trabajo." },
  ],

  relatedCalculators: [
    "Calculadora de Diferencia de Fechas",
    "Calculadora de Zona Horaria",
    "Calculadora de Días Hábiles",
    "Calculadora de Edad",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Diferencia de Horas",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};
