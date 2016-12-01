const _ = require('lodash') 
const utils = require('./util.js')
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
 if (!RESTOINFO) { return Promise.resolve([utils.toText('De quel restaurant parlez vous?')])}
console.log(RESTOINFO)
const object =_.find(datas, data => data.name === RESTOINFO.raw) 
console.log(object)
if (!object) { return Promise.resolve([utils.toText('Je ne trouve pas ce resto')])}
return Promise.resolve([utils.toText('Je connais ce restaurant il est situé ' + object.location)])
} 
module.exports = findresto