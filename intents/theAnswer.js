const utils = require('./util.js')
const theAnswer = () => {
  const answer = []
answer.push(utils.toText('Sans hésiter je te réponds le Chat Bleu'))

answer.push(utils.toText('Du bon thé, de bonnes choses à grignoter, une ambiance cool et un patron sympa'))
answer.push(utils.toImage('http://arthurfortin.fr/images/chat.jpg'))
answer.push(utils.toText('Et le 2ème meilleur de la ville c\'est l\'Air du Thé'))
answer.push(utils.toImage('http://le-havre.dreamville.fr/media/commerces/15564/visuels/lair-du-the-le-havre-15564-visuel-1.jpg'))
   return Promise.resolve(answer)
}
module.exports = theAnswer