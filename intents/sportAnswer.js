const utils = require('./util.js')
const sportAnswer = () => {
  const answer = []
answer.push(utils.toText('Sage question. Alors je te conseillerais la piscine des Docks. Grand bassin, balnéo et salle de sport. Le lieu est beau et bien pourvu. '))
answer.push(utils.toImage('http://arthurfortin.fr/images/pisdock.jpeg'))
   return Promise.resolve(answer)
}
module.exports = sportAnswer