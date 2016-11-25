const recast = require('recastai')
const config = require('./config.js')
const getInfoPokemon = require('./intents/infopokemon.js')
const mangerAnswer = require('./intents/mangerAnswer.js')
const getGreetings = require('./intents/greetings.js')
const merciAnswer = require('./intents/merciAnswer.js')
const pizzaAnswer = require('./intents/pizzaAnswer.js')
const boitesAnswer = require('./intents/boitesAnswer.js')
const byeAnswer = require('./intents/byeAnswer.js')
const cavaAnswer = require('./intents/cavaAnswer.js')
const aperoAnswer = require('./intents/aperoAnswer.js')
const burgerAnswer = require('./intents/burgerAnswer.js')
const mouleAnswer = require('./intents/mouleAnswer.js')
const saladeAnswer = require('./intents/saladeAnswer.js')
const friteAnswer = require('./intents/friteAnswer.js')
const bouchonsAnswer = require('./intents/bouchonsAnswer.js')
const biereAnswer = require('./intents/biereAnswer.js')
const sushisAnswer = require('./intents/sushisAnswer.js')
const chinoisAnswer = require('./intents/chinoisAnswer.js')
const insultesAnswer = require('./intents/insultesAnswer.js')
const cocktailsAnswer = require('./intents/cocktailsAnswer.js')
const museeAnswer = require('./intents/museeAnswer.js')
const restify = require('restify')
const builder = require('botbuilder')
// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: '3cfbf84d-f022-495f-a8f7-0d4b2ddd6504',
  appPassword: 'yio4TqmvQt6ewOzCsqOPgd5',
})
const recastClient = new recast.Client(config.recast)
const bot = new builder.UniversalBot(connector)
const sendMessageByType = (session, elem) => {
if (elem.type == 'image') {
session.send(new builder.Message().addAttachment({
   contentType: 'image/png',
   contentUrl: elem.content,
 }))
} else {
  text: (session, elem) => session.send(elem.content),

}
// Event when Message received

const INTENTS = {
	 infopokemon: getInfoPokemon,
  greetings: getGreetings,
  aurevoir: byeAnswer,
  pizzalh: pizzaAnswer,
  burger: burgerAnswer,
  moules: mouleAnswer,
  salade: saladeAnswer,
  cava: cavaAnswer,
  frites: friteAnswer,
  bouchons: bouchonsAnswer,
  apero: aperoAnswer,
  biere: biereAnswer,
  sushis: sushisAnswer,
  chinois: chinoisAnswer,
  insultes: insultesAnswer,
  cocktails : cocktailsAnswer,
  musee : museeAnswer,
  merci: merciAnswer,
  boites: boitesAnswer,
  manger: mangerAnswer,
}

bot.dialog('/', (session) => {
  recastClient.textRequest(session.message.text)
  .then(res => {
    const intent = res.intent()
const entity = res.get('pokemon')
console.log(intent);
if (intent) {
  INTENTS[intent.slug]
.then(res => { res.forEach((message) => sendMessageByType(session, message)) }) 
.catch(err => { err.forEach((message) => sendMessageByType(session, message)) }) 
else { session.send('Je ne comprends pas encore tout très bien, il faut être patient avec moi. Je suis un jeune bot qui doit apprendre.') }
 })
  .catch(() => session.send('Je ne comprends pas encore tout très bien, il faut être patient avec moi. Je suis un jeune bot qui doit apprendre.'))
})
// Setup Restify Server
// Server Init
const server = restify.createServer()
var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
server.post('/', connector.listen())
