const utils = require('./util.js')
const homeaperoAnswer = () => {
  const answer = []
  answer.push(utils.toText('Te pose pas de questions, passe à l\'Ours Dubocage'))
  answer.push(utils.toText('Et chez l\'italien des Halles'))
   return Promise.resolve(answer)
}
module.exports = homeaperoAnswer