import { SlashCommandBuilder } from 'discord.js';
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
	.setName('server')
	.setDescription('Gives server info');

export default command(meta, ({ interaction }) => {
	if (!interaction.guild) {
		return interaction.reply({
			ephemeral: true,
			content: `This command can only be used in a server`,
		});
	}
	return interaction.reply({
		ephemeral: true,
		content: `Server name: ${interaction.guild.name} \nTotal members: ${interaction.guild.memberCount} \nServer ID: ${interaction.guild.id}`,
	});
});
