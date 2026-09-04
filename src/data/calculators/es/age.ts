export const ageCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Edad Online — Cuántos Años, Meses y Días Tengo",
    metaDescription: "Calcula tu edad exacta en años, meses, días, horas y minutos. Calculadora de edad gratis con signo zodiacal, piedra del mes y cuenta regresiva de cumpleaños.",
    canonicalSlug: "/es/date-time/age-calculator",
    ogTitle: "Calculadora de Edad — Tu Edad Exacta en Años, Meses y Días",
    ogDescription: "Descubre al instante tu edad exacta, cuánto falta para tu cumpleaños, tu signo zodiacal y más con esta calculadora de edad gratuita.",
    twitterTitle: "Calculadora de Edad Gratis — Años, Meses, Días",
    twitterDescription: "Cuántos años, meses, días, horas y minutos tienes exactamente. Gratis, rápida y precisa.",
  },

  hero: {
    text: "La Calculadora de Edad te dice al instante cuántos años, meses, días, horas, minutos y segundos exactos tienes a partir de tu fecha de nacimiento. Úsala para trámites, admisiones escolares, documentos legales o simple curiosidad — cualquiera que necesite saber su edad exacta puede usar esta herramienta gratuita.",
  },

  about: {
    text: `¿Cuántos años tengo exactamente? Esta calculadora de edad resuelve esa pregunta al instante, sin que tengas que contar meses con los dedos. Solo ingresa tu fecha de nacimiento y obtén un desglose exacto día por día.

Es útil para completar formularios oficiales, verificar si cumples la edad mínima para un trabajo, examen o jubilación, confirmar requisitos de edad para visas y admisiones, y planear cumpleaños.

También muestra datos extra como tu signo zodiacal, tu animal del zodiaco chino, tu piedra del mes de nacimiento, tu generación y el día de la semana en que naciste.

Limitaciones: el resultado depende de que ingreses las fechas correctamente, y el cálculo de horas y minutos es aproximado (basado en el calendario, no en segundos exactos).

Usa esta herramienta cada vez que necesites tu edad exacta sin hacer el cálculo a mano.`,
  },

  formula: {
    formula: "Edad = Fecha Actual − Fecha de Nacimiento",
    variables: [
      { symbol: "Años", meaning: "Años completos cumplidos desde el nacimiento" },
      { symbol: "Meses", meaning: "Meses completos restantes después del último cumpleaños" },
      { symbol: "Días", meaning: "Días restantes después del último mes completo" },
    ],
    explanation: "La calculadora resta tu fecha de nacimiento de la fecha de hoy, ajustando por la duración distinta de cada mes y los años bisiestos, para darte un desglose exacto en años, meses y días.",
    interpretation: "Por ejemplo, si naciste el 15 de marzo de 2000 y hoy es 31 de julio de 2026, tu edad exacta es 26 años, 4 meses y 16 días.",
  },

  steps: [
    "Ingresa tu fecha de nacimiento con el selector de calendario.",
    "Si quieres tu edad en una fecha específica (no hoy), cambia la fecha de referencia.",
    "Haz clic en Calcular.",
    "Consulta tu edad exacta en años, meses y días.",
    "Baja para ver el total en meses, semanas, días, horas, minutos y segundos.",
    "Revisa tu signo zodiacal, piedra del mes, generación y el día de la semana en que naciste.",
    "Consulta la cuenta regresiva para tu próximo cumpleaños.",
    "Copia o comparte tu resumen de edad con el botón de copiar.",
  ],

  examples: [
    {
      inputs: "Nacimiento: 15 de marzo de 2000, Hoy: 31 de julio de 2026",
      result: "26 años, 4 meses, 16 días",
      explanation: "Cálculo estándar de edad entre dos fechas, sin caso especial de año bisiesto.",
    },
    {
      inputs: "Nacimiento: 29 de febrero de 2000, Hoy: 31 de julio de 2026",
      result: "26 años, 5 meses, 2 días",
      explanation: "Nacimiento en año bisiesto manejado correctamente usando el día calendario válido más cercano.",
    },
    {
      inputs: "Nacimiento: 1 de enero de 1990, Hoy: 31 de julio de 2026",
      result: "36 años, 6 meses, 30 días",
      explanation: "Muestra cómo escalan el total de meses, semanas y días para edades mayores.",
    },
    {
      inputs: "Nacimiento: 10 de junio de 2015, Hoy: 31 de julio de 2026",
      result: "11 años, 1 mes, 21 días",
      explanation: "Útil para verificar la edad exacta de un niño para límites de admisión escolar.",
    },
  ],

  practicalUses: [
    "Verificar la edad mínima para postular a un empleo",
    "Comprobar los requisitos de edad para una licencia de conducir",
    "Confirmar el límite de edad para admisión escolar o universitaria",
    "Calcular la edad para trámites de visa o pasaporte",
    "Saber tu edad exacta para jubilación o pensión",
    "Planear celebraciones de cumpleaños importantes",
    "Llenar formularios legales o gubernamentales con precisión",
    "Verificar la edad mínima para una póliza de seguro",
    "Confirmar categorías de edad en competencias deportivas",
    "Calcular la edad de una mascota en equivalente humano",
    "Saber cuántos días faltan para tu cumpleaños",
    "Resolver disputas de edad con un cálculo exacto",
  ],

  expertTips: [
    "Verifica siempre el año de nacimiento, sobre todo en fechas anteriores a 1950, que suelen escribirse mal.",
    "Usa el campo de 'fecha de referencia' para calcular tu edad en una fecha futura, como un examen o el primer día de trabajo.",
    "Los formularios oficiales suelen pedir solo años completos, no meses ni días.",
    "Si naciste el 29 de febrero, muchos documentos oficiales consideran el 28 de febrero o el 1 de marzo como tu cumpleaños legal en años no bisiestos.",
    "El total de días es más útil que el total de meses para seguir el crecimiento de un bebé.",
    "La zona horaria puede cambiar la 'fecha de hoy' cerca de la medianoche — vuelve a calcular si esto es importante para un trámite legal.",
    "Usa el total de semanas para seguir el embarazo o los hitos de un recién nacido.",
    "Los resultados de signo zodiacal y piedra del mes son solo por diversión, no tienen validez científica.",
    "Guarda tu resumen de edad con el botón de copiar para reutilizarlo rápido en formularios.",
    "Compara la edad calculada con tu identificación oficial si alguna vez hay una diferencia.",
  ],

  commonMistakes: [
    { mistake: "Ingresar el formato de fecha incorrecto (DD/MM vs MM/DD)", fix: "Usa siempre el selector de calendario en vez de escribir la fecha a mano." },
    { mistake: "Olvidar la diferencia de zona horaria cerca de la medianoche", fix: "Vuelve a calcular en el día calendario exacto que corresponde a tu caso." },
    { mistake: "Pensar que la edad cambia en el minuto exacto del nacimiento", fix: "La edad cambia legalmente al inicio del día del cumpleaños, no a la hora exacta del nacimiento." },
    { mistake: "Confundir el total de meses con años × 12", fix: "El total de meses ya cuenta los meses parciales correctamente." },
    { mistake: "Ignorar los cumpleaños en año bisiesto", fix: "La calculadora ajusta automáticamente los nacimientos del 29 de febrero en años no bisiestos." },
    { mistake: "Usar una fecha de nacimiento futura", fix: "Asegúrate de que la fecha de nacimiento no sea posterior a hoy." },
    { mistake: "Confundir 'edad' con 'años hasta un evento'", fix: "Usa la función de cuenta regresiva por separado del desglose de edad." },
    { mistake: "No verificar fechas anteriores a 1900", fix: "Las fechas muy antiguas pueden no ser compatibles — revisa el rango válido." },
  ],

  faq: [
    { q: "¿Cómo calculo mi edad exacta?", a: "Se resta tu fecha de nacimiento de la fecha actual, dando años, meses y días completos, ajustados por la duración de cada mes y los años bisiestos." },
    { q: "¿Cuántos años tengo si nací en 1990, 1995 o 2000?", a: "Depende de si tu cumpleaños de este año ya pasó: si ya pasó, cuenta los años completos hasta hoy; si no, resta uno más. Ingresa tu fecha exacta en la calculadora para el resultado preciso al día de hoy." },
    { q: "¿Por qué mi edad en meses no es simplemente años × 12?", a: "Porque el total de meses cuenta el mes parcial que queda después de tu último año cumplido, no una multiplicación simple." },
    { q: "¿Qué pasa si nací el 29 de febrero?", a: "En años no bisiestos, la calculadora toma el 28 de febrero como tu cumpleaños, siguiendo la convención legal más común." },
    { q: "¿Puedo calcular mi edad en una fecha pasada o futura?", a: "Sí, cambia el campo de 'fecha de referencia' en vez de dejarlo en la fecha de hoy." },
    { q: "¿La calculadora considera los años bisiestos?", a: "Sí, los años bisiestos se ajustan automáticamente para que el conteo de días sea exacto." },
    { q: "¿Cuál es la diferencia entre una calculadora de edad y una calculadora de diferencia de fechas?", a: "La calculadora de edad siempre mide desde una fecha de nacimiento hasta hoy (o una fecha elegida), mientras que la de diferencia de fechas calcula la brecha entre dos fechas cualquiera." },
    { q: "¿Puede esta calculadora decirme cuántos días faltan para mi cumpleaños?", a: "Sí, muestra una cuenta regresiva con los días exactos que faltan para tu próximo cumpleaños." },
    { q: "¿La calculadora guarda mi fecha de nacimiento?", a: "No, el cálculo se hace en tu navegador y ningún dato personal se guarda ni se envía a un servidor." },
    { q: "¿En qué se basa mi signo del zodiaco chino?", a: "Se basa en tu año de nacimiento, dentro de un ciclo repetido de 12 animales." },
    { q: "¿Puedo usar esto para calcular la edad de mi mascota?", a: "Calcula edad humana por calendario; para convertir la edad de una mascota a equivalente humano, usa una calculadora específica para mascotas." },
    { q: "¿Qué significa 'generación' en el resultado?", a: "Clasifica tu año de nacimiento en una generación como Millennial, Generación Z o Generación Alpha, según los rangos de años más usados." },
    { q: "¿Qué tan exacto es el total de días?", a: "Es exacto — se calcula directamente a partir de la diferencia en milisegundos entre las dos fechas, convertida a días." },
    { q: "¿Cómo calculo mi edad solo en meses, no en años?", a: "El total de meses aparece junto a los años y días en el resultado — es el número completo de meses vividos desde el nacimiento, útil para hitos de bebés o reglas de edad expresadas en meses." },
    { q: "¿Puedo calcular la diferencia de edad entre dos personas?", a: "Sí — usa la calculadora una vez para cada persona con la misma fecha de referencia, y luego compara los dos resultados." },
  ],

  relatedCalculators: [
    "Calculadora de Diferencia de Fechas",
    "Calculadora de Cumpleaños",
    "Calculadora de IMC",
    "Calculadora de Fecha Probable de Parto",
    "Calculadora de Edad de Jubilación",
    "Calculadora de Signo Zodiacal",
    "Cuenta Regresiva",
    "Calculadora de Porcentajes",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Edad",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};