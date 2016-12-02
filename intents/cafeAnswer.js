const utils = require('./util.js')
const cafeAnswer = () => {
  const answer = []
answer.push(utils.toText('Pour un bon petit caf je te conseillerais Wiliamsburg. Ses petites douceurs sucrées sont délicieuses.'))
answer.push(utils.toImage('http://arthurfortin.fr/images/will.jpg'))
 answer.push(utils.toText('Colombus avenue Coty est pas mal non plus '))
 answer.push(utils.toImage('http://arthurfortin.fr/images/columb.jpg'))
 	
	
  return Promise.resolve(answer)
}
module.exports = cafeAnswer