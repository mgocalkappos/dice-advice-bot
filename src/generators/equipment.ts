import { getRandomFromEndpoint, pickOne } from "./utils";

export default async function getEquipmentTip() {
  const eq = await getRandomFromEndpoint("equipment");

  return pickOne([
    `🧰 **${eq.name}** is categorized as ${eq.equipment_category?.name}.`,
    eq.weight && `⚖️ ${eq.name} weighs ${eq.weight} lb.`,
    eq.cost && `💰 ${eq.name} costs ${eq.cost.quantity} ${eq.cost.unit}.`,
    eq.damage?.damage_dice &&
      `⚔️ ${eq.name} deals ${eq.damage.damage_dice} damage.`,
    eq.armor_class?.base && `🛡️ ${eq.name} provides AC ${eq.armor_class.base}.`,
  ]);
}
