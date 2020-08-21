const BaseCommand = require('../../utils/structures/BaseCommand');
const { GuildMember } = require('discord.js');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'mod', []);
  }

  async run(client, message, args) {
    const amount = args[0];

    if (!amount)
      return message.reply(
        'Please provide an amount of messages i should delete.'
      );

    if (amount > 100)
      return message.reply(
        'You cannot delete more than 100 messages at a time'
      );

    if (amount < 1)
      return message.reply('You must delete at least one message.');

    await message.channel.messages.fetch({ limit: amount }).then((messages) => {
      message.channel.bulkDelete(messages);
    });
  }
};
