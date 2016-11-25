const utils = require('./util.js')
const aperoAnswer = () => {
  const answer = []
answer.push(utils.toText('Voilà une vrai question... Tout dépend de ce que tu aimes'))
 answer.push(utils.toText('Perso j\'aime bien l\'Eautarie ou l\'Abricot avec les copains en mode bière et planche à grignoter'))
    answer.push(utils.toText('Si tu veux du plus guindé tu as l\Etable ou les Enfants Sages'))	
  return Promise.resolve(answer)
}
module.exports = aperoAnswer