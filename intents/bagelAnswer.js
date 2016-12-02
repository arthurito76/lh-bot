const utils = require('./util.js')
const bagelAnswer = () => {
  const answer = []
answer.push(utils.toText('Ca tombe bien que tu aimes ça car je vais te dire la meilleure adresse de la ville : All in Bagels'))
 answer.push(utils.toText('Il y a une boutique au quartier de l\'Eure et une à la bibliothèque de Niemeyer '))
 answer.push(utils.toImage('http://arthurfortin.fr/images/all.jpg'))	
	
  return Promise.resolve(answer)
}
module.exports = bagelAnswer