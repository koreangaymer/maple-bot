const { Events } = require("discord.js");
const welcome = require("../../eventSourceCode/welcomeMessage");

module.exports = {
  name: Events.ClientReady,
  async execute(client) {
    welcome(client);
  },
};
