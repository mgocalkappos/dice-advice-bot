import { getRandomFromEndpoint, pickOne } from "./utils";

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
      `🛠️ **${cls.name}s** start with a proficiency in **${prof.name}**.`
    );
  }

  return pickOne(options);
}
