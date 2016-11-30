const utils = require('./util.js')
const crepeAnswer = () => {
  const answer = []
answer.push(utils.toText('Les meilleures crêpes de la ville sont à Saint-François'))
 answer.push(utils.toText('C\'est l\'ancien quartier breton donc autant te dire qu\'on ne rigole pas avec les crêpes chez eux '))	
	
  return Promise.resolve(answer)
}
module.exports = crepeAnswer