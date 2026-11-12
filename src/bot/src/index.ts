import {
  createBot,
  Intents,
} from "discordeno";
import { config } from "dotenv";

config();

const token = process.env.DISCORD_TOKEN as string;

const bot = createBot({
  token,
  intents: Intents.Guilds | Intents.GuildMessages | Intents.MessageContent,
  events: {
    ready: (_bot, payload) => {
        console.log(`Bot is online!`);
    },

    interactionCreate: async (interaction) => {
        
    }
  },
  desiredProperties: {
    user: {
      id: true,
      toggles: true,
      username: true,
      avatar: true,
    },
  },
});

bot.start();