const _ = require('lodash') 
const utils = require('./util.js')
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
 if (!RESTOINFO) { return Promise.resolve([utils.toText('De quel restaurant parlez vous?')])}
else  { 
console.log(RESTOINFO)
const object = _.find (datas, data => data.name === RESTOINFO.raw) 
console.log(object)
} } 
module.exports = findresto