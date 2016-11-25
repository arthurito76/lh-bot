const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const boitesAnswer = () => {
  const answer = []
answer.push(utils.toText('Désolé, pour la vie nocturne il faut quitter le Havre'))
 answer.push(utils.toText('Salut toi mon bézot'))	
  answer.push(utils.toText('Cela n\'est pas disponible au Havre'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = boitesAnswer