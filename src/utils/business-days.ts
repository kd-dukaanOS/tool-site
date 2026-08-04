export interface BusinessDaysInput {
  startDate: Date;
  endDate: Date;
  excludeWeekends: boolean;
  holidays: Date[];
}

export interface BusinessDaysResult {
  totalDays: number;
  businessDays: number;
  weekendDays: number;
  holidayCount: number;
}

export function validateBusinessDaysInput(i: BusinessDaysInput): string | null {
  if (Number.isNaN(i.startDate.getTime())) return "Please select a valid start date.";
  if (Number.isNaN(i.endDate.getTime())) return "Please select a valid end date.";
  if (i.endDate < i.startDate) return "End date must be after start date.";
  return null;
}

function isSameDay(a: Date, b: Date): boolean {
  return a.toDateString() === b.toDateString();
}

export function calculateBusinessDays(i: BusinessDaysInput): BusinessDaysResult {
  let totalDays = 0;
  let businessDays = 0;
  let weekendDays = 0;
  let holidayCount = 0;

  const current = new Date(i.startDate);

  while (current <= i.endDate) {
    totalDays++;

    const day = current.getDay();
    const isWeekend = day === 0 || day === 6;
    const isHoliday = i.holidays.some((h) => isSameDay(h, current));

    if (isHoliday) {
      holidayCount++;
    } else if (i.excludeWeekends && isWeekend) {
      weekendDays++;
    } else {
      businessDays++;
    }

    current.setDate(current.getDate() + 1);
  }

  return { totalDays, businessDays, weekendDays, holidayCount };
}

export function copyBusinessDaysSummary(i: BusinessDaysInput, r: BusinessDaysResult): string {
  return `
Business Days Summary

Start Date: ${i.startDate.toLocaleDateString("en-US")}
End Date: ${i.endDate.toLocaleDateString("en-US")}

Total Days: ${r.totalDays}
Business Days: ${r.businessDays}
Weekend Days: ${r.weekendDays}
Holidays Excluded: ${r.holidayCount}
`.trim();
}