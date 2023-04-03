const fs = require("fs");
const path = require("path");
const { Collection } = require("discord.js");

module.exports = (client) => {
  client.commands = new Collection();

  const commandsPath = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(commandsPath);

  for (const folder of commandFolders) {
    const foldersPath = path.join(commandsPath, folder);
    const commandFiles = fs
      .readdirSync(foldersPath)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const filePath = path.join(foldersPath, file);
      const command = require(filePath);
      if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
      } else {
        console.log(`Command ${filePath} is missing data or execute!`);
      }
    }
  }
};
