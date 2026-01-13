import { getRandomFromEndpoint, pickOne } from "./utils";

const abilityMap: Record<string, string> = {
  STR: "strength",
  DEX: "dexterity",
  CON: "constitution",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma",
};

function formatProficiency(name: string): string {
  if (name.startsWith("Saving Throw: ")) {
    const abbr = name.split(": ")[1];
    return abilityMap[abbr] ?? abbr.toLowerCase();
  }

  if (name.startsWith("Skill: ")) {
    return name.split(": ")[1].toLowerCase();
  }

  return name.toLowerCase();
}

export default async function getClassTip(): Promise<string | null> {
  const cls = await getRandomFromEndpoint("classes");

  const options: string[] = [];

  if (cls.hit_die) {
    options.push(`🎲 **${cls.name}** uses a d${cls.hit_die} for hit dice.`);
  }

  if (cls.proficiencies?.length) {
    const prof =
      cls.proficiencies[Math.floor(Math.random() * cls.proficiencies.length)];
    options.push(
      `🛠️ **${cls.name}** starts with proficiency in **${formatProficiency(
        prof.name
      )}**.`
    );
  }

  return pickOne(options);
}
