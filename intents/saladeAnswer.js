const utils = require('./util.js')
const saladeAnswer = () => {
  const answer = []
answer.push(utils.toImage('./img/profil.png'))
answer.push(utils.toText('une bonne salade!'))
   return Promise.resolve(answer)
}
module.exports = saladeAnswer