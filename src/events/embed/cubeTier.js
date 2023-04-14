const { Events, EmbedBuilder } = require("discord.js");
const cubeMath = require("../../eventSourceCode/cubeTierUp.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "cubetier") {
      const currentCubeTier =
        interaction.options.getString("current-tier");
      const desiredCubeTier =
        interaction.options.getString("desired-tier");
        const cubeUsed = interaction.options.getString("cube");
      const cubeData = cubeMath.tierAverage(currentCubeTier, desiredCubeTier, cubeUsed);
      const averageCost = cubeData.average;
      const averageCubes = cubeData.totalCubes;
      const cubeTier = new EmbedBuilder()
        .setTitle("Cube TierUp Calculator")
        .setDescription(
          `This will calculate the meso cost for you`
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/1058456883519819786/1080956104793653269/image.png"
        )
        .setColor(0x00ffc7)
        .addFields(
            {
                name: "Cube Used",
                value: `${cubeUsed}`,
            },
            {
                name: "Starting Tier",
                value: `${currentCubeTier}`,
            },
            {
                name: "Ended Tier",
                value: `${desiredCubeTier}`,
            },
            {
                name: "Average Cost",
                value: `${averageCost}`,
            },
            {
                name: "Average Cubes",
                value: `${averageCubes}`,
            }
        )
        .setTimestamp();
      interaction.reply({ embeds: [cubeTier], ephemeral: true });
    }
  },
};
