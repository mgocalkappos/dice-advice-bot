import { getRandomFromEndpoint, pickOne } from "./utils";

export default async function getSkillTip() {
  const skill = await getRandomFromEndpoint("skills");

  return pickOne([
    `🎓 **${skill.name}** is based on ${skill.ability_score.name}.`,
    skill.desc?.[0] ?? null,
  ]);
}
