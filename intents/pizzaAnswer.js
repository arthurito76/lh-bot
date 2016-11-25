const utils = require('./util.js')
const pizzaAnswer = () => {
  const answer = []
answer.push(utils.toText('Tu peux aller à Al Dente'))
 answer.push(utils.toText('Le Jardin propose la meilleure pizza mais ce n\'est ouvert que le printemps et l\'été.'))	
 answer.push(utils.toText('Al Dente est au top'))		
  return Promise.resolve(answer)
}
module.exports = pizzaAnswer