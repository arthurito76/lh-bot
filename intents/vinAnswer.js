const utils = require('./util.js')
const vinAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors pour acheter du bon pinard va à Cave Bérigny'))
  answer.push(utils.toText('Sinon vers Saint-Vincent il y a Cavavin'))
   answer.push(utils.toText('Tu peux aussi aller à l\'Escapade. En plus y\'a pleins de bonnes choses à grignoter (fromage, charcuteries...)'))
   return Promise.resolve(answer)
}
module.exports = vinAnswer