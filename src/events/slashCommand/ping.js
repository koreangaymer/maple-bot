const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(message) {
    if (!message.isChatInputCommand()) return;

    if (message.commandName === "ping") {
        await message.reply({content: "Pong!", ephemeral: true});
        }
        
  },
};
