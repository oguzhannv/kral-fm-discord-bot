exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses Kanalında Değilsin !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan bir müzik yok  !`);

    client.player.skip(message);

    message.channel.send(`${client.emotes.success} - Şu anki müzik az önce **atlandı** !`);

};
