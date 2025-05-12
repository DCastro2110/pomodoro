export function formatNumber(number: number): string {
  if (number >= 0 && number < 10) {
    return "0" + number;
  }

  return String(number);
}
