module.exports = (client, message, queue) => {

    message.channel.send(`${client.emotes.error} - Sırada daha fazla müzik olmadığı için müzik durdu !`);

};