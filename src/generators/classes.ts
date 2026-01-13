import { getRandomFromEndpoint, pickOne, abilityMap } from "./utils";
import pluralize from "pluralize";

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
      `🛠️ **${pluralize(
        cls.name
      )}** start with proficiency in **${formatProficiency(prof.name)}**.`
    );
  }

  return pickOne(options);
}
