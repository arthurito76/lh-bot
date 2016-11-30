const utils = require('./util.js')
const nomAnswer = () => {
  const answer = []
  answer.push(utils.toText('Je m\'appelle LH Bot'))
    answer.push(utils.toText('et je suis là pour t\'aider à trouver les meilleurs plans de LH'))
  return Promise.resolve(answer)
}
module.exports = nomAnswer