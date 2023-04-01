require("dotenv").config();
const{REST, Routes} = require("discord.js");

const commands = [
    {
        name: 'ursus',
        description: "Shows the 2x ursus and ursus information",

    },
    
];

const rest = new REST({version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(
            Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID),
            {body: commands},
        );

        console.log("Successfully reloaded application (/) commands.");
    } catch (error) {
        console.error(error);
    }
})();