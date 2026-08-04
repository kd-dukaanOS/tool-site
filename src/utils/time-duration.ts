export interface TimeDurationInput {
  startTime: string; // "HH:MM"
  endTime: string; // "HH:MM"
}

export interface TimeDurationResult {
  totalMinutes: number;
  hours: number;
  minutes: number;
  crossesMidnight: boolean;
}

export function validateTimeDurationInput(i: TimeDurationInput): string | null {
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(i.startTime)) return "Enter a valid start time.";
  if (!timeRegex.test(i.endTime)) return "Enter a valid end time.";
  return null;
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export function calculateTimeDuration(i: TimeDurationInput): TimeDurationResult {
  const start = toMinutes(i.startTime);
  const end = toMinutes(i.endTime);

  const crossesMidnight = end < start;
  const totalMinutes = crossesMidnight ? 24 * 60 - start + end : end - start;

  return {
    totalMinutes,
    hours: Math.floor(totalMinutes / 60),
    minutes: totalMinutes % 60,
    crossesMidnight,
  };
}

export function copyTimeDurationSummary(i: TimeDurationInput, r: TimeDurationResult): string {
  return `
Time Duration Summary

Start Time: ${i.startTime}
End Time: ${i.endTime}

Duration: ${r.hours}h ${r.minutes}m
Total Minutes: ${r.totalMinutes}
${r.crossesMidnight ? "Crosses midnight" : ""}
`.trim();
}