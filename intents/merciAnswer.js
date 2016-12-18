const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const merciAnswer = () => {
  const answer = []
answer.push(utils.toText('Ca me fait plaisir ;-)'))
 answer.push(utils.toText('J\'aime faire connaître les bons plan du LH'))	
  answer.push(utils.toText('De rien mon bézot'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = merciAnswer