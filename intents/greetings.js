const utils = require('./util.js')
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGreetings = () => {
  const answer = []
answer.push(utils.toText('Hello!','Yo','Coucou toi','A va ti ?','Salut bézot','Hey !'))
   return Promise.resolve([random(answer)])
}
module.exports = getGreetings