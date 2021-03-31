exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

    const track = await client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) => {
        if (client.player.getQueue(message).filters[filterName]) filters.push(filterName);
    });

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: track.title },
            footer: { text: 'oguzhannv' },
            fields: [
                { name: 'Kanal', value: track.author, inline: true },
                { name: 'Tarafından talep edildi', value: track.requestedBy.username, inline: true },
                { name: 'Oynatma listesinden', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                { name: 'Görüntülenme', value: track.views, inline: true },
                { name: 'Süresi', value: track.duration, inline: true },
                { name: 'filtreler etkinleştirildi', value: filters.length, inline: true },

                { name: 'ilerleme çubuğu', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
            ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

};

