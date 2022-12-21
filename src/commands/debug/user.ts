import { SlashCommandBuilder } from 'discord.js';
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
	.setName('user')
	.setDescription('Replies with user information');

export default command(meta, ({ interaction }) => {
	return interaction.reply({
		ephemeral: true,
		content: `Username: ${interaction.user.username}\nUser ID: ${interaction.user.id}`,
	});
});
