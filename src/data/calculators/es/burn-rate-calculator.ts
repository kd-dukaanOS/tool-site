// src/data/calculators/es/burn-rate-calculator.ts
import { pickYouMayLike } from "../../calculator-pool";

export const burnRateCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Tasa de Consumo (Burn Rate) para Startups",
    metaDescription: "Calculadora de tasa de consumo gratis. Calcula tu consumo bruto, neto y la reserva de caja (runway) en meses según tu saldo, ingresos y gastos.",
    canonicalSlug: "/es/business/burn-rate-calculator",
    ogTitle: "Calculadora de Tasa de Consumo - Burn Rate Bruto y Neto",
    ogDescription: "Calcula al instante la tasa de consumo mensual de tu startup y tu reserva de caja.",
    twitterTitle: "Calculadora de Burn Rate Gratis",
    twitterDescription: "Consulta tu tasa de consumo y reserva de caja en segundos.",
  },

  hero: {
    text: "La Calculadora de Tasa de Consumo encuentra tu tasa de consumo bruta (gasto mensual total) y tu tasa de consumo neta (gasto menos ingresos), y luego estima tu reserva de caja: cuántos meses te durará tu saldo actual a ese ritmo.",
  },

  about: {
    text: `La tasa de consumo (burn rate) es la velocidad a la que una startup gasta sus reservas de efectivo cada mes. La tasa de consumo bruta es el total de tus gastos operativos mensuales; la tasa de consumo neta resta los ingresos mensuales, mostrando el ritmo real de agotamiento de tu caja.

La reserva de caja se calcula dividiendo tu saldo actual entre tu tasa de consumo neta — te dice cuántos meses tienes antes de quedarte sin efectivo al ritmo actual, asumiendo que no hay nuevo financiamiento ni cambios importantes.

Los inversionistas y fundadores dan seguimiento cercano a la tasa de consumo porque determina directamente cuánta reserva queda para alcanzar hitos, levantar una siguiente ronda o llegar a la rentabilidad.

Limitaciones: esta es una foto basada en las cifras de un solo mes. No considera el crecimiento de ingresos, picos estacionales de gasto ni contrataciones planeadas — para proyecciones a varios meses, modela ingresos y gastos por separado para cada mes.`,
  },

  formula: {
    formula: "Tasa de Consumo Bruta = Gastos Operativos Mensuales; Tasa de Consumo Neta = Gastos Mensuales − Ingresos Mensuales; Reserva de Caja = Saldo de Caja ÷ Tasa de Consumo Neta",
    variables: [
      { symbol: "Tasa de Consumo Bruta", meaning: "Efectivo total gastado mensualmente en operaciones, antes de ingresos" },
      { symbol: "Tasa de Consumo Neta", meaning: "Disminución real de efectivo mensual después de restar los ingresos" },
      { symbol: "Reserva de Caja", meaning: "Meses restantes antes de que el efectivo llegue a cero al ritmo de consumo neto actual" },
    ],
    explanation: "La tasa de consumo neta refleja la pérdida mensual real de efectivo; dividir tu saldo de caja actual entre esta cifra da el número de meses de reserva restantes antes de quedarte sin efectivo.",
    interpretation: "Por ejemplo, $40,000 en gastos mensuales contra $15,000 en ingresos da una tasa de consumo neta de $25,000 — con $300,000 en el banco, eso son 12 meses de reserva.",
  },

  steps: [
    "Ingresa tu saldo de caja actual en el banco.",
    "Ingresa tus ingresos mensuales promedio.",
    "Ingresa tus gastos operativos mensuales totales.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Revisa tu consumo bruto, consumo neto y reserva de caja en meses.",
  ],

  examples: [
    { inputs: "Caja: $300,000, Ingresos: $15,000, Gastos: $40,000", result: "Consumo Bruto: $40,000, Consumo Neto: $25,000, Reserva: 12 meses", explanation: "Una startup en etapa temprana con 12 meses para alcanzar hitos o levantar otra ronda." },
    { inputs: "Caja: $1,000,000, Ingresos: $80,000, Gastos: $120,000", result: "Consumo Bruto: $120,000, Consumo Neto: $40,000, Reserva: 25 meses", explanation: "Los ingresos compensan significativamente los gastos, extendiendo la reserva más allá del objetivo típico de 12-18 meses." },
    { inputs: "Caja: $150,000, Ingresos: $50,000, Gastos: $35,000", result: "Consumo Bruto: $35,000, Consumo Neto: -$15,000, Reserva: Flujo de caja positivo", explanation: "Los ingresos superan los gastos — el negocio tiene flujo de caja positivo y no está consumiendo sus reservas." },
  ],

  practicalUses: [
    "Dar seguimiento a cuántos meses de reserva quedan antes de la próxima ronda de financiamiento",
    "Decidir cuándo empezar a levantar capital según la reserva restante",
    "Probar cómo un plan de contratación o un recorte de gastos cambia la reserva",
    "Comparar consumo bruto vs neto para ver cuánto compensan los ingresos al gasto",
    "Reportar la tasa de consumo y la reserva a inversionistas o al consejo",
    "Fijar un múltiplo de consumo objetivo respecto al crecimiento de ingresos",
  ],

  expertTips: [
    "La mayoría de los inversionistas quiere ver al menos 12-18 meses de reserva después de cerrar una ronda.",
    "Un aumento en la tasa de consumo neta sin un crecimiento proporcional de ingresos es una señal de alerta que vale la pena investigar pronto.",
    "Da seguimiento a la tasa de consumo mensualmente, no solo al momento de levantar capital — pequeños incrementos de gasto se acumulan rápido en un año.",
    "El consumo bruto importa para la disciplina de costos; el consumo neto importa para la supervivencia real — da seguimiento a ambos, no solo a uno.",
    "Si tu tasa de consumo neta es negativa (los ingresos superan los gastos), tienes flujo de caja positivo y no dependes de los cálculos de reserva.",
    "Empieza conversaciones de financiamiento cuando tengas 6 o más meses de reserva — las rondas suelen tardar de 3 a 6 meses en cerrarse.",
  ],

  commonMistakes: [
    { mistake: "Confundir el consumo bruto con el consumo neto", fix: "El consumo bruto ignora los ingresos por completo; el consumo neto (gastos menos ingresos) es la cifra que realmente determina tu reserva." },
    { mistake: "Asumir que los gastos se mantendrán planos durante todo el periodo de reserva", fix: "Considera contrataciones planeadas, aumentos de precios o costos estacionales — una estimación de reserva a tasa fija suele ser optimista." },
    { mistake: "Ignorar gastos únicos en el promedio mensual", fix: "Usa un mes reciente representativo o un promedio de 3 meses en vez de un mes con un costo inusual único." },
    { mistake: "Esperar hasta tener menos de 3 meses de reserva para levantar capital", fix: "Empieza a levantar capital con al menos 6 meses de reserva, ya que las rondas suelen tardar varios meses en cerrarse." },
    { mistake: "No recalcular la tasa de consumo tras cambios en los ingresos", fix: "Revisa la tasa de consumo y la reserva mensualmente — una caída o alza en ingresos cambia tu línea de tiempo de supervivencia de inmediato." },
  ],

  faq: [
    { q: "¿Qué es el burn rate o tasa de consumo?", a: "Es la velocidad a la que una empresa gasta sus reservas de efectivo cada mes, expresada normalmente como consumo bruto (gastos totales) o consumo neto (gastos menos ingresos)." },
    { q: "¿Cuál es la diferencia entre consumo bruto y consumo neto?", a: "El consumo bruto es el total de tus gastos operativos mensuales; el consumo neto resta los ingresos mensuales de los gastos, mostrando la disminución real mensual de tu saldo de caja." },
    { q: "¿Cómo calculo la reserva de caja a partir de la tasa de consumo?", a: "Divide tu saldo de caja actual entre tu tasa de consumo neta — por ejemplo, $300,000 en caja con una tasa de consumo neta de $25,000 da 12 meses de reserva." },
    { q: "¿Cuál es una buena tasa de consumo para una startup?", a: "No hay una cifra universal — lo que importa es si tu reserva (típicamente 12-18 meses o más) te da tiempo suficiente para alcanzar hitos clave o llegar a tu próxima ronda." },
    { q: "¿Qué significa tener flujo de caja positivo?", a: "Una empresa tiene flujo de caja positivo cuando los ingresos mensuales superan a los gastos mensuales, es decir, la tasa de consumo neta es negativa y las reservas de efectivo crecen en vez de agotarse." },
    { q: "¿Cuánta reserva de caja debería tener una startup?", a: "La mayoría de los inversionistas y asesores recomiendan mantener al menos 12-18 meses de reserva, empezando a levantar capital cuando la reserva baje a unos 6 meses." },
    { q: "¿Cuál es la diferencia entre tasa de consumo y reserva de caja?", a: "La tasa de consumo mide qué tan rápido gastas efectivo cada mes; la reserva de caja mide cuántos meses durará tu saldo actual a ese ritmo." },
    { q: "¿Cómo puede una startup reducir su tasa de consumo?", a: "Algunos enfoques comunes son recortar gastos no esenciales, retrasar contrataciones, renegociar contratos con proveedores y enfocar el gasto en actividades que generan ingresos." },
    { q: "¿Una tasa de consumo alta siempre es mala?", a: "No necesariamente — una tasa de consumo alta que financia un crecimiento rápido y bien validado puede ser razonable, siempre que esté respaldada por suficiente reserva y un camino claro hacia ingresos o rentabilidad." },
    { q: "¿Con qué frecuencia debería revisar la tasa de consumo?", a: "La mayoría de las startups revisan la tasa de consumo mensualmente como parte de su reporte financiero estándar, ya que incluso pequeños cambios en gastos o ingresos pueden cambiar significativamente la reserva." },
    { q: "¿Qué es el burn multiple?", a: "El burn multiple es el consumo neto dividido entre los nuevos ingresos netos agregados en el periodo — un burn multiple más bajo indica un crecimiento más eficiente en capital." },
    { q: "¿La tasa de consumo incluye gastos únicos?", a: "Puede incluirlos, pero suele ser más útil separar los gastos operativos recurrentes de los costos únicos para obtener una cifra de consumo continuo más limpia." },
    { q: "¿Cómo afecta el crecimiento de ingresos a la reserva de caja?", a: "A medida que los ingresos crecen y reducen la brecha con los gastos, la tasa de consumo neta baja, lo que extiende la reserva incluso si el gasto total se mantiene igual." },
    { q: "¿Qué pasa cuando una startup se queda sin reserva de caja?", a: "Sin nuevo financiamiento o sin alcanzar la rentabilidad antes de que la reserva llegue a cero, una empresa por lo general debe recortar costos drásticamente, levantar capital con urgencia o cesar operaciones." },
  ],

  relatedCalculators: ["Runway Calculator", "Cash Flow Calculator", "MRR Calculator", "Break-Even Calculator"],

  youMayLike: pickYouMayLike("burn-rate-calculator"),

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Tasa de Consumo",
    h2: ["Acerca de", "Fórmula", "Cómo Usar", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};