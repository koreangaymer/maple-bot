module.exports = (client) => {
  client.on("guildMemberAdd", async (member) => {
    const welcomeChannel = client.channels.cache.get("1090896574168698962");
    const welcomeMessage = `Welcome to the server! <@${member.user.id}>`;
    welcomeChannel.send(welcomeMessage);

    const DMMessages = `Welcome ${member}!`;

    member.send(DMMessages);
  });
};
