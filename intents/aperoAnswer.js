const utils = require('./util.js')
const aperoAnswer = () => {
  const answer = []
answer.push(utils.toText('Voilà une vrai question... Tout dépend de ce que tu aimes',
    'Perso j\'aime bien l\'Eautarie ou l\'Abricot avec les copains en mode bière et planche à grignoter',
	'Si tu veux du plus guindé tu as l\Etable ou les Enfants Sages '))
  return Promise.resolve(answer)
}
module.exports = aperoAnswer