 const utils = require('./util.js')
const _ = require('lodash')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')
const name = datas.reduce((prev, current) => {
if (current.name) {
console.log(current.name)	
return [...prev, ...current.name];
} else { return prev }
}, [])

const fuzzyName = new Fuzzy(name);

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