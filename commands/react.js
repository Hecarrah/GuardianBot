module.exports = {
    name: 'react',
    description: 'React with Miah smile emoji.',
    execute(message, command, args) {
        const filter = (reaction, user) => {
            return ['chuWAH'].includes(reaction.emoji.name) && !user.bot;
        };

        message.react('757268464506503228');
        message.react('809791748703387698');

        const collector = message.createReactionCollector(filter);
        collector.on('collect', (reaction, user) => {
            //message.reply('You WAH!\'d');
            //console.log(`message: ${message}\nReactions: ${message.reactions}\nCahce:${message.reactions.cache}`)

            const allreactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(user.id));
            try{
                for (const reaction of allreactions.values()){
                    reaction.users.remove(user.id);
                }
            }catch(error){
                    console.log(error);
                }
        });
    }
}