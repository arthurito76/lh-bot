 const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const Fuzzy = require('fuzzy-matching')
const fuzzyNames = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, current.name];
}, []));

 const avis = (RESTOINFO) => {
  
  
  if (!RESTOINFO) { return Promise.resolve([utils.toText('xxxxxxxxx')])}

  goodPlaces = []
  const match = fuzzyNames.get(RESTOINFO.raw);
  console.log(match)
  if (match.distance > 0.8) {
    goodPlaces = _.filter(datas, place => place.name === match.value)
  }
 
   
   var answer = []
   goodPlaces.forEach(place => {
      answer.push(utils.toText('mon avis sur ' + place.name + ' : ' + place.avis) )  
   })
   
   return Promise.resolve(answer)
}  

module.exports = avis