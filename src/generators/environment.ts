const envTips = [
  "Use cover to gain advantage on Dexterity saving throws.",
  "Difficult terrain slows movement — plan accordingly.",
  "Water or lava hazards can change the tide of combat.",
  "Traps and natural hazards often make ambushes deadly.",
  "High ground can help archers or spellcasters control the battlefield.",
];

export default async function getEnvironmentTip() {
  const tip = envTips[Math.floor(Math.random() * envTips.length)];
  return `🌿 Environment Tip: ${tip}`;
}
