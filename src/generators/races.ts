import { getRandomFromEndpoint, pickOne, API_BASE } from "./utils";

export default async function getRaceTip(): Promise<string | null> {
  const race = await getRandomFromEndpoint("races");

  const trait =
    race.traits?.length &&
    race.traits[Math.floor(Math.random() * race.traits.length)];

  if (!trait) return null;

  const traitDetailsRes = await fetch(API_BASE + trait.url);
  const traitDetails = await traitDetailsRes.json();

  const description = pickOne([
    ...(traitDetails.desc ?? []),
    "Use it to your advantage!",
  ]);

  return `🧝 Race Fact: **${race.name}** has a trait called **${trait.name}** — ${description}`;
}
