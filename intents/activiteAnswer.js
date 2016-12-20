const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const activiteAnswer = (RESTOINFO, TAGINFO, ACTIVITEINFO) => {
	 
		if (!ACTIVITEINFO) { return Promise.resolve([utils.toText('Que veux-tu faire exactement ?')])}

const goodPlace = _.filter(datas, place => ACTIVITEINFO.every(tag => place.tags.indexOf(tag.raw) !== -1))

if (goodPlace.length === 0) {
   const answer = []
answer.push(utils.toText('Je ne sais pas où te diriger mon bézot, je suis désolé'))
 answer.push(utils.toText('Là je n\'ai rien. Peut-être le moment de partir du Havre pour découvrir plus de choses à faire ?'))	
  answer.push(utils.toText('ouhla t\'es dur avec moi. Réessaie si tu veux mais je te préviens : t’es au Havre, pas à New-York '))	
    answer.push(utils.toText('Là je n\'ai rien, mais tu peux envisager une ballade à la plage, ça fait toujours du bien'))	
  return Promise.resolve([random(answer)])
  }


const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
 for (var i = 0, len = goodPlace.length; i < len; i++) {  
answer.push(utils.toText(goodPlace[i].name + ' situé à ' + goodPlace[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodPlace[i].avis) ) 
}
return Promise.resolve(answer) 
 
}

module.exports = activiteAnswer