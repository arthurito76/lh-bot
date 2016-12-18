const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const tagAnswer = (RESTOINFO, TAGINFO) => {
	 
		if (!TAGINFO) { return Promise.resolve([utils.toText('Précise ta recherche')])}

const goodPlaces = _.filter(datas, place => place.tags.indexOf(TAGINFO.raw) !== -1)

if (goodPlaces.length === 0) {
  return Promise.resolve([utils.toText('j\'ai rien en stock bézot')]))
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