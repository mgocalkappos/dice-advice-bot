const envTips = [
  "Standing in difficult terrain costs double movement — use it to slow enemies or force them into choke points.",
  "Heavy rain or fog can impose disadvantage on ranged attacks and Perception checks based on sight.",
  "Fire or lava hazards deal damage over time — bait enemies into them if you can.",
  "Walls, pillars, and furniture can provide half or full cover against attacks and spells.",
  "Rivers, streams, or slippery surfaces can knock creatures prone if they fail a Dexterity saving throw.",
  "Narrow ledges or cliffs can turn a strong push into a dramatic fall — use the environment creatively.",
  "Illumination matters: darkness or magical light can affect perception and advantage on attacks.",
  "Obstacles like rubble or fallen trees can create choke points that favor area-of-effect spells.",
  "Water hazards often require Strength (Athletics) checks to swim; remember spellcasters may be vulnerable.",
  "Smoke, fog, or magical effects can provide total or partial concealment — use them to hide or ambush.",
  "Tight spaces may prevent larger creatures from fully utilizing their reach or area-of-effect attacks.",
];

export default async function getEnvironmentTip() {
  const tip = envTips[Math.floor(Math.random() * envTips.length)];
  return `🌿 Environment Tip: ${tip}`;
}
