const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
  console.log(`El bot esta listo`);

  client.user.setPresence( {
    activity: {
        // name: `-help | Estoy en ${client.guilds.cache.size} servidores, genial no?.`,
        name:'ser un bot',
        type: "PLAYING"
    },
    status: "online"
 });
});

client.on('message', msg => {
  if (msg.content.startsWith("-info")) {
    msg.channel.send({embed: {
        color: 3447003,
        description: 'Hola! yo soy rambot.\n Eh sido creado para administrar el sistema perfecto'
      }});
  }
});

client.on('message',msg =>{
    if (msg.content.startsWith("-help")) {
        msg.channel.send({embed: {
            color: 3447003,
            description: 'Hola! estos son mis comandos de funcionamineto.\n'
            +'1. info \n'+'2.  \n'+'3. \n'+'4. \n'+'5. \n'
          }});
      }
});

// client.on('message', msg =>{
//   var c =['¿Qué hace Lucian rompiendo el nexo cuando están todos en Baron?\n Un Un Blackdoor. :v',
// 'Gragas es tan pero tan gordo que cuando Vladimir usó transfusión le dio diabetes.',
// 'Ese chiste fue tan malo que nerfeó a Kassadin. (?)'+
// '¿Por qué ni diez mil Hierros pueden cambiar una bombilla?\nPORQUE NO PUEDEN SUBIR',
// '¿Qué hacen Malphite y Rammus cuando están solos en casa?\nRock and Roll. e_e',
// '¿Qué hace un Lucian full AP?\nMagia negra. :v',
// '¿Por qué Yasuo no consigue pareja?\nPorque critica mucho'];

// var ramdom = Math.floor(Math.random()*(c.length));
// var res = c[ramdom];
// if (msg.content.startsWith("lol")){
//   msg.channel.send({embed:{
//     description: res
//   }});
// }
// });
client.login('Tu token');