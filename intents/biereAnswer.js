const utils = require('./util.js')
const biereAnswer = () => {
  const answer = []
answer.push(utils.toText('Pour acheter une bonne bière faut aller à la Cave à Bière. En plus tu pourras savourer une expo au passage','Côté bars il y a le Trappiste à Niemeyer qui a le plus grand choix', 'Et l\'Abri Côtier pour la bière et l\'équipe of course '))
  return Promise.resolve(answer)
}
module.exports = biereAnswer