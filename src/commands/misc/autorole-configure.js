const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionsBitField, EmbedBuilder } = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("autorole-configure")
    .setDescription("Configure the autorole feature.")
    .addRoleOption((option) =>
      option
        .setName("role")
        .setDescription("The role to give to new members.")
        .setRequired(true)
    ),
  async execute(interaction) {
    if (
      interaction.member.permissions.has(
        PermissionsBitField.Flags.Administrator
      )
    )
      return await interaction.reply({
        content: "You cannot set an auto role",
        ephemeral: true,
      });

    const role = interaction.options.getRole("role");

    await db.set(`autorole_${interaction.guild.id}`, role.id);

    const embed = new EmbedBuilder()
    .setColor("Purple")
    .setDescription(`The autorole has been set to ${role.name}.`)

    await interaction.reply({ embeds: [embed] });
  },
};
