import type { Interaction } from "discordeno";
import { infoEmbed } from "./../lib/make_embed.js"

export const commandName = "help";

export async function commandExecute(interaction: Interaction) {
    await interaction.defer(true);

    let helpEmbed = {
        ...infoEmbed(), 
        title: "SharkBotのヘルプ"
    };

    await interaction.edit({
        embeds: []
    })
}