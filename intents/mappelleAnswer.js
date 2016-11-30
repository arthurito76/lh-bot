const utils = require('./util.js')
const mappelleAnswer = () => {
  const answer = []
  answer.push(utils.toText('Enchanté !'))
    answer.push(utils.toText('Je suis content de te parler. Que cherches-tu ?'))
  return Promise.resolve(answer)
}
module.exports = mappelleAnswer