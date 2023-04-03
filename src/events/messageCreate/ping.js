const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  async execute(message) {
    if (message.author.bot) return;

    if (message.content === "ping") {
      await message.reply("Pong!");
    }
  },
};
