const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const Fuzzy = require('fuzzy-matching')
const fuzzyLocation = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.locationTag];
}, []));
const fuzzyDetail = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.detailsTag];
}, []));
const fuzzyActivite = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.tags];
}, []));
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const activiteAnswer = (RESTOINFO, SPECIALITIES, CUSTOMLOCATION, DETAIL, ACTIVITEINFO, ACHATINFO) => {
	 
		if (!ACTIVITEINFO.length) { return Promise.resolve([utils.toText('Que veux-tu faire exactement ?')])}

var goodActivite = []
ACTIVITEINFO.forEach(tag => {
     const match = fuzzyActivite.get(tag.raw);
     if (match.distance > 0.8) {
       goodActivite = _.filter(datas, place => place.tags.indexOf(match.value) !== -1)
     }
 })
 
 if (goodActivite.length && CUSTOMLOCATION.length) {
    CUSTOMLOCATION.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.locationTag.indexOf(match.value) !== -1)
       }
   })
}

if (goodActivite.length && DETAIL.length) {
    DETAIL.forEach(tag => {
       const match = fuzzyDetail.get(tag.raw);
	   console.log(match)
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.detailsTag.indexOf(match.value) !== -1)
       }
   })
}

if (goodActivite.length === 0) {
   const answer = []
answer.push(utils.toText('Je ne sais pas où te diriger mon bézot, je suis désolé'))
 answer.push(utils.toText('Là je n\'ai rien. Peut-être le moment de partir du Havre pour découvrir plus de choses à faire ?'))	
  answer.push(utils.toText('ouhla t\'es dur avec moi. Réessaie si tu veux mais je te préviens : t’es au Havre, pas à New-York '))	
    answer.push(utils.toText('Là je n\'ai rien, mais tu peux envisager une ballade à la plage, ça fait toujours du bien'))	
  return Promise.resolve([random(answer)])
  }


 const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
const cards = []
for (var i = 0, len = goodActivite.length; i < len; i++) {  
  const title = goodActivite[i].name + ' situé à ' + goodActivite[i].location
  const image = goodActivite[i].image
  const buttons = [
    utils.toButton('Lire mon avis', 'lire mon avis sur ' + goodActivite[i].name, 'imBack'), //bouton 1
	utils.toButton('page facebook',goodActivite[i].page , 'openUrl'), //bouton 2
  ]

  cards.push({ title, image, buttons })
}
answer.push(utils.toCarousel(cards))

return Promise.resolve(answer) 
}

module.exports = activiteAnswer