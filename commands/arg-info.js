module.exports = {
    name: 'arg-info',
    description: 'Prints out information of the command and its arguments',
    execute(message, command, args) {
        if(!args.length){
            return message.channel.send(`No arguments provided, ${message.author}`);
        }
        message.channel.send(`ARG-INFO\nCommand:\t\t  ${command}\nArguments:\t\t ${args}`);
    }
}