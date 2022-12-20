import { SlashCommandBuilder } from 'discord.js';
import { command } from '../../utils';

const meta = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with pong!')
	.addStringOption((option) =>
		option
			.setName('message')
			.setDescription('message to the bot')
			.setRequired(false),
	);

export default command(meta, ({ interaction }) => {
	const messsage = interaction.options.getString('message');
	return interaction.reply({
		ephemeral: true,
		content: `Pong! Message was:\n ${messsage ?? ''}`,
	});
});
