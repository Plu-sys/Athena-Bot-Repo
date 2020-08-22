const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NKickCommand extends BaseCommand {
  constructor() {
    super('nKick', 'mod', ['kick']);
  }

  run(client, message, args) {
    const { member, mentions } = message;

    const tag = `<@${member.id}>`;

    const lol = args.splice(1).join(' ');

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('KICK_MEMBERS')
    ) {
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.kick();

        const banembed = new Discord.MessageEmbed();

        var bann = mentions.users.first();

        var daten = new Date();

        banembed.setTitle('Kick Details');
        banembed.setThumbnail(bann.displayAvatarURL());
        banembed.setColor('RANDOM');
        banembed.setFooter(`Kicked at ${daten}`);
        banembed.addFields(
          {
            name: 'User kicked:',
            value: target.username,
          },
          {
            name: 'Kicked by:',
            value: message.author.username,
          },
          {
            name: 'Reason:',
            value: lol,
          }
        );

        message.channel.send(banembed);
      } else {
        message.channel.send(`${tag} Please specify someone to kick.`);
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      );
    }
  }
};
