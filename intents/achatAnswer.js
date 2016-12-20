const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const achatAnswer = (RESTOINFO, TAGINFO, ACTIVITEINFO, ACHATINFO) => {
	 
		if (!ACHATINFO) { return Promise.resolve([utils.toText('Précise ton activité')])}

const goodAchat = _.filter(datas, place => ACHATINFO.every(tag => place.tags.indexOf(tag.raw) !== -1))

if (goodAchat.length === 0) {
   const answer = []
answer.push(utils.toText('J\'ai pas ça mon bézot'))
 answer.push(utils.toText('Non désolé, essaie de reformuler peut-être'))	
  answer.push(utils.toText('ouhla t\'es dur avec moi. Réessaie si tu veux '))	
    answer.push(utils.toText('j\'ai pas ça en stock mais je vais chercher'))	
  return Promise.resolve([random(answer)])
  }


const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
 for (var i = 0, len = goodAchat.length; i < len; i++) {  
answer.push(utils.toText(goodAchat[i].name + ' situé à ' + goodAchat[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodAchat[i].avis) ) 
}
return Promise.resolve(answer) 
 
}

module.exports = achatAnswer