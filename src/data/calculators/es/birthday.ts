export const birthdayCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Cumpleaños — Cuántos Días Faltan",
    metaDescription: "Descubre exactamente cuántos días faltan para tu próximo cumpleaños, en qué día de la semana cae y qué edad vas a cumplir.",
    canonicalSlug: "/es/date-time/birthday-calculator",
    ogTitle: "Calculadora de Cumpleaños — Cuenta Regresiva",
    ogDescription: "Mira exactamente cuántos días faltan para tu próximo cumpleaños y en qué día de la semana cae.",
    twitterTitle: "Calculadora de Cumpleaños Gratis",
    twitterDescription: "Cuenta regresiva al instante para tu próximo cumpleaños.",
  },
  hero: { text: "La Calculadora de Cumpleaños te dice exactamente cuántos días faltan para tu próximo cumpleaños, en qué día de la semana cae y qué edad vas a cumplir. Ingresa tu fecha de nacimiento para obtener una cuenta regresiva al instante. Perfecta para planear fiestas y celebraciones." },
  about: { text: `La Calculadora de Cumpleaños encuentra tu próximo cumpleaños a partir de tu fecha de nacimiento y muestra cuántos días faltan para que llegue.

Es útil para planear fiestas de cumpleaños, regalos, celebraciones, o simplemente satisfacer la curiosidad de saber qué tan cerca está tu cumpleaños.

La herramienta también te dice en qué día de la semana cae tu cumpleaños este año y la edad exacta que vas a cumplir.

Limitaciones: calcula con base en la fecha del calendario ingresada y no considera diferencias de zona horaria en las últimas horas antes de la medianoche.

Usa esta herramienta cuando quieras una cuenta regresiva de cumpleaños rápida y precisa.` },
  formula: {
    formula: "Días Restantes = Fecha del Próximo Cumpleaños − Fecha de Hoy",
    variables: [
      { symbol: "Próximo Cumpleaños", meaning: "La siguiente vez que ocurre tu mes y día de nacimiento" },
      { symbol: "Hoy", meaning: "La fecha actual" },
    ],
    explanation: "La calculadora encuentra la próxima vez que ocurre tu mes y día de nacimiento, y cuenta los días entre hoy y esa fecha.",
    interpretation: "Si tu cumpleaños ya pasó este año, la calculadora cuenta automáticamente hacia la fecha del próximo año.",
  },
  steps: [
    "Ingresa tu fecha de nacimiento con el selector de calendario.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta cuántos días faltan para tu próximo cumpleaños.",
    "Revisa la fecha exacta de tu próximo cumpleaños.",
    "Mira en qué día de la semana cae tu cumpleaños.",
    "Consulta qué edad vas a cumplir.",
    "Copia el resumen con el botón de copiar si lo necesitas.",
  ],
  examples: [
    { inputs: "Nacimiento: 15 de marzo de 2000, Hoy: 31 de julio de 2026", result: "Faltan 227 días, cae en lunes, cumples 27", explanation: "Cuenta regresiva estándar a un cumpleaños más adelante en el año." },
    { inputs: "Nacimiento: 5 de enero de 1995, Hoy: 31 de julio de 2026", result: "Faltan 158 días, cae en martes, cumples 32", explanation: "El cumpleaños ya pasó este año, así que cuenta hacia el próximo año." },
    { inputs: "Nacimiento: 31 de julio de 1998, Hoy: 31 de julio de 2026", result: "Faltan 0 días, cae en viernes, cumples 28", explanation: "El cumpleaños es hoy — la cuenta regresiva muestra cero días." },
    { inputs: "Nacimiento: 29 de febrero de 2004, Hoy: 31 de julio de 2026", result: "Faltan 213 días, cae en lunes, cumples 22", explanation: "Cumpleaños de año bisiesto ajustado a la fecha válida más cercana en años no bisiestos." },
  ],
  practicalUses: [
    "Planear con anticipación la fecha de una fiesta de cumpleaños",
    "Poner recordatorios para comprar regalos",
    "Reservar lugares o eventos antes de un cumpleaños",
    "Ver en qué día de la semana cae un cumpleaños para organizarlo",
    "Contar los días para un cumpleaños importante (18, 21, 50 años)",
    "Coordinar fiestas sorpresa con el momento exacto",
    "Planear viajes de vacaciones alrededor de una fecha de cumpleaños",
    "Fijar metas de ahorro antes de un cumpleaños",
  ],
  expertTips: [
    "Pon recordatorios en el calendario unas semanas antes para tener tiempo de comprar regalos.",
    "Para cumpleaños de año bisiesto, confirma si se usa el 28 de febrero o el 1 de marzo en años no bisiestos.",
    "Usa el resultado del día de la semana para decidir si la fiesta será el día exacto o el fin de semana más cercano.",
    "Los cumpleaños importantes suelen necesitar planeación anticipada — empieza a contar un mes antes.",
    "Combina con una calculadora de edad para saber la edad exacta, no solo la cuenta regresiva.",
    "Si planeas eventos internacionales, verifica la zona horaria antes de confirmar la fecha exacta.",
  ],
  commonMistakes: [
    { mistake: "Asumir que la cuenta regresiva siempre muestra la fecha de este año", fix: "La herramienta pasa automáticamente al próximo año si el cumpleaños ya ocurrió." },
    { mistake: "Confundir 'edad a cumplir' con la edad actual", fix: "La edad a cumplir se refiere a la edad que se alcanzará en el próximo cumpleaños, no la edad actual." },
    { mistake: "No manejar correctamente los cumpleaños de año bisiesto", fix: "La calculadora ajusta automáticamente los nacimientos del 29 de febrero para años no bisiestos." },
    { mistake: "Olvidar la zona horaria cerca de la medianoche", fix: "Vuelve a calcular cerca de la fecha si el momento exacto importa." },
  ],
  faq: [
    { q: "¿Cuántos días faltan para mi próximo cumpleaños?", a: "Ingresa tu fecha de nacimiento y la calculadora muestra al instante el número exacto de días que faltan para tu próximo cumpleaños." },
    { q: "¿En qué día de la semana cae mi cumpleaños este año?", a: "La calculadora muestra automáticamente en qué día de la semana cae tu próximo cumpleaños según el calendario." },
    { q: "¿Qué pasa si mi cumpleaños ya pasó este año?", a: "La calculadora cuenta automáticamente hacia la fecha del próximo año en vez de mostrar un número negativo." },
    { q: "¿Esta herramienta me dice qué edad voy a cumplir?", a: "Sí, muestra la edad exacta que cumplirás en tu próximo cumpleaños." },
    { q: "¿Cómo se manejan los cumpleaños de año bisiesto (29 de febrero)?", a: "En años no bisiestos, la calculadora ajusta a la fecha válida más cercana, normalmente el 28 de febrero, para mantener la cuenta regresiva precisa." },
    { q: "¿Puedo revisar la cuenta regresiva del cumpleaños de otra persona?", a: "Sí, simplemente ingresa su fecha de nacimiento en lugar de la tuya." },
    { q: "¿La calculadora de cumpleaños es precisa entre zonas horarias?", a: "Usa fechas de calendario para el cálculo, así que los resultados son precisos para planear, aunque pueden variar un día muy cerca de la medianoche según la zona horaria." },
    { q: "¿Esta calculadora también encuentra cumpleaños pasados?", a: "No, está diseñada específicamente para contar hacia adelante hasta tu próximo cumpleaños." },
    { q: "¿La herramienta guarda mi fecha de nacimiento?", a: "No, los cálculos se hacen en tu navegador y ningún dato personal se guarda ni se transmite." },
    { q: "¿Cuál es la diferencia entre esto y una calculadora de edad?", a: "Una calculadora de edad muestra tu edad exacta actual, mientras que una calculadora de cumpleaños cuenta los días que faltan para tu próximo cumpleaños." },
    { q: "¿Cuántas semanas faltan para mi cumpleaños?", a: "Divide el total de días restantes entre 7 para obtener una cifra aproximada en semanas." },
    { q: "¿Puedo usar esto para planear una fiesta sorpresa con anticipación?", a: "Sí — la fecha exacta y el día de la semana te ayudan a reservar lugares, enviar invitaciones y calcular el tiempo para que la sorpresa caiga en el día indicado." },
    { q: "¿Por qué cambia el día de la semana cada año para la misma fecha de nacimiento?", a: "Un año normal tiene 365 días, que no es múltiplo de 7, así que la misma fecha del calendario cae en un día de la semana distinto cada año." },
    { q: "¿Qué se considera un cumpleaños importante?", a: "Las edades que suelen celebrarse especialmente son 1, 5, 13, 15, 18, 21, 30, 40, 50 y otros números redondos, que a menudo requieren más tiempo de planeación." },
    { q: "¿Puedo calcular la cuenta regresiva para un cumpleaños específico en el futuro, no solo el próximo?", a: "Esta herramienta cuenta hasta la próxima ocurrencia de la fecha de nacimiento; para un cumpleaños varios años adelante, usa una calculadora de edad con una fecha de referencia futura personalizada." },
  ],
  relatedCalculators: ["Calculadora de Edad", "Calculadora de Diferencia de Fechas", "Cuenta Regresiva", "Calculadora de Signo Zodiacal", "Calculadora de Fecha Probable de Parto", "Calculadora de Edad de Jubilación"],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: { h1: "Calculadora de Cumpleaños", h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"] },
};