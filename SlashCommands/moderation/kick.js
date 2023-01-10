const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",
    userPermissions: ["KICK_MEMBERS"],
    options: [
        {
            name: 'user',
            description: "User to kick",
            type: "USER",
            required: true,
        },
        {
            name: 'reason',
            description: "Reason for the kick",
            type: "STRING",
            required: false,
        }
    ],

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const theMember = interaction.options.getMember("user")

        const reason = 
            interaction.options.getString("reason") || "Blank Reason"
        
        // Role position checking
        if(theMember.roles.highest.position >= interaction.member.roles.highest.position)
        return interaction.followUp(
            "The member you're trying to kick **is a higher rank** in the **role hierarchy**"
        )    
        // I will somehow make this kick message customizable in the future (13/09/21)
        theMember.send(`You have been **kicked** from ${interaction.guild.name}!\nReason: \`${reason}\` `)
        
        // Kick the bad boy
        theMember.kick(theMember)
        
        interaction.followUp(`**Kicked ${theMember.user.tag}**\nReason: \`${reason}\``)
    },
}