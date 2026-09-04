// src/data/calculators/es/break-even-calculator.ts
export const breakEvenCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Punto de Equilibrio Gratis",
    metaDescription: "Calcula el punto de equilibrio de tu negocio en unidades e ingresos. Calculadora de punto de equilibrio gratis con análisis de margen de contribución.",
    canonicalSlug: "/es/finance/break-even-calculator",
    ogTitle: "Calculadora de Punto de Equilibrio",
    ogDescription: "Descubre cuántas unidades necesitas vender para cubrir tus costos fijos y variables.",
    twitterTitle: "Calculadora de Punto de Equilibrio Gratis",
    twitterDescription: "Calcula el punto de equilibrio de tu negocio al instante.",
  },

  hero: {
    text: "La Calculadora de Punto de Equilibrio encuentra exactamente cuántas unidades necesitas vender para cubrir todos tus costos. Ingresa los costos fijos, el costo variable por unidad y el precio de venta para ver al instante tu punto de equilibrio en unidades e ingresos. Esencial para emprendedores, dueños de pequeños negocios y startups.",
  },

  about: {
    text: `La Calculadora de Punto de Equilibrio determina el punto en el que los ingresos totales igualan a los costos totales, es decir, cuando tu negocio no genera ganancia ni pérdida.

Es útil para decisiones de precios, presupuestos, evaluar la viabilidad de un nuevo producto y entender cuántas ventas se necesitan antes de empezar a ser rentable.

La herramienta también muestra el margen de contribución por unidad y en porcentaje, lo que ayuda a entender la rentabilidad de cada venta más allá del punto de equilibrio.

Limitaciones: este cálculo asume que los costos y el precio de venta se mantienen constantes, algo que puede no cumplirse con descuentos por volumen, cambios en costos de proveedores o precios estacionales.

Usa esta herramienta durante la planeación de tu negocio, antes de lanzar un nuevo producto, o al evaluar si un cambio de precio tiene sentido.`,
  },

  formula: {
    formula: "Unidades de Equilibrio = Costos Fijos ÷ (Precio de Venta − Costo Variable por Unidad)",
    variables: [
      { symbol: "Costos Fijos", meaning: "Costos que no cambian con el volumen de producción, como la renta" },
      { symbol: "Costo Variable/Unidad", meaning: "Costo que varía directamente con cada unidad producida o vendida" },
      { symbol: "Precio de Venta/Unidad", meaning: "Precio al que se vende cada unidad" },
    ],
    explanation: "La calculadora divide los costos fijos totales entre el margen de contribución (precio de venta menos costo variable) para hallar cuántas unidades deben venderse para llegar al punto de equilibrio.",
    interpretation: "Por ejemplo, con $50,000 de costos fijos, $200 de costo variable y $350 de precio de venta, el margen de contribución es $150, por lo que necesitas alrededor de 334 unidades para el punto de equilibrio.",
  },

  steps: [
    "Ingresa tus costos fijos totales.",
    "Ingresa el costo variable por unidad.",
    "Ingresa el precio de venta por unidad.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta el punto de equilibrio en unidades.",
    "Revisa el monto de ingresos en el punto de equilibrio.",
    "Revisa el margen de contribución por unidad y su ratio.",
  ],

  examples: [
    { inputs: "Fijos: $50,000, Variable: $200/unidad, Precio: $350/unidad", result: "Equilibrio: 334 unidades, $116,900 en ingresos", explanation: "Escenario estándar de punto de equilibrio para un pequeño negocio." },
    { inputs: "Fijos: $200,000, Variable: $500/unidad, Precio: $800/unidad", result: "Equilibrio: 667 unidades, $533,600 en ingresos", explanation: "Costos fijos más altos requieren más unidades para llegar al equilibrio." },
    { inputs: "Fijos: $15,000, Variable: $50/unidad, Precio: $100/unidad", result: "Equilibrio: 300 unidades, $30,000 en ingresos", explanation: "Producto de pequeña escala con un margen de contribución saludable del 50%." },
    { inputs: "Fijos: $100,000, Variable: $1,200/unidad, Precio: $1,500/unidad", result: "Equilibrio: 334 unidades, $501,000 en ingresos", explanation: "Producto de mayor precio con un ratio de margen de contribución más bajo." },
  ],

  practicalUses: [
    "Decidir el volumen mínimo de ventas necesario para lanzar un producto",
    "Fijar un precio de venta viable para un producto nuevo",
    "Evaluar si una idea de negocio es viable financieramente",
    "Comparar puntos de equilibrio entre distintas estrategias de precio",
    "Planear cantidades de producción para una corrida de fabricación",
    "Evaluar el impacto de costos crecientes en la rentabilidad",
    "Preparar proyecciones financieras para inversionistas o préstamos",
    "Decidir si aceptar un pedido grande con descuento",
  ],

  expertTips: [
    "Reducir los costos fijos disminuye directamente el número de unidades necesarias para el equilibrio.",
    "Un precio de venta más alto reduce las unidades de equilibrio pero puede bajar la demanda — hay que equilibrar con cuidado.",
    "Da seguimiento al ratio de margen de contribución para comparar rentabilidad entre distintos productos.",
    "Recalcula el punto de equilibrio cada vez que cambien los costos de proveedores o los precios.",
    "Usa el análisis de punto de equilibrio junto con proyecciones de demanda, no de forma aislada.",
    "Considera los costos fijos escalonados (que aumentan a ciertos volúmenes) para una planeación más avanzada.",
    "Un punto de equilibrio muy por debajo del volumen de ventas realista indica un negocio sólido.",
    "Incluye todos los costos fijos — renta, salarios, servicios — no solo los más obvios.",
  ],

  commonMistakes: [
    { mistake: "Olvidar incluir todos los costos fijos", fix: "Lista cada costo recurrente — renta, salarios, seguros, servicios — antes de calcular." },
    { mistake: "Fijar un precio de venta menor al costo variable", fix: "El precio de venta debe superar el costo variable por unidad, o el equilibrio es matemáticamente imposible." },
    { mistake: "Ignorar los cambios de costos a mayor escala", fix: "Recalcula el punto de equilibrio si descuentos por volumen o nuevos proveedores cambian tu costo variable." },
    { mistake: "Confundir los ingresos de equilibrio con la ganancia", fix: "Los ingresos de equilibrio significan ganancia cero, no los ingresos necesarios para una ganancia objetivo." },
    { mistake: "Usar costos promedio en lugar de costos variables reales", fix: "El costo variable solo debe incluir costos que escalen directamente con la producción, no gastos fijos generales." },
  ],

  faq: [
    { q: "¿Qué es el punto de equilibrio?", a: "El punto de equilibrio es el volumen de ventas en el que los ingresos totales igualan exactamente a los costos totales, resultando en cero ganancia y cero pérdida." },
    { q: "¿Cómo se calculan las unidades de equilibrio?", a: "Divide los costos fijos totales entre el margen de contribución por unidad (precio de venta menos costo variable por unidad)." },
    { q: "¿Qué es el margen de contribución?", a: "El margen de contribución es lo que aporta cada unidad vendida para cubrir los costos fijos, calculado como precio de venta menos costo variable por unidad." },
    { q: "¿Por qué es importante el análisis de punto de equilibrio para una startup?", a: "Muestra el volumen mínimo de ventas necesario para evitar pérdidas, ayudando a validar el precio y la viabilidad del negocio antes del lanzamiento." },
    { q: "¿Qué pasa si vendo por debajo del punto de equilibrio?", a: "Vender por debajo del equilibrio significa que tu negocio está operando con pérdidas, ya que los ingresos no cubren los costos totales." },
    { q: "¿El análisis de punto de equilibrio incluye impuestos?", a: "No, el análisis estándar de punto de equilibrio se enfoca en costos operativos e ingresos; los impuestos suelen excluirse a menos que se agreguen específicamente como un costo." },
    { q: "¿El punto de equilibrio puede cambiar con el tiempo?", a: "Sí, cambia cada vez que cambian los costos fijos, los costos variables o el precio de venta." },
    { q: "¿Cuál es un buen ratio de margen de contribución?", a: "Varía según la industria, pero en general un 40% o más se considera saludable, aunque ratios más bajos también pueden funcionar con un volumen de ventas alto." },
    { q: "¿El análisis de punto de equilibrio sirve para negocios de servicios?", a: "Sí, los negocios de servicios pueden aplicarlo tratando las horas facturables o unidades de servicio en lugar de unidades de producto físico." },
    { q: "¿En qué se diferencian los ingresos de equilibrio de las unidades de equilibrio?", a: "Las unidades de equilibrio son la cantidad de ventas necesaria, mientras que los ingresos de equilibrio son esa cantidad multiplicada por el precio de venta." },
    { q: "¿Cómo calculo el punto de equilibrio en Excel?", a: "Crea celdas para costos fijos, costo variable por unidad y precio por unidad, y luego divide los costos fijos entre (precio menos costo variable) en una fórmula — la misma lógica que esta calculadora automatiza al instante." },
    { q: "¿Qué es el margen de seguridad en el análisis de punto de equilibrio?", a: "El margen de seguridad es cuánto superan las ventas reales o proyectadas al punto de equilibrio, expresado en unidades o porcentaje — un margen mayor significa más colchón ante caídas en las ventas." },
    { q: "¿Cómo afectan los costos fijos y variables al punto de equilibrio?", a: "Los costos fijos más altos elevan el punto de equilibrio porque se necesitan más unidades para cubrirlos, mientras que un costo variable por unidad más alto reduce el margen de contribución, también elevando las unidades de equilibrio." },
    { q: "¿El análisis de punto de equilibrio se puede usar para varios productos?", a: "Sí, usando un margen de contribución promedio ponderado según tu mezcla de productos, aunque requiere datos más detallados que un cálculo de un solo producto." },
    { q: "¿Cuál es la diferencia entre el punto de equilibrio y el periodo de recuperación?", a: "El punto de equilibrio mide cuándo los ingresos cubren los costos de la operación continua, mientras que el periodo de recuperación mide cuánto tiempo toma recuperar una inversión inicial, como el capital de arranque." },
  ],

  relatedCalculators: [
    "Profit Margin Calculator",
    "Markup Calculator",
    "ROI Calculator",
    "GST Calculator",
    "Loan EMI Calculator",
    "Discount Calculator",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Punto de Equilibrio",
    h2: ["Acerca de", "Fórmula", "Cómo Usar", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};