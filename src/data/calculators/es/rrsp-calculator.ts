// src/data/calculators/es/rrsp-calculator.ts
// NOTE: category assumed "finance" — verify against tools_sorted.js
import { pickYouMayLike } from "../../calculator-pool";

export const rrspCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de RRSP (Canadá) 2026",
    metaDescription: "Calcula tu espacio de aporte RRSP y ahorro fiscal estimado en Canadá. Gratis e instantáneo.",
    canonicalSlug: "/es/finance/rrsp-calculator",
    ogTitle: "Calculadora de RRSP",
    ogDescription: "Descubre tu espacio de aporte RRSP y cuánto ahorras en impuestos.",
    twitterTitle: "Calculadora RRSP Canadá",
    twitterDescription: "Calcula tu ahorro fiscal con RRSP al instante.",
  },
  hero: {
    text: "La Calculadora de RRSP estima tu espacio de aporte disponible, tu ahorro fiscal esperado, y verifica si tu aporte planeado excede el límite, generando una posible penalidad del CRA en Canadá.",
  },
  about: {
    text: `El RRSP (Registered Retirement Savings Plan) es una cuenta de ahorro para el retiro en Canadá que permite deducir tus aportes de tu ingreso gravable, generando un ahorro fiscal inmediato, mientras el crecimiento de la inversión se difiere hasta el retiro.

Esta calculadora recibe tu ingreso ganado del año anterior, tu espacio de aporte no utilizado, tu aporte planeado y tu tasa de impuesto marginal, y calcula tu espacio de aporte disponible, el ahorro fiscal estimado de tu aporte, y si existe algún impuesto de penalidad por sobre-aporte según las reglas del CRA.

Limitaciones: esta calculadora usa los límites de aporte anual en dólares vigentes para 2025 y 2026; el CRA ajusta estos límites periódicamente, así que siempre verifica tu límite exacto en tu Aviso de Evaluación (Notice of Assessment).`,
  },
  formula: {
    formula: "Espacio de Aporte = min(18% del Ingreso del Año Anterior, Límite Anual) + Espacio No Utilizado",
    variables: [
      { symbol: "Límite Anual", meaning: "Monto máximo en dólares establecido por el CRA para el año fiscal correspondiente" },
      { symbol: "Ahorro Fiscal Estimado", meaning: "Aporte aplicado multiplicado por tu tasa de impuesto marginal" },
    ],
    explanation: "Tu espacio de aporte disponible es el menor entre el 18% de tu ingreso ganado del año anterior y el límite anual en dólares establecido por el CRA, más cualquier espacio no utilizado acumulado de años anteriores; el ahorro fiscal se calcula multiplicando tu aporte aplicado por tu tasa de impuesto marginal.",
    interpretation: "Por ejemplo, con $80,000 de ingreso del año anterior, $5,000 de espacio no utilizado y una tasa marginal del 30%, un aporte de $10,000 generaría un ahorro fiscal estimado de $3,000.",
  },
  steps: [
    "Selecciona el año fiscal correspondiente.",
    "Ingresa tu ingreso ganado del año anterior y tu espacio de aporte no utilizado.",
    "Ingresa tu aporte planeado y tu tasa de impuesto marginal.",
    "Haz clic en Calcular para ver tu espacio disponible, ahorro fiscal y cualquier penalidad por sobre-aporte.",
  ],
  examples: [
    { inputs: "Ingreso Anterior: $80,000, Espacio No Utilizado: $5,000, Aporte: $10,000, Tasa: 30%", result: "Ahorro fiscal estimado de $3,000, dentro del límite", explanation: "Un aporte típico dentro del espacio disponible generando ahorro fiscal proporcional." },
    { inputs: "Ingreso Anterior: $50,000, Aporte: $15,000, Tasa: 25%", result: "Posible sobre-aporte si el espacio disponible es menor al aporte planeado", explanation: "Aportar más del espacio disponible puede generar un impuesto de penalidad mensual del CRA." },
    { inputs: "Ingreso Anterior: $120,000, Espacio No Utilizado: $20,000, Aporte: $25,000, Tasa: 35%", result: "Ahorro fiscal significativo con aporte dentro del límite disponible", explanation: "Ingresos más altos y espacio acumulado permiten aportes mayores con ahorro fiscal proporcionalmente mayor." },
  ],
  practicalUses: [
    "Calcular cuánto espacio de aporte RRSP tienes disponible este año",
    "Estimar el ahorro fiscal inmediato de tu aporte planeado a RRSP",
    "Verificar si tu aporte planeado excede tu límite y generaría una penalidad del CRA",
    "Planear tu estrategia de aporte considerando espacio no utilizado de años anteriores",
    "Comparar el ahorro fiscal de distintos montos de aporte según tu tasa marginal",
  ],
  expertTips: [
    "El CRA permite un margen de sobre-aporte de por vida de $2,000 sin penalidad, pero cualquier exceso por encima de eso genera un impuesto mensual del 1%.",
    "Puedes acumular espacio de aporte no utilizado de años anteriores; consulta tu Aviso de Evaluación del CRA para conocer tu espacio exacto disponible.",
    "Aportar cerca del final del año fiscal antes de la fecha límite (generalmente los primeros 60 días del año siguiente) te permite deducir el aporte contra el año fiscal anterior si lo deseas.",
    "Tu ahorro fiscal real depende de tu tasa marginal de impuesto; aportar en años de ingreso alto generalmente maximiza el beneficio fiscal comparado con años de ingreso bajo.",
  ],
  commonMistakes: [
    { mistake: "Aportar más del espacio disponible sin verificar el límite exacto", fix: "Consulta siempre tu Aviso de Evaluación del CRA para confirmar tu espacio de aporte real antes de aportar montos grandes." },
    { mistake: "Olvidar el espacio de aporte no utilizado de años anteriores", fix: "El espacio no utilizado se acumula y puede sumarse a tu límite del año actual, aumentando tu capacidad total de aporte." },
    { mistake: "No considerar tu tasa marginal real al estimar el ahorro fiscal", fix: "Usa tu tasa de impuesto marginal específica (no tu tasa promedio) para calcular con precisión el ahorro fiscal real de tu aporte." },
    { mistake: "Ignorar el impuesto de penalidad mensual por sobre-aporte", fix: "Si excedes tu límite disponible por más del margen permitido, el CRA cobra un 1% mensual sobre el exceso hasta que se corrija." },
  ],
  faq: [
    { q: "¿Qué es un RRSP en Canadá?", a: "Es una cuenta de ahorro registrada para el retiro (Registered Retirement Savings Plan) que permite deducir tus aportes de tu ingreso gravable, generando ahorro fiscal inmediato mientras el crecimiento se difiere hasta el retiro." },
    { q: "¿Cómo se calcula mi espacio de aporte RRSP?", a: "Se calcula como el menor entre el 18% de tu ingreso ganado del año anterior y el límite anual en dólares establecido por el CRA, más cualquier espacio no utilizado acumulado de años anteriores." },
    { q: "¿Qué pasa si aporto más de mi límite de RRSP?", a: "El CRA permite un margen de sobre-aporte de por vida de $2,000 sin penalidad; cualquier exceso por encima de eso genera un impuesto de penalidad del 1% mensual sobre el monto excedente." },
    { q: "¿Cómo se calcula mi ahorro fiscal por aportar a un RRSP?", a: "Se multiplica el monto de tu aporte (dentro del límite) por tu tasa de impuesto marginal, ya que el aporte reduce tu ingreso gravable en esa proporción." },
    { q: "¿Puedo usar mi espacio de aporte no utilizado de años anteriores?", a: "Sí, el espacio de aporte RRSP no utilizado se acumula indefinidamente y puede usarse en cualquier año futuro, sumándose a tu límite del año actual." },
    { q: "¿Cuál es la fecha límite para aportar a mi RRSP?", a: "Generalmente puedes aportar durante todo el año calendario, y tienes hasta los primeros 60 días del año siguiente para hacer aportes que cuenten para la deducción del año fiscal anterior." },
    { q: "¿Cómo sé cuál es mi límite exacto de aporte RRSP?", a: "Tu límite exacto se muestra en tu Aviso de Evaluación (Notice of Assessment) más reciente emitido por el CRA después de presentar tu declaración de impuestos." },
    { q: "¿Los aportes RRSP siempre son deducibles de impuestos?", a: "Sí, los aportes dentro de tu límite disponible son deducibles de tu ingreso gravable, reduciendo tu impuesto a pagar en el año en que reclamas la deducción." },
    { q: "¿Cuál es la diferencia entre RRSP y TFSA en Canadá?", a: "El RRSP ofrece deducción fiscal al aportar pero grava los retiros como ingreso; el TFSA no ofrece deducción al aportar, pero los retiros son completamente libres de impuestos." },
    { q: "¿Qué pasa con mi RRSP cuando me jubilo?", a: "Generalmente debes convertir tu RRSP a un RRIF (Registered Retirement Income Fund) o comprar una anualidad antes de finalizar el año en que cumples 71 años, comenzando a retirar fondos gravables." },
    { q: "¿Puedo retirar dinero de mi RRSP antes de jubilarme?", a: "Sí, pero generalmente se aplica retención de impuestos al momento del retiro, y el monto retirado se suma a tu ingreso gravable del año, salvo excepciones como el Plan de Compra de Vivienda (HBP)." },
    { q: "¿Cómo afecta mi tasa marginal de impuesto al beneficio de aportar a RRSP?", a: "Aportar durante años de ingreso alto (tasa marginal alta) generalmente maximiza el ahorro fiscal, comparado con aportar durante años de ingreso bajo." },
    { q: "¿El espacio de aporte RRSP es el mismo para todos los canadienses?", a: "No, tu espacio de aporte depende de tu ingreso ganado individual del año anterior y tu historial de aportes y espacio no utilizado acumulado." },
    { q: "¿Qué es el impuesto de penalidad mensual por sobre-aporte a RRSP?", a: "Es un cargo del 1% mensual que el CRA aplica sobre el monto de sobre-aporte que exceda el margen permitido de $2,000 de por vida, hasta que se corrija la situación." },
  ],
  relatedCalculators: ["Calculadora de TFSA", "Calculadora de RRIF", "Calculadora de Impuestos de Canadá", "Calculadora de Jubilación"],
  youMayLike: pickYouMayLike("rrsp-calculator"),
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "Calculadora de RRSP",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};