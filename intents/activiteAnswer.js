const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')

const produit = datas.reduce((prev, current) => {
if (current.produitstag) {
return [...prev, ...current.produitstag];
} else { return prev }
}, [])
const fuzzyProduit = new Fuzzy(produit);

const musique = datas.reduce((prev, current) => {
if (current.musiquetag) {
return [...prev, ...current.musiquetag];
} else { return prev }
}, [])
const fuzzymusique = new Fuzzy(musique);

const location = datas.reduce((prev, current) => {
if (current.locationTag) {
return [...prev, ...current.locationTag];
} else { return prev }
}, [])
const fuzzyLocation = new Fuzzy(location);
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
const random = array => { return array[Math.floor(Math.random() * array.length)] }
const activiteAnswer = (ENTITIES, USER) => { 
	 
if (!ENTITIES.animationType.length) { return Promise.resolve([utils.toText('Que veux-tu faire exactement ?')])}


 var goodActivite = []
 var tabAnimation = ENTITIES.animationType
 
for (var i = 0, len = tabAnimation.length; i < len; i++) {	
// 1 seule entité
if (i==0) {
 ENTITIES.animationType.forEach(tag => {
     const match = fuzzyAnimation.get(tag.raw);
     if (match.distance > 0.8) {
       goodActivite = _.filter(datas, place => place.animationtag.indexOf(match.value) !== -1)
	   console.log ("first :")
	   console.log (goodActivite.length)
     }
 })
 } // Fin du IF --> plusieurs entités 
 

 } // fin du FOR

if (goodActivite.length && ENTITIES.typeType.length) {
    ENTITIES.typeType.forEach(tag => {
       const match = fuzzyType.get(tag.raw);
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.typetag.indexOf(match.value) !== -1)
       }
   })
}


if (goodActivite.length && ENTITIES.ouvertureType.length) {
    ENTITIES.ouvertureType.forEach(tag => {
       const match = fuzzyOuverture.get(tag.raw);
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.ouverturetag.indexOf(match.value) !== -1)
       }
   })
}

if (goodActivite.length && ENTITIES.musiqueType.length) {
    ENTITIES.musiqueType.forEach(tag => {
       const match = fuzzymusique.get(tag.raw);
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.musiquetag.indexOf(match.value) !== -1)
       }
   })
}

if (goodActivite.length && ENTITIES.locationType.length) {
    ENTITIES.locationType.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodActivite = _.filter(goodActivite, place => place.locationTag.indexOf(match.value) !== -1)
       }
   })
}

console.log ("Third :")
console.log (goodActivite.length)
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