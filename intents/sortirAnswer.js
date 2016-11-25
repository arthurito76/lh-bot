const utils = require('./util.js')
const sortirAnswer = () => {
  const answer = []
  answer.push(utils.toText('En mode posé tu peux aller à l\'Etable ou aux Enfants Sages'))
   answer.push(utils.toText('Si tu veux faire la teuf va à la Ptite Rade ou à l\Abri Côtier'))
}
module.exports = sortirAnswer