const {SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("oi")
    .setDescription("Irá te responder que está ativa"),

    async execute(interaction){
        await interaction.reply("Oi, estou ativa viu?")
    }
}