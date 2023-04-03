const fs = require("fs");
const path = require("path");

module.exports = (client) => {
  const eventsPath = path.join(__dirname, "../events");
  const eventsFolder = fs.readdirSync(eventsPath);

  for (const folder of eventsFolder) {
    const foldersPath = path.join(eventsPath, folder);
    const eventFiles = fs
      .readdirSync(foldersPath)
      .filter((file) => file.endsWith(".js"));
    for (const file of eventFiles) {
      const event = require(`../events/${folder}/${file}`);
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
    }
  }
};
