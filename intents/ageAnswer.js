const utils = require('./util.js')
const ageAnswer = () => {
  const answer = []
  answer.push(utils.toText('Je suis encore jeune, mon langage a besoin de se forger'))
    answer.push(utils.toText('mais petit bot deviendra grand !'))
  return Promise.resolve(answer)
}
module.exports = ageAnswer