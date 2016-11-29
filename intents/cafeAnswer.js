const utils = require('./util.js')
const cafeAnswer = () => {
  const answer = []
answer.push(utils.toText('Pour un bon petit caf je te conseillerais Wiliamsburg. Ses petites douceurs sucrées sont délicieuses.'))
 answer.push(utils.toText('Colombus avenue Coty est pas mal non plus '))	
	
  return Promise.resolve(answer)
}
module.exports = cafeAnswer