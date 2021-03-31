const { MessageEmbed } = require('discord.js')


exports.run = async (client, message) => {

    if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Ses Kanalında Değilsin !`);

    if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Şu anda çalan bir müzik yok  !`);

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    message.channel.send(`${client.emotes.success} - Müzik bu sunucuda **durdu**  !`);
    const msg = await message.channel.send(`stop`)
    const embed = new MessageEmbed()
    .setTitle(" ✅- Müzik bu sunucuda durdu !")
    .setColor("RANDOM")

    await message.channel.send(embed)
            msg.delete()

        

};
