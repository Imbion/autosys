module.exports = {
	name: 'kick',
	description: 'Kicks a user, but not really, only in rp',
	execute(message, args) {
		// grab the "first" mentioned user from the message
	    // this will return a `User` object, just like `message.author`
	    const taggedUser = message.mentions.users.first();

	    message.channel.send(`${message.author} kicked ${taggedUser.username}`);
    }
};