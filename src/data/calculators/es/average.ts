export const averageCalculatorContent = {
  meta: {
    seoTitle: "Calculadora de Promedio Online — Sacar la Media de Números",
    metaDescription: "Calcula el promedio (media) de cualquier conjunto de números al instante. Calculadora de promedio gratis con suma, cantidad, mínimo y máximo.",
    canonicalSlug: "/es/math-stats/average-calculator",
    ogTitle: "Calculadora de Promedio — Saca la Media al Instante",
    ogDescription: "Ingresa números separados por comas o espacios para calcular al instante su promedio, suma, mínimo y máximo.",
    twitterTitle: "Calculadora de Promedio Gratis",
    twitterDescription: "Calcula el promedio de cualquier lista de números en segundos.",
  },

  hero: {
    text: "La Calculadora de Promedio saca al instante la media de cualquier conjunto de números. Ingresa valores separados por comas o espacios y obtén el promedio, la suma, la cantidad, el mínimo y el máximo. Estudiantes, profesores, analistas y cualquiera que trabaje con datos puede usar esta herramienta gratuita.",
  },

  about: {
    text: `La Calculadora de Promedio obtiene la media aritmética de una lista de números. En vez de sumar valores a mano y dividir, esta herramienta te da un resultado instantáneo y exacto.

Es útil para calcular el promedio de calificaciones, promedio de gastos, promedio de puntos en deportes, promedio de calificaciones en encuestas, y cualquier conjunto de datos donde necesites una media rápida.

La herramienta también muestra la suma, la cantidad, el mínimo y el máximo de los números ingresados para dar más contexto.

Limitaciones: esto calcula la media aritmética simple, no el promedio ponderado, la mediana ni la moda. Para conjuntos de datos ponderados, usa una calculadora de promedio ponderado.

Usa esta herramienta cuando necesites un promedio rápido y sin errores de una lista pequeña o mediana de números.`,
  },

  formula: {
    formula: "Promedio = Suma de todos los números ÷ Cantidad de números",
    variables: [
      { symbol: "Suma", meaning: "Total de todos los números ingresados sumados entre sí" },
      { symbol: "Cantidad", meaning: "Cuántos números fueron ingresados" },
    ],
    explanation: "La calculadora suma cada número que ingresas y luego divide entre la cantidad de números que hay.",
    interpretation: "Por ejemplo, el promedio de 10, 20 y 30 es (10+20+30)/3 = 20.",
  },

  steps: [
    "Ingresa tus números separados por comas o espacios.",
    "Haz clic en Calcular para ejecutar la herramienta.",
    "Consulta el resultado del promedio (media).",
    "Revisa la suma de todos los números ingresados.",
    "Consulta la cantidad de números ingresados.",
    "Revisa los valores mínimo y máximo.",
    "Copia el resumen con el botón de copiar si lo necesitas.",
  ],

  examples: [
    { inputs: "10, 20, 30", result: "Promedio: 20", explanation: "Promedio simple de tres números con resultado exacto." },
    { inputs: "85, 90, 78, 92, 88", result: "Promedio: 86.6", explanation: "Caso común: promediar calificaciones de exámenes." },
    { inputs: "1500, 1800, 1650, 2000", result: "Promedio: 1737.5", explanation: "Útil para promediar gastos mensuales." },
    { inputs: "4.5, 3.8, 4.9, 4.2", result: "Promedio: 4.35", explanation: "Promediar calificaciones decimales como reseñas de productos." },
  ],

  practicalUses: [
    "Calcular el promedio de exámenes o calificaciones",
    "Encontrar el promedio de gastos o ingresos mensuales",
    "Promediar estadísticas deportivas como goles o carreras",
    "Calcular el promedio de reseñas o calificaciones de clientes",
    "Encontrar la temperatura promedio en un período",
    "Promediar las respuestas de una encuesta",
    "Calcular el tiempo promedio de traslado",
    "Sacar el promedio de calificaciones de una clase",
    "Promediar cifras de ventas entre meses",
    "Calcular la velocidad promedio a partir de varias lecturas",
  ],

  expertTips: [
    "Separa los números con comas o espacios — ambos formatos funcionan.",
    "Elimina los valores atípicos primero si quieres un promedio más representativo.",
    "Para calificaciones con distinto peso, usa un promedio ponderado en vez de la media simple.",
    "El promedio es sensible a valores extremos; revisa el mínimo y máximo para detectar sesgos.",
    "Redondea los valores intermedios solo al final para evitar errores acumulados.",
    "Usa la mediana en vez del promedio cuando tus datos tengan valores atípicos extremos.",
    "Verifica que no haya entradas duplicadas por error antes de calcular.",
    "Para conjuntos de datos grandes, una hoja de cálculo puede ser más rápida que ingresarlos a mano.",
  ],

  commonMistakes: [
    { mistake: "Ingresar texto no numérico mezclado con números", fix: "La herramienta filtra automáticamente las entradas inválidas — verifica que la cantidad coincida con lo esperado." },
    { mistake: "Olvidar separar los números correctamente", fix: "Usa comas o espacios de forma consistente entre cada número." },
    { mistake: "Confundir promedio con mediana", fix: "El promedio es la media; la mediana es el valor central — pueden diferir mucho con valores atípicos." },
    { mistake: "Incluir un decimal o signo negativo por error", fix: "Revisa tu lista antes de calcular." },
    { mistake: "Asumir que el promedio siempre representa lo 'típico'", fix: "Revisa el mínimo y máximo — unos pocos valores extremos pueden sesgar el promedio." },
  ],

  faq: [
    { q: "¿Cómo se calcula un promedio?", a: "Se suman todos los números y luego se divide el total entre la cantidad de números que hay. Esto da la media aritmética." },
    { q: "¿Cuál es la diferencia entre promedio y media?", a: "Promedio y media se refieren a lo mismo — la media aritmética, calculada como la suma dividida entre la cantidad." },
    { q: "¿Puedo calcular un promedio ponderado con esta herramienta?", a: "No, esta herramienta calcula el promedio simple. Para promedios ponderados, cada número necesita un peso asignado, lo cual requiere una calculadora de promedio ponderado dedicada." },
    { q: "¿Cuántos números puedo ingresar?", a: "Puedes ingresar tantos números como necesites, separados por comas o espacios, aunque listas muy grandes se manejan mejor en una hoja de cálculo." },
    { q: "¿Qué pasa si ingreso texto inválido?", a: "Las entradas no numéricas se filtran automáticamente y se excluyen del cálculo." },
    { q: "¿Es lo mismo promedio que mediana?", a: "No. El promedio es la suma dividida entre la cantidad, mientras que la mediana es el valor central cuando los números están ordenados — pueden dar resultados distintos con datos sesgados." },
    { q: "¿Esta calculadora acepta números negativos?", a: "Sí, los números negativos se incluyen normalmente en la suma y el cálculo del promedio." },
    { q: "¿Puedo calcular el promedio de decimales?", a: "Sí, los números decimales son totalmente compatibles y se calculan con precisión." },
    { q: "¿Por qué mi promedio es distinto de lo que esperaba?", a: "Revisa si hay valores atípicos o extremos — un solo número muy alto o muy bajo puede cambiar significativamente el promedio." },
    { q: "¿Qué significa 'cantidad' en los resultados?", a: "Cantidad es el número total de valores numéricos válidos que se incluyeron en el cálculo." },
    { q: "¿Cómo calculo mi promedio de calificaciones o GPA?", a: "Ingresa tus calificaciones individuales y esta herramienta te da el promedio simple; para un GPA ponderado por créditos, usa una calculadora de GPA dedicada." },
    { q: "¿Cuál es el promedio de un conjunto con un solo número?", a: "El promedio de un solo número es el número mismo, ya que la suma dividida entre una cantidad de 1 es igual a ese valor." },
    { q: "¿Puedo pegar números directamente desde una hoja de cálculo?", a: "Sí, puedes pegar una columna o fila de números separados por espacios, comas o saltos de línea y la herramienta los interpretará automáticamente." },
    { q: "¿Cómo se diferencia el promedio de la moda?", a: "El promedio es la media calculada de todos los valores, mientras que la moda es simplemente el valor que aparece con más frecuencia en el conjunto de datos — pueden ser números completamente distintos." },
    { q: "¿Agregar un cero a mi lista cambia el promedio?", a: "Sí, el cero cuenta como un número válido y se incluye tanto en la suma como en la cantidad, lo que reduce el promedio comparado con dejarlo fuera." },
  ],

  relatedCalculators: [
    "Calculadora de Porcentajes",
    "Calculadora de Desviación Estándar",
    "Calculadora de Media, Mediana y Moda",
    "Calculadora de Promedio Ponderado",
    "Calculadora de Suma",
  ],

  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],

  headingStructure: {
    h1: "Calculadora de Promedio",
    h2: ["Acerca de", "Fórmula", "Cómo Usarla", "Ejemplos", "Consejos", "Errores Comunes", "Preguntas Frecuentes", "Calculadoras Relacionadas"],
  },
};