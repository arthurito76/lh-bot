const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const cavaAnswer = () => {
  const answer = []
answer.push(utils.toText('Ca va être la fête à LH !'))
 answer.push(utils.toText('Pour le programme renseigne-toi auprès de la mairie, je ne peux pas tout connaître'))	
  answer.push(utils.toImage('http://arthurfortin.fr/images/geant.jpg'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = cavaAnswer