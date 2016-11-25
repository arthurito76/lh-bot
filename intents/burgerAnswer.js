const utils = require('./util.js')
const burgerAnswer = () => {
  const answer = []
answer.push(utils.toText('Tout d\'abord je dirais La Petite Rade, avec un des meilleurs spots de la ville en prime'))
 answer.push(utils.toText('Le Fifty\'s n\'est pas piqué des hanetons non plus'))
    answer.push(utils.toText('Et n\'oublions pas de mentionner les Pénates non plus qui ne donne pas sa part aux lions'))
  return Promise.resolve(answer)
}
module.exports = burgerAnswer