import { getRandomFromEndpoint, pickOne, formatList } from "./utils";

export default async function getResistanceTip(): Promise<string | null> {
  const monster = await getRandomFromEndpoint("monsters");

  const tips: string[] = [];

  if (monster.damage_resistances?.length) {
    tips.push(
      `The **${monster.name}** is resistant to damage from ${formatList(
        monster.damage_resistances
      )}.`
    );
  }

  if (monster.damage_immunities?.length) {
    tips.push(
      `The **${monster.name}** is immune to damage from ${formatList(
        monster.damage_immunities
      )}.`
    );
  }

  if (!tips.length) return null;

  return `⚔️ Combat Tip: ${pickOne(tips)}`;
}
