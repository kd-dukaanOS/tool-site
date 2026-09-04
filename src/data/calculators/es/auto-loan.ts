import { pickYouMayLike } from "../../calculator-pool";

export const autoLoanCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Préstamo de Auto — Pago Mensual Gratis",
    metaDescription: "Calculadora de préstamo de auto gratuita. Ingresa precio del vehículo, enganche, entrega a cuenta y tasa de interés para ver al instante tu pago mensual, interés total y costo total.",
    canonicalSlug: "/es/finance/auto-loan-calculator",
    ogTitle: "Calculadora de Préstamo de Auto — Pago Mensual del Coche",
    ogDescription: "Calcula al instante tu pago mensual del auto, el interés total y el costo total.",
    twitterTitle: "Calculadora de Préstamo de Auto Gratis",
    twitterDescription: "Calcula el pago de tu auto al instante. Gratis y precisa.",
  },

  hero: {
    text: "La Calculadora de Préstamo de Auto calcula tu pago mensual, interés total y costo total a partir del precio del vehículo, enganche, valor de entrega a cuenta, impuesto sobre venta y tasa de interés. Úsala antes de ir a la agencia para saber exactamente qué puedes pagar.",
  },

  about: {
    text: `La Calculadora de Préstamo de Auto es una herramienta gratuita que estima tu pago mensual con base en el monto real que vas a financiar, no solo el precio de etiqueta.

Toma en cuenta tu enganche y el valor de entrega a cuenta (que reducen lo que financias), el impuesto sobre venta de la parte gravable de la compra, tu tasa de interés (APR) y el plazo del préstamo, y luego aplica una fórmula estándar de amortización para calcular el pago mensual.

Esto importa porque dos compradores financiando el "mismo" auto de $32,000 pueden terminar con pagos muy distintos según el tamaño del enganche, el valor de entrega a cuenta y el plazo elegido — un plazo más largo baja el pago mensual pero aumenta el interés total pagado.

Limitaciones: esta herramienta usa una tasa de impuesto fija sobre el precio menos la entrega a cuenta, lo cual coincide con la mayoría de los estados en EE. UU. pero no con todos — algunos estados gravan el precio completo sin importar la entrega a cuenta, y unos pocos no cobran impuesto sobre vehículos. Tampoco incluye cuotas de registro, extras de la agencia ni seguro GAP.`,
  },

  formula: {
    formula: "Pago Mensual = L × r / (1 − (1 + r)^−n), donde L = Monto del Préstamo, r = Tasa Mensual, n = Plazo en Meses",
    variables: [
      { symbol: "L", meaning: "Monto del préstamo: precio del vehículo − enganche − entrega a cuenta + impuesto sobre venta" },
      { symbol: "r", meaning: "Tasa de interés mensual (APR ÷ 12 ÷ 100)" },
      { symbol: "n", meaning: "Plazo del préstamo en meses" },
    ],
    explanation: "El monto del préstamo se financia a una tasa mensual fija durante el plazo elegido usando una fórmula estándar de amortización, repartiendo capital e interés en pagos mensuales iguales.",
    interpretation: "Por ejemplo, un auto de $32,000 con $4,000 de enganche, $2,000 de entrega a cuenta, 7% de impuesto y 6.5% de APR a 60 meses resulta en un préstamo de aproximadamente $27,960 y un pago mensual cercano a $547.",
  },

  steps: [
    "Ingresa el precio del vehículo.",
    "Ingresa el monto de tu enganche.",
    "Ingresa el valor de tu entrega a cuenta, si tienes una.",
    "Ingresa la tasa de impuesto sobre venta local.",
    "Ingresa la tasa de interés (APR) que te ofrece tu prestamista.",
    "Ingresa el plazo del préstamo en meses.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta tu pago mensual, monto del préstamo, interés total y costo total.",
  ],

  examples: [
    { inputs: "Precio: $32,000, Enganche: $4,000, Entrega a cuenta: $2,000, Impuesto: 7%, APR: 6.5%, Plazo: 60 meses", result: "Pago Mensual: ~$547, Interés Total: ~$4,860", explanation: "Un préstamo típico de auto nuevo con enganche y entrega a cuenta moderados." },
    { inputs: "Precio: $18,000, Enganche: $1,000, Entrega a cuenta: $0, Impuesto: 6%, APR: 8%, Plazo: 48 meses", result: "Pago Mensual: ~$434, Interés Total: ~$3,320", explanation: "Un préstamo de auto usado con plazo más corto y tasa más alta." },
    { inputs: "Precio: $45,000, Enganche: $10,000, Entrega a cuenta: $5,000, Impuesto: 8%, APR: 5%, Plazo: 72 meses", result: "Pago Mensual: ~$514, Interés Total: ~$6,470", explanation: "Un enganche y entrega a cuenta mayores reducen significativamente el monto financiado." },
  ],

  practicalUses: [
    "Estimar el pago mensual antes de visitar una agencia",
    "Comparar plazos de préstamo (48 vs 60 vs 72 meses) para el mismo vehículo",
    "Ver cómo un enganche mayor cambia el costo mensual",
    "Comprobar cómo el valor de entrega a cuenta reduce lo que financias",
    "Comparar ofertas de distintos prestamistas por APR",
    "Decidir entre un auto nuevo con APR bajo o uno usado más barato",
    "Presupuestar el costo total, no solo el número mensual",
  ],

  expertTips: [
    "Un plazo más largo baja tu pago mensual pero casi siempre aumenta el interés total pagado — compara el costo total, no solo la cifra mensual.",
    "El valor de entrega a cuenta reduce el monto gravable en la mayoría de los estados, bajando también tu impuesto sobre venta además del saldo del préstamo.",
    "Consigue una preaprobación de financiamiento antes de visitar la agencia para comparar su oferta contra una tasa conocida.",
    "Evita financiar por más tiempo que la vida útil esperada del auto o corres el riesgo de deber más de lo que vale.",
    "Un enganche mayor reduce tanto el pago mensual como el interés total — incluso un 10-20% de enganche marca una diferencia importante.",
    "Cuidado con los extras y cuotas de la agencia que aumentan el monto financiado más allá del precio del vehículo ingresado aquí.",
  ],

  commonMistakes: [
    { mistake: "Comparar ofertas solo por el pago mensual", fix: "Compara también el costo total y el APR — un pago mensual más bajo suele significar un plazo más largo y más interés pagado en total." },
    { mistake: "Olvidar el impuesto sobre venta al presupuestar", fix: "Incluye tu tasa de impuesto local — se suma al monto financiado en la mayoría de los estados." },
    { mistake: "Ignorar cómo la entrega a cuenta afecta el monto gravable", fix: "En la mayoría de los estados, el valor de entrega a cuenta reduce el precio gravable, bajando tu impuesto sobre venta." },
    { mistake: "Elegir por defecto el plazo más largo disponible", fix: "Un plazo más largo baja el pago mensual pero aumenta el interés total — equilibra lo que puedes pagar contra el costo total." },
    { mistake: "No comparar la tasa de interés por separado del precio del vehículo", fix: "Consigue una preaprobación aparte para negociar precio y financiamiento de forma independiente." },
  ],

  faq: [
    { q: "¿Cómo se calcula el pago de un préstamo de auto?", a: "Se usa el monto del préstamo (precio menos enganche y entrega a cuenta, más impuesto sobre venta), la tasa de interés mensual y el plazo del préstamo en una fórmula estándar de amortización para calcular pagos mensuales iguales." },
    { q: "¿La entrega a cuenta reduce el impuesto sobre venta?", a: "En la mayoría de los estados de EE. UU., sí — el impuesto aplica sobre el precio menos el valor de entrega a cuenta, aunque algunos estados gravan el precio completo sin importar la entrega a cuenta." },
    { q: "¿Cuál es una buena tasa de interés para un préstamo de auto?", a: "Depende del historial crediticio y del plazo, pero compradores bien calificados suelen ver tasas de un dígito bajo a medio, mientras que quienes tienen menos historial crediticio pueden ver tasas mucho más altas." },
    { q: "¿Debería elegir un préstamo a 60 o 72 meses?", a: "Un préstamo a 72 meses baja el pago mensual pero aumenta el interés total pagado; uno a 60 meses cuesta más al mes pero menos en total." },
    { q: "¿Esta calculadora incluye cuotas de registro o extras?", a: "No, calcula solo con base en precio del vehículo, enganche, entrega a cuenta, impuesto sobre venta y condiciones de financiamiento — las cuotas y extras de la agencia deben sumarse aparte." },
    { q: "¿Cuánto debería dar de enganche por un auto?", a: "No hay una regla fija, pero un 10-20% de enganche es común y ayuda a evitar deber más de lo que vale el auto al inicio." },
    { q: "¿Un plazo más largo alguna vez es buena idea?", a: "Puede ayudar a pagar menos a corto plazo, pero el interés total pagado sube de forma significativa, así que vale la pena sopesarlo contra el costo extra." },
    { q: "¿Qué pasa si mi entrega a cuenta tiene valor negativo (debo más de lo que vale)?", a: "Ese capital negativo normalmente se suma a tu nuevo préstamo, aumentando lo que financias — esta calculadora asume un valor de entrega a cuenta positivo o cero." },
  ],

  relatedCalculators: ["Calculadora de Amortización de Préstamos", "Calculadora de Relación Deuda-Ingreso", "Calculadora de Hipoteca", "Calculadora de Pago de Deudas"],

  youMayLike: pickYouMayLike("auto-loan-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Préstamo de Auto",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};