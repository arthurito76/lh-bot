const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const tagAnswer = (RESTOINFO, TAGINFO) => {
	 
		if (!TAGINFO) { return Promise.resolve([utils.toText('Précise ta recherche')])}

const goodPlaces = _.filter(datas, place => place.tags.indexOf(TAGINFO.raw) !== -1)

if (goodPlaces.length === 0) {
  return Promise.resolve('Oups, rien trouvé :-(')
}

if (goodPlaces.length > 1) {

 for (var i = 0; i <  goodPlaces.length;  i++) { 

const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') ) 
answer.push(utils.toText(goodPlaces[i].name + ' situé à ' + goodPlaces[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodPlaces[i].avis) ) 
return Promise.resolve(answer) 
console.log(answer)
}}
 
}

module.exports = tagAnswer