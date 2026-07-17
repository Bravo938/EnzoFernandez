// Combina clases condicionalmente sin dependencias extra.
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
