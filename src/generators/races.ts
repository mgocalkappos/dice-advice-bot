import { getRandomFromEndpoint, pickOne, API_BASE } from "./utils";
import pluralize from "pluralize";

export default async function getRaceTip(): Promise<string | null> {
  const race = await getRandomFromEndpoint("races");

  if (!race.traits?.length) return null;

  const shuffledTraits = [...race.traits].sort(() => Math.random() - 0.5);

  for (const trait of shuffledTraits) {
    const res = await fetch(API_BASE + trait.url);
    const details = await res.json();

    if (details.desc?.length) {
      const description = pickOne(details.desc);

      return `🧝 Race Fact: **${pluralize(race.name)}** have a trait called **${
        trait.name
      }** — ${description}`;
    }
  }

  return null;
}
