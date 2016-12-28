const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const random = array => { return array[Math.floor(Math.random() * array.length)] }
 const tagAnswer = (RESTOINFO, SPECIALITIES, CUSTOMLOCATION) => { 

if (!SPECIALITIES.length) { return Promise.resolve([utils.toText('Que veux-tu boire ou manger exactement ?')])}

console.log (SPECIALITIES) 

var goodPlaces = _.filter(datas, place => SPECIALITIES.every(tag => place.tags.indexOf(tag.raw) !== -1))
console.log (CUSTOMLOCATION)
if (CUSTOMLOCATION.length) {
	goodPlaces = _.filter(goodPlaces, place => CUSTOMLOCATION.every(tag => place.locationTag.indexOf(tag.raw) !== -1))
	console.log (CUSTOMLOCATION) 
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
 for (var i = 0, len = goodPlaces.length; i < len; i++) {  
answer.push(utils.toText(goodPlaces[i].name + ' situé à ' + goodPlaces[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodPlaces[i].avis) ) 
}
return Promise.resolve(answer) 
 
}

module.exports = tagAnswer