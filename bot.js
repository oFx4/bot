const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  var Split = message.content.split(' ');
  if(Split[0].indexOf(';') != -1) {
   // return;
    var cmd = Split[0].replace(';', '');
    
    if(cmd === 'p') {
      message.channel.sendMessage('야');
    } 
    else if(cmd === 't'){
      
    
  //}
 // if (Split[0] === '재북')  {
      var result = message.content.replace(';t', '');
      message.channel.sendMessage(result);
    
    
     
    }
    else if(cmd === 's') {
    message.channel.sendMessage({file : 'https://cdn.glitch.com/da2e9bad-2c3a-49e9-8b50-02798a2dafc4%2FKakaoTalk_20190225_013133547.png?1551026652255.jpg' });
    }
  }
    
    
  
});

client.login(process.env.BOT_TOKEN);