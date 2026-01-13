import { getRandomFromEndpoint, abilityMap } from "./utils";

export default async function getSkillTip(): Promise<string | null> {
  const skill = await getRandomFromEndpoint("skills");
  if (!skill) return null;

  const abilityName =
    abilityMap[skill.ability_score.name] ??
    skill.ability_score.name.toLowerCase();

  const parts: string[] = [];

  parts.push(`🎓 **${skill.name}** is based on ${abilityName}.`);

  if (skill.desc?.length) {
    parts.push(skill.desc[0]);
  }

  return parts.join(" ");
}
