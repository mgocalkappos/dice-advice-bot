import fetch from "node-fetch";

export async function fetchTip<T>(
  listEndpoint: string,
  detailUrlFn: (item: T) => string,
  formatFn: (details: any) => string
): Promise<string> {
  const res = await fetch(listEndpoint);
  const data = (await res.json()) as { results: T[] };

  const items: T[] = data.results;
  const random = items[Math.floor(Math.random() * items.length)];

  const detailsRes = await fetch(
    `https://www.dnd5eapi.co${detailUrlFn(random)}`
  );
  const details = await detailsRes.json();

  return formatFn(details);
}
