exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses kanalında değilsin !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan bir müzik yok !`);

    client.player.pause(message);

    message.channel.send(`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} **durduruldu** !`);

};
