const utils = require('./util.js')
const brunchAnswer = () => {
  const answer = []
  answer.push(utils.toText('Tu peux aller au Chat Bleu. La vue y est imprenable en plus'))
answer.push(utils.toImage('http://arthurfortin.fr/images/chat.jpg'))
  answer.push(utils.toText('et La Place, place Saint-Vincent'))
  
   return Promise.resolve(answer)
}
module.exports = brunchAnswer