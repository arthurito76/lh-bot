const _ = require('lodash') 
const datas = require('./data.js') 
const findresto = (RESTOINFO) => { 
if (!RESTOINFO) { return Promise.reject('Quel resto ?')}
console.log(RESTOINFO)
const object = _.find (datas, data => data.name === RESTOINFO.raw) 
console.log(object)
} 
module.exports = findresto