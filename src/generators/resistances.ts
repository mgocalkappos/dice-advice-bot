import { getRandomFromEndpoint, pickOne } from "./utils";

export default async function getResistanceTip(): Promise<string | null> {
  const monster = await getRandomFromEndpoint("monsters");

  if (!monster) return null;

  const tips: string[] = [];

  if (monster.damage_resistances?.length) {
    tips.push(
      `The **${monster.name}** resists ${monster.damage_resistances.join(
        ", "
      )} damage.`
    );
  }

  if (monster.damage_immunities?.length) {
    tips.push(
      `The **${monster.name}** is immune to ${monster.damage_immunities.join(
        ", "
      )} damage.`
    );
  }

  if (!tips.length) {
    return null;
  }

  return `⚔️ Combat Tip: ${pickOne(tips)}`;
}
