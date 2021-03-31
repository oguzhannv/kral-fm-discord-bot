module.exports = (client, message, playlist) => {

    message.channel.send(`${client.emotes.music} - ${playlist.title} sıraya başarıyla eklendi (**${playlist.items.length}** şarkılar) !`);

};