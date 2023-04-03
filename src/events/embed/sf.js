const { Events, EmbedBuilder } = require("discord.js");
const sfMath = require("../../eventSourceCode/sfCode.js");
const input = require("../../commands/maplestory/sfCommand.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "sf") {
      const itemLevel = interaction.options.getInteger("item-level");
      const currentStarforceLevel =
        interaction.options.getInteger("current-stars");
      const desiredStarforceLevel =
        interaction.options.getInteger("desired-stars");
      const totalTrials = interaction.options.getInteger("total-trials");
      const starForceData = sfMath.avgMedRange(
        itemLevel,
        currentStarforceLevel,
        desiredStarforceLevel,
        totalTrials
      );
      const averageTap = starForceData.averageTap;
      const average = starForceData.average;
      const median = starForceData.median;
      const totalBoom = starForceData.totalBoom;
      const averageBoom = starForceData.averageBoom;
      const trialCount = starForceData.trialCount;
      const sf = new EmbedBuilder()
        .setTitle("Starforce Calculator")
        .setDescription(
          `This will calculate the starforce cost for you\n\nLevel: ${itemLevel} <a:spiritBongo:1092338534637129818>\nStars: ${currentStarforceLevel} to ${desiredStarforceLevel}<a:starss:1092337407694733323>`
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/1058456883519819786/1080956104793653269/image.png"
        )
        .setColor(0x00ffc7)
        .addFields(
          {
            name: "Meso Cost",
            value: `Average: ${average}\n Median: ${median}`,
          },
          { name: `Booms`, value: `Average Boom: ${averageBoom}` },
          { name: `Taps`, value: `Average Tap: ${averageTap}` })

        .setTimestamp();
      interaction.reply({ embeds: [sf] }, { ephemeral: true });
    }
  },
};
