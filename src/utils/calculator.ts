/* ==========================================================
   ToolSite Calculator Utilities
========================================================== */

export function toNumber(
  value: string | number
): number {

  if (typeof value === "number") return value;

  const cleaned = value
    .replace(/,/g, "")
    .trim();

  const num = Number(cleaned);

  return Number.isFinite(num)
    ? num
    : 0;

}

export function round(
  value: number,
  decimals = 2
): number {

  return Number(
    value.toFixed(decimals)
  );

}

export function formatNumber(
  value: number,
  decimals = 2
): string {

  return new Intl.NumberFormat(
    "en-US",
    {
      minimumFractionDigits: 0,
      maximumFractionDigits: decimals,
    }
  ).format(value);

}

export function formatPercent(
  value: number,
  decimals = 2
): string {

  return `${round(value, decimals)}%`;

}

export function formatCurrency(
  value: number,
  currency = "USD",
  locale = "en-US"
): string {

  return new Intl.NumberFormat(
    locale,
    {
      style: "currency",
      currency,
    }
  ).format(value);

}

export function clamp(
  value: number,
  min: number,
  max: number
): number {

  return Math.min(
    Math.max(value, min),
    max
  );

}

export function isPositive(
  value: number
): boolean {

  return value > 0;

}

export function copyToClipboard(
  text: string
): Promise<void> {

  return navigator.clipboard.writeText(
    text
  );

}

/* ==========================================================
   RESULT CARD UPDATE HELPERS
   Used by every calculator instead of manual DOM queries.
========================================================== */

export function setValue(
  id: string,
  value: string | number
): void {

  const el = document.getElementById(id);

  if (el) el.textContent = String(value);

}

export function setSubtitle(
  id: string,
  value: string
): void {

  const el = document.getElementById(`${id}-subtitle`);

  if (el) el.textContent = value;

}

/* ==========================================================
   BMI
========================================================== */

export function calculateBMI(

  weightKg: number,

  heightCm: number

){

const height =
heightCm / 100;

const bmi =
weightKg /
(height * height);

let category="";

if(bmi<18.5)

category="Underweight";

else if(bmi<25)

category="Normal weight";

else if(bmi<30)

category="Overweight";

else

category="Obese";

return{

value:round(bmi,1),

category

};

}

/* ==========================================================
   LOAN EMI
========================================================== */

export function calculateEMI(

principal:number,

annualRate:number,

years:number

){

const monthlyRate=

annualRate/

12/

100;

const months=

years*12;

if(monthlyRate===0)

return principal/months;

const emi=

principal*

monthlyRate*

Math.pow(

1+monthlyRate,

months

)

/

(

Math.pow(

1+monthlyRate,

months

)-1

);

return round(emi,2);

}

/* ==========================================================
   SIMPLE INTEREST
========================================================== */

export function simpleInterest(

principal:number,

rate:number,

years:number

){

const interest=

(principal*rate*years)/100;

return{

interest:round(interest),

total:round(

principal+interest

)

};

}

/* ==========================================================
   COMPOUND INTEREST
========================================================== */

export function compoundInterest(

principal:number,

rate:number,

years:number,

frequency=1

){

const amount=

principal*

Math.pow(

1+

(rate/100)/frequency,

frequency*years

);

return{

interest:round(

amount-principal

),

total:round(amount)

};

}

/* ==========================================================
   PERCENTAGE
========================================================== */

export function percentage(

value:number,

total:number

){

if(total===0)

return 0;

return round(

(value/total)*100,

2

);

}

/* ==========================================================
   ROI
========================================================== */

export function roi(

investment:number,

finalValue:number

){

if(investment===0)

return 0;

return round(

((finalValue-investment)/investment)*100,

2

);

}

/* ==========================================================
   DISCOUNT
========================================================== */

export function discount(

price:number,

percent:number

){

const saved=

price*

(percent/100);

return{

saved:round(saved),

finalPrice:round(

price-saved

)

};

}

/* ==========================================================
   SAVINGS
========================================================== */

export function monthlySavings(

monthly:number,

months:number

){

return round(

monthly*months

);

}