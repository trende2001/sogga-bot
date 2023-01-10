const { Client, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "btest",
    description: "Button Test",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const row = new MessageActionRow()
            .addComponents (
                new MessageButton()
                    .setCustomId('testy3')
                    .setLabel('blurpley!!!')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId('testy')
                    .setLabel('Test Button')
                    .setStyle('SUCCESS'),
                new MessageButton()
                    .setCustomId('testy2')
                    .setLabel('free boobas!!!!!')
                    .setStyle('DANGER'),
                new MessageButton()
                    .setLabel('when the sog')
                    .setURL("https://google.com")
                    .setStyle('LINK')
            );

        await interaction.editReply({ content: `button test`, components: [row] })
    },
};