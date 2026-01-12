export async function getRandomFromEndpoint(endpoint: string) {
  const listRes = await fetch(`https://www.dnd5eapi.co/api/${endpoint}`);
  const list = await listRes.json();

  const ref = list.results[Math.floor(Math.random() * list.results.length)];

  const itemRes = await fetch(`https://www.dnd5eapi.co${ref.url}`);
  return itemRes.json();
}

export function pickOne(options: Array<string | null>) {
  const valid = options.filter(Boolean) as string[];
  return valid[Math.floor(Math.random() * valid.length)];
}
