const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const tagAnswer = (RESTOINFO, TAGINFO) => {
	 
		if (!TAGINFO) { return Promise.resolve([utils.toText('Précise ta recherche')])}

const goodPlaces = _.filter(datas, place => TAGINFO.every(tag => place.tags.indexOf(TAGINFO.raw) !== -1))

if (goodPlaces.length === 0) {
   const answer = []
answer.push(utils.toText('J\'ai pas ça mon bézot'))
 answer.push(utils.toText('Non désolé, essaie de reformuler peut-être'))	
  answer.push(utils.toText('ouhla t\'es dur avec moi. Réessaie si tu veux '))	
    answer.push(utils.toText('j\'ai pas ça en stock mais je vais chercher'))	
  return Promise.resolve([random(answer)])
  }


const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
 for (var i = 0, len = goodPlaces.length; i < len; i++) {  
answer.push(utils.toText(goodPlaces[i].name + ' situé à ' + goodPlaces[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodPlaces[i].avis) ) 
}
return Promise.resolve(answer) 
 
}

module.exports = tagAnswer