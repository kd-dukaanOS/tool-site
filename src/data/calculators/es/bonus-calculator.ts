// src/data/calculators/es/bonus-calculator.ts
export const bonusCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Bono - Bono Bruto y Neto Después de Impuestos",
    metaDescription: "Calcula tu bono bruto, el impuesto sobre el bono y el monto neto que recibirás. Calculadora de bono gratis con fórmula, ejemplos e impuesto sobre bonos explicado.",
    canonicalSlug: "/es/finance/bonus-calculator",
    ogTitle: "Calculadora de Bono - Bono Bruto y Neto",
    ogDescription: "Calcula al instante tu bono, el impuesto retenido y el monto neto que recibirás.",
    twitterTitle: "Calculadora de Bono Gratis",
    twitterDescription: "Calcula tu bono bruto y neto al instante, gratis y de forma precisa.",
  },

  hero: {
    text: "La Calculadora de Bono encuentra al instante tu bono bruto, el impuesto retenido y el monto neto que recibirás a partir de tu salario y el porcentaje de bono. Úsala para estimar cuánto recibirás realmente después de impuestos, planear un bono próximo o comparar ofertas laborales. Sirve para cualquiera que espere un bono de desempeño, de fin de año o de contratación.",
  },

  about: {
    text: `La Calculadora de Bono es una herramienta gratuita en línea que calcula tu bono bruto, el impuesto estimado retenido y el bono neto (a recibir) a partir de tu salario anual, el porcentaje de bono y una tasa de impuesto estimada.

Es útil para empleados que quieren saber cuánto recibirán realmente antes de que llegue el bono, profesionales que comparan estructuras de bono entre ofertas de trabajo, y cualquiera que planee sus finanzas alrededor de un pago de bono confirmado.

Los bonos suelen tributar de forma distinta al salario regular — muchos empleadores aplican una tasa fija de retención suplementaria en vez de tu tasa marginal habitual, lo que puede hacer que el monto retenido parezca más alto de lo esperado en el recibo del bono.

La calculadora también muestra tu nueva compensación total, combinando salario base y bono bruto, útil para comparar paquetes de pago completos.

Limitaciones: esta herramienta usa una única tasa de impuesto estimada que tú proporcionas — las reglas reales de retención sobre bonos varían según el país, la práctica de nómina del empleador y tu situación fiscal específica, y tu obligación fiscal final se determina al presentar tu declaración de impuestos.

Usa esta herramienta para estimar tu bono y su valor neto aproximado, no como un cálculo exacto de nómina o declaración de impuestos.`,
  },

  formula: {
    formula: "Bono Bruto = Salario × (Bono% / 100); Bono Neto = Bono Bruto − (Bono Bruto × Tasa de Impuesto%)",
    variables: [
      { symbol: "Salario", meaning: "Tu salario base anual" },
      { symbol: "Bono%", meaning: "Bono como porcentaje de tu salario" },
      { symbol: "Tasa de Impuesto%", meaning: "Tasa de impuesto estimada aplicada al bono" },
    ],
    explanation: "El bono bruto se calcula como un porcentaje de tu salario. El impuesto sobre el bono se estima usando la tasa que proporcionas y luego se resta para obtener tu bono neto (a recibir).",
    interpretation: "Por ejemplo, un salario de $60,000 con un bono del 10% da un bono bruto de $6,000 — con una tasa de impuesto estimada del 22%, eso son $1,320 de impuesto, dejando un bono neto de $4,680.",
  },

  steps: [
    "Ingresa tu salario anual.",
    "Ingresa tu bono como porcentaje del salario.",
    "Ingresa una tasa de impuesto estimada aplicable a tu bono.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta tu bono bruto, impuesto retenido, bono neto y compensación total.",
    "Copia el resumen si necesitas guardarlo o compartirlo.",
  ],

  examples: [
    { inputs: "Salario: $60,000, Bono: 10%, Impuesto: 22%", result: "Bruto: $6,000, Impuesto: $1,320, Neto: $4,680", explanation: "Un bono de desempeño estándar con una tasa de retención suplementaria común." },
    { inputs: "Salario: $90,000, Bono: 15%, Impuesto: 24%", result: "Bruto: $13,500, Impuesto: $3,240, Neto: $10,260", explanation: "Un bono más grande sobre un salario más alto, que suele elevar la retención a un tramo suplementario mayor." },
    { inputs: "Salario: $45,000, Bono: 5%, Impuesto: 20%", result: "Bruto: $2,250, Impuesto: $450, Neto: $1,800", explanation: "Un bono de fin de año modesto con una retención más ligera." },
    { inputs: "Salario: $75,000, Bono: 20%, Impuesto: 25%", result: "Bruto: $15,000, Impuesto: $3,750, Neto: $11,250", explanation: "Un bono de fin de año considerable, común en roles de ventas o liderazgo." },
  ],

  practicalUses: [
    "Estimar el monto que realmente recibirás de un bono próximo",
    "Comparar estructuras de bono entre ofertas de trabajo",
    "Planear finanzas o ahorros alrededor de un pago de bono confirmado",
    "Verificar si la retención del bono coincide con tu tasa de impuesto esperada",
    "Entender la compensación total incluyendo salario base y bono",
    "Presupuestar compras grandes según la temporada de bonos",
    "Comparar porcentajes de bono de desempeño entre puestos o empresas",
    "Revisar ofertas de bono de contratación durante una negociación salarial",
  ],

  expertTips: [
    "Los bonos suelen retenerse a una tasa fija suplementaria (comúnmente 22% a nivel federal en EE. UU.) sin importar tu tramo de impuesto habitual.",
    "El impuesto final real sobre un bono se determina al presentar tu declaración anual — la retención es solo una estimación pagada por adelantado.",
    "Si tu tasa marginal de impuesto es mayor que la tasa fija de retención, podrías deber impuesto adicional al declarar.",
    "Consulta con recursos humanos o nómina el método específico de retención sobre bonos de tu empleador antes de confiar solo en una estimación.",
    "Considera aportar ingresos de bono a una cuenta de retiro para reducir la parte gravable, donde esté permitido.",
    "Compara el bono neto, no el bruto, al evaluar ofertas de trabajo con distintas estructuras de bono.",
  ],

  commonMistakes: [
    { mistake: "Suponer que la tasa de impuesto del bono es igual a tu tramo de impuesto regular", fix: "Muchos empleadores retienen los bonos a una tasa fija suplementaria separada, que puede diferir de tu tramo marginal." },
    { mistake: "Gastar todo el bono bruto antes de que llegue", fix: "Presupuesta usando la cifra estimada de bono neto, ya que una parte significativa se destina a la retención de impuestos." },
    { mistake: "Comparar ofertas de bono bruto sin considerar distintos tratamientos fiscales", fix: "Estima el bono neto de cada oferta, ya que las prácticas de retención pueden variar entre empleadores o tipos de bono." },
    { mistake: "Olvidar que el ingreso por bono afecta tu obligación fiscal anual total", fix: "Recuerda que el ingreso por bono se concilia con tus otros ingresos al presentar la declaración, lo que puede resultar en deber o recibir un reembolso." },
  ],

  faq: [
    { q: "¿Cómo se gravan los bonos?", a: "Los bonos suelen gravarse con una tasa fija de retención suplementaria en vez de tu tasa marginal regular, aunque el método exacto depende de tu país y la práctica de nómina de tu empleador." },
    { q: "¿Por qué mi bono se grava más alto que mi salario?", a: "En general no se grava a una tasa más alta en total — muchos empleadores simplemente retienen un porcentaje fijo por adelantado sobre el bono, lo que puede parecer mayor en el recibo pero se concilia al declarar impuestos." },
    { q: "¿Cuánto de mi bono voy a recibir realmente?", a: "Depende de la tasa de retención aplicada — después de la retención típica, muchas personas reciben aproximadamente el 70–80% de su bono bruto, aunque esto varía según la situación fiscal." },
    { q: "¿El bono se considera parte de mi salario anual?", a: "El bono suma a tu compensación total del año, pero por lo general se reporta y a menudo se grava por separado del salario base en el recibo de pago." },
    { q: "¿Puedo reducir el impuesto sobre mi bono?", a: "En algunos casos, aportar el ingreso del bono a una cuenta de retiro antes de impuestos puede reducir tu ingreso gravable de ese periodo — consulta a un profesional fiscal para tu caso específico." },
    { q: "¿Cuál es un porcentaje de bono típico?", a: "Varía mucho según el puesto y la industria — los bonos de desempeño comunes van del 5% al 20% del salario, mientras que los bonos ejecutivos o de ventas pueden ser mucho más altos." },
    { q: "¿Un bono de contratación se grava igual que uno de desempeño?", a: "Generalmente sí, la mayoría de los tipos de bono reciben un tratamiento de retención suplementaria similar, aunque las reglas específicas del empleador y la jurisdicción pueden variar." },
    { q: "¿Deberé impuesto adicional sobre mi bono al presentar mi declaración?", a: "Es posible — si tu tasa marginal de impuesto es mayor que la tasa fija de retención aplicada a tu bono, podrías deber la diferencia al declarar tu retorno anual." },
    { q: "¿Esta calculadora considera el impuesto estatal o local sobre el bono?", a: "No, esta herramienta usa una sola tasa de impuesto que tú proporcionas como estimación — ingresa una tasa combinada si quieres incluir impuestos estatales o locales." },
    { q: "¿En qué se diferencia la compensación total del salario base?", a: "La compensación total incluye el salario base más el bono, y a veces otros beneficios — da una visión más completa del pago que el salario por sí solo." },
  ],

  relatedCalculators: ["Raise Calculator", "Total Compensation Calculator", "Hourly to Salary Calculator", "Overtime Calculator", "Job Offer Comparison Calculator"],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Bono",
    h2: ["Acerca de", "Fórmula", "Cómo Usar", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};