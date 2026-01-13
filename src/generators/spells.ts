import { getRandomFromEndpoint } from "./utils";

export default async function getSpellTip(): Promise<string | null> {
  const spell = await getRandomFromEndpoint("spells");

  if (!spell) return null;

  const parts: string[] = [];

  parts.push(`✨ **${spell.name}** is a level ${spell.level} spell.`);

  if (spell.concentration) {
    parts.push(
      `\n🧠 It requires concentration, so make sure you protect your caster!`
    );
  }

  if (spell.duration) {
    parts.push(`\n⏳ Lasts ${spell.duration}.`);
  }

  if (spell.damage?.damage_type?.name) {
    parts.push(`\n💥 Deals ${spell.damage.damage_type.name} damage.`);
  }

  return parts.join(" ");
}
