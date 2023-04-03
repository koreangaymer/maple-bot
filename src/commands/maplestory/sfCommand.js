const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sf")
    .setDescription("This will calculate the starforce cost for you")
    .addIntegerOption((option) =>
      option
        .setName("item-level")
        .setDescription("The item level of the item you want to starforce")
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("current-stars")
        .setDescription(
          "The current starforce level of the item you want to starforce"
        )
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("desired-stars")
        .setDescription(
          "The desired starforce level of the item you want to starforce"
        )
        .setRequired(true)
    )
    .addIntegerOption((option) =>
      option
        .setName("total-trials")
        .setDescription("How many trials you want to use")
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply('')
  },
};
