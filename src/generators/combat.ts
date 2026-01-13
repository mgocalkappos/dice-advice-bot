const combatTips = [
  "Dodge doubles your AC against attacks — a great defensive move.",
  "Flanking can give your party advantage on attacks if your DM allows it.",
  "Positioning is key — high ground often gives advantage in ranged attacks.",
  "Use the Help action to give an ally advantage on their next attack.",
  "Disengage allows you to move safely without provoking opportunity attacks.",
  "Spellcasters can use bonus actions for certain cantrips to maximize damage output.",
  "Concentrating on a spell means no other concentration spells — pick the most impactful one.",
  "Knocking enemies prone gives melee allies advantage, but ranged attacks might suffer disadvantage.",
  "Use environmental hazards to your advantage — traps, terrain, and objects can be your allies.",
];

export default async function getCombatTip() {
  const tip = combatTips[Math.floor(Math.random() * combatTips.length)];
  return `⚔️ Combat Tip: ${tip}`;
}
