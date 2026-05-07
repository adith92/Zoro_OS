export function isValidHexColor(hex: string): boolean {
  return /^#([0-9A-F]{3}){1,2}$/i.test(hex);
}

export function normalizeHex(hex: string): string {
  if (!hex.startsWith('#')) hex = '#' + hex;
  if (!isValidHexColor(hex)) return '#7DF9FF'; // default primary
  return hex;
}

export function hexToRgb(hex: string): string {
  hex = normalizeHex(hex);
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return `${r} ${g} ${b}`;
}
