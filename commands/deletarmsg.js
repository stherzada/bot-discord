const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('deletar')
    .setDescription('Irá apagar as mensagens do chat com até 15 dias.'),

  async execute(interaction) {
    if (!interaction.member.permissions.has('MANAGE_MESSAGES')) {
      return interaction.reply('Você não tem permissão para excluir mensagens neste canal.');
    }

    const filter = m => (Date.now() - m.createdTimestamp) < (15 * 24 * 60 * 60 * 1000); // filtro de mensagens com até 15 dias
    const messages = await interaction.channel.messages.fetch({ limit: 100, before: interaction.id }).then(collected => collected.filter(filter)); // buscar as últimas 100 mensagens que atendem ao filtro

    await interaction.channel.bulkDelete(messages)
      .then(() => {
        interaction.reply(`Todas as mensagens com até 15 dias foram excluídas neste canal.`);
      })
      .catch(error => {
        console.error(error);
        interaction.reply('Houve um erro ao excluir as mensagens neste canal.');
      });
  },
};
