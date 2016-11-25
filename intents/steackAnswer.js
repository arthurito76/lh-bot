const utils = require('./util.js')
const steakAnswer = () => {
  const answer = []
answer.push(utils.toText('Le Grignot te propose de belles pièces de viande'))
 answer.push(utils.toText('Niveau boucher rien n\'égal Laiguillon'))		
  return Promise.resolve(answer)
}
module.exports = steakAnswer