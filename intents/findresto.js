const _ = require('lodash') 
const fuzzy = require('clj-fuzzy') 
const utils = require('./util.js')
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
console.log(datas) 
 if (!RESTOINFO) { return Promise.resolve([utils.toText('De quel restaurant parlez vous?')])}
const object =_.find(datas, data => fuzzy.metrics.jaro_winkler(data.name, RESTOINFO.raw) > 0.8)
console.log(object)
if (!object) { return Promise.resolve([utils.toText('Je ne trouve pas ce resto')])}
const answer = []
  answer.push(utils.toText('localisation ' + object.location))
  answer.push(utils.toText('sa page facebook: ' + object.page))
   return Promise.resolve(answer)
} 
module.exports = findresto