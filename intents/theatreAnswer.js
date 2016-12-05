const utils = require('./util.js')
const theatreAnswer = () => {
  const answer = []
  answer.push(utils.toText('Pour du théâtre je ne peux que te conseiller le Volcan à Niemeyer, Scène Nationale'))
answer.push(utils.toImage('http://arthurfortin.fr/images/volc.jpeg'))
  answer.push(utils.toText('Il y a aussi le THV, à l\'Hôtel de Ville'))
answer.push(utils.toImage('http://arthurfortin.fr/images/thv.jpeg'))
  
   return Promise.resolve(answer)
}
module.exports = theatreAnswer