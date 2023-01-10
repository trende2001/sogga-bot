const { Client, CommandInteraction } = require('discord.js')

module.exports = {
    name: "ban",
    description: "Bans a member from the server",
    userPermissions: ["BAN_MEMBERS"],
    options: [
        {
            name: 'user',
            description: "User to ban",
            type: "USER",
            required: true,
        },
        {
            name: 'reason',
            description: "Reason for the ban",
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
            "The member you're trying to ban **is a higher rank** in the **role hierarchy**"
        )    


        // I will somehow make this ban message customizable in the future (13/09/21)
        theMember.send(`You have been **banned** from ${interaction.guild.name}!\nReason: \`${reason}\` `)
        
        // Kick the bad boy
        theMember.ban(theMember)
        
        interaction.followUp(`**Banned ${theMember.user.tag}**\nReason: \`${reason}\``)
    },
}