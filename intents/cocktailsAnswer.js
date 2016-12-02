const utils = require('./util.js')
const cocktailsAnswer = () => {
  const answer = []
answer.push(utils.toText('Alors tout va dépendre de l\'ambiance que tu recherches'))
 answer.push(utils.toText('Le Cyclamen pour la grande qualité des cocktails et de leur préparation. Le taulier est un spécialiste. Mais n\'y va pas en mode on va se la coller avec les amis, t\'es là pour savourer'))
 answer.push(utils.toImage('http://arthurfortin.fr/images/cycl.jpg'))
    answer.push(utils.toText('Si tu veux danser et voir du monde alors file à l\'Abri Côtier. En plus ils adorent inventer ;-)'))
	answer.push(utils.toImage('http://arthurfortin.fr/images/ab.jpg'))
  return Promise.resolve(answer)
}
module.exports = cocktailsAnswer