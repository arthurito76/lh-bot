const utils = require('./util.js')
const promenadeAnswer = () => {
  const answer = []
  answer.push(utils.toText('La plus zen des promenades c\est aux Jardins Suspendus. Un vrai coin d\'exotisme au coeur de la ville'))
  answer.push(utils.toImage('http://www.lehavre.fr/sites/all/files/imagecache/645x320/articles/_mea0063_0.jpg'))
   answer.push(utils.toText('Il y a aussi la forêt de Montgeon, une forêt en pleine ville c\'est bath non ?'))
answer.push(utils.toImage('http://www.lehavre.fr/sites/all/files/imagecache/645x320/articles/bando-foret-de-montgeon-645.jpg'))
   return Promise.resolve(answer)
}
module.exports = promenadeAnswer