exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses Kanalında Değilsin !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan bir müzik yok  !`);

    client.player.shuffle(message);

    return message.channel.send(`${client.emotes.success} - Sıra karıştırıldı **${client.player.getQueue(message).tracks.length}** song(s) !`);

};
