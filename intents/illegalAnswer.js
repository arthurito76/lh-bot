const utils = require('./util.js')
const illegalAnswer = () => {
  const answer = []
answer.push(utils.toText('oh la!! Je ne répondrai pas je ne veux pas finir en prison !'))
	
  return Promise.resolve(answer)
}
module.exports = illegalAnswer