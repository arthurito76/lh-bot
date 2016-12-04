const utils = require('./util.js')
const spaAnswer = () => {
  const answer = []
answer.push(utils.toText('Alors l\'hôtel 4 étoiles Vent d\'Ouest en propose un haut de gamme'))
answer.push(utils.toImage('http://arthurfortin.fr/images/vent.jpeg'))
answer.push(utils.toText('Et la piscine des Docks en propose en plus d\'autres douceurs comme la balnéo et le hammam'))
answer.push(utils.toImage('http://arthurfortin.fr/images/pisdock.jpeg'))
   return Promise.resolve(answer)
}
module.exports = spaAnswer