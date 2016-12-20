const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const achatAnswer = (RESTOINFO, TAGINFO, ACTIVITEINFO, ACHATINFO) => {
	 
		if (!ACHATINFO) { return Promise.resolve([utils.toText('Précise ton achat')])}

const goodAchat = _.filter(datas, place => ACHATINFO.every(tag => place.tags.indexOf(tag.raw) !== -1))

if (goodAchat.length === 0) {
   const answer = []
answer.push(utils.toText('L\'activité économique du Havre est difficile tu sais'))	
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