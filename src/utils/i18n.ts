// src/utils/i18n.ts

export interface LocalizedTool {
  slug: string;
  category: string;
  name: string;
  desc: string;
}

/**
 * Registry of tools currently available in Spanish with translated content & widgets.
 */
export const SPANISH_TOOLS: LocalizedTool[] = [
  { slug: "401k-calculator", category: "finance", name: "Calculadora de 401(k)", desc: "Proyección de ahorros para la jubilación con aporte del empleador" },
  { slug: "age-calculator", category: "date-time", name: "Calculadora de Edad", desc: "Calcula tu edad exacta en años, meses y días" },
  { slug: "area-converter", category: "converters", name: "Conversor de Área", desc: "Convierte entre metros cuadrados, pies, acres y hectáreas" },
  { slug: "arr-calculator", category: "finance", name: "Calculadora de ARR", desc: "Ingreso Recurrente Anual y proyección de crecimiento SaaS" },
  { slug: "auto-loan-calculator", category: "finance", name: "Calculadora de Préstamo de Auto", desc: "Calcula tu pago mensual de auto e intereses" },
  { slug: "average-calculator", category: "math-stats", name: "Calculadora de Promedio", desc: "Calcula la media de cualquier conjunto de números" },
  { slug: "base64-tool", category: "converters", name: "Herramienta Base64", desc: "Codifica y decodifica texto en Base64 al instante" },
  { slug: "birthday-calculator", category: "date-time", name: "Calculadora de Cumpleaños", desc: "Cuenta regresiva y días faltantes para tu cumpleaños" },
  { slug: "bmi-calculator", category: "health", name: "Calculadora de IMC", desc: "Índice de Masa Corporal y rango de peso saludable" },
  { slug: "bmr-calculator", category: "health", name: "Calculadora de TMB", desc: "Tasa Metabólica Basal y calorías quemadas en reposo" },
  { slug: "body-fat-calculator", category: "health", name: "Calculadora de Grasa Corporal", desc: "Porcentaje de grasa corporal con método de la Marina" },
  { slug: "bonus-calculator", category: "finance", name: "Calculadora de Bono", desc: "Calcula tu bono bruto y neto después de impuestos" },
  { slug: "break-even-calculator", category: "finance", name: "Calculadora de Punto de Equilibrio", desc: "Unidades e ingresos necesarios para cubrir costos" },
  { slug: "burn-rate-calculator", category: "business", name: "Calculadora de Tasa de Consumo (Burn Rate)", desc: "Calcula el consumo de caja y runway de tu startup" },
  { slug: "business-days-calculator", category: "date-time", name: "Calculadora de Días Hábiles", desc: "Cuenta días laborables excluyendo fines de semana y festivos" },
  { slug: "business-valuation-calculator", category: "finance", name: "Calculadora de Valoración de Negocios", desc: "Estima el valor de tu negocio con múltiplos de ingresos y utilidad" },
  { slug: "cagr-calculator", category: "finance", name: "Calculadora de CAGR", desc: "Tasa de crecimiento anual compuesta de tus inversiones" },

  // Text Tools
  { slug: "case-converter", category: "text-tools", name: "Conversor de Mayúsculas", desc: "Convierte texto a mayúsculas, minúsculas y más al instante" },
  { slug: "diff-checker", category: "text-tools", name: "Comparador de Textos", desc: "Compara dos bloques de texto y encuentra las diferencias" },
  { slug: "markdown-previewer", category: "text-tools", name: "Vista Previa de Markdown", desc: "Previsualiza Markdown en vivo mientras escribes" },
  { slug: "slug-generator", category: "text-tools", name: "Generador de Slugs", desc: "Convierte texto en slugs para URLs" },

  // Developer Tools
  { slug: "csv-json-converter", category: "developer-tools", name: "Conversor CSV a JSON", desc: "Convierte entre archivos CSV y JSON" },
  { slug: "json-formatter", category: "developer-tools", name: "Formateador JSON", desc: "Formatea y valida JSON al instante" },
  { slug: "jwt-decoder", category: "developer-tools", name: "Decodificador JWT", desc: "Decodifica y verifica tokens JWT" },
  { slug: "number-base-converter", category: "developer-tools", name: "Conversor de Base Numérica", desc: "Convierte entre binario, decimal, hexadecimal y más" },
  { slug: "regex-tester", category: "developer-tools", name: "Probador de Expresiones Regulares", desc: "Prueba patrones regex en tiempo real" },

  // Security Tools
  { slug: "password-generator", category: "security-tools", name: "Generador de Contraseñas", desc: "Genera contraseñas seguras y aleatorias" },
  { slug: "uuid-generator", category: "security-tools", name: "Generador de UUID", desc: "Genera identificadores únicos UUID" },

  // Generators & Calculators
  { slug: "lorem-ipsum-generator", category: "generators-calculators", name: "Generador de Lorem Ipsum", desc: "Genera texto de relleno para maquetas y diseños" },
  { slug: "percentage-calculator", category: "generators-calculators", name: "Calculadora de Porcentajes", desc: "Calcula porcentajes al instante" },
  { slug: "qr-code-generator", category: "generators-calculators", name: "Generador de Códigos QR", desc: "Genera códigos QR gratis a partir de texto o URLs" },

  // Business (remaining)
  { slug: "cash-flow-calculator", category: "business", name: "Calculadora de Flujo de Caja", desc: "Proyecta las entradas y salidas de efectivo de tu negocio" },
  { slug: "markup-calculator", category: "business", name: "Calculadora de Margen de Ganancia", desc: "Calcula el precio de venta a partir del costo y el margen deseado" },
  { slug: "mrr-calculator", category: "business", name: "Calculadora de MRR", desc: "Ingreso Recurrente Mensual y proyección de crecimiento SaaS" },
  { slug: "runway-calculator", category: "business", name: "Calculadora de Runway", desc: "Calcula cuántos meses de efectivo le quedan a tu startup" },

  // Converters (remaining)
  { slug: "color-converter", category: "converters", name: "Conversor de Color", desc: "Convierte entre HEX, RGB y HSL" },
  { slug: "currency-converter", category: "converters", name: "Conversor de Divisas", desc: "Convierte entre monedas con tasas actualizadas" },
  { slug: "data-storage-converter", category: "converters", name: "Conversor de Almacenamiento de Datos", desc: "Convierte entre KB, MB, GB y más" },
  { slug: "length-converter", category: "converters", name: "Conversor de Longitud", desc: "Convierte entre metros, pies, millas y más" },
  { slug: "pressure-calculator", category: "converters", name: "Conversor de Presión", desc: "Convierte entre unidades de presión" },
  { slug: "speed-calculator", category: "converters", name: "Conversor de Velocidad", desc: "Convierte entre km/h, mph y otras unidades de velocidad" },
  { slug: "temperature-converter", category: "converters", name: "Conversor de Temperatura", desc: "Convierte entre Celsius, Fahrenheit y Kelvin" },
  { slug: "timestamp-converter", category: "converters", name: "Conversor de Marca de Tiempo", desc: "Convierte entre timestamps Unix y fechas legibles" },
  { slug: "volume-calculator", category: "converters", name: "Conversor de Volumen", desc: "Convierte entre litros, galones y otras unidades de volumen" },
  { slug: "weight-calculator", category: "converters", name: "Conversor de Peso", desc: "Convierte entre kg, libras y otras unidades de peso" },

  // Date & Time (remaining)
  { slug: "date-difference-calculator", category: "date-time", name: "Calculadora de Diferencia de Fechas", desc: "Calcula la cantidad de días entre dos fechas" },
  { slug: "time-duration-calculator", category: "date-time", name: "Calculadora de Diferencia de Horas", desc: "Calcula cuántas horas y minutos hay entre dos horas" },
  { slug: "timezone-calculator", category: "date-time", name: "Calculadora de Zona Horaria", desc: "Convierte horas entre distintas zonas horarias" },

  // Finance (remaining)
  { slug: "ca-cpp-calculator", category: "finance", name: "Calculadora de CPP", desc: "Estima tus beneficios del Plan de Pensiones de Canadá" },
  { slug: "ca-ei-calculator", category: "finance", name: "Calculadora de EI (Seguro de Empleo)", desc: "Calcula tus aportes y beneficios de Seguro de Empleo en Canadá" },
  { slug: "ca-income-tax", category: "finance", name: "Calculadora de Impuesto sobre la Renta de Canadá", desc: "Calcula tu impuesto federal y provincial en Canadá" },
  { slug: "ca-take-home-pay", category: "finance", name: "Calculadora de Salario Neto de Canadá", desc: "Calcula tu salario neto después de impuestos, CPP y EI" },
  { slug: "canada-capital-gains", category: "finance", name: "Calculadora de Ganancias de Capital de Canadá", desc: "Estima el impuesto sobre tus ganancias de capital en Canadá" },
  { slug: "canada-retirement", category: "finance", name: "Calculadora de Jubilación de Canadá", desc: "Proyecta tus ahorros de jubilación en Canadá" },
  { slug: "capital-gains-tax-calculator", category: "finance", name: "Calculadora de Impuesto sobre Ganancias de Capital", desc: "Estima el impuesto sobre la venta de inversiones o propiedades" },
  { slug: "child-tax-credit-calculator", category: "finance", name: "Calculadora de Crédito Tributario por Hijos", desc: "Calcula tu Crédito Tributario por Hijos (CTC) según tus ingresos" },
  { slug: "churn-rate-calculator", category: "finance", name: "Calculadora de Tasa de Cancelación (Churn)", desc: "Calcula la tasa de cancelación de clientes de tu negocio" },
  { slug: "closing-costs-calculator", category: "finance", name: "Calculadora de Costos de Cierre", desc: "Estima los costos de cierre al comprar una vivienda" },
  { slug: "coast-fire-calculator", category: "finance", name: "Calculadora de Coast FIRE", desc: "Calcula si ya ahorraste lo suficiente para dejar de invertir y aun así jubilarte" },
  { slug: "commission-calculator", category: "finance", name: "Calculadora de Comisiones", desc: "Calcula tus ganancias por comisión de ventas" },
  { slug: "compound-interest-calculator", category: "finance", name: "Calculadora de Interés Compuesto", desc: "Calcula el crecimiento de una inversión con interés compuesto" },
  { slug: "credit-card-interest-calculator", category: "finance", name: "Calculadora de Interés de Tarjeta de Crédito", desc: "Calcula cuánto pagarás en intereses de tarjeta de crédito" },
  { slug: "credit-card-payoff-calculator", category: "finance", name: "Calculadora de Pago de Tarjeta de Crédito", desc: "Calcula cuánto tiempo te tomará pagar tu saldo" },
  { slug: "customer-acquisition-cost-calculator", category: "finance", name: "Calculadora de Costo de Adquisición de Clientes (CAC)", desc: "Calcula el CAC a partir del gasto en marketing" },
  { slug: "debt-avalanche-calculator", category: "finance", name: "Calculadora de Avalancha de Deuda", desc: "Paga tus deudas priorizando la tasa de interés más alta" },
  { slug: "debt-consolidation-calculator", category: "finance", name: "Calculadora de Consolidación de Deuda", desc: "Compara consolidar tus deudas en un solo préstamo" },
  { slug: "debt-payoff-calculator", category: "finance", name: "Calculadora de Pago de Deudas", desc: "Calcula cuánto tiempo te tomará liquidar tus deudas" },
  { slug: "debt-snowball", category: "finance", name: "Calculadora de Bola de Nieve de Deuda", desc: "Paga tus deudas priorizando el saldo más pequeño" },
  { slug: "debt-to-income", category: "finance", name: "Calculadora de Relación Deuda-Ingreso", desc: "Calcula tu relación deuda-ingreso (DTI)" },
  { slug: "discount-calculator", category: "finance", name: "Calculadora de Descuento", desc: "Calcula el precio final con descuento aplicado" },
  { slug: "dividend-yield", category: "finance", name: "Calculadora de Rendimiento por Dividendo", desc: "Calcula el rendimiento anual por dividendos de una acción" },
  { slug: "down-payment-calculator", category: "finance", name: "Calculadora de Pago Inicial", desc: "Calcula el pago inicial necesario para comprar una vivienda" },
  { slug: "effective-tax-rate", category: "finance", name: "Calculadora de Tasa de Impuesto Efectiva", desc: "Calcula tu tasa de impuesto efectiva real" },
  { slug: "eitc-calculator", category: "finance", name: "Calculadora de Crédito por Ingreso del Trabajo (EITC)", desc: "Calcula tu elegibilidad y monto del EITC" },
  { slug: "emergency-fund-calculator", category: "finance", name: "Calculadora de Fondo de Emergencia", desc: "Calcula cuánto necesitas ahorrar para tu fondo de emergencia" },
  { slug: "emi-calculator", category: "finance", name: "Calculadora de EMI", desc: "Calcula tu cuota mensual equivalente (EMI) de un préstamo" },
  { slug: "fd-calculator", category: "finance", name: "Calculadora de Depósito a Plazo Fijo", desc: "Calcula el valor de vencimiento de un depósito a plazo fijo" },
  { slug: "fire-calculator", category: "finance", name: "Calculadora FIRE", desc: "Calcula cuánto necesitas para la independencia financiera" },
  { slug: "freelancer-rate-calculator", category: "finance", name: "Calculadora de Tarifa para Freelancers", desc: "Calcula tu tarifa por hora ideal como freelancer" },
  { slug: "future-value-calculator", category: "finance", name: "Calculadora de Valor Futuro", desc: "Proyecta el valor futuro de una inversión" },
  { slug: "gross-margin-calculator", category: "finance", name: "Calculadora de Margen Bruto", desc: "Calcula el margen bruto de ganancia de tu negocio" },
  { slug: "gst-hst-calculator", category: "finance", name: "Calculadora de GST/HST", desc: "Añade o quita el GST/HST canadiense de un precio" },
  { slug: "home-affordability-calculator", category: "finance", name: "Calculadora de Capacidad de Compra de Vivienda", desc: "Calcula cuánta casa puedes pagar" },
  { slug: "hourly-to-salary-calculator", category: "finance", name: "Calculadora de Tarifa por Hora a Salario", desc: "Convierte tu tarifa por hora en salario anual" },
  { slug: "ideal-weight-calculator", category: "finance", name: "Calculadora de Peso Ideal", desc: "Calcula tu rango de peso ideal según tu estatura" },
  { slug: "inflation-calculator", category: "finance", name: "Calculadora de Inflación", desc: "Calcula el valor de tu dinero ajustado por inflación" },
  { slug: "inventory-turnover-calculator", category: "finance", name: "Calculadora de Rotación de Inventario", desc: "Calcula qué tan rápido se vende tu inventario" },
  { slug: "investment-return-calculator", category: "finance", name: "Calculadora de Retorno de Inversión", desc: "Calcula el retorno de una inversión a lo largo del tiempo" },
  { slug: "invoice-due-date-calculator", category: "finance", name: "Calculadora de Fecha de Vencimiento de Factura", desc: "Calcula la fecha de vencimiento de una factura según sus términos" },
  { slug: "loan-amortization-calculator", category: "finance", name: "Calculadora de Amortización de Préstamo", desc: "Genera la tabla de amortización de un préstamo" },
  { slug: "ltv-calculator", category: "finance", name: "Calculadora de LTV (Préstamo-Valor)", desc: "Calcula la relación préstamo-valor de una hipoteca" },
  { slug: "medicare-tax-calculator", category: "finance", name: "Calculadora de Impuesto Medicare", desc: "Calcula tu impuesto Medicare, incluyendo el impuesto adicional" },
  { slug: "mortgage-affordability-calculator", category: "finance", name: "Calculadora de Capacidad Hipotecaria", desc: "Calcula cuánta hipoteca puedes pagar" },
  { slug: "mortgage-calculator", category: "finance", name: "Calculadora de Hipoteca", desc: "Calcula tu pago mensual de hipoteca" },
  { slug: "mortgage-overpayment-calculator", category: "finance", name: "Calculadora de Pago Adelantado de Hipoteca", desc: "Calcula cuánto ahorras al pagar tu hipoteca por adelantado" },
  { slug: "mortgage-refinance-calculator", category: "finance", name: "Calculadora de Refinanciamiento Hipotecario", desc: "Compara tu hipoteca actual con una refinanciada" },
  { slug: "net-profit-calculator", category: "finance", name: "Calculadora de Utilidad Neta", desc: "Calcula la utilidad neta de tu negocio" },
  { slug: "net-worth-calculator", category: "finance", name: "Calculadora de Patrimonio Neto", desc: "Calcula tu patrimonio neto total: activos menos deudas" },
  { slug: "nps-calculator", category: "finance", name: "Calculadora de NPS", desc: "Calcula tu Sistema Nacional de Pensiones (NPS)" },
  { slug: "overtime-calculator", category: "finance", name: "Calculadora de Horas Extra", desc: "Calcula tu pago por horas extra" },
  { slug: "payroll-calculator", category: "finance", name: "Calculadora de Nómina", desc: "Calcula el salario neto después de impuestos y deducciones" },
  { slug: "ppf-calculator", category: "finance", name: "Calculadora de PPF", desc: "Calcula el valor de vencimiento de un Fondo de Previsión Público" },
  { slug: "present-value-calculator", category: "finance", name: "Calculadora de Valor Presente", desc: "Calcula el valor presente de un monto futuro" },
  { slug: "profit-margin-calculator", category: "finance", name: "Calculadora de Margen de Ganancia", desc: "Calcula el margen de ganancia de un producto o negocio" },
  { slug: "quarterly-estimated-tax-calculator", category: "finance", name: "Calculadora de Impuesto Trimestral Estimado", desc: "Calcula tus pagos de impuestos trimestrales estimados" },
  { slug: "raise-calculator", category: "finance", name: "Calculadora de Aumento de Salario", desc: "Calcula tu nuevo salario después de un aumento" },
  { slug: "rd-calculator", category: "finance", name: "Calculadora de Depósito Recurrente", desc: "Calcula el valor de vencimiento de un depósito recurrente" },
  { slug: "regional-salary-calculator", category: "finance", name: "Calculadora de Salario Regional", desc: "Compara salarios ajustados por costo de vida regional" },
  { slug: "rent-vs-buy-calculator", category: "finance", name: "Calculadora de Alquilar vs Comprar", desc: "Compara el costo de alquilar frente a comprar una vivienda" },
  { slug: "retirement-calculator", category: "finance", name: "Calculadora de Jubilación", desc: "Proyecta tus ahorros para la jubilación" },
  { slug: "retirement-income-calculator", category: "finance", name: "Calculadora de Ingresos de Jubilación", desc: "Calcula tus ingresos mensuales estimados en la jubilación" },
  { slug: "roas-calculator", category: "finance", name: "Calculadora de ROAS", desc: "Calcula el retorno sobre el gasto publicitario" },
  { slug: "roi-calculator", category: "finance", name: "Calculadora de ROI", desc: "Calcula el retorno sobre la inversión" },
  { slug: "roth-ira-calculator", category: "finance", name: "Calculadora de Roth IRA", desc: "Proyecta el crecimiento de tu cuenta Roth IRA" },
  { slug: "roth-vs-traditional-ira-calculator", category: "finance", name: "Calculadora de Roth vs IRA Tradicional", desc: "Compara los beneficios fiscales de Roth vs IRA Tradicional" },
  { slug: "rrsp-calculator", category: "finance", name: "Calculadora de RRSP", desc: "Proyecta el crecimiento de tu RRSP canadiense" },
  { slug: "salary-calculator", category: "finance", name: "Calculadora de Salario", desc: "Calcula tu salario neto después de impuestos" },
  { slug: "salary-to-hourly-calculator", category: "finance", name: "Calculadora de Salario a Tarifa por Hora", desc: "Convierte tu salario anual en tarifa por hora" },
  { slug: "sales-tax-calculator", category: "finance", name: "Calculadora de Impuesto sobre Ventas", desc: "Calcula el impuesto sobre ventas de una compra" },
  { slug: "savings-goal-calculator", category: "finance", name: "Calculadora de Meta de Ahorro", desc: "Calcula cuánto debes ahorrar para alcanzar tu meta" },
  { slug: "self-employment-tax-calculator", category: "finance", name: "Calculadora de Impuesto de Trabajo Independiente", desc: "Calcula tu impuesto de trabajo independiente" },
  { slug: "simple-interest-calculator", category: "finance", name: "Calculadora de Interés Simple", desc: "Calcula el interés simple de un préstamo o inversión" },
  { slug: "social-security-calculator", category: "finance", name: "Calculadora del Seguro Social", desc: "Estima tus beneficios del Seguro Social" },
  { slug: "social-security-tax-calculator", category: "finance", name: "Calculadora de Impuesto del Seguro Social", desc: "Calcula tu impuesto del Seguro Social" },
  { slug: "stock-profit-calculator", category: "finance", name: "Calculadora de Ganancia en Acciones", desc: "Calcula tu ganancia o pérdida al vender acciones" },
  { slug: "student-loan-calculator", category: "finance", name: "Calculadora de Préstamo Estudiantil", desc: "Calcula tu pago mensual de préstamo estudiantil" },
  { slug: "tax-bracket-calculator", category: "finance", name: "Calculadora de Tramo Impositivo", desc: "Calcula en qué tramo impositivo te encuentras" },
  { slug: "tax-refund-calculator", category: "finance", name: "Calculadora de Reembolso de Impuestos", desc: "Estima tu reembolso o saldo a pagar de impuestos" },
  { slug: "tax-withholding-calculator", category: "finance", name: "Calculadora de Retención de Impuestos", desc: "Calcula la retención de impuestos ideal de tu salario" },
  { slug: "tfsa-calculator", category: "finance", name: "Calculadora de TFSA", desc: "Proyecta el crecimiento de tu Cuenta de Ahorro Libre de Impuestos" },
  { slug: "uk-capital-gains-calculator", category: "finance", name: "Calculadora de Ganancias de Capital del Reino Unido", desc: "Estima el impuesto sobre ganancias de capital en el Reino Unido" },
  { slug: "uk-dividend-tax-calculator", category: "finance", name: "Calculadora de Impuesto sobre Dividendos del Reino Unido", desc: "Calcula el impuesto sobre tus dividendos en el Reino Unido" },
  { slug: "uk-income-tax-calculator", category: "finance", name: "Calculadora de Impuesto sobre la Renta del Reino Unido", desc: "Calcula tu impuesto sobre la renta en el Reino Unido" },
  { slug: "uk-national-insurance-calculator", category: "finance", name: "Calculadora de Seguro Nacional del Reino Unido", desc: "Calcula tus aportes al Seguro Nacional del Reino Unido" },
  { slug: "uk-pension-calculator", category: "finance", name: "Calculadora de Pensión del Reino Unido", desc: "Proyecta tus ahorros de pensión en el Reino Unido" },
  { slug: "uk-stamp-duty-calculator", category: "finance", name: "Calculadora de Impuesto de Timbre del Reino Unido", desc: "Calcula el impuesto de timbre al comprar una propiedad" },
  { slug: "uk-student-loan-calculator", category: "finance", name: "Calculadora de Préstamo Estudiantil del Reino Unido", desc: "Calcula tus pagos de préstamo estudiantil en el Reino Unido" },
  { slug: "uk-take-home-pay-calculator", category: "finance", name: "Calculadora de Salario Neto del Reino Unido", desc: "Calcula tu salario neto después de impuestos en el Reino Unido" },
  { slug: "vat-calculator", category: "finance", name: "Calculadora de IVA", desc: "Añade o quita el IVA de un precio" },

  // Health (remaining)
  { slug: "calorie-calculator", category: "health", name: "Calculadora de Calorías", desc: "Calcula tus calorías diarias necesarias" },
  { slug: "heart-rate-zone-calculator", category: "health", name: "Calculadora de Zona de Frecuencia Cardíaca", desc: "Calcula tus zonas de frecuencia cardíaca para entrenar" },
  { slug: "macro-calculator", category: "health", name: "Calculadora de Macros", desc: "Calcula tus macronutrientes diarios según tu meta" },
  { slug: "ovulation-calculator", category: "health", name: "Calculadora de Ovulación", desc: "Calcula tus días fértiles y de ovulación" },
  { slug: "pregnancy-due-date-calculator", category: "health", name: "Calculadora de Fecha Probable de Parto", desc: "Calcula tu fecha probable de parto" },
  { slug: "protein-calculator", category: "health", name: "Calculadora de Proteína", desc: "Calcula tu ingesta diaria de proteína recomendada" },
  { slug: "water-intake-calculator", category: "health", name: "Calculadora de Ingesta de Agua", desc: "Calcula cuánta agua debes beber al día" },

  // Math & Stats (remaining)
  { slug: "gcd-calculator", category: "math-stats", name: "Calculadora de MCD", desc: "Calcula el máximo común divisor de varios números" },
  { slug: "lcm-calculator", category: "math-stats", name: "Calculadora de MCM", desc: "Calcula el mínimo común múltiplo de varios números" },
  { slug: "mean-median-mode-calculator", category: "math-stats", name: "Calculadora de Media, Mediana y Moda", desc: "Calcula la media, mediana y moda de un conjunto de datos" },
  { slug: "percentage-increase-calculator", category: "math-stats", name: "Calculadora de Aumento Porcentual", desc: "Calcula el porcentaje de aumento o disminución entre dos valores" },
  { slug: "pregnancy-weight-gain-calculator", category: "math-stats", name: "Calculadora de Aumento de Peso en el Embarazo", desc: "Calcula el aumento de peso recomendado durante el embarazo" },
  { slug: "prime-number-calculator", category: "math-stats", name: "Calculadora de Números Primos", desc: "Verifica si un número es primo o encuentra números primos" },
  { slug: "ratio-calculator", category: "math-stats", name: "Calculadora de Proporciones", desc: "Simplifica y calcula proporciones entre números" },
  { slug: "standard-deviation-calculator", category: "math-stats", name: "Calculadora de Desviación Estándar", desc: "Calcula la desviación estándar de un conjunto de datos" },
];

export const SPANISH_CATEGORIES = [
  { slug: "finance", name: "Finanzas", description: "Calculadoras para préstamos, ahorros, inversiones y nómina." },
  { slug: "health", name: "Salud", description: "Herramientas de salud, peso ideal, calorías y acondicionamiento físico." },
  { slug: "converters", name: "Conversores", description: "Conversores de unidades, codificación y formatos." },
  { slug: "date-time", name: "Fecha y Hora", description: "Calculadoras de edad, días laborables y fechas." },
  { slug: "business", name: "Negocios", description: "Métricas de crecimiento, tasa de consumo y finanzas de startups." },
  { slug: "math-stats", name: "Matemáticas", description: "Aritmética, porcentajes, promedios y herramientas estadísticas." },
  { slug: "text-tools", name: "Herramientas de Texto", description: "Conteo de palabras, conversión de mayúsculas, comparación de textos y más." },
  { slug: "developer-tools", name: "Herramientas para Desarrolladores", description: "JSON, regex, tokens y utilidades de formato de datos." },
  { slug: "security-tools", name: "Herramientas de Seguridad", description: "Genera IDs, contraseñas y hashes — todo en tu navegador." },
  { slug: "generators-calculators", name: "Generadores y Calculadoras", description: "Generadores y calculadoras de propósito general para tareas cotidianas." },
];

export const SPANISH_STATIC_PAGES = [
  "/es/about/",
  "/es/contact/",
  "/es/privacy-policy/",
  "/es/terms/",
  "/es/bookmarks/",
  "/es/tools/",
];

const spanishToolSlugs = new Set(SPANISH_TOOLS.map((t) => t.slug));
const spanishToolPathMap = new Map<string, string>();
for (const t of SPANISH_TOOLS) {
  spanishToolPathMap.set(`/${t.category}/${t.slug}/`, `/es/${t.category}/${t.slug}/`);
  spanishToolPathMap.set(`/${t.category}/${t.slug}`, `/es/${t.category}/${t.slug}/`);
}

/**
 * Check if a tool slug has a Spanish version.
 */
export function hasSpanishTool(slug: string): boolean {
  return spanishToolSlugs.has(slug);
}

/**
 * Find localized tool metadata by slug or English name.
 */
export function findSpanishTool(slugOrName: string): LocalizedTool | undefined {
  const norm = slugOrName.toLowerCase().trim();
  return SPANISH_TOOLS.find((t) => t.slug.toLowerCase() === norm || t.name.toLowerCase() === norm);
}

/**
 * Normalize a pathname for consistent routing checks (always with trailing slash).
 */
export function normalizePath(path: string): string {
  const clean = path.split("?")[0].split("#")[0];
  if (!clean.endsWith("/")) {
    return clean + "/";
  }
  return clean;
}

/**
 * Resolve bidirectional alternate URLs for canonical & hreflang tags.
 */
export function getAlternateUrls(currentPath: string, lang: string = "en"): {
  en?: string;
  es?: string;
  xDefault?: string;
} {
  const path = normalizePath(currentPath);

  // Homepages
  if (path === "/" || path === "/es/") {
    return {
      en: "/",
      es: "/es/",
      xDefault: "/",
    };
  }

  // Static site pages
  const staticPairs: Record<string, string> = {
    "/about/": "/es/about/",
    "/contact/": "/es/contact/",
    "/privacy-policy/": "/es/privacy-policy/",
    "/terms/": "/es/terms/",
    "/bookmarks/": "/es/bookmarks/",
    "/tools/": "/es/tools/",
  };

  for (const [enPath, esPath] of Object.entries(staticPairs)) {
    if (path === enPath || path === esPath) {
      return {
        en: enPath,
        es: esPath,
        xDefault: enPath,
      };
    }
  }

  // Active Category Pages
  for (const cat of SPANISH_CATEGORIES) {
    const enCat = `/${cat.slug}/`;
    const esCat = `/es/${cat.slug}/`;
    if (path === enCat || path === esCat) {
      return {
        en: enCat,
        es: esCat,
        xDefault: enCat,
      };
    }
  }

  // If on a Spanish tool page
  if (path.startsWith("/es/")) {
    const rawEnglish = path.replace(/^\/es/, "");
    // Check if valid Spanish tool
    const foundTool = SPANISH_TOOLS.find(
      (t) => path === `/es/${t.category}/${t.slug}/`
    );
    if (foundTool) {
      const enUrl = `/${foundTool.category}/${foundTool.slug}/`;
      return {
        en: enUrl,
        es: path,
        xDefault: enUrl,
      };
    }
    // Fallback for Spanish page without exact tool match
    return {
      es: path,
    };
  }

  // If on an English page: check if Spanish tool version exists
  const matchingSpanishPath = spanishToolPathMap.get(path);
  if (matchingSpanishPath) {
    return {
      en: path,
      es: matchingSpanishPath,
      xDefault: path,
    };
  }

  // English page with NO Spanish counterpart:
  // MUST NOT emit Spanish hreflang to avoid 404 links!
  return {
    en: path,
    xDefault: path,
  };
}
