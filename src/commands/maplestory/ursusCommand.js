const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ursus")
    .setDescription("Shows the 2x ursus and ursus information"),
  async execute(interaction) {
    await interaction.reply("Shows the 2x ursus and ursus information");
  },
};