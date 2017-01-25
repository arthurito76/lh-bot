const _ = require('lodash') 
const Fuzzy = require('fuzzy-matching') 
const utils = require('./util.js')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const resto = datas.reduce((prev, current) => {
if (current.name) {
return [...prev, ...current.name];
} else { return prev }
}, [])
const fuzzyResto = new Fuzzy(resto);

const findresto = (RESTOINFO) => { 
console.log('1') 
 if (!ENTITIES.restaurantName) { return Promise.resolve([utils.toText('De quel lieux parles-tu ?')])}
 
 ENTITIES.restaurantName.forEach(tag => {
   const match = fuzzyResto.get(tag.raw);
   console.log ('2')
       if (match.distance > 0.8) {
        const object = _.filter(datas, place => place.name.indexOf(match.value) !== -1)
		}
		}
		console.log ('3')
if (!object) { return Promise.resolve([utils.toText('Je ne trouve pas ce resto mais je vais me renseigner')])}
const answer = []
  answer.push(utils.toText('localisation ' + object.location))
  answer.push(utils.toText('sa page facebook: ' + object.page))
  answer.push(utils.toText('avis : ' + object.avis))
   return Promise.resolve(answer)

const goodPlaces = _.filter(datas, place => place.tags.indexOf(RESTOINFO.raw) !== -1)
return Promise.resolve(goodPlaces)
   
} 
module.exports = findresto