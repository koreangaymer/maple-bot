const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(message) {
    if (!message.isChatInputCommand()) return;

    if (message.commandName === "server") {
      await message.reply({
        content: `Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`,
        ephemeral: true,
      });
    }
  },
};
