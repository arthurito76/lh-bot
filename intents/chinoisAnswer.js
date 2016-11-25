const utils = require('./util.js')
const chinoisAnswer = () => {
  const answer = []
answer.push(utils.toText('Sans hésiter va à Saïgon à Saint-Vincent. C\'est à emporter et à savourer ;-)',
    ' Le Palais Impérial si tu veux te poser'))
  return Promise.resolve(answer)
}
module.exports = chinoisAnswer