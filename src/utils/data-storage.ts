export interface DataStorageInput {
  value: number;
  fromUnit: string;
  toUnit: string;
}

export interface DataStorageResult {
  convertedValue: number;
}

export const DATA_STORAGE_UNITS: Record<string, number> = {
  bit: 0.000000125,
  byte: 0.000001,
  kb: 0.001,
  mb: 1,
  gb: 1000,
  tb: 1000000,
  pb: 1000000000,
};

export const DATA_STORAGE_LABELS: Record<string, string> = {
  bit: "Bit",
  byte: "Byte",
  kb: "KB",
  mb: "MB",
  gb: "GB",
  tb: "TB",
  pb: "PB",
};

export function validateDataStorageInput(i: DataStorageInput): string | null {
  if (i.value === undefined || Number.isNaN(i.value)) return "Enter a valid number.";
  if (!i.fromUnit || !i.toUnit) return "Select both units.";
  if (i.fromUnit === i.toUnit) return "Choose two different units.";
  return null;
}

export function calculateDataStorage(i: DataStorageInput): DataStorageResult {
  const baseValue = i.value * DATA_STORAGE_UNITS[i.fromUnit];
  const convertedValue = Math.round((baseValue / DATA_STORAGE_UNITS[i.toUnit]) * 1e8) / 1e8;
  return { convertedValue };
}

export function copyDataStorageSummary(i: DataStorageInput, r: DataStorageResult): string {
  return `
Data Storage Conversion

${i.value} ${DATA_STORAGE_LABELS[i.fromUnit]} = ${r.convertedValue} ${DATA_STORAGE_LABELS[i.toUnit]}
`.trim();
}