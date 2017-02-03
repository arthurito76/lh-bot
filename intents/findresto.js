const _ = require('lodash') 
const fuzzy = require('clj-fuzzy') 
const utils = require('./util.js')
const datas = require('./data.js') 
console.log(datas)
const getEntities = require('../getEntities.js')
const findresto = (ENTITIES, USER) => { 
 console.log(ENTITIES.restaurantName)
 if (!ENTITIES.restaurantName) { return Promise.resolve([utils.toText('De quel lieux parles-tu ?')])}
  console.log('yo')
const object =_.find(datas, data => fuzzy.metrics.jaro_winkler(data.name, ENTITIES.restaurantName.raw) > 0.7)
console.log(object)
if (!object) { return Promise.resolve([utils.toText('Je ne trouve pas ce resto mais je vais me renseigner')])}
const answer = []
  answer.push(utils.toText('localisation ' + object.location))
  answer.push(utils.toText('sa page facebook: ' + object.page))
  answer.push(utils.toText('avis : ' + object.avis))
   return Promise.resolve(answer)

const goodPlaces = _.filter(datas, place => place.tags.indexOf(ENTITIES.restaurantName.raw) !== -1)
return Promise.resolve(goodPlaces)
   
} 
module.exports = findresto