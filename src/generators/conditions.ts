import { getRandomFromEndpoint, pickOne } from "./utils";

export default async function getConditionTip() {
  let condition;
  let options: string[] = [];

  do {
    condition = await getRandomFromEndpoint("conditions");
    options = [
      condition.desc?.length ? condition.desc[0] : null,
      condition.desc?.length > 1 ? condition.desc[1] : null,
    ].filter(Boolean);
  } while (options.length === 0);

  return pickOne(options);
}
