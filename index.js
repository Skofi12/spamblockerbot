const discord = require("discord.js")
const client = new discord.Client();
const config = require("./config.json")
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3,
	kickThreshold: 7,
	banThreshold: 7,
	muteThreshold: 5, 
	maxInterval: 2000, 
	warnMessage: '{@user}, Please stop spamming.', 
	kickMessage: '**{user_tag}** has been kicked for spamming.',
	banMessage: '**{user_tag}** has been banned for spamming.',
	muteMessage: '**{user_tag}** has been muted for spamming.',
	maxDuplicatesWarning: 7,
	maxDuplicatesKick: 10,
	maxDuplicatesBan: 12,
	maxDuplicatesMute: 9,
	exemptPermissions: [ 'ADMINISTRATOR'],
	ignoreBots: true,
	verbose: true,
	ignoredUsers: [],
});

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.\nYour bot is ready master!`));

client.on('message', (message) => antiSpam.message(message));

client.login('');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity ("shh!")
});

const keepAlive = require("./server");



keepAlive();