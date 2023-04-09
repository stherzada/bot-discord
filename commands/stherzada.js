const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")



// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0xFF0099)
	.setTitle('Stherzada')
	.setURL('https://twitch.tv/stherzada')
	.setAuthor({ name: 'Sthefany Sther', iconURL: 'https://i.imgur.com/Zp8Z2Uo.png', url: 'https://github.com/stherzada' })
	.setDescription('Olá, sou a Stherzada, streamer e futura dev!')
	.setThumbnail('https://i.imgur.com/Zp8Z2Uo.png')
	
		



   

module.exports = {
    data: new SlashCommandBuilder()
    .setName("stherzada")
    .setDescription("Irá dizer quem é a Stherzada"),

    async execute(interaction){
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}