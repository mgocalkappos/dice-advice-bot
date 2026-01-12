const combatTips = [
  "Ready actions are underused — trigger them strategically.",
  "Dodge doubles your AC against attacks — a great defensive move.",
  "Flanking can give your party advantage on attacks if your DM allows it.",
  "Short rests are perfect to regain limited resources without losing progress.",
  "Positioning is key — high ground often gives advantage in ranged attacks.",
];

export default async function getCombatTip() {
  const tip = combatTips[Math.floor(Math.random() * combatTips.length)];
  return `⚔️ Combat Tip: ${tip}`;
}
