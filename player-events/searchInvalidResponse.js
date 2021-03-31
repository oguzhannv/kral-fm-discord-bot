module.exports = (client, message, query, tracks, content, collector) => {

    message.channel.send(`${client.emotes.error} - **${tracks.length}**ile **1** arasında geçerli bir numara göndermelisiniz  !`);

};