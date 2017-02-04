 const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')
const fuzzyName = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, current.name];
}, []));

 const avis = (ENTITIES, USER) => {
  
  if (!ENTITIES.restaurantName) { return Promise.resolve([utils.toText('xxxxxxxxx')])}

var RESTOINFO = ENTITIES.restaurantName
console.log(RESTOINFO.length)

  goodPlaces = []
  
  const match = fuzzyName.get(RESTOINFO.raw);
  console.log(match)
  if (match.distance > 0.5) {
    goodPlaces = _.filter(datas, place => place.name === match.value)
  }
 
   
   var answer = []
   goodPlaces.forEach(place => {
      answer.push(utils.toText('mon avis sur ' + place.name + ' : ' + place.avis) )  
   })
   
   return Promise.resolve(answer)
}  

module.exports = avis