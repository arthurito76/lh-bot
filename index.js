const recast = require('recastai')
const config = require('./config.js')
const INTENTS = require('./intents')
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


 const sendMessageByType = (session, elem) => {
  if (elem.type == 'image') {
    session.send(new builder.Message(session).addAttachment({
      contentType: 'image/png',
      contentUrl: elem.content,
    }))
  } else if (elem.type == 'carousel') {

    var cards = []
    elem.cards.forEach(card => {
      var buttons = []
      card.buttons.forEach(button => {
        if (button.type === 'openUrl') {
          buttons.push(builder.CardAction.openUrl(session, button.value, button.title))
        } else {
          buttons.push(builder.CardAction.imBack(session, button.value, button.title))
        }
      })
      cards.push(
        new builder.HeroCard(session)
          .title(card.title)
          .images([
              builder.CardImage.create(session, card.image)
          ])
          .buttons(buttons)
      )
    })
    
    var msg = new builder.Message(session)
        .textFormat(builder.TextFormat.xml)
        .attachments(cards)
        .attachmentLayout('carousel')
    session.send(msg)  
  } else { 
    session.send(elem.content)
  }
} 

function createGreetingApi(data) {
request({
uri: 'https://facebook.botframework.com/api/v1/bots/arthurfortinbot',
qs: { access_token: EAAZAgZCeKLlq4BAOmcfpvVnjq96PZBZAhZB9bwCNhTIcdRB6XQaCsZBUgoOaDwTqsIMDwGhaxa8ftcoW25AFDfgbIuN5yNQ5JSyqKKLYrC1esGjviZBTkdPZA9fSjRSiP9HI39ZBpSMmZAZBZCMPpRSOFOXuZAgYjw85LJvBAIzT673Fk9gZDZD },
method: 'POST',
json: data

}, function (error, response, body) {
if (!error && response.statusCode == 200) {
  console.log("Greeting set successfully!");
} else {
  console.error("Failed calling Thread Reference API", response.statusCode,     response.statusMessage, body.error);
}
});  
}

function setGreetingText() {
var greetingData = {
setting_type: "greeting",
greeting:{
text:"Hi {{user_first_name}}, welcome!"
}
};
createGreetingApi(greetingData);
}

bot.dialog('/', (session) => {
  recastClient.textRequest(session.message.text)
  .then(res => {
    const intent = res.intent()
if (intent) {
const restaurantName = res.get('restoinfo')	
const specialitiesType = res.all('specialities')
const activiteType = res.all('activiteinfo')
const achatType = res.all('achatinfo')
const locationType = res.all('customlocation')
const detailType = res.all('detail')
INTENTS[intent.slug](restaurantName, specialitiesType, locationType, detailType, activiteType, achatType)
.then(res => { res.forEach((message) => sendMessageByType(session, message)) }) 
.catch(err => { err.forEach((message) => sendMessageByType(session, message)) }) 
} else { session.send(['Je ne comprends pas encore tout très bien, il faut être patient avec moi. Je suis un jeune bot qui doit apprendre.', 'ouhlala j\'ai encore beaucoup à apprendre tu sais', 'Là je n\'ai pas la réponse mais promis je vais chercher', 'hein ?', 'je vais sortir mon chapeau et ma guinbardine pour enquêter...', 'Je ne suis qu\'un bot, pas terminator', 'j\'aimerais te répondre mais les limites de l\'AI ne me permettent de répondre qu\'à des requêtes simples']) }
 })
  .catch((err) => { console.log (err); session.send('ouch!.') })
})
// Setup Restify Server
// Server Init
const server = restify.createServer()
var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
	setGreetingText();
});
server.post('/', connector.listen())
