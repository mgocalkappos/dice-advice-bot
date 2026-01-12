import { fetchTip } from "./fetchTip";

export default async function getClassTip(): Promise<string> {
  return fetchTip(
    "https://www.dnd5eapi.co/api/classes",
    (item) => (item as any).url,
    (cls: any) => {
      const options: string[] = [];

      if (cls.hit_die) {
        options.push(`🎲 **${cls.name}** uses a d${cls.hit_die} for hit dice.`);
      }

      if (cls.proficiencies?.length) {
        const prof =
          cls.proficiencies[
            Math.floor(Math.random() * cls.proficiencies.length)
          ];
        options.push(
          `🛠️ **${cls.name}** starts with proficiency in **${prof.name}**.`
        );
      }

      return options[Math.floor(Math.random() * options.length)];
    }
  );
}
