const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'info', ['p']);
  }

  async run(client, message, args) {
    const msg = await message.channel.send('🏓 Pinging...');
    const embed = new Discord.MessageEmbed()
      .setTitle('🏓 Pong! 🏓')
      .setDescription(
        ` Latency is ${Math.floor(
          msg.createdTimestamp - message.createdTimestamp
        )}ms\n API Latency is ${Math.round(client.ws.ping)}ms`
      )
      .setColor('0x47FF00');
    msg.edit(embed);
  }
};
