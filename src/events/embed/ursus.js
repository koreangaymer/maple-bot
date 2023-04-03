const { Events, EmbedBuilder, inlineCode } = require("discord.js");
const ursus = require("../../eventSourceCode/ursus.js")

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ursus") {
      const ursusStart = new EmbedBuilder()
        .setTitle("Ursus 2X Mesos/XP Times")
        .setDescription(
          `2x Mesos/XP will last for 10 hours from the start time.\n${inlineCode(
            "The first date listed is in your local time."
          )}\n The second date listed is in Korean time.`
        )
        .setThumbnail(
          "https://cdn.discordapp.com/attachments/743727951966765117/883867424326307870/232.png"
        )
        .setColor(0x00ffc7)
        .addFields({
          name: "Current Times",
          value: `<t:${ursus.discordUnix}:F>\n${ursus.timeInKorea}`,
        })
        .addFields({
          name: `2x ends in ${ursus.timeDiffEnd.hours}h ${ursus.timeDiffEnd.minutes}m`,
          value: `<t:${ursus.discordUnix}:F>\n${ursus.ursusEnd}`,
        })
        .addFields({
          name: `2x starts at ${ursus.timeDiffStart.hours}h ${ursus.timeDiffStart.minutes}m`,
          value: `<t:${ursus.discordUnix}:F>\n${ursus.ursusStart}`,
        })

        .setTimestamp();
      interaction.reply({ embeds: [ursusStart] });
    }
  },
};
