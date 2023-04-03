const { Events } = require("discord.js");

module.exports = (client) => {
  client.on(Events.GuildMemberAdd, async (member) => {
    const role = await db.get(`autorole_${member.guild.id}`);
    const giveRole = member.guild.roles.cache.get(role);

    member.roles.add(giveRole);
  });
};
