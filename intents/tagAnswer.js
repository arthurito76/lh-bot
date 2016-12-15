const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const tagAnswer = (RESTOINFO, TAGINFO) => {
	
	
		if (!TAGINFO) { return Promise.resolve([utils.toText('Précise ta recherche')])}

const goodPlaces = _.filter(datas, place => place.tags.indexOf(TAGINFO.raw) !== -1)

if (goodPlaces.length === 0) {
  return Promise.resolve('Oups, rien trouvé :-(')
}

console.log(goodPlaces) 
 
const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
answer.push(utils.toText(goodPlaces[0].name + ' situé à ' + goodPlaces[0].location) )
answer.push(utils.toText('mon avis : ' + goodPlaces[0].avis) ) 
}

module.exports = tagAnswer