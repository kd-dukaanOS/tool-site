// src/data/calculators/es/mortgage-refinance-calculator.ts
// NOTE: real slug is "mortgage-refinance-calculator" (tools_sorted.js)
import { pickYouMayLike } from "../../calculator-pool";

export const mortgageRefinanceCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Refinanciamiento Hipotecario 2026",
    metaDescription: "Calcula tu ahorro mensual, punto de equilibrio e interés ahorrado al refinanciar tu hipoteca. Gratis.",
    canonicalSlug: "/es/finance/mortgage-refinance-calculator",
    ogTitle: "Calculadora de Refinanciamiento Hipotecario",
    ogDescription: "Descubre si refinanciar tu hipoteca realmente te conviene.",
    twitterTitle: "Calculadora de Refinanciamiento",
    twitterDescription: "Calcula tu ahorro y punto de equilibrio al refinanciar.",
  },
  hero: {
    text: "La Calculadora de Refinanciamiento Hipotecario compara tu préstamo actual contra un nuevo préstamo refinanciado, mostrando tu ahorro mensual, el punto de equilibrio y el interés total ahorrado a largo plazo.",
  },
  about: {
    text: `Refinanciar una hipoteca significa reemplazar tu préstamo actual por uno nuevo, generalmente para obtener una tasa de interés más baja, cambiar el plazo del préstamo, o ambas cosas, aunque siempre implica pagar costos de cierre.

Esta calculadora recibe el saldo y tasa de tu préstamo actual, junto con la tasa, plazo y costos de cierre del nuevo préstamo propuesto, y calcula tu ahorro mensual, el punto de equilibrio (tiempo para recuperar los costos de cierre) y el ahorro total de interés durante la vida del préstamo.

Limitaciones: esta calculadora no incluye todos los posibles costos adicionales de refinanciamiento (como tasación o seguro de título); consulta con tu prestamista para obtener una cotización completa y precisa.`,
  },
  formula: {
    formula: "Punto de Equilibrio = Costos de Cierre / Ahorro Mensual",
    variables: [
      { symbol: "Ahorro Mensual", meaning: "Diferencia entre el pago mensual actual y el nuevo pago mensual propuesto" },
      { symbol: "Ahorro Total de Interés", meaning: "Diferencia entre el interés total que pagarías con el préstamo actual vs el nuevo préstamo" },
    ],
    explanation: "Se calcula el nuevo pago mensual con la tasa y plazo propuestos, se compara contra el pago actual para obtener el ahorro mensual, y se divide el costo de cierre entre ese ahorro mensual para determinar cuántos meses tardarás en recuperar la inversión del refinanciamiento.",
    interpretation: "Por ejemplo, si refinanciar te ahorra $150 al mes y los costos de cierre son de $4,000, tu punto de equilibrio es de aproximadamente 27 meses (poco más de 2 años).",
  },
  steps: [
    "Ingresa el saldo actual de tu préstamo y su tasa de interés.",
    "Ingresa los meses restantes de tu préstamo actual.",
    "Ingresa la nueva tasa de interés, el nuevo plazo en meses y los costos de cierre estimados.",
    "Haz clic en Calcular.",
    "Revisa tu ahorro mensual, punto de equilibrio y ahorro total de interés.",
  ],
  examples: [
    { inputs: "Saldo: $300,000, Tasa Actual: 6.5%, Nueva Tasa: 5.5%, Costos de Cierre: $4,000", result: "Ahorro mensual positivo con punto de equilibrio de aproximadamente 2 años", explanation: "Una reducción de 1 punto porcentual suele generar ahorro significativo si te quedas en la casa varios años más." },
    { inputs: "Saldo: $200,000, Tasa Actual: 5%, Nueva Tasa: 6%, Costos de Cierre: $3,000", result: "Pago mensual mayor, refinanciar no conviene", explanation: "Refinanciar a una tasa más alta generalmente no tiene sentido financiero, salvo casos especiales como eliminar PMI." },
    { inputs: "Saldo: $250,000, Tasa Actual: 7%, Nueva Tasa: 6%, Plazo Nuevo: 360 meses", result: "Ahorro mensual notable y ahorro de interés total a largo plazo", explanation: "Extender el plazo junto con una tasa menor reduce el pago mensual significativamente." },
  ],
  practicalUses: [
    "Decidir si vale la pena refinanciar tu hipoteca actual",
    "Calcular cuánto tiempo necesitas vivir en la casa para que el refinanciamiento valga la pena",
    "Comparar distintas ofertas de refinanciamiento de varios prestamistas",
    "Estimar el ahorro total de interés al cambiar a una tasa más baja",
    "Evaluar si conviene refinanciar a un plazo más corto para pagar la casa más rápido",
  ],
  expertTips: [
    "Si planeas mudarte antes de alcanzar el punto de equilibrio, el refinanciamiento probablemente no valga la pena financieramente.",
    "Refinanciar a un plazo más largo reduce el pago mensual pero puede aumentar el interés total pagado, incluso con una tasa más baja.",
    "Considera refinanciar para eliminar PMI si tu LTV ya bajó del 80%, incluso si la tasa de interés no mejora mucho.",
    "Compara siempre el costo total de cierre entre distintos prestamistas, ya que puede variar significativamente y afecta directamente tu punto de equilibrio.",
  ],
  commonMistakes: [
    { mistake: "Refinanciar sin considerar cuánto tiempo más vivirás en la casa", fix: "Calcula el punto de equilibrio y compáralo con tus planes de permanencia; si te mudas antes, perderás dinero en costos de cierre." },
    { mistake: "Enfocarse solo en el ahorro mensual sin ver el interés total", fix: "Extender el plazo puede bajar el pago mensual pero aumentar el interés total pagado; revisa ambos números." },
    { mistake: "No incluir todos los costos de cierre en el cálculo", fix: "Solicita una cotización completa de tu prestamista que incluya todos los cargos (tasación, seguro de título, originación) para un cálculo preciso." },
    { mistake: "Refinanciar solo por una pequeña reducción de tasa", fix: "Una reducción de tasa muy pequeña podría no justificar los costos de cierre; calcula el punto de equilibrio antes de decidir." },
  ],
  faq: [
    { q: "¿Cuándo conviene refinanciar mi hipoteca?", a: "Generalmente conviene cuando la nueva tasa de interés es significativamente menor a la actual y planeas quedarte en la vivienda más tiempo del que toma alcanzar el punto de equilibrio." },
    { q: "¿Qué es el punto de equilibrio en un refinanciamiento?", a: "Es el número de meses que tardas en recuperar los costos de cierre del refinanciamiento a través del ahorro mensual generado por la nueva tasa." },
    { q: "¿Cuánto cuestan típicamente los costos de cierre de un refinanciamiento?", a: "Los costos de cierre suelen representar entre 2% y 5% del monto del préstamo, e incluyen tasación, seguro de título y cargos de originación." },
    { q: "¿Vale la pena refinanciar por solo 0.5% menos de tasa de interés?", a: "Depende del monto del préstamo y los costos de cierre; para préstamos grandes, incluso una reducción pequeña puede generar ahorro significativo, pero calcula el punto de equilibrio primero." },
    { q: "¿El refinanciamiento reinicia el plazo de mi hipoteca?", a: "Sí, a menos que elijas específicamente un plazo restante igual al de tu préstamo actual; muchos refinanciamientos usan un nuevo plazo de 15 o 30 años." },
    { q: "¿Puedo refinanciar para eliminar el PMI de mi hipoteca?", a: "Sí, si tu relación préstamo-valor (LTV) ya bajó del 80% debido a pagos realizados o aumento en el valor de la vivienda, refinanciar puede eliminar el PMI." },
    { q: "¿Cómo afecta el refinanciamiento a mi puntaje crediticio?", a: "Solicitar un refinanciamiento genera una consulta de crédito que puede bajar temporalmente tu puntaje unos puntos, pero el efecto suele ser menor y de corto plazo." },
    { q: "¿Qué diferencia hay entre refinanciar y un pago anticipado de hipoteca?", a: "Refinanciar reemplaza tu préstamo completo por uno nuevo con distintos términos; un pago anticipado simplemente reduce el capital de tu préstamo actual sin cambiar sus condiciones." },
    { q: "¿Puedo refinanciar mi hipoteca más de una vez?", a: "Sí, puedes refinanciar múltiples veces si las condiciones del mercado lo justifican, aunque cada refinanciamiento implica nuevos costos de cierre a considerar." },
    { q: "¿Qué pasa si el resultado muestra 'sin ahorros' al refinanciar?", a: "Significa que la nueva tasa o plazo propuestos resultan en un pago mensual igual o mayor al actual, por lo que refinanciar no generaría beneficio financiero en tu caso." },
    { q: "¿Cuánto tiempo debo esperar antes de refinanciar mi hipoteca?", a: "No hay un tiempo fijo, pero muchos prestamistas requieren al menos 6 meses desde el cierre original; además, debes considerar si las tasas actuales justifican el cambio." },
    { q: "¿El refinanciamiento afecta mis pagos de impuesto predial?", a: "No directamente; el impuesto predial se basa en el valor tasado de la propiedad y las tasas locales, no en los términos de tu préstamo hipotecario." },
    { q: "¿Cómo se calcula el ahorro total de interés al refinanciar?", a: "Se compara el interés total que pagarías completando tu préstamo actual contra el interés total del nuevo préstamo propuesto durante su plazo completo." },
    { q: "¿Debo refinanciar a un plazo más corto o mantener el mismo plazo restante?", a: "Un plazo más corto generalmente ahorra más interés total pero aumenta el pago mensual; depende de tu capacidad de pago actual y tus metas financieras." },
  ],
  relatedCalculators: ["Calculadora de Hipoteca", "Calculadora de Pago Anticipado de Hipoteca", "Calculadora de Amortización de Préstamo", "Calculadora LTV"],
  youMayLike: pickYouMayLike("mortgage-refinance-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de Refinanciamiento Hipotecario",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};