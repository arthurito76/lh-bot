const _ = require('lodash') 
const fuzzy = require('clj-fuzzy') 
const utils = require('./util.js')
const datas = require('./data.js') 
const getEntities = require('../getEntities.js')
const findresto = (ENTITIES, USER) => { 
 if (!ENTITIES.restaurantName) { return Promise.resolve([utils.toText('De quel lieux parles-tu ?')])}
const object =_.find(datas, data => fuzzy.metrics.jaro_winkler(data.name, ENTITIES.restaurantName.raw) > 0.8)
console.log(object)
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