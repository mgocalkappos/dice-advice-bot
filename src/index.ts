import { Client, GatewayIntentBits, TextChannel } from "discord.js";
import * as dotenv from "dotenv";
import cron from "node-cron";

import getMonsterTip from "./generators/monsters";
import getSpellTip from "./generators/spells";
import getClassTip from "./generators/classes";
import getRaceTip from "./generators/races";
import getEquipmentTip from "./generators/equipment";
import getConditionTip from "./generators/conditions";
import getResistanceTip from "./generators/resistances";
import getSkillTip from "./generators/skills";
import getCombatTip from "./generators/combat";
import getEnvironmentTip from "./generators/environment";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const CHANNEL_ID = process.env.CHANNEL_ID as string;

const tipGenerators: Array<() => Promise<string | null>> = [
  getMonsterTip,
  getSpellTip,
  getClassTip,
  getRaceTip,
  getEquipmentTip,
  getConditionTip,
  getResistanceTip,
  getSkillTip,
  getCombatTip,
  getEnvironmentTip,
];

async function getDailyTip(): Promise<string> {
  const MAX_ATTEMPTS = 10;

  for (let i = 0; i < MAX_ATTEMPTS; i++) {
    try {
      const generator =
        tipGenerators[Math.floor(Math.random() * tipGenerators.length)];
      const tip = await generator();
      if (tip) return tip;
    } catch (err) {
      console.error("Tip generator failed:", err);
    }
  }

  return "📜 A mysterious silence hangs over the realm today.";
}

client.once("ready", async () => {
  const channel = (await client.channels.fetch(CHANNEL_ID)) as TextChannel;
  if (!channel || !channel.isTextBased()) {
    console.error("Invalid channel ID or channel is not text-based");
    return;
  }

  cron.schedule(
    "0 18 * * *",
    async () => {
      const tip = await getDailyTip();
      await channel.send(`🎲 **Today's Tip** 🎲\n${tip}`);
    },
    { timezone: "America/Chicago" }
  );
});

client.login(process.env.DISCORD_TOKEN);
