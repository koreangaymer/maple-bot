require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder, codeBlock, inlineCode } = require("discord.js");
const ursus = require("./ursus.js");


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log("MushroomGame is online!");
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "ursus") {
    const ursusStart = new EmbedBuilder()
      .setTitle("Ursus 2X Mesos/XP Times")
      .setDescription(
        `2x Mesos/XP will last for 10 hours from the start time.\n${inlineCode(
          "The first date listed is in your local time."
        )}\n The second date listed is in Korea time.`
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
        name: `2x ends in ${ursus.timeDiffEnd.hours} hours and ${ursus.timeDiffEnd.minutes} minutes`,
        value: `<t:${ursus.discordUnix}:F>\n${ursus.ursusEnd}`,
      })
      .addFields({
        name: `2x starts at ${ursus.timeDiffStart.hours} hours and ${ursus.timeDiffStart.hours}`,
        value: `<t:${ursus.discordUnix}:F>\n${ursus.ursusStart}`,
      })

      .setTimestamp();
    interaction.reply({ embeds: [ursusStart] });
  }
});

client.on("messageCreate", (message) => {
  if (message.content === "ursus") {
    embed(client);
  }
});

client.login(process.env.TOKEN);
