const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const insultesAnswer = () => {
  const answer = []
answer.push(utils.toText('Mais pourquoi tant de haines'))
 answer.push(utils.toText('Est-il nécessaire d\'en arriver là'))	
  answer.push(utils.toText('Je veux aider et je me fais insulter, super'))
   answer.push(utils.toText('pas d\'insultes voyons'))	
  return Promise.resolve([random(answer)])
  
}
module.exports = insultesAnswer