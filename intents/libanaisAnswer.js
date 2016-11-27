const utils = require('./util.js')
const libanaisAnswer = () => {
  const answer = []
  answer.push(utils.toText('@O délices du Liban sans hésiter.'))
  answer.push(utils.toText('Une cuisinière au top et des mets succulents'))
   return Promise.resolve(answer)
}
module.exports = libanaisAnswer