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
 const tagAnswer = (RESTOINFO, SPECIALITIES, CUSTOMLOCATION) => { 

if (!SPECIALITIES.length) { return Promise.resolve([utils.toText('Que veux-tu boire ou manger exactement ?')])}
 

 var goodPlaces = []
SPECIALITIES.forEach(tag => {
     const match = fuzzySpecialities.get(tag.raw);
     if (match.distance > 0.8) {
       goodPlaces = _.filter(datas, place => place.tags.indexOf(match.value) !== -1)
     }
 })
 
 

if (goodPlaces.length && CUSTOMLOCATION.length) {
    CUSTOMLOCATION.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.locationTag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length === 0) {
   const answer = []
answer.push(utils.toText('J\'ai pas ça mon bézot, les lieux de vie ne sont pléthores non plus au Havre'))
 answer.push(utils.toText('Non désolé, essaie de reformuler peut-être. Je ne veux pas que tu meurs de soif ou de faim'))	
  answer.push(utils.toText('ouhla t\'es dur avec moi. Réessaie si tu veux mais n\'oublie pas que je ne suis qu\'un petit robot. Pas Bacchus'))	
    answer.push(utils.toText('j\'ai pas ça en stock mais je vais chercher parmi mes connaissances épicuriennes'))	
  return Promise.resolve([random(answer)])
  }

  const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
const cards = []
for (var i = 0, len = goodPlaces.length; i < len; i++) {  
  const title = goodPlaces[i].name + ' situé à ' + goodPlaces[i].location
  const image = goodPlaces[i].image
  const buttons = [
    utils.toButton('Lire mon avis', 'lire mon avis sur ' + goodPlaces[i].name, 'imBack'), //bouton 1
    utils.toButton('Titre du bouton', 'www.google.fr', 'openUrl'), //bouton 2
  ]

  cards.push({ title, image, buttons })
}
answer.push(toCarousel(cards))

return Promise.resolve(answer) 

module.exports = tagAnswer