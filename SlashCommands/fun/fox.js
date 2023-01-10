const { Client, CommandInteraction } = require("discord.js");
const animals = require('../../helpers/animals')

module.exports = {
    name: "fox",
    description: "Get a Random Fox from the Internet",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        // interaction.followUp({ content: `${client.ws.ping}ms!` });
        await interaction.defer()
        await interaction.editReply(await animals.fox())
    },
};
