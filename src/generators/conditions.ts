import { getRandomFromEndpoint, pickOne } from "./utils";

export default async function getConditionTip() {
  const condition = await getRandomFromEndpoint("conditions");

  return pickOne([
    `⚠️ **${condition.name}** condition.`,
    condition.desc?.[0] ?? null,
    condition.desc?.[1] ?? null,
  ]);
}
