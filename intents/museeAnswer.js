const utils = require('./util.js')
const museeAnswer = () => {
  const answer = []
answer.push(utils.toText('Le MUMA est notre musée. Tu y trouveras une belle collections d\'impressionnistes. A titre d\'anecdote le Musée fut à l\'origine la 1ère Maison de la Culture'))
 answer.push(utils.toText('Pour le contemporain il y a le Portique'))
  answer.push(utils.toText('Et on a un gros réseau de bars et boutiques qui organisent des expos toute l\'année donc veille !'))
  return Promise.resolve(answer)
}
module.exports = museeAnswer