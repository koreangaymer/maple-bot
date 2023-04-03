require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const { Guilds, GuildMembers, GuildMessages, MessageContent, DirectMessages } = GatewayIntentBits;

const eventHandler = require("./handlers/eventHandler.js");
const commandHandler = require("./handlers/commandHandler.js");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent, DirectMessages],
});


eventHandler(client);
commandHandler(client);



client.login(process.env.TOKEN);
