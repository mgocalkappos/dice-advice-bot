import { fetchTip } from "./fetchTip";

export default async function getResistanceTip(): Promise<string> {
  return fetchTip(
    "https://www.dnd5eapi.co/api/monsters",
    (item) => (item as any).url,
    (monster: any) => {
      const resistances = monster.damage_resistances;
      const immunities = monster.damage_immunities;
      const tips = [];
      if (resistances.length)
        tips.push(
          `The **${monster.name}** resists ${resistances.join(", ")} damage.`
        );
      if (immunities.length)
        tips.push(
          `The **${monster.name}** is immune to ${immunities.join(", ")}.`
        );
      if (!tips.length)
        tips.push(
          `The **${monster.name}** has no notable resistances or immunities.`
        );

      return `⚔️ Combat Tip: ${tips[Math.floor(Math.random() * tips.length)]}`;
    }
  );
}
