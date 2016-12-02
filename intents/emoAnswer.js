const utils = require('./util.js')
const emoAnswer = () => {
  const answer = []
  answer.push(utils.toText(':-)'))

   return Promise.resolve(answer)
}
module.exports = emoAnswer