const utils = require('./util.js')
const mediaAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors on a une presse locale bien moribonde, et qui ne dit rien. '))
    answer.push(utils.toText('près je te conseille Les Havraisemblables. Un blog indépendant bien écrit avec des choses vraiment intéressantes'))
answer.push(utils.toText('http://leshavraisemblables.fr/'))
  return Promise.resolve(answer)
}
module.exports = mediaAnswer