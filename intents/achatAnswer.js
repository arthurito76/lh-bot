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

const nourriture = datas.reduce((prev, current) => {
if (current.nourrituretag) {
return [...prev, ...current.nourrituretag];
} else { return prev }
}, [])

const fuzzyNourriture = new Fuzzy(nourriture);

const random = array => { return array[Math.floor(Math.random() * array.length)] }
const achatAnswer = (ENTITIES, USER) => { 
	 
if (!ENTITIES.produitType.length && !ENTITIES.marqueType.length && !ENTITIES.typeType.length && !ENTITIES.nourritureType.length) { return Promise.resolve([utils.toText('Que veux-tu acheter exactement ? Je n\'ai pas très bien saisi. Parfois le pluriel et les majuscules m\embrouillent les boulons')])}

 var goodAchats = []
 
 // mes variables
var tabProduit = ENTITIES.produitType
var tabMarque = ENTITIES.marqueType
var tabBoisson = ENTITIES.boissonType
var tabNourriture = ENTITIES.nourritureType
 console.log ("là aussi") 
 // <------- Début option 1 (marques + produits)------->
 
if (ENTITIES.produitType.length && ENTITIES.marqueType.length) {
for (var i = 0, len = tabProduit.length; i < len; i++) {	
	if (i==0) {	
 ENTITIES.produitType.forEach(tag => {
     const match = fuzzyProduit.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(datas, place => place.produitstag.indexOf(match.value) !== -1)
     }
 })
 } // fin du IF (i=0)
 else { ENTITIES.produitType.forEach(tag => {
     const match = fuzzyProduit.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(goodAchats, place => place.produitstag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du ELSE
 } // fin du FOR
 
  ENTITIES.marqueType.forEach(tag => {
       const match = fuzzyMarque.get(tag.raw);
	  console.log('...marque!')
       if (match.distance > 0.8) {
         goodAchats = _.filter(goodAchats, place => place.marquetag.indexOf(match.value) !== -1)
       }
   })   
      
} // fin du IF

// <------- Début option 2 (que des marques)------->
    else if (!ENTITIES.produitType.length && ENTITIES.marqueType.length) {
	for (var i = 0, len = tabMarque.length; i < len; i++) {	
	if (i==0) {
 ENTITIES.marqueType.forEach(tag => {
     const match = fuzzyMarque.get(tag.raw);
	 console.log('que marque')
     if (match.distance > 0.8) {
       goodAchats = _.filter(datas, place => place.marquetag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du IF (i=0)
 else { ENTITIES.marqueType.forEach(tag => {
     const match = fuzzyMarque.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(goodAchats, place => place.marquetag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du ELSE
 } // fin du FOR
 
 // <------- Début option 3 (que des produits)------->
     
} else if (ENTITIES.produitType.length && !ENTITIES.marqueType.length) {
	for (var i = 0, len = tabProduit.length; i < len; i++) {	
	if (i==0) {
 ENTITIES.produitType.forEach(tag => {
     const match = fuzzyProduit.get(tag.raw);
	 console.log('que produit')
     if (match.distance > 0.8) {
       goodAchats = _.filter(datas, place => place.produitstag.indexOf(match.value) !== -1)
     }
 })
} // fin du IF (i=0)
 else { ENTITIES.produitType.forEach(tag => {
     const match = fuzzyProduit.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(goodAchats, place => place.produitstag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du ELSE
 } // fin du FOR 
     
} 

// <------- Début option 4 (que le type de lieu)------->

if (!ENTITIES.produitType.length && !ENTITIES.marqueType.length && ENTITIES.typeType.length) {
    ENTITIES.typeType.forEach(tag => {
       const match = fuzzyType.get(tag.raw);
	console.log("et là") 
       if (match.distance > 0.8) {
         goodAchats = _.filter(datas, place => place.typetag.indexOf(match.value) !== -1)
       }
   })
}

// <------- Début option 5 (marques + nourriture)------->
 
if (ENTITIES.nourritureType.length && ENTITIES.marqueType.length && !ENTITIES.produitType.length && !ENTITIES.typeType.length) {
for (var i = 0, len = tabNourriture.length; i < len; i++) {	
	if (i==0) {	
 ENTITIES.nourritureType.forEach(tag => {
     const match = fuzzyNourriture.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(datas, place => place.nourrituretag.indexOf(match.value) !== -1)
     }
 })
 } // fin du IF (i=0)
 else { ENTITIES.nourritureType.forEach(tag => {
     const match = fuzzyNourriture.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(goodAchats, place => place.nourrituretag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du ELSE
 } // fin du FOR
 
  ENTITIES.marqueType.forEach(tag => {
       const match = fuzzyMarque.get(tag.raw);
	  console.log('...marque!')
       if (match.distance > 0.8) {
         goodAchats = _.filter(goodAchats, place => place.marquetag.indexOf(match.value) !== -1)
       }
   })   
      
} // fin du IF

// <------- Début option 6 (que de la nourriture)------->
     
else if (ENTITIES.nourritureType.length && !ENTITIES.marqueType.length &&!ENTITIES.produitType.length && !ENTITIES.typeType.length) {
	for (var i = 0, len = tabNourriture.length; i < len; i++) {	
	if (i==0) {
 ENTITIES.nourritureType.forEach(tag => {
     const match = fuzzyNourriture.get(tag.raw);
	 console.log('que bouffe à acheter')
     if (match.distance > 0.8) {
       goodAchats = _.filter(datas, place => place.nourrituretag.indexOf(match.value) !== -1)
     }
 })
} // fin du IF (i=0)
 else { ENTITIES.nourritureType.forEach(tag => {
     const match = fuzzyNourriture.get(tag.raw);
     if (match.distance > 0.8) {
       goodAchats = _.filter(goodAchats, place => place.nourrituretag.indexOf(match.value) !== -1)
     }
 })
 
 } // fin du ELSE
 } // fin du FOR 
     
} 

if (goodAchats.length && ENTITIES.ouvertureType.length) {
    ENTITIES.ouvertureType.forEach(tag => {
       const match = fuzzyOuverture.get(tag.raw);
       if (match.distance > 0.8) {
         goodAchats = _.filter(goodAchats, place => place.ouverturetag.indexOf(match.value) !== -1)
       }
   })
}



if (goodAchats.length && ENTITIES.locationType.length) {
    ENTITIES.locationType.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodAchats = _.filter(goodAchats, place => place.locationTag.indexOf(match.value) !== -1)
       }
   })
}


if (goodAchats.length === 0) {
   const answer = []
answer.push(utils.toText('Je n’ai rien là. L\'activité économique du Havre est difficile tu sais...'))
answer.push(utils.toText('Je n\'ai rien trouvé là mais ça ne veut pas dire que ça n\'existe pas au Havre!'))	
answer.push(utils.toText('Je n’ai rien là.Mais n\'oublie pas : Chaque achat sur Amazon provoque la mort d’un chaton...'))	
  return Promise.resolve([random(answer)])
  }


 const answer = [] 
answer.push(utils.toText('Yes, j\'ai trouvé quelque chose pour toi : ') )
const cards = []
for (var i = 0, len = goodAchats.length; i < len; i++) {  
  const title = goodAchats[i].name + ' situé à ' + goodAchats[i].location
  const image = goodAchats[i].image
  const buttons = [
    utils.toButton('Lire mon avis', 'lire mon avis sur ' + goodAchats[i].name, 'imBack'), //bouton 1
	utils.toButton('page facebook',goodAchats[i].page , 'openUrl'), //bouton 2
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
module.exports = achatAnswer