exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses Kanalında Değilsin !`);

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan bir müzik yok  !`);

    message.channel.send(`**Sunucu kuyruğu - ${message.guild.name} ${client.emotes.queue}**\nŞuan : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
        return `**#${i + 1}** - ${track.title} | ${track.author} (Tarafından Talep Edildi : ${track.requestedBy.username})`
    }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Ve **${queue.tracks.length - 5}** Diğer şarkılar...` : `Oynatma listesinde **${queue.tracks.length}** song(s)...`}`));

};