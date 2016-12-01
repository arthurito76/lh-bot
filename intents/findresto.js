const _ = require('lodash') 
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
console.log(RESTOINFO)
const object = _.find (datas, data => data.name === RESTOINFO.raw) 
console.log(object)
return Promise.resolve([u.toText('De quel restaurant parlez vous?')])
} 
module.exports = findresto