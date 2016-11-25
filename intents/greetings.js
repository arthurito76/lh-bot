const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGreetings = () => {
  const answer = []
answer.push(utils.toText('Hello!'))
 answer.push(utils.toText('Salut toi mon bézot'))	
  answer.push(utils.toText('A va ti ?'))	
    answer.push(utils.toText('yo'))	
  return Promise.resolve(random(answer))
  
}
module.exports = getGreetings