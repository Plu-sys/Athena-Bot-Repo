const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class NBanCommand extends BaseCommand {
  constructor() {
    super('nBan', 'mod', ['ban']);
  }

  run(client, message, args) {
    const { member, mentions } = message;

    const lol = args.splice(1).join(' ');

    const tag = `<@${member.id}>`;

    if (
      member.hasPermission('ADMINISTRATOR') ||
      member.hasPermission('BAN_MEMBERS')
    ) {
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.ban();

        const banembed = new Discord.MessageEmbed();

        var bann = mentions.users.first();

        var daten = new Date();

        banembed.setTitle('Ban Details');
        banembed.setThumbnail(bann.displayAvatarURL());
        banembed.setColor('RANDOM');
        banembed.setFooter(`Banned at ${daten}`);
        banembed.addFields(
          {
            name: 'User banned:',
            value: target.username,
          },
          {
            name: 'Banned by:',
            value: message.author.username,
          },
          {
            name: 'Reason:',
            value: lol,
          }
        );

        message.channel.send(banembed);
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`);
      }
    } else {
      message.channel.send(
        `${tag} You do not have permission to use this command.`
      );
    }
  }
};
