const utils = require('./util.js')
const mangerAnswer = () => {
  const answer = []
answer.push(utils.toText('Voilà une question intéressante, je vais essayer de te répondre...'))
 answer.push(utils.toText('Que voudrais-tu manger ?'))
  return Promise.resolve(answer)
}
module.exports = mangerAnswer