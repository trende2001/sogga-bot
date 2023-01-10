const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const request = require('request')

module.exports = {
    name: "askcouncil",
    description: "Let the soggy council decide!",
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'question',
            description: 'Question to the council',
            type: 'STRING',
            required: true,
        },
    ],

    
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     * @param {MessageEmbed} MessageEmbed
     */
    run: async (client, interaction, args) => {
        var ballAnswers = [
            "Yes.",
            "Ask me later.", 
            "No.", 
            "I don't know.",
            "Of course.",
            "Never.", 
            "Maybe.",
            "Hmm...",
            "Excuse me?"
        ]
        // can i put my balls in yo jawssss

        const answer = Math.floor(Math.random() * ballAnswers.length)

        const ballEmbed = new MessageEmbed()
            .setColor("#00b140")
            .setTitle('**Sogga Council**')
            .setDescription( '**Your question**: ' + interaction.options.getString("question") + '\n**My answer**: ' + ballAnswers[answer] )

        interaction.editReply( { embeds: [ballEmbed] } )
    },
};
