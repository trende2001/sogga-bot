const { Client, CommandInteraction } = require("discord.js");
const animals = require('../../helpers/animals')

module.exports = {
    name: "resurrect",
    description: "Resurrect an offline person",
    options: [
        {
            name: 'user',
            description: "User to resurrect",
            type: "USER",
            required: true,
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const theMember = interaction.options.getMember("user")

        // interaction.followUp({ content: `${client.ws.ping}ms!` });
        interaction.followUp(`**Resurrected ${theMember.user.tag}**!`)
    },
};
