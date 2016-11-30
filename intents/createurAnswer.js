const utils = require('./util.js')
const createurAnswer = () => {
  const answer = []
  answer.push(utils.toText('Une société ultra secrète est à l\'origine de ma création'))
    answer.push(utils.toText('mais je ne peux pas t\'en dire plus pour le moment...'))
  return Promise.resolve(answer)
}
module.exports = createurAnswer