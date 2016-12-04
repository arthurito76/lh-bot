const utils = require('./util.js')
const cineAnswer = () => {
  const answer = []
  answer.push(utils.toText('Ce n\'est pas compliqué : laisse Bee te faire découvrir la ville'))
answer.push(utils.toImage('http://arthurfortin.fr/images/bee'))
    answer.push(utils.toText('RDV rues piétonnes'))
  return Promise.resolve(answer)
}
module.exports = cineAnswer