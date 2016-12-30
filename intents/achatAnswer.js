const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const Fuzzy = require('fuzzy-matching')
const fuzzyLocation = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.locationTag];
}, []));

const fuzzySpecialities = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.tags];
}, []));
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const achatAnswer = (RESTOINFO, SPECIALITIES, ACTIVITEINFO, ACHATINFO, CUSTOMLOCATION) => {
	console.log(ACHATINFO)
	 
		if (!ACHATINFO.length) { return Promise.resolve([utils.toText('Précise ce que tu veux acheter ?')])}

var goodAchat = []
ACHATINFO.forEach(tag => {
     const match = fuzzySpecialities.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchat = _.filter(datas, place => place.tags.indexOf(match.value) !== -1)
     }
 })
 
 if (goodAchat.length && CUSTOMLOCATION.length) {
    CUSTOMLOCATION.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodAchat = _.filter(goodAchat, place => place.locationTag.indexOf(match.value) !== -1)
       }
   })
}

if (goodAchat.length === 0) {
   const answer = []
answer.push(utils.toText('Je n’ai rien là. L\'activité économique du Havre est difficile tu sais...'))
answer.push(utils.toText('Je n\'ai rien trouvé là mais ça ne veut pas dire que ça n\'existe pas au Havre!'))	
answer.push(utils.toText('Je n’ai rien là.Mais n\'oublie pas : Chaque achat sur Amazon provoque la mort d’un chaton...'))	
  return Promise.resolve([random(answer)])
  }


 const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
const cards = []
for (var i = 0, len = goodAchat.length; i < len; i++) {  
  const title = goodAchat[i].name + ' situé à ' + goodAchat[i].location
  const image = goodAchat[i].image
  const buttons = [
    utils.toButton('Lire mon avis', 'lire mon avis sur ' + goodAchat[i].name, 'imBack'), //bouton 1
	utils.toButton('page facebook',goodAchat[i].page , 'openUrl'), //bouton 2
  ]

  cards.push({ title, image, buttons })
}
answer.push(utils.toCarousel(cards))

return Promise.resolve(answer) 
}

module.exports = achatAnswer