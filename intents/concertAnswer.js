const utils = require('./util.js')
const concertAnswer = () => {
  const answer = []
  answer.push(utils.toText('Si tu cherches un bon concert vas sur ce site'))
   answer.push(utils.toText('http://www.infoconcert.com/ville/le-havre-2002/concerts.html'))
   return Promise.resolve(answer)
}
module.exports = concertAnswer