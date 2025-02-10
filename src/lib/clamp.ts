export function clamp(input: number, min: number, max: number): number {
  return Math.max(Math.min(input, max), min);
}
