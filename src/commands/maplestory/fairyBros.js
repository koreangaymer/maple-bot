const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("fairybros")
    .setDescription("This will calculate how many total days you can miss")
    .addIntegerOption((option) =>
      option
        .setName("start-year")
        .setDescription("Starting year")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("start-month")
        .setDescription("Starting month")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("start-day")
        .setDescription("Starting day")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("end-year")
        .setDescription("Ending year")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("end-month")
        .setDescription("Ending month")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("end-day")
        .setDescription("Ending day")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("total-days")
        .setDescription("Total days needed")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply("");
  },
};
