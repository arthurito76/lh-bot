const utils = require('./util.js')
const mouleAnswer = () => {
  const answer = []
answer.push(utils.toText('Va à la Taverne Paillette, c\'est l\'une des rares institutions que les anglais n\'aient pas rasé en 44'))
answer.push(utils.toImage('http://arthurfortin.fr/images/frites.JPG'))
 answer.push(utils.toText('Après si c\est l\'été, Saison 2 à la plage t\'en propose des biens fraîches'))
  return Promise.resolve(answer)
}
module.exports = mouleAnswer