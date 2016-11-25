const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const cavaAnswer = () => {
  const answer = []
answer.push(utils.toText('Ca roule ça roule. 2 ou 3 boulons qui se rayent mais c\'est l\'air de la mer qui rouillent ma carcasse'))
 answer.push(utils.toText('Ca va ma foi, content de te voir'))	
  answer.push(utils.toText('C\'est gentil de prendre de mes nouvelles !'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = cavaAnswer