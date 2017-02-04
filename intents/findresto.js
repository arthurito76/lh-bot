const _ = require('lodash')  
const utils = require('./util.js')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const Fuzzy = require('fuzzy-matching')
const fuzzyName = new Fuzzy(datas.reduce((prev, current) => {
return [...prev, current.name];
}, []));

const findresto = (ENTITIES, USER) => {
	 
  if (!ENTITIES.restaurantName) { return Promise.resolve([utils.toText('Ce lieu ne me dit rien...')])}

var RESTOINFO = ENTITIES.restaurantName
console.log(RESTOINFO)

  goodPlaces = []
  
  const match = fuzzyName.get(RESTOINFO.raw);
  console.log(match)
  if (match.distance > 0.5) {
    goodPlaces = _.filter(datas, place => place.name === match.value)
  }
  
const answer = []
 goodPlaces.forEach(place => {
  answer.push(utils.toText('localisation ' + place.location))
  answer.push(utils.toText('sa page facebook: ' + place.page))
  answer.push(utils.toText('avis : ' +  place.avis))
   })
   return Promise.resolve(answer)
  
} 
module.exports = findresto