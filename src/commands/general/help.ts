import { SlashCommandBuilder } from 'discord.js';
import { command } from '../../utils';
import { getCategoryRoot } from '../../pages/help';

const meta = new SlashCommandBuilder()
	.setName('help')
	.setDescription('Shows all commands');

export default command(meta, ({ interaction }) => {
	return interaction.reply(getCategoryRoot(true));
});