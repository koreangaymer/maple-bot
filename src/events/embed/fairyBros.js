const { Events, EmbedBuilder, inlineCode } = require("discord.js");
const fairyMath = require("../../eventSourceCode/fairyBros.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "fairybros") {
      const startYear = interaction.options.getInteger("start-year");
      const startMonth = interaction.options.getInteger("start-month");
      const startDay = interaction.options.getInteger("start-day");
      const endYear = interaction.options.getInteger("end-year");
      const endMonth = interaction.options.getInteger("end-month");
      const endDay = interaction.options.getInteger("end-day");
      const totalDays = interaction.options.getInteger("total-days");
      const fairyData = fairyMath.fairyBros(
        startYear,
        startMonth,
        startDay,
        endYear,
        endMonth,
        endDay,
        totalDays
      );
      const difference = fairyData.difference;
      const startTime = fairyData.timeStart;
      const endTime = fairyData.timeEnd;
      const fairyBros = new EmbedBuilder()
        .setTitle("Fairy Bros Calculator")
        .setDescription(
          `This will calculate how many total days you can miss\nYour time show it in ${inlineCode(
            "MM/DD/YYYY/HH/MM"
          )}`
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/886471193576759336/1096512544706941019/image.png"
        )
        .addFields({
          name: `<t:${startTime}> to <t:${endTime}>`,
          value: `You can miss ${difference} days`,
        })
        .setTimestamp();
      interaction.reply({ embeds: [fairyBros], ephemeral: true });
    }
  },
};
