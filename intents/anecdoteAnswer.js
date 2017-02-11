const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const anecdoteAnswer = () => {
  const answer = []
answer.push(utils.toText('François 1er n\'avait que 23 ans lorqu\'il décida de faire construire la ville du Havre'))
 answer.push(utils.toText('Aux début des bains de mer, les femmes de la bonne société pouvaient se faire porter jusqu'à l'eau pour 50 centimes'))	
  answer.push(utils.toText('Louis XV découvrit la mer la 1ère fois au HAvre à 39 ans.'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/rex.jpg'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = anecdoteAnswer