const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cubetier")
    .setDescription("This will calculate the cube tier cost for you")
    .addStringOption((option) =>
      option
        .setName("current-tier")
        .setDescription("The current tier of the item you want to cube")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("desired-tier")
        .setDescription(
          "The current tier of the item you want to cube"
        )
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("cube")
        .setDescription(
          "Which cube you want to use"
        )
        .setRequired(true)
    ),
  async execute(interaction) {
    await interaction.reply("");
  },
};
