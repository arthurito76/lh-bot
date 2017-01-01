const tagAnswer = (CATEGORIE, SPECIALITIES, CUSTOMLOCATION, DETAIL) => { 

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

if (goodPlaces.length && DETAIL.length) {
    DETAIL.forEach(tag => {
       const match = fuzzyLocation.get(tag.raw);
       if (match.distance > 0.8) {
         goodPlaces = _.filter(goodPlaces, place => place.detailsTag.indexOf(match.value) !== -1)
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
 for (var i = 0, len = goodPlaces.length; i < len; i++) {  
answer.push(utils.toText(goodPlaces[i].name + ' situé à ' + goodPlaces[i].location) ) 
answer.push(utils.toText('mon avis : ' + goodPlaces[i].avis) ) 
}
return Promise.resolve(answer) 
 
}

module.exports = tagAnswer