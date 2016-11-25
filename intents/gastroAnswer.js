const utils = require('./util.js')
const gastroAnswer = () => {
  const answer = []
  answer.push(utils.toText('Au Havre on a un bon gastro, il s\'appelle Jean-Luc Tartarin'))
   answer.push(utils.toText('2 étoiles au Michelin, excusez du peu'))
answer.push(utils.toImage('http://www.faimdelyon.com/wp-content/uploads/2012/03/tartarin-52512.jpg'))
   return Promise.resolve(answer)
}
module.exports = gastroAnswer