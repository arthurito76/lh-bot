const utils = require('./util.js')
const italienAnswer = () => {
  const answer = []
  answer.push(utils.toText('Alors côté épicerie tu as l\'italien qui se trouve aux Halles'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/picco.jpg'))
  answer.push(utils.toText('Sinon pour manger tu as Al Dente'))
  answer.push(utils.toImage('http://arthurfortin.fr/images/dente.jpg'))
  
   return Promise.resolve(answer)
}
module.exports = italienAnswer