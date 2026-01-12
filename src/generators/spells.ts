import { fetchTip } from "./fetchTip";

export default async function getSpellTip(): Promise<string> {
  return fetchTip(
    "https://www.dnd5eapi.co/api/spells",
    (item) => (item as any).url,
    (spell: any) => {
      const options: string[] = [];

      options.push(`✨ **${spell.name}** is a level ${spell.level} spell.`);

      if (spell.concentration) {
        options.push(
          `🧠 **${spell.name}** requires concentration — protect your caster!`
        );
      }

      if (spell.duration) {
        options.push(`⏳ **${spell.name}** lasts ${spell.duration}.`);
      }

      if (spell.damage?.damage_type?.name) {
        options.push(
          `💥 **${spell.name}** deals ${spell.damage.damage_type.name} damage.`
        );
      }

      return options[Math.floor(Math.random() * options.length)];
    }
  );
}
