const fs = require('fs');
const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready',() => {
    console.log('Ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLocaleLowerCase();

    try{
        client.commands.get(command).execute(message,command,args);
    }catch(error){
        console.error(error);
        message.reply('Error executing command, it might not exists or you did an oopsie!')
    }
});


client.login(token);