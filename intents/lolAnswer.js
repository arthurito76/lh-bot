const utils = require('./util.js')
const lolAnswer = () => {
  const answer = []
  answer.push(utils.toText('LOL'))
  answer.push(utils.toText('hihihih'))
   return Promise.resolve(answer)
}
module.exports = lolAnswer