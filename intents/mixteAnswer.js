const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const Fuzzy = require('fuzzy-matching')
const fuzzyLocation = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.locationTag];
}, []));

const fuzzyActivite = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.tags];
}, []));
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const mixteAnswer = (RESTOINFO, SPECIALITIES, CUSTOMLOCATION, ACTIVITEINFO, ACHATINFO) => {

var goodMixte = []
ACTIVITEINFO.forEach(tag => {
     const match = fuzzyActivite.get(tag.raw);
     if (match.distance > 0.7) {
       goodMixte = _.filter(datas, place => place.tags.indexOf(match.value) !== -1)
     }
 })
 
 if (goodMixte.length && SPECIALITIES.length) {
    SPECIALITIES.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
	   console.log (match)
       if (match.distance > 0.7) {
         goodMixte = _.filter(goodMixte, place => place.tags.indexOf(match.value) !== -1)
       }
   })
}


if (goodMixte.length === 0) {
   const answer = []
answer.push(utils.toText('Pour faire tout ça je n\'ai pas de réponse...'))
	
  return Promise.resolve([random(answer)])
  }


 const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
const cards = []
for (var i = 0, len = goodMixte.length; i < len; i++) {  
  const title = goodMixte[i].name + ' situé à ' + goodMixte[i].location
  const image = goodMixte[i].image
  const buttons = [
    utils.toButton('Lire mon avis', 'lire mon avis sur ' + goodMixte[i].name, 'imBack'), //bouton 1
	utils.toButton('page facebook',goodMixte[i].page , 'openUrl'), //bouton 2
  ]

  cards.push({ title, image, buttons })
}
answer.push(utils.toCarousel(cards))

return Promise.resolve(answer) 
}

module.exports = mixteAnswer