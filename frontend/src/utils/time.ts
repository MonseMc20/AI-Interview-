export function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
