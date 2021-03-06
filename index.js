const recast = require('recastai')
const config = require('./config.js')
const INTENTS = require('./intents')
const getEntities = require('./getEntities.js')
const restify = require('restify')
const builder = require('botbuilder')
// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: '3cfbf84d-f022-495f-a8f7-0d4b2ddd6504',
  appPassword: 'yio4TqmvQt6ewOzCsqOPgd5',
})
const recastClient = new recast.Client(config.recast, 'fr')
const bot = new builder.UniversalBot(connector)
// Event when Message received
const replies = ['Je ne comprends pas encore tout très bien, il faut être patient avec moi. Je suis un jeune bot qui doit apprendre.', 'ouhlala j\'ai encore beaucoup à apprendre tu sais', 'Là je n\'ai pas la réponse mais promis je vais chercher', 'hein ?', 'je vais sortir mon chapeau et ma guinbardine pour enquêter...', 'Je ne suis qu\'un bot, pas terminator', 'j\'aimerais te répondre mais les limites de l\'AI ne me permettent de répondre qu\'à des requêtes simples']

 const sendMessageByType = (session, elem) => {
  if (elem.type == 'image') {
    session.send(new builder.Message(session).addAttachment({
      contentType: 'image/png',
      contentUrl: elem.content,
    }))
	
	} else if (elem.type == 'buttons') {
    const buttons = elem.content.map(button => {
      return (new builder.CardAction().title(button.title).type('imBack').value(button.value))
    })
    const card = new builder.ThumbnailCard().buttons(buttons).subtitle(elem.title)
    session.send(new builder.Message(session).addAttachment(card))
	console.log('ok')
	
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
		.attachmentLayout('buttons')
        .attachmentLayout('carousel')
    session.send(msg)  
  } else { 
    session.send(elem.content)
  }
} 



bot.dialog('/', (session) => {
  const user = session.privateConversationData
  recastClient.textRequest(session.message.text)
    .then(res => {
      const intent = res.intent()
      console.log(intent)
      if (intent && INTENTS[intent.slug]) {
        const entities = getEntities(res, user)
        INTENTS[intent.slug](entities, user)
          .then(res => { res.forEach((message) => sendMessageByType(session, message)) })
          .catch(err => { err.forEach((message) => sendMessageByType(session, message)) })
      } else {
        console.log('ici');
        sendMessageByType(session, {type: 'text', content: replies[Math.floor(Math.random() * replies.length)] })
      }
    })
    .catch((err) => { console.log (err); session.send('ouch!.') })
}) 
// Setup Restify Server
// Server Init
const server = restify.createServer()
var port = process.env.PORT || 5000;
server.listen(port, function() {
    console.log("Listening on " + port);
});
server.post('/', connector.listen())
