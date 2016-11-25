const utils = require('./util.js')
const saladeAnswer = () => {
  const answer = []
answer.push(utils.toImage('http://www.aperorestodisco.com/DOCS/photos/5079/bar-restaurant-le-havre-l-eau-tarie-5079-2.jpeg.jpg'))
answer.push(utils.toText('une bonne salade!'))
   return Promise.resolve(answer)
}
module.exports = saladeAnswer