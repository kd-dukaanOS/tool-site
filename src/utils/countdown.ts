export interface CountdownInput {
  targetDate: Date;
  targetTime?: string; // "HH:MM"
}

export interface CountdownResult {
  totalSeconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasPassed: boolean;
}

export function validateCountdownInput(i: CountdownInput): string | null {
  if (Number.isNaN(i.targetDate.getTime())) return "Please select a valid target date.";
  return null;
}

export function calculateCountdown(i: CountdownInput): CountdownResult {
  const target = new Date(i.targetDate);

  if (i.targetTime) {
    const [h, m] = i.targetTime.split(":").map(Number);
    target.setHours(h, m, 0, 0);
  }

  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  const hasPassed = diffMs < 0;

  const abs = Math.abs(diffMs);
  const totalSeconds = Math.floor(abs / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { totalSeconds, days, hours, minutes, seconds, hasPassed };
}

export function copyCountdownSummary(i: CountdownInput, r: CountdownResult): string {
  return `
Countdown Summary

Target Date: ${i.targetDate.toLocaleDateString("en-US")}${i.targetTime ? ` ${i.targetTime}` : ""}

${r.hasPassed ? "Time Since" : "Time Remaining"}: ${r.days}d ${r.hours}h ${r.minutes}m ${r.seconds}s
`.trim();
}