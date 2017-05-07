const utils = require('./util.js')
const getEntities = require('../getEntities.js')
console.log (getEntities)
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const merciAnswer = (ENTITIES, USER) => {
  const answer = []
answer.push(utils.toText('Ca me fait plaisir ;-)'))
 answer.push(utils.toText('J\'aime faire connaître les bons plan du LH'))	
  answer.push(utils.toText('De rien mon bézot'))	
  
USER.detailType = null
console.log('coucou achat')
USER.locationType = null
console.log('coucou')
USER.ouvertureType = null
 USER.marqueType = null
  return Promise.resolve([random(answer)])
}
module.exports = merciAnswer