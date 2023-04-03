const { Events } = require("discord.js");

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    client.user.setPresence({ activities: [{ name: "with your mom" }], status: "dnd" });
    console.log(`${client.user.tag} is logged in!`);
  },
};
