const utils = require('./util.js')
const chinoisAnswer = () => {
  const answer = []
answer.push(utils.toText('Sans hésiter va à Saïgon à Saint-Vincent. C\'est à emporter et à savourer ;-)'))
 answer.push(utils.toText('Le Palais Impérial si tu veux te poser'))	
answer.push(utils.toImage('http://arthurfortin.fr/images/palais.jpg'))	
  return Promise.resolve(answer)
}
module.exports = chinoisAnswer