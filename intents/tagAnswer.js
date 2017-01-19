const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')
const fuzzyLocation = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.locationTag];
}, []));
const fuzzyNourriture = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.nourrituretag];
}, []));
const fuzzyBoisson = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.boissonstag];
}, []));
const fuzzyType = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.typetag];
}, []));
const fuzzyAnimation = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.animationtag];
}, []));
const fuzzyMusique = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.musiquetag];
}, []));
const fuzzyAmenagement = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.aménagementtag];
}, []));
const fuzzyOuverture = new Fuzzy(datas.reduce((prev, current) => {
 return [...prev, ...current.ouverturetag];
}, []));
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const tagAnswer = (ENTITIES, USER) => { 

if (!ENTITIES.nourritureType.length && !ENTITIES.boissonType.length &&!ENTITIES.typeType.length ) { return Promise.resolve([utils.toText('Que veux-tu boire ou manger exactement ?')])}

 var goodPlaces = []
ENTITIES.nourritureType.forEach(tag => {
     const match = fuzzyNourriture.get(tag.raw);
     if (match.distance > 0.8) {
       goodPlaces = _.filter(datas, place => place.nourrituretag.indexOf(match.value) !== -1)
     }
 })

if (goodPlaces.length && ENTITIES.boissonType.length) {
    ENTITIES.boissonType.forEach(tag => {
       const match = fuzzyBoisson.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.boissonstag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.typeType.length) {
    ENTITIES.typeType.forEach(tag => {
       const match = fuzzyType.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.typetag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.animationType.length) {
    ENTITIES.animationType.forEach(tag => {
       const match = fuzzyAnimation.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.animationtag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.musiqueType.length) {
    ENTITIES.musiqueType.forEach(tag => {
       const match = fuzzyMusique.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.musiquetag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.amenagementType.length) {
    ENTITIES.amenagementType.forEach(tag => {
       const match = fuzzyAmenagement.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.aménagementtag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.ouvertureType.length) {
    ENTITIES.ouvertureType.forEach(tag => {
       const match = fuzzyOuverture.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.ouverturetag.indexOf(match.value) !== -1)
       }
   })
}

if (goodPlaces.length && ENTITIES.locationType.length) {
    ENTITIES.locationType.forEach(tag => {
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
	utils.toButton('page facebook',goodPlaces[i].page , 'openUrl'), //bouton 2
  ]

  cards.push({ title, image, buttons })
}
answer.push(utils.toCarousel(cards))
USER.detailType = null
console.log('coucou achat')
USER.locationType = null
console.log('coucou')
return Promise.resolve(answer) 
}

module.exports = tagAnswer