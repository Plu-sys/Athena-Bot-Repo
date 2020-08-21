// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
const wchannelId = '712312835509846088'; //Welcome message channel
const ruleschannelid = '745713263576350831'; //Rules Channel Id

module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }

  async run(client, member) {
    const wmessage = `:tada:  Welcome <@${
      member.id
    }> to this server. Please check the rules at ${member.guild.channels.cache
      .get(ruleschannelid)
      .toString()}  :tada: `;

    const channel = member.guild.channels.cache.get(wchannelId);

    channel.send(wmessage);
  }
};
