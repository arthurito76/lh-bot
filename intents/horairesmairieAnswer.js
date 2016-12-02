const utils = require('./util.js')
const horairesmairieAnswer = () => {
  const answer = []
answer.push(utils.toText('La mairie ouvre à 8h'))
 answer.push(utils.toText('et ferme à 17h '))	
	
  return Promise.resolve(answer)
}
module.exports = horairesmairieAnswer