const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const achatAnswer = (RESTOINFO, TAGINFO, ACTIVITEINFO, ACHATINFO) => {
	 
		if (!ACHATINFO.length) { return Promise.resolve([utils.toText('Précise ce que tu veux acheter ?')])}

const goodAchat = _.filter(datas, place => ACHATINFO.every(tag => place.tags.indexOf(tag.raw) !== -1))

if (goodAchat.length === 0) {
   const answer = []
answer.push(utils.toText('Je n’ai rien là. L\'activité économique du Havre est difficile tu sais...'))
answer.push(utils.toText('Je n\'ai rien trouvé là mais ça ne veut pas dire que ça n\'existe pas au Havre!'))	
answer.push(utils.toText('Je n’ai rien là.Mais n\'oublie pas : Chaque achat sur Amazon provoque la mort d’un chaton...'))	
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