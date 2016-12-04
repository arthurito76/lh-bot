const utils = require('./util.js')
const crecheAnswer = () => {
  const answer = []
answer.push(utils.toText('Ca c\'est une question complexe. Soyons francs : les places sont chères au Havre. Je t\'invite à consulter Google mais je vais enquêter ;-)'))
answer.push(utils.toText('https://www.google.fr/#q=cr%C3%A8che+le+havre'))
   return Promise.resolve(answer)
}
module.exports = crecheAnswer