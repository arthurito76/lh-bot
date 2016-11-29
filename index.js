const recast = require('recastai')
const config = require('./config.js')
const INTENT = require('./intents')
const restify = require('restify')
const builder = require('botbuilder')
// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: '3cfbf84d-f022-495f-a8f7-0d4b2ddd6504',
  appPassword: 'yio4TqmvQt6ewOzCsqOPgd5',
})
const recastClient = new recast.Client(config.recast)
const bot = new builder.UniversalBot(connector)
// Event when Message received

const INTENTS = [
	 'infopokemon',
  'greetings',
  'aurevoir',
  'pizzalh',
  'burger',
  'moules',
  'salade',
  'cava',
  'the',
  'libanais',
  'frites',
  'bouchons',
  'apero',
  'biere',
  'kebab',
  'hotel',
  'sortir',
  'sushis',
  'chinois',
  'insultes',
  'cocktails',
  'musee',
  'merci',
  'boites',
  'manger',
  'gastro',
  'promenade',
  'concert',
  'vin',
  'homeapero',
]

const sendMessageByType = (session, elem) => {
if (elem.type == 'image') {
session.send(new builder.Message().addAttachment({
   contentType: 'image/png',
   contentUrl: elem.content,
 }))
} else { 
session.send(elem.content)
}
}


bot.dialog('/', (session) => {
  recastClient.textRequest(session.message.text)
  .then(res => {
    const intent = res.intent()
const entity = res.get('pokemon')
console.log(intent);
if (intent) {
INTENTS[intent.slug]()
.then(res => { res.forEach((message) => sendMessageByType(session, message)) }) 
.catch(err => { err.forEach((message) => sendMessageByType(session, message)) }) 
} else { session.send(['Je ne comprends pas encore tout très bien, il faut être patient avec moi. Je suis un jeune bot qui doit apprendre.', 'ouhlala j\'ai encore beaucoup à apprendre tu sais', 'no comprendo senior', 'hein ?', 'je n\'ai pas la réponse mais je vais me renseigner']) }
 })
  .catch(() => session.send('ouch!.'))
})
// Setup Restify Server
// Server Init
const server = restify.createServer()
var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
server.post('/', connector.listen())
