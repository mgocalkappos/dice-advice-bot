import { fetchTip } from "./fetchTip";

export default async function getRaceTip(): Promise<string> {
  return fetchTip(
    "https://www.dnd5eapi.co/api/races",
    (item) => (item as any).url,
    (race: any) => {
      const trait = race.traits[Math.floor(Math.random() * race.traits.length)];
      return `🧝 Race Fact: **${race.name}** have a trait called **${trait.name}** — use it to your advantage!`;
    }
  );
}
