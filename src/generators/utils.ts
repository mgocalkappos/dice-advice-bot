export const API_BASE = "https://www.dnd5eapi.co";

export async function getRandomFromEndpoint(endpoint: string) {
  const listRes = await fetch(`${API_BASE}/api/${endpoint}`);
  const list = await listRes.json();

  const ref = list.results[Math.floor(Math.random() * list.results.length)];

  const itemRes = await fetch(`${API_BASE}${ref.url}`);
  return itemRes.json();
}

export function pickOne(options: Array<string | null>) {
  const valid = options.filter(Boolean) as string[];
  return valid[Math.floor(Math.random() * valid.length)];
}

export const abilityMap: Record<string, string> = {
  STR: "strength",
  DEX: "dexterity",
  CON: "constitution",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma",
};

export function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} and ${items[1]}`;

  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}
