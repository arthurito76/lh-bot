const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const byeAnswer = () => {
  const answer = []
answer.push(utils.toText('Boujou bien !'))
 answer.push(utils.toText('Boujou, on se revoit bientôt !'))	
  answer.push(utils.toText('Boujou mon bézot'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = byeAnswer