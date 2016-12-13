const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const tagAnswer = (RESTOINFO, RESTAURANTTYPE, ACTIVITE, COMMODITE, ACHAT, TAGINFO) => {
	
	console.log (tagAnswer)
		if (!TAGINFO) { return Promise.resolve([utils.toText('Précise ta recherche')])}

const goodPlaces = _.filter(datas, place => place.tags.indexOf(TAGINFO.raw) !== -1)

if (goodPlaces.length === 0) {
  return Promise.resolve('Oups, rien trouvé :-(')
}
 
const answer = [] 
return Promise.resolve('J\'ai trouvé un restaurant qui te conviendra! C\'est le' + goodPlaces[0].name + 'situé à' + goodPlaces[0].location) 
}

module.exports = tagAnswer