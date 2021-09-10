//Importing packages
import Discord from "discord.js";
import badword from "./Bad-words.js";
import start from "./server.js";
import config from "./config.js";

//Bot setup
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });

//Declear variables
const helpMessage =
  "Hello, I'm the starii bella coummunity manager and I will be taking care of you on this server\ncommands:\n!channel - To go to the youtube channel\n!help - Help\n!contact-admin - Contact admin\nThanks!";
const contactAdminMessage =
  "Hello, Please go to the contact-staff-and-server-surpport channel and mention @AlvinC or the other moderators for staff surport.";
const goToYoutubeMessage =
  "Starii Bella channel:\nhttps://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw\nMake sure to like and subscribe and enjoy!";

//Ready Event listener
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Message Event listener
client.on("messageCreate", (message) => {
  //Help command
  if (message.content === "!help") message.reply(helpMessage);

  //Contact admin command
  if (message.content === "!contact-admin") message.reply(contactAdminMessage);

  //Bad word filter
  if (badword.indexOf(message.content) != -1) {
    message.delete();
    message.channel.send(
      "Sorry I have found inappropriate word(s) in your message so I have deleted it posting inappropriate words can result in a ban!"
    );
  }

  //Go to youtube channel command
  if (message.content === "!channel") message.reply(goToYoutubeMessage);
});

//Start server
start();

//Login bot with token from discord dev portal
client.login(config.token);
