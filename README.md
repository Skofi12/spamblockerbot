# AntiSpam-ModBot
Just a bot template for a moderation bot with antispam. (discord-anti-spam)

# Installation
You will need to have only some apps downloaded.
- Node.js v12+

- A code editor like Visual Studio Code, jetbrains, notepad++ ect..

**Download node.js**
Download Link: https://nodejs.org/en/download/

Download tutorial: https://phoenixnap.com/kb/install-node-js-npm-on-windows

**Download a code editor**
I will prefer using visual code editor.

Download link: https://code.visualstudio.com/Download

# Installation package.
https://github.com/Scraayp/AntiSpam-ModBot/releases
Install the package in here. (The latest one)

Right click on the folder there you see a option open with Code.

Open the folder with code. 

Then click **ctrl + shift + \`** (https://imgur.com/a/drzX2ha go to terminal and open new terminal)

That will open up a treminal/console.

Write in the terminal/console. **npm install**

That will install every needed package

Then fill out config.json.

prefix = "!" // by deafault, can be change.

token = "" // by default, it's your bot token. https://discordapp.com/developers/applications

And you good to go. Write in the terminal/console **node index.js**

Than the bot should pup up with online.

# AntiSpam Options
The default antispam options are.
```
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
```
You can always change it. More information about the options and more! (https://discord-anti-spam.js.org/)

Help needed. Join the support server below

# Any Help
You can open up any pull requests, issues and that sort of things.

But you can always join the support discord server of the discord-anti-spam module. (https://discord.gg/AuP2tCH)
