const utils = require('./util.js')
const petanqueAnswer = () => {
  const answer = []
answer.push(utils.toText('Tu as la version populaire à la plage, avec un pack de bière '))
 answer.push(utils.toText('ou la version chic aux Enfants Sages'))	
 answer.push(utils.toImage('http://arthurfortin.fr/images/enf.jpg'))	
  return Promise.resolve(answer)
}
module.exports = petanqueAnswer