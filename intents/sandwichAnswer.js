const utils = require('./util.js')
const bagelAnswer = () => {
  const answer = []
answer.push(utils.toText('Pour un bon wich va à Williamsburg. Du choix et des produits frais comme on les aime.'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/will.jpg'))	
	
  return Promise.resolve(answer)
}
module.exports = bagelAnswer