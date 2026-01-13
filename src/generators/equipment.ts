import { getRandomFromEndpoint } from "./utils";

export default async function getEquipmentTip(): Promise<string | null> {
  const eq = await getRandomFromEndpoint("equipment");

  if (!eq) return null;

  const parts: string[] = [];

  const displayName = eq.name.split(",")[0];

  if (eq.equipment_category?.name) {
    parts.push(`⛏️ **${displayName}**`);
  }

  if (eq.cost) {
    parts.push(`\n💰 Cost: ${eq.cost.quantity} ${eq.cost.unit}.`);
  }

  if (eq.damage?.damage_dice) {
    parts.push(`\n⚔️ Deals ${eq.damage.damage_dice} damage.`);
  }

  if (eq.range) {
    parts.push(
      `\n🏹 Range: ${eq.range.normal}${
        eq.range.long ? ` / ${eq.range.long}` : ""
      } ft.`
    );
  }

  if (eq.properties?.length) {
    parts.push(
      `\n🗂️ Properties: ${eq.properties.map((p: any) => p.name).join(", ")}.`
    );
  }

  if (eq.armor_class?.base) {
    parts.push(`\n🛡️ Provides ${eq.armor_class.base} AC.`);
  }

  if (!parts.length) return null;

  return parts.join(" ");
}
