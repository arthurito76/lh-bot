const utils = require('./util.js')
const saladeAnswer = () => {
  const answer = []
answer.push(utils.toImage('http://www.universal-connect.com/wp-content/themes/universal-connect/imgs/logo-universal-connect.png'))
answer.push(utils.toText('une bonne salade!'))
   return Promise.resolve(answer)
}
module.exports = saladeAnswer