import { getRandomFromEndpoint, pickOne, formatList } from "./utils";

export default async function getMonsterTip(): Promise<string | null> {
  const monster = await getRandomFromEndpoint("monsters");

  const options: string[] = [];

  if (monster.damage_resistances?.length) {
    options.push(
      `🛡️ The **${monster.name}** is resistant to ${formatList(
        monster.damage_resistances
      )} damage.`
    );
  }

  if (monster.special_abilities?.length) {
    const ability =
      monster.special_abilities[
        Math.floor(Math.random() * monster.special_abilities.length)
      ];

    const description = ability.desc ? ` — ${ability.desc}` : "";

    options.push(
      `🧟 The **${monster.name}** has **${ability.name}** — ${description}`
    );
  }

  if (monster.actions?.length) {
    const action =
      monster.actions[Math.floor(Math.random() * monster.actions.length)];

    const description = action.desc ? ` — ${action.desc}` : "";

    options.push(
      `⚔️ The **${monster.name}** can use **${action.name}** in combat${description}`
    );
  }

  return pickOne(options);
}
