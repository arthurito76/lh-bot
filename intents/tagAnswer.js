const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')
const fuzzyLocation = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, ...current.locationTag];
}, []));
const nourriture = datas.reduce((prev, current) => {
if (current.nourrituretag) {
return [...prev, ...current.nourrituretag];
} else { return prev }
}, [])

const fuzzyNourriture = new Fuzzy(nourriture);

const boisson = datas.reduce((prev, current) => {
if (current.boissonstag) {
return [...prev, ...current.boissonstag];
} else { return prev }
}, [])
const fuzzyBoisson = new Fuzzy(boisson);

const type = datas.reduce((prev, current) => {
if (current.typetag) {
return [...prev, ...current.typetag];
} else { return prev }
}, [])
const fuzzyType = new Fuzzy(type);

const animation = datas.reduce((prev, current) => {
if (current.animationtag) {
return [...prev, ...current.animationtag];
} else { return prev }
}, [])
const fuzzyAnimation = new Fuzzy(animation);

const musique = datas.reduce((prev, current) => {
if (current.musiquetag) {
return [...prev, ...current.musiquetag];
} else { return prev }
}, [])
const fuzzyMusique = new Fuzzy(musique);

const amenagement = datas.reduce((prev, current) => {
if (current.amenagementtag) {
return [...prev, ...current.amenagementtag];
} else { return prev }
}, [])
const fuzzyAmenagement = new Fuzzy(amenagement);

const ouverture = datas.reduce((prev, current) => {
if (current.ouverturetag) {
return [...prev, ...current.ouverturetag];
} else { return prev }
}, [])
const fuzzyOuverture = new Fuzzy(ouverture);

const marque = datas.reduce((prev, current) => {
if (current.marquetag) {
return [...prev, ...current.marquetag];
} else { return prev }
}, [])
const fuzzyMarque = new Fuzzy(marque);

const livraison = datas.reduce((prev, current) => {
if (current.livraisontag) {
return [...prev, ...current.livraisontag];
} else { return prev }
}, [])
const fuzzyLivraison = new Fuzzy(livraison);

const random = array => { return array[Math.floor(Math.random() * array.length)] }
const tagAnswer = (ENTITIES, USER) => { 

if (!ENTITIES.nourritureType.length && !ENTITIES.boissonType.length &&!ENTITIES.typeType.length ) { return Promise.resolve([utils.toText('Que veux-tu boire ou manger exactement ?')])}


 var goodPlaces = []

var ar = [
[ENTITIES.boissonType.length, ENTITIES.boissonType.forEach, fuzzyBoisson, 'boissonstag'],
[ENTITIES.nourritureType.length, ENTITIES.nourritureType.forEach, fuzzyNourriture, 'nourrituretag'],
[ENTITIES.typeType.length, ENTITIES.typeType.forEach, fuzzyType, 'typetag'],
];

for (var i=0, len=ar.length; i<len; i++) {
    // inner loop applies to sub-arrays
    for (var j=0, len2=ar[i].length; j<len2; j++) {
		
			
		ar[0][1] (tag => {
     const match = ar[0][2].get(tag.raw);
	 console.log('manger et...')
     if (match.distance > 0.8) {
       goodPlaces = _.filter(goodPlaces, place => place. ar[0][3].indexOf(match.value) !== -1)
     }
 })
 
 if ( goodPlaces.length && ar[i][0])
 ar[i][1] (tag => {
       const match = ar[i][2].get(tag.raw);
	  console.log('...boire!')
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place. ar[i][3].indexOf(match.value) !== -1)
       }
   })   		
		
		
    }
}

if (goodPlaces.length && ENTITIES.animationType.length) {
    ENTITIES.animationType.forEach(tag => {
       const match = fuzzyAnimation.get(tag.raw);
	   console.log('l\'animation')
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.animationtag.indexOf(match.value) !== -1)
       }
   })
}


if (goodPlaces.length && ENTITIES.musiqueType.length) {
    ENTITIES.musiqueType.forEach(tag => {
       const match = fuzzyMusique.get(tag.raw);
	   console.log('la zik')
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.musiquetag.indexOf(match.value) !== -1)
       }
   })
}


if (goodPlaces.length && ENTITIES.amenagementType.length) {
    ENTITIES.amenagementType.forEach(tag => {
       const match = fuzzyAmenagement.get(tag.raw);
	   console.log('aménagement')
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.amenagementtag.indexOf(match.value) !== -1)
       }
   })
}


if (goodPlaces.length && ENTITIES.ouvertureType.length) {
    ENTITIES.ouvertureType.forEach(tag => {
       const match = fuzzyOuverture.get(tag.raw);
	   console.log(ouverture)
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.ouverturetag.indexOf(match.value) !== -1)
       }
   })
}



if (goodPlaces.length && ENTITIES.locationType.length) {
    ENTITIES.locationType.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
	   console.log('location')
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
  USER.typeType = null
USER.locationType = null
console.log('annulation 0')
USER.ouvertureType = null
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
USER.typeType = null
USER.locationType = null
console.log('annulation réponses')
USER.ouvertureType = null
return Promise.resolve(answer) 
}

module.exports = tagAnswer