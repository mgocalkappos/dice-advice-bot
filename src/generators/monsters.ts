import { fetchTip } from "./fetchTip";

export default async function getMonsterTip(): Promise<string> {
  return fetchTip(
    "https://www.dnd5eapi.co/api/monsters",
    (item) => (item as any).url,
    (monster: any) => {
      const options: string[] = [];

      if (monster.damage_resistances?.length) {
        options.push(
          `🛡️ **${monster.name}** resists ${monster.damage_resistances.join(
            ", "
          )} damage.`
        );
      }

      if (monster.special_abilities?.length) {
        const ability =
          monster.special_abilities[
            Math.floor(Math.random() * monster.special_abilities.length)
          ];
        options.push(
          `🧟 **${monster.name}** has **${ability.name}** — ${ability.desc}`
        );
      }

      if (monster.actions?.length) {
        const action =
          monster.actions[Math.floor(Math.random() * monster.actions.length)];
        options.push(
          `⚔️ **${monster.name}** can use **${action.name}** in combat.`
        );
      }

      return options[Math.floor(Math.random() * options.length)];
    }
  );
}
