module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, command, args) {
        message.channel.send('Pong.');
    }
}