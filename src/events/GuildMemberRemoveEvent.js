// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
const BaseEvent = require('../utils/structures/BaseEvent');
const gchannel = '745712938446356561'; //Goodbye channel id

module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }

  async run(client, member) {
    const gmessage = `:sob:  Sorry to see you leave <@${member.id}>  :sob:`; //Goodbye message

    const channel = member.guild.channels.cache.get(gchannel);

    channel.send(gmessage);
  }
};
