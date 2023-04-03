const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(message) {
    if (!message.isChatInputCommand()) return;

    if (message.commandName === "user") {
      await message.reply({
        content: `Your tag: ${message.user.tag}\nYour id: ${message.user.id}`,
        ephemeral: true,
      }
      );
    }
  },
};
