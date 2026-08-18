// src/utils/currencyselector.ts
// Compatibility shim — some older calculator scripts import from
// "../utils/currencyselector" instead of "../utils/currency".
// Re-export everything from the real file so both paths work.
export * from "./currency";